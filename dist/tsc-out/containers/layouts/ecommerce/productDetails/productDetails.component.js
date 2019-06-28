import React from 'react';
import { View } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Input, Text, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { CommentsList1 } from '../../../../components/articles';
import { ProductInfo } from '../../../../components/ecommerce';
import { ContainerView, textStyle, } from '../../../../components/common';
class ProductDetailsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedColorIndex: 0,
        };
        this.onBuyPress = () => {
            this.props.onBuyPress();
        };
        this.onProductColorSelect = (selectedColorIndex) => {
            this.setState({ selectedColorIndex });
        };
        this.onCommentLikePress = (index) => {
            this.props.onCommentLikePress(index);
        };
        this.onCommentMorePress = (index) => {
            this.props.onCommentMorePress(index);
        };
        this.onCommentReplyMorePress = (index) => {
            this.props.onCommentReplyMorePress(index);
        };
        this.onCommentTextChange = (text) => {
            this.props.onCommentTextChange(text);
        };
        this.handleTextSubmit = () => {
            this.props.onCommentSubmit();
        };
    }
    render() {
        const { themedStyle, product, comments, currentCommentText } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <ProductInfo image={product.photo.imageSource} name={product.name} type={product.type} price={`${product.cost} ${product.currency}`} description={product.description} size={product.size} colors={product.colors} selectedColorIndex={this.state.selectedColorIndex} onColorSelect={this.onProductColorSelect}/>
        <Button style={themedStyle.buyButton} textStyle={textStyle.button} size='giant' onPress={this.onBuyPress}>
          BUY
        </Button>
        <View style={themedStyle.commentsContainer}>
          <Text style={themedStyle.inputLabel} category='s1'>
            Comments
          </Text>
          <Input style={themedStyle.input} textStyle={textStyle.paragraph} placeholder='Write your comment' value={currentCommentText} onChangeText={this.onCommentTextChange} onSubmitEditing={this.handleTextSubmit}/>
          <CommentsList1 data={comments} onLikePress={this.onCommentLikePress} onMorePress={this.onCommentMorePress} onReplyMorePress={this.onCommentReplyMorePress}/>
        </View>
      </ContainerView>);
    }
}
export const ProductDetails = withStyles(ProductDetailsComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    commentsContainer: {
        paddingHorizontal: 8,
        paddingVertical: 24,
        backgroundColor: theme['background-basic-color-2'],
    },
    input: {
        marginHorizontal: 16,
        marginBottom: 24,
    },
    inputLabel: Object.assign({ marginBottom: 8, marginHorizontal: 16 }, textStyle.subtitle),
    buyButton: {
        marginHorizontal: 16,
        marginVertical: 24,
    },
}));
//# sourceMappingURL=productDetails.component.js.map