import React from 'react';
import { AddNewCard } from './addNewCard.component';
export class AddNewCardContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.onAddPress = (value) => {
            this.props.navigation.goBack();
        };
    }
    render() {
        return (<AddNewCard onAddPress={this.onAddPress}/>);
    }
}
//# sourceMappingURL=addNewCard.container.js.map