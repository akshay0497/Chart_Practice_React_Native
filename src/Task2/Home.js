import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MainScreen from './MainScreen';

const search = <AntDesign name="search1" size={25} />;

const ItemList = [
  {id: 1, imagetag: 'Vegetables', img: require('../../img/cauiflower.jpg')},
  {id: 2, imagetag: 'Fruite', img: require('../../img/fruits.jpg')},
  {id: 3, imagetag: 'Masala', img: require('../../img/masala.jpg')},
];

const DailyNeedsList = [
  {id: 1, imagetag: 'Cabbage', img: require('../../img/cabbage.jpg'), pack:"1 kg"},
  {id: 2, imagetag: 'Red/yellow/Capsicum', img: require('../../img/fruits.jpg'), pack:"1 kg"},
  {id: 3, imagetag: 'Pineapple', img: require('../../img/pineapple.jpg'), pack:"4 in a pack"},
];

const Home = () => {
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eeeeee',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          marginHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../img/logo.jpg')}
          resizeMode="cover"
          style={{width: 50, height: 50, borderRadius: 30}}
        />
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="Search Products"
            style={{
              height: 50,
              width: 300,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 5,
              shadowColor:"grey"
            }}
          />
          <Text style={{position: 'absolute', right: 20}}>{search}</Text>
        </View>
      </View>

      <ScrollView>
        <View style={{flexDirection: 'row', gap: 20, marginHorizontal: 10}}>
          {ItemList.map(item => {
            return (
              <View
                key={item.id}
                style={{ padding: 2, borderRadius: 5}}>
                <Image
                  source={item.img}
                  style={{width: 100, height: 70, borderRadius: 5}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    paddingVertical: 2,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}>
                  {item.imagetag}
                </Text>
              </View>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: 110,
              paddingHorizontal: 10,
              height: 25,
              paddingVertical: 5,
            }}>
            NEW ARRIVALS
          </Text>
          <Text style={{color: 'red'}}>SEE ALL</Text>
        </View>

        <View style={{flexDirection: 'row', paddingHorizontal: 20, gap: 20}}>
          <View>
            <Image
              source={require('../../img/mango.jpg')}
              style={{
                width: 175,
                height: 200,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'white',
                paddingHorizontal: 5,
              }}>
              Local Mango
            </Text>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: 'white',
                paddingVertical: 5,
                color: 'lightgrey',
                paddingHorizontal: 5,
              }}>
              1 kg
            </Text>
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'yellow',
                height: 30,
                paddingVertical: 5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              Add to Cart
            </Text>
          </View>
          <View>
            <Image
              source={require('../../img/cauiflower.jpg')}
              style={{
                width: 175,
                height: 200,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'white',
                paddingHorizontal: 5,
              }}>
              Broccoli
            </Text>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: 'white',
                paddingVertical: 5,
                color: 'lightgrey',
                paddingHorizontal: 5,
              }}>
              6 in a pack
            </Text>
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'yellow',
                height: 30,
                paddingVertical: 5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              Add to Cart
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: 100,
              paddingHorizontal: 10,
              height: 25,
              paddingVertical: 5,
            }}>
            DAILY NEEDS
          </Text>
          <Text style={{color: 'red'}}>SEE ALL</Text>
        </View>

        {DailyNeedsList.map((lst)=>{return(
        <View key={lst.id}
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 15,
            paddingHorizontal: 5,
            borderRadius: 10,
            marginVertical:2
          }}>
          <TouchableOpacity onPress={() => {
        
      }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 10,
            }}>
            <Image
              source={lst.img}
              style={{width: 70, height: 70, borderRadius: 60}}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: '600'}}>{lst.imagetag}</Text>
              <Text style={{color: 'lightgrey'}}>{lst.pack}</Text>
            </View>
          </TouchableOpacity>
          <View style={{gap: 15}}>
            <Text>
              <EvilIcons name="heart" size={35} color="black" />
            </Text>
            <Text >
              <Entypo name="plus" size={35} color="green" />
            </Text>
          </View>
        </View>)})}


      </ScrollView>
    </View>
  );
};

export default Home;
