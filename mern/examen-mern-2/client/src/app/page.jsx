import PetsTable from './components/PetsTable';
import { Button } from 'flowbite-react';
import { HiOutlineHome } from 'react-icons/hi';

export default function Home() {
  return (
    <section>
      <div className='flex items-center gap-5'>
        <h3 className="font-semibold">These pets are looking for a good home</h3>
        <Button size="sm" href="/pets/new" color="indigo" pill>
          <HiOutlineHome className='size-3 mr-2'/>
          Add a pet to the shelter
        </Button>
      </div>
      <PetsTable/>
    </section>
    );
}
