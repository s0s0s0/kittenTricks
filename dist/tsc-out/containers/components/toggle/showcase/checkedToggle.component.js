import React from 'react';
import { Toggle, } from 'react-native-ui-kitten/ui';
class ToggleShowcaseComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checked: this.props.checked,
        };
        this.onChange = (checked) => {
            this.setState({ checked });
        };
    }
    render() {
        return (<Toggle {...this.props} checked={this.state.checked} onChange={this.onChange}/>);
    }
}
ToggleShowcaseComponent.defaultProps = {
    checked: true,
};
export const CheckedToggle = (props) => {
    return (<ToggleShowcaseComponent checked={true} {...props}/>);
};
//# sourceMappingURL=checkedToggle.component.js.map