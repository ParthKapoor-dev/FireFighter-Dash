import { useEffect, useRef, useState } from "react";
import { WoosmapAPIProvider } from "../../context/MapContext";
import useWoosmap from "../../hooks/useWoosmap";
import createAnimatedCircle from "../../utils/woosmap/createAnimatedCirlce";

export default function RenderMap() {

    const initialPosition = {
        lat: 28.62631074601461,
        lng: 77.18595579555301
    };

    return (
        <WoosmapAPIProvider
            apiKey={import.meta.env.VITE_WOOSMAP_PUBLIC_API_KEY}>

            <WoosmapMap center={initialPosition} zoom={19.5}></WoosmapMap>

        </WoosmapAPIProvider>
    );
};

function WoosmapMap({ center, zoom }) {
    const mapRef = useRef(null);
    const woosmap = useWoosmap();
    const [mapInstance, setMapInstance] = useState(null);


    useEffect(() => {
        if (mapRef.current && !mapInstance) {
            const map = new woosmap.map.Map(mapRef.current, {
                zoom,
                center,
            });
            setMapInstance(map);

            const indoorRenderer = new woosmap.map.IndoorRenderer({
                venue: import.meta.env.VITE_VENUE
            });

            indoorRenderer.setMap(map);

            createAnimatedCircle(map, center, 50, 30, 1)


            const marker = new woosmap.map.Marker({
                position: center,
                icon: {
                    url: "https://images.woosmap.com/marker.png",
                    scaledSize: {
                        height: 50,
                        width: 32,
                    },
                },
            });

            marker.setMap(map);

        }
    }, [woosmap, zoom, center]);

    return (
        <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>
    )

};

