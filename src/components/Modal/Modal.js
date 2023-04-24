
import { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './Modal.css'

class Modal extends Component {
    state = {
      visible: false,
      imgModal: {},
    };
    componentDidMount() {
        window.addEventListener('click', this.show);
        window.addEventListener('keydown', this.hide);
      }
      componentWillUnmount() {
        window.removeEventListener('click', this.show);
        window.removeEventListener('keydown', this.hide);
      }

      show = (event) => {
        if (event.target.nodeName === 'IMG')
       {this.setState({visible: true, imgModal: {src: event.target.src, alt: event.target.alt}})}
        
      }
      hide = () => {
this.setState({visible:false})
      }


      render() {
        return (

        <Rodal className = {'modal-rodal'} visible={this.state.visible} onClose={this.hide.bind(this)} width={1200} height={800}>
          
  <div className="modal">
    <img className='imgModal' src={this.state.imgModal.src} alt={this.state.imgModal.alt}/>
  </div>

        </Rodal>
      
        )
      }

}

export default Modal;