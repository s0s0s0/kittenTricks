import React from 'react';
import { SafeAreaView } from '../../core/navigation';
import { ThemeProvider, withStyles, } from 'react-native-ui-kitten/theme';
import { BottomNavigation, BottomNavigationTab, } from 'react-native-ui-kitten/ui';
import { ColorPaletteIconOutline, LayoutIconOutline, StarIconOutline, } from '../../assets/icons';
import { themes } from '../../core/themes';
class MenuComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onTabSelect = (index) => {
            this.props.onTabSelect(index);
        };
    }
    render() {
        const { selectedIndex, themedStyle } = this.props;
        return (<SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={Object.assign({}, this.props.theme, themes['App Theme'])}>
          <BottomNavigation appearance='noIndicator' selectedIndex={selectedIndex} onSelect={this.onTabSelect}>
            <BottomNavigationTab title='Layouts' icon={LayoutIconOutline}/>
            <BottomNavigationTab title='Components' icon={StarIconOutline}/>
            <BottomNavigationTab title='Themes' icon={ColorPaletteIconOutline}/>
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>);
    }
}
export const Menu = withStyles(MenuComponent, (theme) => ({
    safeAreaContainer: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=menu.component.js.map