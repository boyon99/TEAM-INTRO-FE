import { Inquiry } from './dashboard';

export interface popup {
  text: string;
  cancle: string;
  confirm: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface DetailModalProps extends Inquiry {
  closeModal: () => void;
}
