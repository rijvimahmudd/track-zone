import { useState, useEffect } from "react";

import {addMinutes} from 'date-fns'

const init = {
    id : '',
    title : "",
    timezone : {
        type : '',
        offset : '',
    },
    date_utc:null,
    date : null,
}


const TIMEZONE_OFFSET = {
    PST : -7,
    EST : -4,
    EDT : -4,
    BST : 1,
    MST : -6,
}
const useClock = (timeZone, offset = 0) =>{
    const [state, setState] = useState({...init});
    const [utc, setUTC] = useState(null);


    useEffect(()=>{
        let d = new Date();
        d = addMinutes(d, d.getTimezoneOffset());
        setUTC(d);
    },[])

    useEffect(()=>{
        
        if(utc !== null && timeZone){

            // offset = TIMEZONE_OFFSET[timeZone] ?? offset;

            if (timeZone in TIMEZONE_OFFSET) {
                offset = TIMEZONE_OFFSET[timeZone]*60;
            }
            const newUtc = addMinutes(utc, offset);
            setState({
                ...state,
                date_utc: utc,
                date : newUtc
            })
        }else{
            setState({
                ...state,
                date_utc: utc,
                date : utc
            })
        }
    },[utc])

    return {
        clock : state
    }

}


export default useClock;