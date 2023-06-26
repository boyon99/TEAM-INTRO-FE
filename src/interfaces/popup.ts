interface popup {
  text: string;
  cancle: string;
  confirm: string;
  isOpen: boolean;
  onClick: () => void;
}

interface DetailModalProps extends Inquiry {
  closeModal: () => void;
}
