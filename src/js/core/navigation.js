let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    // responsive mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const menuLabel = document.getElementById('menu-label');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                menuIcon.className = 'fa-solid fa-xmark transition-transform duration-300';
                if (menuLabel) menuLabel.textContent = 'Close';
                menuBtn.classList.add('bg-accent', 'text-neutral-950');
                menuBtn.classList.remove('bg-accent/10', 'text-accent');
            } else {
                menuIcon.className = 'fa-solid fa-terminal transition-transform duration-300';
                if (menuLabel) menuLabel.textContent = 'Menu';
                menuBtn.classList.remove('bg-accent', 'text-neutral-950');
                menuBtn.classList.add('bg-accent/10', 'text-accent');
            }
        });
    }
}
