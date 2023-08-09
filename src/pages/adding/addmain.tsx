import { useEffect, useState } from 'react'
import { Button, Checkbox, TextInput, Textarea } from '@mantine/core'
import { Selected } from '../../components/index'

import style from './addmain.module.scss'

import { addCourse, getById, getList, updateCourse } from 'services/fakeDaata'
import { useNavigate, useParams } from 'react-router-dom'

interface DataItem {
  id: number
  name: string
  checked: boolean
}

const data: DataItem[] = [
  { id: 1, name: 'Java Development', checked: false },
  { id: 2, name: 'Flutter', checked: false },
  { id: 3, name: 'iOS Development ', checked: false },
  { id: 4, name: 'Database', checked: false },
  { id: 5, name: 'Java Backend', checked: false },
  { id: 6, name: 'Android', checked: false },
  { id: 7, name: 'Jango', checked: false },
  { id: 8, name: 'Python Development', checked: false },
  { id: 9, name: 'Flutter', checked: false },
  { id: 10, name: 'Java Development', checked: false },
  { id: 11, name: 'Flutter', checked: false },
  { id: 12, name: 'iOS Development ', checked: false },
  { id: 13, name: 'Database ', checked: false },
  { id: 14, name: 'Java Backend', checked: false },
  { id: 15, name: 'Android', checked: false },
  { id: 16, name: 'Jango', checked: false },
  { id: 17, name: 'Jango', checked: false },
  { id: 18, name: 'Python Development', checked: false },
  { id: 19, name: 'Flutter', checked: false },
  { id: 20, name: 'Database', checked: false },
  { id: 21, name: 'Java Backend', checked: false }
]

const styleLabel: any = {
  label: {
    color: 'var(--neutrals-4, #777E90)',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '12px',
    textTransform: 'uppercase'
  },
  input: {
    borderRadius: '10px',
    border: '1px solid var(--neutrals-6, #E6E8EC)',
    background: ' var(--fcfcfd, #FCFCFD)'
  }
}

export default function AddMain() {
  let { courseId } = useParams()
  const navigate = useNavigate()
  const [newData, setNewData] = useState<any>({ name: '', description: '' })
  const [skills, setSkills] = useState(data)
  const [selectedSkills, setSelectedSkills] = useState<any>([])
  const [isDegree, setIsDegree] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (courseId) {
      const res = getById(courseId)[0]
      console.log(res)
      setNewData((prevState: any) => ({
        ...prevState,
        name: res?.name,
        description: res?.description
      }))

      setSelectedSkills(res?.skills)
    }
  }, [])

  const onChangeSpec = (e: any) => {
    const value = e.target.value
    setNewData((prevState: any) => ({
      ...prevState,
      name: value
    }))
  }

  const onChangeDes = (e: any) => {
    const value = e.target.value
    setNewData((prevState: any) => ({
      ...prevState,
      description: value
    }))
  }

  const removeSkill = (id: number) => {
    skills?.map(skill => {
      if (skill.id === id) {
        console.log(skill)
        skill.checked = false
      }
    })
    const filtered = selectedSkills.filter((item: any) => item.id !== id)
    setSelectedSkills(filtered)
  }
  const addSkill = (id: number, index: number) => {
    // skills[index].checked = true
    // console.log(skills)

    const newState = skills.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        if (obj.checked) {
          removeSkill(id)
          // console.log(selectedSkills);
          return { ...obj, checked: false }
        } else {
          const item = skills[index]
          setSelectedSkills((old: any) => [...old, item])

          // setNewData((prevState: any) => ({
          //   ...prevState,
          //   skills: selectedSkills
          // }))
          // console.log(selectedSkills);
          return { ...obj, checked: true }
        }
        // return { ...obj, checked: true}
      }

      // 👇️ otherwise return the object as is
      return obj
    })
    setSkills(newState)

    // setSelectedSkills()
  }

  const clearAll = () => {
    setSelectedSkills([])
    skills?.map(skill => {
      skill.checked = false
      // if (!skill.checked) {
      //   skill.checked = true
      // }
    })
  }

  const onChangeDegree = (e: any) => {
    const value = e.target.checked
    setIsDegree(value)
  }
  const onChangeActive = (e: any) => {
    const value = e.target.checked
    setIsActive(value)
  }

  const createCourse = () => {
    if (newData.name && newData.description && selectedSkills?.length) {
      const lastIndex = getList().length - 1
      const lastId = getList()[lastIndex].id

      const data = {
        id: lastId + 1,
        name: newData?.name,
        isDegree,
        isActive,
        description: newData?.description,
        skills: selectedSkills
      }

      addCourse(data)
      navigate('/')

      console.log(data)
    } else {
      alert('Please fill all fields!')
    }
  }
  const navigates = useNavigate()

  const saveCourse = async () => {
    const data = {
      id: courseId,
      name: newData?.name,
      isDegree,
      isActive,
      description: newData?.description,
      skills: selectedSkills
    }

    updateCourse(data)

    navigate('/')
  }
  return (
    <div className={style.add}>
      <div className={style.addMain}>
        <div className={style.addLeft}>
          <div className={style.inputs}>
            <TextInput styles={styleLabel} label="Specialization" onChange={onChangeSpec} value={newData.name} />
            <Textarea styles={styleLabel} label="Description" onChange={onChangeDes} value={newData.description} />
          </div>
          <div className={style.hr}></div>
          <div className={style.slectedCourses}>
            <Selected selectedSkills={selectedSkills} removeSkill={removeSkill} />
          </div>
          <div className={style.clear} style={{ textAlign: 'right' }}>
            <Button variant="light" radius="md" onClick={clearAll}>
              Clear all
            </Button>
          </div>
        </div>
        <div className={style.addRight}>
          {skills.map((item, index) => (
            <div key={item.id} className={style.course} onClick={() => addSkill(item.id, index)}>
              <p className={style.courseText}>{item.name}</p>
              <Button color={`${item.checked ? 'red' : 'green'}`} compact>
                {item.checked ? '-' : '+'}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.addMainFooter}>
        <Button color="gray" variant="outline" leftIcon={<Checkbox size="xs" onChange={onChangeDegree} />}>
          No Degree
        </Button>
        <Button color="gray" variant="outline" leftIcon={<Checkbox size="xs" onChange={onChangeActive} />}>
          Active
        </Button>
        <Button variant="outline" color="red" onClick={() => navigates('/')}>
          Cancel
        </Button>
        <Button color="green" onClick={courseId ? saveCourse : createCourse}>
          {courseId ? 'Save' : 'Create'}
        </Button>
      </div>
    </div>
  )
}
