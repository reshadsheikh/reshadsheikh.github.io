/* Resolve this site from its project root, whether hosted at / or in a nested folder. */
(function () {
    const path = window.location.pathname;
    const markers = ['/about/', '/selected-work/', '/experience/', '/contact/', '/portfolio/'];
    const positions = markers.map((marker) => path.indexOf(marker)).filter((position) => position >= 0);
    const markerPosition = positions.length ? Math.min(...positions) : -1;
    const root = markerPosition >= 0
        ? path.slice(0, markerPosition + 1)
        : path.endsWith('/') ? path : path.slice(0, path.lastIndexOf('/') + 1);
    const base = document.createElement('base');
    base.href = root || '/';
    document.head.prepend(base);
})();
