import { Input } from 'antd'

interface Props {
  placeholder: string
  onChange: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
}

export default ({ placeholder, onChange, value, name }: Props) => (
  <Input
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    name={name}
  />
)


