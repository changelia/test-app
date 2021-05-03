import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { Comment, Tooltip, Avatar } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { useGetPosts } from 'hooks/useGetPosts'
import Button from 'components/button'
import { Input } from 'components/input'
import AddPostModal from 'components/addPostModal'
import styled from 'styled-components'

const Posts = () => {
  const history = useHistory()
  const [open, setOpens] = useState(false)
  const [searchText, setSearchText] = useState('')
  const { getPosts } = useGetPosts()

  useEffect(() => {
    getPosts()
  }, [])

  const data = useSelector((state: any) => state.posts)

  const handleChange = useCallback((e: any) => {
    const { value } = e.currentTarget
    setSearchText(value)
  }, [searchText])

  const onClick = (id: string) => history.push(`/posts/${id}/comments`)

  const actions = (item: any) => ([
    <Tooltip key="comment-basic-like" title="Comment">
      <span onClick={() => onClick(item.id)}>
        <CommentOutlined /> Comments
      </span>
    </Tooltip>,
  ])

  const filteredData = useMemo(() =>
    data && data.postList.filter((i: any) =>
      i.body.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())), [searchText, data])

  return (
    <>
      <StyledWrapper>
        <Button
          text="Create Post"
          type="primary"
          onClick={() => setOpens(true)}
        />

        <Input
          value={searchText}
          onChange={handleChange}
          placeholder="Search..."
          name="search"
        />
      </StyledWrapper>
      <StyledContainer>
        {filteredData.map((i: any) => (
          <Comment
            actions={actions(i)}
            author={<a>{i.title}</a>}
            key={i.id}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p onClick={() => onClick(i.id)} style={{ cursor: 'pointer' }}>
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
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 260px auto;
  grid-column-gap: 20px;
`