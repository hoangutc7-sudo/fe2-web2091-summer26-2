import { useState } from "react";

const Bai4 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Thêm User
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-5 rounded w-96">
            <h2 className="text-xl font-bold mb-4">Thêm User</h2>

            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full mb-3"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-3"
            />

            <input
              type="text"
              placeholder="Role"
              className="border p-2 w-full mb-3"
            />

            <div className="flex gap-3">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bai4;