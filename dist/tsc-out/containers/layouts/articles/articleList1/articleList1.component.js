import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List } from 'react-native-ui-kitten/ui';
import { ArticleList1Item, } from './articleList1Item.component';
class ArticleList1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (article) => {
            this.props.onItemPress(article);
        };
        this.onItemLikePress = (article) => {
            this.props.onItemLikePress(article);
        };
        this.onItemCommentPress = (article) => {
            this.props.onItemCommentPress(article);
        };
        this.renderItem = (info) => {
            const { themedStyle } = this.props;
            return (<ArticleList1Item style={themedStyle.item} article={info.item} onPress={this.onItemPress} onLikePress={this.onItemLikePress} onCommentPress={this.onItemCommentPress}/>);
        };
    }
    render() {
        const { themedStyle, articles } = this.props;
        return (<List contentContainerStyle={themedStyle.container} data={articles} renderItem={this.renderItem}/>);
    }
}
export const ArticleList1 = withStyles(ArticleList1Component, (theme) => ({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: theme['background-basic-color-2'],
    },
    item: {
        marginVertical: 8,
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=articleList1.component.js.map