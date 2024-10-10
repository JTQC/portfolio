import { PortableTextBlock } from "sanity"
import { ImageType } from "./image-type";

export type WorkType = {
  headline: string;
  content: PortableTextBlock[];
  image: ImageType;
  overlay: ImageType;
  siteUrl: string;
}