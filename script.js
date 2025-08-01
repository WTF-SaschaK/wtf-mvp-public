// ================================================================
// ==  HIER BEGINNT DER BEREICH ZUM HINZUFÜGEN VON INHALTEN    ==
// ================================================================
const contentData = {
  uiStrings: {
    navHome: { de: "Start", en: "Home" },
    navStories: { de: "WTF-Stories", en: "WTF-Stories" },
    navFacts: { de: "WTF-Fakts", en: "WTF-Facts" },
    navGames: { de: "WTF-Gamehub", en: "WTF-Gamehub" },
    navPremium: { de: "Premium", en: "Premium" },
    navStore: { de: "Store", en: "Store" },
    navProfile: { de: "Profil", en: "Profile" },
    navImpressum: { de: "Impressum", en: "Legal Notice" },
    impressumTitle: { de: "Impressum", en: "Legal Notice" },
    welcomeTitle: {
      de: "Willkommen, Zukunfts-Entdecker!",
      en: "Welcome, Future Explorer!",
    },
    welcomeSubtitle: {
      de: "Tauche ein in die Welt von morgen. Entdecke faszinierende Stories, lerne unglaubliche Fakten und teste dein Wissen in unseren Games.",
      en: "Dive into the world of tomorrow. Discover fascinating stories, learn incredible facts, and test your knowledge in our games.",
    },
    username: { de: "Zukunfts-Entdecker", en: "Future Explorer" },
    level: { de: "Lvl", en: "Lvl" },
    wtfCoins: { de: "WTF-Coins", en: "WTF-Coins" },
    storeTitle: { de: "WTF-Store", en: "WTF-Store" },
    startCard1: { de: "WTF-STORIES", en: "WTF-STORIES" },
    startCard2: { de: "WTF-FACTS", en: "WTF-FACTS" },
    startCard3: { de: "WTF-GAMEHUB", en: "WTF-GAMEHUB" },
    themenweltTitle: { de: "WTF-STORIES", en: "WTF-STORIES" },
    artikelHubTitle: { de: "WTF-FACTS", en: "WTF-FACTS" },
    spieleHubTitle: { de: "WTF-GAMEHUB", en: "WTF-GAMEHUB" },
    premiumTitle: {
      de: "Exklusive Premium-Inhalte",
      en: "Exclusive Premium Content",
    },
    premiumSubtitle: {
      de: "Schalte exklusive Stories, Fakten und Spiele frei, um dein Wissen über die Zukunft zu vertiefen.",
      en: "Unlock exclusive stories, facts, and games to deepen your knowledge of the future.",
    },
    placeholder: {
      de: "Wähle links eine Kategorie!",
      en: "Select a category on the left!",
    },
    myProfile: { de: "Mein Profil", en: "My Profile" },
    profileLevel: { de: "Level", en: "Level" },
    progressLabel: {
      de: "Fortschritt zum nächsten Level",
      en: "Progress to next level",
    },
    yourBadges: { de: "Deine Erfolge", en: "Your Achievements" },
    searchResultsTitle: {
      de: "Suchergebnisse für",
      en: "Search results for",
    },
    searchNotFound: {
      de: "Für deine Suche wurde nichts gefunden.",
      en: "Nothing was found for your search.",
    },
    searchPlaceholder: {
      de: "Suche nach Stories, Facts oder Games...",
      en: "Search for stories, facts or games...",
    },
    levelUpTitle: { de: "LEVEL UP!", en: "LEVEL UP!" },
    levelUpText: {
      de: "Du hast Level {level} erreicht!",
      en: "You reached level {level}!",
    },
    levelUpButton: { de: "Super!", en: "Awesome!" },
    badgeUnlockedTitle: {
      de: "ERFOLG FREIGESCHALTET!",
      en: "ACHIEVEMENT UNLOCKED!",
    },
    badgeUnlockedButton: { de: "Cool!", en: "Cool!" },
    noContent: {
      de: "Bald gibt's hier mehr zu entdecken!",
      en: "More to discover here soon!",
    },
    closeButton: { de: "Schließen", en: "Close" },
    gameScore: { de: "Punkte", en: "Score" },
    gameTimer: { de: "Zeit", en: "Time" },
    gameStartGame: { de: "Spiel starten", en: "Start Game" },
    gameOver: { de: "GAME OVER!", en: "GAME OVER!" },
    gameRestart: { de: "Neustart", en: "Restart" },
    gameChooseReal: {
      de: "Wähle das ECHTE Bild",
      en: "Choose the REAL image",
    },
    gameCorrect: { de: "Korrekt!", en: "Correct!" },
    gameWrong: { de: "Falsch!", en: "Wrong!" },
    gameFinalScore: { de: "Endstand", en: "Final Score" },
    memoryMoves: { de: "Züge", en: "Moves" },
    memoryCongrats: { de: "Glückwunsch!", en: "Congratulations!" },
    memoryDone: {
      de: "Du hast es in {moves} Zügen geschafft!",
      en: "You did it in {moves} moves!",
    },
    imageGenPrompt: {
      de: "Beschreibe dein Lieblingsspielzeug...",
      en: "Describe your favorite toy...",
    },
    imageGenButton: {
      de: "✨ Bild erschaffen",
      en: "✨ Create Image",
    },
    imageGenLoading: {
      de: "Die KI zeichnet dein Bild...",
      en: "The AI is drawing your picture...",
    },
    explainSimplyButton: {
      de: "✨ Erklär's mir einfacher!",
      en: "✨ Explain it simply!",
    },
    explainSimplyTitle: {
      de: "Kurz & Knapp erklärt",
      en: "Explained in short",
    },
    explainSimplyLoading: {
      de: "Die Zukunfts-KI denkt nach...",
      en: "The Future AI is thinking...",
    },
    premiumModalTitle: {
      de: "Werde Premium-Entdecker!",
      en: "Become a Premium Explorer!",
    },
    premiumModalText: {
      de: "Schalte alle exklusiven Inhalte frei und unterstütze das Projekt.",
      en: "Unlock all exclusive content and support the project.",
    },
    premiumModalButton: { de: "Jetzt Premium werden", en: "Go Premium Now" },
    onboarding: {
      welcomeTitle: {
        de: "Willkommen bei WTF!",
        en: "Welcome to WTF!",
      },
      welcomeText: {
        de: "Bist du bereit, die Zukunft zu entdecken? Lass uns zusammen loslegen!",
        en: "Are you ready to discover the future? Let's get started together!",
      },
      profileTitle: {
        de: "Erschaffe deinen Entdecker",
        en: "Create Your Explorer",
      },
      profileName: {
        de: "Wie sollen wir dich nennen?",
        en: "What should we call you?",
      },
      profileAvatar: {
        de: "Wähle deinen ersten Avatar:",
        en: "Choose your first avatar:",
      },
      gamifyTitle: {
        de: "Sammle & Entdecke",
        en: "Collect & Discover",
      },
      gamifyXP: {
        de: "Fürs Lesen, Spielen und Quizzen sammelst du XP (Erfahrungspunkte) und steigst im Level auf.",
        en: "For reading, playing, and quizzing, you'll collect XP (Experience Points) and level up.",
      },
      gamifyCoins: {
        de: "Mit WTF-Coins schaltest du im Store neue Avatare und coole Sachen frei.",
        en: "With WTF-Coins, you can unlock new avatars and cool stuff in the store.",
      },
      finalTitle: { de: "Auf geht's!", en: "Let's Go!" },
      finalTask: {
        de: "Deine erste Mission: Lies eine WTF-Story und verdiene dir deine erste Belohnung.",
        en: "Your first mission: Read a WTF-Story and earn your first reward.",
      },
      finalReward: {
        de: "Als Startbonus erhältst du:",
        en: "As a starting bonus, you get:",
      },
      nextButton: { de: "Weiter", en: "Next" },
      finishButton: {
        de: "Abenteuer starten!",
        en: "Start Adventure!",
      },
    },
  },
  storeItems: {
    avatars: [
      {
        id: "avatar_alien",
        image: "assets/icons/1neuling.png",
        cost: 100,
        requiredLevel: 2,
      },
      {
        id: "avatar_robot",
        image: "assets/icons/2entdeckerlehrling.png",
        cost: 100,
        requiredLevel: 2,
      },
      {
        id: "avatar_ghost",
        image: "assets/icons/3wissenstüftler.png",
        cost: 150,
        requiredLevel: 3,
      },
      {
        id: "avatar_astronaut",
        image: "assets/icons/4zukunftsentdecker.png",
        cost: 200,
        requiredLevel: 4,
      },
      {
        id: "avatar_scientist",
        image: "assets/icons/6minimaster.png",
        cost: 200,
        requiredLevel: 4,
      },
      {
        id: "avatar_star",
        image: "assets/icons/7lvlmaster.png",
        cost: 250,
        requiredLevel: 5,
      },
      {
        id: "avatar_dna",
        image: "assets/icons/8holoprofi.png",
        cost: 300,
        requiredLevel: 6,
      },
      {
        id: "avatar_telescope",
        image: "assets/icons/9bytebaendiger.png",
        cost: 300,
        requiredLevel: 6,
      },
    ],
  },
  badges: {
    first_read: {
      emoji: "📖",
      title: { de: "Bücherwurm", en: "Bookworm" },
      desc: {
        de: "Lies deinen ersten Artikel.",
        en: "Read your first article.",
      },
      condition: { type: "read_articles", count: 1 },
    },
    tech_checker: {
      emoji: "🔌",
      title: { de: "Tech-Checker", en: "Tech-Checker" },
      desc: {
        de: "Lies 3 Artikel über Technologie.",
        en: "Read 3 articles about technology.",
      },
      condition: { type: "read_category_technologie", count: 3 },
    },
    eco_hero: {
      emoji: "♻️",
      title: { de: "Energieretter", en: "Energy Saver" },
      desc: {
        de: "Schließe das Recycling-Spiel ab.",
        en: "Complete the recycling game.",
      },
      condition: {
        type: "game_completed_recycling-master",
        count: 1,
      },
    },
    quiz_master: {
      emoji: "🏆",
      title: { de: "Quiz-Master", en: "Quiz-Master" },
      desc: {
        de: "Schließe 5 Quizze ab.",
        en: "Complete 5 quizzes.",
      },
      condition: { type: "quiz_completed", count: 5 },
    },
    gamer: {
      emoji: "🕹️",
      title: { de: "Gamer", en: "Gamer" },
      desc: {
        de: "Spiele 3 verschiedene Spiele.",
        en: "Play 3 different games.",
      },
      condition: { type: "games_played", count: 3 },
    },
    curious_mind: {
      emoji: "🧐",
      title: { de: "Neugieriger Geist", en: "Curious Mind" },
      desc: { de: "Lies 10 Artikel.", en: "Read 10 articles." },
      condition: { type: "read_articles", count: 10 },
    },
  },
  categories: {
    technologie: {
      id: "technologie",
      emoji: "🤖",
      title: { de: "Technologie & KI", en: "Technology & AI" },
    },
    umwelt: {
      id: "umwelt",
      emoji: "🌍",
      title: {
        de: "Nachhaltigkeit & Umwelt",
        en: "Sustainability & Environment",
      },
    },
    forschung: {
      id: "forschung",
      emoji: "🔬",
      title: {
        de: "Forschung & Entdeckung",
        en: "Research & Discovery",
      },
    },
    weltraum: {
      id: "weltraum",
      emoji: "🚀",
      title: {
        de: "Weltraum & Zukunftsmissionen",
        en: "Space & Future Missions",
      },
    },
    wirtschaft: {
      id: "wirtschaft",
      emoji: "💰",
      title: {
        de: "Zukunft der Arbeit & Finanzen",
        en: "Future of Work & Finance",
      },
    },
    gesundheit: {
      id: "gesundheit",
      emoji: "❤️",
      title: {
        de: "Gesundheit & Technik",
        en: "Health & Technology",
      },
    },
    bildung: {
      id: "bildung",
      emoji: "🏫",
      title: {
        de: "Zukunft der Schule & Bildung",
        en: "Future of School & Education",
      },
    },
    urban: {
      id: "urban",
      emoji: "🚇",
      title: {
        de: "Smart City & Leben der Zukunft",
        en: "Smart City & Future Living",
      },
    },
    medien: {
      id: "medien",
      emoji: "🎮",
      title: {
        de: "Medien & Unterhaltung",
        en: "Media & Entertainment",
      },
    },
    sicherheit: {
      id: "sicherheit",
      emoji: "🛡️",
      title: { de: "Sicher im Netz", en: "Safe Online" },
    },
    premium: {
      id: "premium",
      emoji: "✨",
      title: { de: "Premium-Inhalte", en: "Premium Content" },
      premium: true,
    },
  },
  contentDB: {
    technologie: {
      stories: {
        klaus_igor_klassenroboter: {
          id: "klaus_igor_klassenroboter",
          image: "assets/pictures/robot.png",
          title: {
            de: "Klaus-Igor, der etwas andere Klassenroboter",
            en: "Klaus-Igor, the Slightly Different Classroom Robot",
          },
          subtitle: {
            de: "Wie ein schlauer Roboter das Klassenzimmer auf den Kopf stellte - und uns nebenbei erklärte, was Künstliche Intelligenz ist.",
            en: "How a smart robot turned the classroom upside down - and explained Artificial Intelligence to us along the way.",
          },
          content: {
            de: {
              story:
                "<div class='story-section wtf-moment'><div class='story-section-header'><span class='story-icon'>🚀</span><h4 class='text-xl font-bold'>WTF-Moment</h4></div><p class='md:pl-10'>Es war ein ganz normaler Montagmorgen - bis plötzlich ein silberner Roboter durch die Tür von Klasse 5b rollte. „Guten Morgen, Kinder! Ich bin Klaus-Igor, euer Ersatzlehrer für heute!“, sagte er mit einer Stimme, die klang wie ein Toaster, der versucht zu singen.</p></div><div class='story-section'><div class='story-section-header'><span class='story-icon'>🤖</span><h4 class='text-xl font-bold'>Die Geschichte</h4></div><div class='md:pl-10'><p>„Ein Roboter als Lehrer?!“, rief Leon, während Lina sich heimlich ein bisschen hinter ihrem Ranzen versteckte. Doch Klaus-Igor lächelte, so gut das ein Roboter eben kann, und projizierte ein Meme von einem tanzenden Bananenbrot an die Tafel. Die Klasse lachte. Klaus-Igor war kein gewöhnlicher Roboter. Er war eine künstliche Intelligenz, also ein Programm, das lernen konnte, fast wie ein Mensch. „Ich weiß, was ein Dreieck ist. Ich kann aber auch lernen, wie ihr am besten lernt“, erklärte er.</p><div class='my-4 p-4 border-l-4 border-neon-blue bg-shadow-gray/50 rounded-r-lg'><img src='assets/pictures/wtffacts/klassenraum.png' alt='Comic-Roboter mit Herzchen-Augen, der Kreide in der Hand hält und „Mathe ist cool!“ an die Tafel schreibt.' class='w-full h-auto rounded-lg' /></div><p>In der ersten Stunde stellte Klaus-Igor Rechenaufgaben. In der zweiten erzählte er spannende Fakten über das Weltall. „Ich habe Millionen Bücher gelesen – in weniger als fünf Sekunden!“, sagte er stolz. „Aber kannst du auch Witze erzählen?“, fragte Samira. „Natürlich! Warum können Roboter nicht lügen? Weil sie keinen Schaltkreis für Schummelei haben!“ Die Kinder lachten. Naja, ein bisschen. Aber Klaus-Igor war nicht perfekt. Als Leo fragte: „Wie fühlt es sich an, traurig zu sein?“, antwortete er: „Ich weiß nicht. Ich habe kein Herz. Aber ich verstehe, dass Menschen dann Trost brauchen.“ Da wurde es ganz still in der Klasse.</p><div class='my-4 p-4 border-l-4 border-neon-blue bg-shadow-gray/50 rounded-r-lg'><img src='assets/pictures/wtffacts/kiteddy.png' alt='Ein Kind sitzt mit einem Tablet, auf dem ein freundliches KI-Gesicht zu sehen ist.' class='w-full h-auto rounded-lg' /></div><p>Später zeigte Klaus-Igor, wo man KIs im Alltag trifft: In Handys, die Gesichter erkennen. In Autos, die selbst einparken. In Spielen, wo der Computergegner plötzlich ganz schön schlau wird. „Aber denkt daran“, sagte er, „ich kann zwar rechnen, singen und viele neue Sachen lernen, aber Gefühle verstehen? Das überlasst ihr lieber euch selbst.“ Dann blinkte sein Bauch: „Akku leer in 30 Sekunden. Bitte ein Ladegerät.“ Die Kinder lachten. Und Leon rief: „Klaus-Igor, du bist der komischste Lehrer, den wir je hatten!“</p></div></div><div class='story-section wtf-fazit'><div class='story-section-header'><span class='story-icon'>💡</span><h4 class='text-xl font-bold'>WTF-Kind-Fazit</h4></div><p class='md:pl-10'>Künstliche Intelligenz ist wie ein schlauer, lernender Computer, fast wie ein Taschenrechner mit Köpfchen. Sie hilft uns im Alltag, kann blitzschnell denken und sogar Witze lernen. Aber Gefühle wie Freundschaft, Angst oder Liebe, das kann (noch) keine KI so wie wir. Und wer weiß? Vielleicht hast du eines Tages auch einen Roboterfreund wie Klaus-Igor im Klassenzimmer.</p></div>",
            },
            en: {
              story:
                "<div class='story-section wtf-moment'><div class='story-section-header'><span class='story-icon'>🚀</span><h4 class='text-xl font-bold'>WTF-Moment</h4></div><p class='md:pl-10'>It was a completely normal Monday morning - until suddenly a silver robot rolled through the door of class 5b. 'Good morning, children! I am Klaus-Igor, your substitute teacher for today!' he said in a voice that sounded like a toaster trying to sing.</p></div><div class='story-section'><div class='story-section-header'><span class='story-icon'>🤖</span><h4 class='text-xl font-bold'>The Story</h4></div><div class='md:pl-10'><p>'A robot as a teacher?!' shouted Leon, while Lina secretly hid a little behind her school bag. But Klaus-Igor smiled, as well as a robot can, and projected a meme of a dancing banana bread onto the board. The class laughed. Klaus-Igor was no ordinary robot. He was an artificial intelligence, a program that could learn, almost like a human. 'I know what a triangle is. But I can also learn how you learn best,' he explained.</p><div class='my-4 p-4 border-l-4 border-neon-blue bg-shadow-gray/50 rounded-r-lg'><img src='assets/pictures/wtffacts/klassenraum.png' alt='A comic robot with heart eyes, holding chalk and writing Math is cool! on the blackboard.' class='w-full h-auto rounded-lg' /></div><p>In the first lesson, Klaus-Igor set math problems. In the second, he told exciting facts about space. 'I have read millions of books – in less than five seconds!' he said proudly. 'But can you also tell jokes?' asked Samira. 'Of course! Why can't robots lie? Because they don't have a circuit for cheating!' The children laughed. Well, a little. But Klaus-Igor was not perfect. When Leo asked, 'What does it feel like to be sad?', he replied: 'I don't know. I don't have a heart. But I understand that people need comfort then.' The class went very quiet.</p><div class='my-4 p-4 border-l-4 border-neon-blue bg-shadow-gray/50 rounded-r-lg'><img src='assets/pictures/wtffacts/kiteddy.png' alt='A child sits with a tablet showing a friendly AI face.' class='w-full h-auto rounded-lg' /></div><p>Later, Klaus-Igor showed where you encounter AIs in everyday life: In phones that recognize faces. In cars that park themselves. In games where the computer opponent suddenly becomes very smart. 'But remember,' he said, 'I can calculate, sing, and learn many new things, but understanding feelings? You'd better leave that to yourselves.' Then his belly flashed: 'Battery low in 30 seconds. Please provide a charger.' The children laughed. And Leon shouted: 'Klaus-Igor, you are the weirdest teacher we've ever had!'</p></div></div><div class='story-section wtf-fazit'><div class='story-section-header'><span class='story-icon'>💡</span><h4 class='text-xl font-bold'>WTF-Kid-Conclusion</h4></div><p class='md:pl-10'>Artificial intelligence is like a smart, learning computer, almost like a calculator with a brain. It helps us in everyday life, can think at lightning speed, and even learn jokes. But feelings like friendship, fear, or love, no AI can (yet) do that like we can. And who knows? Maybe one day you'll have a robot friend like Klaus-Igor in the classroom too.</p></div>",
            },
          },
        },
      },
      facts: {
        was_ist_ki: {
          id: "was_ist_ki",
          image: "assets/pictures/aiicon.png",
          title: {
            de: "Was ist Künstliche Intelligenz (KI)?",
            en: "What is Artificial Intelligence (AI)?",
          },
          content: {
            de: {
              entry_moment:
                "Stell dir vor, dein Teddybär könnte mit dir sprechen und würde jeden Tag dazulernen, was du am liebsten spielst. Genau das ist die Idee hinter KI!",
              what_is_it:
                "Künstliche Intelligenz, kurz KI, ist, wenn wir Computern beibringen, wie Menschen zu denken und zu lernen. Es ist wie ein Super-Gehirn für Maschinen, das ihnen erlaubt, Aufgaben zu lösen, die normalerweise nur Menschen können.",
              how_it_works:
                "Eine KI lernt wie ein Baby: Man zeigt ihr ganz viele Beispiele. Wenn sie lernen soll, eine Katze zu erkennen, zeigt man ihr tausende Katzenbilder. Irgendwann weiß sie ganz allein, wie eine Katze aussieht. Das nennt man 'Training'.",
              usage:
                "Du triffst KI jeden Tag! Wenn du dein Handy mit deinem Gesicht entsperrst, wenn YouTube dir ein neues Video vorschlägt oder wenn du mit Sprachassistenten wie Alexa oder Siri sprichst.",
              advantages:
                "KI kann Ärzten helfen, Krankheiten schneller zu finden, sie kann selbstfahrende Autos steuern, um Unfälle zu vermeiden, und sie kann uns helfen, das Klima besser zu verstehen.",
              disadvantages:
                "Manchmal macht eine KI Fehler, weil sie nur das kennt, was man ihr gezeigt hat. Außerdem müssen wir gut aufpassen, dass KI fair bleibt und niemanden benachteiligt, zum Beispiel bei der Jobsuche.",
              history:
                "Früher gab es nur einfache Taschenrechner. Die Idee von denkenden Maschinen ist aber schon sehr alt und kommt aus alten Geschichten und Filmen. Erst mit starken Computern wurde KI wirklich möglich.",
              future:
                "In Zukunft könnte KI uns helfen, zum Mars zu fliegen, neue Medikamente zu erfinden oder sogar mit Tieren zu sprechen. Roboter mit KI könnten uns im Haushalt helfen oder älteren Menschen zur Seite stehen.",
              meaning_for_us:
                "KI ist ein super Werkzeug. Es ist wichtig, dass wir lernen, wie sie funktioniert, damit wir sie für gute Dinge einsetzen können. Du kannst zum Beispiel anfangen, mit einfachen Programmier-Spielen deine eigene kleine KI zu bauen!",
              bonus:
                "Challenge: Erzeuge mithilfe einer Künstlichen Intelligenz ein Bild von deinem Lieblingsspielzeug",
              quiz: {
                question: "Was braucht eine KI, um zu lernen?",
                answers: [
                  "Gefühle",
                  "Viele Beispiele (Daten)",
                  "Schlaf",
                  "Benzin",
                ],
                correctAnswerIndex: 1,
              },
            },
            en: {
              entry_moment:
                "Imagine your teddy bear could talk to you and learn every day what you like to play the most. That's the idea behind AI!",
              what_is_it:
                "Artificial Intelligence, or AI, is when we teach computers to think and learn like humans. It's like a super-brain for machines.",
              how_it_works:
                "An AI learns like a baby: you show it lots of examples. To teach it to recognize a cat, you show it thousands of cat pictures. Eventually, it knows on its own what a cat looks like. This is called 'training'.",
              usage:
                "You encounter AI every day! When you unlock your phone with your face, when YouTube suggests a new video, or when you talk to voice assistants like Alexa or Siri.",
              advantages:
                "AI can help doctors find diseases faster, control self-driving cars to avoid accidents, and help us better understand the climate.",
              disadvantages:
                "Sometimes an AI makes mistakes because it only knows what it has been shown. We also have to be careful that AI remains fair and doesn't disadvantage anyone, for example, in job searches.",
              history:
                "In the past, there were only simple calculators. But the idea of thinking machines is very old, coming from old stories and movies. It only became truly possible with powerful computers.",
              future:
                "In the future, AI could help us fly to Mars, invent new medicines, or even talk to animals. Robots with AI could help us around the house or assist the elderly.",
              meaning_for_us:
                "AI is a great tool. It's important that we learn how it works so we can use it for good things. For example, you can start building your own little AI with simple programming games!",
              bonus:
                "Challenge: Program a character in a simple app (like Scratch) to respond to a command!",
              quiz: {
                question: "What does an AI need to learn?",
                answers: [
                  "Feelings",
                  "Lots of examples (data)",
                  "Sleep",
                  "Gasoline",
                ],
                correctAnswerIndex: 1,
              },
            },
          },
        },
      },
      games: [
        {
          id: "fake-or-real-ki",
          emoji: "🤔",
          image: "https://placehold.co/80x80/1A1A1A/FFFFFF?text=?",
          title: { de: "Fake or Real?", en: "Fake or Real?" },
          desc: {
            de: "Erkenne, ob ein Bild von einer KI oder einem Menschen stammt.",
            en: "Identify if an image is from an AI or a human.",
          },
          questions: [
            {
              real: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Echt",
              fake: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Fake",
            },
            {
              real: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Echt",
              fake: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Fake",
            },
            {
              real: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Echt",
              fake: "https://placehold.co/400x400/1A1A1A/FFFFFF?text=Fake",
            },
          ],
        },
      ],
    },
    umwelt: {
      stories: {
        plasty_abenteuer: {
          id: "plasty_abenteuer",
          image: "assets/icons/plastikflasche.png",
          title: {
            de: "Plastys großes Abenteuer",
            en: "Plasty's Great Adventure",
          },
          content: {
            de: {
              story:
                "<div class='story-section'><p>Plasty war eine gewöhnliche Plastikflasche mit einem großen Traum: Sie wollte die Welt sehen! Ihre Reise begann im Supermarkt, führte über einen durstigen Ausflug in den Park und endete... im gelben Sack. 'Ist das alles?', dachte Plasty traurig. Doch dann begann das eigentliche Abenteuer! Sie wurde abgeholt, in einer riesigen Halle mit tausenden anderen Flaschen sortiert, geschreddert und zu winzigen Flocken verarbeitet. Plötzlich fand sie sich als Faden in einem riesigen Webstuhl wieder. Als sie ihre Augen öffnete, war sie kein klebriger Behälter mehr, sondern Teil eines supercoolen, leuchtend blauen Turnschuhs am Fuß eines Kindes, das gerade dabei war, die Welt zu erkunden. Plasty hatte es geschafft, auf ihre ganz eigene Weise.</p></div>",
            },
            en: {
              story:
                "<div class='story-section'><p>Plasty was an ordinary plastic bottle with a big dream: she wanted to see the world! Her journey began at the supermarket, led to a thirsty trip to the park, and ended... in the recycling bin. 'Is that all there is?' Plasty thought sadly. But then the real adventure began! She was picked up, sorted in a huge hall with thousands of other bottles, shredded, and processed into tiny flakes. Suddenly, she found herself as a thread in a giant loom. When she opened her eyes, she was no longer a sticky container, but part of a super cool, bright blue sneaker on the foot of a child who was about to explore the world. Plasty had made it, in her very own way.</p></div>",
            },
          },
        },
      },
      facts: {
        recycling_kreislauf: {
          id: "recycling_kreislauf",
          image: "assets/pictures/kreislauf.png",
          title: {
            de: "Der ewige Kreislauf",
            en: "The Eternal Cycle",
          },
          content: {
            de: {
              entry_moment:
                "Deine leere Plastikflasche könnte morgen schon Teil deines neuen Turnschuhs sein. Verrückt, oder?",
              what_is_it:
                "Recycling ist, wenn wir alte Dinge, die wir nicht mehr brauchen (wie Glasflaschen, Papier oder Plastikverpackungen), sammeln und daraus neue Produkte herstellen. Statt sie einfach wegzuwerfen, geben wir ihnen ein zweites Leben.",
              how_it_works:
                "Zuerst wird der Müll sortiert. Dann werden die Materialien gereinigt, zerkleinert und eingeschmolzen. Aus diesen Rohstoffen können dann ganz neue Dinge entstehen, zum Beispiel Dosen aus altem Metall oder Hefte aus Altpapier.",
              usage:
                "Recycling wird für fast alles genutzt! Aus alten Glasflaschen werden neue, aus Altpapier Zeitungen und aus Plastik entstehen Parkbänke, Spielzeug oder sogar Kleidung.",
              advantages:
                "Recycling spart Energie und schont die Umwelt. Wir müssen weniger neue Rohstoffe wie Bäume oder Erdöl verbrauchen und produzieren weniger Müll, der auf Deponien landet.",
              disadvantages:
                "Manchmal ist das Sortieren und Reinigen sehr aufwendig und teuer. Nicht alle Materialien können unendlich oft recycelt werden, weil die Qualität mit der Zeit schlechter wird.",
              history:
                "Früher wurde fast alles weggeworfen. Erst als die Menschen merkten, dass die Müllberge wachsen und Rohstoffe knapp werden, haben sie angefangen, systematisch zu recyceln. In Deutschland gibt es das System mit den verschiedenen Tonnen schon seit den 90er Jahren.",
              future:
                "In der Zukunft werden Roboter helfen, den Müll noch besser zu sortieren. Forscher arbeiten auch an neuen Methoden, um auch schwierige Materialien wie gemischte Kunststoffe wiederverwerten zu können.",
              meaning_for_us:
                "Indem du deinen Müll richtig trennst, hilfst du direkt mit, die Umwelt zu schützen. Jede richtige Entscheidung an der Mülltonne zählt!",
              bonus:
                "Aktion: Gestalte aus einer alten Verpackung (z.B. einer leeren Rolle Küchenpapier oder einem Karton) etwas Neues! Ein Stiftehalter, ein Roboter oder ein kleines Haus für Spielfiguren.",
              quiz: {
                question:
                  "Was kann aus recycelten Plastikflaschen hergestellt werden?",
                answers: [
                  "Neue Glasflaschen",
                  "Kleidung wie Pullover oder Jacken",
                  "Bücher",
                ],
                correctAnswerIndex: 1,
              },
            },
            en: {
              entry_moment:
                "Your empty plastic bottle could be part of your new sneaker tomorrow. Crazy, right?",
              what_is_it:
                "Recycling is when we collect old things we no longer need (like glass bottles, paper, or plastic packaging) and use them to make new products. Instead of just throwing them away, we give them a second life.",
              how_it_works:
                "First, the trash is sorted. Then the materials are cleaned, shredded, and melted down. From these raw materials, completely new things can be created, for example, cans from old metal or notebooks from waste paper.",
              usage:
                "Recycling is used for almost everything! Old glass bottles become new ones, old paper becomes newspapers, and plastic is turned into park benches, toys, or even clothing.",
              advantages:
                "Recycling saves energy and protects the environment. We need to use fewer new raw materials like trees or oil and produce less waste that ends up in landfills.",
              disadvantages:
                "Sometimes sorting and cleaning is very complex and expensive. Not all materials can be recycled indefinitely because the quality deteriorates over time.",
              history:
                "In the past, almost everything was thrown away. It was only when people realized that the mountains of garbage were growing and raw materials were becoming scarce that they began to recycle systematically. In Germany, the system with the different bins has been in place since the 90s.",
              future:
                "In the future, robots will help to sort the garbage even better. Researchers are also working on new methods to recycle difficult materials such as mixed plastics.",
              meaning_for_us:
                "By separating your trash correctly, you are directly helping to protect the environment. Every correct decision at the bin counts!",
              bonus:
                "Action: Create something new from old packaging (e.g. an empty paper towel roll or a cardboard box)! A pen holder, a robot or a small house for toy figures.",
              quiz: {
                question: "What can be made from recycled plastic bottles?",
                answers: [
                  "New glass bottles",
                  "Clothing like sweaters or jackets",
                  "Books",
                ],
                correctAnswerIndex: 1,
              },
            },
          },
        },
      },
      games: [
        {
          id: "recycling-master",
          emoji: "♻️",
          image: "assets/icons/recycling.png",
          title: {
            de: "Recycling-Meister",
            en: "Recycling Master",
          },
          desc: {
            de: "Sortiere den Müll in die richtigen Tonnen!",
            en: "Sort the trash into the correct bins!",
          },
        },
      ],
    },
    forschung: { stories: {}, facts: {}, games: [] },
    weltraum: {
      stories: {
        mars_mikroben_meeting: {
          id: "mars_mikroben_meeting",
          image: "assets/pictures/marsmikroben.png",
          title: {
            de: "Das Meeting mit den Mars-Mikroben",
            en: "The Meeting with the Martian Microbes",
          },
          content: {
            de: {
              story:
                "<div class='story-section'><p>Astronautin Dr. Eva Rostova war der erste Mensch auf dem Mars. Sie erwartete Stille und Einsamkeit. Stattdessen fand sie unter einem Stein eine Kolonie von Mikroben, die... Zettel ausfüllen? Es stellte sich heraus, dass die Mars-Mikroben die bürokratischste Lebensform des Universums waren. Bevor Eva eine Gesteinsprobe nehmen konnte, musste sie Antrag 7B-Alpha-Strich-9 ausfüllen ('Antrag auf planetare Interaktion'). Ihre erste Nachricht an die Erde war nicht 'Ein kleiner Schritt für einen Menschen...', sondern 'Schickt mir bitte einen Drucker, meiner hat einen Papierstau!'. Die interplanetare Diplomatie begann also nicht mit einem Händedruck, sondern mit einem dreifachen Durchschlag.</p></div>",
            },
            en: {
              story:
                "<div class='story-section'><p>Astronaut Dr. Eva Rostova was the first human on Mars. She expected silence and solitude. Instead, under a rock, she found a colony of microbes that were... filling out forms? It turned out that the Martian microbes were the most bureaucratic life form in the universe. Before Eva could take a rock sample, she had to fill out form 7B-Alpha-Prime-9 ('Application for Planetary Interaction'). Her first message to Earth was not 'One small step for a man...', but 'Please send me a printer, mine has a paper jam!'. So interplanetary diplomacy began not with a handshake, but with a triplicate form.</p></div>",
            },
          },
        },
      },
      facts: {
        leben_auf_dem_mars: {
          id: "leben_auf_dem_mars",
          image: "assets/pictures/mars.png",
          title: { de: "Leben auf dem Mars", en: "Life on Mars" },
          content: {
            de: {
              entry_moment:
                "Stell dir vor, du wachst auf und siehst statt eines blauen einen rötlichen Himmel. Willkommen auf dem Mars!",
              what_is_it:
                "Die Idee, auf dem Mars zu leben, beschäftigt Wissenschaftler schon lange. Es bedeutet, eine dauerhafte Basis oder sogar eine ganze Stadt auf einem anderen Planeten zu errichten, auf dem Menschen leben und arbeiten können.",
              how_it_works:
                "Um auf dem Mars zu überleben, bräuchten wir spezielle Häuser, die uns vor der Kälte und der Strahlung schützen. Wir müssten lernen, unser eigenes Essen in Gewächshäusern anzubauen und Wasser aus dem Eis unter der Oberfläche zu gewinnen. Raumanzüge wären unsere ständigen Begleiter.",
              usage:
                "Eine Marsbasis wäre am Anfang vor allem für die Forschung da. Astronauten könnten den Planeten erkunden, nach Spuren von Leben suchen und Experimente durchführen, die auf der Erde nicht möglich sind.",
              advantages:
                "Die Menschheit hätte ein 'Backup', falls auf der Erde etwas Schlimmes passiert. Außerdem würden wir unglaublich viel über das Universum, andere Planeten und neue Technologien lernen, die uns auch auf der Erde helfen könnten.",
              disadvantages:
                "Die Reise ist extrem lang und gefährlich. Auf dem Mars gibt es keine atembare Luft, es ist eiskalt und die Strahlung aus dem All ist sehr stark. Es ist eine riesige technische und menschliche Herausforderung.",
              history:
                "Schon vor über 100 Jahren haben Menschen in Büchern und Filmen von Reisen zum Mars geträumt. Seit den 60er Jahren schicken wir Roboter und Sonden dorthin, um den Planeten zu untersuchen und eine bemannte Mission vorzubereiten.",
              future:
                "Firmen wie SpaceX und Raumfahrtagenturen wie die NASA planen, in den nächsten 10-20 Jahren die ersten Menschen zum Mars zu schicken. Der erste Schritt wäre eine kleine Forschungsstation, die langsam wachsen könnte.",
              meaning_for_us:
                "Die Erforschung des Mars treibt die Entwicklung neuer Technologien voran, von denen wir alle profitieren können – von besserer Medizin bis zu effizienteren Solarzellen. Es inspiriert uns, groß zu denken und Grenzen zu überwinden.",
              bonus:
                "Weiterdenken: Welche eine Sache von der Erde würdest du unbedingt mit auf den Mars nehmen wollen und warum?",
              quiz: {
                question:
                  "Was ist eine der größten Herausforderungen für das Leben auf dem Mars?",
                answers: [
                  "Zu viel Sauerstoff in der Luft",
                  "Die starke Schwerkraft",
                  "Die dünne Atmosphäre und die Kälte",
                ],
                correctAnswerIndex: 2,
              },
            },
            en: {
              entry_moment:
                "Imagine waking up and seeing a reddish sky instead of a blue one. Welcome to Mars!",
              what_is_it:
                "The idea of living on Mars has long occupied scientists. It means establishing a permanent base or even an entire city on another planet where humans can live and work.",
              how_it_works:
                "To survive on Mars, we would need special houses to protect us from the cold and radiation. We would have to learn to grow our own food in greenhouses and extract water from the ice beneath the surface. Spacesuits would be our constant companions.",
              usage:
                "A Mars base would initially be used primarily for research. Astronauts could explore the planet, search for traces of life, and conduct experiments that are not possible on Earth.",
              advantages:
                "Humanity would have a 'backup' in case something terrible happens on Earth. We would also learn an incredible amount about the universe, other planets, and new technologies that could also help us on Earth.",
              disadvantages:
                "The journey is extremely long and dangerous. On Mars, there is no breathable air, it is freezing cold, and the radiation from space is very strong. It is a huge technical and human challenge.",
              history:
                "People have been dreaming of traveling to Mars in books and movies for over 100 years. Since the 1960s, we have been sending robots and probes there to study the planet and prepare for a manned mission.",
              future:
                "Companies like SpaceX and space agencies like NASA are planning to send the first humans to Mars in the next 10-20 years. The first step would be a small research station that could slowly grow.",
              meaning_for_us:
                "The exploration of Mars is driving the development of new technologies that can benefit us all - from better medicine to more efficient solar cells. It inspires us to think big and push boundaries.",
              bonus:
                "Think further: What one thing from Earth would you absolutely want to take with you to Mars and why?",
              quiz: {
                question:
                  "What is one of the biggest challenges for life on Mars?",
                answers: [
                  "Too much oxygen in the air",
                  "The strong gravity",
                  "The thin atmosphere and the cold",
                ],
                correctAnswerIndex: 2,
              },
            },
          },
        },
      },
      games: [],
    },
    wirtschaft: { stories: {}, facts: {}, games: [] },
    gesundheit: { stories: {}, facts: {}, games: [] },
    bildung: {
      stories: {},
      facts: {},
      games: [
        {
          id: "future-tech-memory",
          emoji: "🧠",
          image: "assets/pictures/memory.png",
          title: {
            de: "Zukunfts-Memory",
            en: "Future-Tech Memory",
          },
          desc: {
            de: "Finde die passenden Paare der Zukunftstechnologien.",
            en: "Find the matching pairs of future technologies.",
          },
          cards: ["🤖", "🧬", "🚀", "🌍", "💡", "🧪", "🛰️", "🦾"],
        },
      ],
    },
    urban: { stories: {}, facts: {}, games: [] },
    medien: { stories: {}, facts: {}, games: [] },
    sicherheit: { stories: {}, facts: {}, games: [] },
    premium: {
      stories: {
        "zeitreise-tagebuch": {
          id: "zeitreise-tagebuch",
          image: "assets/pictures/zeitreisen.png",
          title: {
            de: "Das Tagebuch des Zeitreisenden",
            en: "The Time Traveler's Diary",
          },
          subtitle: {
            de: "Ein exklusiver Einblick in eine Zukunft, die du dir nicht vorstellen kannst.",
            en: "An exclusive glimpse into a future you can't imagine.",
          },
          premium: true,
          content: {
            de: {
              story:
                "<div class='story-section'><p>Seite 1: Die Luft schmeckt süß. Die Gebäude singen. Ich glaube, ich bin im Jahr 2342 gelandet. Die Menschen hier kommunizieren durch Gedanken und reisen auf Lichtstrahlen. Es ist wunderschön und furchteinflößend zugleich...</p></div>",
            },
            en: {
              story:
                "<div class='story-section'><p>Page 1: The air tastes sweet. The buildings sing. I think I've landed in the year 2342. People here communicate through thoughts and travel on beams of light. It's beautiful and terrifying at the same time...</p></div>",
            },
          },
        },
      },
      facts: {},
      games: [],
    },
  },
};

