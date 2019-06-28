import React from 'react';
import { ImageBackground, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Input, Text, } from 'react-native-ui-kitten/ui';
import { CommentsList1 } from '@src/components/articles';
import { ContainerView, textStyle, } from '@src/components/common';
class Article3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onLikePress = (index) => {
            this.props.onCommentLikePress(index);
        };
        this.onMorePress = (index) => {
            this.props.onCommentMorePress(index);
        };
        this.onReplyMorePress = (index) => {
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
        const { themedStyle, article, comments, currentCommentText } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <Text style={themedStyle.titleLabel} category='h4'>
          {article.title}
        </Text>
        <Text style={themedStyle.descriptionLabel} category='s1'>
          {article.description}
        </Text>
        <ImageBackground style={themedStyle.image} source={article.image.imageSource}/>
        <Text style={themedStyle.contentLabel} category='s1'>
          {article.content}
        </Text>
        <View style={themedStyle.articleAuthorContainer}>
          <Text style={themedStyle.articleAuthorLabel} appearance='hint' category='p2'>
            {`By ${article.author.firstName} ${article.author.lastName}`}
          </Text>
          <Text style={themedStyle.articleDateLabel} appearance='hint' category='p2'>
            {article.date}
          </Text>
        </View>
        <View style={themedStyle.inputContainer}>
          <Text style={[themedStyle.inputLabel, themedStyle.inputSpace]} category='s1'>
            Comments
          </Text>
          <Input style={themedStyle.inputSpace} textStyle={textStyle.paragraph} placeholder='Write your comment' value={currentCommentText} onChangeText={this.onCommentTextChange} onSubmitEditing={this.handleTextSubmit}/>
        </View>
        <CommentsList1 data={comments} onLikePress={this.onLikePress} onMorePress={this.onMorePress} onReplyMorePress={this.onReplyMorePress}/>
      </ContainerView>);
    }
}
export const Article3 = withStyles(Article3Component, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    image: {
        minHeight: 240,
    },
    authorPhoto: {
        position: 'absolute',
        left: 24,
        bottom: -32,
        margin: 0,
        borderWidth: 2,
        borderColor: theme['border-basic-color-2'],
    },
    titleLabel: Object.assign({ marginHorizontal: 24, marginTop: 24, marginBottom: 16 }, textStyle.headline),
    descriptionLabel: Object.assign({ marginHorizontal: 24, marginVertical: 24 }, textStyle.subtitle),
    contentLabel: Object.assign({ marginHorizontal: 24, marginTop: 24, marginBottom: 16 }, textStyle.paragraph),
    articleAuthorContainer: {
        marginHorizontal: 24,
        flexDirection: 'row',
    },
    articleAuthorLabel: textStyle.paragraph,
    articleDateLabel: textStyle.paragraph,
    inputSpace: {
        marginHorizontal: 24,
    },
    inputContainer: {
        marginTop: 44,
        marginBottom: 24,
    },
    inputLabel: Object.assign({ marginBottom: 8 }, textStyle.subtitle),
}));
//# sourceMappingURL=article3.component.js.map