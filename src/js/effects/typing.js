let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    //Home Page
    const typingTarget = document.getElementById('typing-text');
    if (typingTarget) {
        const words = ["WEBSITES_", "APPLICATIONS_", "INTERFACES_", "EXPERIENCES_"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingTarget.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTarget.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 70;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1500; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; 
            }

            setTimeout(type, typeSpeed);
        }
        setTimeout(type, 500);
    }
}
