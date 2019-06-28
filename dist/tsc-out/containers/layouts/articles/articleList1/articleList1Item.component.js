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
import { ActivityAuthoring, textStyle, } from '@src/components/common';
class ArticleList1ItemComponent extends React.Component {
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
        const commentsCount = article.comments ? article.comments.length : 0;
        return (<TouchableOpacity activeOpacity={0.95} {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <ImageBackground style={themedStyle.image} source={article.image.imageSource}/>
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel} category='h5'>
            {article.title}
          </Text>
          <Text style={themedStyle.descriptionLabel} appearance='hint' category='s1'>
            {article.description}
          </Text>
        </View>
        <ArticleActivityBar style={themedStyle.activityContainer} comments={commentsCount} likes={article.likes} onCommentPress={this.onCommentsButtonPress} onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring photo={article.author.photo.imageSource} name={`${article.author.firstName} ${article.author.lastName}`} date={article.date}/>
        </ArticleActivityBar>
      </TouchableOpacity>);
    }
}
export const ArticleList1Item = withStyles(ArticleList1ItemComponent, (theme) => ({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    infoContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    activityContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    image: {
        height: 220,
    },
    titleLabel: textStyle.headline,
    descriptionLabel: Object.assign({ marginTop: 16 }, textStyle.subtitle),
}));
//# sourceMappingURL=articleList1Item.component.js.map