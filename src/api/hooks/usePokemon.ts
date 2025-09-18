import { useQuery } from "@tanstack/react-query";
import {fetchPokemonDetail} from "@/api/pokemon.ts";

export function usePokemon(id?: string) {
    return useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => fetchPokemonDetail(id!),
        enabled: !!id,
    });
}