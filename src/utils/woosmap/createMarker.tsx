import { Position } from "../../types/woosmap";

export type MarkerIcon = {
    url: string | null,
    height: number | null,
    width: number | null
}

export default function createMarker(
    woosmap: any,
    map: any,
    point: Position,
    icon: MarkerIcon | null) {

    const marker = new woosmap.map.Marker({
        position: point,
        icon: {
            url: icon?.url || "https://images.woosmap.com/marker.png",
            scaledSize: {
                height: icon?.height || 50,
                width: icon?.width || 32,
            },
        },
    });

    marker.setMap(map);

}