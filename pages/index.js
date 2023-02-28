import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        {/* <!--Bootstrap icons link--> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        ></link>
      </Head>

      <div className="center">
        <style jsx>
          {`
    /* htmlFortfolio slider */
    .portfolio {
    margin: 0;
    padding: 15px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 0.8%;
  }



  .slider{
    width: 800px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
  }
  .slides{
    width: 500%;
    height: 500px;
    display: flex;

  }

  .slides input{
    display: none;
  }

  .slide{
    width: 20%;
    transition: 2s;
  }

  .slide Image{
    width: 800px;
    height: 500px;
  }

  /* css htmlFor manual slide nav */

  .navigationManual {
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }

  .manual-btn{
    border: 2px solid #23E3C9;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
  }
  .manual-btn:not(:last-child){
    margin-right: 40px;
  }

  .manual-btn:hover{
    background: #23E3C9;
  }

  #radio1:checked ~ .first{
    margin-left: 0;
  }

  #radio2:checked ~ .first{
    margin-left: -20%;
  }
  
  #radio3:checked ~ .first{
    margin-left: -40%;
  }
  
  #radio4:checked ~ .first{
    margin-left: -60%;
  }
  
  .instruct {
    position: absolute;
    margin-top: 35rem;
    background: rgba(89, 163, 151, 0.61);

  }
  }`}
        </style>

        <section id="portfolio" className="portfolio">
          <div className="slider">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1"></input>
              <input type="radio" name="radio-btn" id="radio2"></input>
              <input type="radio" name="radio-btn" id="radio3"></input>
              <input type="radio" name="radio-btn" id="radio4"></input>

              <div className="slide first">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/minislinket/L1T15-online-store-.git"
                >
                  <Image
                    width="1000rem"
                    height="690rem"
                    src="/web1un.PNG"
                    alt="An image of my first E-commerce website project"
                  ></Image>
                </a>
              </div>
              <div className="slide">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/minislinket/MemoryGame-Task12-Capstone"
                >
                  <Image
                    width="1000rem"
                    height="690rem"
                    src="/memoryGame.PNG"
                    alt="An image of my memory game"
                  ></Image>
                </a>
              </div>
              <div className="slide">
                <a target="_blank" rel="noreferrer" href="https://github.com/minislinket/task-7">
                  <Image
                    width="1000rem"
                    height="690rem"
                    src="/fullStack.PNG"
                    alt="Fullstack web app using react and express"
                  ></Image>
                </a>
              </div>
              <div className="slide">
                <Image
                  width="1000rem"
                  height="690rem"
                  src="/placeH3un.jpg"
                  alt="Last placeholder image"
                ></Image>
              </div>
            </div>

            <div className="navigationManual">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
              <label htmlFor="radio3" className="manual-btn"></label>
              <label htmlFor="radio4" className="manual-btn"></label>
            </div>
          </div>
        </section>
        <div className="instruct">
          {" "}
          <h3>
            Please use the radio buttons at the bottom of the image to switch between projects
          </h3>
        </div>
      </div>
    </>
  );
}
