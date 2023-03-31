import React from 'react'
import HeaderBeasts from '../HeaderBosses/HeaderBeasts'
import HeaderAnub from '../HeaderBosses/HeaderAnub'
import HeaderChampions from '../HeaderBosses/HeaderChampions'
import HeaderLordJaraxus from '../HeaderBosses/HeaderLordJaraxus'
import HeaderValks from '../HeaderBosses/HeaderValks'
import styles from './Header.module.css'

function Header() {


  return (
    <header className={styles.header_container}>
        <HeaderBeasts />
        <HeaderLordJaraxus />
        <HeaderChampions />
        <HeaderValks />
        <HeaderAnub />
    </header>
  )
}

export default Header