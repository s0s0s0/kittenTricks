import React from 'react';
import { Image, } from 'react-native';
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { ChatFileMessageAppearance } from './type';
class PhotoMessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.isFullAppearance = (appearance) => {
            return appearance === ChatFileMessageAppearance.full;
        };
    }
    render() {
        const { themedStyle, appearance, message } = this.props;
        const isFull = this.isFullAppearance(appearance);
        const style = isFull ? themedStyle.fullMessageImage : themedStyle.preViewAppearanceImage;
        return (<Image key={2} style={style} source={message.file.preview.imageSource}/>);
    }
}
export const PhotoMessage = withStyles(PhotoMessageComponent, (theme) => ({
    fullMessageImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
    },
    preViewAppearanceImage: {
        width: 124,
        height: 124,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
//# sourceMappingURL=photoMessage.component.js.map