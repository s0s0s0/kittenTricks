import React from 'react';
import { Tab, TabView, Text, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
class IconTitleTabViewShowcase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedIndex: this.props.selectedIndex,
        };
        this.onTabSelect = (selectedIndex) => {
            this.setState({ selectedIndex });
        };
    }
    render() {
        return (<TabView selectedIndex={this.state.selectedIndex} onSelect={this.onTabSelect}>
        <Tab title='TAB 1' icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 2' icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 3' icon={StarIconFill}>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>);
    }
}
export const IconTitleTabView = (props) => {
    return (<IconTitleTabViewShowcase {...props}/>);
};
//# sourceMappingURL=iconTitleTabView.component.js.map