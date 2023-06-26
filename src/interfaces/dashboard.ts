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
