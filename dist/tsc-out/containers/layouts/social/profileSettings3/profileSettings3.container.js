import React from 'react';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings3 } from './profileSettings3.component';
export class ProfileSettings3Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile1,
        };
        this.onUploadPhotoButtonPress = () => {
        };
        this.onButtonPress = () => {
            this.props.navigation.goBack();
        };
    }
    render() {
        return (<ProfileSettings3 profile={this.state.profile} onUploadPhotoButtonPress={this.onUploadPhotoButtonPress} onButtonPress={this.onButtonPress}/>);
    }
}
//# sourceMappingURL=profileSettings3.container.js.map