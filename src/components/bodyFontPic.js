import React,{ Component } from 'react';

export default class BodyFontPic extends Component{
  render(){
    const { size, name } = this.props
    return(
      <div>
        <span style={{fontSize:size}}>{name} : {size}</span><br/>
      </div>
    );
  }
}
