'use client'
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Label, TextInput} from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';
import axios from 'axios';

const NewPetPage = () => {
    const router = useRouter();
    const { id } = useParams(); // get the id from the URL
    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        petSkillOne: '',
        petSkillTwo: '',
        petSkillThree: ''
    });
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const { petName, petType, petDescription, petSkillOne, petSkillTwo, petSkillThree } = res.data;
                setPet({
                    petName,
                    petType,
                    petDescription,
                    petSkillOne,
                    petSkillTwo,
                    petSkillThree
                });
            })
            .catch(err => console.log(err));
        }
    }, [id]);

    const handleChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    };
    
    const handleUpdatePet = (e) => {
        e.preventDefault();
        const updatedPet = {
            petName: pet.petName,
            petType: pet.petType,
            petDescription: pet.petDescription,
            petSkillOne: pet.petSkillOne,
            petSkillTwo: pet.petSkillTwo,
            petSkillThree: pet.petSkillThree
        };
        axios.put(`http://localhost:8000/api/pets/${id}`, updatedPet)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => {
            console.log(err);
            if (err.response.data.errors) {
                setErrors(err.response.data.errors);
            }
        });
    }

    return (
        <div>
            <h3 className="font-semibold">Edit {pet.petName}</h3>
            <form onSubmit={handleUpdatePet}>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                        <Label value='Pet Name'/>
                        <TextInput name='petName' type="text" required onChange={handleChange} value={pet.petName} helperText={errors.petName?.message}  color={errors.petName ? 'failure' : undefined} />
                        <Label value='Pet Type'/>
                        <TextInput name='petType' type="text" required onChange={handleChange} value={pet.petType} helperText={errors.petType?.message}  color={errors.petType ? 'failure' : undefined} />
                        <Label value='Pet Description'/>
                        <TextInput name='petDescription' type="text" required onChange={handleChange} value={pet.petDescription} helperText={errors.petDescription?.message} color={errors.petDescription ? 'failure' : undefined} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label value='Skill 1'/>
                        <TextInput name='petSkillOne' type="text" onChange={handleChange} value={pet.petSkillOne} />
                        <Label value='Skill 2'/>
                        <TextInput name='petSkillTwo' type="text" onChange={handleChange} value={pet.petSkillTwo} />
                        <Label value='Skill 3'/>
                        <TextInput name='petSkillThree' type="text" onChange={handleChange} value={pet.petSkillThree} />
                    </div>
                </div>
                <Button type='submit' pill color='indigo' className='mt-5'>
                    <HiCheck className='size-3 mr-2'/>
                    Update Pet
                </Button>
            </form>
        </div>
    );
}

export default NewPetPage;