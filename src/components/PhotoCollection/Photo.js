import { useEffect } from "react";

const PhotoCollection = ({
    //photo
    id,
    title, 
    imageUrl,
    onPhotoDelete,
    onPhotoSelect, 
    selected
}) => {
    useEffect(() => {
        console.log(`Photo ${title} - mounted!`);
            return () => {
                console.log(`Photo ${title} - unmounted!`);
            }
    }, [title]);

    useEffect(() => {
        console.log(`Photo ${title} - updated!`);
    }, [selected, title]);

    return (
        <div>
            <h3>The {title} with id: {id}</h3>
            {selected && <h4>Selected</h4>}
            <img src={imageUrl} alt={title} />
            <button onClick={() => onPhotoDelete(id)}>Delete</button>
            <button onClick={() => onPhotoSelect(id)}>Select</button>
        </div>
    );
}

export default PhotoCollection;