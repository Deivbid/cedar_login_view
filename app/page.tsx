import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center min-w-96">
        <Image
          src="/logoCedar.svg"
          alt="Company Logo"
          width={500}
          height={500}
          className="mb-10 max-w-40"
        />
        <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-[#012D67]">
          Sign in to your account
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
