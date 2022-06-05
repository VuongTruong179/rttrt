import React from "react";
import './footer.css'
import { FaFacebookSquare, FaTwitch, FaInstagram, FaYoutube } from "react-icons/fa"

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="footer-col">
                    <div class="social-links">
                        <a ><FaFacebookSquare /></a>
                        <a ><FaTwitch /></a>
                        <a ><FaInstagram /></a>
                        <a ><FaYoutube /></a>
                    </div>

                    <div className="container-p-footer">
                        <p>All the comics on this website are only previews of the original comics, there may be many language errors, character names, and story lines. For the original version, please buy the comic if it's available in your city</p>
                        <p>Page rendered in 0.0373 seconds.</p>
                    </div>
                </div>

            </footer >
        )
    }
}
export default Footer