import React from 'react';
import { ModalService } from 'react-native-ui-kitten/theme';
import { products } from '@src/core/data/product';
import { comments } from '@src/core/data/comment';
import { profile1, profile2, profile3, profile4, } from '@src/core/data/profile';
import { ProductDetails } from './productDetails.component';
import { BuyProductModal } from './buyProduct.modal';
const profiles = [
    profile1,
    profile2,
    profile3,
    profile4,
];
export class ProductDetailsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            product: products[1],
            comments: comments,
            currentCommentText: '',
        };
        this.onContinueShopping = () => {
        };
        this.onGoToCart = () => {
        };
        this.buyActions = [
            {
                title: 'Continue Shopping',
                action: this.onContinueShopping,
            },
            {
                title: 'Go To Card',
                action: this.onGoToCart,
            },
        ];
        this.onBuyPress = () => {
            this.modalId = ModalService.show(<BuyProductModal product={this.state.product} shoppingItemsCount={2} actionItems={this.buyActions} onCancel={this.closeModal}/>, true);
        };
        this.onCommentPress = (index) => {
        };
        this.onLikePress = (index) => {
        };
        this.onCommentItemPress = (index) => {
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
        this.closeModal = () => {
            ModalService.hide(this.modalId);
        };
    }
    render() {
        return (<ProductDetails product={this.state.product} comments={this.state.comments} currentCommentText={this.state.currentCommentText} onBuyPress={this.onBuyPress} onCommentTextChange={this.onCommentTextChange} onCommentSubmit={this.onCommentSubmit} onCommentLikePress={this.onLikePress} onCommentMorePress={this.onCommentItemPress} onCommentReplyMorePress={this.onCommentPress}/>);
    }
}
//# sourceMappingURL=productDetails.container.js.map