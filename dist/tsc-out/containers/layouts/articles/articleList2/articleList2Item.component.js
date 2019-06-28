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
import { ActivityAuthoring, ImageOverlay, textStyle, } from '@src/components/common';
import { BulbIconFill } from '@src/assets/icons';
class ArticleList2ItemComponent extends React.Component {
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
        return (<TouchableOpacity activeOpacity={0.95} {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageOverlay style={themedStyle.image} source={article.image.imageSource}>
          <Text style={themedStyle.titleLabel} category='h4'>
            {article.title}
          </Text>
          <ArticleTips style={themedStyle.tipsContainer} icon={BulbIconFill}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
        </ImageOverlay>
        <ArticleActivityBar style={themedStyle.activityContainer} comments={article.comments ? article.comments.length : 0} likes={article.likes} onCommentPress={this.onCommentsButtonPress} onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring photo={article.author.photo.imageSource} name={`${article.author.firstName} ${article.author.lastName}`} date={article.date}/>
        </ArticleActivityBar>
      </TouchableOpacity>);
    }
}
export const ArticleList2Item = withStyles(ArticleList2ItemComponent, (theme) => ({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    activityContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    tipsContainer: {
        marginTop: 16,
    },
    image: {
        minHeight: 220,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    titleLabel: Object.assign({ maxWidth: 192, color: 'white' }, textStyle.headline),
}));
//# sourceMappingURL=articleList2Item.component.js.map