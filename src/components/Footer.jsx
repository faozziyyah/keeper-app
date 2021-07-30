import React from "react";

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return <footer>copyright &copy; {currentYear}</footer>
}

export default Footer;