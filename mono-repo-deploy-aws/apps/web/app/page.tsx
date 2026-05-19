import {prisma} from "@repo/db"

export default async function Home() {
  let users = await prisma.user.findFirst({
    select: {
      username: true,
    }
  })
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}
