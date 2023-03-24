import { useState, useEffect } from "react";

import {addMinutes} from 'date-fns'

const TIMEZONE_OFFSET = {
    PST : -7,
    EST : -4,
    EDT : -4,
    BST : 1,
    MST : -6,
}
const useClock = (timeZone, offset = 0) =>{
    const [localDate, setLocalDate] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [localTimezone, setLocalTimezone] = useState(0);
    const [utc, setUTC] = useState(null);

    offset *= 60;

    useEffect(()=>{
        let d = new Date();
        const lo = d.getTimezoneOffset();
        d = addMinutes(d, lo);
        setUTC(d);
        setLocalOffset(lo)
    },[])

    useEffect(()=>{
        if(utc !== null){
            if(timeZone){
                offset = TIMEZONE_OFFSET[timeZone] ?? offset;

                
                // if (timeZone in TIMEZONE_OFFSET) {
                //     offset = TIMEZONE_OFFSET[timeZone]*60;
                // }

                const newUtc = addMinutes(utc, offset);
                setLocalDate(newUtc);
            }else{
                const newUtc = addMinutes(utc, -localOffset);
                const dateStr = newUtc.toUTCString().split(' ');
                setLocalDate(newUtc);
                setLocalTimezone(dateStr.pop());
            }
        }
    },[utc])

    return {
        date: localDate,
        dateUTC : utc,
        offset,
        timeZone,
        localOffset,
        localTimezone

    }

}


export default useClock;