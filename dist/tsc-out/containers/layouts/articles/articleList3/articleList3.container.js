import React from 'react';
import { articles } from '@src/core/data/article';
import { ArticleList3 } from './articleList3.component';
export class ArticleList3Container extends React.Component {
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
        return (<ArticleList3 articles={articles} onItemPress={this.onItemPress} onItemLikePress={this.onItemLikePress} onItemCommentPress={this.onItemCommentPress}/>);
    }
}
//# sourceMappingURL=articleList3.container.js.map