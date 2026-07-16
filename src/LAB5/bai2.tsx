import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

// Bài 2: Thay any bằng interface Story
interface Story {
  title: string;
  description: string;
  active: boolean;
}

function Bai2() {
  const { mutate } = useMutation({
    mutationFn: async (data: Story) => {
      await axios.post("http://localhost:3000/categories", data);
    },
    onSuccess: () => {
      message.success("Thêm thành công");
    },
    onError: () => {
      message.error("Thêm thất bại");
    },
  });

  const onFinish = (values: Story) => {
    console.log(values);
    mutate(values);
  };

  return (
    <div>
      <h2>Bài 2</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true },
            { min: 3 },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Active"
          name="active"
          valuePropName="checked"
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Button htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Bai2;