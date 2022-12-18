import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

// Execute query
const query = groq`*[_type == "pageInfo"][0]`;

// What should the response be structured as
type Data = {
  pageInfo: PageInfo;
};

// Fetching the response
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
