import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetalhesScreen() {
    // Captura o parâmetro 'slug' da URL (definido pelo nome do arquivo: [slug])
    const { slug } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Detalhes</Text>
            <Text style={styles.paramText}>
                Parâmetro Recebido (Slug):
            </Text>
            <Text style={styles.slugValue}>
                **{slug || 'Nenhum Parâmetro'}**
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    paramText: { fontSize: 18, marginTop: 10 },
    slugValue: { fontSize: 22, color: 'darkred', fontWeight: 'bold' }
});
