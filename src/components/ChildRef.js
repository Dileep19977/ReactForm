import React, {Component} from 'react'

class ChildRef extends Component{

  constructor(props)
  {
    super(props)
    this.IntitalRef = React.createRef();
  }

  focusinp(){
    this.IntitalRef.current.focus();
  }
  render()
  {
    return(
      <>
     <input type="text" ref={this.IntitalRef}/>
      </>
    )
  }
}

export default ChildRef;