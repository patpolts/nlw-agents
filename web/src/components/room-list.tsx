import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRooms } from "@/http/use-rooms";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function RoomList() {
    const {data, isLoading} = useRooms()
    return(
        <Card>
            {isLoading && <p className="text-muted-foreground tex-sm">Carregando salas...</p>}
            <CardHeader>
                <CardTitle>Salas Recentes</CardTitle>
                <CardDescription>
                    Acesso rápido para as salas criadas recentemente
                </CardDescription>
            </CardHeader>
            <CardContent  className="flex flex-col gap-3">
                {data?.map((room) => {
                    return <Link className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50"
                        key={room.id} 
                        to={`/room/${room.id}`}>
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-medium">{room.name}</h3>
                            <div className="flex items-center gap-2">
                                <Badge variant={"secondary"} className="text-xs">
                                    {dayjs(room.createdAt).toNow()}
                                </Badge>
                                <Badge variant={"secondary"} className="text-xs">
                                    {room.totalQuestions} pergunta(s)
                                </Badge>
                            </div>
                        </div>
                        <span className="flex items-center gap-1 text-sm">
                            Entrar
                            <ArrowRight className="size-3" />
                        </span>
                    </Link>
                })}
            </CardContent>
        </Card>
    )
}