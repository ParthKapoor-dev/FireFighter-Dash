import useWoosmap from "../../hooks/useWoosmap";


export default function createMarker( map , point , icon ) {

    const woosmap = useWoosmap();

    const marker = new woosmap.map.Marker({
        position: point,
        icon: {
            url: icon.url || "https://images.woosmap.com/marker.png",
            scaledSize: {
                height: icon.height || 50,
                width: icon.widht || 32,
            },
        },
    });

    marker.setMap(map);

}