import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <View style={styles.linha}>
        <FontAwesome name="phone" size={20} color="#3b82f6" />
        <Text style={styles.texto}>Telefone: (19) 99999-9999</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="whatsapp" size={20} color="#25D366" />
        <Text style={styles.texto}>WhatsApp: (19) 98888-8888</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="map-marker" size={20} color="#3b82f6" />
        <Text style={styles.texto}>Alfedro - 297</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="file-text-o" size={20} color="#3b82f6" />
        <Text style={styles.texto}>CNPJ: 23.753.123/6911-12</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10
  },
  texto: {
    fontSize: 16
  }
});