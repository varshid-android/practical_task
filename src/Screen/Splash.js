import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Dashboard');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white', fontSize: 25}}>Practical Task </Text>
    </View>
  );
};

export default Splash;
