import '../styles/contact.scss'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import tt from '../images/tt.png'

function Contact() {
    return (
        <div className="contact">
            <div className="about">
                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis rhoncus libero. Morbi at aliquet enim. Mauris id varius magna, a ullamcorper lacus. Ut quis mauris eu risus tincidunt posuere. Nam pulvinar velit dui, vitae aliquet nisl sollicitudin non. Vestibulum condimentum nec lacus sed cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis rhoncus libero. Morbi at aliquet enim. Mauris id varius magna, a ullamcorper lacus. Ut quis mauris eu risus tincidunt posuere. Nam pulvinar velit dui, vitae aliquet nisl sollicitudin non.
                </p>
            </div>
            <div className="cont">
                <h2>Contact</h2>
                <p>+48 555 555 555</p>
            </div>
            <div className="social_m">
                <img alt="facebook" src={fb} height="50px"></img>
                <img alt="twitter" src={tt} height="50px"></img>
                <img alt="instagram" src={ig} height="50px"></img>
            </div>
        </div>
    )
}

export default Contact;