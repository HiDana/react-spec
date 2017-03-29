import React,{ Component } from 'react';
import '../style/sidebar.css'
import SidebarColor from './sidebar_color.js'
import SidebarFont from './sidebar_font.js'


export default class Sidebar extends Component{
  render(){
    return(
      <div className="sidebar">
        <SidebarColor />
        <SidebarFont />
      </div>
    );
  }
}
