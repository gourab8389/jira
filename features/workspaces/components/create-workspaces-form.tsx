import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { DottedSeparator } from "@/components/shared/dotted-separator";


import { createWorkspaceSchema } from "../schemas";

interface createWorkspaceFormProps {
    onCancel: () => void;
}


export const createWorkspaceForm = ({ onCancel } : createWorkspaceFormProps) => {

    const form = useForm<z.infer<typeof createWorkspaceSchema>>({
        resolver: zodResolver(createWorkspaceSchema),
        defaultValues: {
            name: "",
        }
    });

    const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
        console.log({values});
    }

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="flex p-7">
                <CardTitle className="text-xl font-bold">
                    Create a new workspace
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator/>
            </div>
        </Card>
    )
}