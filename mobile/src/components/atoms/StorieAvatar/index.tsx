import React from 'react';
import { Image, ImageProps } from 'react-native';

export function StorieAvatar({ ...rest }: ImageProps) {
  return (
    <Image 
      {...rest}
    />
  );
}