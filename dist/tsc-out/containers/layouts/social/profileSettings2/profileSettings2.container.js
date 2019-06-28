import React from 'react';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings2 } from './profileSettings2.component';
export class ProfileSettings2Container extends React.Component {
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
        return (<ProfileSettings2 profile={this.state.profile} onUploadPhotoButtonPress={this.onUploadPhotoButtonPress} onButtonPress={this.onButtonPress}/>);
    }
}
//# sourceMappingURL=profileSettings2.container.js.map