import { Button } from "flowbite-react";
import axios from "axios";
import Link from "next/link";

const PirateCard = ({ pirate, onDelete }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/pirates/${id}`)
      .then((response) => {
        onDelete(id);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="w-3/4 bg-gray-100 rounded-xl flex m-auto p-5m mb-2 p-">
      <div className="size-[25vh] rounded-xl overflow-hidden">
        <img
          src={pirate.imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col m-auto items-center">
        <h3 className="text-2xl font-bold">{pirate.pirateName}</h3>
        <div className="flex flex-wrap gap-2 mt-5">
          <Link href={`/pirate/${pirate._id}`}>
            <Button pill color="light">
              View Pirate
            </Button>
          </Link>
          <Button pill color="red" onClick={() => handleDelete(pirate._id)}>
            Walk the Plank
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PirateCard;
