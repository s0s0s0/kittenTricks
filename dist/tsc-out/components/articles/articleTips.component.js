import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../common';
class ArticleTipsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderIconElement = (style) => {
            return this.props.icon(style);
        };
    }
    render() {
        const { style, themedStyle, icon, children } = this.props;
        return (<View style={[themedStyle.container, style]}>
        {icon ? this.renderIconElement(themedStyle.icon) : null}
        <Text style={themedStyle.text}>
          {children}
        </Text>
      </View>);
    }
}
export const ArticleTips = withStyles(ArticleTipsComponent, (theme) => ({
    container: {
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 18,
        tintColor: 'white',
    },
    text: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=articleTips.component.js.map