import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Layout, Text, Button, Icon} from '@ui-kitten/components';
import CustomTextInput from './CustomTextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ae60',
  },
  topContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  customLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  customInput: {
    padding: 12,
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
    margin: 5,
  },
  cableCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  startingCableCount: {
    flex: 1,
  },
  endingCableCount: {
    flex: 1,
  },
  searchButton: {
    marginTop: 10,
    backgroundColor: '#2ecc71',
  },
  acceptedLabel: {
    color: '#2ECC71',
  },
  normalColor: {
    color: '#2c3e50',
  },
  acceptedInput: {
    borderColor: '#2ECC71',
  },
  invalidLabel: {
    color: '#e84118',
  },
  invalidInput: {
    borderColor: '#e84118',
  },
  infoIcon: {
    width: 24,
    height: 24,
  },
  infoMessageContainer: {
    paddingLeft: 5,
    marginTop: 5,
  },
  infoMessages: {
    flexDirection: 'row',
    fontSize: 24,
    marginTop: 5,
  },
  textlg: {
    fontSize: 18,
  },
});

const searchIcon = props => <Icon {...props} name="search-outline" />;

const SearchScreen = ({navigation}) => {
  const [values, setValues] = React.useState({
    dotPair: '',
    startingPair: '',
    endingPair: '',
  });

  const handleChanges = event => {
    const {name, value} = event;
    const filteredValue = parseInt(value.replace(/[^0-9]/g, ''));

    setValues(prevState => ({
      ...prevState,
      [name]: isNaN(filteredValue) ? '' : filteredValue,
    }));
  };

  const asyncSearch = async () => {
    var host = `https://apis.hasanarif.com/colorcodes/${
      values.dotPair
    }?startingPair=${values.startingPair}&endingPair=${values.endingPair}`;
    if (isNaN(values.startingPair) && isNaN(values.endingPair)) {
      host = `https://apis.hasanarif.com/colorcodes/${values.dotPair}`;
    }
    if (
      values.dotPair !== undefined &&
      values.dotPair !== '' &&
      values.dotPair !== 0
    ) {
      const searchR = await getSearchData(host);
      setValues({});
      navigation.navigate('Result', {
        searchResult: searchR.data,
        hasBinderData: searchR.data.binderColorCode !== null,
      });
    } else {
      setValues(prevState => ({
        ...prevState,
        ['dotPair']: 0,
      }));
    }
  };
  const getSearchData = async host => {
    return axios.get(host).then(res => res);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.topContainer}
        keyboardShouldPersistTaps="handled">
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        <Text
          style={[
            styles.customLabel,
            values.dotPair === 0
              ? styles.invalidLabel
              : values.dotPair === undefined || values.dotPair === ''
              ? styles.normalColor
              : styles.acceptedLabel,
          ]}>
          DOT PAIR *
        </Text>
        <CustomTextInput
          style={[
            styles.customInput,
            values.dotPair === 0
              ? styles.invalidInput
              : values.dotPair === undefined || values.dotPair === ''
              ? styles.normalColor
              : styles.acceptedInput,
          ]}
          type="number"
          name="dotPair"
          onChange={handleChanges}
          value={values.dotPair.toString()}
          placeholder="dot pair"
        />
        <Layout style={styles.cableCountContainer}>
          <Layout style={styles.startingCableCount}>
            <Text
              style={[
                styles.customLabel,
                values.startingPair === 0
                  ? styles.invalidLabel
                  : values.startingPair === undefined ||
                    values.startingPair === ''
                  ? styles.normalColor
                  : styles.acceptedLabel,
              ]}>
              STARTING PAIR
            </Text>
            <CustomTextInput
              style={[
                styles.customInput,
                values.startingPair === 0
                  ? styles.invalidInput
                  : values.startingPair === undefined ||
                    values.startingPair === ''
                  ? styles.normalColor
                  : styles.acceptedInput,
              ]}
              type="number"
              name="startingPair"
              onChange={handleChanges}
              value={values.startingPair.toString()}
              placeholder="starting pair"
            />
          </Layout>
          <Layout style={styles.endingCableCount}>
            <Text
              style={[
                styles.customLabel,
                values.endingPair === 0
                  ? styles.invalidLabel
                  : values.endingPair === undefined || values.endingPair === ''
                  ? styles.normalColor
                  : styles.acceptedLabel,
              ]}>
              ENDING PAIR
            </Text>
            <CustomTextInput
              style={[
                styles.customInput,
                values.endingPair === 0
                  ? styles.invalidInput
                  : values.endingPair === undefined || values.endingPair === ''
                  ? styles.normalColor
                  : styles.acceptedInput,
              ]}
              type="number"
              name="endingPair"
              onChange={handleChanges}
              value={values.endingPair.toString()}
              placeholder="ending pair"
            />
          </Layout>
        </Layout>
        <Layout style={styles.infoMessageContainer}>
          <Layout style={styles.infoMessages}>
            <Icon style={styles.infoIcon} fill="#8F9BB3" name="info-outline" />
            <Text
              style={[
                styles.textlg,
                values.dotPair === 0 ? styles.invalidLabel : styles.normalColor,
              ]}>
              {' '}
              Only numbers are allowed!
            </Text>
          </Layout>
          <Layout style={styles.infoMessages}>
            <Icon style={styles.infoIcon} fill="#8F9BB3" name="info-outline" />
            <Text
              style={[
                styles.textlg,
                values.dotPair === 0 ? styles.invalidLabel : styles.normalColor,
              ]}>
              {' '}
              Number 0 is not allowed!
            </Text>
          </Layout>
          <Layout style={styles.infoMessages}>
            <Icon style={styles.infoIcon} fill="#8F9BB3" name="info-outline" />
            <Text
              style={[
                styles.textlg,
                values.dotPair === 0 ? styles.invalidLabel : styles.normalColor,
              ]}>
              {' '}
              Dot Pair number is required!
            </Text>
          </Layout>
        </Layout>
        <Button
          accessoryLeft={searchIcon}
          onPress={() => asyncSearch()}
          style={styles.searchButton}>
          Search
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
