/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';

import {changeIcon, getIcon, resetIcon} from 'react-native-change-icon';

const imageList = [
  {
    name: 'Light',
    url: 'https://cdn.icon-icons.com/icons2/1495/PNG/512/1deepinlauncher_103114.png',
  },
  {
    name: 'Dark',
    url: 'https://cdn.pixabay.com/photo/2022/06/01/03/40/app-7234739_640.png',
  },
  {
    name: 'Default',
    url: 'https://icons.iconarchive.com/icons/rud3boy/mac-apps/256/launcher-icon.png',
  },
];

function ChangeAppIcon(): JSX.Element {
  // changeIcon('Light').catch(error => {
  //   console.log('error', error);
  // });
  // getIcon()
  //   .then(data => {
  //     console.log('data', data);
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //   });

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff'}}>
      {imageList?.map(item => {
        return (
          <TouchableOpacity
            key={item?.name}
            style={{width: 120, marginHorizontal: 10}}
            onPress={() => {
              // if (item.name) {
              changeIcon(item.name);
              // } else {
              //   resetIcon();
              // }
            }}>
            <Image
              source={{uri: item.url}}
              height={50}
              width={50}
              style={{width: '100%', height: 150}}
              resizeMode="center"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ChangeAppIcon;
