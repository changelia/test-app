import React, { useMemo } from 'react'
import { Select } from 'antd'

interface SelectProps {
  options: string[]
  defaultValue: string[]
  handleTagChange: any
}

const { Option }: any = Select
const CustomSelect = ({ options, handleTagChange, defaultValue }: SelectProps) => {

  const children = useMemo(() => options.map((i: string) => <Option value={i} key={i}>{i}</Option>), [options])

  return (
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="Add Tags" onChange={handleTagChange}
      value={defaultValue}
    >
      {children}
    </Select>
  )
}

export default CustomSelect