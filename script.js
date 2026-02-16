// ========== TRANSLATIONS ==========
const translations = {
    en: {
        nav: {
            home: 'Home',
            aboutProject: 'About Project',
            whatIsAI: 'What is AI',
            coding: 'AI for Coding',
            students: 'AI for Students',
            contacts: 'Contacts'
        },
        hero: {
            title: 'Information Systems Operator',
            description: "Welcome to ISO's first AI-focused project. We've curated a collection of the most powerful neural networks and AI tools designed specifically for developers and students. Whether you're coding, learning, or building the next big thing, our guide will help you find the perfect AI assistant to boost your productivity and accelerate your journey in tech."
        },
        impact: {
            line1: 'AI is not the future.',
            line2: "It's the",
            present: 'present'
        },
        aboutProject: {
            title1: 'About',
            title2: 'Project',
            isoTitle: "ISO's First AI Initiative",
            isoDesc: "This is the pioneering AI-focused project from Information Systems Operator (ISO). We're committed to bringing the best artificial intelligence tools and neural networks to students and developers worldwide.",
            popularTitle: 'Curated AI Collection',
            popularDesc: 'Our platform showcases the most popular and powerful neural networks available today. Each tool has been carefully selected based on performance, user feedback, and real-world impact on productivity and learning.',
            rankingTitle: 'Quality Rankings',
            rankingDesc: 'We rank AI tools based on their effectiveness and popularity. For students, ChatGPT stands as our #1 recommended neural network — the most versatile and powerful AI assistant for academic success.'
        },
        whatIsAI: {
            title1: 'What is',
            title2: '?',
            perception: {
                title: 'Perception',
                desc: 'Understanding the world through data, images, and sensors'
            },
            prediction: {
                title: 'Prediction',
                desc: 'Analyzing patterns to forecast outcomes and behaviors'
            },
            generation: {
                title: 'Generation',
                desc: 'Creating new content, code, and solutions autonomously'
            }
        },
        split: {
            students: {
                title: 'AI for Students',
                desc: 'Learn smarter with AI-powered tools'
            },
            coding: {
                title: 'AI for Coding',
                desc: 'Code faster with intelligent assistance'
            },
            explore: 'Explore →'
        },
        modal: {
            title: 'Get in Touch',
            name: 'Name',
            phone: 'Phone',
            selectPlaceholder: 'What would you like to book?',
            consultation: 'Consultation',
            demo: 'Demo',
            partnership: 'Partnership',
            other: 'Other',
            otherReason: 'Please specify...',
            send: 'Send',
            success: 'Thank you, your request has been sent',
            errors: {
                nameRequired: 'Please fill in this field',
                nameTooShort: 'Name must be at least 2 characters',
                nameInvalid: 'Please enter a valid name',
                phoneRequired: 'Please fill in this field',
                phoneInvalid: 'Please enter a valid phone number',
                phoneTooShort: 'Please enter a valid phone number',
                reasonRequired: 'Please fill in this field',
                otherRequired: 'This field is required',
                otherTooShort: 'Please provide at least 10 words'
            }
        },
        students: {
            pageTitle: 'AI for',
            pageHighlight: 'Students',
            pageSubtitle: 'Unlock your learning potential with AI-powered tools designed for academic excellence',
            sectionTitle: 'Best',
            sectionHighlight: 'AI Tools',
            sectionTitleEnd: 'for Learning',
            benefitsTitle: 'Why Use',
            benefitsTitleEnd: 'for Learning?',
            ctaTitle: 'Ready to Transform Your Learning?',
            ctaSubtitle: 'Start using AI tools today and see the difference',
            ctaButton: 'Back to Home →',
            tools: {
                chatgpt: {
                    name: 'ChatGPT',
                    rank: '#1',
                    badge: 'Most Popular',
                    description: 'Your AI study companion for explanations, essay writing, brainstorming, and homework help. Available 24/7 to answer any question.',
                    features: ['Essay Writing', 'Math Help', 'Research', 'Study Plans'],
                    link: 'Learn More →'
                },
                quillbot: {
                    name: 'Quillbot',
                    badge: 'Paraphrasing',
                    description: 'AI-powered paraphrasing and grammar checker. Perfect for improving writing quality and avoiding plagiarism.',
                    features: ['Paraphrase', 'Grammar Check', 'Summarizer'],
                    link: 'Learn More →'
                },
                grammarly: {
                    name: 'Grammarly',
                    badge: 'Writing Assistant',
                    description: 'Real-time grammar, spelling, and style suggestions. Makes your academic writing clear and professional.',
                    features: ['Grammar', 'Plagiarism', 'Tone'],
                    link: 'Learn More →'
                },
                notion: {
                    name: 'Notion AI',
                    badge: 'Note Taking',
                    description: 'Smart note-taking with AI assistance. Organize lectures, create study guides, and manage projects effortlessly.',
                    features: ['Notes', 'Organization', 'Templates'],
                    link: 'Learn More →'
                },
                photomath: {
                    name: 'Photomath',
                    badge: 'Math Solver',
                    description: 'Scan any math problem and get step-by-step solutions. Perfect for algebra, calculus, and more.',
                    features: ['Math Solutions', 'Step-by-step', 'Graphing'],
                    link: 'Learn More →'
                },
                perplexity: {
                    name: 'Perplexity AI',
                    badge: 'Research',
                    description: 'AI-powered search engine with cited sources. Perfect for academic research and fact-checking.',
                    features: ['Research', 'Citations', 'Sources'],
                    link: 'Learn More →'
                }
            },
            benefits: {
                fast: {
                    title: 'Learn Faster',
                    description: 'Get instant explanations and answers to complex topics'
                },
                grades: {
                    title: 'Better Grades',
                    description: 'Improve writing quality and understanding of subjects'
                },
                time: {
                    title: 'Save Time',
                    description: 'Automate repetitive tasks and focus on what matters'
                },
                support: {
                    title: '24/7 Support',
                    description: 'AI tutors available anytime, anywhere you need help'
                }
            }
        },
        coding: {
            pageTitle: 'AI for',
            pageHighlight: 'Coding',
            pageSubtitle: 'Supercharge your development workflow with AI-powered coding assistants',
            sectionTitle: 'Best',
            sectionHighlight: 'AI Tools',
            sectionTitleEnd: 'for Developers',
            benefitsTitle: 'Why Use',
            benefitsTitleEnd: 'for Development?',
            ctaTitle: 'Ready to Code Smarter?',
            ctaSubtitle: 'Start using AI coding tools and boost your productivity',
            ctaButton: 'Back to Home →',
            tools: {
                github: {
                    name: 'GitHub Copilot',
                    badge: 'Most Popular',
                    description: 'AI pair programmer that suggests code completions and entire functions in real-time. Works across all major languages.',
                    features: ['Code Completion', 'Multiple Languages', 'Context-Aware', 'IDE Integration'],
                    link: 'Learn More →'
                },
                cursor: {
                    name: 'Cursor',
                    badge: 'AI IDE',
                    description: 'AI-first code editor built on VS Code. Chat with your codebase, generate code, and edit naturally.',
                    features: ['AI Chat', 'Code Generation', 'Refactoring', 'Bug Fixing'],
                    link: 'Learn More →'
                },
                tabnine: {
                    name: 'Tabnine',
                    badge: 'Code Completion',
                    description: 'AI code completion that learns from your codebase. Privacy-focused with local and cloud options.',
                    features: ['Autocomplete', 'Team Learning', 'Privacy First'],
                    link: 'Learn More →'
                },
                codeium: {
                    name: 'Codeium',
                    badge: 'Free Forever',
                    description: 'Free AI code acceleration toolkit. Fast autocomplete, intelligent search, and chat for developers.',
                    features: ['Free', 'Fast', 'Chat Support', 'Multi-language'],
                    link: 'Learn More →'
                },
                claude: {
                    name: 'Claude',
                    badge: 'AI Assistant',
                    description: 'Advanced AI assistant for coding, debugging, and architectural decisions. Excellent for complex programming tasks.',
                    features: ['Code Review', 'Debugging', 'Architecture', 'Documentation'],
                    link: 'Learn More →'
                },
                windsurf: {
                    name: 'Windsurf',
                    badge: 'New',
                    description: 'AI-powered development environment with natural language commands and collaborative coding features.',
                    features: ['Natural Language', 'Code Generation', 'Collaboration'],
                    link: 'Learn More →'
                }
            },
            benefits: {
                productivity: {
                    title: 'Code Faster',
                    description: 'Write code 10x faster with intelligent suggestions'
                },
                quality: {
                    title: 'Better Quality',
                    description: 'Catch bugs early and improve code standards'
                },
                learning: {
                    title: 'Learn Continuously',
                    description: 'Understand new patterns and best practices'
                },
                focus: {
                    title: 'Stay Focused',
                    description: 'Automate repetitive tasks and focus on logic'
                }
            }
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            aboutProject: 'О проекте',
            whatIsAI: 'Что такое ИИ',
            coding: 'ИИ для программирования',
            students: 'ИИ для студентов',
            contacts: 'Контакты'
        },
        hero: {
            title: 'Оператор информационных систем',
            description: 'Добро пожаловать в первый AI-проект ISO. Мы собрали коллекцию самых мощных нейронных сетей и AI-инструментов, разработанных специально для разработчиков и студентов. Независимо от того, программируете ли вы, учитесь или создаёте что-то новое, наш гид поможет вам найти идеального AI-ассистента для повышения продуктивности и ускорения вашего пути в технологиях.'
        },
        impact: {
            line1: 'ИИ — это не будущее.',
            line2: 'Это',
            present: 'настоящее'
        },
        aboutProject: {
            title1: 'О',
            title2: 'проекте',
            isoTitle: 'Первая AI-инициатива ISO',
            isoDesc: 'Это пионерский проект Оператора информационных систем (ISO), направленный на искусственный интеллект. Мы стремимся предоставить лучшие инструменты ИИ и нейронные сети студентам и разработчикам по всему миру.',
            popularTitle: 'Подборка лучших ИИ',
            popularDesc: 'Наша платформа представляет самые популярные и мощные нейронные сети, доступные сегодня. Каждый инструмент тщательно отобран на основе производительности, отзывов пользователей и реального влияния на продуктивность и обучение.',
            rankingTitle: 'Рейтинг качества',
            rankingDesc: 'Мы оцениваем AI-инструменты по их эффективности и популярности. Для студентов ChatGPT занимает позицию №1 как рекомендуемая нейронная сеть — самый универсальный и мощный AI-ассистент для успехов в учёбе.'
        },
        whatIsAI: {
            title1: 'Что такое',
            title2: '?',
            perception: {
                title: 'Восприятие',
                desc: 'Понимание мира через данные, изображения и сенсоры'
            },
            prediction: {
                title: 'Прогнозирование',
                desc: 'Анализ паттернов для предсказания результатов и поведения'
            },
            generation: {
                title: 'Генерация',
                desc: 'Создание нового контента, кода и решений автономно'
            }
        },
        split: {
            students: {
                title: 'ИИ для студентов',
                desc: 'Учитесь эффективнее с инструментами на базе ИИ'
            },
            coding: {
                title: 'ИИ для программирования',
                desc: 'Пишите код быстрее с умным ассистентом'
            },
            explore: 'Узнать больше →'
        },
        modal: {
            title: 'Свяжитесь с нами',
            name: 'Имя',
            phone: 'Телефон',
            selectPlaceholder: 'Что вы хотите выбрать?',
            consultation: 'Консультация',
            demo: 'Демонстрация',
            partnership: 'Партнёрство',
            other: 'Другое',
            otherReason: 'Пожалуйста, укажите...',
            send: 'Отправить',
            success: 'Спасибо, ваша заявка отправлена',
            errors: {
                nameRequired: 'Заполните, пожалуйста, это поле',
                nameTooShort: 'Имя должно содержать минимум 2 символа',
                nameInvalid: 'Введите корректное имя',
                phoneRequired: 'Заполните, пожалуйста, это поле',
                phoneInvalid: 'Введите корректный номер телефона',
                phoneTooShort: 'Введите корректный номер телефона',
                reasonRequired: 'Заполните, пожалуйста, это поле',
                otherRequired: 'Это поле обязательно для заполнения',
                otherTooShort: 'Пожалуйста, введите минимум 10 слов'
            }
        },
        students: {
            pageTitle: 'ИИ для',
            pageHighlight: 'студентов',
            pageSubtitle: 'Раскройте свой потенциал с помощью AI-инструментов, созданных для академического превосходства',
            sectionTitle: 'Лучшие',
            sectionHighlight: 'ИИ инструменты',
            sectionTitleEnd: 'для обучения',
            benefitsTitle: 'Почему стоит использовать',
            benefitsTitleEnd: 'для обучения?',
            ctaTitle: 'Готовы трансформировать обучение?',
            ctaSubtitle: 'Начните использовать ИИ инструменты уже сегодня и увидьте разницу',
            ctaButton: 'Вернуться на главную →',
            tools: {
                chatgpt: {
                    name: 'ChatGPT',
                    rank: '№1',
                    badge: 'Самый популярный',
                    description: 'Ваш AI помощник для объяснений, написания эссе, мозгового штурма и помощи с домашними заданиями. Доступен 24/7 для ответов на любые вопросы.',
                    features: ['Написание эссе', 'Помощь с математикой', 'Исследования', 'Планы обучения'],
                    link: 'Попробовать ChatGPT →'
                },
                quillbot: {
                    name: 'Quillbot',
                    badge: 'Перефразирование',
                    description: 'AI-инструмент для перефразирования и проверки грамматики. Идеален для улучшения качества письма и избежания плагиата.',
                    features: ['Перефразирование', 'Проверка грамматики', 'Реферирование'],
                    link: 'Попробовать Quillbot →'
                },
                grammarly: {
                    name: 'Grammarly',
                    badge: 'Помощник письма',
                    description: 'Проверка грамматики, орфографии и стиля в реальном времени. Делает ваше академическое письмо ясным и профессиональным.',
                    features: ['Грамматика', 'Плагиат', 'Тон'],
                    link: 'Попробовать Grammarly →'
                },
                notion: {
                    name: 'Notion AI',
                    badge: 'Заметки',
                    description: 'Умные заметки с помощью ИИ. Организуйте лекции, создавайте учебные руководства и управляйте проектами без усилий.',
                    features: ['Заметки', 'Организация', 'Шаблоны'],
                    link: 'Попробовать Notion →'
                },
                photomath: {
                    name: 'Photomath',
                    badge: 'Решение задач',
                    description: 'Сканируйте любую математическую задачу и получайте пошаговые решения. Идеален для алгебры, математического анализа и многого другого.',
                    features: ['Решения задач', 'Пошаговый разбор', 'Графики'],
                    link: 'Попробовать Photomath →'
                },
                perplexity: {
                    name: 'Perplexity AI',
                    badge: 'Исследования',
                    description: 'AI-поисковая система с цитированием источников. Идеален для академических исследований и проверки фактов.',
                    features: ['Исследования', 'Цитирование', 'Источники'],
                    link: 'Попробовать Perplexity →'
                }
            },
            benefits: {
                fast: {
                    title: 'Учитесь быстрее',
                    description: 'Получайте мгновенные объяснения и ответы на сложные темы'
                },
                grades: {
                    title: 'Лучшие оценки',
                    description: 'Улучшайте качество письма и понимание предметов'
                },
                time: {
                    title: 'Экономьте время',
                    description: 'Автоматизируйте повторяющиеся задачи и сосредоточьтесь на главном'
                },
                support: {
                    title: 'Поддержка 24/7',
                    description: 'ИИ репетиторы доступны в любое время, где бы вам ни нужна помощь'
                }
            }
        },
        coding: {
            pageTitle: 'ИИ для',
            pageHighlight: 'программирования',
            pageSubtitle: 'Ускорьте свой рабочий процесс разработки с помощью AI-ассистентов для программирования',
            sectionTitle: 'Лучшие',
            sectionHighlight: 'ИИ инструменты',
            sectionTitleEnd: 'для разработчиков',
            benefitsTitle: 'Почему стоит использовать',
            benefitsTitleEnd: 'для разработки?',
            ctaTitle: 'Готовы программировать умнее?',
            ctaSubtitle: 'Начните использовать ИИ инструменты для кодинга и повысьте продуктивность',
            ctaButton: 'Вернуться на главную →',
            tools: {
                github: {
                    name: 'GitHub Copilot',
                    badge: 'Самый популярный',
                    description: 'AI программист-напарник, который предлагает автодополнение кода и целые функции в реальном времени. Работает со всеми основными языками.',
                    features: ['Дополнение кода', 'Множество языков', 'Контекстно-зависимый', 'Интеграция с IDE'],
                    link: 'Узнать больше →'
                },
                cursor: {
                    name: 'Cursor',
                    badge: 'AI IDE',
                    description: 'AI-первый редактор кода на базе VS Code. Общайтесь с кодом, генерируйте код и редактируйте естественным образом.',
                    features: ['AI чат', 'Генерация кода', 'Рефакторинг', 'Исправление ошибок'],
                    link: 'Попробовать Cursor →'
                },
                tabnine: {
                    name: 'Tabnine',
                    badge: 'Автодополнение',
                    description: 'AI-автодополнение кода, которое учится на вашей кодовой базе. Ориентирован на приватность с локальными и облачными опциями.',
                    features: ['Автодополнение', 'Командное обучение', 'Приватность'],
                    link: 'Попробовать Tabnine →'
                },
                codeium: {
                    name: 'Codeium',
                    badge: 'Бесплатно',
                    description: 'Бесплатный набор инструментов для ускорения кода. Быстрое автодополнение, интеллектуальный поиск и чат для разработчиков.',
                    features: ['Бесплатно', 'Быстро', 'Чат поддержка', 'Множество языков'],
                    link: 'Попробовать Codeium →'
                },
                claude: {
                    name: 'Claude',
                    badge: 'AI ассистент',
                    description: 'Продвинутый AI-ассистент для кодинга, отладки и архитектурных решений. Отлично подходит для сложных задач программирования.',
                    features: ['Ревью кода', 'Отладка', 'Архитектура', 'Документация'],
                    link: 'Попробовать Claude →'
                },
                windsurf: {
                    name: 'Windsurf',
                    badge: 'Новинка',
                    description: 'AI-среда разработки с командами на естественном языке и функциями совместного программирования.',
                    features: ['Естественный язык', 'Генерация кода', 'Совместная работа'],
                    link: 'Попробовать Windsurf →'
                }
            },
            benefits: {
                productivity: {
                    title: 'Пишите код быстрее',
                    description: 'Пишите код в 10 раз быстрее с интеллектуальными подсказками'
                },
                quality: {
                    title: 'Лучшее качество',
                    description: 'Находите ошибки рано и улучшайте стандарты кода'
                },
                learning: {
                    title: 'Постоянное обучение',
                    description: 'Понимайте новые паттерны и лучшие практики'
                },
                focus: {
                    title: 'Оставайтесь сфокусированными',
                    description: 'Автоматизируйте повторяющиеся задачи и сосредоточьтесь на логике'
                }
            }
        }
    }
};

