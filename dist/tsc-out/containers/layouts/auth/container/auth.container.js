import React from 'react';
import { Auth } from './auth.component';
import { routes } from './routes';
export class AuthContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedLayoutIndex: 0,
        };
        this.data = routes;
        this.navigationKey = 'AuthContainer';
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
        return (<Auth data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect}/>);
    }
}
//# sourceMappingURL=auth.container.js.map