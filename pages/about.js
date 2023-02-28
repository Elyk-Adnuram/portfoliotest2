import React from "react";

const About = () => {
  return (
    
    <div >
      <style jsx>{`
        a {
          color: blue;
        }

        .resume {
          background-color: rgba(41, 200, 162, 0.7);
          text-align: center;
          padding-left: 10rem;
          padding-right: 10rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: large;
        }

        .resume li {
          list-style-type: none;
        }

        .grid-container{
          display: grid;
          grid-template-columns: auto auto;
          background-color: rgba(13, 170, 226, 0.79);
          text-align: center;
          padding-left: 10rem;
          padding-right: 10rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: large;
        }
        .grid-item li {
          list-style-type: none;
        }
        
        .spacer {
          height: 40px;
        }
    `}</style>
   
      <section className="resume">
        <ul>
          <h2> Current Qualifications</h2>
          <br></br>
          <li>Full stack web development bootcamp hyperion Dev & the university of stellenbosch</li>
          <li>Bachelor of arts (health sciences and social services) in applied psychology for professional contexts (UNISA) Cum laude - 2022</li>
          <li>SAGE one accounting practitioner course - Sage university - 2018</li>
          <li>Bookkeeping fundamentals course - Sage university - 2018</li>
          <li>Matric - Rietondale Highschool - 2013</li>
        </ul>
        <p>A More detailed PDF resume can be downloaded <a target="_blank" href="../static/Ciskavander merweCVprog.pdf">Here</a> </p>
  
      </section>

      <div className="spacer"></div>
      <div className="grid-container">
      <div className="grid-item">
          
          <ul>
           <h3>Who am i?</h3>
           <li>A Woman.</li>
           <li>An animal lover.</li>
           <li>A Nerd.</li>
           <li>A lover of nature.</li>
           <li>A friend.</li>
           <li>A lifelong learner.</li>
           <li>A hustler (business owner).</li>             
           <li>A yoga, health and fitness enthusiast.</li>
           <li>A student of psychology.</li>
           <li>A bibliophile</li>
           <li>And many more interconnected and innexplicable things.</li>
         </ul> 
      </div>
       <div className="grid-item">
          
            <ul>
              <h3>What can i do?</h3>
              <li>Small business management.</li>
              <li>Basic bookkeeping(Sage/filing).</li>
              <li>Communication and mediation.</li>
              <li>Stock/inventory Management.</li>
              <li>Self motivated and independent work ethic.</li>
              <li>Self directed Learner.</li>
              <li>Client and sales management.</li>
              <li>Reasearch and development within retail and catering/hospitality.</li>
              <li>Teach basic Hatha yoga.</li>
              <li>Web Development using HTML, CSS, JavaScript(basic),git, basic MERN stack.</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default About;
