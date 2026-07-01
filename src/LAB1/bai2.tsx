const Bai2 = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Đăng ký</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Bai2;