'use client'
import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import Link from 'next/link'

const AuthorForm = ({handler}) => {
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState({})


    return(
        <div>
            <Link href={`/`} className='underline text-blue-500 font-semibold'>
                <h3>Home</h3>
            </Link>
            <h3>Edit this Author</h3>
            <form className='mt-5 flex flex-col items-start w-fit'>
                <Label value={`Author's name`} className='font-semibold'/>
                <TextInput required type='text' />
                <div className='flex wrap gap-5 mt-5 justify-between w-full'>
                    <Button color='red' pill>Cancel</Button>
                    <Button color='light' pill>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;