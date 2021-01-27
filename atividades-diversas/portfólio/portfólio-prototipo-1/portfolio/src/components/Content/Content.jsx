import React,{Component} from 'react'
import './Content.css'

import  'react-image-gallery/styles/css/image-gallery.css'

import Devices2 from '../../assets/devices2.jpg'
import Gallery from 'react-image-gallery'
import Manutencao from '../../assets/manutencao.jpg'
import Manutencao2 from '../../assets/manutencao2.jpg'
import Manutencao3 from '../../assets/manutencao3.jpg'
import Tela from '../../assets/tela.jpg'
import Script from '../../assets/script.jpg'
import Desenvolvimento1 from '../../assets/desenvolvimento1.jpg'
import Desenvolvimento2 from '../../assets/desenvolvimento2.jpg'



  const images = [
    {
                        original: Manutencao,
                        thumbnail:'',
    },{
                        original: Manutencao2,
                        thumbnail:'',
    },{
                        original: Manutencao3,
                        thumbnail:'',
    },
    {
                        original: Tela,
                        thumbnail:'',
    },
    {
                        original: Desenvolvimento1 ,
                        thumbnail:'',
    },
    {
                        original: Desenvolvimento2 ,
                        thumbnail:'',
    },{
                        original: Script ,
                        thumbnail:'',
    }
   ,{
                        original: Devices2 ,
                        thumbnail:'',
    }

  ];



export default class Content extends Component{

    state = {
    
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showVideo: {},
        showThumbnails:false
    }

    render(){
        return(
            <div className="ComponentContent">

                {/**
                    
                    <div className="componentGalleryDesign">
                </div> 

                 */}
                  
                    <Gallery 
                            items={images}
                            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                            showNav={this.state.showNav}
                            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton} 
                            showThumbnails={this.state.showThumbnails}     
                        /> 
                     
                       <h6 className="componentGalleryDescription">
                           As imagens são meramente ilustrativas *
                       </h6>

                        {/** funciona porque é filho do body 
                        e não está contido em nehum 
                        conteiner */}
                       <h1 className="stick">
                         stick  
                       </h1>

                    <div className="componentContentLargerToSmallDevices">
                       <div className="ComponentContentContent">
                            <div className="ComponentContentContentServicos">
                                <div className="componentServiceCard">
                                    <h3 className="componentContentTitle" >Serviços:</h3>
                                </div>
                            </div>

                            <div  className="ComponentContentContentMe">
                            <div className="componentMeCard">
                                    <h3 className="componentContentTitle" >Quem eu sou:</h3>
                                </div>
                            </div>
                       </div>

                       <div className="componentContentFooter">
                                <h4>footer aqui</h4>
                       </div>

                       <div className="componentContentCopy">
                                <p></p> <hr />
                                <p>Site criado por  
                               
                                    <a>
                                        Leonardo Sousa
                                    </a>
                            </p>
                       </div>
                </div>

                
                <div className="componentContentLittleDevices">
                    <h1>
                        little devices
                    </h1>
                </div>


            </div>
        )
    }
}