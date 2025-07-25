import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { CirclePause, Mic } from "lucide-react";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string
}


const isRecordingSupported = !!navigator.mediaDevices && 
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    typeof window.MediaRecorder === 'function'


export function RecordRoomAudio() {
    const params = useParams<RoomParams>()

    const [isRecording,setIsRecording] = useState(false)
    const recorder = useRef<MediaRecorder | null>(null)
    const intervalRef = useRef<NodeJS.Timeout>(null)

    async function stopRecording() {
        setIsRecording(false)

        if(recorder.current && recorder.current.state !== 'inactive'){
            recorder.current.stop()
        }

        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

    }

    async function uploadAudio(audio: Blob){
        const formData = new FormData()

        formData.append('file',audio, 'audio.webm')

        const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`,{
            method: 'POST',
            body: formData
        })

        const result = await response.json()
        console.log(result);
        
    }

    function createRecorder(audio: MediaStream) {
        recorder.current = new MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 64_000,
        })

        recorder.current.ondataavailable = async (event) => {
            if(event.data.size > 0){
                uploadAudio(event.data)
                console.log(event.data)
            }
        }

        recorder.current.onstart = () =>{
            console.log('Gravação iniciada!');
            
        }

        recorder.current.onstop = () => {
            console.log('Gravação encerrada/pausada!');
            
        }

        recorder.current.start()
        
    }

    async function startRecording(){
        if(!isRecordingSupported){
            alert('O seu navegador não suporta gravação de audio!')
            return
        }

        setIsRecording(true)

        const audio = await navigator.mediaDevices.getUserMedia({
            audio:{
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44_100,
            },
        })

        createRecorder(audio)

        intervalRef.current = setInterval(() => {
            recorder.current?.stop()

            createRecorder(audio)

        },5000)
    }

    
    if (!params.roomId) {
        return <Navigate replace to="/" />
    }
    
    return(
        <div className="w-full h-full px-4 py-8 ">
            <BackButton />
            <div className="flex flex-col h-screen gap-8 items-center justify-center bg-primary/10 px-4 py-8 mx-auto my-8">
                
                {isRecording ? (
                    <Button onClick={stopRecording}>
                        <CirclePause absoluteStrokeWidth /> Pausar audio
                    </Button>
                ): (
                    <Button onClick={startRecording}>
                        <Mic absoluteStrokeWidth /> Gravar audio
                    </Button>
                )}
                {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
            </div>
        </div>
    )
}