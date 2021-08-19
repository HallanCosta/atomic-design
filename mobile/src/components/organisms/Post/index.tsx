import React from 'react';
import { View, ImageProps } from 'react-native';

import { ProfileProps } from '../../../utils/profiles';

import { PostPhoto } from '../../atoms/PostPhoto';
import { PostDescription } from '../../atoms/PostDescription';

import { PostHeader } from '../../molecules/PostHeader';
import { PostOptions } from '../../molecules/PostOptions';
import { PostAbout } from '../../molecules/PostAbout';

import { styles } from './styles';

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: ProfileProps;
}

type Props = {
  data: PostProps;
}

export function Post({ data }: Props) {
  return (
    <View style={styles.post}>
      
      <PostHeader 
        username={data.username} 
        location={data.username} 
      /> 

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />

        <PostAbout 
          avatar={data.lastLiked.avatar}
          likes={data.likes}
        />
        
        <PostDescription value={data.description} />
      </View>
    </View>
  );
}