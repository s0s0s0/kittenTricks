import React from 'react';
import { Navigation } from './navigation.component';
import { routes } from './routes';
export class NavigationContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedLayoutIndex: 0,
        };
        this.data = routes;
        this.navigationKey = 'NavigationContainer';
        this.onCategorySelect = (selectedLayoutIndex) => {
            this.setState({ selectedLayoutIndex });
        };
        this.onItemSelect = (index) => {
            const { [index]: selectedItem } = this.data;
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: selectedItem.route,
            });
        };
    }
    render() {
        return (<Navigation data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect}/>);
    }
}
//# sourceMappingURL=navigation.container.js.map