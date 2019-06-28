import React from 'react';
import { articles } from '@src/core/data/article';
import { Article2 } from './article2.component';
export class Article2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            article: articles[0],
        };
        this.onCommentPress = () => {
        };
        this.onLikePress = () => {
        };
    }
    render() {
        return (<Article2 article={this.state.article} onCommentPress={this.onCommentPress} onLikePress={this.onLikePress}/>);
    }
}
//# sourceMappingURL=article2.container.js.map