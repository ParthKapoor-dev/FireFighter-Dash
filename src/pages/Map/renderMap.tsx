import { useEffect, useRef, useState } from "react";
import { WoosmapAPIProvider } from "../../context/MapContext";
import useWoosmap from "../../hooks/useWoosmap";
import createAnimatedCircle from "../../utils/woosmap/createAnimatedCircle";
import createMarker from "../../utils/woosmap/createMarker";
import { Position } from "../../types/woosmap";

export default function RenderMap() {

    const initialPosition = {
        lat: 28.62631074601461,
        lng: 77.18595579555301
    };

    return (
        <WoosmapAPIProvider
            apiKey={import.meta.env.VITE_WOOSMAP_PUBLIC_API_KEY}>

            <MapScreen
                center={initialPosition}
                zoom={19.5}
                venue={import.meta.env.VITE_ENV}
            />

        </WoosmapAPIProvider>
    );
};

interface MapScreenProps {
    center: Position,
    zoom: number,
    venue: string
}

function MapScreen({ center, zoom, venue }: MapScreenProps) {
    const mapRef = useRef(null);
    const wsmap : typeof woosmap = useWoosmap();
    const [mapInstance, setMapInstance] = useState<woosmap.map.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance) {

            const map = new wsmap.map.Map(mapRef.current, {
                zoom,
                center,
            });
            setMapInstance(map);

            const indoorRenderer = new wsmap.map.IndoorRenderer({
                venue
            });
            indoorRenderer.setMap(map);

            createAnimatedCircle(map, center, 50, 30, 1)

            createMarker(wsmap, map, center, null);


        }
    }, [wsmap, zoom, center]);

    return (
        <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>
    )

};

