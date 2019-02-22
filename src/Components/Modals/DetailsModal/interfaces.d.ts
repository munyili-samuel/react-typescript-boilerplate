
export interface DetailsModalProps {
  content: JSX.Element;
  title: string;
  isOpen: boolean;
  closeAction: () => void;
  onSubmit: (event) => void;
  isBusy?: boolean;
  size?: 'fullscreen' | 'large' | 'mini' | 'small' | 'tiny'
}
