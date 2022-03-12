
import '../App.css';
import '../css/style.css';
import logo from '../logo/logo.svg';
import cslogo from '../logo/cslogo.svg';
import njslogo from '../logo/njslogo.svg';
import  Header from './header';
function Main (props) {

    return(
        <div>
            <Header />
            <div className="main-content">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={cslogo} className="App-logo" alt="logo" />
            <img src={njslogo} className="Yrotate" alt="logo" />
            </div>
        </div>
    );
}
export default Main;