import React, { useState } from 'react'
import Modal from 'components/modal'
import { Input, Textarea } from 'components/input'

const AddPostModal = ({ open, setOpens }: any) => {
  return (
    <Modal title="Add Post" isModalVisible={open} handleCancel={() => setOpens(false)} handleOk={() => { }}>
      <>
        <Input onChange={() => { }} value="" placeholder="Post Title" />
        <br /> <br />
        <Textarea onChange={() => { }} value="" placeholder="Post Title" />
      </>
    </Modal>
  )
}

export default AddPostModal