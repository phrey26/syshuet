let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    // Mail button
    const mailScrollBtn = document.getElementById('mail-scroll-btn');
    const nameInput = document.getElementById('name-input');
    const mailTriggers = document.querySelectorAll('.mail-scroll-trigger');

    function focusContactForm() {
        if (!nameInput) return;
        nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => nameInput.focus(), 500);
    }

    if (mailScrollBtn && nameInput) {
        mailScrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            focusContactForm();
        });
    }

    if (mailTriggers.length > 0) {
        mailTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (nameInput) {
                    e.preventDefault();
                    focusContactForm();
                }
            });
        });
    }

    // footer mail link
    if (window.location.hash === '#contact-form' && nameInput) {
        setTimeout(focusContactForm, 300);
    }
}
