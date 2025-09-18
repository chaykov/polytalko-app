import {Link} from "react-router";
import {useState} from "react";
import {usePokemonList} from "@/api/hooks/usePokemonList.ts";


export default function PokemonList() {
    const [page, setPage] = useState(0);

    const {data, isPending, isFetching, error, limit} = usePokemonList(page)

    if (isPending) return <span>Loading...</span>
    if (error) return <span>Error...</span>
    if (!data) return <span>No data</span>

    return (
        <div>
            <ul className="flex flex-wrap gap-4">
                {data.results.map((pokemon, index) => (
                    <li key={pokemon.name} className="border-2 border-gray-400 w-24 h-24 rounded flex items-center justify-center p-2 text-center hover:bg-indigo-100">
                        <Link className="w-full h-full flex items-center justify-center " to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex gap-2 mt-4">
                <button
                    disabled={page === 0}
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                >
                    Previous
                </button>

                <span>
                    {page + 1} / {Math.ceil(data.count / limit)}
                    {isFetching && " …"}
                </span>

                <button
                    disabled={!data.next}
                    onClick={() => setPage((old) => old + 1)}
                >
                    Next
                </button>
            </div>
        </div>)
}