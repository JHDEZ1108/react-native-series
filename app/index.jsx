import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import ThemeToggle from '@/components/ThemeToggle';
import CustomButton from '@/components/CustomButton';
import icedCoffeeImg from '@/assets/images/iced-coffee.png';
import { useTheme } from '@/context/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // Load the custom font
  const [fontsLoaded] = useFonts({
    'DancingScript-Regular': require('@/assets/fonts/DancingScript-Regular.ttf'),
    'DancingScript-Bold': require('@/assets/fonts/DancingScript-Bold.ttf'),
    'DancingScript-Medium': require('@/assets/fonts/DancingScript-Medium.ttf'),
    'DancingScript-SemiBold': require('@/assets/fonts/DancingScript-SemiBold.ttf'),
  });

  // Function to hide the splash screen when fonts are ready
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Do not render anything until fonts are ready
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.toggleContainer}>
        <ThemeToggle />
      </View>
      
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Coffee Shop</Text>
        </View>
        <CustomButton text="Our Menu" href="/menu" />
        <CustomButton text="Contact Us" href="/contact" />
      </ImageBackground>
    </View>
  );
};

export default App;

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.background,
    },
    toggleContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    titleContainer: {
      width: '100%',
      height: 75,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: theme.background,
      marginBottom: 120,
    },
    title: {
      color: theme.text,
      fontSize: 42,
      fontFamily: 'DancingScript-Regular',
    },
  });
}
