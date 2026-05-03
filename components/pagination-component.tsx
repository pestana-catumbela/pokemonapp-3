import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../context/theme-context';
import { IncrementNumber, ContainerPagination } from '../styles/styles';

export const PaginationComponent = () => {
    const [count, setCount] = useState<number>(1);

    const { next, previous, fetchPokemonList } = useStore();

    const { themeColor } = useTheme();

    return (
        <ContainerPagination>
            <Feather 
                size={22}
                name="chevron-left"
                color={!previous ? themeColor.colorDisabled : themeColor.color}
                disabled={!previous ? true : false} onPress={() => [fetchPokemonList(`${previous}`), setCount(c => c - 1)]}
            />
                <IncrementNumber style={{ color: themeColor.color }}>{count}</IncrementNumber>
            <Feather 
                size={22}
                name="chevron-right"
                color={next ? themeColor.color : themeColor.colorDisabled}
                disabled={next ? false : true} onPress={() => [fetchPokemonList(`${next}`), setCount(c => c + 1)]}
            />
        </ContainerPagination>
    );
}
