import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact">
      <style jsx>
        {`
          .link {
            width: 3rem;
          }

          .contact {
            text-align: center;
          }
        `}
      </style>
      <h2 className="contact">How to contact me:</h2>
      <p>
        Feel free to peruse my github and linked in{" "}
        <a target="_blank" use rel="noreferrer" href="https://github.com/minislinket">
          {" "}
          <Image
            width="50rem"
            height="50rem"
            alt="link to github"
            className="link"
            src="/../static/GitHub.png"
          />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ciska-van-der-merwe-754183b8/"
        >
          {" "}
          <Image
            width="50rem"
            height="50rem"
            className="link"
            alt="link to linkedin"
            src="/linkedIn.png"
          />{" "}
        </a>
      </p>

      <p>Phone: 081 583 6939</p>
      <p>
        Email: <a href="mailto:ciskavdmerwe@gmail.com">ciskavdmerwe@gmail.com </a>{" "}
      </p>
      <p>I am a Gauteng based programmer who would be happy to work from home. </p>
    </div>
  );
};
export default Contact;
