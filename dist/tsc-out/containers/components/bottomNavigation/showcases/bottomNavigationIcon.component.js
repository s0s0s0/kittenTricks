import React from 'react';
import { BottomNavigation, BottomNavigationTab, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
export class BottomNavigationIcon extends React.Component {
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
        <BottomNavigationTab icon={StarIconFill}/>
        <BottomNavigationTab icon={StarIconFill}/>
        <BottomNavigationTab icon={StarIconFill}/>
      </BottomNavigation>);
    }
}
//# sourceMappingURL=bottomNavigationIcon.component.js.map