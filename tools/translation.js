// Enhanced Translation System for Tool Pages
const toolTranslations = {
    chatgpt: {
        en: {
            toolTagline: "Your Ultimate AI Study Companion",
            header: {
                home: "Home",
                whatIsAI: "What is AI",
                coding: "AI for Coding",
                students: "AI for Students",
                contacts: "Contacts"
            },
            badges: {
                premium: "Most Popular",
                category: "AI Assistant",
                rating: "⭐ 4.9/5"
            },
            ctaButtons: {
                tryFree: "Try ChatGPT Free →",
                learnMore: "Learn More ↓"
            },
            overview: {
                title: "What is <span class='highlight'>ChatGPT</span>?",
                lead: "ChatGPT is OpenAI's revolutionary conversational AI that has transformed how students learn, write, and solve problems. With over 100 million users worldwide, it's the most powerful and accessible AI assistant for education.",
                paragraph: "Whether you're struggling with complex calculus problems, need help drafting an essay, or want to understand quantum physics in simple terms, ChatGPT is available 24/7 to assist you. It's like having a patient, knowledgeable tutor who never gets tired and can explain anything in a way you understand.",
                stats: {
                    users: "100M+",
                    usersLabel: "Active Users",
                    availability: "24/7",
                    availabilityLabel: "Availability",
                    languages: "50+",
                    languagesLabel: "Languages",
                    plan: "Free",
                    planLabel: "Basic Plan"
                },
                quickInfo: {
                    title: "Quick Info",
                    developer: "Developer:",
                    developerValue: "OpenAI",
                    launch: "Launch Date:",
                    launchValue: "November 2022",
                    model: "Model:",
                    modelValue: "GPT-4 (Premium)",
                    freeVersion: "Free Version:",
                    freeVersionValue: "Yes (GPT-3.5)",
                    premium: "Premium:",
                    premiumValue: "$20/month",
                    bestFor: "Best For:",
                    bestForValue: "Writing, Research, Problem-Solving"
                }
            },
            features: {
                title: "Powerful Features for <span class='highlight'>Students</span>",
                items: [
                    {
                        title: "Essay & Paper Writing",
                        desc: "Generate outlines, research suggestions, and improve your writing. ChatGPT helps you brainstorm ideas, structure arguments, and refine your academic prose while maintaining your unique voice."
                    },
                    {
                        title: "Math & Problem Solving",
                        desc: "Get step-by-step solutions to complex math problems from algebra to calculus. ChatGPT breaks down problems into manageable steps and explains the reasoning behind each solution."
                    },
                    {
                        title: "Science Explanations",
                        desc: "Understand difficult scientific concepts through clear, simple explanations. From chemistry equations to physics theories, ChatGPT makes complex topics accessible."
                    },
                    {
                        title: "Study Plans & Summaries",
                        desc: "Create personalized study schedules and get concise summaries of long texts. Perfect for exam preparation and understanding dense academic material quickly."
                    },
                    {
                        title: "Language Learning",
                        desc: "Practice conversations, get translations, and improve grammar in 50+ languages. ChatGPT is an excellent language tutor that adapts to your skill level."
                    },
                    {
                        title: "Creative Brainstorming",
                        desc: "Generate project ideas, explore different perspectives, and overcome creative blocks. Perfect for assignments that require original thinking and innovation."
                    },
                    {
                        title: "Literature Analysis",
                        desc: "Analyze themes, characters, and literary devices in novels and poems. ChatGPT helps you understand deeper meanings and write compelling literary essays."
                    },
                    {
                        title: "Exam Preparation",
                        desc: "Generate practice questions, create flashcards, and test your knowledge. ChatGPT acts as your personal quiz master for any subject."
                    }
                ]
            },
            useCases: {
                title: "Real-World <span class='highlight'>Use Cases</span>",
                items: [
                    {
                        title: "📝 Essay Writing Assistant",
                        prompt: "<strong>You:</strong> \"Help me outline an essay about climate change impacts\"",
                        response: "<strong>ChatGPT:</strong> Provides a structured outline with introduction hooks, main arguments, supporting evidence suggestions, and conclusion strategies.",
                        benefit: "Saves hours of planning time and ensures your essay has a logical flow."
                    },
                    {
                        title: "🧮 Homework Helper",
                        prompt: "<strong>You:</strong> \"Solve: ∫(3x² + 2x - 1)dx\"",
                        response: "<strong>ChatGPT:</strong> Provides step-by-step solution: x³ + x² - x + C, explaining each integration rule used.",
                        benefit: "Learn the process, not just the answer. Understand WHY each step matters."
                    },
                    {
                        title: "🗣️ Language Practice",
                        prompt: "<strong>You:</strong> \"Let's have a conversation in Spanish about travel\"",
                        response: "<strong>ChatGPT:</strong> Engages in natural Spanish dialogue, corrects mistakes gently, and provides explanations.",
                        benefit: "Practice anytime without fear of judgment. Perfect for building confidence."
                    },
                    {
                        title: "📊 Research Assistant",
                        prompt: "<strong>You:</strong> \"What are the main theories of motivation in psychology?\"",
                        response: "<strong>ChatGPT:</strong> Summarizes Maslow's Hierarchy, Self-Determination Theory, Goal-Setting Theory with key researchers and applications.",
                        benefit: "Get quick overviews before diving into detailed research. Save library time."
                    }
                ]
            },
            pricing: {
                title: "Simple <span class='highlight'>Pricing</span>",
                items: [
                    {
                        name: "Free",
                        price: "$0",
                        period: "/month",
                        button: "Start Free",
                        features: [
                            "✓ Access to GPT-3.5",
                            "✓ Unlimited messages",
                            "✓ Basic response speed",
                            "✓ Mobile & web access",
                            "✗ Priority access during peak times",
                            "✗ GPT-4 access"
                        ]
                    },
                    {
                        name: "ChatGPT Plus",
                        badge: "Most Popular",
                        price: "$20",
                        period: "/month",
                        button: "Upgrade Now",
                        features: [
                            "✓ Access to GPT-4 & GPT-4o",
                            "✓ Faster response times",
                            "✓ Priority during peak hours",
                            "✓ Early access to new features",
                            "✓ DALL-E image generation",
                            "✓ Advanced data analysis"
                        ]
                    },
                    {
                        name: "ChatGPT Team",
                        price: "$25",
                        period: "/user/month",
                        button: "For Study Groups",
                        features: [
                            "✓ Everything in Plus",
                            "✓ Team workspace",
                            "✓ Shared conversations",
                            "✓ Admin controls",
                            "✓ Higher message limits",
                            "✓ Priority support"
                        ]
                    }
                ]
            },
            tips: {
                title: "Pro <span class='highlight'>Tips</span> for Students",
                items: [
                    {
                        title: "Be Specific with Prompts",
                        desc: "Instead of \"Help with history,\" try \"Explain the causes of World War I for a high school essay with three main points.\""
                    },
                    {
                        title: "Ask for Explanations",
                        desc: "Always ask \"Why?\" and \"Can you explain that differently?\" to deepen your understanding."
                    },
                    {
                        title: "Use It to Check Your Work",
                        desc: "Paste your essay and ask \"What can I improve?\" or \"Is my argument logical?\""
                    },
                    {
                        title: "Create Custom Study Materials",
                        desc: "Ask ChatGPT to generate practice questions, flashcards, or quizzes based on your textbook."
                    },
                    {
                        title: "Learn by Teaching",
                        desc: "Explain a concept to ChatGPT and ask it to point out any mistakes in your understanding."
                    },
                    {
                        title: "Maintain Academic Integrity",
                        desc: "Use ChatGPT to learn and understand, not to copy. Always write in your own words and cite sources."
                    }
                ]
            },
            cta: {
                title: "Ready to Transform Your Learning?",
                subtitle: "Join millions of students using ChatGPT to learn smarter, write better, and achieve more.",
                primaryButton: "Start Using ChatGPT Free →",
                secondaryButton: "Explore More AI Tools"
            }
        },
        ru: {
            toolTagline: "Ваш идеальный ИИ-помощник в учёбе",
            header: {
                home: "Главная",
                whatIsAI: "Что такое ИИ",
                coding: "ИИ для программирования",
                students: "ИИ для студентов",
                contacts: "Контакты"
            },
            badges: {
                premium: "Самый популярный",
                category: "ИИ-Ассистент",
                rating: "⭐ 4.9/5"
            },
            ctaButtons: {
                tryFree: "Попробовать ChatGPT бесплатно →",
                learnMore: "Узнать больше ↓"
            },
            overview: {
                title: "Что такое <span class='highlight'>ChatGPT</span>?",
                lead: "ChatGPT — революционный разговорный ИИ от OpenAI, который изменил подход студентов к обучению, письму и решению задач. Более 100 миллионов пользователей по всему миру выбирают самого мощного и доступного ИИ-помощника для образования.",
                paragraph: "Сложные задачи по математическому анализу, помощь с эссе или объяснение квантовой физики простым языком — ChatGPT доступен 24/7. Это как личный репетитор, который никогда не устаёт и может объяснить что угодно понятным для вас языком.",
                stats: {
                    users: "100М+",
                    usersLabel: "Активных пользователей",
                    availability: "24/7",
                    availabilityLabel: "Доступность",
                    languages: "50+",
                    languagesLabel: "Языков",
                    plan: "Бесплатно",
                    planLabel: "Базовый план"
                },
                quickInfo: {
                    title: "Быстрая информация",
                    developer: "Разработчик:",
                    developerValue: "OpenAI",
                    launch: "Дата запуска:",
                    launchValue: "Ноябрь 2022",
                    model: "Модель:",
                    modelValue: "GPT-4 (Премиум)",
                    freeVersion: "Бесплатная версия:",
                    freeVersionValue: "Да (GPT-3.5)",
                    premium: "Премиум:",
                    premiumValue: "$20/месяц",
                    bestFor: "Лучше всего для:",
                    bestForValue: "Письма, исследований, решения задач"
                }
            },
            features: {
                title: "Мощные функции для <span class='highlight'>студентов</span>",
                items: [
                    {
                        title: "Написание эссе и работ",
                        desc: "Создавайте планы, находите источники для исследований и улучшайте текст. ChatGPT помогает генерировать идеи, структурировать аргументы и совершенствовать академические тексты, сохраняя ваш уникальный стиль."
                    },
                    {
                        title: "Математика и решение задач",
                        desc: "Получайте пошаговые решения сложных задач от алгебры до математического анализа. ChatGPT разбивает задачи на понятные шаги и объясняет логику каждого решения."
                    },
                    {
                        title: "Объяснения по наукам",
                        desc: "Понимайте сложные научные концепции через ясные и простые объяснения. От химических уравнений до физических теорий — ChatGPT делает сложное доступным."
                    },
                    {
                        title: "Планы обучения и конспекты",
                        desc: "Создавайте персонализированные учебные графики и получайте краткие конспекты длинных текстов. Идеально для подготовки к экзаменам и быстрого усвоения материала."
                    },
                    {
                        title: "Изучение языков",
                        desc: "Практикуйте диалоги, получайте переводы и улучшайте грамматику на 50+ языках. ChatGPT — отличный репетитор по языкам, который адаптируется к вашему уровню."
                    },
                    {
                        title: "Творческий мозговой штурм",
                        desc: "Генерируйте идеи для проектов, исследуйте разные точки зрения и преодолевайте творческие блоки. Идеально для заданий, требующих оригинального мышления и инноваций."
                    },
                    {
                        title: "Литературный анализ",
                        desc: "Анализируйте темы, персонажей и литературные приёмы в романах и стих ах. ChatGPT помогает понять более глубокие смыслы и писать убедительные литературные эссе."
                    },
                    {
                        title: "Подготовка к экзаменам",
                        desc: "Генерируйте практические вопросы, создавайте карточки и проверяйте свои знания. ChatGPT работает как ваш личный преподаватель по любому предмету."
                    }
                ]
            },
            useCases: {
                title: "Реальные <span class='highlight'>примеры использования</span>",
                items: [
                    {
                        title: "📝 Помощник по написанию эссе",
                        prompt: "<strong>Вы:</strong> \"Помоги составить план эссе о влиянии изменения климата\"",
                        response: "<strong>ChatGPT:</strong> Предоставляет структурированный план с введением, основными аргументами, предложениями по подтверждающим доказательствам и стратегиями заключения.",
                        benefit: "Экономит часы времени на планирование и обеспечивает логичный поток вашего эссе."
                    },
                    {
                        title: "🧮 Помощник по домашнему заданию",
                        prompt: "<strong>Вы:</strong> \"Реши: ∫(3x² + 2x - 1)dx\"",
                        response: "<strong>ChatGPT:</strong> Предоставляет пошаговое решение: x³ + x² - x + C, объясняя каждое использованное правило интегрирования.",
                        benefit: "Учись процессу, а не просто ответу. Понимай ПОЧЕМУ важен каждый шаг."
                    },
                    {
                        title: "🗣️ Языковая практика",
                        prompt: "<strong>Вы:</strong> \"Давай поговорим на испанском о путешествиях\"",
                        response: "<strong>ChatGPT:</strong> Участвует в естественном диалоге на испанском, мягко исправляет ошибки и даёт объяснения.",
                        benefit: "Практикуйся в любое время без страха осуждения. Идеально для укрепления уверенности."
                    },
                    {
                        title: "📊 Помощник исследователя",
                        prompt: "<strong>Вы:</strong> \"Каковы основные теории мотивации в психологии?\"",
                        response: "<strong>ChatGPT:</strong> Обобщает Иерархию Маслоу, Теорию самодетерминации, Теорию постановки целей с ключевыми исследователями и применениями.",
                        benefit: "Получайте быстрые обзоры перед погружением в детальные исследования. Экономьте время на поиске."
                    }
                ]
            },
            pricing: {
                title: "Простые <span class='highlight'>цены</span>",
                items: [
                    {
                        name: "Бесплатно",
                        price: "$0",
                        period: "/месяц",
                        button: "Начать бесплатно",
                        features: [
                            "✓ Доступ к GPT-3.5",
                            "✓ Неограниченные сообщения",
                            "✓ Базовая скорость ответа",
                            "✓ Мобильный и веб-доступ",
                            "✗ Приоритетный доступ в пиковые времена",
                            "✗ Доступ к GPT-4"
                        ]
                    },
                    {
                        name: "ChatGPT Plus",
                        badge: "Самый популярный",
                        price: "$20",
                        period: "/месяц",
                        button: "Обновить сейчас",
                        features: [
                            "✓ Доступ к GPT-4 и GPT-4o",
                            "✓ Более быстрые ответы",
                            "✓ Приоритет в пиковые часы",
                            "✓ Ранний доступ к новым функциям",
                            "✓ Генерация изображений DALL-E",
                            "✓ Продвинутый анализ данных"
                        ]
                    },
                    {
                        name: "ChatGPT Team",
                        price: "$25",
                        period: "/пользователь/месяц",
                        button: "Для учебных групп",
                        features: [
                            "✓ Всё из Plus",
                            "✓ Командное рабочее пространство",
                            "✓ Общие разговоры",
                            "✓ Контроль администратора",
                            "✓ Больше лимитов сообщений",
                            "✓ Приоритетная поддержка"
                        ]
                    }
                ]
            },
            tips: {
                title: "Профессиональные <span class='highlight'>советы</span> для студентов",
                items: [
                    {
                        title: "Будьте конкретны с запросами",
                        desc: "Вместо \"Помоги с историей\" попробуйте \"Объясни причины Первой мировой войны для школьного эссе с тремя основными пунктами.\""
                    },
                    {
                        title: "Просите объяснений",
                        desc: "Всегда спрашивайте \"Почему?\" и \"Можешь объяснить по-другому?\" чтобы углубить своё понимание."
                    },
                    {
                        title: "Используйте для проверки работы",
                        desc: "Вставьте своё эссе и спросите \"Что я могу улучшить?\" или \"Логичен ли мой аргумент?\""
                    },
                    {
                        title: "Создавайте учебные материалы",
                        desc: "Попросите ChatGPT сгенерировать практические вопросы, карточки или тесты на основе вашего учебника."
                    },
                    {
                        title: "Учитесь через обучение",
                        desc: "Объясните концепцию ChatGPT и попросите его указать на любые ошибки в вашем понимании."
                    },
                    {
                        title: "Поддерживайте академическую честность",
                        desc: "Используйте ChatGPT для обучения и понимания, а не для копирования. Всегда пишите своими словами и цитируйте источники."
                    }
                ]
            },
            cta: {
                title: "Готовы преобразовать своё обучение?",
                subtitle: "Присоединяйтесь к миллионам студентов, использующих ChatGPT, чтобы учиться умнее, писать лучше и достигать большего.",
                primaryButton: "Начать использовать ChatGPT бесплатно →",
                secondaryButton: "Изучить больше инструментов ИИ"
            }
        }
    },
    'github-copilot': {
        en: {
            toolTagline: "Your AI Pair Programmer",
            header: {
                home: "Home",
                whatIsAI: "What is AI",
                coding: "AI for Coding",
                students: "AI for Students",
                contacts: "Contacts"
            },
            badges: {
                premium: "Most Popular",
                category: "Code Assistant",
                rating: "⭐ 4.8/5"
            },
            ctaButtons: {
                tryFree: "Try GitHub Copilot →",
                learnMore: "Learn More ↓"
            },
            overview: {
                title: "What is <span class='highlight'>GitHub Copilot</span>?",
                lead: "GitHub Copilot is the world's most widely adopted AI developer tool, powered by OpenAI Codex. It acts as your personal pair programmer, suggesting entire lines and functions in real-time as you code.",
                paragraph1: "Developed by GitHub and OpenAI, Copilot understands context from your code and comments, providing intelligent autocomplete suggestions across dozens of programming languages. It's trained on billions of lines of public code, making it incredibly knowledgeable about common patterns, frameworks, and best practices.",
                paragraph2: "Whether you're writing Python, JavaScript, TypeScript, Ruby, Go, C#, or any other major language, Copilot accelerates your workflow by reducing repetitive coding tasks and helping you discover new APIs and libraries.",
                stats: {
                    developers: "1M+",
                    developersLabel: "Developers",
                    languages: "50+",
                    languagesLabel: "Languages",
                    faster: "55%",
                    fasterLabel: "Faster Coding",
                    availability: "24/7",
                    availabilityLabel: "Availability"
                },
                quickInfo: {
                    title: "Quick Info",
                    developer: "Developer:",
                    developerValue: "GitHub & OpenAI",
                    launch: "Launch Date:",
                    launchValue: "June 2021",
                    model: "Model:",
                    modelValue: "OpenAI Codex",
                    pricing: "Pricing:",
                    pricingValue: "$10/month (individual)",
                    trial: "Free Trial:",
                    trialValue: "30 days",
                    ide: "IDE Support:",
                    ideValue: "VS Code, Visual Studio, JetBrains, Neovim",
                    bestFor: "Best For:",
                    bestForValue: "All Development Tasks"
                }
            },
            features: {
                title: "Powerful Features for <span class='highlight'>Developers</span>",
                items: [
                    {
                        title: "Intelligent Code Completion",
                        desc: "Get contextual suggestions for entire lines and functions. Copilot understands your coding style and project context to provide relevant recommendations."
                    },
                    {
                        title: "Multi-Line Suggestions",
                        desc: "Generate complex code blocks including loops, conditionals, and functions based on simple comments or function names."
                    },
                    {
                        title: "Comment-to-Code",
                        desc: "Write a comment describing what you want, and Copilot generates the implementation. Perfect for rapid prototyping."
                    },
                    {
                        title: "50+ Languages",
                        desc: "Works with Python, JavaScript, TypeScript, Ruby, Go, C++, C#, Java, PHP, and many more programming languages."
                    },
                    {
                        title: "Test Generation",
                        desc: "Automatically generate unit tests based on your functions. Copilot understands testing frameworks like Jest, PyTest, and JUnit."
                    },
                    {
                        title: "API Discovery",
                        desc: "Learn new APIs and libraries as you code. Copilot suggests correct usage patterns and common implementations."
                    },
                    {
                        title: "Code Refactoring",
                        desc: "Improve existing code with suggestions for better patterns, optimizations, and modern syntax."
                    },
                    {
                        title: "Copilot Chat",
                        desc: "Ask questions about your code, get explanations, and receive debugging help directly in your IDE."
                    }
                ]
            },
            useCases: {
                title: "Real-World <span class='highlight'>Use Cases</span>",
                items: [
                    {
                        title: "⚡ Rapid Prototyping",
                        prompt: "<strong>You type:</strong> // fetch user data from API and display in table",
                        response: "<strong>Copilot suggests:</strong> Complete async function with fetch, error handling, and DOM manipulation",
                        benefit: "Build MVPs and prototypes 10x faster with instant boilerplate generation."
                    },
                    {
                        title: "🐛 Debug Assistance",
                        prompt: "<strong>You type:</strong> // fix this memory leak",
                        response: "<strong>Copilot suggests:</strong> Proper cleanup code with useEffect cleanup or manual listener removal",
                        benefit: "Identify and fix bugs faster with AI-powered suggestions."
                    },
                    {
                        title: "📝 Documentation Writing",
                        prompt: "<strong>You type:</strong> /**",
                        response: "<strong>Copilot suggests:</strong> Complete JSDoc with parameter types, return values, and examples",
                        benefit: "Maintain better documentation with minimal effort."
                    },
                    {
                        title: "🧪 Test Creation",
                        prompt: "<strong>You type:</strong> // test cases for calculateTotal function",
                        response: "<strong>Copilot suggests:</strong> Complete test suite with edge cases, mocks, and assertions",
                        benefit: "Achieve higher test coverage without the tedious manual writing."
                    }
                ]
            },
            pricing: {
                title: "Simple <span class='highlight'>Pricing</span>",
                items: [
                    {
                        name: "Individual",
                        price: "$10",
                        period: "/month",
                        button: "Start Free Trial",
                        features: [
                            "✓ Code suggestions",
                            "✓ Multi-line completions",
                            "✓ IDE integration",
                            "✓ 50+ languages",
                            "✓ Copilot Chat",
                            "✓ 30-day free trial"
                        ]
                    },
                    {
                        name: "Business",
                        badge: "Most Popular",
                        price: "$19",
                        period: "/user/month",
                        button: "For Teams",
                        features: [
                            "✓ Everything in Individual",
                            "✓ Organization license",
                            "✓ Policy management",
                            "✓ Public code filter",
                            "✓ IP indemnity",
                            "✓ Priority support"
                        ]
                    },
                    {
                        name: "Enterprise",
                        price: "$39",
                        period: "/user/month",
                        button: "Contact Sales",
                        features: [
                            "✓ Everything in Business",
                            "✓ Fine-tuned models",
                            "✓ Private repositories",
                            "✓ Advanced security",
                            "✓ Audit logs",
                            "✓ Dedicated support"
                        ]
                    }
                ]
            },
            tips: {
                title: "Pro <span class='highlight'>Tips</span> for Developers",
                items: [
                    {
                        title: "Write Descriptive Comments",
                        desc: "Clear comments help Copilot understand your intent better. Be specific about what you want the code to do."
                    },
                    {
                        title: "Use Meaningful Names",
                        desc: "Function and variable names provide context. Better names lead to better suggestions."
                    },
                    {
                        title: "Review All Suggestions",
                        desc: "Always review Copilot's code. It's a tool to assist, not replace your judgment and expertise."
                    },
                    {
                        title: "Cycle Through Options",
                        desc: "Press Alt+] or Alt+[ to see alternative suggestions. Copilot often provides multiple solutions."
                    },
                    {
                        title: "Start with Tests",
                        desc: "Write test cases first, and let Copilot help implement the function to pass those tests."
                    },
                    {
                        title: "Learn from Suggestions",
                        desc: "Use Copilot as a learning tool. Analyze its suggestions to discover new patterns and APIs."
                    }
                ]
            },
            cta: {
                title: "Ready to Code 10x Faster?",
                subtitle: "Join over 1 million developers using GitHub Copilot to build better software.",
                primaryButton: "Start 30-Day Free Trial →",
                secondaryButton: "Explore More AI Tools"
            }
        },
        ru: {
            toolTagline: "Ваш ИИ пар-программист",
            header: {
                home: "Главная",
                whatIsAI: "Что такое ИИ",
                coding: "ИИ для программирования",
                students: "ИИ для студентов",
                contacts: "Контакты"
            },
            badges: {
                premium: "Самый популярный",
                category: "Помощник программиста",
                rating: "⭐ 4.8/5"
            },
            ctaButtons: {
                tryFree: "Попробовать GitHub Copilot →",
                learnMore: "Узнать больше ↓"
            },
            overview: {
                title: "Что такое <span class='highlight'>GitHub Copilot</span>?",
                lead: "GitHub Copilot — самый популярный в мире инструмент для разработчиков с ИИ, работающий на базе OpenAI Codex. Он действует как ваш личный пар-программист, предлагая целые строки и функции в реальном времени во время написания кода.",
                paragraph1: "Разработанный GitHub и OpenAI, Copilot понимает контекст вашего кода и комментариев, предоставляя интеллектуальные предложения автозаполнения для десятков языков программирования. Он обучен на миллиардах строк публичного кода, что делает его невероятно осведомлённым о распространённых паттернах, фреймворках и лучших практиках.",
                paragraph2: "Независимо от того, пишете ли вы на Python, JavaScript, TypeScript, Ruby, Go, C# или любом другом популярном языке, Copilot ускоряет ваш рабочий процесс, сокращая повторяющиеся задачи программирования и помогая открывать новые API и библиотеки.",
                stats: {
                    developers: "1М+",
                    developersLabel: "Разработчиков",
                    languages: "50+",
                    languagesLabel: "Языков",
                    faster: "55%",
                    fasterLabel: "Быстрее код",
                    availability: "24/7",
                    availabilityLabel: "Доступность"
                },
                quickInfo: {
                    title: "Быстрая информация",
                    developer: "Разработчик:",
                    developerValue: "GitHub и OpenAI",
                    launch: "Дата запуска:",
                    launchValue: "Июнь 2021",
                    model: "Модель:",
                    modelValue: "OpenAI Codex",
                    pricing: "Цена:",
                    pricingValue: "$10/месяц (индивидуальный)",
                    trial: "Бесплатная пробная:",
                    trialValue: "30 дней",
                    ide: "Поддержка IDE:",
                    ideValue: "VS Code, Visual Studio, JetBrains, Neovim",
                    bestFor: "Лучше всего для:",
                    bestForValue: "Всех задач разработки"
                }
            },
            features: {
                title: "Мощные функции для <span class='highlight'>разработчиков</span>",
                items: [
                    {
                        title: "Интеллектуальное завершение кода",
                        desc: "Получайте контекстные предложения для целых строк и функций. Copilot понимает ваш стиль программирования и контекст проекта, чтобы предоставлять релевантные рекомендации."
                    },
                    {
                        title: "Многострочные предложения",
                        desc: "Генерируйте сложные блоки кода, включая циклы, условия и функции на основе простых комментариев или названий функций."
                    },
                    {
                        title: "От комментария к коду",
                        desc: "Напишите комментарий, описывающий что вы хотите, и Copilot сгенерирует реализацию. Идеально для быстрого прототипирования."
                    },
                    {
                        title: "50+ языков",
                        desc: "Работает с Python, JavaScript, TypeScript, Ruby, Go, C++, C#, Java, PHP и многими другими языками программирования."
                    },
                    {
                        title: "Генерация тестов",
                        desc: "Автоматически генерируйте юнит-тесты на основе ваших функций. Copilot понимает тестовые фреймворки, такие как Jest, PyTest и JUnit."
                    },
                    {
                        title: "Изучение API",
                        desc: "Изучайте новые API и библиотеки во время программирования. Copilot предлагает правильные паттерны использования и распространённые реализации."
                    },
                    {
                        title: "Рефакторинг кода",
                        desc: "Улучшайте существующий код с предложениями для лучших паттернов, оптимизаций и современного синтаксиса."
                    },
                    {
                        title: "Чат с Copilot",
                        desc: "Задавайте вопросы о вашем коде, получайте объяснения и помощь в отладке прямо в вашей IDE."
                    }
                ]
            },
            useCases: {
                title: "Реальные <span class='highlight'>примеры использования</span>",
                items: [
                    {
                        title: "⚡ Быстрое прототипирование",
                        prompt: "<strong>Вы пишете:</strong> // получить данные пользователя из API и отобразить в таблице",
                        response: "<strong>Copilot предлагает:</strong> Полную асинхронную функцию с fetch, обработкой ошибок и манипуляцией DOM",
                        benefit: "Создавайте MVP и прототипы в 10 раз быстрее с мгновенной генерацией шаблонного кода."
                    },
                    {
                        title: "🐛 Помощь в отладке",
                        prompt: "<strong>Вы пишете:</strong> // исправить эту утечку памяти",
                        response: "<strong>Copilot предлагает:</strong> Правильный код очистки с useEffect cleanup или ручным удалением слушателей",
                        benefit: "Находите и исправляйте баги быстрее с предложениями на базе ИИ."
                    },
                    {
                        title: "📝 Написание документации",
                        prompt: "<strong>Вы пишете:</strong> /**",
                        response: "<strong>Copilot предлагает:</strong> Полный JSDoc с типами параметров, возвращаемыми значениями и примерами",
                        benefit: "Поддерживайте лучшую документацию с минимальными усилиями."
                    },
                    {
                        title: "🧪 Создание тестов",
                        prompt: "<strong>Вы пишете:</strong> // тестовые случаи для функции calculateTotal",
                        response: "<strong>Copilot предлагает:</strong> Полный набор тестов с граничными случаями, моками и утверждениями",
                        benefit: "Достигайте более высокого покрытия тестами без утомительного ручного написания."
                    }
                ]
            },
            pricing: {
                title: "Простые <span class='highlight'>цены</span>",
                items: [
                    {
                        name: "Индивидуальный",
                        price: "$10",
                        period: "/месяц",
                        button: "Начать бесплатную пробную",
                        features: [
                            "✓ Предложения кода",
                            "✓ Многострочные завершения",
                            "✓ Интеграция с IDE",
                            "✓ 50+ языков",
                            "✓ Чат с Copilot",
                            "✓ 30-дневная бесплатная пробная"
                        ]
                    },
                    {
                        name: "Бизнес",
                        badge: "Самый популярный",
                        price: "$19",
                        period: "/пользователь/месяц",
                        button: "Для команд",
                        features: [
                            "✓ Всё из индивидуального",
                            "✓ Организационная лицензия",
                            "✓ Управление политиками",
                            "✓ Фильтр публичного кода",
                            "✓ Защита интеллектуальной собственности",
                            "✓ Приоритетная поддержка"
                        ]
                    },
                    {
                        name: "Корпоративный",
                        price: "$39",
                        period: "/пользователь/месяц",
                        button: "Связаться с отделом продаж",
                        features: [
                            "✓ Всё из бизнес",
                            "✓ Настроенные модели",
                            "✓ Частные репозитории",
                            "✓ Продвинутая безопасность",
                            "✓ Журналы аудита",
                            "✓ Выделенная поддержка"
                        ]
                    }
                ]
            },
            tips: {
                title: "Профессиональные <span class='highlight'>советы</span> для разработчиков",
                items: [
                    {
                        title: "Пишите описательные комментарии",
                        desc: "Ясные комментарии помогают Copilot лучше понять ваши намерения. Будьте конкретны в том, что вы хотите, чтобы делал код."
                    },
                    {
                        title: "Используйте осмысленные имена",
                        desc: "Имена функций и переменных предоставляют контекст. Лучшие имена приводят к лучшим предложениям."
                    },
                    {
                        title: "Проверяйте все предложения",
                        desc: "Всегда проверяйте код Copilot. Это инструмент для помощи, а не для замены вашего суждения и экспертизы."
                    },
                    {
                        title: "Переключайтесь между вариантами",
                        desc: "Нажмите Alt+] или Alt+[ чтобы увидеть альтернативные предложения. Copilot часто предоставляет несколько решений."
                    },
                    {
                        title: "Начинайте с тестов",
                        desc: "Пишите тестовые случаи сначала и позвольте Copilot помочь реализовать функцию для прохождения этих тестов."
                    },
                    {
                        title: "Учитесь на предложениях",
                        desc: "Используйте Copilot как инструмент обучения. Анализируйте его предложения, чтобы открывать новые паттерны и API."
                    }
                ]
            },
            cta: {
                title: "Готовы программировать в 10 раз быстрее?",
                subtitle: "Присоединяйтесь к более чем 1 миллиону разработчиков, использующих GitHub Copilot для создания лучшего программного обеспечения.",
                primaryButton: "Начать 30-дневную бесплатную пробную версию →",
                secondaryButton: "Изучить больше инструментов ИИ"
            }
        }
    }
};

