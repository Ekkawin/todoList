import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import './styles/tailwind.css';
import {PageWrapper} from './features/PageWrapper'
import {Button, Input, Form} from 'antd'
import axios from 'axios'





const onFinish = async(e) => {
  console.log('e', e)
  try {
   const res =  await axios.create({  baseURL: 'https://localhost:3000'}).post('/api/addList', e)
   console.log('res', res)
   
  }
  catch(error){

    console.error(error)
  }
} 
function App() {

const [form] = Form.useForm()
  return (
<PageWrapper>
  <Form form={form} onFinish = {onFinish}>
    <div className="flex justify-center">
    {/* <div className="flex"> */}
      {/* <div>1</div> */}
      {/* <div>2</div> */}
      {/* <div>3</div> */}
      {/* <div>4</div> */}
      <Form.Item name="list">
        <Input placeholder="ทำไร" />
      </Form.Item>
      <Button htmlType="submit">ส่ง</Button>
    </div>
    </Form>
    </PageWrapper>
  );
}

export default App;
