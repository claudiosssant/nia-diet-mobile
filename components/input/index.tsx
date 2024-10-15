import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { Controller } from "react-hook-form";

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions;
}

export function Inputs({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardType,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType}
            style={styles.input}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 48,
    backgroundColor: "#FFFF",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  }
});
