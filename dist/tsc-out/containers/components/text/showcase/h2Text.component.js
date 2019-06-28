import React from 'react';
import { Dimensions, StyleSheet, } from 'react-native';
import { Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '../../../../components/common';
const { width } = Dimensions.get('window');
export const H2Text = () => {
    return (<Text style={[textStyle.headline, styles.text]} category='h2'>
      Sample Text
    </Text>);
};
const styles = StyleSheet.create({
    text: {
        width: width * 0.55,
    },
});
//# sourceMappingURL=h2Text.component.js.map