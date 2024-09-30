import {
  View,
  StyleSheet,
  Pressable,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.navigation} >
          <Pressable>
            <Feather name="arrow-left" size={24} color="#fff" />
          </Pressable>

          <Text style={styles.text}>
            Quem é você? <Feather name="loader" size={16} color="#fff" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    marginBottom: 14,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  navigation: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 14,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  }
});