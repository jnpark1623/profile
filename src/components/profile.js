
import '../App.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/profile.css';
import myimgp from '../asset/myimgp.jpg';
import { useTranslation } from 'react-i18next';

function Profile (props) {
    const { t } = useTranslation();
    return(
    <div className="main-content">

      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img src={myimgp} alt="Admin" className="myimgp" width="250"/>
            <div className="mt-3">
              <h4 className='myname'>{t('myname')}</h4>
              <p className="text-secondary mb-1 myp">{t('myage')}</p>
              <p className="text-secondary mb-1 myp">{t('job')}</p>
              <a href='https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp' target="_blank" rel="noopener noreferrer">

                <p className="text-secondary mb-1 myp">{t('mbti')}</p>
              </a>
              <p className="text-secondary mb-1 myp">{t('mydesc')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contents">
        <h1>{t('about')}</h1>
        <h2>{t('introduce')}</h2>
        <h3>{t('introduce1')}</h3>
        <h3>{t('introduce2')}</h3>
        <h3>{t('introduce3')}</h3>
        <h3>{t('introduce4')}</h3>
        <h3>{t('introduce5')}</h3>
        <h3>{t('introduce6')}</h3>
        <h3>{t('introduce7')}</h3>
        <h3>{t('introduce8')}</h3>
        <h3>{t('introduce9')}</h3>
        <h2>{t('skilled')}</h2>
        <h3>{t('skilled1')}</h3>
        <h3>{t('skilled2')}</h3>
        <h2>{t('interest')}</h2>
        <h3>{t('interest1')}</h3>
        <h3>{t('interest2')}</h3>
        <h2>{t('history')}</h2>
        <h3>{t('history1')}</h3>
        <h3>{t('history2')}</h3>
        <h3>{t('history3')}</h3>
        <h2>{t('awards')}</h2>
        <h3>{t('awards1')}</h3>
        <h3>{t('awards2')}</h3>
        <h3>{t('awards3')}</h3>
        <h3>{t('awards4')}</h3>
        <h3>{t('awards5')}</h3>
        <h2>{t('contact')}</h2>
        <h3>{t('contact1')}</h3>
      </div>
    </div>
    );
}
export default Profile;