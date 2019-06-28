import React from 'react';
import { Dimensions, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '../common';
import { MessageContent } from './messageContent.component';
class RigheMessageComponent extends React.Component {
    render() {
        const { themedStyle, message, children } = this.props;
        return [
            <Text key={0} style={themedStyle.dateLabel} appearance='hint' category='c1'>{message.date}
      </Text>,
            <View style={themedStyle.cloudContainer} key={1}>
        <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
          <MessageContent message={message}>
            {children}
          </MessageContent>
        </View>
        <View style={[themedStyle.triangle, themedStyle.triangleRight]}/>
      </View>,
        ];
    }
}
export const RightMessage = withStyles(RigheMessageComponent, (theme) => ({
    triangle: {
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
    },
    triangleRight: {
        transform: [{ rotate: '90deg' }],
        borderBottomColor: theme['text-hint-color'],
    },
    cloudContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateLabel: textStyle.caption1,
    cloud: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        maxWidth: Dimensions.get('window').width - 120,
    },
    cloudRight: {
        left: 3,
        backgroundColor: theme['text-hint-color'],
        marginLeft: 16,
    },
}));
//# sourceMappingURL=rightMessage.component.js.map