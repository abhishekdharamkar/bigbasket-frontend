import { SocialIcon } from 'react-social-icons';
function Footer() {

    return (
        <div className='mt-3'>
            
            <hr/>
            <hr/>
            <div className='row mt-3 justify-content-md-center'>
            <div className="col col-lg-2 col-sm-12 col-xs-12 col-wraper app-badge">
                <h5>Download Our App</h5>
                <img alt="GooglePlay-BB"
                className="mt-2"
                    src="https://www.bbassets.com/static/v2571/custPage/build/content/img/Google-App-store-icon.png" />
                <img
                    alt="AppStore-BB"
                    className="mt-2"
                    src="https://www.bbassets.com/static/v2571/custPage/build/content/img/Apple-App-store-icon.png" />
            </div>

            <div class="row col col-lg-3 col-sm-12 col-xs-12">
            <h5>Get Social With Us</h5>
            <div  className=''>
            <SocialIcon className="m-1" url="https://facebook.com/" />
            <SocialIcon className="m-1" url="https://pinterest.com/" />
            <SocialIcon className="m-1" url="https://twitter.com/" />
            <SocialIcon className="m-1" url="https://instagram.com/" />
             </div>
        </div>
        </div>
        <div className='copyright  mt-2' style={{ "padding": "8px 0px 8px 20px","background-color": "#eaeaea","font-family": "Poppins","font-size":"12px"}}>
        <p> Copyright <i class="fa fa-copyright" ></i>  Abhishek Dharamkar</p>
        </div>
    </div>
    );
}export default Footer