import { Form, Input, Button, } from "antd"

function Register() {
    const onFinish = (data: any) => {
        console.log(data);
    };
    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item
            label="Name"
            name="name"
            rules={[
          { required: true, message: "Vui lòng nhập tên" },
        ]}>
             <Input />
            </Form.Item>
            <Form.Item
            label="Emaill"
            name="emaill"
             rules={[
          { required: true, message: "Vui lòng nhập email" },
          { type: "email", message: "Email không đúng định dạng" },
        ]}
        >
             <Input />
            </Form.Item>
            <Form.Item
            label="Phone"
            name="phone"
            rules={[
          { required: true, message: "Vui lòng nhập số điện thoại" },
        ]}
        >
             <Input />
            </Form.Item>
            <Form.Item
             label="PassWord"
             name="passWord"
             rules={[
          { required: true, message: "Vui lòng nhập mật khẩu" },
          { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
        ]}
        >
             <Input.Password />
            </Form.Item>
            <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: "Vui lòng nhập lại mật khẩu" },
        ]}
       >
         <Input.Password />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
        </Form>
    );
}
export default Register;