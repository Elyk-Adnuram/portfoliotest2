import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          background-image: url("/back.jpg");
          background-size: 100vw;
        }
      `}</style>
    </>
  );
}

export default MyApp;
