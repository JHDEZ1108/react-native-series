import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import { useState } from 'react';
import { Link, LinkProps } from 'expo-router';

interface CustomButtonProps {
  text: string;
  href: LinkProps["href"];
}

const CustomButton = ({ text, href }: CustomButtonProps) => {
  const { theme } = useTheme();
  const styles = createStyles();
  const [scaleValue] = useState(new Animated.Value(1));
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Link href={href} asChild>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: isPressed ? theme.text : theme.background,
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: isPressed ? theme.background : theme.text }]}>
            {text}
          </Text>
        </Animated.View>
      </Pressable>
    </Link>
  );
};

export default CustomButton;

function createStyles() {
  return StyleSheet.create({
    button: {
      height: 50,
      width: 175,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 4,
    },
  });
}
