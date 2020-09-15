import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  SafeAreaView, TextInput, Button, ActivityIndicator, View
} from 'react-native';
import styles from './styles';
import { serviceGetCountries } from '../../services/common';
import Toast from 'react-native-simple-toast';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerLoading: false,
      countryName: ''
    };
  }

  handleOnPress = async () => {
    const { navigation } = this.props;
    const { countryName } = this.state;
    this.setState({ innerLoading: true });
    const countriesData = await serviceGetCountries({ countryName: countryName });
    this.setState({ innerLoading: false });
    if (countriesData && countriesData.length > 0) {
      navigation.navigate('CountryListing', { countriesData: countriesData });
    } else {
      Toast.show("We couldn't find the country entered by you.", Toast.LONG);
    }
  };

  render() {
    const { innerLoading } = this.state;
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
          <TextInput
            style={styles.inputText}
            placeholder={"Enter country"}
            onChangeText={(text) => {
              this.setState({ countryName: text });
            }}
          />
          <Button
            title={"Submit"}
            color={"blue"}
            disabled={this.state.countryName !== '' ? false : true}
            onPress={this.handleOnPress}
          />
        </SafeAreaView>
      </>
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = ({ home }) => ({

});


export default connect(
  mapStateToProps,
  {},
)(Home);
