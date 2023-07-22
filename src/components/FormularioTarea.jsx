import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <>
      <Form.Group className="mb-1 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="ingresa una tarea" />
        <Button className="ms-2" variant="success" type="submit">
          +
        </Button>
      </Form.Group>
    </>
  );
};

export default FormularioTarea;
