import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <p>Loading ...</p>;

  return (
    <>
      <button className="border-double border-4 border-blue-600 bg-blue-200 text-black font-semibold rounded-md m-4">
        <Link className="m-2" to={"/"}>
          Return Back
        </Link>
      </button>
      <div className="m-4 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1>
            <span className="font-semibold">Name: </span>
            {user.name}
          </h1>
          <h4>
            <span className="font-semibold">Username: </span>
            {user.username}
          </h4>
          <p>
            <span className="font-semibold">Email: </span>
            {user.email}
          </p>
        </div>
        <div>
          <h3>
            <span className="font-semibold">Address: </span>
            {user.address.street}
          </h3>
          <p className="mt-2">
            <span className="font-semibold">Suite: </span>
            {user.address.suite}
          </p>
          <p className="mt-2">
            <span className="font-semibold">City: </span>
            {user.address.city}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Zipcode: </span>
            {user.address.zipcode}
          </p>
        </div>
        <div>
          <h3>
            <span className="font-semibold">Company Info: </span>
          </h3>
          <p className="mt-2">
            <span className="font-semibold">Company Name: </span>
            {user.company.name}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Catch phrase: </span>
            {user.company.catchPhrase}
          </p>
          <p className="mt-2">
            <span className="font-semibold">BS: </span>
            {user.company.bs}
          </p>
        </div>
      </div>
    </>
  );
}
