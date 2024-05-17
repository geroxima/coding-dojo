'use client'
import { useParams } from 'next/navigation';


const ColoredPage = () => {
    const {param, foreground, background} = useParams();
    return (
        <div style={{backgroundColor:background}}>
            <h1 style={{color:foreground}}>{param}</h1>
        </div>
    )
}

export default ColoredPage;