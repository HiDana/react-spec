import React,{ Component } from 'react';
import '../style/bodyColorPic.css'

export default class BodyColorPic extends Component{
  render(){
    const { color, name } = this.props
    return(
      <div className="bodyColorPic">
        <div className="bodyColorPic1 pic" style={{backgroundColor:color}}>{name}</div>
        <div className="bodyColorPic2 pic" style={{backgroundColor:color}}></div>
        <div className="bodyColorPic3 pic" style={{backgroundColor:color}}>{color}</div>
      </div>
    );
  }
}
