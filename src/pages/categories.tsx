import { useMutation } from '@tanstack/react-query';
import { Form, Input, Radio ,Button} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import React from 'react'

interface Story {
  title: string;
  description: string;
  active: boolean;
}
function Categories() {
 const mutation = useMutation({
    mutationFn: async (values: Story) => {
      await axios.post("http://localhost:3000/categories", values);
    },
    
  });
const onFinish = (values: Story) => {
  mutation.mutate(values);
};
  return (
    <Form layout="vertical" onFinish={onFinish}>
        <FormItem label = "title" name="title" >
            <Input/>
        </FormItem>
        <FormItem label = "description" name="description" >
            <Input/>
        </FormItem >
               <FormItem label = "active" name="active">
            <Radio.Group>
<Radio value={true}>true</Radio>
<Radio value={false}>false</Radio>
            </Radio.Group>
               </FormItem>

               <FormItem>
                <Button  type="primary" htmlType="submit" loading={mutation.isPending}>submit</Button>
               </FormItem>
    </Form>
  )
}

export default Categories