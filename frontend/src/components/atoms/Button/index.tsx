import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variation?: 'primary' | 'secondary' | 'outlined';
}

const Button: FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  variation = 'primary',
}) => {
  const getButtonStyles = () => {
    switch (variation) {
      case 'primary':
        return [styles.button, styles.primaryButton, style];
      case 'secondary':
        return [styles.button, styles.secondaryButton, style];
      case 'outlined':
        return [styles.button, styles.outlinedButton, style];
      default:
        return [styles.button, style];
    }
  };

  const getButtonTextStyles = () => {
    switch (variation) {
      case 'primary':
        return [styles.buttonText, styles.primaryButtonText, textStyle];
      case 'secondary':
        return [styles.buttonText, styles.secondaryButtonText, textStyle];
      case 'outlined':
        return [styles.buttonText, styles.outlinedButtonText, textStyle];
      default:
        return [styles.buttonText, textStyle];
    }
  };

  return (
    <TouchableOpacity style={getButtonStyles()} onPress={onPress}>
      <Text style={getButtonTextStyles()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'blue',
  },
  secondaryButton: {
    backgroundColor: 'black',
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButtonText: {
    color: 'white',
  },
  outlinedButtonText: {
    color: 'blue',
  },
});

export default Button;
