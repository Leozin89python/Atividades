import React ,{Component} from 'react'
import './Header.css'

import Linkedin from '../../assets/linkedin.png'
import Git from '../../assets/github.png'
import Me from '../../assets/eu.jpg'

export default class Header extends Component{
    render(){
        return(
            <div className="componentHeader">

                    <div className="componentHeaderLargeToSmallDevices">
                        <div>
                            <img className="componentHeaderImage" src={Me}/>
                        </div>

                        
                        <a className="componentHeaderSocialPerson" href="https://www.facebook.com/profile.php?id=100039697203669" target="blank">
                                <h2 className="componentHeaderSocialPersonName" >Leonardo Sousa</h2>
                            </a>

                        <div className="componentHeaderSocial">
                            <a className="componentHeaderSocialIn" href="https://linkedin.com/in/leonardo-dos-santos-sousa-238651173" target="blank">
                                <img className="componentHeaderSocialIn" src={Linkedin} />
                            </a>

                            <a className="componentHeaderSocialGit" href="https://github.com/Leozin89python" target="blank">
                                <img className="componentHeaderSocialGit" src={Git}/>
                            </a>
                        </div>
                </div>

                                {/**   Bloco de Responsividade   */}


                <div className="componentHeaderLittleDevices">
                    <a href="https://www.facebook.com/profile.php?id=100039697203669" target="blank">
                        <h3 className="componentHeaderSocialPersonNameLittleDevices">Leonardo Sousa</h3>
                    </a>
                    <img className="componentHeaderImageLittleDevices"  src={Me}/>
                </div>


                              {/**   Bloco de Responsividade   */}

            </div>
        )
    }
}