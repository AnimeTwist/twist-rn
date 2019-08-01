// TODO: Connect Twist API instead of Twist RSS
import {combineReducers, createStore} from "redux";

import Twist, {TwistFeed} from "../api/twist";
import twistReducer from "./twistReducer";
import {TWIST_LOAD_ALL_ANIME} from "./constants";

const initialState = {};

const rootReducer = combineReducers({
    twist: twistReducer
});

const store = createStore(rootReducer, initialState);

const twistInit = (animes: TwistFeed) => ({
    type: TWIST_LOAD_ALL_ANIME,
    animes
});

export const twistLoad = async () => {
    const state = store.getState();
    if (state.twist && state.twist.animes) {
        return null;
    }
    new Twist().getAll().then((twist: TwistFeed | null) => store.dispatch(twistInit(twist)));

    return null;
};

twistLoad();

export default store;
