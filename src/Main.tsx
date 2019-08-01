import React from 'react';
import {Provider} from 'react-redux';
import store from "./store";
import TabController from "./components/TabController";

interface IMain {
    children: React.ReactChildren;
}

// TODO: Fix styling
class Main extends React.PureComponent<IMain> {
    render() {
        return (
            <Provider store={store}>
                <TabController/>
            </Provider>
        )
    }
}


export default Main;