import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AndroidMetaData from 'react-native-android-meta-data';

export default function App() {
  const [result, setResult] = React.useState<string>()

  React.useEffect(() => {
    getName()
  }, []);
  const getName = async () => {
    try {
      const res = await AndroidMetaData.getKey('appStoreName')
      setResult(res)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>Result from AndroidManifest</Text>
      <Text style={{ color: 'red' }}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
