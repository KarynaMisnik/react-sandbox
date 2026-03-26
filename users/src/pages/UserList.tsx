import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div className="p-4 bg-zinc-800 text-white rounded-lg">
            <p>{user.name}</p>
            <Link
              to={`/user/${user.id}`}
              className="text-blue-400 hover:underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
