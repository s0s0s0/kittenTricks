import React from 'react';
import { ImageBackground, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Avatar, Text, } from 'react-native-ui-kitten/ui';
import { ArticleActivityBar } from '../../../../components/articles';
import { ContainerView, textStyle, } from '../../../../components/common';
import { ClockIconOutline } from '../../../../assets/icons';
class Article2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onCommentButtonPress = () => {
            this.props.onCommentPress();
        };
        this.onLikeButtonPress = () => {
            this.props.onLikePress();
        };
    }
    render() {
        const { themedStyle, article } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <ImageBackground style={themedStyle.image} source={article.image.imageSource}>
          <Avatar style={themedStyle.authorPhoto} size='large' source={article.author.photo.imageSource}/>
        </ImageBackground>
          <Text style={themedStyle.titleLabel} category='h5'>
            {article.title}
          </Text>
          <Text style={themedStyle.contentLabel} category='s1'>
            {article.content}
          </Text>
          <ArticleActivityBar style={themedStyle.detailsContainer} comments={article.comments ? article.comments.length : 0} likes={article.likes} onCommentPress={this.onCommentButtonPress} onLikePress={this.onLikeButtonPress}>
            <View style={themedStyle.dateContainer}>
              {ClockIconOutline(themedStyle.dateIcon)}
              <Text style={themedStyle.dateLabel} appearance='hint' category='p2'>
                {article.date}
              </Text>
            </View>
          </ArticleActivityBar>
      </ContainerView>);
    }
}
export const Article2 = withStyles(Article2Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    detailsContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderTopWidth: 1,
        borderTopColor: theme['border-basic-color-2'],
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        minHeight: 175,
    },
    authorPhoto: {
        position: 'absolute',
        left: 24,
        bottom: -32,
        margin: 0,
        borderWidth: 2,
        borderColor: theme['border-basic-color-2'],
    },
    titleLabel: Object.assign({ marginHorizontal: 24, marginTop: 48 }, textStyle.headline),
    contentLabel: Object.assign({ flex: 1, marginHorizontal: 24, marginVertical: 24 }, textStyle.paragraph),
    dateLabel: Object.assign({ marginLeft: 8 }, textStyle.paragraph),
    dateIcon: {
        width: 24,
        height: 24,
        tintColor: theme['text-hint-color'],
    },
}));
//# sourceMappingURL=article2.component.js.map