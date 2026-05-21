import { createClient } from "../prismicio"

const SITE_URL = "https://vcbo.com"

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ loc, lastmod, priority }) => {
         return `
       <url>
           <loc>${loc}</loc>
           ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
           <changefreq>weekly</changefreq>
           ${priority ? `<priority>${priority}</priority>` : ""}
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const client = createClient()

  // Array to store all URLs
  const urls = []

  // Add static pages
  const staticPages = [
    { loc: `${SITE_URL}/`, priority: "1.0" },
    { loc: `${SITE_URL}/about`, priority: "0.8" },
    { loc: `${SITE_URL}/about/team`, priority: "0.8" },
    { loc: `${SITE_URL}/services`, priority: "0.8" },
    { loc: `${SITE_URL}/projects`, priority: "0.9" },
    { loc: `${SITE_URL}/insights/careers`, priority: "0.7" },
  ]

  urls.push(...staticPages)

  // Fetch all projects
  try {
    const projects = await client.getAllByType("project", {
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })

    projects.forEach((project) => {
      urls.push({
        loc: `${SITE_URL}/projects/${project.uid}`,
        lastmod: project.last_publication_date,
        priority: "0.7",
      })
    })
  } catch (error) {
    console.error("Error fetching projects:", error)
  }

  // Fetch all sectors
  try {
    const sectors = await client.getAllByType("sector", {
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })

    sectors.forEach((sector) => {
      urls.push({
        loc: `${SITE_URL}/projects/sector/${sector.uid}`,
        lastmod: sector.last_publication_date,
        priority: "0.6",
      })
    })
  } catch (error) {
    console.error("Error fetching sectors:", error)
  }

  // Fetch all specialties
  try {
    const specialties = await client.getAllByType("specialty", {
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })

    specialties.forEach((specialty) => {
      urls.push({
        loc: `${SITE_URL}/projects/specialty/${specialty.uid}`,
        lastmod: specialty.last_publication_date,
        priority: "0.6",
      })
    })
  } catch (error) {
    console.error("Error fetching specialties:", error)
  }

  // Fetch all articles
  try {
    const articles = await client.getAllByType("article", {
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })

    articles.forEach((article) => {
      urls.push({
        loc: `${SITE_URL}/insights/articles/${article.uid}`,
        lastmod: article.last_publication_date,
        priority: "0.6",
      })
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
  }

  // Fetch all positions
  try {
    const positions = await client.getAllByType("position", {
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })

    positions.forEach((position) => {
      urls.push({
        loc: `${SITE_URL}/insights/careers/${position.uid}`,
        lastmod: position.last_publication_date,
        priority: "0.5",
      })
    })
  } catch (error) {
    console.error("Error fetching positions:", error)
  }

  // Generate the XML sitemap
  const sitemap = generateSiteMap(urls)

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
