import React from 'react'
import styles from './index.module.scss'
import NoteAddIcon from '@material-ui/icons/NoteAdd'

const NavTopBar: React.FC = (props: any) => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.iconWrapper}`}>
        <div className={`${styles.icon}`}>
          <NoteAddIcon style={{ color: 'grey' }} />
        </div>
      </div>
    </nav>
  )
}

export default NavTopBar
