'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'
import { useParams } from 'next/navigation'
import { HiHome, HiThumbUp } from 'react-icons/hi'

const PetPage = () => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            setPet(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const handleAdopt = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            router.push('/');
        })
        .catch(err => console.log(err));
    };

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };

    return(
        <div className='flex flex-col'>
            <div className='flex gap-10 items-center'>
                <h2 className='font-xl font-semibold'>Details about: {pet.petName}</h2>
                <Button onClick={() => handleAdopt(pet._id)} size="sm" color='pink'>
                    <HiHome className='size-3 mr-2'/>
                    Adopt {pet.petName}
                </Button>
            </div>
            <div className='flex flex-col'>
                <span className='flex gap-2'> 
                    <h3 className='font-semibold'>Pet Type: </h3>
                    <p>{pet.petType}</p>
                </span>
                <span className='flex gap-2'>
                    <h3 className='font-semibold'>Description: </h3>
                    <p>{pet.petDescription}</p>
                </span>
                <span className='flex gap-2' >
                    <h3 className='font-semibold'>Skills: </h3>
                    <div>
                        <p>{pet.petSkillOne}</p>
                        <p>{pet.petSkillTwo}</p>
                        <p>{pet.petSkillThree}</p>
                    </div>
                </span>
            </div>
            <div className='mt-5 flex gap-2 items-center'>
                <Button onClick={handleLike} color='green' disabled={isLiked}>
                    <HiThumbUp className='size-3 mr-2'/>
                    Like {pet.petName}
                </Button>
                <p className='text-green-500 font-semibold'>Likes: {likes}</p>
            </div>
        </div>
    )
}

export default PetPage;