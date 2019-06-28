import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Input, Text, } from 'react-native-ui-kitten/ui';
import { BookHeader } from '@src/components/ecommerce';
import { CommentsList1 } from '@src/components/articles';
import { ContainerView, textStyle, } from '@src/components/common';
class BookDetailsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onBuyBook = () => {
            this.props.onBuyBook();
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
        const { themedStyle, book, comments, currentCommentText } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <BookHeader style={themedStyle.bookHeader} image={book.preview.imageSource} title={book.name} author={book.author} categories={book.categories} rating={book.rating} price={`${book.currency} ${book.price}`}/>
        <Button style={themedStyle.buyButton} textStyle={textStyle.button} onPress={this.onBuyBook}>
          BUY BOOK
        </Button>
        <View style={themedStyle.descriptionContainer}>
          <Text style={[themedStyle.sectionLabel, themedStyle.aboutLabel]} category='s1'>
            About Book
          </Text>
          <Text style={themedStyle.descriptionLabel} appearance='hint'>
            {book.description}
          </Text>
        </View>
        <View style={themedStyle.commentsContainer}>
          <View style={themedStyle.inputContainer}>
            <Text style={[themedStyle.sectionLabel, themedStyle.commentsLabel]} category='s1'>
              Comments
            </Text>
            <Input textStyle={textStyle.paragraph} placeholder='Write your comment' value={currentCommentText} onChangeText={this.onCommentTextChange} onSubmitEditing={this.handleTextSubmit}/>
          </View>
          <CommentsList1 data={comments} onLikePress={this.onCommentLikePress} onMorePress={this.onCommentMorePress} onReplyMorePress={this.onCommentReplyMorePress}/>
        </View>
      </ContainerView>);
    }
}
export const BookDetails = withStyles(BookDetailsComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    bookHeader: {
        paddingHorizontal: 16,
    },
    descriptionContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: theme['background-basic-color-2'],
    },
    commentsContainer: {
        paddingVertical: 24,
        backgroundColor: theme['background-basic-color-2'],
    },
    inputContainer: {
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    sectionLabel: textStyle.subtitle,
    aboutLabel: {
        marginBottom: 16,
    },
    commentsLabel: {
        marginBottom: 8,
    },
    descriptionLabel: textStyle.paragraph,
    buyButton: {
        marginVertical: 24,
        marginHorizontal: 16,
    },
}));
//# sourceMappingURL=bookDetails.component.js.map