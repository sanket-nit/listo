# Listo 📝

**Listo** is a modern, fullstack ToDo app built with **Next.js**, **Prisma**, **Supabase (PostgreSQL)**, **NextAuth.js**, and **Tailwind CSS**.  
It lets you securely register, log in, and manage your personal tasks — with beautiful UI components powered by **shadcn/ui**.

---

## ✨ Features

✅ Next.js App Router (`app/`)  
✅ Fully typed PostgreSQL database (Supabase) via Prisma ORM  
✅ Secure authentication with `next-auth` and hashed passwords  
✅ Social login support (Google, GitHub, etc.)  
✅ Protected API routes  
✅ CRUD operations for ToDos, scoped per user  
✅ Modern, accessible UI with `shadcn/ui` and Tailwind CSS  
✅ Deployed easily on **Vercel**

---

## 🗂️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Auth:** next-auth with Prisma Adapter
- **ORM:** Prisma
- **Database:** Supabase Postgres
- **Styling:** Tailwind CSS + shadcn/ui components
- **Deployment:** Vercel

---

## ⚙️ Local Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/listo.git
cd listo
```

### 2️⃣ Install dependencies

```bash
pnpm install
```

### 3️⃣ Set up .env

Create a `.env` file and add:

```env
# Supabase Postgres connection
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# NextAuth secret
NEXTAUTH_SECRET="YOUR_RANDOM_SECRET"

# Social OAuth keys (optional)
GOOGLE_ID="your_google_client_id"
GOOGLE_SECRET="your_google_client_secret"
```

💡 **Tip:** Use `openssl rand -base64 32` to generate a secure `NEXTAUTH_SECRET`.

### 4️⃣ Generate DB & Prisma client

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Run the dev server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✅ How Auth Works

- **Register:** `/api/auth/register` → hashes password with bcrypt → stores in Supabase Postgres
- **Login:** next-auth CredentialsProvider → verifies with hashed password
- **Social login:** Add Google, GitHub providers easily
- **Sessions:** Stored as JWTs, managed by next-auth
- **Protected routes:** Use `getServerSession` or `<SessionProvider>`

---

## 🗃️ Database Schema (Prisma)

```prisma
model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  password  String?  // hashed with bcrypt
  todos     Todo[]
  createdAt DateTime @default(now())
}

model Todo {
  id        String   @id @default(cuid())
  title     String
  isDone    Boolean  @default(false)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}
```

---

## 🚀 Deploy to Production

1. Push to GitHub
2. Connect your repo to Vercel
3. Add your `DATABASE_URL` and `NEXTAUTH_SECRET` in Vercel Project Settings → Environment Variables
4. Trigger redeploy
5. Enjoy your live Listo app!

---

## ❤️ Credits

Built with:

- [Next.js](https://nextjs.org/)
- [Prisma](https://prisma.io/)
- [Supabase](https://supabase.com/)
- [next-auth](https://next-auth.js.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📃 License

MIT — free to use, free to modify.

Happy building! 🫶