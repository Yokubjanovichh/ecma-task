import React from 'react'
import { Select } from '@mantine/core'

export default function InputSearch() {
  const selectStyles = {
    input: {
      border: 'none',
      padding: '0px'
    },
    wrapper: {
      width: '300px'
    }
  }

  const options = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' }
  ]

  return <Select label="" placeholder="Search..." searchable data={options} styles={selectStyles} />
}
