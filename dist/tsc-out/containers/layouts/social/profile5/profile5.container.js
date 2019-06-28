import React from 'react';
import { profile4 } from '@src/core/data/profile';
import { Profile5 } from './profile5.component';
export class Profile5Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile4,
        };
        this.onRateChange = (value) => {
        };
    }
    render() {
        return (<Profile5 profile={this.state.profile} onRateChange={this.onRateChange}/>);
    }
}
//# sourceMappingURL=profile5.container.js.map