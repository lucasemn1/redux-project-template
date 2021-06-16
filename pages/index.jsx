import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login")
  });

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
      <h1>Olá, Lucas!</h1>
    </div>
  );
}
