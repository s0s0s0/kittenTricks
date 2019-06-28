import React from 'react';
import { Menu } from './menu.component';
export class MenuContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'MenuContainer';
        this.onTabSelect = (index) => {
            const { navigation } = this.props;
            const { [index]: selectedRoute } = navigation.state.routes;
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: selectedRoute.routeName,
            });
        };
    }
    render() {
        return (<Menu selectedIndex={this.props.navigation.state.index} onTabSelect={this.onTabSelect}/>);
    }
}
//# sourceMappingURL=menu.container.js.map