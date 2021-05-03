import React from 'react'
import { Comment } from 'antd'

interface CommentListProps {
  comment: {
    name: string
    body: string
  }
}

const CommentList = ({ comment }: CommentListProps) => (
  <Comment
    actions={[]}
    author={<a>{comment.name}</a>}
    content={
      <p>
        {comment.body}
      </p>
    }
  />
)

export default CommentList