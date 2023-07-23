import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button className="rounded-5" variant="danger">
        X
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
