import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
    roomId: string
}
export function Room(){
    const params = useParams<RoomParams>()

    if(!params.roomId){
        <Navigate replace to={'/'} />
    }
    return (
        <div>
            <h1>Room Details</h1>
            <div>
                {JSON.stringify(params)}
            </div>
        </div>
    );
}