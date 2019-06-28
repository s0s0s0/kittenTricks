import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../node_modules/react-native-ui-kitten/ui';
import { ChatMessage, } from './chatMessage.component';
import { Alignments, ChatFileMessageAppearance, getContentAlignment, } from './type';
import { getFileComponent } from './file.component';
import { textStyle } from '../common';
class ChatFileMessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderPreviewImage = () => {
            const { message, appearance } = this.props;
            return getFileComponent(message.file.type).view(message, appearance);
        };
        this.renderFullMessageAppearance = () => {
            const { index, alignment, themedStyle, message, } = this.props;
            return (<ChatMessage index={index} alignment={alignment} message={message}>
        <Text style={themedStyle.fileNameLabel} appearance='alternative' category='c1'>
          {message.file.name}
        </Text>
        {this.renderPreviewImage()}
      </ChatMessage>);
        };
        this.renderPreviewMessageAppearance = () => {
            const { themedStyle, alignment, message } = this.props;
            const style = {
                flexDirection: alignment === Alignments['ROW-LEFT'] ? 'row' : 'row-reverse',
            };
            return (<View style={style}>
        {this.renderPreviewImage()}
        <Text key={0} style={themedStyle.dateLabel} appearance='hint' category='c1'>
          {message.date}
        </Text>
      </View>);
        };
        this.renderContent = () => {
            const { appearance } = this.props;
            if (appearance === ChatFileMessageAppearance.full) {
                return this.renderFullMessageAppearance();
            }
            else {
                return this.renderPreviewMessageAppearance();
            }
        };
    }
    render() {
        const { style, alignment } = this.props;
        const flexStyle = getContentAlignment(alignment).style();
        return (<View style={[flexStyle, style]}>
        {this.renderContent()}
      </View>);
    }
}
ChatFileMessageComponent.defaultProps = {
    appearance: ChatFileMessageAppearance.full,
};
export const ChatFileMessage = withStyles(ChatFileMessageComponent, (theme) => ({
    dateLabel: Object.assign({ marginHorizontal: 26 }, textStyle.caption1),
    fileNameLabel: Object.assign({ color: 'white', marginRight: 16 }, textStyle.caption1),
}));
//# sourceMappingURL=chatFileMessage.component.js.map