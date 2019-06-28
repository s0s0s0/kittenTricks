var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { ActivityAuthoring, textStyle, } from '../../common';
import { ListItem, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { MoreHorizontalIconFill } from '../../../assets/icons';
class CommentList2ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onMorePress = () => {
            this.props.onMorePress(this.props.index);
        };
        this.renderMoreIcon = () => {
            const { themedStyle } = this.props;
            return MoreHorizontalIconFill(themedStyle.moreIcon);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, data } = _a, restProps = __rest(_a, ["style", "themedStyle", "data"]);
        return (<ListItem style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.authorContainer}>
          <ActivityAuthoring style={themedStyle.activityAuthoring} photo={data.author.photo.imageSource} name={`${data.author.firstName} ${data.author.lastName}`} date={data.date}/>
          <TouchableOpacity activeOpacity={0.75} onPress={this.onMorePress}>
            {this.renderMoreIcon()}
          </TouchableOpacity>
        </View>
        <Text style={themedStyle.commentLabel} category='s1'>
          {data.text}
        </Text>
      </ListItem>);
    }
}
export const CommentList2Item = withStyles(CommentList2ItemComponent, (theme) => ({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 10,
        backgroundColor: theme['background-basic-color-1'],
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityAuthoring: {
        flex: 1,
    },
    moreIcon: {
        width: 18,
        height: 18,
        tintColor: theme['text-hint-color'],
    },
    commentLabel: Object.assign({ marginTop: 14 }, textStyle.paragraph),
}));
//# sourceMappingURL=commentList2Item.component.js.map