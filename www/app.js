/* قضايا المرأة — WOMEN'S ISSUES — app.js v2.0 */
/* Based on "Qadaya al-Mar'ah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'قضايا المرأة',
    splashSub: 'بين التقاليد الجامدة والوافدة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النساء ٤: ١',
    tabHome: 'الرئيسية', tabTraits: 'القضايا', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'قضايا المرأة في الإسلام',
    traitsDesc: '٢٠ قضية من كتاب الشيخ الغزالي — كل قضية بآية وحديث وتحليل عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن حقوق المرأة في الإسلام — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في الوعي',
    progressDesc: 'تقدمك وإنجازاتك في فهم قضايا المرأة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    dailyLabel: '✨ قضية اليوم',
    searchPlaceholder: 'ابحث في القضايا...',
    share: 'مشاركة', verse: 'الآية', hadith: 'الحديث', apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير', teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة', levelLabel: 'المستوى', streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد', nextQ: 'السؤال التالي',
    lifeline5050: '50/50', lifelineHint: '💡 تلميح', lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉', wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!', score: 'النتيجة', tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ', badge_reader: 'قارئ', badge_scholar: 'عالم',
    badge_persistent: 'مثابر', badge_expert: 'خبير',
    splashFeatures: ['٢٠ قضية عن حقوق المرأة في الإسلام','مسابقة "من سيصبح عالماً" بالمكافآت','نظام النقاط والشارات والمستويات','وضع مستكشف صغير ووضع باحث شاب'],
  },
  en: {
    appTitle: "Women's Issues",
    splashSub: 'Between rigid traditions and foreign influences',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nisa 4:1',
    tabHome: 'Home', tabTraits: 'Issues', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: "Women's Issues in Islam",
    traitsDesc: '20 issues from Sheikh al-Ghazali — each with a verse, hadith, and practical analysis',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: "Test your knowledge of women's rights in Islam — 4 choices per question",
    progressTitle: 'My Awareness Journey',
    progressDesc: "Your progress and achievements in understanding women's issues",
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    dailyLabel: "✨ Today's Issue",
    searchPlaceholder: 'Search issues...',
    share: 'Share', verse: 'Verse', hadith: 'Hadith', apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer', teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points', levelLabel: 'Level', streakMsg: 'day streak!',
    readMore: 'Read More', nextQ: 'Next Question',
    lifeline5050: '50/50', lifelineHint: '💡 Hint', lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉', wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!', score: 'Score', tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner', badge_reader: 'Reader', badge_scholar: 'Scholar',
    badge_persistent: 'Persistent', badge_expert: 'Expert',
    splashFeatures: ["20 issues on women's rights in Islam",'"Who Wants to Be a Scholar?" quiz with rewards','Points, badges, and level system','Young Explorer and Teen Scholar modes'],
  },
  fr: {
    appTitle: 'Questions Feminines',
    splashSub: 'Entre traditions rigides et influences etrangeres',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nisa 4:1',
    tabHome: 'Accueil', tabTraits: 'Questions', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Questions Feminines en Islam',
    traitsDesc: '20 questions du Sheikh al-Ghazali — chacune avec un verset, un hadith et une analyse pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur les droits des femmes en Islam — 4 choix par question',
    progressTitle: 'Mon Parcours de Sensibilisation',
    progressDesc: 'Vos progres dans la comprehension des questions feminines',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    dailyLabel: '✨ Question du Jour',
    searchPlaceholder: 'Rechercher les questions...',
    share: 'Partager', verse: 'Verset', hadith: 'Hadith', apply: '💡 Appliquez',
    youngMode: '🌟 Jeune Explorateur', teenMode: '📖 Jeune Chercheur',
    xpLabel: 'Points d\'Experience', levelLabel: 'Niveau', streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus', nextQ: 'Question Suivante',
    lifeline5050: '50/50', lifelineHint: '💡 Indice', lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉', wrong: 'Reessayez 💪',
    quizComplete: 'Quiz Termine !', score: 'Score', tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant', badge_reader: 'Lecteur', badge_scholar: 'Savant',
    badge_persistent: 'Perseverant', badge_expert: 'Expert',
    splashFeatures: ['20 questions sur les droits des femmes en Islam','Quiz Qui Veut Devenir Savant avec recompenses','Systeme de points, badges et niveaux','Modes Jeune Explorateur et Jeune Chercheur'],
  }
};

// ═══════════════ 20 TRAITS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'📖',
    ar:{title:'قضايا المرأة',desc:'يدافع الغزالي بقوة عن حقوق المرأة في الإسلام ضد العادات الجاهلية المنسوبة خطأً للدين. يؤكد أن القرآن أنصف المرأة قبل الحضارات الحديثة بقرون. ينتقد تهميشها ويؤكد أنها شقيقة الرجل في التعليم والعمل والمشاركة.',verse:'وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ',verseRef:'النساء ١٢٤',hadith:'إنما النساء شقائق الرجال — رواه أبو داود',action:'اقرأ سورة النساء وتأمل كيف أنصف القرآن المرأة',young:'القرآن أعطى المرأة حقوقاً عظيمة! اكتشف كيف كرّمها الله 📖'},
    en:{title:'Women in the Quran',desc:'Al-Ghazali defends in "Women\'s Issues": The Quran did justice to women and gave them high status. An entire surah is named "The Women," and God mentioned Maryam, Asiya, and the mother of Musa as models of faith.',verse:'Whoever does good deeds, male or female, while being a believer — those will enter Paradise',verseRef:'An-Nisa 124',hadith:'Women are the twin halves of men — Abu Dawud',action:'Read Surah An-Nisa and reflect on how the Quran honored women',young:'The Quran gave women great rights! Discover how God honored them 📖'},
    fr:{title:'La Femme dans le Coran',desc:'Al-Ghazali défend dans "Les Questions de la Femme": Le Coran a rendu justice aux femmes et leur a donne un statut eleve. Une sourate entiere porte le nom "Les Femmes". Dieu a mentionne Maryam, Asiya et la mere de Moussa comme modeles.',verse:'Quiconque fait de bonnes oeuvres, homme ou femme, tout en etant croyant — ceux-la entreront au Paradis',verseRef:'An-Nisa 124',hadith:'Les femmes sont les moities jumelles des hommes — Abu Dawud',action:'Lisez la sourate An-Nisa et reflechissez a comment le Coran a honore les femmes',young:'Le Coran a donne aux femmes de grands droits ! Decouvre comment Dieu les a honorees 📖'}
  },
  {
    id:2, emoji:'🎓',
    ar:{title:'حق التعليم',desc:'يدافع الغزالي في "قضايا المرأة": طلب العلم فريضة على كل مسلم ومسلمة دون تفريق. الإسلام أوجب تعليم المرأة. عائشة كانت مرجعاً للصحابة في الفقه والحديث.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'شجع امرأة أو فتاة على طلب العلم اليوم',young:'التعليم حق لكل فتاة! عائشة كانت أذكى الناس في زمانها 🎓'},
    en:{title:'The Right to Education',desc:'Al-Ghazali defends in "Women\'s Issues": Seeking knowledge is an obligation on every Muslim, male and female, without distinction. Islam mandated women\'s education. Aisha was a reference for companions in jurisprudence and hadith.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Encourage a woman or girl to seek knowledge today',young:'Education is a right for every girl! Aisha was the smartest person of her time 🎓'},
    fr:{title:'Le Droit a l\'Education',desc:'Al-Ghazali défend dans "Les Questions de la Femme": La quete du savoir est une obligation pour chaque musulman et musulmane. L\'Islam a impose l\'education des femmes. Aisha etait une reference en jurisprudence et hadith.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:'Encouragez une femme ou une fille a chercher le savoir aujourd\'hui',young:'L\'education est un droit pour chaque fille ! Aisha etait la plus savante de son epoque 🎓'}
  },
  {
    id:3, emoji:'💼',
    ar:{title:'حق العمل',desc:'يدافع الغزالي في "قضايا المرأة": الإسلام لم يمنع المرأة من العمل بل وضع ضوابط تحفظ كرامتها. خديجة كانت تاجرة ناجحة. العمل حق مشروع بشروط الاحتشام والكفاءة.',verse:'لِّلرِّجَالِ نَصِيبٌ مِّمَّا اكْتَسَبُوا وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا اكْتَسَبْنَ',verseRef:'النساء ٣٢',hadith:'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه — رواه الطبراني',action:'ادعم امرأة عاملة في محيطك — كلمة تشجيع تصنع فرقاً',young:'خديجة كانت سيدة أعمال ناجحة! المرأة يمكنها العمل والنجاح 💼'},
    en:{title:'The Right to Work',desc:'Al-Ghazali defends in "Women\'s Issues": Islam did not prohibit women from working but set guidelines to preserve dignity. Khadijah was a successful merchant. Work is a legitimate right with conditions of modesty and competence.',verse:'For men is a share of what they have earned, and for women is a share of what they have earned',verseRef:'An-Nisa 32',hadith:'God loves that when one of you does a task, they perfect it — al-Tabarani',action:'Support a working woman in your circle — a word of encouragement makes a difference',young:'Khadijah was a successful businesswoman! Women can work and succeed 💼'},
    fr:{title:'Le Droit au Travail',desc:'Al-Ghazali défend dans "Les Questions de la Femme": L\'Islam n\'a pas interdit aux femmes de travailler mais a mis des regles pour preserver la dignite. Khadijah etait une marchande prospere.',verse:'Aux hommes une part de ce qu\'ils ont acquis, et aux femmes une part de ce qu\'elles ont acquis',verseRef:'An-Nisa 32',hadith:'Dieu aime que lorsque l\'un de vous fait un travail, il le perfectionne — al-Tabarani',action:'Soutenez une femme qui travaille dans votre entourage',young:'Khadijah etait une femme d\'affaires prospere ! Les femmes peuvent travailler et reussir 💼'}
  },
  {
    id:4, emoji:'💰',
    ar:{title:'حق الميراث',desc:'يدافع الغزالي في "قضايا المرأة": قبل الإسلام لم تكن المرأة ترث بل كانت تُورث كمتاع. الإسلام أعطاها نصيباً محدداً. نصيبها يختلف حسب درجة القرابة لا حسب الجنس فقط.',verse:'لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ',verseRef:'النساء ٧',hadith:'تعلموا الفرائض وعلموها الناس — رواه الدارقطني',action:'تعلّم أحكام الميراث — إنها أكثر عدلاً مما يظن الكثيرون',young:'الإسلام أعطى المرأة حقها في الميراث! هذا كان ثورة في زمانه 💰'},
    en:{title:'Inheritance Rights',desc:'Al-Ghazali defends in "Women\'s Issues": Before Islam, women did not inherit; they were inherited as property. Islam gave them a specific share. Their share varies by kinship degree, not just gender.',verse:'For men is a share of what parents and relatives leave, and for women is a share',verseRef:'An-Nisa 7',hadith:'Learn the laws of inheritance and teach them to people — al-Daraqutni',action:'Learn about inheritance laws in Islam — they are more just than many think',young:'Islam gave women the right to inherit! This was revolutionary in its time 💰'},
    fr:{title:'Les Droits d\'Heritage',desc:'Al-Ghazali défend dans "Les Questions de la Femme": Avant l\'Islam, les femmes n\'heritaient pas; elles etaient heritees comme des biens. L\'Islam leur a donne une part specifique selon le degre de parente.',verse:'Aux hommes une part de ce que laissent les parents et proches, et aux femmes une part',verseRef:'An-Nisa 7',hadith:'Apprenez les lois de l\'heritage et enseignez-les — al-Daraqutni',action:'Apprenez les lois d\'heritage en Islam — elles sont plus justes que beaucoup ne pensent',young:'L\'Islam a donne aux femmes le droit d\'heriter ! C\'etait revolutionnaire 💰'}
  },
  {
    id:5, emoji:'💍',
    ar:{title:'رضا المرأة في الزواج',desc:'يدافع الغزالي في "قضايا المرأة": لا يجوز إجبار المرأة على الزواج ممن لا تريد. رضاها شرط أساسي لصحة العقد. النبي ﷺ ردّ زواج فتيات أُكرهن.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَحِلُّ لَكُمْ أَن تَرِثُوا النِّسَاءَ كَرْهًا',verseRef:'النساء ١٩',hadith:'لا تُنكح البكر حتى تُستأذن — متفق عليه',action:'ادعم حق المرأة في اختيار شريك حياتها',young:'المرأة تختار زوجها بنفسها! النبي ﷺ رفض إجبار الفتيات 💍'},
    en:{title:'Consent in Marriage',desc:'Al-Ghazali defends in "Women\'s Issues": It is not permissible to force a woman to marry someone she does not want. Her consent is fundamental for the contract\'s validity. The Prophet returned marriages of coerced women.',verse:'O you who believe, it is not lawful for you to inherit women against their will',verseRef:'An-Nisa 19',hadith:'A virgin should not be married until she gives her permission — Agreed upon',action:'Support a woman\'s right to choose her life partner',young:'A woman chooses her own husband! The Prophet refused to force girls 💍'},
    fr:{title:'Le Consentement au Mariage',desc:'Al-Ghazali défend dans "Les Questions de la Femme": Il n\'est pas permis de forcer une femme a epouser quelqu\'un qu\'elle ne veut pas. Son consentement est fondamental. Le Prophete a annule des mariages forces.',verse:'O vous qui croyez, il ne vous est pas permis d\'heriter des femmes contre leur gre',verseRef:'An-Nisa 19',hadith:'Une vierge ne doit pas etre mariee sans sa permission — Unanimement reconnu',action:'Soutenez le droit de la femme a choisir son partenaire de vie',young:'La femme choisit son mari elle-meme ! Le Prophete a refuse de forcer les filles 💍'}
  },
  {
    id:6, emoji:'⚖️',
    ar:{title:'حق الطلاق',desc:'يدافع الغزالي في "قضايا المرأة": الإسلام أعطى المرأة حق طلب الطلاق (الخلع) إذا تضررت. ليس الطلاق حكراً على الرجل. المرأة يمكنها فسخ عقد يؤذيها.',verse:'فَإِمْسَاكٌ بِمَعْرُوفٍ أَوْ تَسْرِيحٌ بِإِحْسَانٍ',verseRef:'البقرة ٢٢٩',hadith:'أبغض الحلال إلى الله الطلاق — رواه أبو داود',action:'تعرّف على أحكام الخلع وحقوق المرأة في فسخ الزواج',young:'المرأة لها حق الطلاق إذا تأذت! الإسلام حماها من الظلم ⚖️'},
    en:{title:'The Right to Divorce',desc:'Al-Ghazali defends in "Women\'s Issues": Islam gave women the right to seek divorce (khul) if harmed. Divorce is not exclusive to men. A woman can dissolve a contract that harms her.',verse:'Either retain in kindness or release with good treatment',verseRef:'Al-Baqarah 229',hadith:'The most hated permissible thing to God is divorce — Abu Dawud',action:'Learn about khul and women\'s rights in dissolving marriage',young:'Women have the right to divorce if harmed! Islam protected them ⚖️'},
    fr:{title:'Le Droit au Divorce',desc:'Al-Ghazali défend dans "Les Questions de la Femme": L\'Islam a donne aux femmes le droit de demander le divorce (khul) si elles sont leses. Le divorce n\'est pas exclusif aux hommes.',verse:'Soit retenir avec bonte, soit liberer avec bienfaisance',verseRef:'Al-Baqarah 229',hadith:'La chose permise la plus detestee de Dieu est le divorce — Abu Dawud',action:'Decouvrez le khul et les droits des femmes dans la dissolution du mariage',young:'Les femmes ont le droit de divorcer si elles sont leses ! L\'Islam les a protegees ⚖️'}
  },
  {
    id:7, emoji:'🧕',
    ar:{title:'حكمة الحجاب',desc:'الحجاب تشريع إلهي غايته حماية المرأة وتكريمها لا إذلالها. الغزالي يرى أنه يحرر المرأة من الاستغلال ويجعل قيمتها في عقلها لا جسدها.',verse:'يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ',verseRef:'الأحزاب ٥٩',hadith:'الحياء لا يأتي إلا بخير — متفق عليه',action:'افهم الحجاب كتكريم لا كقيد',young:'الحجاب يحمي المرأة ويكرمها! قيمتك في عقلك وأخلاقك 🧕'},
    en:{title:'The Wisdom of Hijab',desc:'Hijab is divine legislation to protect and honor women, not humiliate them. Al-Ghazali sees it as freeing women from exploitation, valuing intellect over body.',verse:'O Prophet, tell your wives and daughters and the believing women to bring down their outer garments',verseRef:'Al-Ahzab 59',hadith:'Modesty brings nothing but good — Agreed upon',action:'Understand hijab as honor not restriction',young:'Hijab protects and honors women! Your value is in your mind and character 🧕'},
    fr:{title:'La Sagesse du Hijab',desc:'Le hijab est une legislation divine pour proteger et honorer les femmes. Al-Ghazali le voit comme liberant les femmes de l\'exploitation.',verse:'O Prophete, dis a tes epouses, tes filles et aux croyantes de ramener sur elles leurs grands voiles',verseRef:'Al-Ahzab 59',hadith:'La pudeur n\'apporte que du bien — Unanimement reconnu',action:'Comprenez le hijab comme un honneur, pas une restriction',young:'Le hijab protege et honore les femmes ! Ta valeur est dans ton esprit 🧕'}
  },
  {
    id:8, emoji:'🗳️',
    ar:{title:'المشاركة السياسية',desc:'المرأة شاركت في بيعة العقبة وبايعت النبي ﷺ سياسياً. الإسلام لم يمنعها من الشورى والمشاركة في القرارات العامة.',verse:'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ',verseRef:'التوبة ٧١',hadith:'كلكم راع وكلكم مسؤول عن رعيته — متفق عليه',action:'شجع المرأة على المشاركة في القرارات المجتمعية',young:'المرأة شاركت في البيعة مع النبي! لها حق في القرارات 🗳️'},
    en:{title:'Political Participation',desc:'Women participated in the Pledge of Aqaba and gave political allegiance to the Prophet. Islam did not prohibit them from consultation and public decisions.',verse:'The believing men and women are allies of one another',verseRef:'At-Tawbah 71',hadith:'Each of you is a shepherd and responsible for their flock — Agreed upon',action:'Encourage women to participate in community decisions',young:'Women participated in the pledge with the Prophet! They have a right in decisions 🗳️'},
    fr:{title:'La Participation Politique',desc:'Les femmes ont participe au Pacte d\'Aqaba et ont prete allegeance au Prophete. L\'Islam ne leur a pas interdit les decisions publiques.',verse:'Les croyants et les croyantes sont allies les uns des autres',verseRef:'At-Tawbah 71',hadith:'Chacun est un berger et responsable de son troupeau — Unanimement reconnu',action:'Encouragez les femmes a participer aux decisions communautaires',young:'Les femmes ont participe au pacte avec le Prophete ! Elles ont le droit de decider 🗳️'}
  },
  {
    id:9, emoji:'🏦',
    ar:{title:'الاستقلال المالي',desc:'للمرأة ذمة مالية مستقلة تماماً عن زوجها. لها أن تملك وتبيع وتشتري. مهرها ملكها الخاص ولا يجوز لأحد أخذه بغير رضاها.',verse:'وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً',verseRef:'النساء ٤',hadith:'لا يحل مال امرئ مسلم إلا بطيب نفس — رواه أحمد',action:'احترم استقلال المرأة المالي — مالها ملكها',young:'المرأة تملك مالها بنفسها! لا أحد يأخذه بدون إذنها 🏦'},
    en:{title:'Financial Independence',desc:'Women have completely independent financial status from their husbands. They can own, sell, buy, and trade. Their dowry is private property no one may take without consent.',verse:'And give women their dowries as a free gift',verseRef:'An-Nisa 4',hadith:'A Muslim\'s wealth is not lawful except with willing consent — Ahmad',action:'Respect women\'s financial independence — their money is their own',young:'Women own their own money! No one can take it without permission 🏦'},
    fr:{title:'L\'Independance Financiere',desc:'Les femmes ont un statut financier completement independant de leurs maris. Elles peuvent posseder, vendre, acheter. Leur dot est leur propriete privee.',verse:'Et donnez aux femmes leurs dots de bonne grace',verseRef:'An-Nisa 4',hadith:'Les biens d\'un musulman ne sont licites qu\'avec son consentement — Ahmad',action:'Respectez l\'independance financiere des femmes',young:'Les femmes possedent leur propre argent ! Personne ne peut le prendre sans permission 🏦'}
  },
  {
    id:10, emoji:'👩‍👧‍👦',
    ar:{title:'تكريم الأمومة',desc:'رفع الإسلام مكانة الأم إلى أعلى درجة. الجنة تحت أقدام الأمهات. الأم أحق الناس بحسن الصحبة ثلاث مرات قبل الأب.',verse:'وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ',verseRef:'لقمان ١٤',hadith:'من أحق الناس بحسن صحابتي؟ قال: أمك ثم أمك ثم أمك — متفق عليه',action:'اتصل بأمك أو أكرمها بكلمة طيبة اليوم',young:'أمك أهم شخص في حياتك! الجنة عند قدميها 👩‍👧‍👦'},
    en:{title:'Honoring Motherhood',desc:'Islam elevated the status of mothers to the highest degree. Paradise is at their feet. The mother has the most right to good companionship, mentioned three times before the father.',verse:'We enjoined upon man regarding his parents — his mother carried him in weakness upon weakness',verseRef:'Luqman 14',hadith:'Who is most deserving of my good companionship? He said: Your mother, then your mother, then your mother — Agreed upon',action:'Call your mother or honor her with a kind word today',young:'Your mother is the most important person! Paradise is at her feet 👩‍👧‍👦'},
    fr:{title:'L\'Honneur de la Maternite',desc:'L\'Islam a eleve le statut des meres au plus haut degre. Le Paradis est a leurs pieds. La mere a le plus droit a la bonne compagnie, trois fois avant le pere.',verse:'Nous avons recommande a l\'homme ses parents — sa mere l\'a porte dans la faiblesse',verseRef:'Luqman 14',hadith:'Qui merite le plus ma bonne compagnie ? Ta mere, puis ta mere, puis ta mere — Unanimement reconnu',action:'Appelez votre mere ou honorez-la avec un bon mot aujourd\'hui',young:'Ta mere est la personne la plus importante ! Le Paradis est a ses pieds 👩‍👧‍👦'}
  },
  {
    id:11, emoji:'📚',
    ar:{title:'عالمات في التاريخ',desc:'التاريخ الإسلامي مليء بالعالمات: عائشة روت آلاف الأحاديث، فاطمة الفهرية أسست أول جامعة، أم الدرداء درّست الفقه.',verse:'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',verseRef:'المجادلة ١١',hadith:'خذوا نصف دينكم عن هذه الحميراء — رواه الحاكم',action:'ابحث عن عالمة مسلمة في التاريخ وشارك قصتها',young:'فاطمة الفهرية أسست أول جامعة في العالم! 📚'},
    en:{title:'Women Scholars in History',desc:'Islamic history is full of women scholars: Aisha narrated thousands of hadiths, Fatima al-Fihri founded the first university, Umm al-Darda taught jurisprudence.',verse:'God will raise those who believe and those who have been given knowledge by degrees',verseRef:'Al-Mujadilah 11',hadith:'Take half your religion from this Humayra (meaning Aisha) — al-Hakim',action:'Research a Muslim woman scholar in history and share her story',young:'Fatima al-Fihri founded the first university in the world! 📚'},
    fr:{title:'Les Femmes Savantes',desc:'L\'histoire islamique est pleine de femmes savantes : Aisha a rapporte des milliers de hadiths, Fatima al-Fihri a fonde la premiere universite.',verse:'Dieu elevera ceux qui croient et ceux qui ont recu la science de plusieurs degres',verseRef:'Al-Mujadilah 11',hadith:'Prenez la moitie de votre religion de cette Humayra (Aisha) — al-Hakim',action:'Recherchez une femme savante musulmane et partagez son histoire',young:'Fatima al-Fihri a fonde la premiere universite au monde ! 📚'}
  },
  {
    id:12, emoji:'🏠',
    ar:{title:'حق التملك',desc:'المرأة في الإسلام لها حق كامل في التملك والتصرف بأموالها. لا يحق لزوجها أو أبيها التحكم في ممتلكاتها.',verse:'لِلرِّجَالِ نَصِيبٌ مِّمَّا اكْتَسَبُوا وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا اكْتَسَبْنَ',verseRef:'النساء ٣٢',hadith:'لا يحل مال امرئ مسلم إلا بطيب نفس — رواه الدارقطني',action:'تعرّف على حقوق المرأة المالية في الإسلام',young:'المرأة تملك بيتها ومالها بنفسها! حق كامل منذ ١٤٠٠ سنة 🏠'},
    en:{title:'Property Rights',desc:'Women in Islam have full rights to own and manage their wealth. Neither husband nor father may control her property.',verse:'For men is a share of what they earned and for women is a share of what they earned',verseRef:'An-Nisa 32',hadith:'A Muslim\'s wealth is not lawful except with willing consent — al-Daraqutni',action:'Learn about women\'s financial rights in Islam',young:'Women own their house and money! A full right for 1400 years 🏠'},
    fr:{title:'Les Droits de Propriete',desc:'Les femmes en Islam ont le plein droit de posseder et gerer leurs biens. Ni le mari ni le pere ne peuvent controler sa propriete.',verse:'Aux hommes une part de ce qu\'ils ont acquis et aux femmes une part',verseRef:'An-Nisa 32',hadith:'Les biens d\'un musulman ne sont licites qu\'avec son consentement — al-Daraqutni',action:'Decouvrez les droits financiers des femmes en Islam',young:'Les femmes possedent leur maison et leur argent ! Un droit depuis 1400 ans 🏠'}
  },
  {
    id:13, emoji:'🚫',
    ar:{title:'رفض العنف الأسري',desc:'الإسلام حرّم الظلم بكل أشكاله. النبي ﷺ لم يضرب امرأة قط. الغزالي ينتقد بشدة من يستخدم الدين لتبرير العنف.',verse:'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ',verseRef:'النساء ١٩',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'قف ضد كل أشكال العنف الأسري',young:'النبي لم يؤذِ امرأة أبداً! كن لطيفاً مع عائلتك 🚫'},
    en:{title:'Rejecting Domestic Violence',desc:'Islam prohibited injustice in all its forms. The Prophet never struck a woman. Al-Ghazali strongly criticizes using religion to justify violence.',verse:'And live with them in kindness',verseRef:'An-Nisa 19',hadith:'The best of you is the best to his family, and I am the best to my family — al-Tirmidhi',action:'Stand against all forms of domestic violence',young:'The Prophet never hurt a woman! Always be kind to your family 🚫'},
    fr:{title:'Rejeter la Violence Domestique',desc:'L\'Islam a interdit l\'injustice sous toutes ses formes. Le Prophete n\'a jamais frappe une femme. Al-Ghazali critique ceux qui utilisent la religion pour justifier la violence.',verse:'Et vivez avec elles dans la bonte',verseRef:'An-Nisa 19',hadith:'Le meilleur est celui qui est le meilleur envers sa famille — al-Tirmidhi',action:'Opposez-vous a toute forme de violence domestique',young:'Le Prophete n\'a jamais fait de mal a une femme ! Sois gentil avec ta famille 🚫'}
  },
  {
    id:14, emoji:'👶',
    ar:{title:'حق الحضانة',desc:'الأم أولى بحضانة أطفالها عند الطلاق ما لم تتزوج. حق الأم في أطفالها مقدم في الشريعة.',verse:'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ',verseRef:'البقرة ٢٣٣',hadith:'أنتِ أحق به ما لم تنكحي — رواه أبو داود',action:'ادعم حق الأمهات في حضانة أطفالهن',young:'الأم أحق بأطفالها! النبي حفظ حقها 👶'},
    en:{title:'Custody Rights',desc:'The mother has priority in custody after divorce as long as she does not remarry. The mother\'s right to her children is prioritized in Sharia.',verse:'Mothers shall breastfeed their children for two complete years',verseRef:'Al-Baqarah 233',hadith:'You have more right to him as long as you do not remarry — Abu Dawud',action:'Support mothers\' custody rights after divorce',young:'Mothers have priority for their children! The Prophet preserved her right 👶'},
    fr:{title:'Les Droits de Garde',desc:'La mere a la priorite de garde apres le divorce tant qu\'elle ne se remarie pas. Le droit de la mere est prioritaire en charia.',verse:'Les meres allaiteront leurs enfants deux annees completes',verseRef:'Al-Baqarah 233',hadith:'Tu as plus de droit sur lui tant que tu ne te remaries pas — Abu Dawud',action:'Soutenez le droit des meres a la garde de leurs enfants',young:'Les meres ont la priorite pour leurs enfants ! 👶'}
  },
  {
    id:15, emoji:'📋',
    ar:{title:'التعدد في سياقه',desc:'تعدد الزوجات مشروط بالعدل التام، وهو استثناء لا قاعدة. الغزالي يؤكد أن كثيراً يسيئون فهم هذا التشريع ويتجاهلون شرط العدل.',verse:'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً',verseRef:'النساء ٣',hadith:'من كانت له امرأتان فمال إلى إحداهما جاء يوم القيامة وشقه مائل — رواه أبو داود',action:'افهم شروط التعدد الصارمة قبل أن تحكم',young:'العدل شرط أساسي! إذا لم يستطع الرجل العدل فواحدة فقط 📋'},
    en:{title:'Polygamy in Context',desc:'Polygamy is conditioned on complete justice, and is the exception not the rule. Al-Ghazali emphasizes many misunderstand this and ignore the justice condition.',verse:'But if you fear you will not be just, then only one',verseRef:'An-Nisa 3',hadith:'Whoever has two wives and leans to one will come on Judgment Day leaning — Abu Dawud',action:'Understand the strict conditions before judging',young:'Justice is essential! If a man cannot be fair, then only one wife 📋'},
    fr:{title:'La Polygamie en Contexte',desc:'La polygamie est conditionnee par une justice complete, c\'est l\'exception. Al-Ghazali souligne que beaucoup comprennent mal et ignorent la condition de justice.',verse:'Si vous craignez de ne pas etre justes, alors une seule',verseRef:'An-Nisa 3',hadith:'Celui qui a deux epouses et penche vers l\'une viendra le Jour du Jugement penche — Abu Dawud',action:'Comprenez les conditions strictes avant de juger',young:'La justice est essentielle ! Si un homme ne peut etre juste, une seule epouse 📋'}
  },
  {
    id:16, emoji:'🎤',
    ar:{title:'شهادة المرأة',desc:'شهادة المرأة ليست أقل قيمة. آية الدَّين تتحدث عن حالة خاصة. في قضايا أخرى شهادتها مساوية. الغزالي يصحح هذا الفهم الخاطئ.',verse:'وَاسْتَشْهِدُوا شَهِيدَيْنِ مِن رِّجَالِكُمْ',verseRef:'البقرة ٢٨٢',hadith:'خذوا نصف دينكم عن الحميراء — رواه الحاكم',action:'ادرس موضوع الشهادة بعمق بعيداً عن الأحكام المسبقة',young:'شهادة المرأة مقبولة ومهمة! عائشة كانت مرجعاً للجميع 🎤'},
    en:{title:'Women\'s Testimony',desc:'Women\'s testimony is not of lesser value. The debt verse addresses a specific case. In other matters women\'s testimony is equal. Al-Ghazali corrects this misconception.',verse:'And bring two witnesses from among your men',verseRef:'Al-Baqarah 282',hadith:'Take half your religion from Humayra (Aisha) — al-Hakim',action:'Study the topic of testimony deeply, beyond preconceptions',young:'Women\'s testimony is accepted and important! Aisha was a reference for all 🎤'},
    fr:{title:'Le Temoignage des Femmes',desc:'Le temoignage des femmes n\'est pas de moindre valeur. Le verset de la dette traite d\'un cas specifique. Al-Ghazali corrige cette idee fausse.',verse:'Et faites temoigner deux temoins parmi vos hommes',verseRef:'Al-Baqarah 282',hadith:'Prenez la moitie de votre religion de Humayra (Aisha) — al-Hakim',action:'Etudiez le sujet du temoignage en profondeur',young:'Le temoignage des femmes est accepte et important ! 🎤'}
  },
  {
    id:17, emoji:'👑',
    ar:{title:'المرأة والقيادة',desc:'المرأة قادت أمماً في القرآن: بلقيس ملكة سبأ أدارت مملكة بحكمة. الغزالي لا يمنع المرأة من المناصب القيادية إذا كانت مؤهلة.',verse:'إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ وَأُوتِيَتْ مِن كُلِّ شَيْءٍ وَلَهَا عَرْشٌ عَظِيمٌ',verseRef:'النمل ٢٣',hadith:'إن الله لا ينظر إلى صوركم ولكن ينظر إلى قلوبكم وأعمالكم — رواه مسلم',action:'ادعم قيادة المرأة المؤهلة في كل المجالات',young:'بلقيس كانت ملكة حكيمة! المرأة يمكنها أن تقود 👑'},
    en:{title:'Women and Leadership',desc:'Women led nations in the Quran: Bilqis, Queen of Sheba, managed a kingdom wisely. Al-Ghazali does not prohibit women from leadership if qualified.',verse:'I found a woman ruling them, given everything, and she has a great throne',verseRef:'An-Naml 23',hadith:'God does not look at appearances but at hearts and deeds — Muslim',action:'Support qualified women\'s leadership in all fields',young:'Bilqis was a wise queen! Women can lead successfully 👑'},
    fr:{title:'La Femme et le Leadership',desc:'Les femmes ont dirige des nations dans le Coran : Bilqis, Reine de Saba, a gere un royaume avec sagesse. Al-Ghazali ne l\'interdit pas aux femmes qualifiees.',verse:'J\'ai trouve une femme qui les gouverne, dotee de tout, avec un grand trone',verseRef:'An-Naml 23',hadith:'Dieu ne regarde pas les apparences mais les coeurs et les actes — Muslim',action:'Soutenez le leadership des femmes qualifiees',young:'Bilqis etait une reine sage ! Les femmes peuvent diriger 👑'}
  },
  {
    id:18, emoji:'🌐',
    ar:{title:'تحديات العصر الحديث',desc:'تواجه المرأة المسلمة ضغوطاً من طرفين: التقاليد الجامدة التي تحرمها حقوقها، والثقافة الوافدة التي تريد تغريبها. الحل في الإسلام الصحيح.',verse:'وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ',verseRef:'الإسراء ٣٦',hadith:'إن الله لا يقبض العلم انتزاعاً ولكن بقبض العلماء — متفق عليه',action:'ميّز بين العادات والتقاليد وبين أحكام الإسلام الحقيقية',young:'لا تخلط بين العادات القديمة والإسلام الحقيقي! 🌐'},
    en:{title:'Modern Challenges',desc:'Muslim women face pressure from two sides: rigid traditions denying rights, and foreign culture seeking westernization. The solution is returning to true Islam.',verse:'And do not pursue that of which you have no knowledge',verseRef:'Al-Isra 36',hadith:'God does not remove knowledge by snatching it but by taking scholars — Agreed upon',action:'Distinguish between customs and true Islamic rulings',young:'Do not confuse old customs with true Islam! 🌐'},
    fr:{title:'Les Defis Modernes',desc:'Les femmes musulmanes font face a des pressions de deux cotes : traditions rigides et culture etrangere. La solution est le retour au vrai Islam.',verse:'Et ne poursuis pas ce dont tu n\'as aucune connaissance',verseRef:'Al-Isra 36',hadith:'Dieu ne retire pas la science en l\'arrachant mais en prenant les savants — Unanimement reconnu',action:'Distinguez entre les coutumes et les vrais jugements de l\'Islam',young:'Ne confonds pas les vieilles coutumes avec le vrai Islam ! 🌐'}
  },
  {
    id:19, emoji:'🤝',
    ar:{title:'المساواة في العبادة',desc:'المرأة والرجل متساويان أمام الله في العبادة والأجر. لا فرق في التقوى والعمل الصالح. الله لا يضيع عمل عامل ذكراً أو أنثى.',verse:'فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لَا أُضِيعُ عَمَلَ عَامِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَىٰ',verseRef:'آل عمران ١٩٥',hadith:'إنما النساء شقائق الرجال — رواه أبو داود',action:'تذكر أن الله يكافئ الجميع بالتساوي',young:'الله يحب الجميع بالتساوي! لا فرق في العبادة 🤝'},
    en:{title:'Equality in Worship',desc:'Women and men are completely equal before God in worship and reward. No difference in piety and good deeds. God does not waste the work of any worker.',verse:'Their Lord responded: I do not waste the work of any worker among you, male or female',verseRef:'Al Imran 195',hadith:'Women are the twin halves of men — Abu Dawud',action:'Remember God rewards everyone equally — males and females',young:'God loves everyone equally! No difference in worship 🤝'},
    fr:{title:'L\'Egalite dans l\'Adoration',desc:'Les femmes et les hommes sont egaux devant Dieu dans l\'adoration et la recompense. Pas de difference dans la piete.',verse:'Leur Seigneur repondit : Je ne perds pas l\'oeuvre d\'un ouvrier, homme ou femme',verseRef:'Al Imran 195',hadith:'Les femmes sont les moities jumelles des hommes — Abu Dawud',action:'Rappelez-vous que Dieu recompense egalement',young:'Dieu aime tout le monde egalement ! Pas de difference 🤝'}
  },
  {
    id:20, emoji:'🌸',
    ar:{title:'التكامل لا التنافس',desc:'العلاقة بين الرجل والمرأة تكاملية لا تنافسية. كل منهما يكمل الآخر. الأسرة القوية تُبنى على التعاون والمودة والرحمة.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله — رواه الترمذي',action:'ابنِ علاقاتك على التكامل والمودة',young:'الرجل والمرأة فريق واحد! كل منهما يكمل الآخر بمحبة 🌸'},
    en:{title:'Complementary Not Competitive',desc:'The relationship between men and women is complementary, not competitive. Each completes the other. A strong family is built on cooperation, affection, and mercy.',verse:'Among His signs is that He created mates for you that you may find tranquility, and He placed affection and mercy between you',verseRef:'Ar-Rum 21',hadith:'The best of you is the best to his family — al-Tirmidhi',action:'Build your relationships on complementarity and affection',young:'Men and women are one team! Each completes the other with love 🌸'},
    fr:{title:'Complementaires, Pas en Competition',desc:'La relation entre hommes et femmes est complementaire. Chacun complete l\'autre. Une famille forte se construit sur la cooperation, l\'affection et la misericorde.',verse:'Parmi Ses signes, Il a cree des epouses pour la tranquillite, et Il a mis affection et misericorde entre vous',verseRef:'Ar-Rum 21',hadith:'Le meilleur est celui qui est le meilleur envers sa famille — al-Tirmidhi',action:'Construisez vos relations sur la complementarite et l\'affection',young:'Les hommes et les femmes sont une equipe ! Chacun complete l\'autre 🌸'}
  }
];

// ═══════════════ QUIZ DATA (15 questions) ═══════════════
const QUIZ = [
  {ar:{q:'ما السورة المسماة بالنساء في القرآن؟',opts:['البقرة','النساء','مريم','الطلاق'],correct:1,hint:'السورة الرابعة',quran:'النساء ١'},en:{q:'Which surah is named "The Women"?',opts:['Al-Baqarah','An-Nisa','Maryam','At-Talaq'],correct:1,hint:'The fourth surah',quran:'An-Nisa 1'},fr:{q:'Quelle sourate porte le nom "Les Femmes" ?',opts:['Al-Baqarah','An-Nisa','Maryam','At-Talaq'],correct:1,hint:'La quatrieme sourate',quran:'An-Nisa 1'}},
  {ar:{q:'من أسست أول جامعة في العالم؟',opts:['عائشة','خديجة','فاطمة الفهرية','أم سلمة'],correct:2,hint:'جامعة القرويين في فاس',quran:'المجادلة ١١'},en:{q:'Who founded the world\'s first university?',opts:['Aisha','Khadijah','Fatima al-Fihri','Umm Salamah'],correct:2,hint:'University of al-Qarawiyyin in Fez',quran:'Al-Mujadilah 11'},fr:{q:'Qui a fonde la premiere universite au monde ?',opts:['Aisha','Khadijah','Fatima al-Fihri','Umm Salamah'],correct:2,hint:'Universite al-Qarawiyyin a Fes',quran:'Al-Mujadilah 11'}},
  {ar:{q:'من أحق الناس بحسن الصحبة؟',opts:['الأب','الأم','الصديق','الجار'],correct:1,hint:'قالها ثلاث مرات قبل الأب',quran:'لقمان ١٤'},en:{q:'Who is most deserving of good companionship?',opts:['Father','Mother','Friend','Neighbor'],correct:1,hint:'Mentioned three times before the father',quran:'Luqman 14'},fr:{q:'Qui merite le plus la bonne compagnie ?',opts:['Le pere','La mere','L\'ami','Le voisin'],correct:1,hint:'Mentionne trois fois avant le pere',quran:'Luqman 14'}},
  {ar:{q:'من كانت تاجرة ناجحة قبل الإسلام؟',opts:['عائشة','فاطمة','خديجة','مريم'],correct:2,hint:'أول من آمن بالنبي',quran:'النساء ٣٢'},en:{q:'Who was a successful merchant before Islam?',opts:['Aisha','Fatimah','Khadijah','Maryam'],correct:2,hint:'First to believe in the Prophet',quran:'An-Nisa 32'},fr:{q:'Qui etait marchande prospere avant l\'Islam ?',opts:['Aisha','Fatimah','Khadijah','Maryam'],correct:2,hint:'Premiere a croire au Prophete',quran:'An-Nisa 32'}},
  {ar:{q:'ما شرط تعدد الزوجات؟',opts:['الغنى','العدل التام','إذن الأولى','لا شروط'],correct:1,hint:'إن خفتم ألا تعدلوا...',quran:'النساء ٣'},en:{q:'What is the condition for polygamy?',opts:['Wealth','Complete justice','First wife\'s permission','No conditions'],correct:1,hint:'If you fear you will not be just...',quran:'An-Nisa 3'},fr:{q:'Quelle est la condition de la polygamie ?',opts:['La richesse','La justice complete','La permission de la premiere','Aucune'],correct:1,hint:'Si vous craignez de ne pas etre justes...',quran:'An-Nisa 3'}},
  {ar:{q:'أكمل: "إنما النساء ..."',opts:['ناقصات','شقائق الرجال','ضعيفات','تابعات'],correct:1,hint:'تساوٍ وتكامل',quran:'النساء ١٢٤'},en:{q:'Complete: "Women are ..."',opts:['Deficient','Twin halves of men','Weak','Subordinate'],correct:1,hint:'Equality and complementarity',quran:'An-Nisa 124'},fr:{q:'Completez : "Les femmes sont ..."',opts:['Deficientes','Moities jumelles des hommes','Faibles','Subordonnees'],correct:1,hint:'Egalite et complementarite',quran:'An-Nisa 124'}},
  {ar:{q:'من الملكة القرآنية الحكيمة؟',opts:['آسية','مريم','بلقيس','هاجر'],correct:2,hint:'ملكة سبأ',quran:'النمل ٢٣'},en:{q:'Which Quranic queen ruled wisely?',opts:['Asiya','Maryam','Bilqis','Hajar'],correct:2,hint:'Queen of Sheba',quran:'An-Naml 23'},fr:{q:'Quelle reine coranique a gouverne sagement ?',opts:['Asiya','Maryam','Bilqis','Hajar'],correct:2,hint:'Reine de Saba',quran:'An-Naml 23'}},
  {ar:{q:'أكمل: "خيركم خيركم ..."',opts:['لجيرانه','لأصدقائه','لأهله','للفقراء'],correct:2,hint:'معاملة الأسرة',quran:'النساء ١٩'},en:{q:'Complete: "The best of you is the best to ..."',opts:['Neighbors','Friends','Family','The poor'],correct:2,hint:'Family treatment',quran:'An-Nisa 19'},fr:{q:'Completez : "Le meilleur est le meilleur envers ..."',opts:['Ses voisins','Ses amis','Sa famille','Les pauvres'],correct:2,hint:'Traitement de la famille',quran:'An-Nisa 19'}},
  {ar:{q:'هل يحق للمرأة رفض الزواج؟',opts:['نعم رضاها شرط','لا الأب يقرر','حسب العرف','حسب الثروة'],correct:0,hint:'رضاها شرط لصحة العقد',quran:'النساء ١٩'},en:{q:'Can a woman refuse marriage?',opts:['Yes consent required','No father decides','Depends on custom','Depends on wealth'],correct:0,hint:'Consent is required for validity',quran:'An-Nisa 19'},fr:{q:'La femme peut-elle refuser un mariage ?',opts:['Oui consentement requis','Non le pere decide','Selon la coutume','Selon la richesse'],correct:0,hint:'Le consentement est requis',quran:'An-Nisa 19'}},
  {ar:{q:'من مؤلف "قضايا المرأة"؟',opts:['القرضاوي','محمد الغزالي','سيد قطب','المودودي'],correct:1,hint:'أديب الدعوة',quran:'النساء ١'},en:{q:'Who authored "Women\'s Issues"?',opts:['Al-Qaradawi','Mohammed al-Ghazali','Sayyid Qutb','Maududi'],correct:1,hint:'The Literary Preacher',quran:'An-Nisa 1'},fr:{q:'Qui a ecrit "Questions Feminines" ?',opts:['Al-Qaradawi','Mohammed al-Ghazali','Sayyid Qutb','Maududi'],correct:1,hint:'Le Litteraire de la Predication',quran:'An-Nisa 1'}},
  {ar:{q:'ما هو الخلع؟',opts:['طلاق الرجل','حق المرأة في فسخ الزواج','إلغاء المهر','الزواج الثاني'],correct:1,hint:'حق شرعي للمرأة',quran:'البقرة ٢٢٩'},en:{q:'What is khul?',opts:['Man\'s divorce','Woman\'s right to dissolve marriage','Dowry cancellation','Second marriage'],correct:1,hint:'A legal right for women',quran:'Al-Baqarah 229'},fr:{q:'Qu\'est-ce que le khul ?',opts:['Divorce du mari','Droit de la femme a la dissolution','Annulation de dot','Deuxieme mariage'],correct:1,hint:'Un droit legal pour les femmes',quran:'Al-Baqarah 229'}},
  {ar:{q:'أي آية تأمر بالعشرة بالمعروف؟',opts:['آل عمران ١٩٥','النساء ١٩','البقرة ٢٨٢','الأحزاب ٥٩'],correct:1,hint:'في سورة النساء',quran:'النساء ١٩'},en:{q:'Which verse commands living with women in kindness?',opts:['Al Imran 195','An-Nisa 19','Al-Baqarah 282','Al-Ahzab 59'],correct:1,hint:'In Surah An-Nisa',quran:'An-Nisa 19'},fr:{q:'Quel verset ordonne de vivre avec les femmes dans la bonte ?',opts:['Al Imran 195','An-Nisa 19','Al-Baqarah 282','Al-Ahzab 59'],correct:1,hint:'Dans sourate An-Nisa',quran:'An-Nisa 19'}},
  {ar:{q:'من أولى بحضانة الطفل بعد الطلاق؟',opts:['الأب','الأم','الجد','القاضي'],correct:1,hint:'أنتِ أحق به',quran:'البقرة ٢٣٣'},en:{q:'Who has custody priority after divorce?',opts:['Father','Mother','Grandfather','Judge'],correct:1,hint:'You have more right to him',quran:'Al-Baqarah 233'},fr:{q:'Qui a la priorite de garde apres le divorce ?',opts:['Le pere','La mere','Le grand-pere','Le juge'],correct:1,hint:'Tu as plus de droit sur lui',quran:'Al-Baqarah 233'}},
  {ar:{q:'ماذا قال القرآن عن أجر الرجل والمرأة؟',opts:['الرجل أفضل','المرأة أفضل','متساويان','حسب الاجتهاد'],correct:2,hint:'لا أضيع عمل عامل',quran:'آل عمران ١٩٥'},en:{q:'What does the Quran say about men\'s and women\'s reward?',opts:['Men better','Women better','Equal','Depends on effort'],correct:2,hint:'I do not waste the work of any worker',quran:'Al Imran 195'},fr:{q:'Que dit le Coran sur la recompense ?',opts:['Hommes meilleurs','Femmes meilleures','Egaux','Selon l\'effort'],correct:2,hint:'Je ne perds pas l\'oeuvre d\'un ouvrier',quran:'Al Imran 195'}},
  {ar:{q:'أي آية تتحدث عن المودة والرحمة بين الزوجين؟',opts:['النساء ١','الروم ٢١','البقرة ٢٢٩','الأحزاب ٣٥'],correct:1,hint:'ومن آياته أن خلق لكم...',quran:'الروم ٢١'},en:{q:'Which verse speaks of spousal affection and mercy?',opts:['An-Nisa 1','Ar-Rum 21','Al-Baqarah 229','Al-Ahzab 35'],correct:1,hint:'Among His signs He created for you...',quran:'Ar-Rum 21'},fr:{q:'Quel verset parle d\'affection et misericorde entre epoux ?',opts:['An-Nisa 1','Ar-Rum 21','Al-Baqarah 229','Al-Ahzab 35'],correct:1,hint:'Parmi Ses signes Il a cree pour vous...',quran:'Ar-Rum 21'}}
];

// ═══════════════ DUAS DATA (8 duas) ═══════════════
const DUAS = [
  {ar:{label:'دعاء للوالدين',text:'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'الإسراء ٢٤'},en:{label:'Dua for Parents',text:'My Lord, have mercy upon them as they brought me up when I was small',tr:'Al-Isra 24'},fr:{label:'Dua pour les Parents',text:'Seigneur, fais-leur misericorde comme ils m\'ont eleve petit',tr:'Al-Isra 24'}},
  {ar:{label:'دعاء الأسرة الصالحة',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'الفرقان ٧٤'},en:{label:'Dua for Righteous Family',text:'Our Lord, grant us from our spouses and offspring comfort to our eyes',tr:'Al-Furqan 74'},fr:{label:'Dua pour une Famille Pieuse',text:'Seigneur, accorde-nous de nos epoux et descendants la joie des yeux',tr:'Al-Furqan 74'}},
  {ar:{label:'دعاء العلم النافع',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'دعاء بعد الفجر'},en:{label:'Dua for Beneficial Knowledge',text:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds',tr:'After Fajr'},fr:{label:'Dua pour un Savoir Utile',text:'O Dieu, je Te demande un savoir utile, une bonne subsistance et des oeuvres acceptees',tr:'Apres le Fajr'}},
  {ar:{label:'دعاء حسن الخلق',text:'اللهم اهدني لأحسن الأخلاق لا يهدي لأحسنها إلا أنت',tr:'رواه مسلم'},en:{label:'Dua for Good Character',text:'O God, guide me to the best of character; none can guide to it but You',tr:'Muslim'},fr:{label:'Dua pour le Bon Caractere',text:'O Dieu, guide-moi vers les meilleurs caracteres; nul ne peut y guider sauf Toi',tr:'Muslim'}},
  {ar:{label:'دعاء الهداية',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'دعاء مأثور'},en:{label:'Dua for Guidance',text:'O God, show us truth as truth and grant us to follow it, and show us falsehood and grant us to avoid it',tr:'Traditional supplication'},fr:{label:'Dua de Guidance',text:'O Dieu, montre-nous la verite et accorde-nous de la suivre, et montre-nous le faux et accorde-nous de l\'eviter',tr:'Invocation traditionnelle'}},
  {ar:{label:'دعاء العدل',text:'اللهم إني أعوذ بك من الظلم والشقاق والنفاق',tr:'دعاء نبوي'},en:{label:'Dua for Justice',text:'O God, I seek refuge in You from injustice, discord, and hypocrisy',tr:'Prophetic supplication'},fr:{label:'Dua de Justice',text:'O Dieu, je cherche refuge contre l\'injustice, la discorde et l\'hypocrisie',tr:'Invocation prophetique'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},en:{label:'Dua for Patience',text:'Our Lord, pour upon us patience and plant firmly our feet',tr:'Al-Baqarah 250'},fr:{label:'Dua de Patience',text:'Seigneur, deverse sur nous la patience et affermis nos pas',tr:'Al-Baqarah 250'}},
  {ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'طه ٢٥-٢٦'},en:{label:'Dua for Success',text:'My Lord, expand for me my chest and ease for me my task',tr:'Ta-Ha 25-26'},fr:{label:'Dua de Succes',text:'Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache',tr:'Ta-Ha 25-26'}}
];

// ═══════════════ BADGES ═══════════════
const BADGE_DEFS = [
  {id:'beginner',emoji:'🌱',xp:0,ar:'مبتدئ',en:'Beginner',fr:'Debutant'},
  {id:'reader',emoji:'📖',xp:50,ar:'قارئ',en:'Reader',fr:'Lecteur'},
  {id:'scholar',emoji:'🎓',xp:150,ar:'عالم',en:'Scholar',fr:'Savant'},
  {id:'persistent',emoji:'🔥',xp:300,ar:'مثابر',en:'Persistent',fr:'Perseverant'},
  {id:'expert',emoji:'🏆',xp:500,ar:'خبير',en:'Expert',fr:'Expert'}
];

// ═══════════════ STORAGE KEYS ═══════════════
const STORE_PREFIX = 'qadaya_marah_';
const READ_KEY = STORE_PREFIX + 'read';
const XP_KEY = STORE_PREFIX + 'xp';
const STREAK_KEY = STORE_PREFIX + 'streak';
const MODE_KEY = STORE_PREFIX + 'mode';
const QUIZ_BEST_KEY = STORE_PREFIX + 'quizBest';

// ═══════════════ XP & BADGES ═══════════════
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(n) {
  const xp = getXP() + n;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
}
function getLevel(xp) { return Math.floor(xp / 100) + 1; }
function getEarnedBadges() { return BADGE_DEFS.filter(b => getXP() >= b.xp).map(b => b.id); }
function checkBadges(xp) {
  const newBadge = BADGE_DEFS.find(b => xp >= b.xp && xp - 10 < b.xp);
  if (newBadge) showToast(`${newBadge.emoji} ${newBadge[lang]}!`);
}

// ═══════════════ READ TRAITS ═══════════════
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  // Update header and splash
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set('appTitle', t.appTitle);
  set('splashSub', t.splashSub);
  set('splashHint', t.splashHint);
  // Update tabs
  set('tabHome', t.tabHome);
  set('tabTraits', t.tabTraits);
  set('tabQuiz', t.tabQuiz);
  set('tabProgress', t.tabProgress);
  set('tabAbout', t.tabAbout);
  // Update section titles
  set('traitsTitle', t.traitsTitle);
  set('traitsDesc', t.traitsDesc);
  set('quizTitle', t.quizTitle);
  set('quizDesc', t.quizDesc);
  set('progressTitle', t.progressTitle);
  set('progressDesc', t.progressDesc);
  // Update panels
  set('helpTitle', t.helpTitle);
  set('duaPanelTitle', t.duaPanelTitle);
  // Update age mode button
  const ageModeBtn = document.getElementById('ageModeBtn');
  if (ageModeBtn) ageModeBtn.textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  // Update splash features
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  // Render all sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  // Daily trait based on day of month
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Home grid: quick access to all 20 issues
  const sections = [
    {icon:'📖', tab:'traits', title:t.tabTraits, desc:lang==='ar'?'٢٠ قضية عن حقوق المرأة':lang==='fr'?'20 questions sur les droits des femmes':'20 issues on women\'s rights'},
    {icon:'🏆', tab:'quiz', title:t.tabQuiz, desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez vos connaissances':'Test your knowledge'},
    {icon:'📊', tab:'progress', title:t.tabProgress, desc:lang==='ar'?'تقدمك وإنجازاتك':lang==='fr'?'Vos progres et realisations':'Your progress and achievements'},
    {icon:'📚', tab:'about', title:t.tabAbout, desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="switchTab('${s.tab}')">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer') || document.getElementById('conceptsContainer'));
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

async function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n\n${d.desc}\n\n📖 ${d.verse}\n— ${d.verseRef}\n\n📜 ${d.hadith}\n\n💡 ${d.action}\n\n— ${T[lang].appTitle}`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); }
    catch(e) { /* User cancelled share */ }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang==='ar' ? 'تم النسخ!' : lang==='fr' ? 'Copie !' : 'Copied!');
    } catch(e) {
      showToast(lang==='ar' ? 'تعذر النسخ' : 'Could not copy');
    }
  }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  // Bonus XP for completing quiz
  addXP(20);
  // Determine result tier
  let emoji, title, desc;
  if (pct >= 80) {
    emoji = '🏆';
    title = lang==='ar' ? 'عالم حقيقي!' : lang==='fr' ? 'Un vrai savant !' : 'A True Scholar!';
    desc = lang==='ar' ? 'معرفتك بقضايا المرأة ممتازة!' : lang==='fr' ? 'Votre connaissance des questions feminines est excellente !' : 'Your knowledge of women\'s issues is excellent!';
  } else if (pct >= 50) {
    emoji = '📖';
    title = lang==='ar' ? 'جيد جداً!' : lang==='fr' ? 'Tres bien !' : 'Very Good!';
    desc = lang==='ar' ? 'راجع القضايا لتعزيز معرفتك' : lang==='fr' ? 'Revisez les questions pour renforcer vos connaissances' : 'Review the issues to strengthen your knowledge';
  } else {
    emoji = '🌱';
    title = lang==='ar' ? 'واصل التعلم!' : lang==='fr' ? 'Continuez d\'apprendre !' : 'Keep Learning!';
    desc = lang==='ar' ? 'اقرأ القضايا بتمعن ثم أعد المسابقة' : lang==='fr' ? 'Lisez attentivement les questions puis refaites le quiz' : 'Read the issues carefully then retry the quiz';
  }
  // Render result
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <div class="qr-pct">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  // Confetti for high scores
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'قضية مقروءة':lang==='fr'?'Questions lues':'Issues Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. عُرف بدفاعه عن حقوق المرأة في الإسلام ونقده للتقاليد الجامدة التي تُلبس ثوب الدين.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«قضايا المرأة بين التقاليد الراكدة والوافدة» كتاب يتناول قضايا المرأة المسلمة بجرأة وعمق. ينتقد الغزالي التقاليد الجامدة التي ظلمت المرأة وألبست الظلم ثوب الدين، كما ينتقد التغريب الذي يريد تذويب هوية المرأة المسلمة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "قضايا المرأة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن أبي داود والترمذي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Known for defending women\'s rights in Islam and critiquing rigid traditions disguised as religion.',
      bookTitle: 'About the Book',
      bookDesc: '"Women\'s Issues Between Stagnant and Foreign Traditions" tackles Muslim women\'s issues boldly and deeply. Al-Ghazali critiques rigid traditions that wronged women in the name of religion, and also critiques westernization that seeks to dissolve Muslim women\'s identity.',
      sourcesTitle: 'Sources',
      sources: ['"Women\'s Issues" (Qadaya al-Mar\'ah) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan Abu Dawud and al-Tirmidhi'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Connu pour la defense des droits des femmes en Islam et la critique des traditions rigides.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Questions Feminines entre Traditions Stagnantes et Etrangeres" aborde les questions des femmes musulmanes avec audace. Al-Ghazali critique les traditions rigides qui ont lese les femmes au nom de la religion, et aussi le courant d\'occidentalisation.',
      sourcesTitle: 'Sources',
      sources: ['"Questions Feminines" (Qadaya al-Mar\'ah) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan Abu Dawud et al-Tirmidhi'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر فهم قضايا المرأة في الإسلام بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "قضايا المرأة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ قضية، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/qadaya-al-marah'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share understanding of women\'s issues in Islam interactively.'},
      {title:'📚 Sources',body:'"Women\'s Issues" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 issues, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/qadaya-al-marah'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la comprehension des questions feminines en Islam.'},
      {title:'📚 Sources',body:'"Questions Feminines" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 questions, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/qadaya-al-marah'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ قضية جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ٢٠ قضية لتصبح خبيراً'],
    en: ['📖 Read a new issue every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua','⭐ Complete all 20 issues to become an Expert'],
    fr: ['📖 Lisez une nouvelle question chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Completez les 20 questions pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI CELEBRATION ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ SCROLL TOP BUTTON ═══════════════
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════ ACCESSIBILITY ═══════════════
function initAccessibility() {
  // Add ARIA labels for interactive elements
  document.querySelectorAll('.trait-card').forEach(card => {
    card.setAttribute('role', 'article');
  });
  document.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.setAttribute('role', 'button');
  });
  // Focus management for panels
  document.querySelectorAll('.tab').forEach(tab => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('tabindex', '0');
  });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class on body
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update daily streak
  updateStreak();
  // Initialize all components
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
  initAccessibility();
});
