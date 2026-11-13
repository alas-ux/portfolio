
const viewport = document.querySelector('.certificate-viewport');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (viewport && prevBtn && nextBtn) {

    function getScrollAmount() {
        const card = viewport.querySelector('.certificate-card');
        const album = viewport.querySelector('.certificate-album');

        if (!card || !album) return 0;

        const gap = parseFloat(getComputedStyle(album).gap) || 0;

        return card.getBoundingClientRect().width + gap;
    }

    nextBtn.addEventListener('click', () => {
        viewport.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        viewport.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    viewport.addEventListener('wheel', (event) => {

        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            event.preventDefault();
            viewport.scrollLeft += event.deltaY;
        }

    }, { passive: false });

}