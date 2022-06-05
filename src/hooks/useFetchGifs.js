import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif(category).then(img => {
            setTimeout(() => {
                setState({
                    data: img,
                    loading: false
                })
            }, 2000);
        });
        return () => {
            // second
        }
    }, [category])

    return state

}