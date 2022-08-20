export interface Fundraising {
  id:string,
  "Fundraising Round": string;
  Date: Date;
  Amount: number;
  Website: string;
  Description: string;
  Valuation: number;
  Project: string;
  Announcement: string;
  "Company Name (from Project)": string;
  "Record ID (from Project)": string;
  "Record ID": string;
  "Investor (from Investors)": string;
  category_name: string[];
  subcategory_name: string;
  fundraising_round: string;
  Investors_name: string;
  founders_name: string;
  Created: Date;
  Stages: string[];
  Founder: string[];
  "Sub-categories": string[];
  Category: string[];
  Name: string[];
  Investors: string[];
  'Logo (from Project)': Logo[];
}

export interface Logo {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  small: Full;
  large: Full;
  full: Full;
}

export interface Full {
  url: string;
  width: number;
  height: number;
}
