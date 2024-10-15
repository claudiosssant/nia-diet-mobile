import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import { Header } from "../../components/header";
import { Inputs } from "../../components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export default function Create() {
  return (
    <View style={styles.container}>
      <Header
        title="Fale mais de você"
      />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});
