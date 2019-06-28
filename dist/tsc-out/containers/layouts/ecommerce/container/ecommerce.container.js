import React from 'react';
import { Ecommerce } from './ecommerce.component';
import { routes } from './routes';
export class EcommerceContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedLayoutIndex: 0,
        };
        this.data = routes;
        this.navigationKey = 'EcommerceContainer';
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
        return (<Ecommerce data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect}/>);
    }
}
//# sourceMappingURL=ecommerce.container.js.map