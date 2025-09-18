import {useParams} from "react-router";
import {usePokemon} from "@/api/hooks/usePokemon.ts";

export default function PokemonDetail() {
    const {id} = useParams<{ id: string }>()

    const {data, isPending, error} = usePokemon(id)

    if (isPending) return <span>Loading...</span>;
    if (error) return <span>Error...</span>;
    if (!data) return <span>No data</span>;

    return (
        <div>
            <h2>{data.name}</h2>
            <ul>
                {data.types.map((t) => (
                    <li key={t.slot}>
                        {t.type.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}