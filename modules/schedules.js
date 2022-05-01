// 액션 타입 선언
export const ADD = 'schedule/ADD';
export const DELETE = 'schedule/DELETE';
export const MODIFY = 'schedule/MODIFY';

// 액션 생성 함수
// 나중에 컴포넌트에서 액션을 쉽게 발생시키기 위함
export const add = (date, title) => ({
    type: ADD,
    date,
    title,
});

// 초기 상태 선언
const initialState = {
    schedules: {
        '2022-05-11': [
            { id: 1, title: '할 일 1' },
            { id: 2, title: '할 일 2' },
            { id: 3, title: '할 일 3' },
        ],
    },
    markedDates: {
        '2022-05-11': { marked: true, dotColor: 'red' },
    },
};

// 리듀서 선언
export default function reducer(state = initialState, action) {
    const getMarkedDates = (value) => Object.keys(value).reduce((acc, cur) => ({ ...acc, [cur]: { marked: true, dotColor: 'red' } }), {});

    switch (action.type) {
        case ADD:
            const tmpSchedule = state.schedules[action.date] || [];
            const nextId =
                tmpSchedule.length > 0
                    ? Math.max(...tmpSchedule.map(v => v.id)) + 1
                    : 1;
            const newSchedules = { ...state.schedules, [action.date]: tmpSchedule.concat({ title: action.title, id: nextId }) };
            return {
                schedules: newSchedules,
                markedDates: getMarkedDates(newSchedules)
            };
        case DELETE:
            return state;
        case MODIFY:
            return state;
        default:
            return state;
    }
}