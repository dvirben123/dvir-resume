import React, { Component } from 'react';
var googleSdk = require('../googleCloudConnector');

export default class Header extends Component {

  gotoAction = (text) => {
    console.log("TEXT HEADER",text);
    var gotoArray = [];
    if(text.includes("goto")){
      gotoArray = text.split("goto");

    } else if(text.includes("go")) {
      gotoArray =text.split("go");
    }

    gotoArray.forEach(element => {
      if(element.includes("about")){
        document.getElementById('about123').click();
      }
    });
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li onClick={() => googleSdk.startRecording(this.gotoAction)} className="fa-2x fa-mic"><i className="fa fa-microphone" style={{color:'white'}}/></li>
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a id="about123" className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact </a></li>
               
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}