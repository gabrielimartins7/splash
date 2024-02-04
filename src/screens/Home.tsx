import { Text, View } from 'react-native';

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e40af' }}>
      <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
        Home
      </Text>
    </View>
  );
}
