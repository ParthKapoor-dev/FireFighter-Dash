import { useEffect, useState } from "react";


export default function useLoadWoosmap(apiKey : string) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://sdk.woosmap.com/map/map.js?key=${apiKey}`;
        script.onload = () => setIsLoaded(true);
        document.body.appendChild(script);
    }, [apiKey]);

    return isLoaded;
}