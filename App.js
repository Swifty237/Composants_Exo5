import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Button
          title="Press me"
          color="green"
          onPress={() => alert('Bravo...')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonBox: {
    width: 250
  }
});
