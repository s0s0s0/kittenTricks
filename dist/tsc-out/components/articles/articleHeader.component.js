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
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../node_modules/react-native-ui-kitten/ui';
import { ImageOverlay, textStyle, } from '../common';
class ArticleHeaderComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, title, description, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "title", "description", "children"]);
        const { button: buttonStyle } = themedStyle, componentStyle = __rest(themedStyle, ["button"]);
        return (<ImageOverlay {...restProps} style={[componentStyle.container, style]}>
        <Text style={componentStyle.titleLabel} category='h3'>
          {title}
        </Text>
        <Text style={componentStyle.descriptionLabel} category='h6'>
          {description}
        </Text>
        {children}
      </ImageOverlay>);
    }
}
export const ArticleHeader = withStyles(ArticleHeaderComponent, (theme) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 64,
    },
    titleLabel: Object.assign({ textAlign: 'center', color: 'white' }, textStyle.headline),
    descriptionLabel: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=articleHeader.component.js.map