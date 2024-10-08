import { createClient, } from "@sanity/client";

const config = {
  projectId: "kkcsuiiu",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;