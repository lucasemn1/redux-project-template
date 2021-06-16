import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestLoadUser } from "../../redux/actions/authActions";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoadingUser, errorLoadUser, successLoadUser, user } = useSelector((store) => store.authReducer);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if(successLoadUser) {
      router.push("/");
    }
  }, [router, successLoadUser]);

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
        { isLoadingUser && <Spinner animation="border" /> }
        { errorLoadUser && <span>Erro ao buscar o usuário</span> }
        { successLoadUser && <span>Usuário carregado com sucesso!</span> }
        
        <Form.Control
          size="lg"
          type="text"
          placeholder="Usuário do Github"
          className="bg-dark text-light"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button
          variant="primary"
          size="lg"
          className="w-100 mt-4 bg-info"
          onClick={() => dispatch(requestLoadUser(username))}
        >
          Buscar
        </Button>
      </Form>
    </div>
  );
}
