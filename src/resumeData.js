let resumeData = {
    "imagebaseurl":"data:image/jpeg;base64,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",
    "name": "Dvir Ben Ishay",
    "resumeFile":"Dvir Ben Ishay.docx",
    "role": "R&D team leader, architect and fullstack developer",
    "linkedinId":"dvir.benishay@gmail.com",
    "skypeid": "dvirben123",
    "roleDescription": 
     " More than ten years of experience designing,"+
         "implementing and adapting technically sophisticated distributed systems."+
         " Proficient in .net infrastructure, node, react and Vue, object modeling technologies.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/dvir-ben-ishay-48169a62/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"skype",
          "url":"skype:dvirben123",
          "className":"fa fa-skype"
        },
        {
          "name":"facebook",
          "url":"https://www.facebook.com/public/Dvir-Ben-Ishay",
          "className":"fa fa-facebook"
        }
      ],
    "aboutme":"I am a hands-on, highly competent software engineer with 10 year's experience designing,"+
    "implementing and adapting technically sophisticated distributed gaming system,"+
    "developing leading-edge technologies and testing software across a variety of platforms."+
    "I have worked on numerous projects from concept to completion. A specialist in .NET, Proficient in OOAD with strong OOP (Object Oriented Analysis, Design and Programming) skills,"+
    "I take pride in coding to consistently high standards and regularly refresh my skills to ensure I keep up with ongoing "+
    "developments. I possess a proven track record of developing .NET applications and I am seeking a role "+
   "that will utilize and expand on these skills.  ",
    "address":"Israel",
    "website":"dvir.benishay@gmail.com",
    "education":[
      {
        "UniversityName":"The Open University",
        "specialization":"MBA",
        "MonthOfPassing":"April",
        "YearOfPassing":"2013",
        "Achievements":"Graduated with honors with an average of 85."
      },
      {
        "UniversityName":"Sela College",
        "specialization":"Design Patterns",
        "MonthOfPassing":"August",
        "YearOfPassing":"2013",
      },
      {
        "UniversityName":"Sela College",
        "specialization":"Performance & Debugging ",
        "MonthOfPassing":"September ",
        "YearOfPassing":"2014",
      },
      {
        "UniversityName":"SCE",
        "specialization":"B.Sc Software Engineering",
        "MonthOfPassing":"September",
        "YearOfPassing":"2007",
        "Achievements":"Graduated with honors with an average of 92."
      }
      
    ],
    "work":[
      {
        "CompanyName":"Edea",
        "specialization":"R&D Team Leader, Tech lead & Senior Software Developer",
        "MonthOfLeaving":"2017",
        "YearOfLeaving":"- Present",
        "Achievements":[
          "Managing 2 development teams in Kiev and one team at Israel",
          "Mentoring and leading developers into the cutting edge technologic (in Frontend and server side)",
          "Building cross platform services using .net core, redis, rabbitmq, postgress",
          "Bulding small application with Vue.js (css frameork 7)",
          "Bulding medium application with React.js for mobile, kiosk and desktop (using redux, matrial ui and more)",
          "Buliding hybrid application for mobile POS (react in the front and native wrapper), including integration with external devices of the mobile, such as zebra scanner, camera, beacon, credit card swiper (and EMV) and more",
          "Buldiing smart headoffice\\backoffice with forms generator (via cli commands) - Angular 7",     
          "Deep Involvement into the agile development cycle, including grooming, planning, kick-offs & retro meetings"          
        ]
        
      },
      {
        "CompanyName":"Toyga",
        "specialization":"R&D TL & Senior Software Developer",
        "MonthOfLeaving":"March",
        "YearOfLeaving":"2017",
        "Achievements":[
          "Managing and leading 3 devlopers in Israel and 3 developers in Kiev",
          "Design and developing platform for stock trading online",
          "Developed tools for monitoring",
          "Developed a Backoffice systems with API (.net) and Angular 2",
          "Deep Involvement into the agile development cycle, including grooming, planning, kick-offs & retro meetings"          
        ]
        
      },
      {
        "CompanyName":"365 Scores",
        "specialization":"Team Lead & Senior Software Developer",
        "MonthOfLeaving":"January",
        "YearOfLeaving":"2016",
        "Achievements":[
          "Created IPC Server for feeds scanners,",
          "Created Web Services that integrated with AWS (Building metrics for Cloud watch) ",
          "Developed tools of data migrations.",
          "Created a Backoffice systems with MVC 5 and AngularJS.",
          "Deep Involvement into the agile development cycle, including grooming, planning, kick-offs & retro meetings",
          "Created a integration tool testing (WPF & IOC).",
          "Implementing Web Service, WCF, REST service which communicate data in a both XML & JSON",
          "Designed reusable components by utilizing various standard frameworks ",
          "Designed Data Access Layer using ORM tools, Entity Framework, MongoDB",
          "Proven ability to lead, mange project resources, interact with clients, coordinate and work in achieving high levels of productivity and efficiency in complex, dynamic and challenging environments",
          "A team player with strong interpersonal and communication proficiency."
        ]
      },
      {
        "CompanyName":"Playwise",
        "specialization":"Senior Software Developer ",
        "MonthOfLeaving":"July 2010 - ",
        "YearOfLeaving":"May 2012 ",
        "Achievements":[
           " Created a full-fledged distributed gaming system from scratch (including design & architecture) ",
           " Created a dynamic resource & user control loading framework for Razor ",
           " Developed process of data migration, creating Normalizer windows service component(Migrate between MongoDB and SQL)",
           " Created a Backoffice system with dynamic loading of views and controllers in MVC 4 ",
           " Created a Watchdog tool for system maintenance and raising servers from faults ",
           " Deep Involvement into the agile development cycle, including grooming, planning, kick-offs & retro meetings",
           " Created a integration tool testing (WPF & IOC) ",
           " Implementing Web Service, WCF, REST service which communicate data in a both XML & JSON ",
           " Designed reusable components by utilizing various standard frameworks ",
           " Designed Data Access Layer using ORM tools, Entity Framework, MongoDB",
           " Proven ability to lead, mange project resources, interact with clients, coordinate and work in achieving high levels of productivity and efficiency in complex, dynamic and challenging environments",
           " A team player with strong interpersonal and communication proficiency"
        ]
      },
      {
        "CompanyName":"Servotronix",
        "specialization":"Software Developer",
        "MonthOfLeaving":"July 2010 - ",
        "YearOfLeaving":"May 2012 ",
        "Achievements":[
            " Created a interpreter for servo controllers",
            " Implemented docking UI in winforms from scratch",
            " Created a Winforms & WPF applications from scratch",
            " Created a MFC applications for supporting controllers that run on Windows CE platform"
        ]
      },
    ],
    "skillsDescription":"My skills:",
    "skills":[
      {
        "skillname":"React-js"
      },
      {
        "skillname":"Csharp"
      },
      {
        "skillname":"node-js"
      },
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"RabbitMQ"
      },
      {
        "skillname":"Vue"
      },
      {
        "skillname":"net"
      },
      {
        "skillname":"net-core"
      },
      {
        "skillname":"sql"
      }
      ,
      {
        "skillname":"angularjs"
      }
      ,
      {
        "skillname":"angular-7"
      },
      {
        "skillname":"MongoDB"
      }
      ,
      {
        "skillname":"EF"
      },
      {
        "skillname":"SQL"
      }
      ,
      {
        "skillname":"Android"
      }
      ,
      {
        "skillname":"Swift"
      }
      ,
      {
        "skillname":"AWS"
      }
      ,
      {
        "skillname":"Photoshop"
      }
      ,
      {
        "skillname":"Xamarin"
      }
      ,
      {
        "skillname":"React-Native"
      }
    ],
    // "portfolio":[
    //   {
    //     "name":"project1",
    //     "description":"mobileapp",
    //     "imgurl":"images/portfolio/phone.jpg"
    //   },
    //   {
    //     "name":"project2",
    //     "description":"mobileapp",
    //     "imgurl":"images/portfolio/project.jpg"
    //   },
    //   {
    //     "name":"project3",
    //     "description":"mobileapp",  
    //     "imgurl":"images/portfolio/project2.png"
    //   },
    //   {
    //     "name":"project4",
    //     "description":"mobileapp",
    //     "imgurl":"images/portfolio/phone.jpg"
    //   }
    // ],
    "testimonials":[
      {
        "description":"Your work is going to fill a large part of your life, and the only way to be truly satisfied is"+
        "to do what you believe is great work. And the only way to do great work is to love what you do."+
        "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        "name":"Steve Jobs"
      },
      {
        "description":"Never put off till tomorrow what you can do today.",
        "name":"Thomas Jefferson"
      },
      {
        "description":"Fall seven times, stand up eight.",
        "name":"Japanese proverb"
      },
      {
        "description":" The future belongs to those who believe in the beauty of their dreams.",
        "name":"Eleanor Roosevelt"
      }
      ,
      {
        "description":" The definition of insanity is doing the same thing over and over and expecting different results.",
        "name":"Benjamin Franklin"
      }
      ,
      {
        "description":" Success consists of going from failure to failure without loss of enthusiasm.",
        "name":"Winston Churchill"
      }
      ,
      {
        "description":"  Only those who dare to fail greatly can ever achieve greatly",
        "name":"Robert F. Kennedy"
      }
    ]
  }
  
  export default resumeData