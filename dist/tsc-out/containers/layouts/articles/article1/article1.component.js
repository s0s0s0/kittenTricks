import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { ArticleActivityBar, ArticleHeader, } from '../../../../components/articles';
import { ActivityAuthoring, ContainerView, textStyle, } from '../../../../components/common';
class Article1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onCommentButtonPress = () => {
            this.props.onCommentPress();
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress();
        };
    }
    render() {
        const { themedStyle, article } = this.props;
        const commentsCount = article.comments ? article.comments.length : 0;
        return (<ContainerView style={themedStyle.container}>
        <ArticleHeader source={article.image.imageSource} title={article.title} description={`${article.tips} Useful Tips`}/>
        <Text style={themedStyle.contentLabel} category='s1'>
          {article.content}
        </Text>
        <ArticleActivityBar style={themedStyle.activityContainer} comments={commentsCount} likes={article.likes} onCommentPress={this.onCommentButtonPress} onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring photo={article.author.photo.imageSource} name={`${article.author.firstName} ${article.author.lastName}`} date={article.date}/>
        </ArticleActivityBar>
      </ContainerView>);
    }
}
export const Article1 = withStyles(Article1Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    activityContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: theme['border-basic-color-2'],
    },
    contentLabel: Object.assign({ marginHorizontal: 24, marginVertical: 24, flex: 1 }, textStyle.paragraph),
}));
//# sourceMappingURL=article1.component.js.map