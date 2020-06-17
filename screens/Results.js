import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Layout, Icon} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ae60',
  },
  topContainer: {
    flex: 1.5,
  },
  bottomContainer: {
    flex: 1.5,
  },
  heading: {
    fontSize: 38,
    margin: 10,
    color: '#34495e',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 0.5,
  },
  resultContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  primaryColor: {
    flex: 1,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    flexBasis: '50%',
    height: 100,
  },
  secondaryColor: {
    flex: 1,
    flexBasis: '50%',
    backgroundColor: 'blue',
    borderTopRightRadius: 10,
  },
  primaryColorNameContainer: {
    flex: 1,
    flexBasis: '40%',
    backgroundColor: '#385291',
    borderBottomLeftRadius: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryColorNameContainer: {
    flex: 1,
    flexBasis: '40%',
    backgroundColor: '#385291',
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  crossIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#385291',
    flexBasis: '20%',
  },
  crossIcon: {
    width: 32,
    height: 32,
    transform: [{rotate: '45deg'}],
  },
  ColorName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFF',
  },
  infoIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#3742fa',
    marginLeft: 2,
    marginRight: 2,
  },
});

const Results = ({route}) => {
  const props = route.params;

  const [pairPrimaryColor] = React.useState(
    props.searchResult.pairColorCode.primaryColor,
  );
  const [pairSecondaryColor] = React.useState(
    props.searchResult.pairColorCode.secondaryColor,
  );
  const [binderPrimaryColor] = React.useState(
    props.hasBinderData && props.searchResult.binderColorCode.primaryColor,
  );
  const [binderSecondaryColor] = React.useState(
    props.hasBinderData && props.searchResult.binderColorCode.secondaryColor,
  );

  const colorPallete = {
    White: '#ecf0f1',
    Red: '#D50000',
    Black: '#111111',
    Yellow: '#f1c40f',
    Violet: '#EE82EE',
    Slate: '#455A64',
    Green: '#2ecc71',
    Blue: '#2962FF',
    Orange: '#FF6D00',
    Brown: '#795548',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.topContainer}>
        <Text style={styles.heading}>DOT PAIR </Text>
        <Layout style={styles.iconContainer}>
          <Icon style={styles.infoIcon} fill="#2c3e50" name="arrow-downward" />
        </Layout>
        <Layout style={styles.resultContainer}>
          <Layout
            style={[
              styles.primaryColor,
              {
                backgroundColor: colorPallete[pairPrimaryColor],
              },
            ]}
          />
          <Layout
            style={[
              styles.secondaryColor,
              {
                backgroundColor: colorPallete[pairSecondaryColor],
              },
            ]}
          />
          <Layout style={styles.primaryColorNameContainer}>
            <Text style={styles.ColorName}>
              {props.searchResult.pairColorCode.primaryColor}
            </Text>
          </Layout>
          <Layout style={styles.crossIconContainer}>
            <Icon style={styles.crossIcon} fill="#FFF" name="expand" />
          </Layout>
          <Layout style={styles.secondaryColorNameContainer}>
            <Text style={styles.ColorName}>
              {props.searchResult.pairColorCode.secondaryColor}
            </Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout style={styles.bottomContainer}>
        {props.hasBinderData && (
          <>
            <Text style={styles.heading}>BINDER PAIR </Text>
            <Layout style={styles.iconContainer}>
              <Icon
                style={styles.infoIcon}
                fill="#2c3e50"
                name="arrow-downward"
              />
            </Layout>
            <Layout style={styles.resultContainer}>
              <Layout
                style={[
                  styles.primaryColor,
                  {
                    backgroundColor: colorPallete[binderPrimaryColor],
                  },
                ]}
              />
              <Layout
                style={[
                  styles.secondaryColor,
                  {
                    backgroundColor: colorPallete[binderSecondaryColor],
                  },
                ]}
              />
              <Layout style={styles.primaryColorNameContainer}>
                <Text style={styles.ColorName}>
                  {props.searchResult.binderColorCode.primaryColor}
                </Text>
              </Layout>
              <Layout style={styles.crossIconContainer}>
                <Icon style={styles.crossIcon} fill="#FFF" name="expand" />
              </Layout>
              <Layout style={styles.secondaryColorNameContainer}>
                <Text style={styles.ColorName}>
                  {props.searchResult.binderColorCode.secondaryColor}
                </Text>
              </Layout>
            </Layout>
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
};

export default Results;
