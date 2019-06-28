import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, Button, } from 'react-native-ui-kitten/ui';
import { ArticleHeader } from '../../../../components/articles';
import { ArticleList4Item, } from './articleList4Item.component';
import { ContainerView, textStyle, } from '../../../../components/common';
class ArticleList4Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onReadButtonPress = () => {
            this.props.onItemPress(0);
        };
        this.onItemPress = (index) => {
            this.props.onItemPress(index + 1);
        };
        this.onItemCommentPress = (index) => {
            this.props.onItemCommentPress(index + 1);
        };
        this.onItemLikePress = (index) => {
            this.props.onItemLikePress(index + 1);
        };
        this.renderArticleItemElement = (item, index) => {
            const { themedStyle } = this.props;
            const isReverse = index % 2 === 1;
            const style = isReverse ? themedStyle.itemReverse : themedStyle.item;
            return (<ArticleList4Item style={style} photo={item.image.imageSource} title={item.title} comments={item.comments ? item.comments.length : 0} likes={item.likes} onPress={this.onItemPress} onCommentPress={this.onItemCommentPress} onLikePress={this.onItemLikePress}/>);
        };
        this.renderArticleItem = (info) => {
            const { item, index } = info;
            const articleElement = this.renderArticleItemElement(item, index);
            return React.cloneElement(articleElement, { index });
        };
    }
    render() {
        const { themedStyle, articles } = this.props;
        const [headingArticle, ...restArticles] = articles;
        return (<ContainerView style={themedStyle.container}>
        <ArticleHeader source={headingArticle.image.imageSource} title={headingArticle.title} description={`${headingArticle.tips} Useful Tips`}>
          <Button style={themedStyle.readButton} textStyle={textStyle.button} status='white' onPress={this.onReadButtonPress}>
            READ
          </Button>
        </ArticleHeader>
        <List data={restArticles} renderItem={this.renderArticleItem}/>
      </ContainerView>);
    }
}
export const ArticleList4 = withStyles(ArticleList4Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    item: {
        flex: 1,
    },
    itemReverse: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    readButton: {
        width: 200,
        marginTop: 32,
    },
}));
//# sourceMappingURL=articleList4.component.js.map