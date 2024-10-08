import { groq } from 'next-sanity'


export const getWork = groq`*[_type == "work"]{
    _id,
    headline,
    content,
    image { alt, "src": asset->url },    
    overlay { alt, "src": asset->url },    
    siteUrl,    
}`
