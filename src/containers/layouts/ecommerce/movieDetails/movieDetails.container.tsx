import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { movie1 } from '../../../../core/data/movie';
import { Movie as MovieModel } from '../../../../core/model';
import { Movie } from './movieDetails.component';

interface State {
  movie: MovieModel;
}

export class MovieDetailsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    movie: movie1,
  };

  private navigationKey: string = 'MovieDetailsContainer';

  private onScreenshotPress = (index: number) => {
  };

  private onBuyTicketPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Payment',
    });
  };

  public render(): React.ReactNode {
    return (
      <Movie
        movie={this.state.movie}
        onBuyTicket={this.onBuyTicketPress}
        onScreenshotPress={this.onScreenshotPress}
      />
    );
  }
}
