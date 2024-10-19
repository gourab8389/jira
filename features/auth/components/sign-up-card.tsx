import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/shared/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link";


export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
            Sign Up here
        </CardTitle>
        <CardDescription>
            By signing up, you agree to our{" "}

            <Link href="/privacy">
            <span className="text-blue-700">Privicy Policy</span>
            </Link>{" "}
            and{" "}
            <Link href="/terms">
            <span className="text-blue-700">
                Terms of Services
            </span>
            </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
            <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter your Name"
            disabled={false}
            />
            <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter your email"
            disabled={false}
            />
            <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter your password"
            disabled={false}
            min={8}
            max={256}
            />
            <Button disabled={false} size={"lg"} className="w-full">
                Register here
            </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
        disabled={false}
        variant={"secondary"}
        size={"lg"}
        className="w-full"
        >
            <FcGoogle className="mr-2 size-5"/>
            Login with Google
        </Button>
        <Button
        disabled={false}
        variant={"secondary"}
        size={"lg"}
        className="w-full"
        >
            <FaGithub className="mr-2 size-5"/>
            Login with Github
        </Button>
      </CardContent>
    </Card>
  )
}


