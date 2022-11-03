import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation, route}) => {
  const {name, email} = route.params;
  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#141414',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            marginTop: 80,
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              // marginLeft: 8,
              color: 'white',
              fontSize: 34,
              fontWeight: '700',
              fontFamily: 'Inter',
            }}>
            HomeScreen
          </Text>
          <Text
            style={{
              marginTop: 24,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'Inter',
            }}>
            Name: {name}
          </Text>
          <Text
            style={{
              marginTop: 12,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'Inter',
            }}>
            email: {email}
          </Text>
          <TouchableOpacity
            // style={{width: width - 40, backgroundColor: 'white'}}
            style={{alignSelf: 'center', marginTop: 80}}
            onPress={() => navigation.navigate('Launch')}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Inter',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
