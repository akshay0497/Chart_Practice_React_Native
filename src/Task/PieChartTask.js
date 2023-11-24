import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PieChart} from 'react-native-chart-kit';
import Pie from 'react-native-pie';

const PieChartTask = () => {
  
  const [piedata, setPieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiurl =
    'https://b1.bhaaraterp.com/Api_data/pos/abc-analysis-pie-chart-graph/';

  const options = {
    headers: {Token: '1f3b587d40a217cec89c8987cbe5e2084d27b89b'},
    method: 'POST',
  };

  useEffect(() => {
    setLoading(true);
    fetch(apiurl, options)
      .then(response => response.json())
      .then(json => {
        const response = json.data;
        const data = response.data.map((item, index) => ({
          value: item.toString(),
          color: response.colors[index],
          name: response.labels[index],
          // legendFontColor: 'black',
          legendFontSize: 10,
        }));
        setPieData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error', error);
        setLoading(false);
      });
  }, []);


  return (
    <View>
      {loading ? (
        <Text>
          <ActivityIndicator size="large" />
        </Text>
      ) : (
        <View style={{flexDirection:"column", gap:40, height:450}}>
          <PieChart
            data={piedata}
            width={Dimensions.get('window').width - 10}
            height={200}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              // decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor={'value'}
            backgroundColor={'transparent'}
            // paddingLeft={'15'}
            // center={[100, 10]}
            // absolute
            // hasLegend={false}
          />
        </View>
      )}
    </View>
  );
};

export default PieChartTask;
