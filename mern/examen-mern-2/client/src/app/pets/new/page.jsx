'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Label, TextInput} from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';
import axios from 'axios';

const NewPetPage = () => {
    
    const router = useRouter();
    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        petSkillOne: '',
        petSkillTwo: '',
        petSkillThree: ''
    });

    const [errors, setErrors] = useState([]);


    const handleChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    };

    const handleAddPet = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pets', pet)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => {
            console.log(err)
            if (err.response && err.response.data && err.response.data.code === 11000) {
                setErrors({
                    ...errors,
                    petName: { message: 'A pet with this name already exists.' }
                });
            } else if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            }
        });
    }


    return (
        <form onSubmit={handleAddPet}>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-2'>
                    <Label value='Pet Name'/>
                    <TextInput name='petName' type="text" required onChange={handleChange} helperText={errors.petName?.message} color={errors.petName ? 'failure' : undefined} />
                    <Label value='Pet Type'/>
                    <TextInput name='petType' type="text" required onChange={handleChange} helperText={errors.petType?.message} color={errors.petType ? 'failure' : undefined} />
                    <Label value='Pet Description'/>
                    <TextInput name='petDescription' type="text" required onChange={handleChange} helperText={errors.petDescription?.message} color={errors.petDescription ? 'failure' : undefined} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label value='Skill 1'/>
                    <TextInput name='petSkillOne' type="text"  onChange={handleChange} />
                    <Label value='Skill 2'/>
                    <TextInput name='petSkillTwo' type="text"  onChange={handleChange} />
                    <Label value='Skill 3'/>
                    <TextInput name='petSkillThree' type="text"  onChange={handleChange} />
                </div>
            </div>

            <Button type='submit' pill color='indigo' className='mt-5'>
                <HiCheck className='size-3 mr-2'/>
                Add Pet
            </Button>
        </form>
    );
}

export default NewPetPage;