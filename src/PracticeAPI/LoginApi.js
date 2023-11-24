import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const LoginApi = () => {
  const apiurl = 'https://dummyjson.com/auth/login';

  const headers = {'Content-Type': 'application/json'};

  const method = 'POST';

  useEffect(() => {
    fetch(apiurl, {headers: headers, method: method, body: JSON.stringify({
    
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })})
      .then(res => res.json())
      .then(console.log);
  }, []);

  return (
    <View>
      <Text>username: 'kminchelle', password: '0lelplR'</Text>
    </View>
  );
};
export default LoginApi;
