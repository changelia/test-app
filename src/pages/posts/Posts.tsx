import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useHistory, useParams } from 'react-router-dom'
import { Comment, Tooltip } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { useGetPosts } from 'hooks/useGetPosts'
import Button from 'components/button'
import AddPostModal from 'components/addPostModal'
import styled from 'styled-components'

const Posts = (props: any) => {
  const history = useHistory()
  const [open, setOpens] = useState(false)
  const { getPosts } = useGetPosts()

  useEffect(() => {
    getPosts()
  }, [])

  const data = useSelector((state: any) => state.posts)

  const onClick = (id: string) => history.push(`/posts/${id}/comments`)

  const actions = (item: any) => ([
    <Tooltip key="comment-basic-like" title="Comment">
      <span onClick={() => onClick(item.id)}>
        <CommentOutlined /> Comments
      </span>
    </Tooltip>,
  ])

  return (
    <>
      <Button
        text="Create Post"
        type="primary"
        onClick={() => setOpens(true)}
      />
      <StyledContainer>
        {data && data.postList.map((i: any) => (
          <Comment
            actions={actions(i)}
            author={<a>{i.title}</a>}
            key={i.id}
            content={
              <p>
                {i.body}
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        ))}
      </StyledContainer>

      <AddPostModal setOpens={setOpens} open={open} />
    </>
  );
};

export default Posts

const StyledContainer = styled.div`
  height: 70vh;
  overflow-y: overlay;
`