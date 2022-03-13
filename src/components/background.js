import '../css/background.scss';
import logo from '../logo/logo.svg';
import cslogo from '../logo/cslogo.svg';
import njslogo from '../logo/njslogo.svg';
import sun from '../asset/background/sun.png';
import earth from '../asset/background/earth.png';
import jupiter from '../asset/background/jupiter.png';
import mars from '../asset/background/mars.png';
import mercury from '../asset/background/mercury.png';
import neptune from '../asset/background/neptune.png';
import pluto from '../asset/background/pluto.png';
import saturn from '../asset/background/saturn.png';
import uranus from '../asset/background/uranus.png';
import venus from '../asset/background/venus.png';
function Background ()
{
    return(
    <div class="system">
        <div class="system__orbit system__orbit--sun">
            <img src={sun} alt="Sun" class="system__icon system__icon--sun"/>
        </div>
        
        <div class="system__orbit system__orbit--mercury">
            <div class="system__planet system__planet--mercury">
                <img src={mercury} alt="Mercury"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--venus">
            <div class="system__planet system__planet--venus">
                <img src={venus} alt="Venus"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--earth">
            <div class="system__planet system__planet--earth">
                <img src={earth} alt="Earth"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--mars">
            <div class="system__planet system__planet--mars">
                <img src={mars} alt="Mars"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--jupiter">
            <div class="system__planet system__planet--jupiter">
                <img src={jupiter} alt="Jupiter"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--saturn">
            <div class="system__planet system__planet--saturn">
                <img src={saturn} alt="Saturn"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--uranus">
            <div class="system__planet system__planet--uranus">
                <img src={uranus} alt="Uranus"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--neptune">
            <div class="system__planet system__planet--neptune">
                <img src={neptune} alt="Neptune"/>
            </div>
        </div>
        <div class="system__orbit system__orbit--pluto">
            <div class="system__planet system__planet--pluto">
                <img src={pluto} alt="Pluto"/>
            </div>
        </div>
    </div>
    )
}
export default Background;