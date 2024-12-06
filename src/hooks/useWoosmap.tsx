import { useContext } from "react";
import { MapContext } from "../context/MapContext";

export default function useWoosmap(){

    const wsmap : typeof woosmap = useContext(MapContext);

    if(!wsmap){
        console.log("Woosmap Context Error");
    }

    return wsmap || null;
}