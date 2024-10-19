import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DottedSeparator } from "@/components/shared/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


const fromSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});



export const SignInCard = () => {


    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Wellcome back
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter email dddress"
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter your password"
                        disabled={false}
                        min={8}
                        max={256}
                    />
                    <Button disabled={false} size={"lg"} className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FcGoogle className="mr-2 size-5" />
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FaGithub className="mr-2 size-5" />
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    )
}


