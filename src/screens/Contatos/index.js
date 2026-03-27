import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <View style={styles.linha}>
        <FontAwesome name="phone" size={20} color={"#3b82f6"}></FontAwesome>
      <Text>Telefone: (19) 99999-9999</Text>
      </View>

      <View>
        <FontAwesome name="whatsapp" size={20} color={"#25D366"}></FontAwesome>
      <Text> WhatsApp: (19) 98888-8888</Text>
      </View>
      <Text> Endereço: Campinas</Text>
      <Text> CNPJ: 12.345.678/0001-99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  titulo: {
    fontSize:22,
    marginBottom:10
  }
});