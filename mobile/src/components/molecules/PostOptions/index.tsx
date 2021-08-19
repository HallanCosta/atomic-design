import React from 'react';
import { View, Alert } from 'react-native';

import { ButtonIcon } from '../../atoms/ButtonIcon';

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon
} from '../../../global/styles/icons';
import { styles } from './styles';

export function PostOptions() {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <ButtonIcon 
          onPress={() => Alert.alert('Instagram', 'By - Hállan')} 
          icon={FavoriteIcon} 
        />
        <ButtonIcon icon={CommentIcon} />
        <ButtonIcon icon={MessengerIcon} />
      </View>

      <ButtonIcon icon={SaveIcon} />
    </View>
  );
}