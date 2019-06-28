import React from 'react';
import { Tab, TabView, Text, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '@src/assets/icons';
class IconTabViewShowcase extends React.Component {
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
        <Tab icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab icon={StarIconFill}>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>);
    }
}
export const IconTabView = (props) => {
    return (<IconTabViewShowcase {...props}/>);
};
//# sourceMappingURL=iconTabView.component.js.map