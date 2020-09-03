import React from 'react';
import {Text} from 'react-native';
import {View, List, ListItem, Left, Body} from 'native-base';
import styles from './SearchResultsStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchResults = ({predictions}) => {
  return (
    <View style={styles.searchResultsWrapper}>
      <List
        dataArray={predictions}
        renderRow={(item) => (
          <ListItem button avatar>
            <Left style={styles.leftContainer}>
              <Icon style={styles.leftIcon} name="location-on" />
            </Left>
            <Body>
              <Text style={styles.primaryText}>{item.primaryText}</Text>
              <Text style={styles.secondaryText}>{item.secondaryText}</Text>
            </Body>
          </ListItem>
        )}
      />
    </View>
  );
};

export default SearchResults;
