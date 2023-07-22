import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <>
      <Form.Group className="mb-1 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="ingresa una tarea" />
        <Button className="ms-2" variant="success" type="submit">
          +
        </Button>
      </Form.Group>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
