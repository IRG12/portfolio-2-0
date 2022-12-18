import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

// Execute query
const query = groq`*[_type == "project"] {
    ...,
    technologies[]->
}`;

// What should the response be structured as
type Data = {
  projects: Project[];
};

// Fetching the response
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
