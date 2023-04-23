import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = './data';

export const ExactProduct = () => {
    const [exact, setExact] = useState([]);
    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/${productId}`)
            .then(res => res.json())
            .then(data => {
                setExact(data);
            })
    }, [productId])

    const onBackClick = () => {
        navigate(-1);
    }

    return(
        <>
        <h2>This is a exact product</h2>
        <p>{exact.name}</p>
        <button onClick={onBackClick}>Back</button>
        </>
    );
}