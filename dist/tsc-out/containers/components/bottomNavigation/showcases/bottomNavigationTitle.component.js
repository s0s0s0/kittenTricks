import React from 'react';
import { BottomNavigation, BottomNavigationTab, } from 'react-native-ui-kitten/ui';
export class BottomNavigationTitle extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedIndex: 0,
        };
        this.onTabSelect = (selectedIndex) => {
            this.setState({ selectedIndex });
        };
    }
    render() {
        return (<BottomNavigation appearance='noIndicator' selectedIndex={this.state.selectedIndex} onSelect={this.onTabSelect}>
        <BottomNavigationTab title='Screen 1'/>
        <BottomNavigationTab title='Screen 2'/>
        <BottomNavigationTab title='Screen 3'/>
      </BottomNavigation>);
    }
}
//# sourceMappingURL=bottomNavigationTitle.component.js.map