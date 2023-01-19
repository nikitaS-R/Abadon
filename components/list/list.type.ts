export type NewsType = {
  id: number;
  title: string;
  mainImage: any;
  images:any[];
  description: string;
};

export type ListItemProps = {
  news: NewsType;
  onItemClick: (item:NewsType) => void;
};
