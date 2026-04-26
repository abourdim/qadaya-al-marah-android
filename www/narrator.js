/* ═══════════════════════════════════════════════════════════
   NARRATOR.JS — Audiobook narrator for Qadaya al-Mar'ah
   Features: section-by-section, book mode, karaoke,
   voice/speed/pitch, loop, lock screen, sleep timer
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  if (!('speechSynthesis' in window)) {
    window.narratorTogglePanel = function() {
      if (typeof showToast === 'function') {
        var l = (typeof lang !== 'undefined') ? lang : 'en';
        var msg = l === 'ar' ? 'الراوي غير مدعوم في هذا المتصفح' : l === 'fr' ? 'Narrateur non supporte dans ce navigateur' : 'Narrator not supported in this browser';
        showToast(msg);
      }
    };
    window.narratorPlayPage = window.narratorPlayBook = window.narratorPause = function() {};
    window.narratorStop = window.narratorNext = window.narratorPrev = function() {};
    window.narratorSpeedChange = window.narratorPitchChange = function() {};
    window.narratorLoopChange = window.narratorSleepChange = function() {};
    window.narratorKaraokeToggle = window.narratorAutoScrollToggle = function() {};
    window.narratorDuoToggle = window.narratorVoiceChange = function() {};
    window.narratorPopulateVoices = function() {};
    return;
  }

  const NR_T = {
    ar: { title:'🎧 الراوي', page:'اقرأ هذه الصفحة', book:'اقرأ ككتاب', voice:'الصوت', speed:'السرعة', pitch:'النبرة', loop:'تكرار البطاقة', sleep:'مؤقت النوم', karaoke:'كاريوكي', autoScroll:'تمرير تلقائي', duo:'ثنائي (عربي+فرنسي)', off:'إيقاف', min:'دقيقة', bookDone:'تم الانتهاء من الكتاب', sleepDone:'انتهى مؤقت النوم', sleepSet:'مؤقت النوم:' },
    en: { title:'🎧 Narrator', page:'Read this page', book:'Read as a book', voice:'Voice', speed:'Speed', pitch:'Pitch', loop:'Loop card', sleep:'Sleep timer', karaoke:'Karaoke', autoScroll:'Auto-scroll', duo:'Duo (AR+FR)', off:'Off', min:'min', bookDone:'Book finished', sleepDone:'Sleep timer ended', sleepSet:'Sleep:' },
    fr: { title:'🎧 Narrateur', page:'Lire cette page', book:'Lire comme un livre', voice:'Voix', speed:'Vitesse', pitch:'Tonalite', loop:'Repeter la carte', sleep:'Minuterie', karaoke:'Karaoke', autoScroll:'Defilement auto', duo:'Duo (AR+FR)', off:'Desactive', min:'min', bookDone:'Livre termine', sleepDone:'Minuterie terminee', sleepSet:'Minuterie:' }
  };

  function nrT() { return NR_T[getLang()] || NR_T.en; }

  const STATE = {
    playing:false, paused:false, mode:'page', cardIndex:0, cards:[],
    tabOrder:['about','concepts','heroines'],
    tabIndex:0, loopCount:0, loopCurrent:0, sleepTimer:null, sleepMinutes:0,
    duoTimeout:null, karaokeEnabled:true, autoScroll:true, duoReading:false,
    speed:1, pitch:1, voiceAR:null, voiceEN:null, voiceFR:null
  };

  function getLang() { return document.documentElement.lang || 'ar'; }

  function loadVoices() {
    var voices = speechSynthesis.getVoices(); if (!voices.length) return;
    STATE.voiceAR = findBestVoice(voices, ['Majed','Maged','Google Arabic'], 'ar');
    STATE.voiceEN = findBestVoice(voices, ['Samantha','Daniel','Google UK English'], 'en');
    STATE.voiceFR = findBestVoice(voices, ['Thomas','Amelie','Google French'], 'fr');
  }
  function findBestVoice(voices, priority, langCode) {
    var langVoices = voices.filter(function(v){return v.lang.startsWith(langCode)});
    for (var i=0;i<priority.length;i++){var m=langVoices.find(function(v){return v.name.includes(priority[i])});if(m)return m;}
    return langVoices[0] || null;
  }
  function getVoiceForLang(l) { return l==='ar'?STATE.voiceAR:l==='fr'?STATE.voiceFR:STATE.voiceEN; }
  speechSynthesis.addEventListener('voiceschanged', loadVoices); loadVoices();

  function getActivePanel() { return document.querySelector('.panel.active'); }
  function getActiveTabName() { var btn=document.querySelector('.tab.active'); return btn?btn.dataset.tab:'about'; }

  function extractCards(panel) {
    if (!panel) return [];
    var cards=[], tabName=panel.id.replace('panel-','');
    if (tabName !== 'about') { var title=panel.querySelector('.section-title'),desc=panel.querySelector('.section-desc'); if(title) cards.push({el:title.closest('.panel')||title,text:(title.textContent||'')+'. '+(desc?desc.textContent:''),type:'title'}); }
    if (tabName==='about') { panel.querySelectorAll('.about-disclaimer, .about-author, .about-section').forEach(function(el){var t=cleanText(el.textContent);if(t)cards.push({el:el,text:t,type:'about'});}); }
    else if (tabName==='concepts') { panel.querySelectorAll('.principle-card').forEach(function(el){if(el.style.display==='none')return;var t=el.querySelector('.principle-title'),d=el.querySelector('.principle-desc'),text='';if(t)text+=t.textContent+'. ';if(d)text+=d.textContent+'. ';cards.push({el:el,text:cleanText(text),type:'principle'});}); }
    else if (tabName==='heroines') { panel.querySelectorAll('.anxiety-card').forEach(function(el){cards.push({el:el,text:cleanText(el.textContent),type:'anxiety'});}); }
    else if (tabName==='habits') { panel.querySelectorAll('.habit-item').forEach(function(el){cards.push({el:el,text:cleanText(el.textContent),type:'habit'});}); }
    else if (tabName==='home') { var daily=panel.querySelector('.daily-card'); if(daily) cards.push({el:daily,text:cleanText(daily.textContent),type:'daily'}); }
    return cards;
  }

  function cleanText(text) {
    var clean = text.replace(/\s+/g,' ').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{2190}-\u{21FF}↑↓←→✓]/gu,'').trim();
    clean = clean.replace(/[«»""()[\]{}—–•●◆■▪]/g,' ').replace(/\s+/g,' ');
    clean = clean.replace(/:\s/g,':, ').replace(/;\s/g,';, ').replace(/\s—\s/g,', ').replace(/\.\.\./g,', ').replace(/\s*\n\s*/g,'. ');
    var l = getLang();
    if (l==='fr') clean = clean.replace(/al-Ghazali/gi,'al Razali').replace(/Ghazali/gi,'Razali').replace(/Sheikh/gi,'Cheikh').replace(/Mohammed/gi,'Mohamèd');
    if (l==='en') clean = clean.replace(/al-Ghazali/gi,'al Gah-zah-lee').replace(/Ghazali/gi,'Gah-zah-lee');
    if (l==='ar') clean = clean.replace(/https?:\/\/[^\s]+/g,'').replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,'').replace(/[a-zA-Z]{4,}/g,'');
    return clean.replace(/,\s*,/g,',').replace(/\s+/g,' ').trim();
  }

  var speakGen = 0;
  function speak(text, onEnd) {
    speakGen++; var myGen=speakGen; speechSynthesis.cancel();
    if (!text||!text.trim()) { if(onEnd)onEnd(); return; }
    var l=getLang(), utt=new SpeechSynthesisUtterance(text);
    var sv=getVoiceForLang(l); if(sv)utt.voice=sv;
    utt.lang=l==='ar'?'ar-SA':l==='fr'?'fr-FR':'en-US';
    utt.rate=(l==='ar')?STATE.speed*0.9:STATE.speed; utt.pitch=STATE.pitch;
    if(STATE.karaokeEnabled){utt.onboundary=function(e){if(myGen!==speakGen)return;if(e.name==='word'&&e.charLength>0&&STATE.cards[STATE.cardIndex])highlightWord(STATE.cards[STATE.cardIndex].el,e.charIndex,e.charLength,text);};}
    var done=false;
    function finish(){if(done)return;done=true;clearHighlights();if(myGen!==speakGen)return;if(onEnd)onEnd();}
    utt.onend=finish;utt.onerror=finish;
    speechSynthesis.speak(utt);
    var pollStarted=false,pollInterval=setInterval(function(){if(done||myGen!==speakGen){clearInterval(pollInterval);return;}if(speechSynthesis.speaking)pollStarted=true;if(pollStarted&&speechSynthesis.paused&&!STATE.paused)speechSynthesis.resume();if(pollStarted&&!speechSynthesis.speaking&&!speechSynthesis.pending){clearInterval(pollInterval);finish();}},500);
    setTimeout(function(){if(!done&&myGen===speakGen){clearInterval(pollInterval);finish();}},Math.max(5000,(text.length/3)*(1000/STATE.speed))+3000);
  }

  function highlightWord(el,ci,cl,ft){if(!el||!cl)return;var w=ft.slice(ci,ci+cl),walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),node;while(node=walker.nextNode()){var idx=node.textContent.indexOf(w);if(idx!==-1){clearHighlights();var r=document.createRange();r.setStart(node,idx);r.setEnd(node,Math.min(idx+w.length,node.textContent.length));var s=document.createElement('span');s.className='narrator-word-highlight';try{r.surroundContents(s);}catch(e){}return;}}}
  function clearHighlights(){document.querySelectorAll('.narrator-word-highlight').forEach(function(el){var p=el.parentNode;p.replaceChild(document.createTextNode(el.textContent),el);p.normalize();});}
  function highlightCard(el){document.querySelectorAll('.narrator-active-card').forEach(function(e){e.classList.remove('narrator-active-card')});if(el){el.classList.add('narrator-active-card');if(STATE.autoScroll)el.scrollIntoView({behavior:'smooth',block:'center'});}}

  function readCurrentCard(){
    if(STATE.cardIndex>=STATE.cards.length){if(STATE.mode==='book')nextTab();else stopNarrator();return;}
    var card=STATE.cards[STATE.cardIndex];highlightCard(card.el);
    if(card.type==='principle'&&card.el&&!card.el.classList.contains('open'))card.el.classList.add('open');
    updateProgress();
    speak(card.text,function(){if(!STATE.playing)return;afterCardDone();});
  }
  function afterCardDone(){
    if(!STATE.playing)return;
    if(STATE.loopCount>0){STATE.loopCurrent++;if(STATE.loopCurrent<STATE.loopCount){setTimeout(function(){if(STATE.playing)readCurrentCard();},300);return;}STATE.loopCurrent=0;}
    var justRead=STATE.cards[STATE.cardIndex],delay=1200;
    if(justRead){if(justRead.type==='title')delay=2500;else if(justRead.text&&justRead.text.length>150)delay=2000;}
    STATE.cardIndex++;if(!STATE.playing)return;
    document.querySelectorAll('.narrator-active-card').forEach(function(e){e.classList.remove('narrator-active-card')});
    setTimeout(function(){if(STATE.playing)readCurrentCard();},delay);
  }

  function nextTab(){STATE.tabIndex++;if(STATE.tabIndex>=STATE.tabOrder.length){stopNarrator();showToast(nrT().bookDone);return;}switchToTab(STATE.tabOrder[STATE.tabIndex]);}
  function switchToTab(tabName){var btn=document.querySelector('.tab[data-tab="'+tabName+'"]');if(btn){btn.click();setTimeout(function(){if(!STATE.playing)return;STATE.cards=extractCards(getActivePanel());STATE.cardIndex=0;var title=getActivePanel().querySelector('.section-title');if(title){speak(title.textContent,function(){if(!STATE.playing)return;setTimeout(function(){if(STATE.playing)readCurrentCard();},300);});}else readCurrentCard();},400);}}

  function playPage(){STATE.mode='page';STATE.cards=extractCards(getActivePanel());STATE.cardIndex=0;STATE.playing=true;STATE.paused=false;closePanel();updateUI();setupMediaSession();if(typeof showToast==='function')showToast(nrT().page);readCurrentCard();}
  function playBook(){STATE.mode='book';STATE.tabIndex=0;STATE.playing=true;STATE.paused=false;closePanel();updateUI();setupMediaSession();if(typeof showToast==='function')showToast(nrT().book);switchToTab(STATE.tabOrder[0]);}
  function closePanel(){var p=document.getElementById('narratorPanel');if(p&&!p.classList.contains('hidden'))p.classList.add('hidden');}
  function pauseNarrator(){if(STATE.playing&&!STATE.paused){speechSynthesis.pause();STATE.paused=true;updateUI();}else if(STATE.paused){speechSynthesis.resume();STATE.paused=false;updateUI();}}
  function stopNarrator(){speakGen++;if(STATE.duoTimeout){clearTimeout(STATE.duoTimeout);STATE.duoTimeout=null;}speechSynthesis.cancel();STATE.playing=false;STATE.paused=false;STATE.cardIndex=0;clearHighlights();document.querySelectorAll('.narrator-active-card').forEach(function(e){e.classList.remove('narrator-active-card')});if(STATE.sleepTimer){clearTimeout(STATE.sleepTimer);STATE.sleepTimer=null;}updateUI();}
  function nextCard(){if(!STATE.playing)return;speakGen++;speechSynthesis.cancel();clearHighlights();STATE.loopCurrent=0;STATE.cardIndex++;if(STATE.cardIndex>=STATE.cards.length){if(STATE.mode==='book')nextTab();else stopNarrator();return;}readCurrentCard();}
  function prevCard(){if(!STATE.playing)return;speakGen++;speechSynthesis.cancel();clearHighlights();STATE.loopCurrent=0;STATE.cardIndex=Math.max(0,STATE.cardIndex-1);readCurrentCard();}

  function setSleepTimer(m){if(STATE.sleepTimer)clearTimeout(STATE.sleepTimer);STATE.sleepMinutes=m;if(m>0)STATE.sleepTimer=setTimeout(function(){stopNarrator();showToast(nrT().sleepDone);},m*60000);}
  function setupMediaSession(){if(!('mediaSession' in navigator))return;var l=getLang();navigator.mediaSession.metadata=new MediaMetadata({title:l==='ar'?'قضايا المرأة':l==='fr'?'Questions de la Femme':"Women's Issues",artist:l==='ar'?'الشيخ محمد الغزالي':'Sheikh Mohammed al-Ghazali',album:STATE.mode==='book'?(l==='ar'?'الكتاب كاملاً':l==='fr'?'Livre complet':'Full Book'):getActiveTabName()});navigator.mediaSession.playbackState='playing';navigator.mediaSession.setActionHandler('play',pauseNarrator);navigator.mediaSession.setActionHandler('pause',pauseNarrator);navigator.mediaSession.setActionHandler('nexttrack',nextCard);navigator.mediaSession.setActionHandler('previoustrack',prevCard);navigator.mediaSession.setActionHandler('stop',stopNarrator);}

  function updateProgress(){var t=STATE.cards.length,c=STATE.cardIndex+1;var el=document.getElementById('narratorProgress');if(el)el.textContent=c+'/'+t;var bar=document.getElementById('narratorBar');if(bar)bar.style.width=(c/t*100)+'%';}
  function updateUI(){var btn=document.getElementById('narratorMainBtn'),playBtn=document.getElementById('narratorPlayPause');if(btn)btn.classList.toggle('active',STATE.playing);if(playBtn)playBtn.textContent=STATE.playing&&!STATE.paused?'⏸️':'▶️';}
  function updateLabels(){var t=nrT();var set=function(id,val){var el=document.getElementById(id);if(el)el.textContent=val;};set('narratorTitle',t.title);document.querySelectorAll('[data-nr="page"]').forEach(function(el){el.textContent=t.page});document.querySelectorAll('[data-nr="book"]').forEach(function(el){el.textContent=t.book});document.querySelectorAll('[data-nr="voice"]').forEach(function(el){el.textContent=t.voice});document.querySelectorAll('[data-nr="speed"]').forEach(function(el){el.textContent=t.speed});document.querySelectorAll('[data-nr="pitch"]').forEach(function(el){el.textContent=t.pitch});document.querySelectorAll('[data-nr="loop"]').forEach(function(el){el.textContent=t.loop});document.querySelectorAll('[data-nr="sleep"]').forEach(function(el){el.textContent=t.sleep});document.querySelectorAll('[data-nr="karaoke"]').forEach(function(el){el.textContent=t.karaoke});document.querySelectorAll('[data-nr="autoscroll"]').forEach(function(el){el.textContent=t.autoScroll});document.querySelectorAll('[data-nr="duo"]').forEach(function(el){el.textContent=t.duo});document.querySelectorAll('[data-nr="off"]').forEach(function(el){el.textContent=t.off});}

  function toggleNarratorPanel(){var p=document.getElementById('narratorPanel');if(!p)return;p.classList.toggle('hidden');if(!p.classList.contains('hidden')){updateLabels();populateVoiceSelect();syncCheckboxes();}if(typeof playSound==='function')playSound('click');}
  function syncCheckboxes(){var p=document.getElementById('narratorPanel');if(!p)return;var t=p.querySelectorAll('.narrator-toggle input[type=checkbox]');if(t[0])t[0].checked=STATE.karaokeEnabled;if(t[1])t[1].checked=STATE.autoScroll;if(t[2])t[2].checked=STATE.duoReading;var sE=document.getElementById('narratorSpeed');if(sE)sE.value=STATE.speed;var sL=document.getElementById('narratorSpeedLabel');if(sL)sL.textContent=STATE.speed+'x';var pE=document.getElementById('narratorPitch');if(pE)pE.value=STATE.pitch;var pL=document.getElementById('narratorPitchLabel');if(pL)pL.textContent=STATE.pitch.toFixed(1);}

  function onSpeedChange(v){STATE.speed=parseFloat(v);var l=document.getElementById('narratorSpeedLabel');if(l)l.textContent=STATE.speed+'x';localStorage.setItem('qm-narrator-speed',STATE.speed);}
  function onPitchChange(v){STATE.pitch=parseFloat(v);var l=document.getElementById('narratorPitchLabel');if(l)l.textContent=STATE.pitch.toFixed(1);localStorage.setItem('qm-narrator-pitch',STATE.pitch);}
  function onLoopChange(v){STATE.loopCount=parseInt(v);}
  function onSleepChange(v){setSleepTimer(parseInt(v));if(parseInt(v)>0&&typeof showToast==='function')showToast(nrT().sleepSet+' '+v+' '+nrT().min);}
  function onKaraokeToggle(c){STATE.karaokeEnabled=c;localStorage.setItem('qm-narrator-karaoke',c);}
  function onAutoScrollToggle(c){STATE.autoScroll=c;localStorage.setItem('qm-narrator-autoscroll',c);}
  function onDuoToggle(c){STATE.duoReading=c;localStorage.setItem('qm-narrator-duo',c);}

  function populateVoiceSelect(){var s=document.getElementById('narratorVoice');if(!s)return;var voices=speechSynthesis.getVoices(),l=getLang(),lc=l==='ar'?'ar':l==='fr'?'fr':'en';s.innerHTML='';var filtered=[];voices.forEach(function(v,ri){if(v.lang.startsWith(lc))filtered.push({voice:v,idx:ri});});if(!filtered.length)voices.forEach(function(v,ri){filtered.push({voice:v,idx:ri});});var cv=getVoiceForLang(l);filtered.forEach(function(item){var o=document.createElement('option');o.value=item.idx;o.textContent=item.voice.name+' ('+item.voice.lang+')';if(cv&&item.voice.name===cv.name)o.selected=true;s.appendChild(o);});}
  function onVoiceChange(v){var voices=speechSynthesis.getVoices(),voice=voices[parseInt(v)];if(!voice)return;var l=getLang();if(l==='ar')STATE.voiceAR=voice;else if(l==='fr')STATE.voiceFR=voice;else STATE.voiceEN=voice;}

  function loadSettings(){STATE.speed=parseFloat(localStorage.getItem('qm-narrator-speed'))||1;STATE.pitch=parseFloat(localStorage.getItem('qm-narrator-pitch'))||1;STATE.karaokeEnabled=localStorage.getItem('qm-narrator-karaoke')!=='false';STATE.autoScroll=localStorage.getItem('qm-narrator-autoscroll')!=='false';STATE.duoReading=localStorage.getItem('qm-narrator-duo')==='true';}

  document.addEventListener('keydown',function(e){if(e.key==='Escape'){var p=document.getElementById('narratorPanel');if(p&&!p.classList.contains('hidden')){p.classList.add('hidden');e.stopPropagation();}}});
  window.addEventListener('beforeunload',function(){speechSynthesis.cancel();});

  var sectionSpeaking=false;
  function speakSection(el){if(STATE.playing)stopNarrator();speakGen++;speechSynthesis.cancel();var text=cleanText(el.textContent||'');if(!text)return;sectionSpeaking=true;el.classList.add('narrator-active-card');var l=getLang(),utt=new SpeechSynthesisUtterance(text),sv=getVoiceForLang(l);if(sv)utt.voice=sv;utt.lang=l==='ar'?'ar-SA':l==='fr'?'fr-FR':'en-US';utt.rate=(l==='ar')?STATE.speed*0.9:STATE.speed;utt.pitch=STATE.pitch;var done=false;function finish(){if(done)return;done=true;sectionSpeaking=false;el.classList.remove('narrator-active-card');clearHighlights();}utt.onend=finish;utt.onerror=finish;if(STATE.karaokeEnabled){utt.onboundary=function(e){if(e.name==='word'&&e.charLength>0)highlightWord(el,e.charIndex,e.charLength,text);};}speechSynthesis.speak(utt);var ps=false,pi=setInterval(function(){if(done){clearInterval(pi);return;}if(speechSynthesis.speaking)ps=true;if(ps&&speechSynthesis.paused)speechSynthesis.resume();if(ps&&!speechSynthesis.speaking&&!speechSynthesis.pending){clearInterval(pi);finish();}},500);setTimeout(function(){if(!done){clearInterval(pi);finish();}},Math.max(5000,(text.length/3)*(1000/STATE.speed))+3000);}
  function stopSection(){if(sectionSpeaking){speechSynthesis.cancel();sectionSpeaking=false;document.querySelectorAll('.narrator-active-card').forEach(function(e){e.classList.remove('narrator-active-card')});clearHighlights();}}

  function injectSpeakButtons(){document.querySelectorAll('.narrator-speak-btn').forEach(function(b){b.remove();});['.about-disclaimer','.about-author','.about-section','.principle-card','.anxiety-card','.habit-item','.daily-card'].forEach(function(sel){document.querySelectorAll(sel).forEach(function(card){if(card.querySelector('.narrator-speak-btn'))return;var btn=document.createElement('button');btn.className='narrator-speak-btn';btn.textContent='🔊';btn.title=nrT().page;btn.onclick=function(e){e.stopPropagation();if(sectionSpeaking)stopSection();else speakSection(card);};card.style.position='relative';card.appendChild(btn);});});}

  // Re-inject after renders
  var oRA=window.renderAbout;if(oRA){window.renderAbout=function(){oRA();setTimeout(injectSpeakButtons,100);};}
  var oRC=window.renderConcepts;if(oRC){window.renderConcepts=function(){oRC();setTimeout(injectSpeakButtons,100);};}
  var oRH=window.renderHeroines;if(oRH){window.renderHeroines=function(){oRH();setTimeout(injectSpeakButtons,100);};}
  var oRHb=window.renderHabits;if(oRHb){window.renderHabits=function(){oRHb();setTimeout(injectSpeakButtons,100);};}
  var oRHo=window.renderHome;if(oRHo){window.renderHome=function(){oRHo();setTimeout(injectSpeakButtons,100);};}

  function initNarrator(){loadSettings();updateLabels();setTimeout(injectSpeakButtons,500);var lastLang=document.documentElement.lang||'ar';new MutationObserver(function(){var newLang=document.documentElement.lang||'ar';if(newLang!==lastLang){lastLang=newLang;setTimeout(function(){populateVoiceSelect();updateLabels();injectSpeakButtons();},100);if(STATE.playing)stopNarrator();}}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});}

  window.narratorPlayPage=playPage;window.narratorPlayBook=playBook;window.narratorPause=pauseNarrator;window.narratorStop=stopNarrator;window.narratorNext=nextCard;window.narratorPrev=prevCard;window.narratorTogglePanel=toggleNarratorPanel;window.narratorSpeedChange=onSpeedChange;window.narratorPitchChange=onPitchChange;window.narratorLoopChange=onLoopChange;window.narratorSleepChange=onSleepChange;window.narratorKaraokeToggle=onKaraokeToggle;window.narratorAutoScrollToggle=onAutoScrollToggle;window.narratorDuoToggle=onDuoToggle;window.narratorVoiceChange=onVoiceChange;window.narratorPopulateVoices=populateVoiceSelect;

  document.addEventListener('DOMContentLoaded', initNarrator);
})();
