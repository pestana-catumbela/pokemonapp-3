import { useEffect } from 'react';
import { Link } from 'expo-router';
import { useStore } from '../hooks/useStore';
import { useTheme } from '../context/theme-context';
import { PaginationComponent } from './pagination-component';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { Url, Name, ListItem, ScrollView } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PokemonComponentList = () => {
    const { themeColor } = useTheme();
    const { error, loading, pokemon, fetchPokemonList } = useStore();

    useEffect(() => { fetchPokemonList(''); }, []);

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
        
    if (error) return <Text style={{ color: 'brown', fontWeight: 500, alignSelf: 'center' }}>{error}</Text>;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
            <SafeAreaView>
                <FlatList
                    data={pokemon}
                    keyExtractor={(item) => item.url}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <Link 
                            href={{ pathname: '/pokemon', params: { name: item.name, url: item.url } }}
                            style={{ width: '90%', alignSelf: 'center', marginBottom: 14 }}
                        >
                            <ListItem>
                                <Name style={{ color: themeColor.color }}>{item.name}</Name>
                                <Url style={{ color: themeColor.color }}>{item.url}</Url>
                            </ListItem>
                        </Link>
                    )}
                />

                <PaginationComponent />
            </SafeAreaView>
        </ScrollView>
    );
}