// ================================================================
// ==  AB HIER BEGINNT DIE APP-LOGIK. BITTE NICHTS ÄNDERN!     ==
// ================================================================
document.addEventListener("DOMContentLoaded", () => {
  const WTFApp = {
    state: {
      xp: 0,
      wtfCoins: 0,
      username: "Zukunfts-Entdecker",
      avatar: "assets/icons/1neuling.png", // Platzhalter-Bild als Standard-Avatar
      unlockedAvatars: [
        "assets/icons/1neuling.png",
        "assets/icons/2entdeckerlehrling.png",
        "assets/icons/3wissenstüftler.png",
        "assets/icons/4zukunftsentdecker.png",
      ], // Platzhalter für weitere Avatare
      unlockedBadges: [],
      progress: {},
      currentPage: "page-start",
      pageHistory: [{ pageId: "page-start", params: {} }],
      currentLanguage: "de",
      activeCategoryId: { stories: null, facts: null, games: null },
      searchResults: [],
      searchTerm: "",
      isPremium: false,
      onboarding: {
        currentStep: 0,
        totalSteps: 4,
        tempUsername: "",
        tempAvatar: "assets/icons/1neuling.png", // Platzhalter für Onboarding-Avatar
      },
    },

    config: {
      XP_FOR_LEVEL: (level) => 75 + level * 25,
      LANGUAGES: ["de", "en"],
      GEMINI_API_KEY: "", // <-- HIER DEINEN API-SCHLÜSSEL EINFÜGEN
    },

    db: {}, // Wird beim Start aus der Konstante befüllt
    ui: {},

    // Spiel-Status-Objekte
    fakeOrRealGame: {
      running: false,
      score: 0,
      timeLeft: 30,
      questions: [],
      currentQuestionIndex: -1,
      gameInterval: null,
      sounds: {},
      gameData: null,
    },

    futureTechMemory: {
      running: false,
      gameData: null,
      cards: [],
      flippedCards: [],
      matchedPairs: 0,
      moves: 0,
      lockBoard: false,
      sounds: {},
    },

    loadProgress() {
      try {
        const savedData = JSON.parse(localStorage.getItem("wtf_progress"));
        if (savedData) {
          this.state.xp = Number(savedData.xp) || 0;
          this.state.wtfCoins = Number(savedData.wtfCoins) || 0;
          this.state.username =
            savedData.username || this.t(this.db.uiStrings.username);
          // GEÄNDERT: Lädt jetzt Bild-URL oder setzt Standard-Bild
          this.state.avatar = savedData.avatar || "assets/icons/1neuling.png";
          // GEÄNDERT: Lädt jetzt Array von Bild-URLs oder setzt Standard-Bilder
          this.state.unlockedAvatars = savedData.unlockedAvatars || [
            "assets/icons/1neuling.png",
            "assets/icons/2entdeckerlehrling.png",
            "assets/icons/3wissenstüftler.png",
            "assets/icons/4zukunftsentdecker.png",
          ];
          this.state.unlockedBadges = savedData.unlockedBadges || [];
          this.state.progress = savedData.progress || {};
          this.state.isPremium = savedData.isPremium || false;
        }
      } catch (error) {
        console.error("Fehler beim Laden des Fortschritts:", error);
        // Setze auf Standardwerte zurück, wenn die Daten korrupt sind
        localStorage.removeItem("wtf_progress");
      }
      this.state.currentLanguage = localStorage.getItem("wtf_language") || "de";
    },

    saveProgress() {
      try {
        localStorage.setItem("wtf_language", this.state.currentLanguage);
        localStorage.setItem(
          "wtf_progress",
          JSON.stringify({
            xp: this.state.xp,
            wtfCoins: this.state.wtfCoins,
            username: this.state.username,
            avatar: this.state.avatar,
            unlockedAvatars: this.state.unlockedAvatars,
            unlockedBadges: this.state.unlockedBadges,
            progress: this.state.progress,
            isPremium: this.state.isPremium,
          })
        );
      } catch (error) {
        console.error("Fehler beim Speichern des Fortschritts:", error);
      }
    },

    init() {
      // JSON-Daten direkt aus der Konstante laden
      this.db = contentData;

      this.cacheUI();
      this.loadProgress();
      this.bindEvents();
      this.simulateLoading();
    },

    simulateLoading() {
      const progressBar = document.getElementById("progress-bar-fill");
      const percentageText = document.getElementById("loading-percentage");
      const statusText = document.getElementById("loading-status-text");
      const overlay = this.ui.loadingOverlay;

      if (!progressBar || !percentageText || !statusText || !overlay) return;

      let progress = 0;
      const duration = 1500; // Gesamtdauer in ms
      let startTime = null;

      const loadingSteps = {
        25: "Lade Inhalte...",
        60: "Bereite Zukunft vor...",
        90: "Starte App...",
      };

      const animateProgress = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        progress = Math.min(Math.floor((elapsedTime / duration) * 100), 100);

        progressBar.style.width = `${progress}%`;
        percentageText.textContent = `${progress}%`;

        for (const percent in loadingSteps) {
          if (
            progress >= percent &&
            statusText.textContent !== loadingSteps[percent]
          ) {
            statusText.textContent = loadingSteps[percent];
          }
        }

        if (elapsedTime < duration) {
          requestAnimationFrame(animateProgress);
        } else {
          const hasVisitedBefore = localStorage.getItem("wtf_visited_before");
          if (!hasVisitedBefore) {
            this.startOnboarding();
          } else {
            this.navigateTo("page-start", {}, true);
          }
          this.updateAllUIText(); // Sprache direkt nach dem Laden anwenden

          overlay.style.opacity = "0";
          setTimeout(() => {
            overlay.style.display = "none";
          }, 500);
        }
      };

      requestAnimationFrame(animateProgress);
    },

    cacheUI() {
      this.ui = {
        pages: document.querySelectorAll(".page"),
        backButtonContainer: document.getElementById("back-button-container"),
        pageTitle: document.getElementById("page-title"),
        modal: document.getElementById("modal"),
        loadingOverlay: document.getElementById("loading-overlay"),
        searchContainer: document.getElementById("search-container"),
        searchInput: document.getElementById("search-input"),
        searchForm: document.getElementById("search-form"),
        storyReaderPage: document.getElementById("page-story-reader"),
        factReaderPage: document.getElementById("page-fact-reader"),
        storeItemsContainer: document.getElementById("store-items-container"),
        navLinks: document.querySelectorAll(".nav-link, .mobile-nav-link"),
        sidebar: {
          username: document.getElementById("sidebar-username"),
          level: document.getElementById("sidebar-level"),
          xpBar: document.getElementById("sidebar-xp-bar"),
          avatar: document.getElementById("sidebar-avatar"),
          premiumBadge: document.getElementById("sidebar-premium-badge"),
        },
        subPanes: {
          stories: document.getElementById("pane-sub-stories"),
          facts: document.getElementById("pane-sub-facts"),
          games: document.getElementById("pane-sub-games"),
        },
      };
    },

    bindEvents() {
      document.body.addEventListener("click", (e) => {
        const navTarget = e.target.closest("[data-navigate-to]");
        if (navTarget) {
          e.preventDefault();
          this.navigateTo(navTarget.dataset.navigateTo);
          return;
        }

        const actionTarget = e.target.closest("[data-action]");
        if (actionTarget) {
          e.preventDefault(); // Verhindert Standardverhalten bei Buttons in Forms etc.
          const action = actionTarget.dataset.action;
          if (typeof this[action] === "function") {
            this[action](e);
          }
          return;
        }

        // GEÄNDERT: Event Listener für Bild-Avatare
        const avatarTarget = e.target.closest("[data-avatar]");
        if (avatarTarget) {
          this.setAvatar(avatarTarget.dataset.avatar);
          return;
        }

        const buyItemTarget = e.target.closest("[data-buy-item-id]");
        if (buyItemTarget) {
          this.buyItem(buyItemTarget.dataset.buyItemId);
          return;
        }
      });

      this.ui.searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.executeSearch();
      });

      this.ui.modal.addEventListener("click", (e) => {
        if (e.target.closest("#onboarding-modal")) return;
        if (e.target === this.ui.modal) {
          this.closeModal();
        }
      });

      this.ui.factReaderPage.addEventListener("click", (e) =>
        this.handleQuizClick(e)
      );
      this.ui.subPanes.stories.addEventListener("click", (e) => {
        const card = e.target.closest("[data-story-id]");
        if (card) this.showStory(card.dataset.categoryId, card.dataset.storyId);
      });
      this.ui.subPanes.facts.addEventListener("click", (e) => {
        const card = e.target.closest("[data-fact-id]");
        if (card) this.showFact(card.dataset.categoryId, card.dataset.factId);
      });
      this.ui.subPanes.games.addEventListener("click", (e) => {
        const card = e.target.closest("[data-game-id]");
        if (card) this.showGame(card.dataset.categoryId, card.dataset.gameId);
      });

      window.addEventListener("scroll", () => this.updateScrollProgress());
    },

    updateScrollProgress() {
      const progressBar = document.getElementById("scroll-progress-bar");
      if (!progressBar) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight === clientHeight) {
        progressBar.style.width = "0%";
        return;
      }

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // BUGFIX: Verhindert, dass die Breite über 100% geht
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    },

    handleQuizClick(event) {
      const button = event.target.closest(".quiz-answer-btn");
      if (button) {
        const quizContainer = button.closest("#quiz-container");
        if (quizContainer) {
          const { categoryId, contentId, contentType } = quizContainer.dataset;
          const content =
            this.db.contentDB[categoryId]?.[contentType]?.[contentId];
          if (content && content.content[this.state.currentLanguage].quiz) {
            this.handleQuizAnswer(event, this.t(content.content).quiz);
          }
        }
      }
    },

    toggleLanguage() {
      this.state.currentLanguage =
        this.state.currentLanguage === "de" ? "en" : "de";
      this.saveProgress();
      this.updateAllUIText();
    },

    t(translatableObject) {
      if (!translatableObject) return "";
      if (typeof translatableObject === "string") return translatableObject;
      return (
        translatableObject[this.state.currentLanguage] ||
        translatableObject["de"] ||
        ""
      );
    },

    updateAllUIText() {
      document.documentElement.lang = this.state.currentLanguage;
      document.querySelectorAll("[data-lang-key]").forEach((el) => {
        const key = el.dataset.langKey;
        if (this.db.uiStrings[key]) {
          el.textContent = this.t(this.db.uiStrings[key]);
        }
      });
      this.ui.searchInput.placeholder = this.t(
        this.db.uiStrings.searchPlaceholder
      );
      this.rerenderPageContent();
      this.updateStatsUI();
    },

    getCurrentLevelInfo() {
      let level = 1;
      let totalXpForLevelUp = this.config.XP_FOR_LEVEL(level);
      let xpAtLevelStart = 0;

      while (this.state.xp >= xpAtLevelStart + totalXpForLevelUp) {
        xpAtLevelStart += totalXpForLevelUp;
        level++;
        totalXpForLevelUp = this.config.XP_FOR_LEVEL(level);
      }
      const xpInCurrentLevel = this.state.xp - xpAtLevelStart;

      return {
        level,
        xpInCurrentLevel,
        xpNeededForNextLevel: totalXpForLevelUp,
      };
    },

    updateStatsUI() {
      const { level, xpInCurrentLevel, xpNeededForNextLevel } =
        this.getCurrentLevelInfo();

      // Update Sidebar Profile
      if (this.ui.sidebar.username) {
        this.ui.sidebar.username.textContent = this.state.username;
      }
      if (this.ui.sidebar.level) {
        this.ui.sidebar.level.textContent = `${this.t(
          this.db.uiStrings.level
        )} ${level}`;
      }
      if (this.ui.sidebar.avatar) {
        // GEÄNDERT: Zeigt jetzt ein Bild anstelle eines Emojis
        this.ui.sidebar.avatar.innerHTML = `<img src="${this.state.avatar}" alt="Avatar" class="w-full h-full object-cover rounded-full">`;
      }
      if (this.ui.sidebar.premiumBadge) {
        this.ui.sidebar.premiumBadge.classList.toggle(
          "hidden",
          !this.state.isPremium
        );
      }

      const newWidth = `${(xpInCurrentLevel / xpNeededForNextLevel) * 100}%`;
      if (this.ui.sidebar.xpBar) {
        requestAnimationFrame(() => {
          this.ui.sidebar.xpBar.style.width = newWidth;
        });
      }

      // Update main profile page if it's active
      if (this.state.currentPage === "page-profile") {
        this.renderProfilePage();
      }
    },

    navigateTo(pageId, params = {}, isHistoryNavigation = false) {
      const targetPage = document.getElementById(pageId);
      if (!targetPage) {
        console.error(
          `Navigation fehlgeschlagen: Seite mit ID "${pageId}" nicht gefunden.`
        );
        return;
      }

      if (!isHistoryNavigation) {
        // BUGFIX: Verhindert das Hinzufügen identischer aufeinanderfolgender Seiten zur History
        const lastPage = this.state.pageHistory.at(-1);
        if (!lastPage || lastPage.pageId !== pageId) {
          this.state.pageHistory.push({ pageId, params });
        }
      }

      this.state.currentPage = pageId;
      this.state.pageParams = params;

      if (params.activeCategoryId && params.pageType) {
        this.state.activeCategoryId[params.pageType] = params.activeCategoryId;
      }

      this.rerenderPageContent(pageId);
      this.ui.pages.forEach((page) => page.classList.remove("active"));
      targetPage.classList.add("active");
      window.scrollTo(0, 0);

      this.updateActiveNav(pageId);
      this.updateBackButton();
      this.updateStatsUI();
    },

    updateActiveNav(pageId) {
      this.ui.navLinks.forEach((link) => {
        const isProfileLink = link.closest("#sidebar-profile-container");
        if (isProfileLink) {
          // The profile card itself doesn't get an 'active' class, but we handle its navigation
        } else {
          link.classList.toggle("active", link.dataset.navigateTo === pageId);
        }
      });

      let titleKey;
      switch (pageId) {
        case "page-start":
          titleKey = "navHome";
          break;
        case "page-themenwelt":
          titleKey = "navStories";
          break;
        case "page-artikel-hub":
          titleKey = "navFacts";
          break;
        case "page-spiele-hub":
          titleKey = "navGames";
          break;
        case "page-premium-hub":
          titleKey = "navPremium";
          break;
        case "page-store":
          titleKey = "navStore";
          break;
        case "page-profile":
          titleKey = "navProfile";
          break;
        case "page-impressum":
          titleKey = "navImpressum";
          break;
        // Für Reader-Seiten etc. wird der Titel in der jeweiligen Render-Funktion gesetzt
        default:
          titleKey = "";
      }

      this.ui.pageTitle.textContent = this.t(this.db.uiStrings[titleKey] || "");
    },

    rerenderPageContent(pageId = this.state.currentPage) {
      switch (pageId) {
        case "page-themenwelt":
          this.renderCategoryPage("stories");
          break;
        case "page-artikel-hub":
          this.renderCategoryPage("facts");
          break;
        case "page-spiele-hub":
          this.renderCategoryPage("games");
          break;
        case "page-premium-hub":
          this.renderPremiumHub();
          break;
        case "page-start":
          this.renderStartPage();
          break;
        case "page-store":
          this.renderStorePage();
          break;
        case "page-profile":
          this.renderProfilePage();
          break;
        case "page-search":
          this.renderSearchResults();
          break;
        case "page-story-reader": {
          const { categoryId, storyId } = this.state.pageParams;
          this.renderStoryPage(categoryId, storyId);
          break;
        }
        case "page-fact-reader": {
          const { categoryId, factId } = this.state.pageParams;
          this.renderFactPage(categoryId, factId);
          break;
        }
        case "page-impressum":
          this.renderImpressumPage();
          break;
      }
    },

    renderImpressumPage() {
      this.ui.pageTitle.textContent = this.t(this.db.uiStrings.impressumTitle);
    },

    goBack() {
      if (this.state.pageHistory.length > 1) {
        this.state.pageHistory.pop();
        const previousState = this.state.pageHistory.at(-1);
        this.navigateTo(previousState.pageId, previousState.params, true);
      }
    },

    updateBackButton() {
      this.ui.backButtonContainer.style.opacity =
        this.state.pageHistory.length > 1 ? "1" : "0";
      this.ui.backButtonContainer.style.pointerEvents =
        this.state.pageHistory.length > 1 ? "auto" : "none";
    },

    addXp(amount) {
      const oldLevelInfo = this.getCurrentLevelInfo();
      this.state.xp = Number(this.state.xp) + Number(amount);
      const newLevelInfo = this.getCurrentLevelInfo();

      if (newLevelInfo.level > oldLevelInfo.level) {
        this.showLevelUpModal(newLevelInfo.level);
        this.addWtfCoins(newLevelInfo.level * 10);
      }

      this.updateStatsUI();
      this.saveProgress();
    },

    addWtfCoins(amount) {
      this.state.wtfCoins = Number(this.state.wtfCoins) + Number(amount);
      this.updateStatsUI();
      this.saveProgress();
    },

    trackProgress(type, id = null) {
      this.state.progress[type] = (this.state.progress[type] || 0) + 1;

      const uniqueKey = `unique_${type}`;
      if (id) {
        if (!this.state.progress[uniqueKey]) {
          this.state.progress[uniqueKey] = [];
        }
        if (!this.state.progress[uniqueKey].includes(id)) {
          this.state.progress[uniqueKey].push(id);
        }
      }
      this.checkForBadgeUnlocks();
      this.saveProgress();
    },

    checkForBadgeUnlocks() {
      for (const badgeId in this.db.badges) {
        if (this.state.unlockedBadges.includes(badgeId)) continue;
        const badge = this.db.badges[badgeId];
        const condition = badge.condition;
        let progressCount = 0;

        if (condition.type === "games_played") {
          progressCount =
            this.state.progress["unique_games_played"]?.length || 0;
        } else {
          progressCount = this.state.progress[condition.type] || 0;
        }

        if (progressCount >= condition.count) {
          this.state.unlockedBadges.push(badgeId);
          this.showBadgeModal(badge);
          this.addWtfCoins(50);
        }
      }
    },

    showModal(htmlContent) {
      this.ui.modal.innerHTML = htmlContent;
      this.ui.modal.classList.add("visible");
    },

    closeModal() {
      this.ui.modal.classList.remove("visible");
      // BUGFIX: Verzögertes Leeren des Modals, damit die Ausblend-Animation funktioniert
      setTimeout(() => {
        this.ui.modal.innerHTML = "";
      }, 300);
      this.stopFakeOrRealGame();
      this.stopFutureTechMemory();
    },

    showLevelUpModal(newLevel) {
      const html = `<div class="modal-content p-8 rounded-2xl max-w-sm w-full text-center"><div class="text-6xl mb-4">🎉</div><h2 class="text-4xl font-black text-neon-green">${this.t(
        this.db.uiStrings.levelUpTitle
      )}</h2><p class="text-xl mt-2 mb-6">${this.t(
        this.db.uiStrings.levelUpText
      ).replace(
        "{level}",
        newLevel
      )}</p><p class="text-lg font-bold text-yellow-400">+${
        newLevel * 10
      } 🪙</p><button class="btn-primary-gradient mt-6" data-action="closeModal">${this.t(
        this.db.uiStrings.levelUpButton
      )}</button></div>`;
      this.showModal(html);
    },

    showBadgeModal(badge) {
      const html = `<div class="modal-content p-8 rounded-2xl max-w-sm w-full text-center"><div class="text-6xl mb-4">${
        badge.emoji
      }</div><h2 class="text-3xl font-black text-neon-green">${this.t(
        this.db.uiStrings.badgeUnlockedTitle
      )}</h2><p class="text-xl mt-2 font-bold">${this.t(
        badge.title
      )}</p><p class="text-gray-300 mb-6">${this.t(
        badge.desc
      )}</p><p class="text-lg font-bold text-yellow-400">+50 🪙</p><button class="btn-primary-gradient" data-action="closeModal">${this.t(
        this.db.uiStrings.badgeUnlockedButton
      )}</button></div>`;
      this.showModal(html);
    },

    showStory(categoryId, storyId) {
      const story = this.db.contentDB[categoryId]?.stories?.[storyId];
      if (story?.premium && !this.state.isPremium) {
        this.showPremiumModal();
        return;
      }
      this.addXp(10);
      this.addWtfCoins(5);
      this.trackProgress("read_articles", `story_${storyId}`);
      this.trackProgress(`read_category_${categoryId}`);
      this.navigateTo("page-story-reader", { categoryId, storyId });
    },

    renderStoryPage(categoryId, storyId) {
      const story = this.db.contentDB[categoryId]?.stories?.[storyId];
      if (!story) {
        this.ui.storyReaderPage.innerHTML = `<p>Geschichte nicht gefunden.</p>`;
        return;
      }
      const storyContent = this.t(story.content);
      if (!storyContent) return;

      // BUGFIX: Titel wird jetzt hier gesetzt für Konsistenz
      this.ui.pageTitle.textContent = this.t(story.title);

      const fullPageHtml = `
              <div class="article-header">
                <img src="${story.image}" alt="${this.t(
        story.title
      )}" onerror="this.onerror=null;this.src='https://placehold.co/800x300/1A1A1A/FFFFFF?text=Bild+fehlt';"/>
                <h2>${this.t(story.title)}</h2>
              </div>
              <p class="text-lg text-gray-400 -mt-6 mb-6">${this.t(
                story.subtitle
              )}</p>
              <div class="text-lg leading-relaxed space-y-4">${
                storyContent.story
              }</div>
            `;
      this.ui.storyReaderPage.innerHTML = fullPageHtml;
    },

    showFact(categoryId, factId) {
      const fact = this.db.contentDB[categoryId]?.facts?.[factId];
      if (fact?.premium && !this.state.isPremium) {
        this.showPremiumModal();
        return;
      }
      this.addXp(25);
      this.addWtfCoins(10);
      this.trackProgress("read_articles", `fact_${factId}`);
      this.trackProgress(`read_category_${categoryId}`);
      this.navigateTo("page-fact-reader", { categoryId, factId });
    },

    renderFactPage(categoryId, factId) {
      const fact = this.db.contentDB[categoryId]?.facts?.[factId];
      if (!fact) {
        this.ui.factReaderPage.innerHTML = `<p>Fakt nicht gefunden.</p>`;
        return;
      }
      const factContent = this.t(fact.content);
      if (!factContent) return;

      // BUGFIX: Titel wird jetzt hier gesetzt für Konsistenz
      this.ui.pageTitle.textContent = this.t(fact.title);

      const sections = {
        entry_moment: {
          title: "WTF-Moment",
          icon: "⚡️",
          style: "wtf-moment",
        },
        what_is_it: {
          title: "Was ist das überhaupt?",
          icon: "🤔",
          style: "",
        },
        how_it_works: {
          title: "Wie funktioniert das?",
          icon: "⚙️",
          style: "",
        },
        usage: {
          title: "Wofür wird das genutzt?",
          icon: "💡",
          style: "",
        },
        advantages: {
          title: "Was sind die Chancen?",
          icon: "👍",
          style: "",
        },
        disadvantages: {
          title: "Was sind die Risiken?",
          icon: "👎",
          style: "",
        },
        history: { title: "Wie war das früher?", icon: "📜", style: "" },
        future: {
          title: "Was kommt als Nächstes?",
          icon: "🔮",
          style: "",
        },
        meaning_for_us: {
          title: "Was bedeutet das für mich?",
          icon: "🌍",
          style: "",
        },
        bonus: {
          title: "Bonus / Action",
          icon: "🚀",
          style: "wtf-fazit",
        },
      };

      let contentHtml = Object.keys(sections)
        .map((key) => {
          if (
            key === "bonus" &&
            categoryId === "technologie" &&
            factId === "was_ist_ki"
          ) {
            return ""; // Skip, will be handled manually
          }
          if (factContent[key]) {
            const section = sections[key];
            return `
                                <div class="story-section ${section.style}">
                                  <div class="story-section-header">
                                    <span class="story-icon">${section.icon}</span>
                                    <h4 class="text-xl font-bold text-neon-blue">${section.title}</h4>
                                  </div>
                                  <p class="text-gray-300 leading-relaxed md:pl-10">${factContent[key]}</p>
                                </div>`;
          }
          return "";
        })
        .join("");

      if (categoryId === "technologie" && factId === "was_ist_ki") {
        const bonusSection = sections["bonus"];
        const aiBonusHtml = `
                <div class="story-section ${bonusSection.style}">
                  <div class="story-section-header">
                    <span class="story-icon">${bonusSection.icon}</span>
                    <h4 class="text-xl font-bold text-neon-blue">${
                      bonusSection.title
                    }</h4>
                  </div>
                  <div class="text-gray-300 leading-relaxed md:pl-10">
                    <p class="mb-4">${factContent["bonus"]}</p>
                    <div id="ai-image-generator">
                        <textarea id="ai-image-prompt" class="w-full bg-gray-800 border-2 border-neon-blue p-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pure-white" rows="2" placeholder="${this.t(
                          this.db.uiStrings.imageGenPrompt
                        )}"></textarea>
                        <button data-action="generateAiImage" class="btn-primary-gradient mt-4">
                            ${this.t(this.db.uiStrings.imageGenButton)}
                        </button>
                        <div id="ai-image-loading" class="hidden mt-4 text-neon-green">${this.t(
                          this.db.uiStrings.imageGenLoading
                        )}</div>
                        <div id="ai-image-result" class="mt-4">
                            <img id="generated-image" class="w-full h-auto rounded-lg hidden" alt="Von KI generiertes Bild">
                        </div>
                    </div>
                  </div>
                </div>`;
        contentHtml += aiBonusHtml;
      }

      let quizHtml = "";
      if (factContent.quiz) {
        const quiz = factContent.quiz;
        const answersHtml = quiz.answers
          .map(
            (answer, index) =>
              `<button class="quiz-answer-btn" data-index="${index}">${answer}</button>`
          )
          .join("");
        quizHtml = `<div class="story-section"><div class="story-section-header"><span class="story-icon">🏆</span><h4 class="text-2xl font-bold text-neon-violet">WTF-Quiz!</h4></div><div class="md:pl-10"><p class="mb-4 text-lg">${quiz.question}</p><div id="quiz-container" data-category-id="${categoryId}" data-content-id="${factId}" data-content-type="facts" class="flex flex-col space-y-3">${answersHtml}</div><div id="quiz-feedback" class="mt-4 font-bold h-6"></div></div></div>`;
      }

      const explainSimplyHtml = `
                                <div class="text-center my-8">
                                    <button data-action="explainFactSimply" data-category-id="${categoryId}" data-fact-id="${factId}" class="btn-primary-gradient">
                                        ${this.t(
                                          this.db.uiStrings.explainSimplyButton
                                        )}
                                    </button>
                                </div>
            `;

      const fullPageHtml = `
              <div class="article-header">
                <img src="${fact.image}" alt="${this.t(
        fact.title
      )}" onerror="this.onerror=null;this.src='https://placehold.co/800x300/1A1A1A/FFFFFF?text=Bild+fehlt';"/>
                <h2>${this.t(fact.title)}</h2>
              </div>
              ${contentHtml}
              ${quizHtml}
              ${explainSimplyHtml}
            `;
      this.ui.factReaderPage.innerHTML = fullPageHtml;
    },

    handleQuizAnswer(event, quiz) {
      const selectedButton = event.target;
      const quizContainer = selectedButton.closest("#quiz-container");
      const buttons = quizContainer.querySelectorAll(".quiz-answer-btn");
      buttons.forEach((button) => (button.disabled = true));

      const selectedIndex = parseInt(selectedButton.dataset.index, 10);
      const correctIndex = quiz.correctAnswerIndex;
      const feedbackEl = quizContainer.nextElementSibling;

      if (selectedIndex === correctIndex) {
        selectedButton.classList.add("correct");
        feedbackEl.textContent = "Richtig! +15 XP & +15 🪙";
        feedbackEl.style.color = "var(--neon-green)";
        this.addXp(15);
        this.addWtfCoins(15);
        this.trackProgress("quiz_completed");
      } else {
        selectedButton.classList.add("wrong");
        const correctButton = quizContainer.querySelector(
          `.quiz-answer-btn[data-index="${correctIndex}"]`
        );
        correctButton.classList.add("correct");
        feedbackEl.textContent = "Leider falsch.";
        feedbackEl.style.color = "#FF2D2D";
      }
    },

    renderStartPage() {
      document.getElementById("start-card1-title").textContent = this.t(
        this.db.uiStrings.startCard1
      );
      document.getElementById("start-card2-title").textContent = this.t(
        this.db.uiStrings.startCard2
      );
      document.getElementById("start-card3-title").textContent = this.t(
        this.db.uiStrings.startCard3
      );
    },

    renderCategoryPage(pageType) {
      const mainPaneId = `pane-main-${pageType}`;
      const mainPane = document.getElementById(mainPaneId);
      mainPane.innerHTML = "";
      const list = document.createElement("div");
      list.className = "space-y-4";

      for (const categoryId in this.db.categories) {
        const category = this.db.categories[categoryId];
        if (category.premium && !this.state.isPremium) continue;

        const card = document.createElement("div");
        card.className =
          "card-glow-border cursor-pointer flex items-center p-4";
        card.innerHTML = `<span class="text-4xl mr-4">${
          category.emoji
        }</span><span class="font-bold text-lg">${this.t(
          category.title
        )}</span>`;

        card.addEventListener("click", () => {
          this.state.activeCategoryId[pageType] = categoryId;
          this.renderCategoryPage(pageType);
        });

        if (this.state.activeCategoryId[pageType] === categoryId) {
          card.classList.add("active");
          card.style.borderColor = "var(--neon-green)";
        }
        list.appendChild(card);
      }
      mainPane.appendChild(list);

      const subPane = this.ui.subPanes[pageType];
      const activeId = this.state.activeCategoryId[pageType];
      this.renderSubPaneContent(pageType, activeId, subPane);
    },

    renderSubPaneContent(pageType, categoryId, container) {
      if (!categoryId) {
        container.innerHTML = `<div class="flex items-center justify-center h-full text-gray-500 text-2xl">${this.t(
          this.db.uiStrings.placeholder
        )}</div>`;
        return;
      }
      const categoryData = this.db.contentDB[categoryId];
      const content = categoryData ? categoryData[pageType] : null;

      if (
        !content ||
        (Array.isArray(content) && content.length === 0) ||
        (typeof content === "object" && Object.keys(content).length === 0)
      ) {
        container.innerHTML = `<div class="flex items-center justify-center h-full text-gray-500 text-2xl">${this.t(
          this.db.uiStrings.noContent
        )}</div>`;
        return;
      }

      if (pageType === "stories" || pageType === "facts") {
        let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
        const dataType = pageType === "stories" ? "story" : "fact";
        for (const contentId in content) {
          const item = content[contentId];
          const isLocked = item.premium && !this.state.isPremium;
          html += `<div class="card-glow-border cursor-pointer flex flex-col relative ${
            isLocked ? "premium-locked" : ""
          }" data-${dataType}-id="${contentId}" data-category-id="${categoryId}">
                                  ${
                                    isLocked
                                      ? '<span class="premium-badge">✨</span>'
                                      : ""
                                  }
                                  <img src="${item.image}" alt="${this.t(
            item.title
          )}" class="w-full h-32 object-cover rounded-t-2xl mb-4" onerror="this.onerror=null;this.src='https://placehold.co/300x128/1A1A1A/FFFFFF?text=Bild';">
                                  <h4 class="text-xl font-bold text-center mt-auto px-2 pb-2">${this.t(
                                    item.title
                                  )}</h4>
                                </div>`;
        }
        html += "</div>";
        container.innerHTML = html;
      } else if (pageType === "games") {
        let html = '<div class="space-y-6">';
        content.forEach((game) => {
          const isLocked = game.premium && !this.state.isPremium;
          html += `<div class="card-glow-border cursor-pointer p-4 relative ${
            isLocked ? "premium-locked" : ""
          }" data-game-id="${game.id}" data-category-id="${categoryId}">
                                      ${
                                        isLocked
                                          ? '<span class="premium-badge">✨</span>'
                                          : ""
                                      }
                                      <div class="flex items-center">
                                          <img src="${
                                            game.image
                                          }" alt="${this.t(
            game.title
          )}" class="w-20 h-20 object-cover rounded-lg mr-6" onerror="this.onerror=null;this.src='https://placehold.co/80x80/1A1A1A/FFFFFF?text=Icon';">
                                          <div>
                                              <h4 class="text-2xl font-bold">${this.t(
                                                game.title
                                              )}</h4>
                                              <p class="text-gray-400">${this.t(
                                                game.desc
                                              )}</p>
                                          </div>
                                      </div>
                                  </div>`;
        });
        html += "</div>";
        container.innerHTML = html;
      }
    },

    renderProfilePage() {
      const { level, xpInCurrentLevel, xpNeededForNextLevel } =
        this.getCurrentLevelInfo();
      document.getElementById("profile-name").textContent = this.state.username;
      document.getElementById(
        "profile-coins"
      ).textContent = `🪙 ${this.state.wtfCoins}`;
      // GEÄNDERT: Zeigt jetzt ein Bild anstelle eines Emojis
      document.getElementById(
        "profile-avatar"
      ).innerHTML = `<img src="${this.state.avatar}" alt="Avatar" class="w-full h-full object-cover rounded-full">`;
      document.getElementById("profile-progress-label").textContent = this.t(
        this.db.uiStrings.progressLabel
      );

      const premiumStatusEl = document.getElementById("profile-premium-status");
      if (this.state.isPremium) {
        premiumStatusEl.innerHTML = `<span class="text-lg font-bold text-yellow-400">Premium-Mitglied ✨</span>`;
      } else {
        premiumStatusEl.innerHTML = `<button class="btn-premium text-sm py-1 px-4" data-action="showPremiumModal">Werde Premium</button>`;
      }

      const profileXpBar = document.getElementById("profile-xp-bar");
      const profileXpText = document.getElementById("profile-xp-text");
      const profileLevelBadge = document.getElementById("profile-level-badge");

      if (profileXpBar) {
        profileXpBar.style.width = `${
          (xpInCurrentLevel / xpNeededForNextLevel) * 100
        }%`;
      }
      if (profileXpText) {
        profileXpText.textContent = `${xpInCurrentLevel} / ${xpNeededForNextLevel} XP`;
      }
      if (profileLevelBadge) {
        profileLevelBadge.innerHTML = `
                                <span class="level-text">${this.t(
                                  this.db.uiStrings.level
                                )}</span>
                                <span class="level-number">${level}</span>
                              `;
      }

      document.getElementById("badges-title").textContent = this.t(
        this.db.uiStrings.yourBadges
      );

      const badgesContainer = document.getElementById("profile-badges");
      badgesContainer.innerHTML = Object.keys(this.db.badges)
        .map((badgeId) => {
          const badge = this.db.badges[badgeId];
          const isUnlocked = this.state.unlockedBadges.includes(badgeId);
          return `<div class="badge-card ${isUnlocked ? "unlocked" : ""}">
                                  <span class="text-5xl">${badge.emoji}</span>
                                  <p class="badge-title">${this.t(
                                    badge.title
                                  )}</p>
                                  <div class="tooltip">${this.t(
                                    badge.desc
                                  )}</div>
                                </div>`;
        })
        .join("");
    },

    async ensureAudioIsReady() {
      if (Tone.context.state !== "running") {
        await Tone.start();
      }
    },

    showGame(categoryId, gameId) {
      const gameData = this.db.contentDB[categoryId]?.games?.find(
        (g) => g.id === gameId
      );
      if (!gameData) return;

      if (gameData.premium && !this.state.isPremium) {
        this.showPremiumModal();
        return;
      }

      if (gameId === "fake-or-real-ki") this.renderFakeOrRealGame(gameData);
      else if (gameId === "future-tech-memory")
        this.renderFutureTechMemory(gameData);
      else {
        const html = `<div class="modal-content p-6 md:p-8 rounded-2xl max-w-md w-full text-center"><div class="text-6xl mb-4">${
          gameData.emoji
        }</div><h3 class="text-3xl font-bold mb-2 text-neon-violet">${this.t(
          gameData.title
        )}</h3><p class="text-lg text-gray-300 mb-4">${this.t(
          gameData.desc
        )}</p><div class="p-4 bg-gray-900 rounded-lg"><h4 class="text-xl font-bold text-neon-green">Spiel wird geladen...</h4><p class="text-gray-400 mt-2">Dieses Spiel ist noch in der Entwicklung.</p></div><button class="btn-primary-gradient mt-6" data-action="closeModal">Verstanden</button></div>`;
        this.showModal(html);
      }
    },

    renderFakeOrRealGame(gameData) {
      this.fakeOrRealGame.gameData = gameData;
      this.ensureAudioIsReady();

      this.fakeOrRealGame.sounds.start = new Tone.Synth({
        oscillator: { type: "fmsine" },
        envelope: {
          attack: 0.01,
          decay: 0.1,
          sustain: 0.3,
          release: 0.5,
        },
      }).toDestination();
      this.fakeOrRealGame.sounds.correct = new Tone.Synth({
        oscillator: { type: "triangle" },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.1,
          release: 0.2,
        },
      }).toDestination();
      this.fakeOrRealGame.sounds.wrong = new Tone.Synth({
        oscillator: { type: "square" },
        envelope: {
          attack: 0.01,
          decay: 0.2,
          sustain: 0.0,
          release: 0.2,
        },
      }).toDestination();
      this.fakeOrRealGame.sounds.gameOver = new Tone.Synth({
        oscillator: { type: "amsine" },
        envelope: { attack: 0.1, decay: 0.5, sustain: 0.1, release: 1 },
      }).toDestination();

      const html = `
            <div id="fake-or-real-modal" class="modal-content p-4 md:p-6 rounded-2xl max-w-4xl w-full text-center flex flex-col max-h-[95vh]">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl md:text-3xl font-bold text-neon-violet">${this.t(
                      gameData.title
                    )}</h3>
                    <button data-action="closeModal" class="text-3xl hover:text-white">&times;</button>
                </div>
                <div id="game-intro-view">
                        <div class="text-6xl mb-4">${gameData.emoji}</div>
                        <p class="text-lg text-gray-300 mb-6">${this.t(
                          gameData.desc
                        )}</p>
                        <button id="start-fake-game-btn" class="btn-primary-gradient text-xl">${this.t(
                          this.db.uiStrings.gameStartGame
                        )}</button>
                </div>
                <div id="game-play-view" class="flex-grow flex flex-col" style="display: none;">
                    <div class="flex justify-between font-bold text-lg mb-4">
                        <span>${this.t(
                          this.db.uiStrings.gameScore
                        )}: <span id="game-score">0</span></span>
                        <span>${this.t(
                          this.db.uiStrings.gameTimer
                        )}: <span id="game-timer">30</span>s</span>
                    </div>
                    <h4 id="game-instruction" class="text-2xl font-bold text-neon-green mb-4">${this.t(
                      this.db.uiStrings.gameChooseReal
                    )}</h4>
                    <div id="game-image-container" class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow"></div>
                    <div id="game-feedback" class="h-10 mt-4 text-2xl font-bold"></div>
                </div>
                <div id="game-over-view" class="hidden">
                        <h2 class="text-5xl font-black text-neon-green mb-4">${this.t(
                          this.db.uiStrings.gameOver
                        )}</h2>
                        <p class="text-2xl mb-2">${this.t(
                          this.db.uiStrings.gameFinalScore
                        )}</p>
                        <p id="final-score" class="text-6xl font-bold text-neon-blue mb-6"></p>
                        <p id="final-coins" class="text-2xl font-bold text-yellow-400 mb-6"></p>
                        <button id="restart-fake-game-btn" class="btn-primary-gradient mr-4">${this.t(
                          this.db.uiStrings.gameRestart
                        )}</button>
                        <button data-action="closeModal" class="bg-gray-700 hover:bg-gray-600 font-bold py-3 px-6 rounded-full">${this.t(
                          this.db.uiStrings.closeButton
                        )}</button>
                </div>
            </div>`;
      this.showModal(html);
      document
        .getElementById("start-fake-game-btn")
        .addEventListener("click", () => this.startFakeOrRealGame());
      document
        .getElementById("restart-fake-game-btn")
        .addEventListener("click", () => this.startFakeOrRealGame());
    },

    startFakeOrRealGame() {
      this.fakeOrRealGame.sounds.start.triggerAttackRelease("C4", "8n");
      this.fakeOrRealGame.running = true;
      this.fakeOrRealGame.score = 0;
      this.fakeOrRealGame.timeLeft = 30;
      this.fakeOrRealGame.currentQuestionIndex = -1;
      this.fakeOrRealGame.questions = [
        ...this.fakeOrRealGame.gameData.questions,
      ].sort(() => 0.5 - Math.random());
      document.getElementById("game-intro-view").classList.add("hidden");
      document.getElementById("game-over-view").classList.add("hidden");
      document.getElementById("game-play-view").classList.remove("hidden");
      this.updateFakeOrRealGameUI();
      this.nextFakeOrRealQuestion();
      this.fakeOrRealGame.gameInterval = setInterval(() => {
        this.fakeOrRealGame.timeLeft--;
        this.updateFakeOrRealGameUI();
        if (this.fakeOrRealGame.timeLeft <= 0) {
          this.endFakeOrRealGame();
        }
      }, 1000);
    },

    stopFakeOrRealGame() {
      this.fakeOrRealGame.running = false;
      if (this.fakeOrRealGame.gameInterval) {
        clearInterval(this.fakeOrRealGame.gameInterval);
        this.fakeOrRealGame.gameInterval = null;
      }
    },

    endFakeOrRealGame() {
      this.stopFakeOrRealGame();
      this.fakeOrRealGame.sounds.gameOver.triggerAttackRelease("C3", "1n");
      const finalScore = this.fakeOrRealGame.score;
      document.getElementById("final-score").textContent = finalScore;
      const coinsGained = Math.floor(finalScore / 2);
      document.getElementById(
        "final-coins"
      ).textContent = `+ ${coinsGained} 🪙`;
      document.getElementById("game-play-view").classList.add("hidden");
      document.getElementById("game-over-view").classList.remove("hidden");
      if (finalScore > 0) {
        this.addXp(finalScore);
        this.addWtfCoins(coinsGained);
        this.trackProgress("games_played", "fake-or-real-ki");
      }
    },

    nextFakeOrRealQuestion() {
      if (!this.fakeOrRealGame.running) return;
      this.fakeOrRealGame.currentQuestionIndex++;
      if (
        this.fakeOrRealGame.currentQuestionIndex >=
        this.fakeOrRealGame.questions.length
      ) {
        this.fakeOrRealGame.currentQuestionIndex = 0;
      }
      const question =
        this.fakeOrRealGame.questions[this.fakeOrRealGame.currentQuestionIndex];
      const container = document.getElementById("game-image-container");
      container.innerHTML = "";
      document.getElementById("game-feedback").textContent = "";
      const isRealFirst = Math.random() > 0.5;
      const firstImgSrc = isRealFirst ? question.real : question.fake;
      const secondImgSrc = isRealFirst ? question.fake : question.real;
      const createImg = (src, isReal) => {
        const wrapper = document.createElement("div");
        wrapper.className =
          "card-glow-border cursor-pointer flex items-center justify-center p-2 h-full transition-all duration-300 transform hover:scale-105";
        wrapper.innerHTML = `<img src="${src}" class="max-h-full max-w-full object-contain rounded-lg" onerror="this.onerror=null;this.src='https://placehold.co/400x400/1A1A1A/FFFFFF?text=Bild+lädt...';">`;
        wrapper.addEventListener(
          "click",
          () => this.handleFakeOrRealAnswer(isReal, wrapper),
          { once: true }
        );
        return wrapper;
      };
      container.appendChild(createImg(firstImgSrc, isRealFirst));
      container.appendChild(createImg(secondImgSrc, !isRealFirst));
    },

    handleFakeOrRealAnswer(wasCorrect, selectedWrapper) {
      if (!this.fakeOrRealGame.running) return;
      const feedbackEl = document.getElementById("game-feedback");
      document.querySelectorAll("#game-image-container > div").forEach((el) => {
        el.style.pointerEvents = "none";
      });
      if (wasCorrect) {
        this.fakeOrRealGame.sounds.correct.triggerAttackRelease(
          "C5",
          "8n",
          Tone.now()
        );
        this.fakeOrRealGame.sounds.correct.triggerAttackRelease(
          "G5",
          "8n",
          Tone.now() + 0.1
        );
        feedbackEl.textContent = this.t(this.db.uiStrings.gameCorrect);
        feedbackEl.style.color = "var(--neon-green)";
        selectedWrapper.style.borderColor = "var(--neon-green)";
        selectedWrapper.style.boxShadow = "0 0 25px var(--neon-green)";
        this.fakeOrRealGame.score += 10;
      } else {
        this.fakeOrRealGame.sounds.wrong.triggerAttackRelease("C3", "4n");
        feedbackEl.textContent = this.t(this.db.uiStrings.gameWrong);
        feedbackEl.style.color = "#FF2D2D";
        selectedWrapper.style.borderColor = "#FF2D2D";
        selectedWrapper.style.boxShadow = "0 0 25px #FF2D2D";
      }
      this.updateFakeOrRealGameUI();
      setTimeout(() => this.nextFakeOrRealQuestion(), 1200);
    },

    updateFakeOrRealGameUI() {
      const scoreEl = document.getElementById("game-score");
      const timerEl = document.getElementById("game-timer");
      if (scoreEl) scoreEl.textContent = this.fakeOrRealGame.score;
      if (timerEl) timerEl.textContent = this.fakeOrRealGame.timeLeft;
    },

    renderFutureTechMemory(gameData) {
      this.futureTechMemory.gameData = gameData;
      this.ensureAudioIsReady();
      this.futureTechMemory.sounds.flip = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.0,
          release: 0.1,
        },
      }).toDestination();
      this.futureTechMemory.sounds.match = new Tone.Synth({
        oscillator: { type: "triangle" },
        envelope: {
          attack: 0.01,
          decay: 0.2,
          sustain: 0.2,
          release: 0.2,
        },
      }).toDestination();
      this.futureTechMemory.sounds.win = new Tone.Synth({
        oscillator: { type: "sawtooth" },
        envelope: { attack: 0.1, decay: 0.5, sustain: 0.3, release: 1 },
      }).toDestination();
      const html = `
            <div class="modal-content p-4 md:p-6 rounded-2xl max-w-xl w-full text-center flex flex-col max-h-[95vh]">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl md:text-3xl font-bold text-neon-violet">${this.t(
                      gameData.title
                    )}</h3>
                    <button data-action="closeModal" class="text-3xl hover:text-white">&times;</button>
                </div>
                <div id="memory-game-view" class="flex-grow flex flex-col">
                    <div class="flex justify-between font-bold text-lg mb-4">
                        <span>${this.t(
                          this.db.uiStrings.memoryMoves
                        )}: <span id="memory-moves-counter">0</span></span>
                    </div>
                    <div id="memory-board" class="grid grid-cols-4 gap-2 md:gap-4 flex-grow"></div>
                </div>
                <div id="memory-win-view" class="hidden">
                        <h2 class="text-5xl font-black text-neon-green mb-4">${this.t(
                          this.db.uiStrings.memoryCongrats
                        )}</h2>
                        <p id="memory-final-text" class="text-2xl mb-2"></p>
                        <p id="memory-final-coins" class="text-2xl font-bold text-yellow-400 mb-6"></p>
                        <button data-action="closeModal" class="btn-primary-gradient">${this.t(
                          this.db.uiStrings.closeButton
                        )}</button>
                </div>
            </div>`;
      this.showModal(html);
      this.startFutureTechMemory();
    },

    startFutureTechMemory() {
      const game = this.futureTechMemory;
      game.running = true;
      game.cards = [...game.gameData.cards, ...game.gameData.cards].sort(
        () => 0.5 - Math.random()
      );
      game.flippedCards = [];
      game.matchedPairs = 0;
      game.moves = 0;
      game.lockBoard = false;
      const board = document.getElementById("memory-board");
      board.innerHTML = "";
      document.getElementById("memory-moves-counter").textContent = "0";
      document.getElementById("memory-game-view").classList.remove("hidden");
      document.getElementById("memory-win-view").classList.add("hidden");
      game.cards.forEach((emoji) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("memory-card");
        cardElement.dataset.emoji = emoji;
        cardElement.innerHTML = `<div class="card-face card-back"></div><div class="card-face card-front">${emoji}</div>`;
        cardElement.addEventListener("click", () =>
          this.handleMemoryCardClick(cardElement)
        );
        board.appendChild(cardElement);
      });
    },

    stopFutureTechMemory() {
      this.futureTechMemory.running = false;
    },

    handleMemoryCardClick(cardElement) {
      const game = this.futureTechMemory;
      if (game.lockBoard || cardElement.classList.contains("is-flipped"))
        return;
      game.sounds.flip.triggerAttackRelease("C5", "16n");
      cardElement.classList.add("is-flipped");
      game.flippedCards.push(cardElement);
      if (game.flippedCards.length === 2) {
        game.lockBoard = true;
        game.moves++;
        document.getElementById("memory-moves-counter").textContent =
          game.moves;
        this.checkForMemoryMatch();
      }
    },

    checkForMemoryMatch() {
      const game = this.futureTechMemory;
      const [card1, card2] = game.flippedCards;
      const isMatch = card1.dataset.emoji === card2.dataset.emoji;
      if (isMatch) {
        game.sounds.match.triggerAttackRelease("E5", "8n", Tone.now() + 0.1);
        game.sounds.match.triggerAttackRelease("G5", "8n", Tone.now() + 0.2);
        card1.classList.add("is-matched");
        card2.classList.add("is-matched");
        game.matchedPairs++;
        this.resetMemoryBoard();
        if (game.matchedPairs === game.gameData.cards.length) {
          this.endFutureTechMemory();
        }
      } else {
        setTimeout(() => {
          card1.classList.remove("is-flipped");
          card2.classList.remove("is-flipped");
          this.resetMemoryBoard();
        }, 1000);
      }
    },

    resetMemoryBoard() {
      this.futureTechMemory.flippedCards = [];
      this.futureTechMemory.lockBoard = false;
    },

    endFutureTechMemory() {
      this.stopFutureTechMemory();
      this.futureTechMemory.sounds.win.triggerAttackRelease(
        "C4",
        "0.5s",
        Tone.now() + 0.1
      );
      this.futureTechMemory.sounds.win.triggerAttackRelease(
        "G4",
        "0.5s",
        Tone.now() + 0.3
      );
      this.futureTechMemory.sounds.win.triggerAttackRelease(
        "C5",
        "1s",
        Tone.now() + 0.5
      );
      const moves = this.futureTechMemory.moves;
      document.getElementById("memory-final-text").textContent = this.t(
        this.db.uiStrings.memoryDone
      ).replace("{moves}", moves);
      const xpGained = Math.max(10, 50 - moves * 2);
      const coinsGained = Math.max(5, 25 - moves);
      document.getElementById(
        "memory-final-coins"
      ).textContent = `+ ${coinsGained} 🪙 & ${xpGained} XP`;
      document.getElementById("memory-game-view").classList.add("hidden");
      document.getElementById("memory-win-view").classList.remove("hidden");
      this.addXp(xpGained);
      this.addWtfCoins(coinsGained);
      this.trackProgress("games_played", "future-tech-memory");
    },

    async generateAiImage() {
      const promptInput = document.getElementById("ai-image-prompt");
      const loadingIndicator = document.getElementById("ai-image-loading");
      const resultImage = document.getElementById("generated-image");

      if (!promptInput || !promptInput.value.trim()) {
        return;
      }

      const button = document.querySelector('[data-action="generateAiImage"]');
      button.disabled = true;
      loadingIndicator.classList.remove("hidden");
      resultImage.classList.add("hidden");

      if (this.config.GEMINI_API_KEY === "YOUR_GOOGLE_API_KEY") {
        resultImage.alt =
          "Bitte hinterlege deinen Google API Key in der Konfiguration (config.GEMINI_API_KEY).";
        resultImage.src = `https://placehold.co/512x512/1A1A1A/FFFFFF?text=${encodeURIComponent(
          resultImage.alt
        )}`;
        resultImage.classList.remove("hidden");
        button.disabled = false;
        loadingIndicator.classList.add("hidden");
        return;
      }

      try {
        const userPrompt = promptInput.value.trim();
        const prompt = `Erstelle ein einfaches SVG-Bild, das die folgende Beschreibung darstellt: "${userPrompt}". Das SVG sollte eine ViewBox von "0 0 100 100" haben. Gib nur den reinen SVG-Code ohne Kommentare oder Erklärungen aus. Das SVG sollte einen dunklen Hintergrund haben, z.B. #1a1a1a, und leuchtende Neon-Farben verwenden, die zum Stil der Webseite passen (z.B. #00cfff, #39ff14, #8b00ff).`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.config.GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `API-Fehler: ${errorData.error?.message || "Unbekannter Fehler"}`
          );
        }

        const data = await response.json();
        let svgCode = data.candidates[0].content.parts[0].text;
        svgCode = svgCode
          .replace(/```svg\n?/g, "")
          .replace(/```/g, "")
          .trim();

        const imageUrl = `data:image/svg+xml;base64,${btoa(svgCode)}`;
        resultImage.src = imageUrl;
        resultImage.alt = `Von KI generiertes Bild: ${userPrompt}`;
        resultImage.classList.remove("hidden");
        this.addXp(20);
        this.addWtfCoins(10);
      } catch (error) {
        console.error("Fehler bei der Bilderzeugung:", error);
        resultImage.alt =
          "Ups, da ist etwas schiefgelaufen. Die Zukunfts-KI macht wohl gerade eine Pause.";
        resultImage.src = `https://placehold.co/512x512/1A1A1A/FF2D2D?text=${encodeURIComponent(
          resultImage.alt
        )}`;
        resultImage.classList.remove("hidden");
      } finally {
        button.disabled = false;
        loadingIndicator.classList.add("hidden");
      }
    },

    async explainFactSimply(event) {
      const { categoryId, factId } = event.target.closest(
        '[data-action="explainFactSimply"]'
      ).dataset;
      const fact = this.db.contentDB[categoryId]?.facts?.[factId];
      if (!fact) return;

      const factTitle = this.t(fact.title);
      const loadingHtml = `<div class="modal-content p-8 rounded-2xl max-w-md w-full text-center">
              <h3 class="text-2xl font-bold text-neon-blue mb-4">${this.t(
                this.db.uiStrings.explainSimplyTitle
              )}</h3>
              <p id="gemini-explanation" class="text-lg text-gray-300">${this.t(
                this.db.uiStrings.explainSimplyLoading
              )}</p>
            </div>`;
      this.showModal(loadingHtml);

      // SIMULATION
      setTimeout(() => {
        const explanationEl = document.getElementById("gemini-explanation");
        if (explanationEl) {
          explanationEl.textContent = `Stell dir vor, ${factTitle.toLowerCase()} ist wie ein Superheld für Computer! Es hilft Maschinen, schlau zu werden und Dinge zu lernen, fast wie du in der Schule. Ziemlich cool, oder?`;
        }
        this.addXp(5);
      }, 1500);
    },

    toggleSearch() {
      this.ui.searchContainer.classList.toggle("visible");
      if (this.ui.searchContainer.classList.contains("visible")) {
        this.ui.searchInput.focus();
      } else {
        this.ui.searchInput.value = "";
      }
    },

    executeSearch() {
      this.toggleSearch();
      this.navigateTo("page-search");
    },

    showUsernameModal() {
      const html = `<div class="modal-content p-8 rounded-2xl max-w-sm w-full text-center">
                                  <h2 class="text-2xl font-bold mb-4 text-neon-blue">Namen ändern</h2>
                                  <input type="text" id="username-input" class="w-full text-lg p-2 rounded-lg text-black bg-gray-200 focus:outline-none mb-6" value="${this.state.username}">
                                  <button class="btn-primary-gradient" data-action="saveUsername">Speichern</button>
                              </div>`;
      this.showModal(html);
      document.getElementById("username-input").focus();
    },

    saveUsername() {
      const input = document.getElementById("username-input");
      if (input && input.value.trim()) {
        this.setUsername(input.value.trim());
      }
    },

    setUsername(newName) {
      if (newName.trim()) {
        this.state.username = newName.trim();
        this.saveProgress();
        this.updateStatsUI();
        this.closeModal();
      }
    },

    showAvatarModal() {
      // GEÄNDERT: Zeigt jetzt Bilder an
      let avatarHtml = this.state.unlockedAvatars
        .map(
          (avatarUrl) =>
            `<button data-avatar="${avatarUrl}" class="p-2 rounded-lg hover:bg-neon-blue transition-colors aspect-square">
                <img src="${avatarUrl}" alt="Avatar" class="w-full h-full object-cover rounded-md">
            </button>`
        )
        .join("");
      const html = `<div class="modal-content p-8 rounded-2xl max-w-md w-full text-center"><h2 class="text-2xl font-bold mb-4 text-neon-blue">Avatar wählen</h2><div class="grid grid-cols-4 gap-4">${avatarHtml}</div></div>`;
      this.showModal(html);
    },

    setAvatar(newAvatar) {
      this.state.avatar = newAvatar;
      this.saveProgress();
      this.updateStatsUI();
      this.closeModal();
    },

    renderStorePage() {
      this.ui.pageTitle.textContent = this.t(this.db.uiStrings.storeTitle);
      const container = this.ui.storeItemsContainer;
      container.innerHTML = "";
      const currentLevel = this.getCurrentLevelInfo().level;

      this.db.storeItems.avatars.forEach((item) => {
        // GEÄNDERT: Prüft jetzt gegen item.image
        const isOwned = this.state.unlockedAvatars.includes(item.image);
        const canAfford = this.state.wtfCoins >= item.cost;
        const levelMet = currentLevel >= item.requiredLevel;
        const canBuy = !isOwned && canAfford && levelMet;

        let buttonHtml = "";
        if (isOwned) {
          buttonHtml = `<button class="w-full mt-2 py-1 rounded-full bg-neon-green text-black font-bold" disabled>Besitzt du</button>`;
        } else {
          buttonHtml = `<button class="btn-primary-gradient w-full mt-2 py-1 text-sm" data-buy-item-id="${
            item.id
          }" ${!canBuy ? "disabled" : ""}>🪙 ${item.cost}</button>`;
        }

        // GEÄNDERT: Zeigt jetzt ein Bild an
        const itemHtml = `
              <div class="card-glow-border p-4 flex flex-col items-center justify-between text-center ${
                !canBuy && !isOwned ? "opacity-50" : ""
              }">
                  <div class="w-24 h-24 mb-4 bg-gray-900 rounded-lg flex items-center justify-center">
                    <img src="${
                      item.image
                    }" alt="Store Avatar" class="w-full h-full object-cover rounded-lg">
                  </div>
                  <div class="w-full">
                      ${
                        !levelMet
                          ? `<p class="text-xs text-red-400 font-bold">Lvl ${item.requiredLevel} nötig</p>`
                          : ""
                      }
                      ${buttonHtml}
                  </div>
              </div>`;
        container.innerHTML += itemHtml;
      });
    },

    buyItem(itemId) {
      const item = this.db.storeItems.avatars.find((i) => i.id === itemId);
      if (!item) return;

      // GEÄNDERT: Prüft gegen item.image
      const isOwned = this.state.unlockedAvatars.includes(item.image);
      const canAfford = this.state.wtfCoins >= item.cost;
      const levelMet = this.getCurrentLevelInfo().level >= item.requiredLevel;

      if (!isOwned && canAfford && levelMet) {
        this.state.wtfCoins -= item.cost;
        this.state.unlockedAvatars.push(item.image); // GEÄNDERT: Speichert die Bild-URL
        this.saveProgress();
        this.updateStatsUI();
        this.renderStorePage();
      }
    },

    startOnboarding() {
      this.state.onboarding.currentStep = 0;
      this.renderOnboardingStep();
    },

    handleOnboardingNext() {
      const currentStep = this.state.onboarding.currentStep;
      if (currentStep === 1) {
        const usernameInput = document.getElementById("onboarding-username");
        if (usernameInput && usernameInput.value.trim()) {
          this.state.onboarding.tempUsername = usernameInput.value.trim();
        } else {
          this.state.onboarding.tempUsername = this.t(
            this.db.uiStrings.username
          );
        }
      }

      if (currentStep < this.state.onboarding.totalSteps - 1) {
        this.state.onboarding.currentStep++;
        this.renderOnboardingStep();
      } else {
        this.finishOnboarding();
      }
    },

    finishOnboarding() {
      this.state.username = this.state.onboarding.tempUsername;
      this.state.avatar = this.state.onboarding.tempAvatar;

      this.addXp(50);
      this.addWtfCoins(25);

      localStorage.setItem("wtf_visited_before", "true");
      this.saveProgress();
      this.closeModal();
      this.navigateTo("page-start", {}, true);
      this.updateStatsUI();
    },

    renderOnboardingStep() {
      const step = this.state.onboarding.currentStep;
      let stepHtml = "";

      switch (step) {
        case 0: // Welcome
          stepHtml = `
                                <div class="onboarding-step active text-center">
                                    <div class="text-6xl mb-4">👋</div>
                                    <h2 class="text-3xl font-bold mb-2">${this.t(
                                      this.db.uiStrings.onboarding.welcomeTitle
                                    )}</h2>
                                    <p class="text-lg text-gray-300 mb-8">${this.t(
                                      this.db.uiStrings.onboarding.welcomeText
                                    )}</p>
                                </div>`;
          break;
        case 1: // Profile
          // GEÄNDERT: Zeigt jetzt Bilder zur Auswahl an
          stepHtml = `
                                <div class="onboarding-step active text-center">
                                    <h2 class="text-3xl font-bold mb-4">${this.t(
                                      this.db.uiStrings.onboarding.profileTitle
                                    )}</h2>
                                    <label class="block text-lg text-gray-300 mb-2">${this.t(
                                      this.db.uiStrings.onboarding.profileName
                                    )}</label>
                                    <input type="text" id="onboarding-username" class="w-full text-lg p-2 rounded-lg text-black bg-gray-200 focus:outline-none mb-6" placeholder="${this.t(
                                      this.db.uiStrings.username
                                    )}">
                                    <label class="block text-lg text-gray-300 mb-4">${this.t(
                                      this.db.uiStrings.onboarding.profileAvatar
                                    )}</label>
                                    <div id="onboarding-avatar-selection" class="flex justify-center gap-4">
                                        ${this.state.unlockedAvatars
                                          .map(
                                            (avatarUrl) =>
                                              `<button class="onboarding-avatar-btn p-2 rounded-lg ${
                                                avatarUrl ===
                                                this.state.onboarding.tempAvatar
                                                  ? "selected"
                                                  : ""
                                              }" data-avatar-select="${avatarUrl}">
                                                  <img src="${avatarUrl}" class="w-16 h-16 rounded-md object-cover">
                                               </button>`
                                          )
                                          .join("")}
                                    </div>
                                </div>`;
          break;
        case 2: // Gamification
          stepHtml = `
                                 <div class="onboarding-step active text-center">
                                     <h2 class="text-3xl font-bold mb-4">${this.t(
                                       this.db.uiStrings.onboarding.gamifyTitle
                                     )}</h2>
                                     <div class="flex items-center text-left bg-gray-800/50 p-4 rounded-lg mb-4">
                                         <span class="text-5xl mr-4">⭐</span>
                                         <p class="text-gray-300">${this.t(
                                           this.db.uiStrings.onboarding.gamifyXP
                                         )}</p>
                                     </div>
                                     <div class="flex items-center text-left bg-gray-800/50 p-4 rounded-lg">
                                         <span class="text-5xl mr-4">🪙</span>
                                         <p class="text-gray-300">${this.t(
                                           this.db.uiStrings.onboarding
                                             .gamifyCoins
                                         )}</p>
                                     </div>
                                 </div>`;
          break;
        case 3: // Final
          stepHtml = `
                                <div class="onboarding-step active text-center">
                                    <div class="text-6xl mb-4">🎉</div>
                                   <h2 class="text-3xl font-bold mb-2">${this.t(
                                     this.db.uiStrings.onboarding.finalTitle
                                   )}</h2>
                                   <p class="text-lg text-gray-300 mb-4">${this.t(
                                     this.db.uiStrings.onboarding.finalTask
                                   )}</p>
                                   <div class="bg-gray-800/50 p-4 rounded-lg">
                                       <p class="text-gray-300 mb-2">${this.t(
                                         this.db.uiStrings.onboarding
                                           .finalReward
                                       )}</p>
                                       <p class="text-2xl font-bold text-neon-green">50 XP & 25 🪙</p>
                                   </div>
                                </div>`;
          break;
      }

      const isLastStep = step === this.state.onboarding.totalSteps - 1;
      const buttonText = isLastStep
        ? this.t(this.db.uiStrings.onboarding.finishButton)
        : this.t(this.db.uiStrings.onboarding.nextButton);

      const modalHtml = `
                                <div id="onboarding-modal" class="modal-content p-8 rounded-2xl max-w-md w-full">
                                    ${stepHtml}
                                    <div class="mt-8 text-center">
                                        <button class="btn-primary-gradient" data-action="handleOnboardingNext">${buttonText}</button>
                                    </div>
                                </div>
                              `;

      this.showModal(modalHtml);

      if (step === 1) {
        // GEÄNDERT: Event Listener für Bild-Buttons
        document.querySelectorAll(".onboarding-avatar-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            this.state.onboarding.tempAvatar =
              e.currentTarget.dataset.avatarSelect;
            document
              .querySelectorAll(".onboarding-avatar-btn")
              .forEach((b) => b.classList.remove("selected"));
            e.currentTarget.classList.add("selected");
          });
        });
      }
    },

    renderPremiumHub() {
      const container = document.getElementById("premium-content-container");
      if (!this.state.isPremium) {
        container.innerHTML = `<div class="col-span-1 md:col-span-2"><button class="btn-premium text-xl py-4 px-8" data-action="showPremiumModal">${this.t(
          this.db.uiStrings.premiumModalButton
        )}</button></div>`;
        return;
      }

      let html = "";
      const premiumContent = this.db.contentDB.premium;
      for (const storyId in premiumContent.stories) {
        const story = premiumContent.stories[storyId];
        html += `<div class="card-glow-border cursor-pointer flex flex-col" data-story-id="${
          story.id
        }" data-category-id="premium">
                                <img src="${story.image}" alt="${this.t(
          story.title
        )}" class="w-full h-32 object-cover rounded-t-2xl mb-4" onerror="this.onerror=null;this.src='https://placehold.co/300x128/1A1A1A/FFFFFF?text=Bild';">
                                <h4 class="text-xl font-bold text-center mt-auto px-2 pb-2">${this.t(
                                  story.title
                                )}</h4>
                              </div>`;
      }
      container.innerHTML = html;
      container.addEventListener("click", (e) => {
        const card = e.target.closest("[data-story-id]");
        if (card) this.showStory(card.dataset.categoryId, card.dataset.storyId);
      });
    },

    showPremiumModal() {
      const html = `<div class="modal-content p-8 rounded-2xl max-w-sm w-full text-center">
                                <div class="text-6xl mb-4">✨</div>
                                <h2 class="text-3xl font-bold mb-2 text-yellow-400">${this.t(
                                  this.db.uiStrings.premiumModalTitle
                                )}</h2>
                                <p class="text-lg text-gray-300 mb-8">${this.t(
                                  this.db.uiStrings.premiumModalText
                                )}</p>
                                <button class="btn-premium w-full" data-action="upgradeToPremium">${this.t(
                                  this.db.uiStrings.premiumModalButton
                                )}</button>
                            </div>`;
      this.showModal(html);
    },

    upgradeToPremium() {
      this.state.isPremium = true;
      this.saveProgress();
      this.updateStatsUI();
      this.rerenderPageContent();
      this.closeModal();
    },
  };

  WTFApp.init();
});
