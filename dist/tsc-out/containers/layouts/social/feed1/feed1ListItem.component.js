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
import { Image, TouchableOpacity, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { FeedActivityBar, Styx, } from '../../../../components/social';
import { ImageOverlay, textStyle, } from '../../../../components/common';
class Feed1ListItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onAddPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onSharePress = () => {
            this.props.onPress(this.props.index);
        };
        this.onLikePress = () => {
            this.props.onPress(this.props.index);
        };
        this.onStyxPress = () => {
            this.props.onStyxPress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, photo, icon, category, time, description, styx } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "icon", "category", "time", "description", "styx"]);
        return (<TouchableOpacity {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageOverlay style={themedStyle.photo} source={photo}>
          <View style={themedStyle.categoryContainer}>
            <View style={themedStyle.categoryInfoContainer}>
              <Image style={themedStyle.categoryIcon} source={icon}/>
              <Text style={themedStyle.categoryLabel} category='h6'>
                {category}
              </Text>
            </View>
            <Text style={themedStyle.timeLabel}>
              {time}
            </Text>
          </View>
        </ImageOverlay>
        <View style={themedStyle.infoContainer}>
          <Styx value={styx} onPress={this.onStyxPress}/>
          <Text style={themedStyle.descriptionLabel}>{description}</Text>
        </View>
        <FeedActivityBar style={themedStyle.activityContainer} onSharePress={this.onSharePress} onLikePress={this.onLikePress} onAddPress={this.onAddPress}/>
      </TouchableOpacity>);
    }
}
export const Feed1ListItem = withStyles(Feed1ListItemComponent, (theme) => ({
    container: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    activityContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: theme['border-basic-color-2'],
    },
    photo: {
        minHeight: 220,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    categoryIcon: {
        width: 32,
        height: 32,
        tintColor: 'white',
    },
    categoryLabel: Object.assign({ marginHorizontal: 8, color: 'white' }, textStyle.headline),
    timeLabel: Object.assign({ color: 'white' }, textStyle.subtitle),
    descriptionLabel: Object.assign({ marginTop: 16 }, textStyle.subtitle),
}));
//# sourceMappingURL=feed1ListItem.component.js.map