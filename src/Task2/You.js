import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const pen = <Ionicons name="pencil-sharp" size={30} />;
const heart = <Ionicons name="heart-outline" size={30} />;
const payment = <MaterialIcons name="payment" size={30} />;
const set = <Ionicons name="settings-sharp" size={30} />;

const You = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 30, marginVertical: 20}}>
      <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
        <Text>{pen}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>My Orders</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
        <Text>{heart}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>My Favorite</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
        <Text>{payment}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Payment Details</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
        <Text>{set}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>My Account</Text>
      </View>
    </SafeAreaView>
  );
};
export default You;
