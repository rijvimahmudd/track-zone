import { useState } from "react";
import {nanoid} from 'nanoid'

const useEvents = () => {
    const [state, setState] = useState({});

    const getEventsByClockId = (clockId) => {
        return Object.keys(state).filter(item => item.startsWith(clockId));
    };
    
    const getEvents = (isArray = false) => {
        if(!isArray) return state;
        return Object.values(state);
    };

    const addEvent = (event) =>{
        event.id = nanoid();
        setState(prev =>({
            ...prev,
            [`${event.clockId}|${event.id}`] : event
        }));

        return event;
    }

    const deleteEvent = (id) => {
        const events = [...state];
        delete events[id];
        setState(events);
    }

    const deleteEventByClock = (clockId) => {
        const events = Object.keys(state).filter(item => !item.startsWith(clockId));
        setState(events);
    }

    const updateEvent = (updatedEvent, id) => {
        const events = {...state};
        events[id] = {
            ...events[id],
            ...updatedEvent
        }
        setState(events);
    }

    return {
        events:state,
        getEventsByClockId,
        getEvents,
        addEvent,
        deleteEvent,
        deleteEventByClock,
        updateEvent
    };
}

export default useEvents;