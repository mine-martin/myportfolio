import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logos} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="martin" />
        </Link>
        <nav>
          <NavLink exact="true " activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true "
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true "
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/martin-wangondu-4749b21b1/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mine-martin/"
            >
              <FontAwesomeIcon icon={faGithubAlt} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
