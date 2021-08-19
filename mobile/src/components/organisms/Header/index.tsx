import React from 'react';
import { View } from 'react-native';

import { HeaderSide } from '../../molecules/HeaderSide';

import {
  MessengerIcon,
  CameraIcon,
  IgtvIcon,
  LogoIcon
} from '../../../global/styles/icons';
import { styles } from './styles';

export function Header() {

  return (
    <View style={styles.header}>
      <HeaderSide 
        icons={[
          CameraIcon
        ]} 
      />

      <LogoIcon />

      <HeaderSide 
        icons={[
          IgtvIcon,
          () => <MessengerIcon style={styles.messengerIcon} />
        ]} 
      />
    </View>
  );
}