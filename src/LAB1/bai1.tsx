const Bai1 = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">Sidebar</h2>
      </div>

      <div className="flex-1">
        {/* Header */}
        <div className="h-16 bg-blue-500 text-white flex items-center px-5">
          Header
        </div>

        {/* Content */}
        <div className="p-5">
          <h1 className="text-2xl font-bold">Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Bai1;