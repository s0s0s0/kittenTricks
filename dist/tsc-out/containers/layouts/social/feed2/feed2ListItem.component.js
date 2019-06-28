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
import { TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { FeedActivityBar } from '../../../../components/social';
import { ImageOverlay, textStyle, } from '../../../../components/common';
class Feed2ListItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onAddButtonPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onShareButtonPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onLikeButtonPress = () => {
            this.props.onPress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, photo, category, description } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "category", "description"]);
        return (<TouchableOpacity {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageOverlay style={themedStyle.photo} source={photo}>
          <Text style={themedStyle.categoryLabel} category='h4'>
            {category}
          </Text>
        </ImageOverlay>
        <Text style={themedStyle.descriptionLabel}>{description}</Text>
        <FeedActivityBar style={themedStyle.activityContainer} onSharePress={this.onShareButtonPress} onLikePress={this.onLikeButtonPress} onAddPress={this.onAddButtonPress}/>
      </TouchableOpacity>);
    }
}
export const Feed2ListItem = withStyles(Feed2ListItemComponent, (theme) => ({
    container: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    photo: {
        minHeight: 220,
    },
    categoryLabel: Object.assign({ position: 'absolute', bottom: 0, marginHorizontal: 24, marginVertical: 24, color: 'white' }, textStyle.headline),
    descriptionLabel: Object.assign({ marginHorizontal: 24, marginVertical: 24 }, textStyle.subtitle),
    activityContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: theme['border-basic-color-2'],
    },
}));
//# sourceMappingURL=feed2ListItem.component.js.map