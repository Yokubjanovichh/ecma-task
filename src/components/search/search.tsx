import InputSeartch from '../input-seartch/seartch-input'
import { useNavigate } from 'react-router-dom'
import { IconSearch, IconLayoutGrid, IconLayoutRows } from '@tabler/icons-react'
import { Button } from '@mantine/core'

import style from './seartch.module.scss'

export default function Search() {
  const navigate = useNavigate()
  return (
    <div className={style.seartchMain}>
      <div className={style.seratchSection}>
        <span className={style.seartchIcon}>
          <IconSearch width={18} height={18} />
        </span>
        <InputSeartch/>
      </div>
      <div className={style.buttons}>
        <Button color="green" uppercase radius="md" onClick={() => navigate('lists/create')}>
          + ADD SPECIALIZATION
        </Button>
        <IconLayoutGrid className={style.hover} color="#45B26B" width={35} height={35} />
        <IconLayoutRows className={style.hover} fill="#777E90" color="#fff" width={35} height={35} />
      </div>
    </div>
  )
}
