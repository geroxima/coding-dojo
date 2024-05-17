"use client"
const { useParams, useRouter } = require("next/navigation")

const NumPage = () => {
    const {param, text, background} = useParams();
    return (
        <h1>
            { isNaN(param) ? "The word Is ":" The number Is " }
            {param}
        </h1>
    )
}

export default NumPage;
