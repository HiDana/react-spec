import React,{ Component } from 'react';
import BodyColorPic from './bodyColorPic.js'

import { connect } from 'react-redux';


class BodyColor extends Component{
  Colorpic(){
    const { colorText } = this.props
    if(colorText){
      const colorPic = colorText.map((color, key)=>(
        <BodyColorPic key={key} color={color.color} name={color.name}/>
      ))
      return colorPic
    }
  }
  render(){
    return(
      <div className="bodyColor">
        {this.Colorpic()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    colorText: state.colorText
  };
}

export default connect(mapStateToProps)(BodyColor);
