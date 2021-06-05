import React from "react";
import "../styles.css";

function Footer() {

  var getYear = new Date().getFullYear();
  
  return <footer>
          <p>Copyright @ {getYear}</p>
         </footer>;
}

export default Footer;