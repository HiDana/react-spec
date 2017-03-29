import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colorSet } from './actions/index'


class SidebarColor extends Component{
  colorSetChange = (innerText) => {
    const colorText = innerText.target.value
    const result=[];
    colorText.split(';').forEach(
      function(obj,index) {
        result.push({
          name: obj.split(':')[0],
          color: obj.split(':')[1]
        })
      }
    )
    console.log('result', result);
    this.props.colorSet(result)
  }
  

  render(){
    return(
      <div className="sidebarComponent">
        <textarea placeholder="text color" onChange={this.colorSetChange}>$color_black: #222;$color_red: #a00;$color_blue: #00a;</textarea>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ colorSet }, dispatch);
}
export default connect( null, mapDispatchToProps)(SidebarColor);
