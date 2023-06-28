export interface DashboardData {
  contact_us_log: number[];
  download_log: number[];
  sharing: number[];
  view: number[];
  intro_page_info: {
    intro_page_id: number;
  };
}

export interface Inquiry {
  contact_us_log_id: number;
  email: string;
  name: string;
  content: string;
  type: string;
  date: string;
  selected?: boolean;
}

export interface ContactUs {
  status: string;
  page: number;
}

export interface ContactData {
  content: Inquiry[];
  total_page: number;
  has_next: boolean;
}

export interface ChangeContactStatus {
  idList: number[];
  action: string;
  status: string;
  page: number;
  closeModal: () => void;
}
