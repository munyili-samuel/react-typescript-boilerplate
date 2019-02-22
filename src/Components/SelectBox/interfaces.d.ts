export interface SelectBoxProps {
  options: any[];
  onReset?: () => void;
  value: string | number;
  className?: string;
  onsSelectionChange: (event: any, data: any) => void;
  name: string;
  disabled?: boolean;
  onSearchChange?: (event: any, data: any) => void;
}
