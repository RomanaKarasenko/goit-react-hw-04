import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const imageData = {
    imageSrc: image.urls.regular,
    imageDescription: image.description,
    imageAltDescription: image.alt_description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };

  return (
    <div className={css.imageCards} onClick={() => onImageClick(imageData)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
