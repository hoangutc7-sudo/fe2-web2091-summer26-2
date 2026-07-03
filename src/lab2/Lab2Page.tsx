import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';

const Lab2Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Lab 2</h1>
          <p className="mt-2 text-gray-600">Ba bảng dữ liệu với giao diện đơn giản và pagination.</p>
        </div>

        <Bai1 />
        <Bai2 />
        <Bai3 />
      </div>
    </div>
  );
};

export default Lab2Page;
