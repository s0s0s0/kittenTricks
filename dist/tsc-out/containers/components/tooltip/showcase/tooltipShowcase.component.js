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
import { Button, Tooltip, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { StyleSheet } from 'react-native';
export class TooltipShowcase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: this.props.visible,
        };
        this.onRequestClose = () => {
            this.setState({ visible: false });
        };
        this.onButtonPress = () => {
            this.setState({ visible: true });
        };
        this.tipDescription = () => {
            const { placement } = this.props;
            const rawValue = placement.toString();
            const tipValue = rawValue.replace(' ', '_').toUpperCase();
            return `Use 'PopoverPositions.${tipValue}' instead of '${rawValue}'`;
        };
    }
    render() {
        const _a = this.props, { style } = _a, restProps = __rest(_a, ["style"]);
        return (<Tooltip {...restProps} style={[styles.container, style]} visible={this.state.visible} text={this.tipDescription()} onRequestClose={this.onRequestClose}>
        <Button size='small' onPress={this.onButtonPress}>
          BUTTON
        </Button>
      </Tooltip>);
    }
}
TooltipShowcase.defaultProps = {
    visible: false,
    placement: 'left',
};
const styles = StyleSheet.create({
    container: {
        width: 228,
    },
});
//# sourceMappingURL=tooltipShowcase.component.js.map