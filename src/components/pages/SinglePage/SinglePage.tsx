import { EditOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUsers } from "../../../interfaces/interface";
import useService from "../../../services/Services";
import AppHeader from "../../AppHeader/AppHeader";
import Footer from "../../Footer/Footer";

import "./singlePage.scss";

const SinglePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUsers>();
  const [value, setValue] = useState("");
  const { getUser, changeUsers } = useService();
  let navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getUser(id).then((res) => setUser(res));
  }, []);

  useEffect(() => {
    getUser(id).then((res) => setValue(`${res.name}`));
  }, []);

  const inputHandler = () => {
    inputRef.current?.focus()
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const submitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = { ...user, name: value };

    changeUsers(user?.id, newData)
      .then(res => console.log(res)
      )
  }

  const goBack = () => navigate(-1);

  // const {name, last_name, email, img} = user;

  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <div className="singlePage">
            {/*             <Card key={id} hoverable style={{ border: "1px solid #000", width: 250 }} cover={<img style={{ width: "100%" }} alt={user?.img} src={user?.img} />}>
              <Meta title={`${user?.name} ${user?.last_name}`} description={user?.email} />
              <Button type="primary" onClick={goBack}>Назад</Button>
            </Card> */}
            <Card
              style={{ width: 300 }}
              cover={<img alt={user?.img} src={user?.img} />}
              actions={[
                <Button type="primary" onClick={goBack}>
                  Назад
                </Button>,
              ]}
            >
              <div className="wrapper-input">
                <form action="" onSubmit={submitName}>
                  <div>Name:
                    <input type="text" ref={inputRef} value={value} onChange={(e) => changeName(e)} />
                  </div>
                  <EditOutlined key="edit" onClick={inputHandler} />
                </form>
              </div>
              <div>Surname: {user?.last_name}</div>
              <p>{user?.email}</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SinglePage;
