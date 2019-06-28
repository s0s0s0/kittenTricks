import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { ListItem, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { ActivityAuthoring, textStyle, } from '../../common';
import { MoreHorizontalIconFill } from '../../../assets/icons';
import { CommentList2 } from '../commentList2';
import { ArticleActivityBar } from '../articleActivityBar.component';
class CommentList1ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            repliesVisible: false,
        };
        this.onMorePress = () => {
            this.props.onMorePress(this.props.index);
        };
        this.onLikePress = () => {
            this.props.onLikePress(this.props.index);
        };
        this.onCommentPress = () => {
            const repliesVisible = !this.state.repliesVisible;
            this.setState({ repliesVisible });
        };
        this.onReplyMorePress = (index) => {
            this.props.onReplyMorePress(index);
        };
        this.shouldRenderReplies = () => {
            const { comment } = this.props;
            return comment.comments && comment.comments.length !== 0 && this.state.repliesVisible;
        };
        this.renderMoreIcon = () => {
            const { themedStyle } = this.props;
            return MoreHorizontalIconFill(themedStyle.moreIcon);
        };
        this.renderReplyList = () => {
            const { themedStyle, comment } = this.props;
            return (<CommentList2 style={themedStyle.repliesList} data={comment.comments} onItemMorePress={this.onReplyMorePress}/>);
        };
    }
    render() {
        const { style, themedStyle, comment } = this.props;
        const repliesElement = this.shouldRenderReplies() && this.renderReplyList();
        return (<ListItem style={[themedStyle.container, style]}>
        <View style={themedStyle.authorContainer}>
          <ActivityAuthoring style={themedStyle.activityAuthoring} photo={comment.author.photo.imageSource} name={`${comment.author.firstName} ${comment.author.lastName}`} date={comment.date}/>
          <TouchableOpacity activeOpacity={0.75} onPress={this.onMorePress}>
            {this.renderMoreIcon()}
          </TouchableOpacity>
        </View>
        <Text style={themedStyle.commentLabel} category='s1'>
          {comment.text}
        </Text>
        <ArticleActivityBar style={themedStyle.activityContainer} comments={comment.comments ? comment.comments.length : 0} likes={comment.likesCount} onCommentPress={this.onCommentPress} onLikePress={this.onLikePress}/>
        {repliesElement}
      </ListItem>);
    }
}
export const CommentList1Item = withStyles(CommentList1ItemComponent, (theme) => ({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityContainer: {
        marginTop: 24,
    },
    activityAuthoring: {
        flex: 1,
    },
    commentLabel: Object.assign({ marginLeft: 8, marginRight: 32, marginTop: 14 }, textStyle.paragraph),
    moreIcon: {
        width: 18,
        height: 18,
        tintColor: theme['text-hint-color'],
    },
    repliesList: {
        alignSelf: 'stretch',
        marginTop: 24,
    },
}));
//# sourceMappingURL=commentList1Item.component.js.map