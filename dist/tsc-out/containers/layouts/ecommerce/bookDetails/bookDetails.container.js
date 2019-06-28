import React from 'react';
import { book1 } from '@src/core/data/book';
import { comments } from '@src/core/data/comment';
import { profile1, profile2, profile3, profile4, } from '@src/core/data/profile';
import { BookDetails } from './bookDetails.component';
const profiles = [
    profile1,
    profile2,
    profile3,
    profile4,
];
export class BookDetailsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            book: book1,
            comments: comments,
            currentCommentText: '',
        };
        this.navigationKey = 'BookDetailsContainer';
        this.onBuyBookPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Payment',
            });
        };
        this.onCommentReplyMorePress = (index) => {
        };
        this.onCommentLikePress = (index) => {
        };
        this.onCommentMorePress = (index) => {
        };
        this.onCommentTextChange = (text) => {
            this.setState({ currentCommentText: text });
        };
        this.onCommentSubmit = () => {
            const commentsCopy = this.state.comments;
            commentsCopy.push({
                author: profiles[Math.floor(Math.random() * profiles.length)],
                text: this.state.currentCommentText,
                likesCount: 1,
                date: 'Today 10:36 pm',
            });
            this.setState({
                comments: commentsCopy,
                currentCommentText: '',
            });
        };
    }
    render() {
        return (<BookDetails book={this.state.book} comments={this.state.comments} currentCommentText={this.state.currentCommentText} onBuyBook={this.onBuyBookPress} onCommentTextChange={this.onCommentTextChange} onCommentSubmit={this.onCommentSubmit} onCommentLikePress={this.onCommentLikePress} onCommentMorePress={this.onCommentMorePress} onCommentReplyMorePress={this.onCommentReplyMorePress}/>);
    }
}
//# sourceMappingURL=bookDetails.container.js.map