import { Form, Input, Button,  } from "antd";

function Login() {
    const onFinish = (data: any) => {
        console.log(data);
    };
    return (
        <Form onFinish={onFinish} layout="vertical">
        <Form.Item
        label="Emaill"
        name="emaill"
        rules={[
          { required: true, message: "Vui lòng nhập email" },
        ]}>
            <Input />
        </Form.Item>
        <Form.Item
        label="PassWord"
        name="passWord"
        rules={[
          { required: true, message: "Vui lòng nhập pass" },
        ]}>
         <Input.Password />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
        </Form>
    );
}
export default Login;