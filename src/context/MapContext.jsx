import { createContext, useState, useEffect } from "react";
import useLoadWoosmap from "../hooks/useLoadWoosmap";

export const MapContext = createContext(null);

export const WoosmapAPIProvider = ({ apiKey, children }) => {
    const isLoaded = useLoadWoosmap(apiKey);

    if (!isLoaded) {
        return null;
    }

    return (
        <MapContext.Provider value={window.woosmap}>
            {children}
        </MapContext.Provider>
    );
};
