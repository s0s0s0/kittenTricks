import React from 'react';
import { trainings } from '../../../../core/data/training';
import { Feed2 } from './feed2.component';
export class Feed2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            trainings: trainings,
        };
        this.onTrainingPress = (index) => {
        };
        this.onAddTrainingPress = (index) => {
        };
        this.onShareTrainingPress = (index) => {
        };
        this.onLikeTrainingPress = (index) => {
        };
    }
    render() {
        return (<Feed2 trainings={this.state.trainings} onTrainingPress={this.onTrainingPress} onAddTrainingPress={this.onAddTrainingPress} onShareTrainingPress={this.onShareTrainingPress} onLikeTrainingPress={this.onLikeTrainingPress}/>);
    }
}
//# sourceMappingURL=feed2.container.js.map