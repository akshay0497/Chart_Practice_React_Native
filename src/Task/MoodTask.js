import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginApi from '../PracticeAPI/LoginApi';

// icons
const speed = (
  <MaterialCommunityIcons name="speedometer" size={30} color="orange" />
);
const right = <Fontisto name="quote-a-right" size={20} color="orange" />;
const left = <Fontisto name="quote-a-left" size={20} color="orange" />;
const user = <EvilIcons name="user" size={100} color="white" />;
const arrow = <Ionicons name="arrow-back" size={25} color="white" />;

export default function MoodTask() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const apiurl = 'https://b1.bhaaraterp.com/dashboard_graph/leads-by-stage/';

  useEffect(() => {
    fetch(apiurl, {
      headers: {Token: '1f3b587d40a217cec89c8987cbe5e2084d27b89b'},
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    }, []);
    console.log(data)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headsec}>
        <TouchableOpacity>{arrow}</TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
          Xcellence PVT LTD Company, Lucknow
        </Text>
      </View>

      <View style={styles.usersec}>
        <View style={{}}>
          <Text>{user}</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              paddingBottom: 5,
              color: 'white',
            }}>
            Alok Maurya
          </Text>
          <Text style={{fontSize: 15, color: 'white'}}>Developer</Text>
        </View>
      </View>

      <View style={styles.todaysec}>
        <View style={styles.moodsec}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              paddingLeft: 5,
              color: 'white',
              paddingLeft: 15,
            }}>
            How's the <Text style={{color: 'orange'}}>Mood</Text>
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                paddingLeft: 5,
                color: 'white',
                paddingLeft: 15,
                paddingBottom: 10,
              }}>
              Today
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.emojis}>😀</Text>
            <Text style={styles.emojis}>😇</Text>
            <Text style={styles.emojis}>😑</Text>
            <Text style={styles.emojis}>😔</Text>
            <Text style={styles.emojis}>😡</Text>
          </View>
        </View>

        <View style={{width: 400}}>
          <Text style={{fontSize: 10}}>
            ______________________________________________________________________________________________________
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            padding: 10,
          }}>
          <Text>{speed}</Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
            Team Mood
          </Text>
          <Text>___________________________________________________</Text>
        </View>

        <View style={styles.moodsecs}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 30, color: 'white'}}>
                "The team is feeling good
              </Text>
              <Text style={{fontSize: 30, color: 'white', paddingLeft: 15}}>
                today"
              </Text>
            </View>
            <Text style={styles.emojis}>😇</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>😇 Moodalytics</Text>
          <Text style={{fontSize: 15}}>(Trend chart on Mood)</Text>
        </View>
      </View>

      <View>
        {loading?(<Text><ActivityIndicator size="large" /></Text>):(
          <LineChart
          data={{
            labels: data.stage,
            datasets: [
              {
                data: data.stage_per,
                strokeWidth: 1,
              },
            ],
          }}
          width={Dimensions.get('window').width - 15}
          height={250}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingHorizontal: 5,
          }}
        /> 
        )}
      </View>

          <View>
            <LoginApi/>
          </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  headsec: {
    flexDirection: 'row',
    gap: 30,
    padding: 10,
  },
  usersec: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  todaysec: {
    margin: 10,
  },
  moodsec: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    paddingBottom: 90,
    paddingTop: 10,
  },
  moodsecs: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  emojis: {
    fontSize: 40,
  },
});
