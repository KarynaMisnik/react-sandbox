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
      <div>
        <Link to={"/"}>Return Back</Link>
        <div>
          <h1>
            <span>Name: </span>
            {user.name}
          </h1>
          <h4>
            <span>Username: </span>
            {user.username}
          </h4>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
        </div>
        <div>
          <h3>
            <span>Address: </span>
            {user.address.street}
          </h3>
          <p>
            <span>Suite: </span>
            {user.address.suite}
          </p>
          <p>
            <span>City: </span>
            {user.address.city}
          </p>
          <p>
            <span>Zipcode: </span>
            {user.address.zipcode}
          </p>
        </div>
        <div>
          <h3>
            <span>Company Info: </span>
          </h3>
          <p>
            <span>Company Name: </span>
            {user.company.name}
          </p>
          <p>
            <span>Catch phrase: </span>
            {user.company.catchPhrase}
          </p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </>
  );
}
