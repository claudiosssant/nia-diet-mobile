import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { colors } from "../../constants/Colors";
import { Header } from "../../components/header";
import { Inputs } from "../../components/input";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm} from 'react-hook-form'
import { router } from 'expo-router'
import { useDataStore } from "../../store/data";
 

const schema = z.object({
  name: z.string().min(1, {message: "Por favor, digite seu nome"}),
  age: z.string().min(1, {message: "Por favor, digite sua idade"}),
  height: z.string().min(1, {message: "Por favor, digite sua altura"}),
  weight: z.string().min(1, {message: "Por favor, digite seu peso"}),
})

type FormData = z.infer<typeof schema>


export default function Stage() {

  const { control, handleSubmit, formState: { errors, isValid}} = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const setPageOne = useDataStore(state => state.setPageOne)

  function handleNext(data: FormData) {
    console.log(data);
    setPageOne({
      name: data.name,
      weight: data.weight,
      age: data.age,
      height: data.height,
    })
    
    router.push("/create")
  }
  return (
    <View style={styles.main}>
      <Header title="Quem é você?">

      </Header>
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome completo:</Text>
        <Inputs 
          name="name"
          control={control}
          placeholder="Digite seu nome..."
          error={errors.name?.message}
          keyboardType="default"
        />

<Text style={styles.label}>Altura:</Text>
        <Inputs 
          name="height"
          control={control}
          placeholder="Digite sua altura, ex: 1.90"
          error={errors.height?.message}
          keyboardType="numeric"
        />

<Text style={styles.label}>Peso atual:</Text>
        <Inputs 
          name="weight"
          control={control}
          placeholder="Digite seu peso..."
          error={errors.weight?.message}
          keyboardType="numeric"
        />

<Text style={styles.label}>Idade:</Text>
        <Inputs 
          name="age"
          control={control}
          placeholder="Digite sua idade..."
          error={errors.age?.message}
          keyboardType="numeric"
        />
        <Pressable onPress={handleSubmit(handleNext)} style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>

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
  },

  button: {
    backgroundColor: colors.orange,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFF',
    fontSize: 20,
  }
});
