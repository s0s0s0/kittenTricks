import React from 'react';
import { movie1 } from '@src/core/data/movie';
import { Movie } from './movieDetails.component';
export class MovieDetailsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            movie: movie1,
        };
        this.navigationKey = 'MovieDetailsContainer';
        this.onScreenshotPress = (index) => {
        };
        this.onBuyTicketPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Payment',
            });
        };
    }
    render() {
        return (<Movie movie={this.state.movie} onBuyTicket={this.onBuyTicketPress} onScreenshotPress={this.onScreenshotPress}/>);
    }
}
//# sourceMappingURL=movieDetails.container.js.map