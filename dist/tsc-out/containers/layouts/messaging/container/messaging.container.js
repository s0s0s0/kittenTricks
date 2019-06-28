import React from 'react';
import { Messaging } from './messaging.component';
import { routes } from './routes';
export class MessagingContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedLayoutIndex: 0,
        };
        this.data = routes;
        this.navigationKey = 'MessagingContainer';
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
        return (<Messaging data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect}/>);
    }
}
//# sourceMappingURL=messaging.container.js.map