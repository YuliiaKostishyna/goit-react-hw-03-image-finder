import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import './ImageGallery.css'
import PropTypes from "prop-types"; 
const ImageGallery =({image})=> {

    return (
        <ul className="ImageGallery">
  {image.map((item) => 
  { 
  return <ImageGalleryItem key = {item.id} tags = {item.tags} webformatURL = {item.webformatURL} largeImageURL = {item.largeImageURL}></ImageGalleryItem>})}
</ul>

    )
}
ImageGallery.propTypes = {
    image:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
}
export default ImageGallery;
