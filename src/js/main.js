// Attach behavior to the existing HTML only when its component is present.
const components = [
    ['.site-header', () => import('./core/navigation.js')],
    ['.reveal', () => import('./effects/reveal.js')],
    ['#typing-text', () => import('./effects/typing.js')],
    ['.loading-dots', () => import('./effects/loading-dots.js')],
    ['#contact-form', () => import('./sections/contact-form.js')],
    ['#name-input', () => import('./sections/contact-links.js')],
    ['#project-modal', () => import('./sections/project-modal.js')],
    ['.filter-btn', () => import('./sections/project-filters.js')],
    ['.site-header', () => import('./core/header-scroll.js')],
];

async function hydratePage() {
    await Promise.all(components.map(async ([selector, load]) => {
        if (!document.querySelector(selector)) return;
        try {
            const component = await load();
            component.hydrate();
        } catch (error) {
            console.error(`Unable to initialize ${selector}:`, error);
        }
    }));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydratePage, { once: true });
} else {
    hydratePage();
}
