import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

function Bai3() {
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
  ];

  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export default Bai3;