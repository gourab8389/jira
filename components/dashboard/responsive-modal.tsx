import { useMedia } from "react-use";


import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerContent
} from "@/components/ui/drawer";

interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({ children, open, onOpenChange }: ResponsiveModalProps) => {
    const isMobile = useMedia("(max-width: 768px)");

    return isMobile ? (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                {children}
            </DrawerContent>
        </Drawer>
    ) : (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};
