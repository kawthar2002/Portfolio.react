import whatsupp from './../img/whatsup.jpg';
import telegram from './../img/tg.jpg';

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p className="content-list__text">Moscow, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <div className="contacts__img">
              <a href="https://wa.me/qr/QFH5DE67XVYDE1">
                <img className="contacts__image" src={whatsupp} alt="whatsupp" />
              </a>
              <a href="https://t.me/ArdinartsevaAnna">
                <img
                  className="contacts__image"
                  src={telegram}
                  alt="telegram"
                />
              </a>
            </div>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <a className="content-list__text" href="mailto:k31082002@gmail.com">
              k31082002@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Contacts;
