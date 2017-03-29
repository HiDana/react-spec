import React,{ Component } from 'react';
import BodyFontPic from './bodyFontPic.js'

import { connect } from 'react-redux';


class BodyFont extends Component{
  fontPic(){
    const { fontText } = this.props
    if(fontText){
      document.getElementById('bodyfront').style.display = 'block'
      const fontPic = fontText.map((font, key)=>(
        <BodyFontPic key={key} size={font.size} name={font.name}/>
      ))
      return fontPic
    }
  }
  render(){
    return(
      <div className="bodyfront" id="bodyfront">
        {this.fontPic()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    fontText: state.fontText
  };
}

export default connect(mapStateToProps)(BodyFont);
