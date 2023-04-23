import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
const ImageGallery =({image})=> {

    return (
        <ul className="gallery">
  {image.map((item) => 
  { 
  return <ImageGalleryItem key = {item.id} tags = {item.tags} webformatURL = {item.webformatURL} largeImageURL = {item.largeImageURL}></ImageGalleryItem>})}
</ul>

    )
}

export default ImageGallery;
