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
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import { ActivityBar, LikeButton, ReactionBar, ShareButton, textStyle, } from '@src/components/common';
import { PlusIconFill } from '@src/assets/icons';
class FeedActivityBarComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onShareButtonPress = () => {
            this.props.onSharePress();
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress();
        };
        this.onAddButtonPress = () => {
            this.props.onAddPress();
        };
        this.renderAddIcon = (style) => {
            const { themedStyle } = this.props;
            const iconElement = PlusIconFill(style);
            return React.cloneElement(iconElement, {
                style: [style, iconElement.props.style, themedStyle.addButtonIcon],
            });
        };
    }
    render() {
        const _a = this.props, { themedStyle } = _a, restProps = __rest(_a, ["themedStyle"]);
        return (<ActivityBar {...restProps}>
        <ReactionBar>
          <ShareButton style={themedStyle.reactionButton} onPress={this.onShareButtonPress}/>
          <LikeButton style={themedStyle.reactionButton} onPress={this.onLikeButtonPress}/>
        </ReactionBar>
        <Button style={themedStyle.addButton} textStyle={textStyle.button} size='giant' status='white' icon={this.renderAddIcon} onPress={this.onAddButtonPress}>
          Add Training
        </Button>
      </ActivityBar>);
    }
}
export const FeedActivityBar = withStyles(FeedActivityBarComponent, (theme) => ({
    reactionButton: {
        marginHorizontal: 8,
    },
    addButton: {
        flex: 1,
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    addButtonIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 0,
    },
}));
//# sourceMappingURL=feedActivityBar.component.js.map