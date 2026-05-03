import { create } from 'zustand';
import { api } from '../services/api';

interface PokemonListItem {
    name: string;
    url: string;
}

interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

interface PokemonDetailResponse {
    sprites: {
        other: {
            'official-artwork': {
                front_default: string | null;
            };
        };
    };
}

interface StoreState {
    pokemon: PokemonListItem[];
    pokemonImage: string | null;
    next: string | null;
    previous: string | null;
    error: string | null;
    success: string | null;
    loading: boolean;
    fetchPokemonList: (url: string) => Promise<void>;
    fetchPokemonDetails: (url: string) => Promise<void>;
}

export const useStore = create<StoreState>((set, get) => ({
    pokemon: [],
    pokemonImage: null,
    next: null,
    previous: null,
    error: null,
    success: null,
    loading: true,

    fetchPokemonList: async (url: string) => {
        set({ error: null, success: null });

        try {
            const response = await api.get<PokemonListResponse>(url);
            set({ pokemon: response.data.results, next: response.data.next, previous: response.data.previous, success: 'Dados carregados com sucesso', });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Erro ao processar os dados!';
            set({ error: message });
        } finally {
            set({ loading: false });
        }
    },

    fetchPokemonDetails: async (url: string) => {
        set({ error: null, success: null });

        try {
            const response = await api.get<PokemonDetailResponse>(url);
            const image = response.data.sprites.other['official-artwork'].front_default;
            set({ pokemonImage: image, success: image ? 'Dados carregados com sucesso' : 'Imagem não encontrada', });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Erro ao processar os dados!';
            set({ error: message });
        } finally {
            set({ loading: false });
        }
    },
}));
