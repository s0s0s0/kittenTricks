import React from 'react';
import { Layouts } from './layouts.component';
import { routes } from './routes';
export class LayoutsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.data = routes;
        this.navigationKey = 'LayoutsContainer';
        this.onItemSelect = (index) => {
            const { [index]: selectedItem } = this.data;
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: selectedItem.route,
            });
        };
    }
    render() {
        return (<Layouts data={this.data} onItemSelect={this.onItemSelect}/>);
    }
}
//# sourceMappingURL=layouts.container.js.map