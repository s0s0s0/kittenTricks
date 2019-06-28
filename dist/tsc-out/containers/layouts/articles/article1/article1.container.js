import React from 'react';
import { Article1 } from './article1.component';
import { articles } from '../../../../core/data/article';
export class Article1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            article: articles[0],
        };
        this.onButtonPress = () => {
        };
        this.onCommentPress = () => {
        };
        this.onLikePress = () => {
        };
    }
    render() {
        return (<Article1 article={this.state.article} onButtonPress={this.onButtonPress} onCommentPress={this.onCommentPress} onLikePress={this.onLikePress}/>);
    }
}
//# sourceMappingURL=article1.container.js.map