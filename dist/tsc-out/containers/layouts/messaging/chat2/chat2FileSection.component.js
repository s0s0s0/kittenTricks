import React from 'react';
import { Image, ScrollView, TouchableOpacity, View, } from 'react-native';
import { Camera } from 'expo-camera';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, ListItem, Text, } from 'react-native-ui-kitten/ui';
import { CameraIconFill, FileTextIconFill, ImageIconFill, MapIconFill, PeopleIconFill, } from '@src/assets/icons';
import { textStyle } from '@src/components/common';
class Chat2FileSectionComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            addActions: [
                {
                    title: 'Photo or Video',
                    icon: ImageIconFill(this.props.themedStyle.actionIcon),
                },
                {
                    title: 'File',
                    icon: FileTextIconFill(this.props.themedStyle.actionIcon),
                },
                {
                    title: 'Location',
                    icon: MapIconFill(this.props.themedStyle.actionIcon),
                },
                {
                    title: 'Contact',
                    icon: PeopleIconFill(this.props.themedStyle.actionIcon),
                },
            ],
        };
        this.onTakePhotoPress = () => {
            this.props.onTakePhotoButtonPress();
        };
        this.onGalleryItemPress = (item) => {
            this.props.onGalleryItemPress(item);
        };
        this.onAddActionItemPress = (index) => {
            const { onPhotoOrVideoButtonPress, onFileButtonPress, onLocationButtonPress, onContactButtonPress, } = this.props;
            switch (index) {
                case 0:
                    onPhotoOrVideoButtonPress();
                    break;
                case 1:
                    onFileButtonPress();
                    break;
                case 2:
                    onLocationButtonPress();
                    break;
                case 3:
                    onContactButtonPress();
                    break;
            }
        };
        this.onCancelPress = () => {
            this.props.onCancelButtonPress();
        };
        this.renderPhotoItemIcon = (style) => {
            const { themedStyle } = this.props;
            return CameraIconFill(Object.assign({}, style, themedStyle.cameraIcon));
        };
        this.renderPhotoItem = () => {
            const { themedStyle } = this.props;
            return (<View style={themedStyle.pagerItem} key={0}>
        <Camera type={Camera.Constants.Type.back} style={themedStyle.cameraView}>
          <View style={themedStyle.cameraContentContainer}>
            <Button textStyle={textStyle.button} appearance='ghost' icon={this.renderPhotoItemIcon} onPress={this.onTakePhotoPress}/>
          </View>
        </Camera>
      </View>);
        };
        this.renderGalleryItem = (item, index) => {
            const { themedStyle } = this.props;
            return (<TouchableOpacity key={index + 1} activeOpacity={0.95} onPress={() => this.onGalleryItemPress(item)}>
        <Image source={{ uri: item.uri }} style={themedStyle.pagerItem}/>
      </TouchableOpacity>);
        };
        this.renderPagerContent = () => {
            const { galleryFiles } = this.props;
            return [
                this.renderPhotoItem(),
                ...galleryFiles.map(this.renderGalleryItem),
            ];
        };
        this.renderGallery = () => {
            const { themedStyle } = this.props;
            return (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={themedStyle.pagerContainer} contentContainerStyle={themedStyle.pagerContent}>
        {this.renderPagerContent()}
      </ScrollView>);
        };
        this.renderAddAction = (item, index) => {
            const { themedStyle } = this.props;
            return (<ListItem key={index} index={index} style={themedStyle.actionItemContainer} onPress={this.onAddActionItemPress}>
        <Text style={themedStyle.addActionLabel} category='s2'>
          {item.title}
        </Text>
        {item.icon}
      </ListItem>);
        };
        this.renderAddActions = () => {
            const { addActions } = this.state;
            return addActions.map(this.renderAddAction);
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<View style={themedStyle.container}>
        {this.renderGallery()}
        {this.renderAddActions()}
        <Button style={themedStyle.cancelButton} textStyle={textStyle.button} appearance='ghost' onPress={this.onCancelPress}>
          Cancel
        </Button>
      </View>);
    }
}
export const Chat2FileSection = withStyles(Chat2FileSectionComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    pagerContainer: {
        marginBottom: 16,
    },
    pagerContent: {
        paddingHorizontal: 8,
    },
    pagerItem: {
        width: 72,
        height: 72,
        borderRadius: 20,
        marginHorizontal: 8,
    },
    cameraView: {
        flex: 1,
        borderRadius: 20,
    },
    cameraContentContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    cameraIcon: {
        tintColor: 'white',
        width: 25,
        height: 25,
    },
    actionIcon: {
        width: 20,
        height: 20,
        tintColor: theme['text-hint-color'],
    },
    actionItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    addActionLabel: textStyle.subtitle,
    cancelButton: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        marginTop: 32,
    },
}));
//# sourceMappingURL=chat2FileSection.component.js.map