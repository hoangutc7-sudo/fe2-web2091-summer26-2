const students = [
  { id: 1, name: 'Nguyễn Văn A', age: 20, major: 'Công nghệ thông tin' },
  { id: 2, name: 'Trần Thị B', age: 21, major: 'Kinh doanh' },
  { id: 3, name: 'Lê Văn C', age: 19, major: 'Thiết kế' },
  { id: 4, name: 'Phạm Thị D', age: 22, major: 'Marketing' },
];

const Bai1 = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Bài 1 - Bảng sinh viên</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Age</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Major</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{student.id}</td>
                <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                <td className="border border-gray-200 px-4 py-2">{student.age}</td>
                <td className="border border-gray-200 px-4 py-2">{student.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bai1;
