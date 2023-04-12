import Photo from "./Photo";

const PhotoCollection = ({
    photo,
    onPhotoDelete,
    onPhotoSelect
}) => {

    let photoList = photo.map((photo) => <li key={photo.id}><Photo {...photo} onPhotoDelete={onPhotoDelete} onPhotoSelect={onPhotoSelect} /></li>)

    return (
        <ul>
            {photoList}
        </ul>
        
    );
}

export default PhotoCollection;