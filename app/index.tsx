import { useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { Container } from '../styles/styles';
import { useTheme } from '../context/theme-context';
import { PokemonComponentList } from '../components/pokemon-component-list';

export default function Pokemons() {
    const { theme, themeColor, toggleTheme } = useTheme();

    const [icon, setIcon] = useState<string>('moon');

    const toggle = () => {
        setIcon(icon => icon === 'moon' ? 'sun' : 'moon');
    };

    return (
        <Container style={{ backgroundColor: themeColor.backgroundColor }}>
            <StatusBar style={ theme === 'light' ? 'dark' : 'light' } />

            <Stack.Screen options={{ 
                title: 'Pokemons', 
                headerTintColor: themeColor.color,
                headerStyle: { backgroundColor: themeColor.backgroundColor },
                headerRight: ({tintColor}) => <Feather name={icon as any} size={24} color={tintColor} onPress={() => [toggle(), toggleTheme()]} /> 
            }} />

            <PokemonComponentList />
        </Container>
    );
}
