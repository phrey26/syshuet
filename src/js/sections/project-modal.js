let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    // Project Modal
    const projectModal = document.getElementById('project-modal');
    const projectModalWindow = document.getElementById('project-modal-window');
    const projectModalBackdrop = document.getElementById('project-modal-backdrop');

    if (projectModal && projectModalWindow) {
        const modalImg = document.getElementById('modal-img');
        const modalTag = document.getElementById('modal-tag');
        const modalTitle = document.getElementById('modal-title');
        const modalWindowTitle = document.getElementById('modal-window-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalTech = document.getElementById('modal-tech');
        const modalLink = document.getElementById('modal-link');
        const modalLinkLabel = document.getElementById('modal-link-label');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalCloseBtn2 = document.getElementById('modal-close-btn-2');

        function slugify(text) {
            return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') + '.exe';
        }

        function openProjectModal(card) {
            const tag = card.getAttribute('data-tag') || '';
            const title = card.getAttribute('data-title') || '';
            const img = card.getAttribute('data-img') || '';
            const desc = card.getAttribute('data-desc') || '';
            const tech = card.getAttribute('data-tech') || '';
            const link = card.getAttribute('data-link');
            const linkLabel = card.getAttribute('data-link-label') || 'Launch Project';

            modalTag.textContent = '> ' + tag;
            modalTitle.textContent = title;
            modalWindowTitle.textContent = slugify(title);
            modalImg.src = img;
            modalImg.alt = title;
            modalDesc.textContent = desc;
            modalTech.textContent = tech;

            if (link) {
                modalLink.href = link;
                modalLinkLabel.textContent = linkLabel;
                modalLink.classList.remove('hidden');
            } else {
                modalLink.classList.add('hidden');
            }

            projectModal.classList.remove('hidden');
            projectModal.classList.add('flex');
            document.body.style.overflow = 'hidden';

            requestAnimationFrame(() => {
                projectModalWindow.style.opacity = '1';
                projectModalWindow.style.transform = 'scale(1)';
            });
        }

        function closeProjectModal() {
            projectModalWindow.style.opacity = '0';
            projectModalWindow.style.transform = 'scale(0.95)';
            setTimeout(() => {
                projectModal.classList.add('hidden');
                projectModal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 200);
        }

        projectModalWindow.style.opacity = '0';
        projectModalWindow.style.transform = 'scale(0.95)';

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => openProjectModal(card));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(card);
                }
            });
        });

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
        if (modalCloseBtn2) modalCloseBtn2.addEventListener('click', closeProjectModal);
        if (modalLink) modalLink.addEventListener('click', (e) => e.stopPropagation());
        if (projectModalBackdrop) projectModalBackdrop.addEventListener('click', closeProjectModal);
        projectModalWindow.addEventListener('click', (e) => e.stopPropagation());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
                closeProjectModal();
            }
        });
    }
}
