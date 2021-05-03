import { Input } from 'antd'

interface Props {
  placeholder: string
  onChange: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
}

const { TextArea } = Input

export default ({ placeholder, onChange, value, name }: Props) => (
  <TextArea
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    name={name}
    rows={4}
  />
)