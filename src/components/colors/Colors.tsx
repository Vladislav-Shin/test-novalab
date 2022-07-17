import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsFetched } from "./colorsSlice";
import useService from "../../services/Services";
import { IUnknown } from "../../interfaces/interface";
import { Card } from "antd";
import "./colors.scss";

const Unknowns:React.FC = () => {
  const { items } = useSelector((state:any) => state.items);
  const dispatch = useDispatch();
  const { getAllUnknown } = useService();

  useEffect(() => {
    getAllUnknown().then((res) => dispatch(itemsFetched(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemsRender = (items: any) => {
    return items.map((item: IUnknown) => {
      const { id, name, year, color, value } = item;

      return (
        <Card key={id} style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: color, padding: "10px" }}>
          <h3 style={{ marginBottom: "20px" }}>Название цвета: <br/> {name}</h3>
          <h4>Год: {year}</h4>
          <p>{value}</p>
        </Card>
      );
    });
  };

  const viewItems = itemsRender(items);

  return (
    <div className="items">
      <div className="items__row">{viewItems}</div>
    </div>
  );
};

export default Unknowns;
