import React, { useEffect, useState } from 'react'
import { createStyles, Table, Checkbox, ScrollArea, Group, Text, rem, Button, Popover } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { List } from '../../services/types'
import { getList } from '../../services/fakeDaata'

import style from './style.module.scss'

const useStyles = createStyles(theme => ({
  rowSelected: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0]
  }
}))

export default function CourseList() {
  const navigate = useNavigate()
  const { classes, cx } = useStyles()
  const [selection, setSelection] = useState(['1'])
  const [data, setData] = useState<any>([])
  const [selectedCourse, setSelectedCourse] = useState<List.CourseType | undefined>()

  const toggleRow = (id: string) => setSelection(current => (current.includes(id) ? current.filter(item => item !== id) : [...current, id]))

  const toggleAll = () => setSelection(current => (current.length === data.length ? [] : data.map((item: any) => item.id)))

  useEffect(() => {
    setData(getList())
  }, [])

  const handleDelete = (id: number) => {
    const filteredData = data.filter((item: any) => item.id !== id)
    setData(filteredData)
  }

  const showSelectedCourse = (id: number) => {
    const filteredData = data.filter((item: any) => item.id === id)
    setSelectedCourse(filteredData[0])
  }

  // const rows = data.map((item: List.CourseType, index: number) => {
  //   const selected = selection.includes(item.id)
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const navigate = useNavigate()

  //   return (
  //     <>
  //       {data?.length ? (
  //         data.map((item: List.CourseType, index: number) => (
  //           <tr key={item.id} className={cx({ [classes.rowSelected]: selected })} onClick={() => showSelectedCourse(item.id)}>
  //             <td>
  //               <Checkbox checked={selected} onChange={() => toggleRow(item.id)} transitionDuration={0} />
  //             </td>
  //             <td>{index + 1}</td>
  //             <td>
  //               <Group spacing="sm">
  //                 <Text size="sm" weight={500}>
  //                   {item.name}
  //                 </Text>
  //               </Group>
  //             </td>
  //             <td style={{ color: item.isDegree ? '#353945' : '#777E90' }}>{item.isDegree ? 'DEGREE' : 'NO DEGREE'}</td>
  //             <td>
  //               <Button color={item.isActive ? 'green' : 'red'} size="xs" uppercase>
  //                 {item.isActive ? 'active' : 'inactive'}
  //               </Button>
  //             </td>
  //             <td>
  //               <Popover trapFocus position="bottom" withArrow shadow="md">
  //                 <Popover.Target>
  //                   <span>...</span>
  //                 </Popover.Target>
  //                 <Popover.Dropdown sx={theme => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
  //                   <Button mr={'5px'} color="primary" size="xs" uppercase onClick={() => navigate(`lists/${item.id}`)}>
  //                     edit
  //                   </Button>
  //                   <Button onClick={() => handleDelete(item.id)} color="red" size="xs" uppercase>
  //                     delete
  //                   </Button>
  //                 </Popover.Dropdown>
  //               </Popover>
  //             </td>
  //           </tr>
  //         ))
  //       ) : (
  //         <h1>Not found</h1>
  //       )}
  //     </>
  //   )
  // })

  return (
    <div className={style.listMain}>
      <div className={style.listMainLeft}>
        <ScrollArea h={660}>
          <Table miw={800} verticalSpacing="sm">
            <thead>
              <tr>
                <th style={{ width: rem(40) }}>
                  <Checkbox
                    onChange={toggleAll}
                    checked={selection.length === data.length}
                    indeterminate={selection.length > 0 && selection.length !== data.length}
                    transitionDuration={0}
                  />
                </th>
                <th>#</th>
                <th>Specialization</th>
                <th>Info</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.length ? (
                data.map((item: List.CourseType, index: number) => (
                  <tr key={item.id} className={cx({ [classes.rowSelected]: false })} onClick={() => showSelectedCourse(item.id)}>
                    <td>
                      <Checkbox checked={false} onChange={() => toggleRow(item.id)} transitionDuration={0} />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <Group spacing="sm">
                        <Text size="sm" weight={500}>
                          {item.name}
                        </Text>
                      </Group>
                    </td>
                    <td style={{ color: item.isDegree ? '#353945' : '#777E90' }}>{item.isDegree ? 'DEGREE' : 'NO DEGREE'}</td>
                    <td>
                      <Button color={item.isActive ? 'green' : 'red'} size="xs" uppercase>
                        {item.isActive ? 'active' : 'inactive'}
                      </Button>
                    </td>
                    <td>
                      <Popover trapFocus position="bottom" withArrow shadow="md">
                        <Popover.Target>
                          <span>...</span>
                        </Popover.Target>
                        <Popover.Dropdown sx={theme => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
                          <Button mr={'5px'} color="primary" size="xs" uppercase onClick={() => navigate(`lists/${item.id}`)}>
                            edit
                          </Button>
                          <Button onClick={() => handleDelete(item.id)} color="red" size="xs" uppercase>
                            delete
                          </Button>
                        </Popover.Dropdown>
                      </Popover>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>Not found</h1>
              )}
            </tbody>
          </Table>
        </ScrollArea>
      </div>
      <div className={style.listMainRight}>
        <div className={style.listMainRightTitle}>
          <p>{selectedCourse?.name}</p>
        </div>
        <div className={style.listMainRightList}>
          {selectedCourse?.skills.map((item, index) => (
            <div className={style.listMainRightItems} key={item.id}>
              <p>
                {index + 1}. {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
