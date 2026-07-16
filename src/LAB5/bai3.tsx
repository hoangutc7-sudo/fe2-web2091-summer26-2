import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

interface Story {
  title: string;
  description: string;
  active: boolean;
}

function Bai3() {
  // Bài 3: Hiển thị loading khi submit
  const mutation = useMutation({
    mutationFn: async (data: Story) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
    mutation.mutate(values);
  };

  return (
    <div>
      <h2>Bài 3</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Vui lòng nhập Title" },
            { min: 3, message: "Ít nhất 3 ký tự" },
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

        <Button
          type="primary"
          htmlType="submit"
          loading={mutation.isPending}
        >
          {mutation.isPending ? "Đang thêm..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default Bai3;