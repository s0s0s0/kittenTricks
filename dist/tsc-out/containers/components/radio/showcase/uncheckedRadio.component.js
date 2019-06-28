import React from 'react';
import { Radio, } from 'react-native-ui-kitten/ui';
class RadioShowcaseComponent extends React.Component {
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
        return (<Radio {...this.props} checked={this.state.checked} onChange={this.onChange}/>);
    }
}
RadioShowcaseComponent.defaultProps = {
    checked: true,
};
export const UncheckedRadio = (props) => {
    return (<RadioShowcaseComponent checked={false} {...props}/>);
};
//# sourceMappingURL=uncheckedRadio.component.js.map