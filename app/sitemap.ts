export default function sitemap() {
  return [
    {
      url: 'https://rd-master.vercel.app/', 
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://rd-master.vercel.app/calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, 
    },
  ]
}