let currentLang = 'en';

function translatePage(lang) {
    currentLang = lang;
    const data = translations[lang];

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const keys = key.split('.');
        let value = data;

        for (const k of keys) {
            value = value[k];
        }

        if (value) {
            el.textContent = value;
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        const keys = key.split('.');
        let value = data;

        for (const k of keys) {
            value = value[k];
        }

        if (value) {
            el.placeholder = value;
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const terminalOutput = document.getElementById('terminalOutput');
    const body = document.body;

    // Short terminal-style commands
    const commands = [
        { type: 'command', text: '$ cloud boot', delay: 0 },
        { type: 'success', text: 'Packages installed successfully', delay: 600 },
        { type: 'progress', delay: 300 },
        { type: 'info', text: 'found 1283 packages', delay: 900 },
        { type: 'info', text: 'added 1283 packages', delay: 500 },
        { type: 'success', text: 'Cloud installed successfully!', delay: 700 }
    ];

    let lineDelay = 0;

    async function addLine(command) {
        await new Promise(resolve => setTimeout(resolve, command.delay));

        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.animationDelay = '0s';

        if (command.type === 'command') {
            const prompt = document.createElement('span');
            prompt.className = 'prompt';
            prompt.textContent = '$';
            line.appendChild(prompt);

            const commandText = document.createElement('span');
            commandText.className = 'command';
            commandText.textContent = command.text.replace('$ ', '');
            line.appendChild(commandText);
        } else if (command.type === 'success') {
            const successText = document.createElement('span');
            successText.className = 'success-text';
            successText.textContent = command.text;
            line.appendChild(successText);
        } else if (command.type === 'info') {
            const infoText = document.createElement('span');
            infoText.className = 'info-text';
            infoText.textContent = command.text;
            line.appendChild(infoText);
        } else if (command.type === 'progress') {
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'progress-fill';
            
            progressBar.appendChild(progressFill);
            progressContainer.appendChild(progressBar);
            line.appendChild(progressContainer);
        }

        terminalOutput.appendChild(line);
    }

    async function runBootSequence() {
        // Guard: prevent double initialization
        if (window.preloaderInitialized) {
            console.log('⚠️ Preloader already initialized, skipping...');
            return;
        }
        window.preloaderInitialized = true;

        // Minimum display time
        const minDisplayTime = 2500;
        const startTime = Date.now();

        for (const command of commands) {
            await addLine(command);
        }

        // Ensure minimum display time
        const elapsed = Date.now() - startTime;
        const remaining = minDisplayTime - elapsed;

        if (remaining > 0) {
            await new Promise(resolve => setTimeout(resolve, remaining));
        }

        // Wait a bit more before hiding
        await new Promise(resolve => setTimeout(resolve, 400));

        preloader.classList.add('hidden');
        body.classList.add('loaded');
        body.classList.remove('loading');

        setTimeout(() => {
            if (preloader && preloader.parentNode) {
                preloader.remove();
            }
        }, 500);
    }

    runBootSequence();
});

// ========== CONTACT MODAL ==========
const contactModal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeModal = document.getElementById('closeModal');
const modalOverlay = contactModal?.querySelector('.modal-overlay');

if (contactBtn && contactModal) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// ========== BURGER MENU ==========
const burgerMenu = document.getElementById('burgerMenu');
const mainNav = document.getElementById('mainNav');

if (burgerMenu && mainNav) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Animate nav links when menu opens
        if (mainNav.classList.contains('active')) {
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach((link, index) => {
                link.style.animationDelay = `${0.1 + index * 0.1}s`;
            });
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside (on overlay)
    mainNav.addEventListener('click', (e) => {
        if (e.target === mainNav) {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// ========== LANGUAGE SWITCHER (CIRCULAR TOGGLE) ==========
function initLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    
    if (!langToggle) return;
    
    // Load saved language from localStorage or default to 'en'
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    langToggle.setAttribute('data-current', savedLang);
    langToggle.textContent = savedLang.toUpperCase();
    translatePage(savedLang);
    
    langToggle.addEventListener('click', () => {
        const currentLang = langToggle.getAttribute('data-current');
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        
        // Save to localStorage
        localStorage.setItem('preferredLanguage', newLang);
        
        langToggle.setAttribute('data-current', newLang);
        langToggle.textContent = newLang.toUpperCase();
        
        translatePage(newLang);
    });
}

// Initialize language switcher
initLanguageSwitcher();

// ========== FORM VALIDATION & SUBMISSION ==========
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const reasonSelect = document.getElementById('reasonSelect');
const otherReasonGroup = document.getElementById('otherReasonGroup');
const otherReasonInput = document.getElementById('otherReasonInput');

const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const reasonError = document.getElementById('reasonError');

// Show/hide "Other" input field
if (reasonSelect) {
    reasonSelect.addEventListener('change', () => {
        if (reasonSelect.value === 'other') {
            otherReasonGroup.classList.remove('hidden');
            otherReasonInput.required = true;
        } else {
            otherReasonGroup.classList.add('hidden');
            otherReasonInput.required = false;
            otherReasonInput.value = '';
        }
    });
}

// Phone input restriction: only numbers, spaces, and +
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        const value = e.target.value;
        const filteredValue = value.replace(/[^0-9\s+]/g, '');
        if (value !== filteredValue) {
            e.target.value = filteredValue;
        }
    });
}

// Clear error on input
function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

if (nameInput) {
    nameInput.addEventListener('input', () => clearError(nameInput, nameError));
}

if (phoneInput) {
    phoneInput.addEventListener('input', () => clearError(phoneInput, phoneError));
}

if (reasonSelect) {
    reasonSelect.addEventListener('change', () => clearError(reasonSelect, reasonError));
}

if (otherReasonInput) {
    otherReasonInput.addEventListener('input', () => {
        otherReasonInput.classList.remove('error');
        const existingError = document.getElementById('otherError');
        if (existingError) {
            existingError.remove();
        }
    });
}

// Form validation
function validateForm() {
    let isValid = true;
    const errors = translations[currentLang].modal.errors;

    // Clear all errors first
    if (nameInput) {
        nameInput.classList.remove('error');
        nameError.textContent = '';
    }
    if (phoneInput) {
        phoneInput.classList.remove('error');
        phoneError.textContent = '';
    }
    if (reasonSelect) {
        reasonSelect.classList.remove('error');
        reasonError.textContent = '';
    }
    if (otherReasonInput) {
        otherReasonInput.classList.remove('error');
        const existingError = document.getElementById('otherError');
        if (existingError) {
            existingError.remove();
        }
    }

    // Validate name
    if (!nameInput || !nameInput.value.trim()) {
        if (nameInput && nameError) {
            nameInput.classList.add('error');
            nameError.textContent = errors.nameRequired;
        }
        isValid = false;
    } else {
        const nameValue = nameInput.value.trim();

        // Check minimum length (2 characters)
        if (nameValue.length < 2) {
            nameInput.classList.add('error');
            nameError.textContent = errors.nameTooShort;
            isValid = false;
        }
        // Check if name contains digits
        else if (/\d/.test(nameValue)) {
            nameInput.classList.add('error');
            nameError.textContent = errors.nameInvalid;
            isValid = false;
        }
    }

    // Validate phone
    if (!phoneInput || !phoneInput.value.trim()) {
        if (phoneInput && phoneError) {
            phoneInput.classList.add('error');
            phoneError.textContent = errors.phoneRequired;
        }
        isValid = false;
    } else {
        // Remove spaces and + to count only digits
        const phoneDigits = phoneInput.value.replace(/[\s+]/g, '');

        if (!/^\d+$/.test(phoneDigits)) {
            phoneInput.classList.add('error');
            phoneError.textContent = errors.phoneInvalid;
            isValid = false;
        } else if (phoneDigits.length < 6) {
            phoneInput.classList.add('error');
            phoneError.textContent = errors.phoneTooShort;
            isValid = false;
        }
    }

    // Validate reason select
    if (!reasonSelect || !reasonSelect.value) {
        if (reasonSelect && reasonError) {
            reasonSelect.classList.add('error');
            reasonError.textContent = errors.reasonRequired;
        }
        isValid = false;
    }

    // Validate "Other" field if "Other" is selected
    if (reasonSelect && reasonSelect.value === 'other') {
        if (!otherReasonInput || !otherReasonInput.value.trim()) {
            if (otherReasonInput) {
                otherReasonInput.classList.add('error');
                // Show error under the Other input
                const otherError = document.createElement('span');
                otherError.className = 'error-message';
                otherError.id = 'otherError';
                otherError.textContent = errors.otherRequired;

                // Remove existing error if any
                const existingError = document.getElementById('otherError');
                if (existingError) {
                    existingError.remove();
                }

                otherReasonInput.parentElement.appendChild(otherError);
            }
            isValid = false;
        } else {
            // Check word count (minimum 10 words)
            const words = otherReasonInput.value.trim().split(/\s+/).filter(word => word.length > 0);
            if (words.length < 10) {
                otherReasonInput.classList.add('error');
                const otherError = document.createElement('span');
                otherError.className = 'error-message';
                otherError.id = 'otherError';
                otherError.textContent = errors.otherTooShort;

                // Remove existing error if any
                const existingError = document.getElementById('otherError');
                if (existingError) {
                    existingError.remove();
                }

                otherReasonInput.parentElement.appendChild(otherError);
                isValid = false;
            }
        }
    }

    return isValid;
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            const successMessage = translations[currentLang].modal.success;

            // Create success message element
            let successEl = document.getElementById('formSuccessMessage');
            if (!successEl) {
                successEl = document.createElement('div');
                successEl.id = 'formSuccessMessage';
                successEl.className = 'form-success-message';
                contactForm.appendChild(successEl);
            }

            successEl.textContent = successMessage;
            successEl.classList.add('show');

            // Reset form
            contactForm.reset();
            otherReasonGroup.classList.add('hidden');
            otherReasonInput.required = false;

            // Hide success message and close modal after 3 seconds
            setTimeout(() => {
                successEl.classList.remove('show');
                setTimeout(() => {
                    contactModal.classList.remove('active');
                    document.body.style.overflow = '';
                    successEl.remove();
                }, 500);
            }, 3000);
        }
    });
}

