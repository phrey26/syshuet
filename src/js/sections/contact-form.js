let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    // Contact form (Web3Forms)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const submitBtn = document.getElementById('contact-submit-btn');
        const statusEl = document.getElementById('form-status');
        const emailInput = document.getElementById('email-input');

        function setStatus(message, colorClass) {
            if (!statusEl) return;
            statusEl.textContent = message;
            statusEl.className = 'text-xs font-mono tracking-widest text-center ' + colorClass;
        }

        // Stricter email format
        function isValidEmail(value) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            return pattern.test(value.trim());
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (emailInput && !isValidEmail(emailInput.value)) {
                setStatus('> Invalid return address. Enter a valid email.', 'text-red-500');
                emailInput.focus();
                return;
            }

            const captchaResponse = contactForm.querySelector('[name="h-captcha-response"]');
            if (!captchaResponse || !captchaResponse.value) {
                setStatus('> Please complete the human verification check.', 'text-red-500');
                return;
            }

            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Transmitting...';
            setStatus('> Establishing secure connection...', 'text-neutral-500');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: formData
                });
                const result = await response.json();

                if (result.success) {
                    setStatus('> Transmission successful. Message received.', 'text-green-500');
                    contactForm.reset();
                    if (window.hcaptcha) { window.hcaptcha.reset(); }
                } else {
                    setStatus('> Transmission failed: ' + (result.message || 'Unknown error'), 'text-red-500');
                }
            } catch (error) {
                setStatus('> Connection error. Please try again later.', 'text-red-500');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
}
