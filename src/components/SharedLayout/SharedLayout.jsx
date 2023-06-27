import { Link, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
<nav className={styles.menu}>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
      <Outlet/>
    </div>
    
  );
};
