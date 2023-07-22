import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      Tarea1
      <Button className="rounded-5" variant="danger">
        X
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
