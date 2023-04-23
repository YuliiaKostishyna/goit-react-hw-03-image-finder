
const ImageGalleryItem = ({tags, webformatURL,largeImageURL}) => {
   
return (
    <li className="gallery-item">
  <img src={webformatURL} largeimage={largeImageURL} alt={tags} />
</li>
)
}

export default ImageGalleryItem;