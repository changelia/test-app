import React from 'react'
import { Comment } from 'antd'

const CommentList = ({ comment }: any) => (
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