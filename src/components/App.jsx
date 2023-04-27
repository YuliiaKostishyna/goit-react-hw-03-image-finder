import { Component } from "react"
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from "./Api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

export class App extends Component{
  state = {
query:'',
image:[],
page:1,
isLoad: false,
loadMore: false
  };



  handleChange =(e) => {
    this.setState({query:e.target.value.trim()})
    
  }
handleSubmit = (e) => {
  
  e.preventDefault()
  if (this.state.query.trim().length === 0) {
    alert('enter data to search')
    return
  }
 
  
 try {
 
  this.setState({
    isLoad: !this.state.isLoad,
  })

  fetchImages(this.state.query, 1).then((item) => {
    if(item.totalHits === 0){
      alert('Nothing was found according to your request')
      return
    }
    
 item.hits.length <12? this.setState({loadMore: false}):this.setState({loadMore: true})
 this.setState({image:this.normalize(item.hits)})
  })  } catch (error){console.log(error)} finally { }
 
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
 
try {
  this.setState({isLoad: true})

fetchImages(this.state.query, this.state.page + 1).then((item) => {
  item.hits.length <12? this.setState({loadMore: false}):this.setState({loadMore: true})
  this.setState({image:[...this.state.image, ...this.normalize(item.hits)],page:this.state.page + 1})
   })} catch (error){console.log(error)}  finally {this.setState({isLoad: false})}
   
}

render () {
  return (
  
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar handleChange = {this.handleChange} query = {this.state.query} handleSubmit = {this.handleSubmit}/>
      <ImageGallery image = {this.state.image}/> 
      {this.state.loadMore && <Button onClick = {this.handleOnClick}></Button>}
      {this.state.onLoad && <Loader/>}
      <Modal></Modal>
     
    </div>
    
  );
}};
