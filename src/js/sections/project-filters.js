let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    //Projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-accent', 'text-neutral-950', 'border-accent', 'shadow-[0_0_10px_rgba(180,83,9,0.3)]');
                    btn.classList.add('bg-neutral-900', 'border-neutral-800', 'text-neutral-400');
                });

                button.classList.add('bg-accent', 'text-neutral-950', 'border-accent', 'shadow-[0_0_10px_rgba(180,83,9,0.3)]');
                button.classList.remove('bg-neutral-900', 'border-neutral-800', 'text-neutral-400');

                const activeFilter = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (activeFilter === 'all' || cardCategory === activeFilter) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}
