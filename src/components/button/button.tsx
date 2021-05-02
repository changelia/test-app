import { Button } from 'antd'

interface Props {
  text: string
  type: string | any
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default ({ text, type, onClick }: Props) => (
  <Button
    type={type}
    onClick={onClick}
  >
    {text}
  </Button>
)