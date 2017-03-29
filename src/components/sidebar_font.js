import React,{ Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fontSet } from './actions/index'


class SidebarFont extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  fontSetChange = (innerText) => {
    const colorText = innerText.target.value
    const result=[];
    colorText.split(';').forEach(
      function(obj,index) {
        result.push({
          name: obj.split(':')[0],
          size: obj.split(':')[1]
        })
      }
    )
    const resultArray = _.take(result, result.length-1)
    this.props.fontSet(resultArray)
  }
  render(){
    return(
      <div className="sidebarComponent" id="sidebar_font">
        {/*<textarea placeholder="text font" onChange={this.fontSetChange}>$font_1: 36px;$font_2: 34px;$font_3: 28px;$font_4: 24px;</textarea>*/}
        <textarea placeholder="$font_1: 36px;" onChange={this.fontSetChange}></textarea>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fontSet }, dispatch);
}
export default connect( null, mapDispatchToProps)(SidebarFont);
