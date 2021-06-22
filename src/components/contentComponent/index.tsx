import React from 'react'
import styles from './index.module.scss'

const ContentComponent: React.FC = (props: any) => {
  return <div className={`${styles.wrapper}`}>{/* <h1 className={`${styles.message}`}>hello</h1> */}</div>
}

export default ContentComponent
