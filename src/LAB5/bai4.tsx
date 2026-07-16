import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import axios from "axios";

interface Story {
  title: string;
  description: string;
  active: boolean;
  categoryId: number;
}

interface Category {
  id: number;
  title: string;
}

function Bai4() {
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  // Thêm truyện
  const mutation = useMutation({
    mutationFn: async (data: Story) => {
      await axios.post("http://localhost:3000/stories", data);
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
      <h2>Bài 4</h2>

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

        {/* Bài 4: Chọn Category */}
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
        >
          <Select
            placeholder="Chọn danh mục"
            options={categories.map((item) => ({
              value: item.id,
              label: item.title,
            }))}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={mutation.isPending}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Bai4;