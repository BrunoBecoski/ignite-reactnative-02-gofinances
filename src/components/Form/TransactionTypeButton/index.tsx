import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { 
  Container,
  Button,
  Icon,
  Title
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends RectButton {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ 
  type,
  title,
  isActive,
  ...rest 
}: Props) {
  return(
    <Container
      isActive={isActive} 
      type={type}
    >
      <Button
        {...rest}
      >
        <Icon 
          name={icons[type]}
          type={type}
        />
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  );
}