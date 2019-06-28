import React from 'react';
import { articles } from '../../../../core/data/article';
import { profile1, profile2, profile3, profile4, } from '../../../../core/data/profile';
import { comments } from '../../../../core/data/comment';
import { Article3 } from './article3.component';
const profiles = [
    profile1,
    profile2,
    profile3,
    profile4,
];
export class Article3Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            article: articles[0],
            comments: comments,
            currentCommentText: '',
        };
        this.onLikePress = (index) => {
        };
        this.onMorePress = (index) => {
        };
        this.onReplyMorePress = (index) => {
        };
        this.onCommentTextChange = (text) => {
            this.setState({ currentCommentText: text });
        };
        this.onCommentSubmit = () => {
            const articleCopy = this.state.article;
            articleCopy.comments.push({
                author: profiles[Math.floor(Math.random() * profiles.length)],
                text: this.state.currentCommentText,
                likesCount: 1,
                date: 'Today 10:36 pm',
            });
            this.setState({
                article: articleCopy,
                currentCommentText: '',
            });
        };
    }
    render() {
        return (<Article3 article={this.state.article} comments={this.state.comments} currentCommentText={this.state.currentCommentText} onCommentTextChange={this.onCommentTextChange} onCommentSubmit={this.onCommentSubmit} onCommentLikePress={this.onLikePress} onCommentMorePress={this.onMorePress} onCommentReplyMorePress={this.onReplyMorePress}/>);
    }
}
//# sourceMappingURL=article3.container.js.map