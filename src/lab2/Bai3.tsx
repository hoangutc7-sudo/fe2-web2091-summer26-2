import { Button, Space, Table, Tag } from "antd";

function Bai3() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value: string) =>
        value === "active" ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        ),
    },
    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Trần Thị B",
      email: "b@gmail.com",
      status: "inactive",
    },
    {
      key: 3,
      id: 3,
      name: "Lê Văn C",
      email: "c@gmail.com",
      status: "active",
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
}

export default Bai3;