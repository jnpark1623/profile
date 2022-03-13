
import '../App.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/profile.css';
import myimgp from '../asset/myimgp.jpg';
import { useTranslation } from 'react-i18next';

function Profile (props) {
    const { t } = useTranslation();
    return(
    <div class="main-content">

      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img src={myimgp} alt="Admin" class="myimgp" width="250"/>
            <div class="mt-3">
              <h4 className='myname'>{t('myname')}</h4>
              <p class="text-secondary mb-1 myp">{t('myage')}</p>
              <p class="text-secondary mb-1 myp">{t('job')}</p>
              <p class="text-secondary mb-1 myp">{t('mydesc')}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contents">
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
        <h3>{t('awards6')}</h3>
      </div>
    </div>
    );
}
export default Profile;