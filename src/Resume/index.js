import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'Centennial College',
      duration: ' April 2021',
      degree: 'Software Engineering Technology Advanced Diploma',
    },
    languages: [
      {
        name: 'Java',
        proficiency: 0.7,
      },
      {
        name: 'C#',
        proficiency: 0.6,
      },
      {
        name: 'JavaScript/Node.js ',
        proficiency: 0.8,
      },      
      {
        name: 'HTML/CSS',
        proficiency: 0.4,
      },
     
      {
        name: 'Python',
        proficiency: 0.6,
      },
      {
        name: 'BASH',
        proficiency: 0.5,
      },
    ],
    databases: ['Oracle DB','MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB'],
    libraries: [
      'React',
      'React Native',
      'Redux',     
      'Express',
      'Socket.io',      
      'Scikit-Learn',
      'Tensorflow', 
      'Spring Boot'
      
    ],
    tools: [
      "VS Studio",
      "VS Code",
      "Eclipse",
      "Android Studio",
      "Postman",
      'AWS',
      'Azure',
      'Spark/Spark Streaming',
      'Spyder',     
      'Jupyter',  
      'Unix',
      'Git',
      'Webpack',
      'PowerBI',
      'Tableau'
      

    ],
    interests: [
      'I <b>learn</b> about web, cloud and data.',      
      'I <b>love</b> travelling, gourmet, comedy and gardening. '   
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'lipingwucs@gmail.com',
        link: 'mailto:lipingwucs@gmail.com',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/lipingwucs',
        link: 'https://github.com/lipingwucs',
      }     
    ]
  },
  footerLinks: [
    
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/lipingwucs/',
      link: 'https://www.linkedin.com/in/lipingwucs/',
    },
  ],
  main: {
    firstName: 'Liping',
    lastName: 'Wu',
    program: {
      term: '',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: 'linkedin.com/in/lipingwucs/',
      link: 'https://www.linkedin.com/in/lipingwucs/'
   },
    
    companies:[
      {
        link:"***",
      }
    ],
   
    projects: [
      {
        name: 'Mongo Movie',
        tools: ['Asp.Net Core, AWS S3, DynamoDB, EC, authentication, Apogee, REST API, Swagger UI. '],
        achievements: [
          'Designed and developed the application which allows the administrator can manage user, user can CRUD bulk movie files to/from AWS S3, the viewer to CRUD comments which saved in DynamoDB.',
          'Added JWT authentication to secure the REST API and the Swagger UI to manage REST API.',
          'Published the server side and client side to AWS and supported cross-platform visiting.'  ,       
        ],
      },
      {
        name: 'Bill Splitter',
        tools: ['Android Studio, MVVM '],
        achievements: [
          'Designed and developed an android app allows the user to register/login and create a bill group, CRUD bill items, and calculate the share of the bill.'       
        ],
      },
      {
        name: 'Health Care Web App',
        tools: ['REACT, NodeJs MongoDB, Express, TensorFlow, YoutubeIFrame, Diagram'],
        achievements: [
          'Designed and developed the app that allows users to register/login as different roles, allows nurses to CRUD a patient history, allows patients to view the medical history.',  
          'Added YouTube player function, visualized patient’s history and give an alert to the patient if the indicator out of safe range.',
           'Applied machine learning (Tensor flow) method to simulate training dataset to build disease prediction.'
          
        ],
      },
      {
        name: 'Health Care Mobile App',
        tools: ['Android Studio, MVVM '],
        achievements: [
          'Designed and developed the app that allows users to register/login as different roles, allows nurses to CRUD a patient history, allows patients to view the medical history.'       
        ],
      },
      {
        name: 'School Locator',
        tools: ['Android Studio, MVVM, Google Map '],
        achievements: [
          '•	Designed and developed the app that allows users to view and search college information from a different style of map.'       
        ],
      },
      {
        name: 'Cruise Booking Web App',
        tools: ['Java, Spring Boot, JPA, MVC '],
        achievements: [
          'Designed and developed the app that allows users to register/login to the system, view the cruise list, reserve/reschedule/cancel a cruise, and make a payment.'       
        ],
      },
      {
        name: 'Data Analysis and Visualization of Toronto bike theft data',
        tools: ['Python, Matplotlib, Plot ply, Seaborn, Folium, Flask, Postman'],
        achievements: [
          'Loaded data, cleaned data, transform data and visualized data from Toronto bike theft with Python libraries, and Power BI.',
          'Built data training models with different classifications, evaluated and optimized the model.',
          'Set up model prediction REST API.'          
        ],
      },
      {
        name: 'Yummy Mummy',
        tools: ['Asp.Net Core'],
        achievements: [
          'Designed and developed the recipe web app which allows users to register and login to CRUD operation base on different authorization on category, ingredients, recipe, and reviews, etc. ',
          'Published on Azure for public visit.'           
        ],
      },





      
      
    ],
  },
};

export default Resume;
