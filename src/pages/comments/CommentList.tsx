import React from 'react'
import { Comment } from 'antd'
import Select from 'components/select'
import { addNewTag, addTagToComment } from './commentActions/actions'
import { useDispatch, useSelector } from 'react-redux'

interface CommentListProps {
  comment: {
    name: string
    body: string
    tags: string[]
    postId: string
    id: string
  }
}

const CommentList = ({ comment }: CommentListProps) => {
  const dispatch = useDispatch()
  const tagList = useSelector((state: any) => state.comments.tags)

  const handleTagChange = (value: string[]) => {
    dispatch(addNewTag(value))
    dispatch(addTagToComment(value, comment.postId, comment.id))
  }

  const tags = comment.tags || []

  return (
    <Comment
      actions={[]}
      author={<a>{comment.name}</a>}
      content={
        <>
          <p>
            {comment.body}
          </p>

          <Select
            options={tagList}
            handleTagChange={handleTagChange}
            defaultValue={tags}
          />
        </>
      }
    />
  )
}

export default CommentList