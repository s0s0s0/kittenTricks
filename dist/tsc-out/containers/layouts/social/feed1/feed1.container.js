import React from 'react';
import { trainings } from '@src/core/data/training';
import { Feed1 } from './feed1.component';
export class Feed1Container extends React.Component {
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
        this.onStyxTrainingPress = () => {
        };
    }
    render() {
        return (<Feed1 trainings={this.state.trainings} onTrainingPress={this.onTrainingPress} onAddTrainingPress={this.onAddTrainingPress} onShareTrainingPress={this.onShareTrainingPress} onLikeTrainingPress={this.onLikeTrainingPress} onStyxTrainingPress={this.onStyxTrainingPress}/>);
    }
}
//# sourceMappingURL=feed1.container.js.map