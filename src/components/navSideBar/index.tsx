import React from 'react'
import styles from './index.module.scss'
import ListIcon from '@material-ui/icons/List'

const NavSideBar: React.FC = () => {
  return (
    <nav className={`${styles.sidebar}`}>
      <div className={`${styles.icon}`}>
        <ListIcon style={{ color: 'grey' }} />
      </div>
      <h5 className={`${styles.title}`}>Notes</h5>
    </nav>
  )
}

export default NavSideBar
