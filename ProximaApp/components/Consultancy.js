
import React from 'react';
import { View, Text } from 'react-native';

const Consultancy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Consultancy Office</Text>
      <Text style={styles.detail}>123 Main Street</Text>
      <Text style={styles.detail}>City, State, Country</Text>
      <Text style={styles.phone}>Phone: 123-456-7890</Text>
      <Text style={styles.phone}>Phone: 123-456-7890</Text>


      
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default Consultancy;
