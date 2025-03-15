import { Fontisto } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeProvider';
import { Colors } from '@/constants/Colors';

export default function ContactScreen() {
  const { theme } = useTheme();
  const imgColor = theme === Colors.dark ? 'papayawhip' : '#333'; 
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      {/* Icon Container */}
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript" size={150} color={imgColor} />
      </View>

      {/* Contact Info */}
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>📍 Address</Text>
          <Text style={styles.text}>555 Coffee Lane</Text>
          <Text style={styles.text}>Kansas City, KS 55555-1234</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>📞 Phone</Text>
          <Link href="tel:5555555555" style={styles.link}>555-555-5555</Link>
          <Text style={styles.text}>or</Text>
          <Link href="sms:5555555555" style={styles.link}>Click Here to Text!</Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>⏰ Hours</Text>
          <Text style={styles.text}>Open 6am to 4pm daily.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    imgContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme === Colors.dark ? '#353636' : '#D0D0D0',
      height: 200,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    content: {
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 15,
    },
    card: {
      backgroundColor: theme === Colors.dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      padding: 15,
      borderRadius: 10,
      width: '100%',
      maxWidth: 350,
      alignItems: 'center',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 5,
    },
    text: {
      fontSize: 16,
      color: theme.text,
      textAlign: 'center',
    },
    link: {
      fontSize: 16,
      color: theme === Colors.dark ? 'lightblue' : 'blue',
      textDecorationLine: 'underline',
      textAlign: 'center',
    },
  });
}
