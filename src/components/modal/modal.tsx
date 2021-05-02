import React from 'react'
import { Modal } from 'antd'

interface Props {
  isModalVisible: boolean
  handleOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  handleCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  title: string
  children: React.ReactNode
}

export default ({ isModalVisible, handleOk, handleCancel, children, title }: Props) => (
  <Modal
    title={title}
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    {children}
  </Modal>
)
