import React from 'react';
import { Components } from './components.component';
import { routes } from './routes';
export class ComponentsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: routes,
        };
        this.navigationKey = 'ComponentsContainer';
        this.onItemSelect = (index) => {
            const { [index]: selectedItem } = this.state.data;
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: selectedItem.route,
            });
        };
    }
    render() {
        return (<Components data={this.state.data} onItemSelect={this.onItemSelect}/>);
    }
}
//# sourceMappingURL=components.container.js.map