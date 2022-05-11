// 액션 타입 선언
export const ADD = 'schedule/ADD';
export const DELETE = 'schedule/DELETE';
export const MODIFY = 'schedule/MODIFY';

// 액션 생성 함수
// 나중에 컴포넌트에서 액션을 쉽게 발생시키기 위함
export const addSchedule = (date, title) => ({
    type: ADD,
    date,
    item,
});

export const deleteSchedule = (date, key) => ({
    type: DELETE,
    date,
    key,
});

export const modifySchedule = (date, item) => ({
    type: MODIFY,
    date,
    item,
});

// 초기 상태 선언
const initialState = {
    schedules: {
        '2022-05-11': [
            { key: 1, title: '할 일 1' },
            { key: 2, title: '할 일 2' },
            { key: 3, title: '할 일 3' },
        ],
    },
    markedDates: {
        '2022-05-11': { marked: true, dotColor: 'red' },
    },
};

// 리듀서 선언
export default function reducer(state = initialState, action) {
    const getMarkedDates = (value) => Object.keys(value).reduce((acc, cur) => ({ ...acc, [cur]: { marked: true, dotColor: 'red' } }), {});
    let selectedSchedule, newSchedules;

    switch (action.type) {
        case ADD:
            selectedSchedule = state.schedules[action.date] || [];
            const newKey =
                selectedSchedule.length > 0
                    ? Math.max(...selectedSchedule.map(v => v.key)) + 1
                    : 1;
            newSchedules = { ...state.schedules, [action.date]: selectedSchedule.concat({ title: action.title, key: newKey }) };
            return {
                schedules: newSchedules,
                markedDates: getMarkedDates(newSchedules)
            };
        case DELETE:
            selectedSchedule = state.schedules[action.date] || [];
            newSchedules = { ...state.schedules, [action.date]: selectedSchedule.filter(v => v.key !== action.key) };
            if (newSchedules[action.date].length === 0) {
                delete newSchedules[action.date];
            }
            return {
                schedules: newSchedules,
                markedDates: getMarkedDates(newSchedules)
            };
        case MODIFY:
            selectedSchedule = [...(state.schedules[action.date] || [])];
            selectedSchedule.some(v => {
                if (v.key === action.item.key) {
                    v.title = action.item.title;
                    return true;
                }
                return false;
            })
            newSchedules = { ...state.schedules, [action.date]: selectedSchedule };
            return {
                schedules: newSchedules,
                markedDates: getMarkedDates(newSchedules)
            };
        default:
            return state;
    }
}