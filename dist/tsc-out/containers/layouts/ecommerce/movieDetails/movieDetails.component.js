import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { MovieDetailList, MovieHeader, MovieScreenshotList, } from '../../../../components/ecommerce';
import { ContainerView, textStyle, } from '../../../../components/common';
class MovieDetailsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onScreenshotItemPress = (index) => {
            this.props.onScreenshotPress(index);
        };
        this.onBuyTicket = () => {
            this.props.onBuyTicket();
        };
    }
    render() {
        const { themedStyle, movie } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <MovieHeader style={themedStyle.movieHeader} image={movie.preview.imageSource} title={movie.name} description={movie.part} categories={movie.categories} rating={movie.rating}/>
        <View style={themedStyle.bottomSectionContainer}>
          <MovieDetailList style={themedStyle.techInfoContainer} data={movie.details}/>
          <Text style={themedStyle.sectionLabel} category='s1'>
            About Movie
          </Text>
          <Text style={themedStyle.descriptionLabel} appearance='hint' category='s1'>
            {movie.description}
          </Text>
          <Text style={themedStyle.sectionLabel} category='s1'>
            Screenshots
          </Text>
          <MovieScreenshotList style={themedStyle.screenshotList} contentContainerStyle={themedStyle.screenshotListContent} data={movie.screenshots} onItemPress={this.onScreenshotItemPress}/>
          <Button style={themedStyle.buyButton} textStyle={textStyle.button} size='large' onPress={this.onBuyTicket}>
            BUY TICKET
          </Button>
        </View>
      </ContainerView>);
    }
}
export const Movie = withStyles(MovieDetailsComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    movieHeader: {
        paddingHorizontal: 64,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    bottomSectionContainer: {
        paddingTop: 24,
        paddingBottom: 32,
    },
    techInfoContainer: {
        justifyContent: 'space-between',
        marginHorizontal: 48,
        marginBottom: 32,
    },
    sectionLabel: Object.assign({ marginHorizontal: 16, marginBottom: 16 }, textStyle.subtitle),
    descriptionLabel: Object.assign({ marginHorizontal: 16, marginBottom: 32 }, textStyle.subtitle),
    screenshotList: {
        backgroundColor: theme['background-basic-color-1'],
    },
    screenshotListContent: {
        marginHorizontal: 8,
        marginBottom: 24,
    },
    buyButton: {
        marginHorizontal: 16,
    },
}));
//# sourceMappingURL=movieDetails.component.js.map