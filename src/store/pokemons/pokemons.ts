import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*
    {
        '1': { id: 1, name: 'bulbasaur' },
    }
*/

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon },
}

const getInitialState = (): PokemonsState => {
    // if(typeof localStorage === 'undefined') return {};
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    return favorites;
}

const initialState: PokemonsState = {
    // ...getInitialState(),
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = pokemon;
            }

            // TODO: No se debe de hacer en Redux;
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
        },
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer