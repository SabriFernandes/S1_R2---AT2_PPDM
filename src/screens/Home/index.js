import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";

export default function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>

                <Image
                    source={require("../../../assets/Lavanda.png")}
                    style={styles.logo}
                />

                <Text style={styles.titulo}>Lavanda Presilhas</Text>

                <Text style={styles.descricao}>
                    Somos uma empresa especializada em presilhas delicadas e elegantes,
                    trazendo beleza e estilo para o seu dia a dia.
                </Text>

                <Pressable
                    style={styles.botao}
                    onPress={() => navigation.navigate("Produtos")}
                >
                    <Text style={styles.textoBotao}>Ver Produtos</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => navigation.navigate("Contato")}
                >
                    <Text style={styles.textoBotao}>Contato</Text>
                </Pressable>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        backgroundColor: "#F3E5F5"
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7B1FA2"
    },
    descricao: {
        textAlign: "center",
        marginVertical: 15
    },
    botao: {
        backgroundColor: "#CE93D8",
        padding: 10,
        marginTop: 10,
        borderRadius: 8
    },
    textoBotao: {
        color: "#fff"
    }
});