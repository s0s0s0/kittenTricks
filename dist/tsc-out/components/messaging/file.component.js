import React from 'react';
import { FileType, } from '../../core/model';
import { VideoMessage } from './videoMessage.component';
import { PhotoMessage } from './photoMessage.component';
const types = {
    [FileType.photo]: {
        view(message, appearance) {
            return (<PhotoMessage appearance={appearance} message={message}/>);
        },
    },
    [FileType.video]: {
        view(message, appearance) {
            return (<VideoMessage appearance={appearance} message={message}/>);
        },
    },
};
export function getFileComponent(type) {
    return types[type];
}
//# sourceMappingURL=file.component.js.map