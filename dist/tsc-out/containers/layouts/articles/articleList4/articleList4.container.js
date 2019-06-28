import React from 'react';
import { articles } from '../../../../core/data/article';
import { ArticleList4 } from './articleList4.component';
export class ArticleList4Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            articles: articles,
        };
        this.onItemPress = (index) => {
        };
        this.onItemLikePress = (index) => {
        };
        this.onItemCommentPress = (index) => {
        };
    }
    render() {
        return (<ArticleList4 articles={articles} onItemPress={this.onItemPress} onItemLikePress={this.onItemLikePress} onItemCommentPress={this.onItemCommentPress}/>);
    }
}
//# sourceMappingURL=articleList4.container.js.map