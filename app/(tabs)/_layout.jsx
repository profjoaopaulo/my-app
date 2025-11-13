import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index" // Rota para 'app/(tabs)/index.jsx'
                options={{
                    title: 'Links da Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="busca" // Rota para 'app/(tabs)/busca.jsx'
                options={{
                    title: 'Busca c/ Parâmetro',
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
