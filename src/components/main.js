
import '../App.css';
import '../css/style.css';

import Header from './header';
import Background from './background';
import Banner from './banner';

function Main (props) {

    return(
        <div>
            <body className='banner_body'>
                <Banner/>
                <div className='background_body'>
                    <Background/>
                </div>
            </body>
            
            {/* <div className="main-content">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={cslogo} className="App-logo" alt="logo" />
                <img src={njslogo} className="Yrotate" alt="logo" />
            </div> */}
        </div>
    );
}
export default Main;