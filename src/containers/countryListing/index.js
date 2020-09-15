import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Text, SafeAreaView, View, TouchableOpacity, ActivityIndicator, Alert
} from 'react-native';
import styles from './styles';
import { serviceGetWeather } from '../../services/common';
import Toast from 'react-native-simple-toast';

class CountryListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerLoading: false,
      countriesData: props.navigation.getParam("countriesData") || [],
    };
  }

  getWeather = async (capitalName) => {
    const { navigation } = this.props;
    this.setState({ innerLoading: true });
    const wheatherDetails = await serviceGetWeather({ capitalName: capitalName });
    console.log("wheatherDetails: ", wheatherDetails);
    this.setState({ innerLoading: false });
    navigation.navigate('WeatherDetails', { wheatherDetails: wheatherDetails });
  }

  render() {
    const { navigation } = this.props;
    const { innerLoading, countriesData } = this.state;

    return (
      <>
        {
          innerLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator
                size="large"
                color="blue"
              />
            </View>
          ) : null
        }
        <SafeAreaView style={styles.container}>
          <View style={styles.countriesContainer}>
            {
              countriesData.length > 0 ?
                countriesData.map((item, index) => {
                  return (
                    <View
                      key={`single_country_${index}`}
                      style={styles.singleCountry}
                    >

                      <Text>{`Capital: ${item.capital}`}</Text>
                      <Text>{`Population: ${item.population}`}</Text>
                      <Text>{`latlng: ${item.latlng[0]}, ${item.latlng[1]}`}</Text>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                          this.getWeather(item.capital);
                        }}
                      >
                        <Text style={styles.buttonTextStyle}>{`Capital Weather`}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                })
                : null
            }
          </View>
        </SafeAreaView>
      </>
    );
  }
}
CountryListing.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = () => ({

});

export default connect(
  mapStateToProps,
  {},
)(CountryListing);
