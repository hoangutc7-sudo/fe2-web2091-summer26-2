import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input, Table } from "antd";
import axios from "axios";

function Bai5() {
  const [keyword, setKeyword] = useState("");

  const { data } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Hình ảnh", dataIndex: "cover" },
  ];

  return (
    <div>
      <Input
        placeholder="Tìm kiếm truyện"
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: 300, marginBottom: 20 }}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  );
}

export default Bai5;