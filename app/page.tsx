import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center min-w-96">
        <img
          src="/logoCedar.svg"
          alt="Company Logo"
          className="mb-10 max-w-40"
        />
        <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-[#012D67]">
          Sign in to your account
        </h1>
        <form className="flex flex-col items-center justify-center space-y-6 max-w-72 sm:max-w-full w-full">
          <Input type="email" className={"py-6 rounded-xl border-[#6D7088]"} />

          <Input
            type="password"
            className={"py-6 rounded-xl border-[#6D7088]"}
          />

          <Button
            type="submit"
            className="w-full bg-[#3667E9] font-bold rounded-xl py-6"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
