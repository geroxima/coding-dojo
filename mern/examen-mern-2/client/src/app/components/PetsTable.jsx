'use client'
import { Table, Button } from 'flowbite-react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PetsTable = () => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then(res => {
            setPets(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Type</Table.HeadCell>
                    <Table.HeadCell align='center'>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {pets.map(pet => (
                        <Table.Row key={pet._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {pet.petName}
                            </Table.Cell>
                            <Table.Cell>
                                {pet.petType}
                            </Table.Cell>
                            <Table.Cell>
                                <div className='flex gap-2 justify-center'>
                                    <Button href={`/pets/${pet._id}`} pill color="light">Details</Button>
                                    <Button href={`/pets/${pet._id}/edit`} pill color='indigo'>Edit</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default PetsTable;