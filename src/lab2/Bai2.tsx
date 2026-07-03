import { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: '15.000.000₫', category: 'Electronics' },
  { id: 2, name: 'Điện thoại', price: '8.500.000₫', category: 'Electronics' },
  { id: 3, name: 'Tai nghe', price: '1.200.000₫', category: 'Accessories' },
  { id: 4, name: 'Bàn phím', price: '900.000₫', category: 'Accessories' },
  { id: 5, name: 'Chuột', price: '350.000₫', category: 'Accessories' },
  { id: 6, name: 'Máy in', price: '3.200.000₫', category: 'Office' },
];

const pageSize = 3;

const Bai2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const visibleProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Bài 2 - Bảng sản phẩm</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Product Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{product.id}</td>
                <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                <td className="border border-gray-200 px-4 py-2">{product.price}</td>
                <td className="border border-gray-200 px-4 py-2">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">Trang {currentPage} / {totalPages}</p>
        <div className="flex gap-2">
          <button
            className="rounded border border-gray-300 px-3 py-1 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Trước
          </button>
          <button
            className="rounded border border-gray-300 px-3 py-1 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bai2;
