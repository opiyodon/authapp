import LoginForm from "@/components/LoginForm";
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from "./api/auth/[...nextauth]/route";

async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
  )
}

export default Login