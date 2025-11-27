import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {   /* Define o grupo (tabs) como a tela principal. 
                O headerShown: false garante que as Tabs apareçam, mas sem o cabeçalho Stack duplicado.*/}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {   /* Define a rota de detalhes. 
                Ela será empilhada acima das Tabs (Stack Navigation).*/}
            
            {/*Rota dinâmica: definida entre colchetes, poderá ser renomeada em tempo de execução, por exemplo:
               /detalhes/paulo ou /detalhes/maria ou /detalhes/produto ...*/}
            <Stack.Screen
                name="detalhes/[slug]"
                options={{ title: 'Detalhes do Item' }}
            />
        </Stack>
    );
}
