interface ISkill {
  name: string;
  level: number;
}

export interface IOffer {
  city: string;
  company_logo_url: string;
  company_name: string;
  company_size: string;
  company_url: string;
  country_code: string;
  employment_type: string;
  experience_level: string;
  id: string;
  latitude: number;
  longitude: number;
  marker_icon: string;
  published_at: string;
  remote: boolean;
  salary_currency: string;
  salary_from: number;
  salary_to: number;
  skills: ISkill[];
  street: string;
  title: string;
}
