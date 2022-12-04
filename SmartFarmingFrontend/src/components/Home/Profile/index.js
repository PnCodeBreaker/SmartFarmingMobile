import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import UserContext from '../../../context/userContext';
import {baseURL} from '../../../services';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useState} from 'react';
import axios from 'axios';
import EditProfileModal from './EditProfileModal';

const Profile = ({navigation}) => {
  const {userId, updateUserId} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(0);

  const [isEditProfile, setIsEditProfile] = useState(true);

  const {width, height} = useWindowDimensions();

  const getUserData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`${baseURL}/user/getUserData/${userId}`);
      console.log(response.data.status);
      console.log(response.data.data);

      if (response.data.status == 200) {
        setIsLoading(false);
        setUserData(response.data.data);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const logout = () => {
    updateUserId('');
    navigation.navigate('Launch');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Launch',
          },
        ],
      }),
    );
  };

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getUserData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setIsLoading(false);
        setUserData([]);
      };
    }, [counter]),
  );

  if (isEditProfile) {
    return (
      <EditProfileModal
        navigation={navigation}
        isEditProfileOpen={isEditProfile}
        setIsEditProfileOpen={setIsEditProfile}
        userId={userId}
        userName={userData.name}
        setCounter={setCounter}
      />
    );
  } else {
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
          {isLoading ? (
            <View
              style={{
                height: height,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                }}>
                Loading....
              </Text>
            </View>
          ) : (
            <View
              style={{
                marginTop: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
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
                  Profile
                </Text>
                <TouchableOpacity
                  // style={{width: width - 40, backgroundColor: 'white'}}
                  onPress={logout}>
                  <Text
                    style={{
                      color: '#E30B5C',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: 'Inter',
                    }}>
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  marginTop: 24,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                }}>
                Name: {userData.name}
              </Text>
              <Text
                style={{
                  marginTop: 12,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                }}>
                email: {userData.email}
              </Text>
              <TouchableOpacity
                onPress={() => setIsEditProfile(true)}
                style={{
                  marginVertical: 40,
                  width: width - 40,
                  borderRadius: 6,
                  backgroundColor: 'lightgreen',
                  padding: 16,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
};

export default Profile;
