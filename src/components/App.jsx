import { Component } from "react"
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from "./Api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
export class App extends Component{
  state = {
query:'',
image:[],
page:1,
isLoad: false,
  }



  handleChange =(e) => {
    this.setState({query:e.target.value})
    
  }
handleSubmit = (e) => {
  e.preventDefault()
  this.setState({isLoad: true})
  fetchImages(this.state.query, 1).then((item) => {
 
 this.setState({image:this.normalize(item.hits)})
 
  })
  this.setState({isLoad: false})
}
normalize = (array) => {
  
  
return array.map(arr => {
 
  return {
    id: arr.id,
    webformatURL: arr.webformatURL,
    largeImageURL:arr.largeImageURL,
    tags: arr.tags
  }
})
}

handleOnClick = (e) => {

this.setState({isLoad: true})
fetchImages(this.state.query, this.state.page + 1).then((item) => {
 
  this.setState({image:[...this.state.image, ...this.normalize(item.hits)],page:this.state.page + 1})
 
   })
   this.setState({isLoad: false})
}

render () {
  return (
  
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar handleChange = {this.handleChange} query = {this.state.query} handleSubmit = {this.handleSubmit}/>
      <ImageGallery image = {this.state.image}/> 
      {this.state.image.length > 0 && <Button onClick = {this.handleOnClick}></Button>}
      {this.state.isLoad && <Loader/>}
     
    </div>
    
  );
}};
