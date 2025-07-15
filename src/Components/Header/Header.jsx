import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStatevalue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';
import './Header.css';

const Header = () => {
  const [{ basket, user }, dispatch] = useStatevalue();

  const login = () => {
  if (user) {
    auth.signOut();
    dispatch({
      type: "CLEAR_BASKET"
    });
  }
};

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png'
          alt='amazon-logo'
        />
      </Link>

      <div className='header_search'>
        <input className='header_searchInput' />
        <SearchOutlinedIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && '/login'} className='header_link'>
          <div className='header_option' onClick={login}>
            <span className='header_optionOne'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className='header_optionTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionOne'>Return</span>
            <span className='header_optionTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionOne'>Your</span>
            <span className='header_optionTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_optionbasket'>
            <ShoppingCartOutlinedIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
