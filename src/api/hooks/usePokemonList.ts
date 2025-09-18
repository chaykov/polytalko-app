import {useQuery} from "@tanstack/react-query";
import {fetchPokemonList} from "@/api/pokemon.ts";

export function usePokemonList(page: number) {
    const limit = 20;
    const offset = page * limit;

    const query = useQuery({
        queryKey: ['pokemon', page],
        queryFn: () => fetchPokemonList(offset, limit),
        placeholderData: (prev) => prev,
    })

    return {...query, limit}
}