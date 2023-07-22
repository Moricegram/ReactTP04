import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState(""); //State para los datos del input o form.control
  const [listaTareas, setListaTareas] = useState([]); //Array para almacenar los states tarea
  return (
    <>
      <Form.Group className="mb-1 d-flex" controlId="tarea">
        <Form.Control
          type="text"
          placeholder="ingresa una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)} //para guardar el value del Input dentro del State
        />
        <Button className="ms-2" variant="success" type="submit">
          +
        </Button>
      </Form.Group>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
