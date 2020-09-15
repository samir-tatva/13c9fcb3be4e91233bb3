import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Text, SafeAreaView, View, Image
} from 'react-native';
import styles from './styles';

class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheatherDetails: props.navigation.getParam("wheatherDetails") || {},
    };
  }

  render() {
    const { wheatherDetails } = this.state;
    console.log("wheatherDetails: ", wheatherDetails);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.countriesContainer}>
          <Text>{`Weather details of ${wheatherDetails.location.name}`}</Text>
          {
            wheatherDetails.current.weather_icons.length > 0 ? (
              <Image style={{ width: 50, height: 50 }} source={{ uri: wheatherDetails.current.weather_icons[0] }} />
            ) : null
          }
          <Text>{`Temperature: ${wheatherDetails.current.temperature}`}</Text>
          <Text>{`wind_speed: ${wheatherDetails.current.wind_speed}`}</Text>
          <Text>{`precip: ${wheatherDetails.current.precip}`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
WeatherDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = () => ({

});

export default connect(
  mapStateToProps,
  {},
)(WeatherDetails);
