export interface IQuickLink {
  content: string;
  command: string;
  description: string;
}

export interface IGuide {
  name: string;
  tags: string[];
  description: string;
  thumbnail: string;
  raid: string;
  wowhead: string;
  youtube: string;
  extra: IExtraInfo[];
}

export interface IExtraInfo {
  name: string;
  content: string;
}