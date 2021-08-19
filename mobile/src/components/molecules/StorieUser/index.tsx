import React from 'react';
import { View } from 'react-native';

import { ProfileProps } from '../../../utils/profiles';

import { StorieAvatar } from '../../atoms/StorieAvatar';
import { StorieUsername } from '../../atoms/StorieUsername';

type Props = Omit<ProfileProps, 'id'>;

export function StorieUser({ avatar, name }:Props ) {
  return (
    <View>
      <StorieAvatar source={avatar} />
      <StorieUsername value={name} />
    </View>
  );
}