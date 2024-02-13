import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from './list-screen.styles';
import {useAppContext} from '../../stores';

const RenderItem = ({item}: {item: string}) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

export const ListScreen = () => {
  const {isLoading, list, updateLoaderVisibility, updateListData} =
    useAppContext().listModal;

  useEffect(() => {
    console.log('useEffect called')
    updateListData(['1', '2', '3', '4', '5']);
    updateLoaderVisibility(false);
  }, []);

  return isLoading ? (
    <View style={styles.mainContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <FlatList data={list} renderItem={RenderItem} />
  );
};
