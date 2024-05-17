'use client'
import { Table, Button} from 'flowbite-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const { useRouter } = require("next/navigation")


const AuthorTable = () => {
        const router = useRouter()
        const [authors, setAuthors] = useState([])

        useEffect(() => {
                axios.get('http://localhost:8000/api/authors')
                .then(res => setAuthors(res.data))
                .catch(err => console.log(err))
        })

        const handleEdit = (id) => {
            router.push(`/edit/${id}`)
        }
        
        return (
        <div className="overflow-x-auto max-w-[75%]">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell align='center'>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {authors.map((author, idx) => (
                        <Table.Row key={idx} className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                {author.name}
                            </Table.Cell>
                            <Table.Cell>
                                <div className='flex justify-evenly'>
                                    <Button href={`/edit/${author._id}`} pill color='light'>Edit</Button>
                                    <Button  pill color='red'>Delete</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
        )
}

export default AuthorTable;