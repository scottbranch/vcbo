import * as prismic from "@prismicio/client"
import * as prismicNext from "@prismicio/next"
import sm from "./sm.json"

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "homepage",
    uid: "homepage",
    path: "/",
  },
  {
    type: "about_page",
    uid: "about",
    path: "/about",
  },
  {
    type: "services_page",
    uid: "services",
    path: "/services",
  },
  {
    type: "careers_page",
    uid: "careers",
    path: "/etc/careers",
  },
  {
    type: "project",
    path: "/projects/:uid",
  },
  {
    type: "projects_page",
    uid: "projects-page",
    path: "/projects",
  },
  {
    type: "sector",
    path: "/projects/sector/:uid",
  },
  {
    type: "specialty",
    path: "/projects/specialty/:uid",
  },
  {
    type: "specialty",
    path: "/projects/specialty/:uid",
  },
  {
    type: "article",
    path: "/etc/articles/:uid",
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
