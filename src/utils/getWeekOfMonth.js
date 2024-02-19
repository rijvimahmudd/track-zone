import { getWeekOfMonth as getWeekMonth} from "date-fns";

const getWeekOfMonth = (date) => {
    const weekNumber = getWeekMonth(date);

    return `
    ${weekNumber}${weekNumber === 1 ? 'st' : weekNumber === 2 ? 'nd' : weekNumber === 3 ? 'rd' : 'th'} week
    
    `
}

export default getWeekOfMonth