import React from 'react';
import { Articles } from './articles.component';
import { routes } from './routes';
export class ArticlesContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedLayoutIndex: 0,
        };
        this.data = routes;
        this.navigationKey = 'ArticlesContainer';
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
        return (<Articles data={this.data} selectedLayoutIndex={this.state.selectedLayoutIndex} onItemSelect={this.onItemSelect} onLayoutSelect={this.onCategorySelect}/>);
    }
}
//# sourceMappingURL=articles.container.js.map