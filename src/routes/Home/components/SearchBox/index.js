import React from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input} from 'native-base';
import styles from './SearchBoxStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>PICK UP</Text>
        <InputGroup>
          <Icon name="search" size={15} color="#ff5e3a" />
          <Input
            style={styles.inputSearch}
            placeholder="Choose pick-up location"
          />
        </InputGroup>
      </View>

      <View style={styles.secondInputWrapper}>
        <Text style={styles.label}>DROP-OFF</Text>
        <InputGroup>
          <Icon name="search" size={15} color="#ff5e3a" />
          <Input
            style={styles.inputSearch}
            placeholder="Choose drop-up location"
          />
        </InputGroup>
      </View>
    </View>
  );
};

export default SearchBox;
