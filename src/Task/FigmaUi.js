import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {FlatGrid} from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';

const arrow = <MaterialIcons name="arrow-back" size={30} color="purple" />;

const server = <MaterialCommunityIcons name="server" size={30}  color="white"/>;
const certificate = <MaterialCommunityIcons name="certificate-outline" size={40} color="white"/>
const settings = <MaterialIcons name="miscellaneous-services" size={40}  color="white"/>;
const sereff = <MaterialIcons name="settings-suggest" size={40}  color="white"/>;
const sats = <MaterialIcons name="sentiment-very-satisfied" size={40}  color="white"/>;
const eng = <MaterialIcons name="engineering" size={40}  color="white"/>;
const asst = <MaterialIcons name="settings-suggest" size={30}  color="white"/>;
const sercha = <FontAwesome5 name="cogs" size={40}  color="white"/>;
const handshake = <FontAwesome6 name="handshake-angle" size={40}  color="white"/>;
const team = <SimpleLineIcons name="organization" size={40}  color="white"/>;

const FigmaUi = () => {
  const DataList = [
    {id: 1, tag: 'Overall service Request', icon: settings},
    {id: 2, tag: 'Service Engineer Utilization', icon: eng},
    {id: 3, tag: 'Service Team Performance', icon: team},
    {id: 4, tag: 'SLA Compliance Report', icon: handshake},
    {id: 5, tag: 'Customer satisfaction Index', icon: sats},
    {id: 6, tag: 'Service Costs & Expenses', icon: sercha},
    {id: 7, tag: 'Service Efficiency', icon: sereff},
    {id: 8, tag: 'Service Backlog Trends', icon: server},
    {id: 9, tag: 'Technical Training & Cert.', icon: certificate},
    {id: 10, tag: 'Service Request Trends', icon: settings},
    {id: 11, tag: 'Asst. Request', icon: asst},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{arrow}</Text>
        <Text style={styles.headerheading}>Back</Text>
      </View>

      <Text style={styles.sectag}>service Manager</Text>
     
      <FlatGrid
        itemDimension={130}
        data={DataList}
        spacing={20}
        // numColumns={2}
        style={styles.flatlists}
        renderItem={({item}) => (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.15}}
            colors={["rgb(102, 50, 204)","rgb(244, 111, 50)"]}
            style={{borderRadius:20}}>

            <View style={[styles.list]} key={item.id}>
              <Text style={styles.listsyt}>{item.icon}</Text>
              <Text style={styles.tagheading}>{item.tag}</Text>
            </View>

          </LinearGradient>
        )}
      />
    </View>
  );
};

export default FigmaUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    padding: 5,
    gap: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerheading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  sectag: {
    color: 'purple',
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 15,
  },
  flatlists: {
    marginVertical: 20,
    borderRadius: 10,
    // gap:20,
    marginHorizontal:5
  },
  list: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 30,
    // width:200,
},
listsyt:{
    paddingVertical:10
},
tagheading: {
    color:"white",
    fontSize:19,
    paddingHorizontal:20,
    flexWrap:"wrap",
    textAlign:"center"
  },
  
});
