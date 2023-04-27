import { Outlet, Link } from 'react-router-dom';
import './mainNavigation.style.scss';

import { ReactComponent as CrownLogo } from '../../assets/svgs/crown.svg';

export default function MainNavigation() {
  return (
    <>
      <nav className='nav'>
        <Link to='/' className='nav__logo-container'>
          <CrownLogo className='nav__logo' />
        </Link>

        <ul className='nav__links'>
          <Link className='nav__link' to='/shop'>
            Shop
          </Link>

          <Link className='nav__link' to='/auth'>
            Sign In
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
