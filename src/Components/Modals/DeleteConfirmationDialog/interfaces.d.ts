export interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  action: () => void;
  name: string;
  closeAction: () => void;
  isBusy: boolean;
  message: any;
  hasError: boolean;
}
