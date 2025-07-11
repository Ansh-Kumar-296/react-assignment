const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];
export default function Footer() {
  return (
    <div className="flex items-center space-x-4 px-4 py-2 border-t bg-white fixed bottom-0 left-0 w-full">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === 'All Orders'
              ? 'bg-green-100 text-green-800'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
      <button className="ml-auto px-3 py-1 text-xl leading-none text-gray-500 hover:text-gray-800">+</button>
    </div>
  );
}
