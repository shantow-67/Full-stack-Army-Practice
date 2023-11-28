import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function Help() {
  //   const [name, setName] = useState("");
  const [state, setState] = useState({ name: "" });

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "HM Nayem" });
    }, 3000);
    console.log("Set timeout");
  }, []);

  console.log("Rendering");

  // Data generate by Chat GPT
  const data = [
    {
      name: "Ashik",
      email: "ashik@mail.com",
    },
    {
      name: "Sshik",
      email: "sshik@mail.com",
    },
    {
      name: "John",
      email: "john@mail.com",
    },
    {
      name: "Emma",
      email: "emma@mail.com",
    },
    {
      name: "Michael",
      email: "michael@mail.com",
    },
    {
      name: "Sophie",
      email: "sophie@mail.com",
    },
    {
      name: "Daniel",
      email: "daniel@mail.com",
    },
    {
      name: "Olivia",
      email: "olivia@mail.com",
    },
    {
      name: "Liam",
      email: "liam@mail.com",
    },
    {
      name: "Ava",
      email: "ava@mail.com",
    },
  ];

  //   const data = [];
  return (
    <div>
      <Layout>
        {state.name ? <h1>Hellow , {state.name}</h1> : <h1>Hellow , Guest</h1>}
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <li>
                {item.name} ,{item.email}
              </li>
            ))}
          </ul>
        ) : (
          <h2>There is no data</h2>
        )}
      </Layout>
    </div>
  );
}

export default Help;
