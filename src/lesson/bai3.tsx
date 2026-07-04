import { Form, Input, Button, InputNumber } from "antd"

function Product() {
    const onFinish = (data: any) => {
        console.log(data);
    };
    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item
            label="Ten San Pham"
            name="name">
             <Input />
            </Form.Item>
            <Form.Item
            label="Gia"
            name="price">
             <InputNumber style={{ width: "100%" }}/>
            </Form.Item>
            <Form.Item
            label="So Luong"
            name="quantity">
             <Input />
            </Form.Item>
            <Form.Item
             label="Mo ta"
             name="description">
             <Input />
            </Form.Item>
            
        <Button htmlType="submit">Submit</Button>
        </Form>
    );
}
export default Product;