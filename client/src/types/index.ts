export interface BlogPost {
  _id: string;
  title: string;
  image: string;
  content: string;
  excerpt: string;
  tags: string[];
  createdAt: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  color: string;
}