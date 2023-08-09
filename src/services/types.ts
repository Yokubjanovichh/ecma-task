export namespace List {
  export interface SkillsType {
    id: number
    name: string
    checked: boolean
  }

  export interface CourseType {
    id: any
    name: string
    isDegree: boolean
    isActive: boolean
    description: string
    skills: SkillsType[]
  }
}
