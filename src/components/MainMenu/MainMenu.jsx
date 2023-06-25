import styles from './MainMenu.module.css';


export const MainMenu = ({children}) => {
    return (
        <div className={styles.menu}>
           {children}
        </div>
    )
}