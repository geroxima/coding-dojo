'use client'
const { useParams, useRouter } = require("next/navigation")
const { useState } = require("react")
import AuthorForm from "../../components/AurthorForm"

const EditPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [author, setAuthor] = useState({});

    return (
        <div>
            <AuthorForm/>
        </div>
    );
}

export default EditPage;