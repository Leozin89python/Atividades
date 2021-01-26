import React ,{Component} from 'react'
import './App.css'

import Content from './components/Content/Content'
import Header from './components/Header/Header'

export default class App extends Component{
        render(){
            return(
                <React.Fragment>
                    <Header />
                    <Content/>
                </React.Fragment>
            )
        }
}