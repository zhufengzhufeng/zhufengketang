import * as Types from '../action-types/home';
let initState = {
    currentLesson:'',
    sliders:[],
    lessons:[]
}
export function home(state=initState,action) {
    switch (action.type){
        case Types.GET_SLIDER:
            state.sliders = action.sliders;
            return {...state};
        case Types.GET_LESSON:
            state.lessons = action.lessons;
            return {...state};
        case Types.SET_CURRENT_LESSON:
            state.currentLesson = action.lesson;
            return {...state}
    }
    return state;
}