// Get current tool
function getCurrentTool() {
    const path = window.location.pathname;
    if (path.includes('chatgpt')) return 'chatgpt';
    if (path.includes('github-copilot')) return 'github-copilot';
    return null;
}

// Apply translations
function applyToolTranslation(lang) {
    const tool = getCurrentTool();
    if (!tool || !toolTranslations[tool] || !toolTranslations[tool][lang]) return;
    
    const t = toolTranslations[tool][lang];
    
    // Header navigation
    if (t.header) {
        const navLinks = document.querySelectorAll('.header__nav a');
        if (navLinks.length >= 4) {
            navLinks[0].textContent = t.header.home;
            navLinks[1].textContent = t.header.whatIsAI;
            navLinks[2].textContent = t.header.coding;
            navLinks[3].textContent = t.header.students;
        }
        
        // Contact button in header
        const contactBtn = document.getElementById('contactBtn');
        if (contactBtn) {
            contactBtn.textContent = t.header.contacts;
        }
        
        // Contact Modal translations
        const modalTitle = document.querySelector('.contact-modal h2');
        if (modalTitle) {
            modalTitle.textContent = lang === 'ru' ? 'Свяжитесь с нами' : 'Get in Touch';
        }
        
        const nameInput = document.getElementById('nameInput');
        const phoneInput = document.getElementById('phoneInput');
        const reasonSelect = document.getElementById('reasonSelect');
        const otherReasonInput = document.getElementById('otherReasonInput');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (nameInput) {
            nameInput.placeholder = lang === 'ru' ? 'Имя' : 'Name';
        }
        if (phoneInput) {
            phoneInput.placeholder = lang === 'ru' ? 'Телефон' : 'Phone';
        }
        if (reasonSelect) {
            const options = reasonSelect.querySelectorAll('option');
            if (options.length >= 5) {
                options[0].textContent = lang === 'ru' ? 'Что вы хотите забронировать?' : 'What would you like to book?';
                options[1].textContent = lang === 'ru' ? 'Консультация' : 'Consultation';
                options[2].textContent = lang === 'ru' ? 'Демо' : 'Demo';
                options[3].textContent = lang === 'ru' ? 'Партнёрство' : 'Partnership';
                options[4].textContent = lang === 'ru' ? 'Другое' : 'Other';
            }
        }
        if (otherReasonInput) {
            otherReasonInput.placeholder = lang === 'ru' ? 'Пожалуйста, укажите...' : 'Please specify...';
        }
        if (submitBtn) {
            submitBtn.textContent = lang === 'ru' ? 'Отправить' : 'Send';
        }
    }
    
    // Tool Hero Section
    const toolTagline = document.querySelector('.tool-tagline');
    if (toolTagline && t.toolTagline) {
        toolTagline.textContent = t.toolTagline;
    }
    
    // Badges
    if (t.badges) {
        const badges = document.querySelectorAll('.tool-badges span');
        if (badges.length >= 3) {
            badges[0].textContent = t.badges.premium;
            badges[1].textContent = t.badges.category;
            badges[2].textContent = t.badges.rating;
        }
    }
    
    // CTA Buttons
    const ctaPrimary = document.querySelector('.tool-cta-buttons .cta-primary');
    const ctaSecondary = document.querySelector('.tool-cta-buttons .cta-secondary');
    if (ctaPrimary && t.ctaButtons) {
        ctaPrimary.textContent = t.ctaButtons.tryFree;
    }
    if (ctaSecondary && t.ctaButtons) {
        ctaSecondary.textContent = t.ctaButtons.learnMore;
    }
    
    // Overview Section
    if (t.overview) {
        const overviewTitle = document.querySelector('.overview-main h2');
        if (overviewTitle) {
            overviewTitle.innerHTML = t.overview.title;
        }
        
        const leadText = document.querySelector('.lead-text');
        if (leadText) {
            leadText.textContent = t.overview.lead;
        }
        
        // Handle different paragraph structures for different tools
        const overviewParagraphs = document.querySelectorAll('.overview-main > p');
        if (tool === 'chatgpt' && overviewParagraphs.length > 1) {
            overviewParagraphs[1].textContent = t.overview.paragraph;
        } else if (tool === 'github-copilot' && overviewParagraphs.length > 2) {
            overviewParagraphs[1].textContent = t.overview.paragraph1;
            overviewParagraphs[2].textContent = t.overview.paragraph2;
        }
        
        // Stats - handle different stat structures
        const stats = document.querySelectorAll('.stat-item');
        if (stats.length >= 4 && t.overview.stats) {
            if (tool === 'chatgpt') {
                stats[0].querySelector('.stat-number').textContent = t.overview.stats.users;
                stats[0].querySelector('.stat-label').textContent = t.overview.stats.usersLabel;
                stats[1].querySelector('.stat-number').textContent = t.overview.stats.availability;
                stats[1].querySelector('.stat-label').textContent = t.overview.stats.availabilityLabel;
                stats[2].querySelector('.stat-number').textContent = t.overview.stats.languages;
                stats[2].querySelector('.stat-label').textContent = t.overview.stats.languagesLabel;
                stats[3].querySelector('.stat-number').textContent = t.overview.stats.plan;
                stats[3].querySelector('.stat-label').textContent = t.overview.stats.planLabel;
            } else if (tool === 'github-copilot') {
                stats[0].querySelector('.stat-number').textContent = t.overview.stats.developers;
                stats[0].querySelector('.stat-label').textContent = t.overview.stats.developersLabel;
                stats[1].querySelector('.stat-number').textContent = t.overview.stats.languages;
                stats[1].querySelector('.stat-label').textContent = t.overview.stats.languagesLabel;
                stats[2].querySelector('.stat-number').textContent = t.overview.stats.faster;
                stats[2].querySelector('.stat-label').textContent = t.overview.stats.fasterLabel;
                stats[3].querySelector('.stat-number').textContent = t.overview.stats.availability;
                stats[3].querySelector('.stat-label').textContent = t.overview.stats.availabilityLabel;
            }
        }
        
        // Quick Info
        const infoCard = document.querySelector('.info-card');
        if (infoCard && t.overview.quickInfo) {
            const infoTitle = infoCard.querySelector('h3');
            if (infoTitle) infoTitle.textContent = t.overview.quickInfo.title;
            
            const infoItems = infoCard.querySelectorAll('.info-list li');
            if (tool === 'chatgpt' && infoItems.length >= 6) {
                infoItems[0].innerHTML = `<strong>${t.overview.quickInfo.developer}</strong> ${t.overview.quickInfo.developerValue}`;
                infoItems[1].innerHTML = `<strong>${t.overview.quickInfo.launch}</strong> ${t.overview.quickInfo.launchValue}`;
                infoItems[2].innerHTML = `<strong>${t.overview.quickInfo.model}</strong> ${t.overview.quickInfo.modelValue}`;
                infoItems[3].innerHTML = `<strong>${t.overview.quickInfo.freeVersion}</strong> ${t.overview.quickInfo.freeVersionValue}`;
                infoItems[4].innerHTML = `<strong>${t.overview.quickInfo.premium}</strong> ${t.overview.quickInfo.premiumValue}`;
                infoItems[5].innerHTML = `<strong>${t.overview.quickInfo.bestFor}</strong> ${t.overview.quickInfo.bestForValue}`;
            } else if (tool === 'github-copilot' && infoItems.length >= 7) {
                infoItems[0].innerHTML = `<strong>${t.overview.quickInfo.developer}</strong> ${t.overview.quickInfo.developerValue}`;
                infoItems[1].innerHTML = `<strong>${t.overview.quickInfo.launch}</strong> ${t.overview.quickInfo.launchValue}`;
                infoItems[2].innerHTML = `<strong>${t.overview.quickInfo.model}</strong> ${t.overview.quickInfo.modelValue}`;
                infoItems[3].innerHTML = `<strong>${t.overview.quickInfo.pricing}</strong> ${t.overview.quickInfo.pricingValue}`;
                infoItems[4].innerHTML = `<strong>${t.overview.quickInfo.trial}</strong> ${t.overview.quickInfo.trialValue}`;
                infoItems[5].innerHTML = `<strong>${t.overview.quickInfo.ide}</strong> ${t.overview.quickInfo.ideValue}`;
                infoItems[6].innerHTML = `<strong>${t.overview.quickInfo.bestFor}</strong> ${t.overview.quickInfo.bestForValue}`;
            }
        }
    }
    
    // Features Section
    if (t.features) {
        const featuresTitle = document.querySelector('#features .section-title-center');
        if (featuresTitle) {
            featuresTitle.innerHTML = t.features.title;
        }
        
        const featureBoxes = document.querySelectorAll('.feature-box');
        featureBoxes.forEach((box, index) => {
            if (t.features.items[index]) {
                const title = box.querySelector('h3');
                const desc = box.querySelector('p');
                if (title) title.textContent = t.features.items[index].title;
                if (desc) desc.textContent = t.features.items[index].desc;
            }
        });
    }
    
    // Use Cases Section
    if (t.useCases) {
        const useCasesTitle = document.querySelector('.use-cases-section .section-title-center');
        if (useCasesTitle) {
            useCasesTitle.innerHTML = t.useCases.title;
        }
        
        const useCaseCards = document.querySelectorAll('.use-case-card');
        useCaseCards.forEach((card, index) => {
            if (t.useCases.items[index]) {
                const title = card.querySelector('h3');
                const prompt = card.querySelector('.example-prompt');
                const response = card.querySelector('.example-response');
                const benefit = card.querySelector('.use-case-benefit');
                
                if (title) title.textContent = t.useCases.items[index].title;
                if (prompt) prompt.innerHTML = t.useCases.items[index].prompt;
                if (response) response.innerHTML = t.useCases.items[index].response;
                if (benefit) benefit.textContent = t.useCases.items[index].benefit;
            }
        });
    }
    
    // Pricing Section
    if (t.pricing) {
        const pricingTitle = document.querySelector('.pricing-section .section-title-center');
        if (pricingTitle) {
            pricingTitle.innerHTML = t.pricing.title;
        }
        
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach((card, index) => {
            if (t.pricing.items[index]) {
                const data = t.pricing.items[index];
                const name = card.querySelector('h3');
                const price = card.querySelector('.price');
                const badge = card.querySelector('.popular-badge');
                const features = card.querySelectorAll('.pricing-features li');
                const button = card.querySelector('.pricing-btn');
                
                if (name) name.textContent = data.name;
                if (price) price.innerHTML = `${data.price}<span>${data.period}</span>`;
                if (badge && data.badge) badge.textContent = data.badge;
                if (button) button.textContent = data.button;
                
                features.forEach((feature, fIndex) => {
                    if (data.features[fIndex]) {
                        feature.textContent = data.features[fIndex];
                    }
                });
            }
        });
    }
    
    // Tips Section
    if (t.tips) {
        const tipsTitle = document.querySelector('.tips-section .section-title-center');
        if (tipsTitle) {
            tipsTitle.innerHTML = t.tips.title;
        }
        
        const tipCards = document.querySelectorAll('.tip-card');
        tipCards.forEach((card, index) => {
            if (t.tips.items[index]) {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                if (title) title.textContent = t.tips.items[index].title;
                if (desc) desc.textContent = t.tips.items[index].desc;
            }
        });
    }
    
    // Final CTA Section
    if (t.cta) {
        const ctaTitle = document.querySelector('.final-cta-section h2, .final-cta section h2');
        const ctaSubtitle = document.querySelector('.final-cta-section p, .final-cta-content p');
        const ctaButtons = document.querySelectorAll('.cta-buttons-group .cta-btn-large');
        
        if (ctaTitle) ctaTitle.textContent = t.cta.title;
        if (ctaSubtitle) ctaSubtitle.textContent = t.cta.subtitle;
        if (ctaButtons.length >= 2) {
            ctaButtons[0].textContent = t.cta.primaryButton;
            ctaButtons[1].textContent = t.cta.secondaryButton;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Load saved language from localStorage or default to 'en'
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Apply saved language
    applyToolTranslation(savedLang);
    
    // Update button states
    langBtns.forEach(b => {
        if (b.getAttribute('data-lang') === savedLang) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            
            // Save to localStorage
            localStorage.setItem('preferredLanguage', lang);
            
            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply translation
            applyToolTranslation(lang);
        });
    });
});
