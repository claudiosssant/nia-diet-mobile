import { View, Text, StyleSheet } from "react-native";
import { useDataStore } from "../../store/data";


export default function DietResult() {
  const user = useDataStore(state => state.user)

  console.log(user)
  return(
    <View style={styles.main}>
      <Text> TEstando </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
  },

});