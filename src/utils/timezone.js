import { TIMEZONE_OFFSET } from "../constants/timezone";

export const getOffset = (start = -11.5, end = 12)=>{
    let offset = [];
    for(let i = start; i <= end; i+= .5){
        offset.push(i)
    }
    return offset;
}


export const getTimeZone = () =>{
    return['UTC', 'GMT', ...Object.keys(TIMEZONE_OFFSET)];
}

