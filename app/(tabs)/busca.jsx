import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

//Segunda aba (Busca c/ Parâmetro)
export default function BuscaScreen() {
    const router = useRouter();
    const [nome, setNome] = useState('');

    const handleSearch = () => {
        const itemID = 'Você não informou o parâmetro';

        if (!nome) {
            // Navegação programática (Stack) passando o parâmetro 'itemID' caso o campo esteja vazio
            router.push(`/detalhes/${itemID}`);
        }
        else {
            // Navegação programática (Stack) passando o parâmetro 'nome'
            router.push(`/detalhes/${nome}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Segunda Aba: Navegação Programática</Text>

            <TextInput placeholder='Digite o parâmetro...' onChangeText={setNome} value={nome} />

            <Button
                title="Ver Detalhes do Item Pesquisado"
                onPress={handleSearch}
            />
            <Text style={styles.note}>
                *Usa 'router.push()' para ir para a tela 'detalhes' com um parâmetro fixo.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, marginBottom: 30, textAlign: 'center' },
    note: { marginTop: 20, fontSize: 12, color: 'gray', textAlign: 'center' }
});
