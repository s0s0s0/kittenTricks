import React from 'react';
import { List, ListItem, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
import { BottomEndTooltip } from '../../tooltip/showcase';
export const AccessoryList = () => {
    const data = Array(4).fill({
        title: 'Title',
        description: [
            'Once upon a time when pigs spoke rhyme',
            'and monkeys chewed tobacco...',
        ].join(' '),
    });
    const renderAccessory = () => {
        return BottomEndTooltip({ indicatorOffset: 12 });
    };
    const renderItem = (info) => {
        const { title, description } = info.item;
        return (<ListItem title={title} description={description} icon={StarIconFill} accessory={renderAccessory}/>);
    };
    return (<List data={data} renderItem={renderItem}/>);
};
//# sourceMappingURL=accessoryList.component.js.map