import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

// Execute query
const query = groq`*[_type == "experience"] {
    ...,
    technologies[]->
}`;

// What should the response be structured as
type Data = {
  experiences: Experience[];
};

// Fetching the response
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
