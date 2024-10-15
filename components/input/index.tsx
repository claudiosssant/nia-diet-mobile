import {View, Text, StyleSheet, TextInput } from 'react-native'

const Inputs = () => {
  return ( 
    <View style={styles.container}>
      <TextInput
        placeholder='Teste'
      />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  }
})
export default Inputs;