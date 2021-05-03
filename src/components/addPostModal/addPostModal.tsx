import React from 'react'
import Modal from 'components/modal'
import { useFormik } from 'formik'
import { Input, Textarea } from 'components/input'
import { useAddPost } from 'hooks/useAddPost'

const formData = {
  title: '',
  body: ''
}

interface AddPostModalProps {
  open: boolean
  setOpens: any
}

const AddPostModal = ({ open, setOpens }: AddPostModalProps) => {
  const { addPost, loading } = useAddPost()

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm
  } = useFormik({
    initialValues: formData,
    onSubmit: (values: any) => {
      values.userId = 1
      addPost(values, () => {
        setOpens(false)
        resetForm()
      })
    }
  })

  return (
    <Modal
      title="Add Post"
      isModalVisible={open}
      handleCancel={() => setOpens(false)}
      handleOk={() => handleSubmit()}
    >
      <>
        <Input
          onChange={handleChange}
          value={values.title}
          name="title"
          placeholder="Post Title"
        />
        <br /> <br />
        <Textarea
          onChange={handleChange}
          value={values.body}
          name="body"
          placeholder="Post Body"
        />
      </>
    </Modal>
  )
}

export default AddPostModal