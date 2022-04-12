export const ADD_TO_SCHEDULE = 'ADD_TO_SCHEDULE';
 
export const addToSchedule = (schdule) => {
    return { type: ADD_TO_SCHEDULE, schdule: schdule };
};