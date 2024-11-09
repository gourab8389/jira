"use client";

import { z } from "zod";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, CopyIcon, ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DottedSeparator } from "@/components/shared/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useConfirm } from "@/hooks/use-confrim";


import { Project } from "../types";
import { updateProjectSchema } from "../schemas";
import { useUpdateProject } from "../api/use-update-project";
import { useDeleteProject } from "../api/use-delete-project";

interface EditProjectFormProps {
  onCancel?: () => void;
  initialValues: Project;
}

export const EditProjectForm = ({ onCancel, initialValues }: EditProjectFormProps) => {

  const router = useRouter();
  const { mutate, isPending } = useUpdateProject();

  const {
     mutate: deleteProject, 
     isPending: isDeletingProject 
    } = useDeleteProject();


  const [DeleteDialog, confirmDelete] = useConfirm(
    "Delete Project",
    "This action cannot be undone.",
    "destructive"
  );


  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof updateProjectSchema>>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues: {
      ...initialValues,
      image: initialValues.imageUrl ?? "",
    },
  });

  const handledelete = async () => {
    const ok = await confirmDelete();

    if(!ok) return;

    deleteProject({
      param: { projectId: initialValues.$id },
    },{
      onSuccess: () => {
        window.location.href = `/workspaces/${initialValues.workspaceId}`;
      }
    })
  };


  const onSubmit = (values: z.infer<typeof updateProjectSchema>) => {
    const finalValues = {
        ...values,
        image: values.image instanceof File ? values.image : "",
    }
    mutate({
       form: finalValues,
       param: {projectId: initialValues.$id} 
      });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
        form.setValue("image", file);
    }
  };


  return (
    <div className="flex flex-col gap-y-4">
      <DeleteDialog/>
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex flex-row items-center gap-x-4 p-7 space-y-0">
        <Button size={"sm"} variant={"secondary"} onClick={onCancel ? onCancel : () => router.push(`/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}`)}>
          <ArrowLeftIcon className="size-4 mr-2"/>
          Back
        </Button>
        <CardTitle className="text-xl font-bold">
          {initialValues.name}
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter project name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-5">
                      {field.value ? (
                        <div className="size-[72px] relative rounded-md overflow-hidden">
                          <Image
                            src={
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : field.value
                            }
                            alt="Logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <Avatar>
                          <AvatarFallback>
                            <ImageIcon className="size-[36px] text-neutral-400" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex flex-col">
                        <p className="text-sm">Project Icon</p>
                        <p className="text-sm text-muted-foreground">
                            JPG, PNG, SVG or JPEG, max 1mb
                        </p>
                        <input
                        className="hidden"
                        type="file"
                        accept=".jpg, .png, .jpeg, svg"
                        ref={inputRef}
                        onChange={handleImageChange}
                        disabled={isPending}
                        />
                        {field.value ? (
                        <Button
                        type="button"
                        disabled={isPending}
                        variant={"destructive"}
                        size={"xs"}
                        className="w-fit mt-2"
                        onClick={() => {
                          field.onChange(null);
                          if(inputRef.current){
                            inputRef.current.value = "";
                          }
                        }}
                        >
                            Remove Image
                        </Button>
                          ) : (
                            <Button
                        type="button"
                        disabled={isPending}
                        variant={"teritary"}
                        size={"xs"}
                        className="w-fit mt-2"
                        onClick={() => inputRef.current?.click()}
                        >
                            Upload Image
                        </Button>
                          )
                        }
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            <DottedSeparator className="py-7" />
            <div className="flex items-center justify-between">
              <Button
                type="button"
                size={"lg"}
                variant={"secondary"}
                onClick={onCancel}
                disabled={isPending}
                className={cn(!onCancel && "invisible")}
              >
                Cancel
              </Button>

              <Button disabled={isPending} type="submit" size={"lg"}>
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>


    <Card className="w-full h-full border-none shadow-none">
        <CardContent className="p-7">
            <div className="flex flex-col">
              <h3 className="font-bold">
                Denger Zone
              </h3>
              <p className="text-sm text-muted-foreground">
                Deleting a project is irreversable and will remove all associated data.
              </p>
              <DottedSeparator className="py-7"/>
              <Button 
              className="mt-6 w-fit ml-auto"
              size={"sm"}
              variant={"destructive"}
              type="button"
              disabled={isPending || isDeletingProject}
              onClick={handledelete}
              >
                Delete Project
              </Button>
            </div>
        </CardContent>
    </Card>
    </div>
  );
};

