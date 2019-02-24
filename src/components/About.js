import React, { Component } from 'react';
var googleSdk = require('../googleCloudConnector');

export default class About extends Component {

   componentDidMount(){
   }

   mapTextToAction = (text) => {
      if(text.toLowerCase().includes("download")){
         this.downloadFile();
      }
      console.log("Text", text);
   }

    downloadFile = () => {
      document.getElementById('downloaded').click();
    }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>               
               <a id="downloaded" className="button" href={resumeData.resumeFile} download><i className="fa fa-download"></i> Download Resume</a>
            </div>
         </div>
      </section>
    );
  }
}