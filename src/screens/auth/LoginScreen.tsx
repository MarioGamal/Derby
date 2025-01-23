import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme, Snackbar } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types'; // Define this type
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const theme = useTheme();

  const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setSnackbarMessage('Login successful!');
        setSnackbarVisible(true);
      } catch (error ) {
        if (error instanceof FirebaseError) {
            setSnackbarMessage(error.message || 'An error occurred. Please try again.');
          } else if (error instanceof Error) {
            setSnackbarMessage(error.message || 'An error occurred. Please try again.');
          } else {
            setSnackbarMessage('An unknown error occurred. Please try again.');
          }
          setSnackbarVisible(true);
      }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.appName, { color: theme.colors.primary }]}>Derby</Text>

      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <Button mode="text" onPress={() => navigation.navigate('Signup')} style={styles.button}>
          Don't have an account? Sign Up
        </Button>
      </View>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000} // Auto-dismiss after 3 seconds
        style={{ backgroundColor: theme.colors.primary }}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    appName: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 32,
    },
    formContainer: {
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      elevation: 2,
    },
    input: {
      marginBottom: 16,
    },
    button: {
      marginTop: 8,
    },
  });
  

export default LoginScreen;