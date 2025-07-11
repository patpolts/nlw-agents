import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import  { Button } from "./ui/button";

export function BackButton(){
    const navigate = useNavigate()

    const handleBackLink = () => {
        if(window.history.length > 2){
            navigate(-1)
        }else{
            navigate('/')
        }
    }
    
    return( 
        <Button onClick={handleBackLink} variant="outline" color="secondary">
            <ArrowLeft className="mr-2 size-4" />
            Voltar
        </Button> 
    )
}