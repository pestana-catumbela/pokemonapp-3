import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useStore } from '../hooks/useStore';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '../context/theme-context';
import { Image, Container } from '../styles/styles';
import { Text, ActivityIndicator } from 'react-native';

export default function PokemonScreen() {
    const { themeColor } = useTheme();
    const { name, url } = useLocalSearchParams();
    const { error, loading, pokemonImage, fetchPokemonDetails } = useStore();

    useEffect(() => { fetchPokemonDetails(url.toString()); }, []);

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    
    if (error) return <Text style={{ color: 'brown', fontWeight: 500, alignSelf: 'center' }}>{error}</Text>;

    return (
        <Container style={{ backgroundColor: themeColor.backgroundColor }}>
            <Stack.Screen options={{
                title: name.toString().charAt(0).toUpperCase() + name.slice(1),
                headerTintColor: themeColor.color,
                headerStyle: { backgroundColor: themeColor.backgroundColor }
            }} />

            <Image source={{ uri: pokemonImage as any }} resizeMode="cover" />
        </Container>
    );
}
