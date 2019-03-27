 import React, { Fragment } from 'react';

 export default class From extends React.Component {
   constructor(props){
     super(props)
     this.state ={
       characterCount: 0
     }
   }
   handleChange(event){
     var input = event.target.value;
     this.setState({
       characterCount: input.length
     });
   }
   render(){
     return(
       <Fragment>
       <textarea
           name="message"
           type="text"
           placeholder="Message"
           maxLength="500"
           onChange={this.handleChange.bind(this)}
           required
      />
      <p>{this.state.characterCount}/500</p>
      </Fragment>
     )
   }
 }
