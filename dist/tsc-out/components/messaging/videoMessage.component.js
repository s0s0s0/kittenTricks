import React from 'react';
import { ImageBackground, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { PlayCircleIconFill } from '@src/assets/icons';
import { ChatFileMessageAppearance } from './type';
class VideoMessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.isFullAppearance = (appearance) => {
            return appearance === ChatFileMessageAppearance.full;
        };
    }
    render() {
        const { themedStyle, appearance, message } = this.props;
        const isFull = this.isFullAppearance(appearance);
        const style = isFull ? themedStyle.fullMessageVideo : themedStyle.preViewAppearanceImage;
        const imageStyle = isFull ? themedStyle.fullMessageVideoPreview : themedStyle.preViewAppearanceImage;
        const iconStyle = isFull ? themedStyle.fullVideoIcon : themedStyle.previewVideoIcon;
        return (<ImageBackground key={2} source={message.file.preview.imageSource} style={style} imageStyle={imageStyle}>
        {PlayCircleIconFill(iconStyle)}
      </ImageBackground>);
    }
}
export const VideoMessage = withStyles(VideoMessageComponent, (theme) => ({
    fullMessageImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
    },
    fullMessageVideo: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullMessageVideoPreview: {
        borderRadius: 20,
    },
    preViewAppearanceImage: {
        width: 124,
        height: 124,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullVideoIcon: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    previewVideoIcon: {
        width: 50,
        height: 50,
        tintColor: 'white',
    },
}));
//# sourceMappingURL=videoMessage.component.js.map