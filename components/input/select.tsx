import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

interface SelectProps {
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  options: OptionsProps[];
}

interface OptionsProps {
  label: string;
  value: string | number;
}

export function Select({
  name,
  control,
  placeholder,
  error,
  options,
}: SelectProps) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TouchableOpacity
              style={styles.select}
              onPress={() => setVisible(true)}
            >
              <Text>
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </Text>
              <Feather name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>

            <Modal
              visible={visible}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPress={() => setVisible(false)}
              >
                <TouchableOpacity style={styles.modalContent}>
                  <FlatList
                    contentContainerStyle={{ gap: 4 }}
                    data={options}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                          onChange(item.value);
                          setVisible(false);
                        }}
                      >
                        <Text>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
          </>
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
    color: "red",
    marginTop: 4,
  },
  select: {
    flexDirection: "row",
    height: 44,
    backgroundColor: "#FFFF",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#000",
    borderStyle: "solid",
  },

  modalContainer: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#ffff",
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 10,
  },
  option: {
    paddingVertical: 14,
    backgroundColor: "rbga(208, 208, 208, 0.40)",
    borderRadius: 4,
    paddingHorizontal: 4,
  },
});
