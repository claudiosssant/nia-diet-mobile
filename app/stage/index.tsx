import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { colors } from "../../constants/colors";
import { Header } from "../../components/header";
import Inputs from "@/components/input";

export default function Stage() {
  return (
    <View>
      <Header title="Quem é você?">

      </Header>
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Diga seu nome:</Text>
        <Inputs />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  label: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  }
});
