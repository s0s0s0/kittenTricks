import React from 'react';
import { Dimensions, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
import { MessageContent } from './messageContent.component';
class LeftMessageComponent extends React.Component {
    render() {
        const { themedStyle, message, children } = this.props;
        return [
            <View style={themedStyle.cloudContainer} key={0}>
        <View style={[themedStyle.triangle, themedStyle.triangleLeft]}/>
        <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
          <MessageContent message={message}>
            {children}
          </MessageContent>
        </View>
      </View>,
            <Text key={1} style={themedStyle.dateLabel} appearance='hint' category='c1'>
        {message.date}
      </Text>,
        ];
    }
}
export const LeftMessage = withStyles(LeftMessageComponent, (theme) => ({
    triangle: {
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
    },
    triangleLeft: {
        transform: [{ rotate: '-90deg' }],
        borderBottomColor: theme['color-primary-default'],
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
    cloudLeft: {
        left: -3,
        backgroundColor: theme['color-primary-default'],
        marginRight: 16,
    },
}));
//# sourceMappingURL=leftMessage.component.js.map