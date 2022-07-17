import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useService from "../../services/Services";
import { usersFetched } from "./usersSlice";
import { IUsers } from "../../interfaces/interface";
import "./users.scss";

const Users = () => {
  const { users } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const { getAllUsers } = useService();
  const { Meta } = Card;

  useEffect(() => {
    getAllUsers().then((users) => dispatch(usersFetched(users)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItems = (users: IUsers[]) => {
    return users.map((item) => {
      const { id, name, last_name, email, img } = item;

      return (
        <Link key={id} to={`/users/${id}`}>
          <Card  hoverable style={{ width: 250 }} cover={<img alt={img} src={img} />}>
            <Meta title={`${name} ${last_name}`} description={email} />
          </Card>
        </Link>
      );
    });
  };

  const viewItem = renderItems(users);

  return (
    <>
      <div className="users">{viewItem}</div>
    </>
  );
};

export default Users;
