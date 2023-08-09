import { List } from './types'
let list: List.CourseType[] = [
  {
    id: 1,
    name: 'murodulla1',
    isDegree: false,
    isActive: true,
    description: 'lorem ipsum dolor sit amet',
    skills: [
      { id: 1, name: 'Java Development', checked: false },
      { id: 2, name: 'Flutter', checked: false },
      { id: 3, name: 'iOS Development ', checked: false },
      { id: 4, name: 'Database', checked: false },
      { id: 5, name: 'Java Backend', checked: false },
      { id: 6, name: 'Android', checked: false },
      { id: 7, name: 'Jango', checked: false }
    ]
  }
]

export const getList = () => {
  return [...list]
}

export const addCourse = (course: any) => {
  return list.push(course)
}

export const getById = (id: string) => {
  const filteredData = getList().filter(list => list.id === Number(id))

  return filteredData
}

export const updateCourse = (course: any) => {
  console.log(course)

  const filteredData: any = getList().filter(list => list.id !== Number(course.id))
  filteredData.push(course)

  console.log(filteredData)

  list = []
  list.push(filteredData)
}
