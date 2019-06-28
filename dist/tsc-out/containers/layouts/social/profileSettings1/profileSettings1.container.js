import React from 'react';
import { profile1 } from '../../../../core/data/profile';
import { ProfileSettings1 } from './profileSettings1.component';
export class ProfileSettings1Container extends React.Component {
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
        return (<ProfileSettings1 profile={this.state.profile} onUploadPhotoButtonPress={this.onUploadPhotoButtonPress} onButtonPress={this.onButtonPress}/>);
    }
}
//# sourceMappingURL=profileSettings1.container.js.map