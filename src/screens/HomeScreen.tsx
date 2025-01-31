import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Define this type

interface HomeScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  }

const HomeScreen : React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>Welcome to Derby!</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('CreateTournament')}
        style={styles.button}
      >
        Create Tournament
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('JoinTournament')}
        style={styles.button}
      >
        Join Tournament
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('MyTeams')}
        style={styles.button}
      >
        My Teams
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Leaderboard')}
        style={styles.button}
      >
        Leaderboard
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    marginTop: 16,
  },
});

export default HomeScreen;