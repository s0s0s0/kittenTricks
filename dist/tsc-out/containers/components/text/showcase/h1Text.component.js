import React from 'react';
import { Dimensions, StyleSheet, } from 'react-native';
import { Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
const { width } = Dimensions.get('window');
export const H1Text = () => {
    return (<Text style={[textStyle.headline, styles.text]} numberOfLines={1} ellipsizeMode='tail' category='h1'>
      Sample Text
    </Text>);
};
const styles = StyleSheet.create({
    text: {
        width: width * 0.55,
    },
});
//# sourceMappingURL=h1Text.component.js.map