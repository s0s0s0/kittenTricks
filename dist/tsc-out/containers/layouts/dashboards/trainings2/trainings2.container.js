import React from 'react';
import { Trainings2 } from './trainings2.component';
import { exercises2 } from '@src/core/data/exercise';
export class Trainings2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            exercises: exercises2,
        };
        this.onTrainingDetails = (index) => {
        };
        this.onTrainingTiming = (index) => {
        };
        this.onTrainingEnergy = (index) => {
        };
    }
    render() {
        return (<Trainings2 exercises={this.state.exercises} onTrainingDetails={this.onTrainingDetails} onTrainingTiming={this.onTrainingTiming} onTrainingEnergy={this.onTrainingEnergy}/>);
    }
}
//# sourceMappingURL=trainings2.container.js.map