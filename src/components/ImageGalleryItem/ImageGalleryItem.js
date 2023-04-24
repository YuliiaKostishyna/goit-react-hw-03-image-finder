import'./ImageGalleryItem.css'
import PropTypes from "prop-types"; 
const ImageGalleryItem = ({tags, webformatURL,largeImageURL}) => {
   
return (
    <li className="gallery-item">
  <img src={webformatURL} largeimage={largeImageURL} alt={tags} />
</li>
)
}

ImageGalleryItem.propTypes = {
  tags:PropTypes.string.isRequired,
  webformatURL:PropTypes.string.isRequired,
  largeImageURL:PropTypes.string.isRequired
}

export default ImageGalleryItem;