import { Tabs } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import style from './style.module.scss'

export default function Tab() {
  return (
    <Tabs defaultValue="chat" sx={{ width: '100%' }}>
      <Tabs.List p="15px 38px 13px 55px" bg="#EFF1F3" className={style.tabs}>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Lessons</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Timetable</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Add Course</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Add Group</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Specialization</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>Leads</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <div className={style.tabsItem}>
          <p className={style.tabsItemText}>HRM</p>
          <button className={style.tabsItemBtn}>x</button>
        </div>
        <span className={style.slesh}>|</span>
        <button className={style.tabsItemUser}>
          <IconUser width={16} height={16} /> <p>USER</p>
        </button>
      </Tabs.List>
    </Tabs>
  )
}
