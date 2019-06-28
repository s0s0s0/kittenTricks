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
import { View } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Avatar, } from '../../../../node_modules/react-native-ui-kitten/ui';
class ProfilePhotoComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderEditElement = () => {
            const buttonElement = this.props.button();
            return React.cloneElement(buttonElement, {
                style: [buttonElement.props.style, this.props.themedStyle.editButton],
            });
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, button } = _a, restProps = __rest(_a, ["style", "themedStyle", "button"]);
        return (<View style={style}>
        <Avatar style={[style, themedStyle.avatar]} {...restProps}/>
        {button ? this.renderEditElement() : null}
      </View>);
    }
}
export const ProfilePhoto = withStyles(ProfilePhotoComponent, (theme) => ({
    avatar: {
        alignSelf: 'center',
    },
    editButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },
}));
//# sourceMappingURL=profilePhoto.component.js.map