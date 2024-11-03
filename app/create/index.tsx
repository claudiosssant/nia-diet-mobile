import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import { Header } from "../../components/header";
import { Select } from "../../components/input/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDataStore } from "../../store/data"
import { router } from "expo-router";

const schema = z.object({
  gender: z.string().min(1, { message: "Por favor, digite seu nome" }),
  frequency: z
    .string()
    .min(1, { message: "Por favor, digite sua frequencia de treino" }),
  objective: z.string().min(1, { message: "Por favor, digite seu objetivo" }),
});

type FormData = z.infer<typeof schema>;

export default function Create() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const setPageTwo = useDataStore(state => state.setPageTwo)
  const genderOptions = [
    { label: "Masculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
    { label: "Não informar", value: "não informado" },
  ];

  const frequencyOptions = [
    {
      label: "Sedentário (pouco ou nenhuma atividade física)",
      value: "Sedentário",
    },
    {
      label: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
      value: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
    },
    {
      label: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
      value: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
    },
    {
      label: "Altamente ativo (exercícios 5 a 7 dia por semana)",
      value: "Altamente ativo (exercícios 5 a 7 dia por semana)",
    },
  ];

  const objectiveOptions = [
    { label: "Emagrecer", value: "emagrecer" },
    { label: "Hipertrofia", value: "Hipertrofia" },
    { label: "Hipertrofia + Definição", value: "Hipertrofia e Definição" },
    { label: "Definição", value: "Definição" },
  ];

  function handleCreate(data: FormData) {
    setPageTwo({
      gender: data.gender,
      frequency: data.frequency,
      objective: data.objective
    })

    router.push("/diet")
  }

  return (
    <View style={styles.container}>
      <Header title="Fale mais de você" />
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Sexo:</Text>
        <Select
          control={control}
          name="gender"
          placeholder="Selecione seu sexo"
          error={errors.gender?.message}
          options={genderOptions}
        />

        <Text style={styles.label}>Frequência de treino:</Text>
        <Select
          control={control}
          name="frequency"
          placeholder="Selecione sua frequência de atividades"
          error={errors.frequency?.message}
          options={frequencyOptions}
        />

        <Text style={styles.label}>Objetivo:</Text>
        <Select
          control={control}
          name="objective"
          placeholder="Selecione seu objetivo"
          error={errors.objective?.message}
          options={objectiveOptions}
        />

        <Pressable onPress={handleSubmit(handleCreate)} style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  label: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.orange,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#FFFF",
    fontSize: 20,
  },
});
