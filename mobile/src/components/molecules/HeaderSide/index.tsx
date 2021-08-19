import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { ButtonIcon } from '../../atoms/ButtonIcon';

import { styles } from './styles';

type Props = {
  icons: React.FC<SvgProps>[];
}

export function HeaderSide({ icons }: Props) {
  function render(icon: React.FC<SvgProps>) {
    return <ButtonIcon icon={icon} />
  }

  return (
    <View style={styles.headerSide}>
      {icons.map(render)}
    </View>
  );
}