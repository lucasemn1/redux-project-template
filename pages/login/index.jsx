import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div
      className="bg-dark text-light"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
        <Form.Control size="lg" type="text" placeholder="Usuário do Github" className="bg-dark text-light" />

        <Button variant="primary" size="lg" className="w-100 mt-4 bg-info">Buscar</Button>
      </Form>
    </div>
  );
}
