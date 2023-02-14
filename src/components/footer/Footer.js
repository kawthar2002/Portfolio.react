import { NavLink } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <ul className="contacts">
          <li className="contacts__item">
            <NavLink
              to="https://wa.me/qr/QFH5DE67XVYDE1"
              className="contacts__link"
            >
              <svg width="40" height="40" viewBox="0 0 16 16">
                <path
                  fill="#4CAF50"
                  d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8z"
                />
                <path
                  fill="#FAFAFA"
                  d="M12.657 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"
                />
              </svg>
            </NavLink>
          </li>
          <li className="contacts__item">
            <NavLink
              to="https://t.me/ArdinartsevaAnna"
              className="contacts__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 240 240"
              >
                <linearGradient
                  id="a"
                  x1="-683.305"
                  x2="-693.305"
                  y1="534.845"
                  y2="511.512"
                  gradientTransform="matrix(6 0 0 -6 4255 3247)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#37aee2" />
                  <stop offset="1" stopColor="#1e96c8" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"
                />
                <path
                  fill="#c8daea"
                  d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"
                />
                <path
                  fill="#a9c9dd"
                  d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"
                />
                <linearGradient
                  id="b"
                  x1="128.991"
                  x2="153.991"
                  y1="118.245"
                  y2="78.245"
                  gradientTransform="matrix(1 0 0 -1 0 242)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#eff7fc" />
                  <stop offset="1" stopColor="#fff" />
                </linearGradient>
                <path
                  fill="url(#b)"
                  d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
