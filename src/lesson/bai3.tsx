import { App, Button, Form, Input, InputNumber } from "antd";

interface ProductForm {
  name: string;
  price: number;
  quantity: number;
  description: string;
}

function Product() {
  const { message } = App.useApp();

  const onFinish = (data: ProductForm) => {
    console.log(data);

    message.success("Thêm sản phẩm thành công");
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Tên Sản Phẩm"
        name="name"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên sản phẩm",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="price"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập giá",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Số Lượng"
        name="quantity"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số lượng",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Mô tả"
        name="description"
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Product;