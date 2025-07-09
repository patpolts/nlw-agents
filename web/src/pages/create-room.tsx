/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRooomsAPIResponse = Array<{
    id: string
    name: string
}>

export function CreateRoom(){
    const {data, isLoading} = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms')
            const result: GetRooomsAPIResponse = await response.json()

            return result
        }
    })
    return (
        <div>
            <h1>Create Room</h1>
            <div className="flex flex-col gap-2 bg-zinc-800 shadow-md">
                {isLoading && <p> Carregando... </p>}
                {data && data.map((room) => {
                    return (<p key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.name}</Link>
                    </p>)
                })}
            </div>
        </div>
    );
}