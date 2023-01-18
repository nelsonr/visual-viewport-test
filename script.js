function updateVisualViewportHeight(height) {
    document.querySelector(".visual-viewport-height").textContent = height;
    const visualViewportEl = document.querySelector(".visual-viewport");

    const computedHeight = window.visualViewport.height;
    visualViewportEl.style.height = computedHeight + "px";
}

function updateLayoutViewportHeight() {
    document.querySelector(".layout-viewport-height").textContent = document.documentElement.clientHeight;
}

if (typeof window.visualViewport === "object") {
    window.visualViewport.addEventListener("resize", function () {
        updateVisualViewportHeight(window.visualViewport.height);
    });

    updateVisualViewportHeight(window.visualViewport.height);
}

updateLayoutViewportHeight();
window.addEventListener("resize", updateLayoutViewportHeight);
