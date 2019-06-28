import React from 'react';
import { List, ListItem, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
export const IconList = () => {
    const data = Array(4).fill({
        title: 'Title',
        description: [
            'Once upon a time when pigs spoke rhyme',
            'and monkeys chewed tobacco,',
            'and hens took snuff to make them tough,',
            'and ducks went quack, quack, quack, O!',
        ].join(' '),
    });
    const renderItem = (info) => {
        const { title, description } = info.item;
        return (<ListItem title={title} description={description} icon={StarIconFill}/>);
    };
    return (<List data={data} renderItem={renderItem}/>);
};
//# sourceMappingURL=iconList.component.js.map