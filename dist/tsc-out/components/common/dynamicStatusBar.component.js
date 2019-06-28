import React from 'react';
import { View, StatusBar, Platform, } from 'react-native';
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import Constants from 'expo-constants';
class DynamicStatusBarComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.getStatusBarContent = () => {
            if (this.props.currentTheme === 'Eva Light') {
                return 'dark-content';
            }
            else {
                return 'light-content';
            }
        };
    }
    render() {
        const { themedStyle } = this.props;
        const androidStatusBarBgColor = themedStyle.container.backgroundColor;
        const barStyle = this.getStatusBarContent();
        return (<View style={themedStyle.container}>
        <StatusBar backgroundColor={androidStatusBarBgColor} barStyle={barStyle}/>
      </View>);
    }
}
export const DynamicStatusBar = withStyles(DynamicStatusBarComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
        height: Platform.select({
            ios: Constants.statusBarHeight,
            android: 0,
        }),
    },
}));
//# sourceMappingURL=dynamicStatusBar.component.js.map