import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

/*Esta aba acaba sendo a tela inicial do App. Pois o grupo (tabs) foi definido como tela inicial e 
este arquivo possui nome index.jsx*/
export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Primeira Aba: Navegação com Link</Text>

            {   /* Link 1: Navegação para a rota dinâmica 'detalhes' com o parâmetro 'produto-A'
                Isso empilha a tela acima das Tabs.*/}
            <Link
                href="/detalhes/produto-A"
                style={styles.link}
            >
                Ir para Detalhes do Produto A (Link)
            </Link>

            {/* Link 2: Navegação para a rota dinâmica 'detalhes' com o parâmetro 'item-B'*/}
            <Link
                href="/detalhes/item-B"
                style={styles.link}
            >
                Ir para Detalhes do Item B (Link)
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
    link: { color: 'blue', marginTop: 15, fontSize: 16 }
});
