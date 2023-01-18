function updateVisualViewportHeight() {
    const height = window.visualViewport.height;
    const offsetTop = window.visualViewport.offsetTop;

    const visualViewportEl = document.querySelector(".visual-viewport");
    visualViewportEl.style.height = height + "px";
    visualViewportEl.style.top = offsetTop;

    document.querySelector(".visual-viewport-height").textContent = height;
}

function updateLayoutViewportHeight() {
    document.querySelector(".layout-viewport-height").textContent = document.documentElement.clientHeight;
}

if (typeof window.visualViewport === "object") {
    window.visualViewport.addEventListener("resize", updateVisualViewportHeight);
    window.visualViewport.addEventListener("scroll", updateVisualViewportHeight);
    updateVisualViewportHeight();
}

updateLayoutViewportHeight();
window.addEventListener("resize", updateLayoutViewportHeight);
