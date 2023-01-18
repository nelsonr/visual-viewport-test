function updateVisualViewportHeight(height) {
    document.querySelector(".viewport-height").textContent = height;
}

if (typeof window.visualViewport === "object") {
    window.visualViewport.addEventListener("resize", function () {
        updateVisualViewportHeight(window.visualViewport.height);
    });

    updateVisualViewportHeight(window.visualViewport.height);
}
