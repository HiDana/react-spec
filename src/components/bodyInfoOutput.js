import React,{ Component } from 'react';

export default class BodyInfoOutput extends Component{
  constructor(props){
    super(props);
    this.state = {
      career: '',
    }
  }
  design = () => {
    this.setState({ career: 'design' })
  }
  career(){
    if(this.state.career === 'design'){
      return (
        <div>
          <button>pdf</button>
          <button>png</button>
          <button>jpeg</button>
        </div>
      )
    }
  }


  render(){
    return(
      <div className="bodyInfoOutput">
        <button onClick={this.design}>Design</button>
        <button >Engineer</button>
        {this.career()}
      </div>
    );
  }
}
