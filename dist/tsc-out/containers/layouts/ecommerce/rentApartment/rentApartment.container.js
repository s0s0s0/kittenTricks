import React from 'react';
import { apartment1 } from '../../../../core/data/apartment';
import { RentApartment } from './rentApartment.component';
export class RentApartmentContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            apartment: apartment1,
        };
        this.navigationKey = 'RentApartmentContainer';
        this.onBookPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Payment',
            });
        };
        this.onPhotoPress = (index) => {
        };
    }
    render() {
        return (<RentApartment apartment={this.state.apartment} onBookPress={this.onBookPress} onPhotoPress={this.onPhotoPress}/>);
    }
}
//# sourceMappingURL=rentApartment.container.js.map