import { Link } from "react-router-dom";

export const Product = ({
    name,
    url
}) => {
    const id = url.split('/').filter(x => x).pop()
    return (
        <div>
        <Link to={`/products/${id}`}>{name}</Link>        
        </div>
    );
}