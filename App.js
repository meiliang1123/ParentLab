import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator,} from 'react-navigation';
import { StyleSheet, Text, View, } from 'react-native';


import store from "./store"

import Launcher from "./components/Launcher"
import ActivePage from "./components/ActivePage"

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

const Navigator = StackNavigator({
    Launcher: { screen: Launcher },
    ActivePage: { screen: ActivePage },
});