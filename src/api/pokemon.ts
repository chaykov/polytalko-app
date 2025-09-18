export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

export const fetchPokemonList = async (offset: number, limit: number): Promise<PokemonListResponse> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch Pokemon list");
    return res.json();
};

export type Pokemon = {
    name: string;
    types: { slot: number; type: { name: string } }[];
    sprites: { front_default: string | null };
};

export const fetchPokemonDetail = async (id: number | string): Promise<Pokemon> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Failed to fetch Pokemon detail");
    return res.json();
};
