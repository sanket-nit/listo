import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {

  const session = await getSession();

  if (!session || !session?.user ) {
    return redirect('/signin')
  }

  return (
    <div className="">
      <h1>Dashboard</h1>
    </div>
  )
}