import { useContext } from "react";
import { MapContext } from "../context/MapContext";

export default function useWoosmap(){

    const woosmap = useContext(MapContext);

    if(!woosmap){
        console.log("Woosmap Context Error");
    }

    return woosmap || null;
}