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
    // '2022-03-11': [
    //     {id: 1, title: '할 일 1'},
    //     {id: 2, title: '할 일 2'},
    //     {id: 3, title: '할 일 3'},
    // ],
};

// 리듀서 선언
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const tmpSchedule = state[action.date] || [];
            const nextId =
                tmpSchedule.length > 0
                    ? Math.max(...tmpSchedule.map(v => v.id)) + 1
                    : 1;
            const addSchedule = {title: action.title, id: nextId};

            return {
                ...state,
                [action.date]: tmpSchedule.concat(addSchedule),
            };
        case 'DELETE':
            return state;
        case 'MODIFY':
            return state;
        default: 
            return state;
    }
}