"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Label, TextInput, Select, Checkbox } from "flowbite-react";

const NewPirate = (props) => {
        const [pirate, setPirate] = useState({
            pirateName: '',
            imageUrl: '',
            numberOfTreasureChests: 0,
            catchPhrase: '',
            crewPosition: '',
            pegLeg: false,
            eyePatch: false,
            hookHand: false
        });
    
        const handleChange = (event) => {
            setPirate({
                ...pirate,
                [event.target.name]: event.target.value
            });
        }
    
        const handleCheckboxChange = (event) => {
            setPirate({
                ...pirate,
                [event.target.name]: event.target.checked
            });
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
    
            axios.post('http://localhost:8000/pirates', pirate)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    return (
        <div className="flex flex-col w-2/3 mt-5 m-auto ">
            {/* tittle */}
            <div className="flex bg-yellow-700 p-5 justify-center ">
                <h1 className="text-3xl font-bold mr-5 text-cyan-50">Pirate Crew</h1>
                <Button color="gray" href="/pirates">
                    Crew Board
                </Button>
            </div>
            <div className="bg-yellow-200 ">
                <form onSubmit={handleSubmit} className='flex p-5 justify-center'>
                        <div className="flex flex-col">
                            <div className="mb-2 block">
                                <Label value="Pirate Name" />
                            </div>
                            <TextInput type="text" required name="pirateName" value={pirate.name} onChange={handleChange} />
                            <div className="mb-2 block">
                                <Label value="Image URL" />
                            </div>
                            <TextInput type="text" required name="imageUrl" value={pirate.imageUrl} onChange={handleChange} />
                            <div className="mb-2 block">
                                <Label value="Number of Teasure Chests" />
                            </div>
                            <TextInput min="0" type="number" required name="numberOfTreasureChests" value={pirate.treasureChests} onChange={handleChange} />
                            <div className="mb-2 block">
                                <Label value="Pirate Catch Phrase" />
                            </div>
                            <TextInput sizing="lg" type="text" required name="catchPhrase" value={pirate.catchPhrase} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col ml-20">
                            <div className="mb-2 block">
                                <Label value="Crew Position" />
                            </div>
                            <Select required name="crewPosition" value={pirate.crewPosition} onChange={handleChange}>
                                <option>Captain</option>
                                <option>First Mate</option>
                                <option>Quarter Master</option>
                                <option>Boatswain</option>
                                <option>Powder Monkey</option>
                            </Select>
                            <div className="mt-5">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="pegLeg" name="pegLeg" checked={pirate.pegLeg} onChange={handleCheckboxChange} />
                                    <Label className="flex">Peg Leg</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="eyePatch" name="eyePatch" checked={pirate.eyePatch} onChange={handleCheckboxChange} />
                                    <Label className="flex">Eye Patch</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="hookHand" name="hookHand" checked={pirate.hookHand} onChange={handleCheckboxChange} />
                                    <Label className="flex">Hook Hand</Label>
                                </div>
                            </div>
                            <div className="mt-5">
                            <Button color="blue" type="submit">Add pirate</Button>
                            </div>
                        </div>
                </form>
                
            </div>
            
        </div>
    );
};

export default NewPirate;
