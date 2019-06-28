import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { ProfileParameter } from '@src/components/social';
import { ImageOverlay, RateBar, textStyle, } from '@src/components/common';
class Profile5Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onRateBarValueChange = (value) => {
            this.props.onRateChange(value);
        };
    }
    render() {
        const { themedStyle, profile } = this.props;
        return (<ImageOverlay style={themedStyle.container} source={profile.photo.imageSource}>
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.nameLabel} category='h2'>
            {`${profile.firstName}\n${profile.lastName}`}
          </Text>
          <Text style={themedStyle.locationLabel} category='h6'>
            {profile.location}
          </Text>
          <RateBar hint='Experience' hintStyle={themedStyle.rateHintLabel} value={3} onChange={this.onRateBarValueChange}/>
          <View style={themedStyle.parametersContainer}>
            <ProfileParameter hint='Height' value={`${profile.height} cm`}/>
            <ProfileParameter hint='Age' value={`${profile.age}`}/>
            <ProfileParameter hint='Inseam' value={`${profile.inseam} cm`}/>
            <ProfileParameter hint='Weight' value={`${profile.weight} kg`}/>
          </View>
        </View>
      </ImageOverlay>);
    }
}
export const Profile5 = withStyles(Profile5Component, (theme) => ({
    container: {
        flex: 1,
    },
    infoContainer: {
        position: 'absolute',
        paddingHorizontal: 24,
        paddingBottom: 32,
        left: 0,
        right: 0,
        bottom: 0,
    },
    parametersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 64,
    },
    nameLabel: Object.assign({ color: 'white' }, textStyle.headline),
    locationLabel: Object.assign({ color: 'white' }, textStyle.headline),
    rateHintLabel: {
        color: 'white',
    },
}));
//# sourceMappingURL=profile5.component.js.map