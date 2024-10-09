import { PortableTextBlock } from "sanity"

export type WorkType = {
  headline: string;
  content: PortableTextBlock[];
  image: string;
  overlay: string;
  siteUrl: string;
}