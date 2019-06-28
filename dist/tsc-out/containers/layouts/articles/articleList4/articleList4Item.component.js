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
import { ImageBackground, TouchableOpacity, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { ArticleActivityBar } from '@src/components/articles';
import { textStyle } from '@src/components/common';
class ArticleList4ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
        this.onCommentButtonPress = () => {
            this.props.onCommentPress(this.props.index);
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, photo, title, comments, likes } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "title", "comments", "likes"]);
        return (<TouchableOpacity activeOpacity={0.95} {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageBackground style={themedStyle.photo} source={photo}/>
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel} category='h5'>
            {title}
          </Text>
          <ArticleActivityBar style={themedStyle.activityContainer} comments={comments} likes={likes} onCommentPress={this.onCommentButtonPress} onLikePress={this.onLikeButtonPress}/>
        </View>
      </TouchableOpacity>);
    }
}
export const ArticleList4Item = withStyles(ArticleList4ItemComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        minHeight: 188,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    activityContainer: {
        marginTop: 24,
    },
    photo: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    titleLabel: Object.assign({ flex: 1 }, textStyle.headline),
}));
//# sourceMappingURL=articleList4Item.component.js.map