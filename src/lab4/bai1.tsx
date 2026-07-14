import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

function Bai1() {
  const { data } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const columns = [
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Hình ảnh", dataIndex: "cover" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={data} />;
}

export default Bai1;