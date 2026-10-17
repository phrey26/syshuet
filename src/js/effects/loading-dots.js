let hydrated = false;

export function hydrate() {
    if (hydrated) return;
    hydrated = true;

    // Loading dots
    const loadingDotsElements = document.querySelectorAll('.loading-dots');
    if (loadingDotsElements.length > 0) {
        loadingDotsElements.forEach(el => {
            let dotCount = 0;
            setInterval(() => {
                dotCount = (dotCount + 1) % 4;
                el.textContent = '.'.repeat(dotCount);
            }, 400);
        });
    }
}
