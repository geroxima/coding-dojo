"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Blockquote} from 'flowbite-react';
const { useParams } = require("next/navigation")

export default function PiratePage() {
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/pirates/${id}`);
                setPirate(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading Pirate</div>;
    }

    return (
        <div className="flex flex-col w-2/3 mt-5 m-auto">
            <div className="flex bg-yellow-700 p-5 justify-center">
                <h1 className="text-3xl font-bold mr-5 text-cyan-50">{pirate.pirateName}</h1>
            </div>
            <div className="bg-yellow-200 flex justify-between p-5">

                <div className='flex flex-col max-w-[50%] items-center'>
                    <img className='rounded-lg' src={pirate.imageUrl} />
                    <Blockquote className='mt-5'>"{pirate.catchPhrase}"</Blockquote>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex justify-center mb-5'>
                        <h1 className='text-5xl font-bold'>About</h1>
                    </div>
                    <div className='ml-5'>
                        <h3 className='font-medium text-xl mb-3'>Position: {pirate.crewPosition}</h3>
                        <h3 className='font-medium text-xl mb-3'>Treasures: {pirate.numberOfTreasureChests}</h3>
                        <div className='flex items-center'>
                            <h3 className='font-medium text-xl mb-3'>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</h3>
                        </div>
                        <h3 className='font-medium text-xl mb-3'>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</h3>
                        <h3 className='font-medium text-xl mb-3'>Hook Hand: {pirate.hookHand ? 'Yes' : 'No'}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
