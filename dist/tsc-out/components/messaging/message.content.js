import React from 'react';
import { LeftMessage } from './leftMessage.component';
import { RightMessage } from './rightMessage.component';
import { Alignments } from './type';
const messageContents = {
    [Alignments['ROW-LEFT']]: {
        view(message, children) {
            return (<LeftMessage message={message}>
          {children}
        </LeftMessage>);
        },
    },
    [Alignments['ROW-RIGHT']]: {
        view(message, children) {
            return (<RightMessage message={message}>
          {children}
        </RightMessage>);
        },
    },
};
export function getMessageContent(alignment) {
    return messageContents[alignment];
}
//# sourceMappingURL=message.content.js.map