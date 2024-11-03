"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MembersList = () => {
    const workspaceId = useWorkspaceId();
    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="flex flex-row items-center gap-x-4 p-7 space-y-0">
                <Button>
                    
                </Button>
            </CardHeader>
            <CardContent>
                <div>Workspace ID: {workspaceId}</div>
            </CardContent>
        </Card>
    )
}