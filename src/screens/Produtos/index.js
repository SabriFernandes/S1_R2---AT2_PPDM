import { View, Text, StyleSheet, Image, Pressable, Alert, ScrollView } from "react-native";
import InputSpinner from "react-native-input-spinner";

export default function Produtos() {

    function adicionarCarrinho(nome) {
        Alert.alert("Sucesso", `${nome} adicionado ao carrinho`);
    }

    const produtos = [
        {
            id: 1,
            nome: "Presilha Ratinho",
            preco: "R$ 20,00",
            pix: "R$ 18,00",
            imagem: require('../../../assets/ratinho.jpg')
        },
        {
            id: 2,
            nome: "Presilha Flor",
            preco: "R$ 15,00",
            pix: "R$ 13,50",
            imagem: require('../../../assets/presilhaflor.jpg')
        },
        {
            id: 3,
            nome: "Presilha Laço",
            preco: "R$ 25,00",
            pix: "R$ 22,50",
            imagem: require('../../../assets/presilha laço.jpg')
        },
        {
            id: 4,
            nome: "Presilha Brilho",
            preco: "R$ 18,00",
            pix: "R$ 16,00",
            imagem: require('../../../assets/presilhabrilho.jpg')
        },
        {
            id: 5,
            nome: "Presilha Luxo",
            preco: "R$ 30,00",
            pix: "R$ 27,00",
            imagem: require('../../../assets/Luxo.jpg')
        }
    ];

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.titulo}>Nossos Produtos</Text>

            {produtos.map((produto) => (
                <View key={produto.id} style={styles.card}>

                    <Image
                        source={produto.imagem}
                        style={styles.img}
                    />

                    <Text style={styles.nome}>{produto.nome}</Text>
                    <Text>{produto.preco}</Text>
                    <Text style={styles.pix}>PIX: {produto.pix}</Text>

                    <InputSpinner
                        min={1}
                        max={10}
                        step={1}
                        colorMin="#ffffff"
                        colorMax="#aaaaaa"
                    />

                    <Pressable 
                        style={styles.botao} 
                        onPress={() => adicionarCarrinho(produto.nome)}
                    >
                        <Text style={{ color: "#fff" }}>Adicionar</Text>
                    </Pressable>

                </View>
            ))}

        </ScrollView>
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
        width: 150,
        height: 150,
        marginBottom: 12,
        alignSelf: 'center'
    },
    nome: {
        fontWeight: "bold",
        fontSize: 16
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