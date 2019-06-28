import React from 'react';
import { articles } from '../../../../core/data/article';
import { ArticleList1 } from './articleList1.component';
export class ArticleList1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            articles: articles,
        };
        this.onItemPress = (article) => {
        };
        this.onItemLikePress = (article) => {
        };
        this.onItemCommentPress = (article) => {
        };
    }
    render() {
        return (<ArticleList1 articles={articles} onItemPress={this.onItemPress} onItemLikePress={this.onItemLikePress} onItemCommentPress={this.onItemCommentPress}/>);
    }
}
//# sourceMappingURL=articleList1.container.js.map