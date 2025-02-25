const Card = ({ user = {}, darkMode }) => {
  return (
    <div
      className={`w-1/3 rounded-xl p-6 shadow-lg relative overflow-hidden transition-all duration-300 ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <img
        src={user.picture?.large}
        alt={`${user.name?.first} ${user.name?.last}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
      />
      <h2
        className={`text-xl font-bold text-center mb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {`${user.name?.first} ${user.name?.last}`}
      </h2>
      <p
        className={`text-center mb-4 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {`${user.location?.city}, ${user.location?.country}`}
      </p>

      {/* Action Buttons with Hover Effect */}
      <div className="flex justify-center gap-4 mt-6">
        {/* Email Button */}
        <div className="relative overflow-hidden h-10 w-10 rounded-full">
          <span className="absolute inset-0 bg-gray-200 flex items-center justify-center transition-all duration-300">
            📧
          </span>
          <span className="absolute inset-0 bg-green-500 flex items-center justify-center text-white transform translate-y-full hover:translate-y-0 transition-all duration-300">
            📧
          </span>
        </div>

        {/* Phone Button */}
        <div className="relative overflow-hidden h-10 w-10 rounded-full">
          <span className="absolute inset-0 bg-gray-200 flex items-center justify-center transition-all duration-300">
            📱
          </span>
          <span className="absolute inset-0 bg-green-500 flex items-center justify-center text-white transform translate-y-full hover:translate-y-0 transition-all duration-300">
            📱
          </span>
        </div>

        {/* Location Button */}
        <div className="relative overflow-hidden h-10 w-10 rounded-full">
          <span className="absolute inset-0 bg-gray-200 flex items-center justify-center transition-all duration-300">
            location
          </span>
          <span className="absolute inset-0 bg-green-500 flex items-center justify-center text-white hover:transform hover:translate-y-0 transition-all duration-300">
            📍
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
