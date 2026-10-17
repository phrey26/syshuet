let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    //smart scroll
    const header = document.querySelector('header');

    if (header) {
        header.style.transition = 'top 0.4s ease-in-out';

        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop <= 0) {
                header.style.top = '1.5rem';
                lastScrollTop = scrollTop;
                return;
            }

            if (scrollTop > lastScrollTop && scrollTop > 80) {
                header.style.top = '-150px'; 
            } else {
                header.style.top = '1.5rem';
            }

            lastScrollTop = scrollTop;
        });
    }
}
