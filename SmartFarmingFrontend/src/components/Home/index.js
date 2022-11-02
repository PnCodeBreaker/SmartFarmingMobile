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

const Home = ({navigation}) => {
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
            flexDirection: 'row',
            alignItems: 'center',
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
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
