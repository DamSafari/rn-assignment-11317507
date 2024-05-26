import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.myText}>My name is Afari Damien Sena.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#739BD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    fontSize: 24,
  },
  
});
