import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from './Header'
function Home() {
  return (
    <>
        <Header />
        <div className="home">
          <div className="text">
            <div>
              <h1> نحن طريقك المثالي للسفر محليا وعالميا</h1>
              <h3>نعمل معا من اجل سفر أمثل ... <span>السفر ويانه أسهل , أسرع , أمتع</span></h3>
            </div>
            <div className="register">
              <h3>املي معلوماتك واحجز براحتك</h3>
              <Link to="/sign-in"><button>تسجيل</button></Link>
              
            </div>
          </div>
          <div className="block-booking">
            <div className="content">
              <div className="from">
                <p>من</p>
                <div className="box">
                  <h3>النجف </h3>
                  <p>مطار النجف</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faArrowsTurnToDots} className='icon-to-arrow'/>
              <div className="to">
                <p>الى</p>
                <div className="box">
                  <h3>قم</h3>
                  <p>مطار طهران</p>
                </div>
              </div>
              <div className="slash-between"></div>
              <div className="journy">
                <p>وقت الرحله</p>
                <div className="box">
                  <h3>3 Jan</h3>
                  <p>الثلاثاء</p>
                </div>
              </div>
              <div className="return">
                <p>وقت العودة</p>
                <div className="box">
                  <h3>15 Jan</h3>
                  <p>الاحد</p>
                </div>
              </div>
              <div className="slash-between"></div>
              <div className="travaler">
                <p>المسافر</p>
                <div className="box">
                  <h3>1 شخص</h3>
                  <p>ذكر</p>
                </div>
              </div>
              <div className="class">
                <p>نوع الصف</p>
                <div className="box">
                  <h3>اقتصادي</h3>
                  <p>25% توفير</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-search"><a href="">Search Now</a></button>
        </div>
    </>
  );
}

export default Home;
