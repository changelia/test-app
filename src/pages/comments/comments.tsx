import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFetchComments } from 'hooks/useFetchComments'
import { useAddComment } from 'hooks/useAddComment'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import CommentList from './CommentList'
import styled from 'styled-components'

const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value }: any) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CustomComments = () => {
  const params: any = useParams()
  const [commentValue, setCommentValue] = useState('')
  const { fetchComments, loading } = useFetchComments()
  const { addComment } = useAddComment()
  const comments = useSelector((state: any) => state.comments)

  const commentList = comments.commentList[params.id]

  useEffect(() => {
    if (!commentList)
      fetchComments(params.id)
  }, [params.id])

  const handleCreateComment = () => {
    addComment({}, params.id, () => { })
  }

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setCommentValue(value)
  }, [commentValue])

  if (loading) return <>Loading...</>

  return (
    <>
      <StyledContainer>
        <List
          dataSource={commentList && commentList}
          header={0}
          itemLayout="horizontal"
          renderItem={props => <CommentList comment={props} />}
        />
      </StyledContainer>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleCreateComment}
            submitting={false}
            value={commentValue}
          />
        }
      />
    </>
  )
}

export default CustomComments

const StyledContainer = styled.div`
  height: 60vh;
  overflow-y: overlay;
`