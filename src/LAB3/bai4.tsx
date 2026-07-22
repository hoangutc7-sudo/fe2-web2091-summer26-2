import { Form, Input, Button, } from "antd"

function Blog() {
    const onFinish = (data: any) => {
        console.log(data);
    };
    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item
            label="Title"
            name="title">
             <Input />
            </Form.Item>
            <Form.Item
            label="Category "
            name="category ">
             <Input />
            </Form.Item>
            <Form.Item
            label="Slug"
            name="slug">
             <Input />
            </Form.Item>
            <Form.Item
             label="Content"
             name="content">
             <Input />
            </Form.Item>
            <Form.Item
            label="Image URL"
            name="image URL">
            <Input />
            </Form.Item>
            <Button htmlType="submit">Submit</Button>
            </Form>
    );
}
export default Blog;