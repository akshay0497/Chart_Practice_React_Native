import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const plus = <Entypo name="plus" size={20} color="white" />;
const minus = <Entypo name="minus" size={20} color="white" />;

const Wishlist = (props) => {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(1);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count <= 1) {
      console.warn("Cart can't be zero (0)");
    } else {
      setCount(count - 1);
    }
  };
  const adds = () => {
    setCount2(count2 + 1);
  };
  const subs = () => {
    if (count2 <= 1) {
      console.warn("Cart can't be zero (0)");
    } else {
      setCount2(count2 - 1);
    }
  };
  return (
    <SafeAreaView>
      <View style={{
        justifyContent: 'space-evenly',
        flexDirection: 'column',        
      }}>
      <View style={{height:700}}>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../img/pineapple.jpg')}
              style={{width: 100, height: 100, borderRadius: 40}}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
                Pineapple
              </Text>
              <Text>4 in a pack</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', gap: 5}}>
            <Text
              onPress={add}
              style={{backgroundColor: 'green', padding: 5, borderRadius: 15}}>
              {plus}
            </Text>
            <Text style={{fontSize: 20}}>{count}</Text>
            <Text
              onPress={sub}
              style={{backgroundColor: 'green', padding: 5, borderRadius: 15}}>
              {minus}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 25}}>
            <Image
              source={require('../../img/cabbage.jpg')}
              style={{width: 70, height: 70, borderRadius: 40}}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
                cabbage
              </Text>
              <Text>1 kg</Text>
            </View>
          </View>

          <View style={{alignItems: 'center', gap: 5}}>
            <Text
              onPress={adds}
              style={{backgroundColor: 'green', padding: 5, borderRadius: 15}}>
              {plus}
            </Text>
            <Text style={{fontSize: 20}}>{count2}</Text>
            <Text
              onPress={subs}
              style={{backgroundColor: 'green', padding: 5, borderRadius: 15}}>
              {minus}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{backgroundColor: 'green'}}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center', padding:5}}>
            Add to Wishlist
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
