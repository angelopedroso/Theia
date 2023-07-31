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
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface AlertDialogCompProps {
  onRemove: () => void
}

export function AlertDialogComp({ onRemove }: AlertDialogCompProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="border border-indigo-700 bg-indigo-600 text-white hover:border-indigo-600 hover:bg-indigo-500 hover:text-white"
        >
          Remove user(s)
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-slate-855 bg-slate-850 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete all selected
            participants from group.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-slate-900">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onRemove}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
