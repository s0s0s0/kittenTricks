var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { ImageBackground, TouchableOpacity, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { ActivityAuthoring } from '../../common';
import { ProfileActivityBar } from './profileActivityBar.component';
class ProfileActivityList1ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, onPress, photo, profilePhoto, authorName, date, likes } = _a, restProps = __rest(_a, ["style", "themedStyle", "onPress", "photo", "profilePhoto", "authorName", "date", "likes"]);
        return (<TouchableOpacity activeOpacity={0.95} {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageBackground style={themedStyle.photo} source={photo}/>
        <ProfileActivityBar style={themedStyle.detailsContainer} likes={likes} onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring photo={profilePhoto} name={authorName} date={date}/>
        </ProfileActivityBar>
      </TouchableOpacity>);
    }
}
export const ProfileActivityList1Item = withStyles(ProfileActivityList1ItemComponent, (theme) => ({
    container: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    photo: {
        minHeight: 220,
    },
}));
//# sourceMappingURL=profileActivityList1Item.component.js.map