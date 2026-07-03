const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com', status: 'active' },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com', status: 'inactive' },
  { id: 3, name: 'Lê Văn C', email: 'c@gmail.com', status: 'active' },
  { id: 4, name: 'Phạm Thị D', email: 'd@gmail.com', status: 'inactive' },
];

const statusClass: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-red-100 text-red-700',
};

const Bai3 = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Bài 3 - Bảng người dùng</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{user.id}</td>
                <td className="border border-gray-200 px-4 py-2">{user.name}</td>
                <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className={`rounded-full px-3 py-1 text-sm font-medium ${statusClass[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <div className="flex gap-2">
                    <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white">Edit</button>
                    <button className="rounded bg-red-500 px-3 py-1 text-sm text-white">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bai3;
