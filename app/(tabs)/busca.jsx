import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import {useState} from 'react';


export default function BuscaScreen() {
    const router = useRouter();
    const [nome, setNome] = useState('');

    const handleSearch = () => {
        const itemID = 'pesquisa-rapida-001';

        // Navegação programática (Stack) passando o parâmetro 'itemID'
        router.push(`/detalhes/${nome}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Segunda Aba: Navegação Programática</Text>

            <TextInput placeholder='Nome...' onChangeText={setNome} value={nome}/>

            <Button
                title="Ver Detalhes do Item Pesquisado"
                onPress={handleSearch}
            />
            <Text style={styles.note}>
                *Isso usa 'router.push()' para ir para a tela 'detalhes' com um parâmetro fixo.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, marginBottom: 30, textAlign: 'center' },
    note: { marginTop: 20, fontSize: 12, color: 'gray', textAlign: 'center' }
});
