import React,{ Component } from 'react';
import _ from 'lodash'
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
    const resultArray = _.take(result, result.length-1)
    this.props.colorSet(resultArray)
    document.getElementById("sidebar_color").appendChild(document.createElement("style")).innerHTML = `#sidebar_color:before {background: ${resultArray[0].color};}`
    document.getElementById("sidebar_font").appendChild(document.createElement("style")).innerHTML = `#sidebar_font:before {background: ${resultArray[1].color};}`
    document.getElementById("sidebar_color").style.borderColor=resultArray[0].color
    document.getElementById("sidebar_font").style.borderColor=resultArray[1].color
  }


  render(){
    return(
      <div className="sidebarComponent" id="sidebar_color">
        {/*<textarea placeholder="text color" onChange={this.colorSetChange}>$color_1: #4472CA;$color_2: #5E7CE2;$color_3: #92B4F4;$color_4: #CFDEE7;</textarea>*/}
        <textarea placeholder="$color_1: #4472CA;" onChange={this.colorSetChange}></textarea>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ colorSet }, dispatch);
}
export default connect( null, mapDispatchToProps)(SidebarColor);
