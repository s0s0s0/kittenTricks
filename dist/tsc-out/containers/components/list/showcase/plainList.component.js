import React from 'react';
import { List, ListItem, } from 'react-native-ui-kitten/ui';
export const PlainList = () => {
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
        return (<ListItem title={title} description={description}/>);
    };
    return (<List data={data} renderItem={renderItem}/>);
};
//# sourceMappingURL=plainList.component.js.map