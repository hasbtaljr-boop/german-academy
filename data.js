const DB = {
  guide: [
    {
      icon: "🎯",
      title: "مقدمة للغة الألمانية (كيف تتعلم؟)",
      text: "اللغة الألمانية لغة منطقية تعتمد على قواعد ثابتة. السر في إتقانها هو <b>التكرار المتباعد</b>. لا تحفظ الكلمة مجردة أبداً! احفظها دائماً مع <b>أداتها (der, die, das)</b> وجمعها، وضعها في جملة سياقية. التطبيق مصمم ليقوم بذلك بدلاً عنك."
    },
    {
      icon: "🌱",
      title: "مستوى ما قبل المبتدئ (Pre-A1)",
      text: "<b>الهدف:</b> كسر حاجز الخوف والتعرف على الأصوات.<br><b>المتطلبات:</b> حفظ الحروف الأبجدية، نطق الحروف المركبة (مثل sch, eu, ie, ei)، وحفظ حوالي 100 إلى 150 كلمة أساسية جداً (الألوان، الأرقام، أفراد العائلة).<br><b>نصيحة:</b> استمع للنطق في التطبيق وردد بصوت عالٍ."
    },
    {
      icon: "🧱",
      title: "المستوى التأسيسي (A1)",
      text: "<b>الهدف:</b> البقاء والتواصل الأساسي.<br><b>المتطلبات:</b> حفظ 500 إلى 800 كلمة. يجب أن تكون قادراً على التعريف بنفسك، السؤال عن الاتجاهات، التسوق، وطلب الطعام. قواعدياً: يجب إتقان الحاضر، والضمائر الشخصية، والفرق المبدئي بين الرفع (Nominativ) والنصب (Akkusativ)."
    },
    {
      icon: "🌉",
      title: "المستوى الأساسي (A2)",
      text: "<b>الهدف:</b> التفاعل اليومي المستقل.<br><b>المتطلبات:</b> حصيلة تقارب 1500 كلمة. هنا تبدأ في سرد قصص بسيطة. قواعدياً: إتقان الماضي التام (Perfekt) والماضي البسيط للأفعال المساعدة، واستخدام حروف الجر المتغيرة (Wechselpräpositionen)."
    },
    {
      icon: "🚀",
      title: "المستوى المتوسط (B1)",
      text: "<b>الهدف:</b> الاستقلالية التامة في الحياة العادية.<br><b>المتطلبات:</b> حوالي 2500 كلمة. في هذا المستوى تستطيع التعبير عن أحلامك، خططك، والدفاع عن رأيك ببساطة. قواعدياً: الجمل الجانبية (Nebensätze) باستخدام weil, dass, wenn، والمبني للمجهول البسيط."
    },
    {
      icon: "💼",
      title: "المستوى المتقدم (B2)",
      text: "<b>الهدف:</b> الاحترافية والعمل (مستوى الأطباء والمهندسين).<br><b>المتطلبات:</b> حوالي 4000 كلمة. هنا تنتقل من الكلمات الملموسة إلى المجردة (السياسة، الاقتصاد، الطب). قواعدياً: إتقان بناء الجمل المعقدة، والروابط المزدوجة (zwar...aber)، والكلام المنقول (Konjunktiv I)."
    },
    {
      icon: "🎓",
      title: "مستويات الكفاءة (C1 - C2)",
      text: "<b>الهدف:</b> التحدث بطلاقة تشبه الناطقين الأصليين.<br><b>المتطلبات:</b> أكثر من 5000 كلمة. فهم النصوص العلمية المعقدة، الأدب، واستخدام التعابير الاصطلاحية (Redewendungen) والفروق الدقيقة للغة (Nuancen)."
    }
  ],
  levels: [
    {
      id: "A1", title: "المستوى التأسيسي (A1)", req: 0, css: "lh-a0",
      lessons: [
        {
          title: "التحيات والتعارف", icon: "👋",
          words: [
            {de: "Hallo", ar: "مرحباً", art: "", ex: "Hallo, wie geht es dir?", ear: "مرحباً، كيف حالك؟"},
            {de: "Guten Morgen", ar: "صباح الخير", art: "", ex: "Guten Morgen zusammen!", ear: "صباح الخير جميعاً!"},
            {de: "Guten Tag", ar: "يوم سعيد", art: "", ex: "Guten Tag, Herr Müller.", ear: "يوم سعيد، سيد مولر."},
            {de: "Guten Abend", ar: "مساء الخير", art: "", ex: "Guten Abend, meine Damen und Herren.", ear: "مساء الخير، سيداتي وسادتي."},
            {de: "Danke", ar: "شكراً", art: "", ex: "Danke für Ihre Hilfe.", ear: "شكراً لمساعدتك."},
            {de: "Bitte", ar: "عفواً / من فضلك", art: "", ex: "Ein Wasser, bitte.", ear: "ماء، من فضلك."},
            {de: "Ja", ar: "نعم", art: "", ex: "Ja, das stimmt.", ear: "نعم، هذا صحيح."},
            {de: "Nein", ar: "لا", art: "", ex: "Nein, danke.", ear: "لا، شكراً."},
            {de: "der Name / -n", ar: "الاسم", art: "der", ex: "Mein Name ist Nazim.", ear: "اسمي ناظم."},
            {de: "kommen", ar: "يأتي", art: "", ex: "Ich komme aus dem Irak.", ear: "أنا آتي من العراق."}
          ]
        },
        {
          title: "الأرقام والوقت", icon: "🔢",
          words: [
            {de: "eins", ar: "واحد", art: "", ex: "Nummer eins.", ear: "رقم واحد."},
            {de: "zwei", ar: "اثنان", art: "", ex: "Ich brauche zwei.", ear: "أحتاج اثنين."},
            {de: "drei", ar: "ثلاثة", art: "", ex: "Wir sind drei Personen.", ear: "نحن ثلاثة أشخاص."},
            {de: "die Uhr / -en", ar: "الساعة", art: "die", ex: "Es ist acht Uhr.", ear: "الساعة الثامنة."},
            {de: "die Zeit / -en", ar: "الوقت", art: "die", ex: "Ich habe keine Zeit.", ear: "ليس لدي وقت."},
            {de: "heute", ar: "اليوم", art: "", ex: "Heute ist ein schöner Tag.", ear: "اليوم يوم جميل."},
            {de: "morgen", ar: "غداً", art: "", ex: "Bis morgen!", ear: "إلى الغد!"},
            {de: "gestern", ar: "أمس", art: "", ex: "Gestern war ich zu Hause.", ear: "أمس كنت في المنزل."}
          ]
        },
        {
          title: "العائلة والأشخاص", icon: "👨‍👩‍👧",
          words: [
            {de: "die Familie / -n", ar: "العائلة", art: "die", ex: "Meine Familie ist groß.", ear: "عائلتي كبيرة."},
            {de: "der Vater / Väter", ar: "الأب", art: "der", ex: "Mein Vater arbeitet viel.", ear: "أبي يعمل كثيراً."},
            {de: "die Mutter / Mütter", ar: "الأم", art: "die", ex: "Meine Mutter ist Lehrerin.", ear: "أمي معلمة."},
            {de: "das Kind / -er", ar: "الطفل", art: "das", ex: "Das Kind spielt im Garten.", ear: "الطفل يلعب في الحديقة."},
            {de: "der Freund / -e", ar: "الصديق", art: "der", ex: "Er ist mein bester Freund.", ear: "هو أفضل أصدقائي."}
          ]
        }
      ]
    },
    {
      id: "A2", title: "المستوى الأساسي (A2)", req: 0, css: "lh-a1",
      lessons: [
        {
          title: "التسوق والطعام", icon: "🛒",
          words: [
            {de: "kaufen", ar: "يشتري", art: "", ex: "Ich möchte ein neues Auto kaufen.", ear: "أريد شراء سيارة جديدة."},
            {de: "verkaufen", ar: "يبيع", art: "", ex: "Er verkauft sein altes Handy.", ear: "هو يبيع هاتفه القديم."},
            {de: "der Supermarkt / -märkte", ar: "السوبر ماركت", art: "der", ex: "Ich gehe in den Supermarkt.", ear: "أنا ذاهب إلى السوبر ماركت."},
            {de: "das Brot / -e", ar: "الخبز", art: "das", ex: "Ich brauche frisches Brot.", ear: "أحتاج خبزاً طازجاً."},
            {de: "das Wasser", ar: "الماء", art: "das", ex: "Bitte ein Glas Wasser.", ear: "كأس ماء من فضلك."},
            {de: "teuer", ar: "غالي", art: "", ex: "Das ist mir zu teuer.", ear: "هذا غالي جداً بالنسبة لي."},
            {de: "billig", ar: "رخيص", art: "", ex: "Gibt es das auch billiger?", ear: "هل يوجد أرخص من هذا؟"}
          ]
        },
        {
          title: "السفر والعطلات", icon: "✈️",
          words: [
            {de: "der Urlaub / -e", ar: "العطلة", art: "der", ex: "Ich mache Urlaub in Spanien.", ear: "أقضي عطلتي في إسبانيا."},
            {de: "das Ticket / -s", ar: "التذكرة", art: "das", ex: "Wo ist mein Ticket?", ear: "أين تذكرتي؟"},
            {de: "abfahren", ar: "ينطلق", art: "", ex: "Der Zug fährt um 8 Uhr ab.", ear: "القطار ينطلق في الثامنة."},
            {de: "ankommen", ar: "يصل", art: "", ex: "Wann kommen wir an?", ear: "متى نصل؟"},
            {de: "der Flughafen / -häfen", ar: "المطار", art: "der", ex: "Wir fahren zum Flughafen.", ear: "نحن ذاهبون إلى المطار."}
          ]
        },
        {
          title: "جسم الإنسان والصحة", icon: "🩺",
          words: [
            {de: "der Kopf / Köpfe", ar: "الرأس", art: "der", ex: "Mein Kopf tut weh.", ear: "رأسي يؤلمني."},
            {de: "der Bauch / Bäuche", ar: "البطن", art: "der", ex: "Ich habe Bauchschmerzen.", ear: "لدي ألم في البطن."},
            {de: "der Arzt / Ärzte", ar: "الطبيب", art: "der", ex: "Ich muss zum Arzt gehen.", ear: "يجب أن أذهب للطبيب."},
            {de: "das Medikament / -e", ar: "الدواء", art: "das", ex: "Nehmen Sie dieses Medikament.", ear: "خذ هذا الدواء."},
            {de: "die Apotheke / -n", ar: "الصيدلية", art: "die", ex: "Wo ist die nächste Apotheke?", ear: "أين أقرب صيدلية؟"},
            {de: "gesund", ar: "بصحة جيدة", art: "", ex: "Bleiben Sie gesund!", ear: "ابق بصحة جيدة!"},
            {de: "krank", ar: "مريض", art: "", ex: "Ich bin heute leider krank.", ear: "أنا مريض اليوم للأسف."}
          ]
        }
      ]
    },
    {
      id: "B1", title: "المستوى المتوسط (B1)", req: 0, css: "lh-a2",
      lessons: [
        {
          title: "العمل والتعليم", icon: "📚",
          words: [
            {de: "die Ausbildung / -en", ar: "التدريب المهني / التعليم", art: "die", ex: "Er macht eine Ausbildung zum Mechaniker.", ear: "هو يقوم بتدريب مهني كميكانيكي."},
            {de: "die Bewerbung / -en", ar: "طلب التوظيف", art: "die", ex: "Ich schreibe eine Bewerbung.", ear: "أنا أكتب طلب توظيف."},
            {de: "der Lebenslauf / -läufe", ar: "السيرة الذاتية", art: "der", ex: "Hier ist mein Lebenslauf.", ear: "هنا سيرتي الذاتية."},
            {de: "die Erfahrung / -en", ar: "الخبرة", art: "die", ex: "Ich habe viel Erfahrung in diesem Bereich.", ear: "لدي خبرة كبيرة في هذا المجال."},
            {de: "das Unternehmen / -", ar: "الشركة", art: "das", ex: "Das Unternehmen wächst schnell.", ear: "الشركة تنمو بسرعة."}
          ]
        },
        {
          title: "البيئة والمجتمع", icon: "🌍",
          words: [
            {de: "der Umweltschutz", ar: "حماية البيئة", art: "der", ex: "Umweltschutz ist wichtig für unsere Zukunft.", ear: "حماية البيئة مهمة لمستقبلنا."},
            {de: "der Müll", ar: "القمامة", art: "der", ex: "Wir müssen den Müll trennen.", ear: "يجب علينا فصل القمامة."},
            {de: "die Gesellschaft / -en", ar: "المجتمع", art: "die", ex: "Unsere Gesellschaft verändert sich.", ear: "مجتمعنا يتغير."},
            {de: "unterstützen", ar: "يدعم", art: "", ex: "Wir unterstützen dieses Projekt.", ear: "نحن ندعم هذا المشروع."}
          ]
        },
        {
          title: "التكنولوجيا والاتصالات", icon: "💻",
          words: [
            {de: "das Netzwerk / -e", ar: "الشبكة", art: "das", ex: "Das Netzwerk ist ausgefallen.", ear: "الشبكة تعطلت."},
            {de: "die Verbindung / -en", ar: "الاتصال / الرابط", art: "die", ex: "Die Internetverbindung ist langsam.", ear: "اتصال الإنترنت بطيء."},
            {de: "konfigurieren", ar: "يُهيّئ / يضبط", art: "", ex: "Ich muss den Router konfigurieren.", ear: "يجب أن أهيئ الراوتر."},
            {de: "herunterladen", ar: "يُحمّل", art: "", ex: "Ich lade die Datei herunter.", ear: "أنا أحمل الملف."}
          ]
        }
      ]
    },
    {
      id: "B2", title: "المستوى المتقدم (B2)", req: 0, css: "lh-b1",
      lessons: [
        {
          title: "في المستشفى والعيادة", icon: "🏥",
          words: [
            {de: "die Diagnose / -n", ar: "التشخيص", art: "die", ex: "Die Diagnose wurde schnell gestellt.", ear: "تم وضع التشخيص بسرعة."},
            {de: "die Behandlung / -en", ar: "العلاج", art: "die", ex: "Die Behandlung schlägt gut an.", ear: "العلاج يعطي مفعولاً جيداً."},
            {de: "das Symptom / -e", ar: "العَرَض المرضي", art: "das", ex: "Welche Symptome haben Sie?", ear: "ما هي الأعراض التي لديك؟"},
            {de: "die Intensivstation / -en", ar: "وحدة العناية المركزة", art: "die", ex: "Der Patient liegt auf der Intensivstation.", ear: "المريض يرقد في العناية المركزة."},
            {de: "die Dosis / Dosen", ar: "الجرعة", art: "die", ex: "Die Dosis muss genau berechnet werden.", ear: "يجب حساب الجرعة بدقة."},
            {de: "überwachen", ar: "يراقب", art: "", ex: "Wir müssen den Blutdruck überwachen.", ear: "يجب علينا مراقبة ضغط الدم."}
          ]
        },
        {
          title: "الاقتصاد والصناعة", icon: "📈",
          words: [
            {de: "die Wirtschaft", ar: "الاقتصاد", art: "die", ex: "Die Wirtschaft erholt sich langsam.", ear: "الاقتصاد يتعافى ببطء."},
            {de: "die Konkurrenz", ar: "المنافسة", art: "die", ex: "Die Konkurrenz auf dem Markt ist groß.", ear: "المنافسة في السوق كبيرة."},
            {de: "investieren", ar: "يستثمر", art: "", ex: "Die Firma investiert in neue Technologien.", ear: "الشركة تستثمر في تقنيات جديدة."},
            {de: "der Export / -e", ar: "التصدير", art: "der", ex: "Der Export ist gestiegen.", ear: "ارتفع التصدير."}
          ]
        },
        {
          title: "النقاش الأكاديمي (هام جداً)", icon: "⚖️",
          words: [
            {de: "meiner Meinung nach", ar: "في رأيي", art: "", ex: "Meiner Meinung nach ist das die beste Lösung.", ear: "في رأيي هذا هو أفضل حل.", tip: "التركيب الأهم في امتحانات B2."},
            {de: "einerseits ... andererseits", ar: "من ناحية ... ومن ناحية أخرى", art: "", ex: "Einerseits ist es teuer, andererseits ist die Qualität hoch.", ear: "من ناحية هو غالي، ومن ناحية أخرى الجودة عالية."},
            {de: "behaupten", ar: "يدّعي", art: "", ex: "Er behauptet, dass er unschuldig ist.", ear: "هو يزعم أنه بريء."},
            {de: "überzeugen", ar: "يُقنع", art: "", ex: "Ihre Argumente haben mich überzeugt.", ear: "حججها أقنعتني."},
            {de: "widersprechen", ar: "يعارض / يناقض", art: "", ex: "Da muss ich Ihnen leider widersprechen.", ear: "للأسف يجب أن أعارضك هنا."}
          ]
        }
      ]
    },
    {
      id: "C1", title: "مستوى الكفاءة (C1)", req: 0, css: "lh-a0",
      lessons: [
        {
          title: "العلوم والمفاهيم المجردة", icon: "🧬",
          words: [
            {de: "die Hypothese / -n", ar: "الفرضية", art: "die", ex: "Die Wissenschaftler prüfen diese Hypothese.", ear: "يختبر العلماء هذه الفرضية."},
            {de: "die Ethik", ar: "علم الأخلاق", art: "die", ex: "Das ist eine Frage der Ethik.", ear: "هذه مسألة أخلاقية."},
            {de: "abstrakt", ar: "مُجرّد", art: "", ex: "Die Theorie ist sehr abstrakt.", ear: "النظرية مجردة للغاية."},
            {de: "die Erkenntnis / -se", ar: "الإدراك / المعرفة", art: "die", ex: "Diese Erkenntnis verändert alles.", ear: "هذا الإدراك يغير كل شيء."},
            {de: "analysieren", ar: "يحلل", art: "", ex: "Wir müssen die Daten genau analysieren.", ear: "يجب أن نحلل البيانات بدقة."}
          ]
        },
        {
          title: "اللغة والأدب", icon: "📖",
          words: [
            {de: "die Metapher / -n", ar: "الاستعارة", art: "die", ex: "Der Autor verwendet viele Metaphern.", ear: "المؤلف يستخدم الكثير من الاستعارات."},
            {de: "interpretieren", ar: "يُفسّر", art: "", ex: "Wie interpretieren Sie dieses Gedicht?", ear: "كيف تفسر هذه القصيدة؟"},
            {de: "rhetorisch", ar: "بلاغي", art: "", ex: "Das war nur eine rhetorische Frage.", ear: "كان هذا مجرد سؤال بلاغي."},
            {de: "verfassen", ar: "يُؤلّف", art: "", ex: "Er hat einen brillanten Artikel verfasst.", ear: "لقد ألف مقالاً رائعاً."}
          ]
        }
      ]
    },
    {
      id: "C2", title: "مستوى الإتقان (C2)", req: 0, css: "lh-b1",
      lessons: [
        {
          title: "التعابير الاصطلاحية والفروق الدقيقة", icon: "🎭",
          words: [
            {de: "auf den Punkt bringen", ar: "يصل لصلب الموضوع", art: "", ex: "Können Sie das bitte auf den Punkt bringen?", ear: "هل يمكنك الوصول إلى صلب الموضوع؟"},
            {de: "die Nuance / -n", ar: "الفارق الدقيق", art: "die", ex: "Man muss die feinen Nuancen der Sprache verstehen.", ear: "يجب فهم الفروق الدقيقة للغة."},
            {de: "redundant", ar: "زائد عن الحاجة (حشو)", art: "", ex: "Diese Information ist redundant.", ear: "هذه المعلومة حشو."},
            {de: "jemandem auf die Schliche kommen", ar: "يكتشف حيلة شخص", art: "", ex: "Die Polizei ist ihm auf die Schliche gekommen.", ear: "اكتشفت الشرطة حيلته."},
            {de: "ins Gras beißen", ar: "يموت (تعبير عامي مجازي)", art: "", ex: "Der alte Motor hat endgültig ins Gras gebissen.", ear: "المحرك القديم مات (تعطل) نهائياً."}
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      title: "الحاضر (Präsens)", icon: "📝", sub: "A1",
      content: "<div class='grule'><p>تصريف الأفعال المنتظمة في الحاضر.</p></div>",
      exercises: [{q: "Ich ___ (gehen) nach Hause.", opts: ["gehe", "gehst", "geht", "gehen"], correct: "gehe", tip: "النهاية مع Ich هي e."}]
    },
    {
      title: "الماضي التام (Perfekt)", icon: "⏳", sub: "A2",
      content: "<div class='grule'><p>الزمن الأكثر استخداماً في الكلام اليومي. يُبنى باستخدام haben/sein.</p></div>",
      exercises: [{q: "Wir ___ gestern Fußball gespielt.", opts: ["haben", "sind", "hat", "ist"], correct: "haben", tip: "الفعل spielen يأخذ haben."}]
    },
    {
      title: "المبني للمجهول (Passiv)", icon: "🏗️", sub: "B1",
      content: "<div class='grule'><p>للتركيز على الحدث وليس الفاعل. يُصاغ باستخدام werden + Partizip II.</p></div>",
      exercises: [{q: "Das Auto ___ repariert.", opts: ["wird", "werde", "werden", "ist"], correct: "wird", tip: "الفعل المساعد هنا هو wird."}]
    },
    {
      title: "الكلام المنقول (Konjunktiv I)", icon: "🗣️", sub: "B2",
      content: "<div class='tip'>شائع جداً في التقارير الطبية والمراسلات.</div><div class='grule'><p>يُستخدم لنقل تصريحات الآخرين بموضوعية.</p></div>",
      exercises: [{q: "Der Minister sagt, er ___ (sein) bereit.", opts: ["ist", "sei", "wäre", "sind"], correct: "sei", tip: "نستخدم sei مع المفرد الغائب."}]
    },
    {
      title: "التركيبات الاسمية المعقدة (Nomen-Verb)", icon: "🏛️", sub: "C1",
      content: "<div class='grule'><p>استخدام تراكيب مكونة من اسم وفعل تعطي معنى فعل واحد.</p></div>",
      exercises: [{q: "Wir müssen eine Entscheidung ___.", opts: ["treffen", "machen", "tun", "geben"], correct: "treffen", tip: "entscheiden = eine Entscheidung treffen."}]
    }
  ],
  dialogues: [
    {
      title: "التعارف في الجامعة", icon: "🎓", sub: "A1",
      lines: [
        {s: "A", de: "Hallo, ich bin Anna. Und wer bist du?", ar: "مرحباً، أنا آنا. ومن أنت؟"},
        {s: "B", de: "Ich bin Lukas. Studierst du auch hier?", ar: "أنا لوكاس. هل تدرسين هنا أيضاً؟"}
      ]
    },
    {
      title: "تسليم المناوبة السريرية", icon: "🏥", sub: "B2",
      lines: [
        {s: "A", de: "Wie ist der Zustand des Patienten?", ar: "كيف هي حالة المريض؟"},
        {s: "B", de: "Er ist stabil, aber wir müssen den Blutdruck überwachen.", ar: "هو مستقر، لكن يجب مراقبة ضغط دمه."}
      ]
    },
    {
      title: "مناظرة أكاديمية (تغير المناخ)", icon: "🌍", sub: "C1",
      lines: [
        {s: "A", de: "Ich bin der festen Überzeugung, dass wir drastische Maßnahmen ergreifen müssen.", ar: "أنا على قناعة تامة بأنه يجب علينا اتخاذ تدابير صارمة."},
        {s: "B", de: "Einerseits stimme ich Ihnen zu, andererseits dürfen wir die Wirtschaft nicht gefährden.", ar: "من ناحية أتفق معك، ومن ناحية أخرى يجب ألا نعرض الاقتصاد للخطر."}
      ]
    }
  ],
  culture: [
    {
      flag: "🇩🇪", title: "ألمانيا في سطور",
      text: "ألمانيا بلد يقع في قلب أوروبا، مشهور بالصناعة (السيارات، التكنولوجيا)، الأدب، والفلسفة.",
      tags: ["عام", "جغرافيا"]
    },
    {
      flag: "⚖️", title: "ثقافة النقاش الأكاديمي والعملي",
      text: "في الجامعات وبيئات العمل في ألمانيا، يُعتبر النقد المباشر والبنّاء (Sachliche Kritik) أمراً إيجابياً، ولا يُعتبر إهانة شخصية. كما أن صيغة (Sie) إلزامية في التعاملات الرسمية.",
      tags: ["C1-C2", "أكاديمي", "عمل"]
    }
  ]
};