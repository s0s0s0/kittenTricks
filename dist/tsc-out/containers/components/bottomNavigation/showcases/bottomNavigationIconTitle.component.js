import React from 'react';
import { BottomNavigation, BottomNavigationTab, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
export class BottomNavigationIconTitle extends React.Component {
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
        <BottomNavigationTab title='Screen 1' icon={StarIconFill}/>
        <BottomNavigationTab title='Screen 2' icon={StarIconFill}/>
        <BottomNavigationTab title='Screen 3' icon={StarIconFill}/>
      </BottomNavigation>);
    }
}
//# sourceMappingURL=bottomNavigationIconTitle.component.js.map