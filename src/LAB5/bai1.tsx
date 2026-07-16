import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

interface Category {
  title: string;
  description: string;
  active: boolean;
}

function Bai1() {
  const mutation = useMutation({
    mutationFn: async (data: Category) => {
      await axios.post("http://localhost:3000/categories", data);
    },
    onSuccess: () => message.success("Thêm thành công"),
    onError: () => message.error("Thêm thất bại"),
  });

  const onFinish = (values: Category) => {
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Active"
        name="active"
        valuePropName="checked"
      >
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Bai1;