import * as Types from '../action-types/home';
let initState = {
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
    }
    return state;
}