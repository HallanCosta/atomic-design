import React from 'react';
import { View } from 'react-native';

import { ProfileProps } from '../../../utils/profiles';

import { StorieUser } from '../../molecules/StorieUser';

import { styles } from './styles';

type Props = {
  data: Omit<ProfileProps, 'id'>;
}

export function Storie({ data }: Props) {
  return (
    <View style={styles.profile}>
      <StorieUser 
        avatar={data.avatar}
        name={data.name}
      />
    </View>
  );
}