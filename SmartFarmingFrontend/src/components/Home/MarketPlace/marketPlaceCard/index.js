import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

const MarketPlaceCard = ({item}) => {
  const [isSeeMore, setIsSeeMore] = useState(true);
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#141414',
          backgroundColor: '#FAF9F6',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 16,
            marginBottom: 10,
          }}>
          {item.name}
        </Text>
        <Image
          resizeMode="contain"
          style={{height: 150}}
          source={{uri: item.image}}
        />
        {isSeeMore ? (
          <Text
            style={{
              color: '#333333',
              fontWeight: '500',
              fontSize: 14,
              marginTop: 10,
            }}>
            {item.description.slice(0, 80)}
            {item.description.length > 80 && (
              <>
                {isSeeMore && (
                  <Text
                    onPress={() => setIsSeeMore(!isSeeMore)}
                    style={{fontSize: 14, color: 'grey'}}>
                    ... See More
                  </Text>
                )}
              </>
            )}
          </Text>
        ) : (
          <Text
            style={{
              color: '#333333',
              fontWeight: '500',
              fontSize: 14,
              marginTop: 10,
            }}>
            {item.description}
          </Text>
        )}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: 'black',
            borderRadius: 40,
            width: 120,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlignVertical: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: 16,
            }}>
            $ {item.price}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MarketPlaceCard;

const styles = StyleSheet.create({});
