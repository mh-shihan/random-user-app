import { useEffect, useState } from "react";

const useFetchedData = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

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
  console.log(user);
  return { loading, user, fetchUsers };
};

export default useFetchedData;
