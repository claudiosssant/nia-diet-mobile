import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../constants/colors"
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/images/nialogo.png')}
      />
      <Text style={styles.title}>NIA Diet</Text>
      <Text style={styles.subtitle}>Sua dieta personalizada</Text>
      <Link href="/stage" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Gerar Dieta</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor: colors.green,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },

  button: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: colors.orange,
    width: '100%',
  },
  btnText: {
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 64,
    color: colors.white,
    fontStyle: "italic",
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: colors.white,
    paddingVertical: 24,
  }
})
