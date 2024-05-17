import { Button } from 'flowbite-react';
import { HiTrash } from "react-icons/hi";

const DeleteButton = ({ handler }) => {
    return (
        <Button pill color="red" size="xs" onClick={handler}>Delete<HiTrash className="size-3"/></Button>
    );
}

export default DeleteButton;