import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Table } from "antd";
import axios from "axios";
import { StatusBar } from "./components/StatusBar";

function App() {
  const [data, setData] = useState([]);
  const [updateKey, setUpdateKey] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateKey]);

  const onStatusBarClick = (id: number, status: string): void => {
    axios
      .patch(`http://localhost:3000/employees/${id}`, {
        state: status,
      })
      .then(() => {
        setUpdateKey(!updateKey);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Employees list</h1>
      <Table
        dataSource={data}
        columns={[
          { title: "First name", dataIndex: "firstName", key: "firstName" },
          { title: "Last name", dataIndex: "lastName", key: "lastName" },
          {
            title: "State",
            dataIndex: "state",
            key: "state",
            render: (state, { id, firstName, lastName }) => {
              return (
                <StatusBar
                  key={firstName + lastName + id}
                  state={state}
                  itemId={id}
                  onClick={onStatusBarClick}
                />
              );
            },
          },
        ]}
      />
      <Button />
    </div>
  );
}

export default App;
