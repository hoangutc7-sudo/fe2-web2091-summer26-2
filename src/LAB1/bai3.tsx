const Bai3 = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Danh sách User</h2>

      <table className="border w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Nguyễn Văn A</td>
            <td className="border p-2">a@gmail.com</td>
            <td className="border p-2">Admin</td>
          </tr>

          <tr>
            <td className="border p-2">Trần Văn B</td>
            <td className="border p-2">b@gmail.com</td>
            <td className="border p-2">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bai3;