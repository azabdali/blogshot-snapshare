import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReportModal = ({ open, onOpenChange }: ReportModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Report</AlertDialogTitle>
          <AlertDialogDescription>
            Please select the reason for reporting this post.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="offensiveContent" />
            <Label htmlFor="offensiveContent">Offensive content</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="offensiveThumbnail" />
            <Label htmlFor="offensiveThumbnail">Offensive thumbnail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="copyrightInfringement" />
            <Label htmlFor="copyrightInfringement">Copyright infringement</Label>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
