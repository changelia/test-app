import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

// const CommentList = ({ comments }: any) => (
//   <List
//     dataSource={comments}
//     header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//     itemLayout="horizontal"
//     renderItem={props => <Comment {...props} />}
//   />
// );

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
)

const AddComment = () => {

  const handleSubmit = () => { }
  const handleChange = (e: any) => { }
  // const { comments, submitting, value } = state
  return (
    <>
      {/* {comments.length > 0 && <CommentList comments={comments} />} */}
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
            onSubmit={handleSubmit}
            submitting={false}
            value={'1'}
          />
        }
      />
    </>
  )
}

export default AddComment