// ========== SCROLL PROGRESS BAR ==========
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / scrollTotal) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ========== IMPACT SECTION REVEAL ==========
const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.3
});

const impactLine1 = document.querySelector('.impact-line-1');
const impactLine2 = document.querySelector('.impact-line-2');

if (impactLine1) impactObserver.observe(impactLine1);
if (impactLine2) impactObserver.observe(impactLine2);

// ========== HERO VIDEO DARKEN ON SCROLL ==========
const heroSection = document.querySelector('.hero');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        // Smoothly increase overlay opacity from 0.65 to 0.85 as user scrolls
        const opacity = Math.min(0.65 + (scrolled / heroHeight) * 0.35, 0.85);
        heroSection.style.setProperty('--overlay-opacity', opacity);
    });
}

// ========== TECH CARDS REVEAL - ULTRA SMOOTH ==========
const techCards = document.querySelectorAll('.tech-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('reveal');
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

techCards.forEach(card => {
    cardObserver.observe(card);
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== SPLIT SECTION GRID ANIMATION ==========
const splitLeft = document.querySelector('.split-left');
const splitRight = document.querySelector('.split-right');

function createGridPattern(element) {
    const grid = document.createElement('div');
    grid.className = 'grid-pattern';
    grid.style.cssText = `
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px);
        background-size: 50px 50px;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    `;
    element.appendChild(grid);
    
    element.addEventListener('mouseenter', () => {
        grid.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        grid.style.opacity = '0';
    });
}

if (splitLeft) createGridPattern(splitLeft);
if (splitRight) createGridPattern(splitRight);

// ========== AI TOOL CARDS STAGGER REVEAL ==========
const aiToolCards = document.querySelectorAll('.ai-tool-card');
const sectionTitles = document.querySelectorAll('.section-title-small');
const benefitCards = document.querySelectorAll('.benefit-card');
const ctaSections = document.querySelectorAll('.cta-section');
const aboutCards = document.querySelectorAll('.about-card');
const aboutProjectTitle = document.querySelector('.about-project .section-title');

// Individual ultra smooth reveal for each AI tool card
const aiCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            aiCardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

// Observe each AI tool card individually for smooth scroll reveal
aiToolCards.forEach((card) => {
    aiCardObserver.observe(card);
});

// Ultra smooth reveal for titles, benefits, and CTA
const simpleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            simpleObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
});

sectionTitles.forEach(title => simpleObserver.observe(title));
benefitCards.forEach((card, index) => {
    setTimeout(() => {
        simpleObserver.observe(card);
    }, index * 80);
});
ctaSections.forEach(section => simpleObserver.observe(section));

// ========== ABOUT PROJECT ANIMATIONS ==========
if (aboutProjectTitle) simpleObserver.observe(aboutProjectTitle);
aboutCards.forEach((card, index) => {
    setTimeout(() => {
        simpleObserver.observe(card);
    }, index * 150);
});

// ========== TOOL DETAIL PAGES ENHANCED REVEAL ==========
// Observer for main sections
const toolSectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer for section titles
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

// Observer for cards with stagger effect
const cardSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-box, .use-case-card, .pricing-card, .tip-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('reveal');
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer for overview elements
const overviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reveal main content
            const mainContent = entry.target.querySelector('.overview-main');
            const sidebar = entry.target.querySelector('.overview-sidebar');
            const keyStats = entry.target.querySelector('.key-stats');
            const infoCard = entry.target.querySelector('.info-card');
            
            if (mainContent) {
                setTimeout(() => mainContent.classList.add('reveal'), 100);
            }
            if (sidebar) {
                setTimeout(() => sidebar.classList.add('reveal'), 200);
            }
            if (keyStats) {
                setTimeout(() => keyStats.classList.add('reveal'), 400);
            }
            if (infoCard) {
                setTimeout(() => infoCard.classList.add('reveal'), 300);
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all tool page sections
const toolOverviews = document.querySelectorAll('.tool-overview');
const featureSections = document.querySelectorAll('.features-section');
const useCasesSections = document.querySelectorAll('.use-cases-section');
const pricingSections = document.querySelectorAll('.pricing-section');
const tipsSections = document.querySelectorAll('.tips-section');
const finalCtaSections = document.querySelectorAll('.final-cta-section');
const toolSectionTitles = document.querySelectorAll('.section-title-center');

// Apply observers
toolOverviews.forEach(section => {
    toolSectionsObserver.observe(section);
    overviewObserver.observe(section);
});

[featureSections, useCasesSections, pricingSections, tipsSections, finalCtaSections].forEach(sections => {
    sections.forEach(section => {
        toolSectionsObserver.observe(section);
        cardSectionObserver.observe(section);
    });
});

toolSectionTitles.forEach(title => titleObserver.observe(title));

console.log('✅ WAU AI EXPERIENCE - Loaded');
