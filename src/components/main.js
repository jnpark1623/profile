
import '../App.css';
import '../css/style.css';

import Header from './header';
import Background from './background';
import Banner from './banner';

function Main (props) {

    return(
            <div className='banner_body'>
                <Banner/>
                <div className='background_body'>
                    <Background/>
                </div>
            </div>
    );
}
export default Main;