import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import InputSpinner from "react-native-input-spinner";

export default function Produtos() {

    function adicionarCarrinho() {
        Alert.alert("Sucesso", "Produto adicionado ao carrinho");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Nossos Produtos</Text>

            <View style={styles.card}>

                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png" }}
                    style={styles.img}
                />

                <Text>Presilha</Text>
                <Text>R$ 20,00</Text>
                <Text style={styles.pix}>PIX: R$ 18,00</Text>

                <InputSpinner
                    min={1}
                    max={10}
                    step={1}
                    colorMin="#ffffff"
                    colorMax="#aaaaaa"
                >
                </InputSpinner>

                <Pressable style={styles.botao} onPress={adicionarCarrinho}>
                    <Text style={{ color: "#fff" }}>Adicionar</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    card: {
        backgroundColor: "#E1BEE7",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    img: {
        width: 60,
        height: 60
    },
    pix: {
        color: "green"
    },
    botao: {
        backgroundColor: "#7B1FA2",
        padding: 8,
        marginTop: 5,
        borderRadius: 5,
        alignItems: "center"
    }
});