import React,{ Component } from 'react';
import '../style/body.css'
import '../style/bodyIndex.css'

import BodyOutput from './bodyOutput.js'
import BodyColor from './bodyColor.js'
import BodyFont from './bodyFont.js'
import BodyInfoOutput from './bodyInfoOutput.js'

export default class Body extends Component{
  render(){
    return(
      <div className="bodyInside">
        {/*<BodyOutput />*/}
        <BodyColor />
        <BodyFont />
        {/*<BodyInfoOutput />*/}
      </div>
    );
  }
}
