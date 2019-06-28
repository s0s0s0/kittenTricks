import React from 'react';
import { Image, } from 'react-native';
export class RemoteIcon {
    constructor(source) {
        this.source = source;
    }
    get imageSource() {
        return { uri: this.source };
    }
}
export const Icon = (source, style) => {
    return (<Image style={style} source={source.imageSource}/>);
};
//# sourceMappingURL=icon.component.js.map