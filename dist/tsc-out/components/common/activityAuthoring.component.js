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
import { View, } from 'react-native';
import { Text } from 'react-native-ui-kitten/ui';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Avatar } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common/style';
class ActivityAuthoringComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, photo, name, date } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "name", "date"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Avatar style={themedStyle.authorPhoto} source={photo}/>
        <View style={themedStyle.authorInfoContainer}>
          <Text style={themedStyle.authorNameLabel}>{name}</Text>
          <Text style={themedStyle.dateLabel} appearance='hint' category='p2'>
            {date}
          </Text>
        </View>
      </View>);
    }
}
export const ActivityAuthoring = withStyles(ActivityAuthoringComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorInfoContainer: {
        marginLeft: 16,
    },
    authorPhoto: {
        margin: 0,
    },
    authorNameLabel: textStyle.subtitle,
    dateLabel: textStyle.paragraph,
}));
//# sourceMappingURL=activityAuthoring.component.js.map