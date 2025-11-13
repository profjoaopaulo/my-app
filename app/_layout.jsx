import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Define o grupo (tabs) como a tela principal. 
        O headerShown: false garante que as Tabs apareçam, mas sem o cabeçalho Stack duplicado.
      */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* Define a rota de detalhes. 
        Ela será empilhada acima das Tabs (Stack Navigation).
      */}
            <Stack.Screen
                name="detalhes/[slug]"
                options={{ title: 'Detalhes do Item' }}
            />
        </Stack>
    );
}
