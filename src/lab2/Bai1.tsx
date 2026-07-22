import { Table } from "antd";

function Bai1() {
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
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      name: "Nguyễn Văn A",
      age: 20,
      major: "CNTT",
    },
    {
      key: 2,
      id: 2,
      name: "Trần Thị B",
      age: 21,
      major: "Thiết kế",
    },
    {
      key: 3,
      id: 3,
      name: "Lê Văn C",
      age: 22,
      major: "Marketing",
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
}

export default Bai1;