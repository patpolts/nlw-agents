import { LoaderPinwheel } from "lucide-react";

type SpinnerProps = {
    showText?: boolean
    text?: string | null
}

export function Spinner({showText, text}: SpinnerProps) {
    return(
        <div>
            <LoaderPinwheel color="primary" className="animate-spin" />
            {showText && <p className="text-muted-foreground tex-sm">Carregando {text}...</p>}
        </div>
    )
}