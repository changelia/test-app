import { Input } from 'antd'

interface Props {
  placeholder: string
  onChange: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

export default ({ placeholder, onChange, value }: Props) => (
  <Input
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
)