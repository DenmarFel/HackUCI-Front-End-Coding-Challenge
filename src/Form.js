 import React, { Fragment } from 'react';
 import CharacterCounter from "./characterCounter";

 export default class From extends React.Component {
   render() {
     return(
       <Fragment>
       <form
         name="feedbackForm"
         target="iframe"
         method='post'
         action="https://tranquil-lowlands-24043.herokuapp.com/feedback"
         >
         <div className="ui input">
           <input
             name="first"
             type="text"
             placeholder="First Name"
             required/>
           <input
             name="last"
             type="text"
             placeholder="Last Name"
             required/>
           <input
             name="email"
             type="email"
             id="email"
             placeholder="john@example.com"
             required/>
           <CharacterCounter />
        </div>
         <input
          type="submit"
          className="ui button"
          value="Submit"/>
       </form>
        <iframe name="iframe"></iframe>
       </Fragment>

     )
   }
 }
