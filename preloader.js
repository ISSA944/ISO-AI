// Terminal-style preloader for subpages
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const terminalOutput = document.getElementById('terminalOutput');
    const body = document.body;

    // Detect current page
    const currentPage = window.location.pathname.split('/').pop();

    // Define commands based on page
    let commands = [];

    if (currentPage.includes('ai-students')) {
        commands = [
            { type: 'command', text: '$ init ai-students', delay: 0 },
            { type: 'success', text: 'Loading AI for Students...', delay: 600 },
            { type: 'progress', delay: 300 },
            { type: 'success', text: 'AI for Students is ready!', delay: 700 }
        ];
    } else if (currentPage.includes('ai-coding')) {
        commands = [
            { type: 'command', text: '$ init ai-coding', delay: 0 },
            { type: 'success', text: 'Loading AI for Coding...', delay: 600 },
            { type: 'progress', delay: 300 },
            { type: 'success', text: 'AI for Coding is ready!', delay: 700 }
        ];
    } else {
        // Fallback for other pages
        commands = [
            { type: 'command', text: '$ cloud boot', delay: 0 },
            { type: 'success', text: 'Packages installed successfully', delay: 300 },
            { type: 'progress', delay: 100 },
            { type: 'info', text: 'system ready', delay: 500 },
            { type: 'success', text: 'Cloud installed successfully!', delay: 400 }
        ];
    }

    async function addLine(command) {
        await new Promise(resolve => setTimeout(resolve, command.delay));

        const line = document.createElement('div');
        line.className = 'terminal-line';

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

        // Only run if preloader and terminal output exist
        if (!preloader || !terminalOutput) {
            if (body) {
                body.classList.add('loaded');
                body.classList.remove('loading');
            }
            return;
        }

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
        if (body) {
            body.classList.add('loaded');
            body.classList.remove('loading');
        }

        setTimeout(() => {
            if (preloader && preloader.parentNode) {
                preloader.remove();
            }
        }, 500);
    }

    runBootSequence();

    // Scroll-triggered animations for subpage content
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple cards
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 100);
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Wait for page to load before observing
    setTimeout(() => {
        // Observe section titles
        const sectionTitles = document.querySelectorAll('.ai-tools-section .section-title-small, .benefits-section .section-title-small');
        sectionTitles.forEach(title => scrollObserver.observe(title));

        // Observe tool cards
        const toolCards = document.querySelectorAll('.ai-tool-card');
        toolCards.forEach(card => scrollObserver.observe(card));

        // Observe benefit cards
        const benefitCards = document.querySelectorAll('.benefit-card');
        benefitCards.forEach(card => scrollObserver.observe(card));

        // Observe CTA section
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) scrollObserver.observe(ctaSection);
    }, 800);
});
