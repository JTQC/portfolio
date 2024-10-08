import { groq } from 'next-sanity'


export const getBrands = groq`*[_type == "brand"]{
    _id,
    content,
    image { alt, "src": asset->url },
    hoverStateImage { alt, "src": asset->url },
    icon { alt, "src": asset->url },
    logo { alt, "src": asset->url },
    name,
    siteUrl,
    jobsUrl,
    reservationUrl,
}`
