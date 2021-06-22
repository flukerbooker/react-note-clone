import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import ListIcon from '@material-ui/icons/List'
import NoteItem from '../noteItem/'
import data, { IListCards } from '../noteItem/mockupItem'
const NavSideBar: React.FC = () => {
  // const [isToggle, setIsToggle] = useState(true)
  const [list, setList] = useState<IListCards[]>([])

  useEffect(() => {
    setList(data)
  }, [])

  return (
    <nav className={`${styles.sidebar}`}>
      <div className={`${styles.icon}`}>
        <ListIcon style={{ color: 'grey' }} />
      </div>
      <h5 className={`${styles.title}`}>Notes</h5>
      <NoteItem />
    </nav>
  )
}

export default NavSideBar
