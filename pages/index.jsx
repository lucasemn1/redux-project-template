import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const { user } = useSelector((store) => store.authReducer);

  useEffect(() => {
    if(!user) {
      router.push("/login");
    }
  }, [user, router]);

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
      <h1>Olá, {user && user.name}!</h1>
    </div>
  );
}
