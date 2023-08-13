// import React, { Component } from 'react';
// import { View, Text, StyleSheet, checkBox, TouchableOpacity, ActivityIndicator } from 'react-native';

// export default class Home extends Component {
//   constructor() {
//     super()
//   }


//   render() {
//     return (
//       <View style={Styles.container}>
//         <ActivityIndicator />
//       </View>
//     )
//   }
// }

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


const [book, setBook] = useState('');

useEffect(() => {
  const getBooks = () => {
  
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '#b0@6hX8YasCq6^unOaPw1tqR',
    },
    params: {
      category: 'all',
      count: '1'
    }
  };
  axios.get('https://books-list-api.vercel.app/books', options)
    .then(response => {
      if (response.data && response.data[0]) {
        setBook(response.data[0].text);
      } else {
        console.log('No quote found in response');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  getBooks();
}, []);

return (
  <View>
    <Text>Random Quote:</Text>
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , borderBlockColor: '1px' }}>
      {book}
    </View>
  </View>
);
