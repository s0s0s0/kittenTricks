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
import { ImageBackground, StyleSheet, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
class ImageOverlayComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.getOverlayColor = (source) => {
            const { themedStyle } = this.props;
            return source || themedStyle.overlay.backgroundColor;
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "children"]);
        // @ts-ignore: overlayColor (additional style property)
        const _b = StyleSheet.flatten(style), { overlayColor: derivedOverlayColor } = _b, containerStyle = __rest(_b, ["overlayColor"]);
        const overlayColor = this.getOverlayColor(derivedOverlayColor);
        return (<ImageBackground style={containerStyle} {...restProps}>
        <View style={[themedStyle.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>);
    }
}
export const ImageOverlay = withStyles(ImageOverlayComponent, (theme) => ({
    overlay: Object.assign({ backgroundColor: 'rgba(0, 0, 0, 0.45)' }, StyleSheet.absoluteFillObject),
}));
//# sourceMappingURL=imageOverlay.component.js.map