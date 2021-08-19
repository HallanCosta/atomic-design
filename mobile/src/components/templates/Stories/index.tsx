import React from 'react';
import { 
  FlatList,
  View
} from 'react-native';

import { ProfileProps } from '../../../utils/profiles';

import { Storie } from '../../organisms/Storie';

import { styles } from './styles';

type Props = {
  data: ProfileProps[];
}

export function Stories({ data }: Props) {
  return (
    <View style={styles.stories}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.profiles}
        keyExtractor={profile => profile.id}
        renderItem={({ item }) => <Storie data={item} />}
      />
    </View>
  );
}