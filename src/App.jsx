import { useState, useEffect } from "react";
import Card from "./card";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      console.log(data);
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Random Users
          </h1>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {darkMode ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => fetchUsers(1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Load New User
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-xl text-gray-600">
            Loading users...
          </div>
        )}

        {/* Users Grid */}
        <div className="flex justify-center">
          {user && <Card user={user} darkMode={darkMode}></Card>}
        </div>
      </div>
    </div>
  );
}

export default App;
