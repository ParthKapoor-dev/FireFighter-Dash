

export default function createAnimatedCircle(map, center, intensity , interval , increment ) {
    const maxRadius = intensity;
    let currentRadius = 0;

    // Use OverlayView for Custom Layer
    const overlay = new woosmap.map.OverlayView();

    overlay.onAdd = function () {
        const div = document.createElement("div");
        div.style.position = "absolute";

        // Circle SVG Element for Animation
        const circleElement = document.createElement("div");
        circleElement.style.width = `${maxRadius * 2}px`;
        circleElement.style.height = `${maxRadius * 2}px`;
        circleElement.style.borderRadius = "50%";
        circleElement.style.backgroundColor = "rgba(255, 69, 0, 0.5)";
        circleElement.style.transform = `translate(-50% , -50%)`
        circleElement.style.border = "2px solid rgba(255, 69, 0, 1)";
        circleElement.style.transition = "width 0.5s ease, height 0.5s ease";

        div.appendChild(circleElement);
        this.getPanes().overlayMouseTarget.appendChild(div);

        const animateCircle = () => {
            currentRadius += increment;
            if (currentRadius > maxRadius) {
                currentRadius = 0;
            }
            circleElement.style.width = `${currentRadius * 2}px`;
            circleElement.style.height = `${currentRadius * 2}px`;
        };

        // Start Animation
        setInterval(animateCircle, interval);

        // Attach to the OverlayView
        this.circleElement = circleElement;
        this.div = div;
    };

    overlay.draw = function () {
        const projection = this.getProjection();
        const position = projection.fromLatLngToDivPixel(center);

        if (this.div) {
            this.div.style.left = `${position.x}px`;
            this.div.style.top = `${position.y}px`;
        }
    };

    overlay.onRemove = function () {
        if (this.div) {
            this.div.parentNode.removeChild(this.div);
        }
    };

    // Add the overlay to the map
    overlay.setMap(map);
};