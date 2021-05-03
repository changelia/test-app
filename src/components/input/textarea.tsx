import { Input } from 'antd'

interface Props {
  placeholder: string
  onChange: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

const { TextArea } = Input

export default ({ placeholder, onChange, value }: Props) => (
  <TextArea
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={4}
  />
)