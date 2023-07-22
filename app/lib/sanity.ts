import { createClient } from "next-sanity"

const projectId = '7nkeghb7'
const dataset = 'production'
const apiVersion = '2023-08-19'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})