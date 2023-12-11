import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};

export default async function NamePage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <PokemonGrid pokemons={[]} />
            </div>
        </div>
    );
}