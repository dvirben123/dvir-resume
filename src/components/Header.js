import React, { Component } from 'react';
import style from './Header.css';
import Typing from 'react-typing-animation';
import Typist from 'react-typist';
import MediaQuery from 'react-responsive';

const googleSdk = require('../googleCloudConnector');

export default class Header extends Component {

  constructor(){
    super();

    this.state = {
      recording: false,
      showMovie: true
    }

    setTimeout(() => {
      this.setState({
        showMovie: false
      });
    }, 5000);
  }


  start = () => {
    this.setState({recording:true});
    googleSdk.startRecording(this.gotoAction)
  }

  

  gotoAction = (text) => {
    console.log("TEXT HEADER",text);
    this.setState({recording:false});

    if(text.includes("error")) {
      alert("Your microphone is off or not available");
      return;
    }
    

    var gotoArray = [];
    if(text.includes("goto")){
      gotoArray = text.split("goto");

    } else if(text.includes("go")) {
      gotoArray =text.split("go");
    } else if(text.toLowerCase().includes("download")){
      document.getElementById('downloaded').click();
    }    

      gotoArray.forEach(element => {
        if(element.includes("about")){
          document.getElementById('about123').click();
        }
        else if(element.includes("resume") || element.includes("cv")){
          document.getElementById('resume123').click();
        }
        else if(element.includes("test")){
          document.getElementById('testimonials123').click();
        }
        else if(element.includes("contact")){
          document.getElementById('contact123').click();
        } else {
          document.getElementById('home123').click();
          // document.getElementById('home123').click();
        }
      })
  }

  _renderTitle = () => {
    const data = <Typist>
                    <h1 className="responsive-headline">I am {this.props.resumeData.name}.</h1>
                    <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {this.props.resumeData.role}.{this.props.resumeData.roleDescription}
                    </h3>
                  </Typist>
    const t = <MediaQuery minDeviceWidth={1224}>
    {(matches) => {
      if (matches && !this.state.showMovie) {                   
        return data;
      } 
      if (!matches) {                    
          return data;
      } else {
        return <div></div>
      }
    }}
  </MediaQuery>

  return t;
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
            <li onClick={() => this.start() } className="fa-2x fa-mic"><i className="fa fa-microphone" style={{color: this.state.recording ? 'red':'white'}}/></li>
            <li  className="current"><a id="home123" className="smoothscroll" href="#home">Home</a></li>
            <li><a id="about123" className="smoothscroll" href="#about">About</a></li>
            <li><a id="resume123" className="smoothscroll" href="#resume">Resume</a></li>
               {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a id="testimonials123" className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a id="contact123" className="smoothscroll" href="#contact">Contact </a></li>
            </ul>
         </nav>
         <MediaQuery query="(min-device-width: 1224px)">
          {
            this.state.showMovie &&
            <div style={{width:'100%',  position: 'absolute', top: '0px'}} className={!this.state.showMovie?'fadeOut':'fadeIn'} >
              <video playsinline autoPlay muted loop width="100%" height="100%">
                <source src="video/dragon.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          }
         </MediaQuery>
          
        

         <div className="row banner">
            <div className="banner-text">
            {this._renderTitle()}
            
            
               <h3 style={{color:'#F06000', fontFamily:'sans-serif ', fontWeight: 'bold'}}>You can play with voice commands, just click on the microphone and say 'download' or 'go to about': </h3><li style={{display:'block'}} onClick={() => this.start() } className="fa-3x fa-mic"><i className="fa fa-microphone" style={{color: this.state.recording ? 'red':'white'}}/></li>
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