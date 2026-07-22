import { Table } from "antd";

function Bai2() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      name: "Laptop",
      price: "15000000",
      category: "Electronics",
    },
    {
      key: 2,
      id: 2,
      name: "Mouse",
      price: "300000",
      category: "Accessories",
    },
    {
      key: 3,
      id: 3,
      name: "Keyboard",
      price: "500000",
      category: "Accessories",
    },
    {
      key: 4,
      id: 4,
      name: "Monitor",
      price: "4000000",
      category: "Electronics",
    },
    {
      key: 5,
      id: 5,
      name: "Headphone",
      price: "800000",
      category: "Audio",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 3 }}
    />
  );
}

export default Bai2;