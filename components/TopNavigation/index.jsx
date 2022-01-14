/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  FaHashtag, FaRegBell, FaSearch, FaUserCircle
} from 'react-icons/fa';
// import useDarkMode from '../../hooks/useDarkMode';

// const ThemeIcon = () => {
//   const [darkTheme, setDarkTheme] = useDarkMode();
//   const handleMode = () => setDarkTheme(!darkTheme);
//   return (
//     <span onClick={handleMode}>
//       {darkTheme ? (
//         <FaSun size='24' className='top-navigation-icon' />
//       ) : (
//         <FaMoon size='24' className='top-navigation-icon' />
//       )}
//     </span>
//   );
// };

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text ml-14'>tailwind-css</h5>;

const TopNavigation = () => (
    <div className='top-navigation'>
      <HashtagIcon />
      <Title />
      {/* <ThemeIcon /> */}
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );

export default TopNavigation;
