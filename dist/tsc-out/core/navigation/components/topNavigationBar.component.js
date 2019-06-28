import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { TopNavigation, TopNavigationAction, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
import { SafeAreaView } from './safeAreaView.component';
class TopNavigationBarComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onBackButtonPress = () => {
            if (this.props.onBackPress) {
                this.props.onBackPress();
            }
        };
        this.renderBackButton = (source) => {
            return (<TopNavigationAction icon={source} onPress={this.onBackButtonPress}/>);
        };
    }
    render() {
        const { themedStyle, title, backIcon } = this.props;
        const leftControlElement = backIcon ? this.renderBackButton(backIcon) : null;
        return (<SafeAreaView style={themedStyle.safeArea}>
        <TopNavigation alignment='center' title={title} titleStyle={textStyle.subtitle} subtitleStyle={textStyle.caption1} leftControl={leftControlElement}/>
      </SafeAreaView>);
    }
}
export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme) => ({
    safeArea: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=topNavigationBar.component.js.map