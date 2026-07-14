import {useMutation,useQuery,useQueryClient,} from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

function Bai2() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const columns = [
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Hình ảnh", dataIndex: "cover" },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <button onClick={() => handleDelete(record.id)}>
          Xóa
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </div>
  );
}

export default Bai2;