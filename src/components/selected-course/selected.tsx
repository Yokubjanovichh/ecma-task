import { Button } from '@mantine/core'
import { IconMenu2, IconTrash } from '@tabler/icons-react'

import style from './style.module.scss'

export default function Selected({ selectedSkills, removeSkill }: any) {
  // console.log(selectedSkills)

  return (
    <div>
      {selectedSkills?.length
        ? selectedSkills.map((sk: any) => (
            <div className={style.selectedMain}>
              <div className={style.selectedMainLeft}>
                <IconMenu2 />
                <p className={style.selectedMainText}>{sk.name}</p>
              </div>
              <Button variant="light" color="pink" compact>
                <IconTrash onClick={()=> removeSkill(sk.id)}/>
              </Button>
            </div>
          ))
        : <span>INFO NO FOUND</span>}
    </div>
  )
}
