import React from 'react';
import { View } from 'react-native';

import { profiles } from '../../utils/profiles';
import { posts } from '../../utils/posts';

import { Header } from '../../components/organisms/Header';
import { Stories } from '../../components/templates/Stories';
import { Posts } from '../../components/templates/Posts';

import { styles } from './styles';

export function Feed() {
  return (
    <View style={styles.container}>
      <Header />

      <Stories data={profiles} />
      
      <Posts data={posts} />
    </View>
  );
}