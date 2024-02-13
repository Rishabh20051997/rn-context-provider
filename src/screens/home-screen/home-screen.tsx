import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './home-screen.styles';
import {useAppContext} from '../../stores';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {userId, username} = useAppContext().userInfoModal;

  console.log('Home Screen Renders');

  const onNavigationBtnPressed = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.userInfoText}>{userId}</Text>
      <Text style={styles.userInfoText}>{username}</Text>
      <Pressable style={styles.linkContainer} onPress={onNavigationBtnPressed}>
        <Text style={styles.linkText}>Navigate to Next Screen</Text>
      </Pressable>
    </View>
  );
};
