import {TWIST_LOAD_ALL_ANIME, TWIST_PLAY_SHOW, TWIST_SET_TITLE} from './constants';

const initialState = {
    animes: null,
    title: '',
    play: null
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case TWIST_SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case TWIST_LOAD_ALL_ANIME:
            return {
                ...state,
                animes: action.twist
            };
        case TWIST_PLAY_SHOW:
            return {
                ...state,
                play: action.play
            };
        default:
            return state;
    }
};