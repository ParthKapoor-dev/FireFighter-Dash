import { createContext, useState, useEffect } from "react";
import useLoadWoosmap from "../hooks/useLoadWoosmap";

export const MapContext = createContext<any>(null);

interface ProviderProps {
    apiKey: string,
    children: React.ReactNode
}

export const WoosmapAPIProvider = ({ apiKey, children }: ProviderProps) => {
    const isLoaded = useLoadWoosmap(apiKey);

    if (!isLoaded) {
        return null;
    }

    return (
        <MapContext.Provider value={woosmap}>
            {children}
        </MapContext.Provider>
    );
};
