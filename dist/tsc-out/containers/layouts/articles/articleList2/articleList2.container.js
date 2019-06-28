import React from 'react';
import { articles } from '@src/core/data/article';
import { ArticleList2 } from './articleList2.component';
export class ArticleList2Container extends React.Component {
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
        return (<ArticleList2 articles={articles} onItemPress={this.onItemPress} onItemLikePress={this.onItemLikePress} onItemCommentPress={this.onItemCommentPress}/>);
    }
}
//# sourceMappingURL=articleList2.container.js.map