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
import { ArticleActivityBar, ArticleTips, } from '@src/components/articles';
import { ImageOverlay, textStyle, } from '@src/components/common';
class ArticleList3ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.article);
        };
        this.onCommentsButtonPress = () => {
            this.props.onCommentPress(this.props.article);
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress(this.props.article);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, article } = _a, restProps = __rest(_a, ["style", "themedStyle", "article"]);
        return (<TouchableOpacity activeOpacity={0.9} {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageOverlay style={themedStyle.image} source={article.image.imageSource}>
          <Text style={themedStyle.titleLabel} category='h4'>
            {article.title}
          </Text>
          <ArticleTips style={themedStyle.tipsContainer}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
          <ArticleActivityBar style={themedStyle.activityContainer} textStyle={themedStyle.activityBarLabel} comments={article.comments ? article.comments.length : 0} likes={article.likes} onCommentPress={this.onCommentsButtonPress} onLikePress={this.onLikeButtonPress}/>
        </ImageOverlay>
      </TouchableOpacity>);
    }
}
export const ArticleList3Item = withStyles(ArticleList3ItemComponent, (theme) => ({
    container: {
        minHeight: 220,
        borderRadius: 12,
        overflow: 'hidden',
    },
    tipsContainer: {
        marginTop: 16,
    },
    activityContainer: {
        marginTop: 48,
    },
    image: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
    },
    titleLabel: Object.assign({ maxWidth: 192, color: 'white' }, textStyle.headline),
    activityBarLabel: {
        color: 'white',
    },
}));
//# sourceMappingURL=articleList3Item.component.js.map