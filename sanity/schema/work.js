import { defineType } from 'sanity'

const work = defineType({
	name: 'work',
	title: 'Work',
	type: 'document',	
	fields: [		
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],			
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',			
		},	
    {
			name: 'overlay',
			title: 'Overlay',
			type: 'image',			
		},
		{
			name: 'siteUrl',
			title: 'Site Url',
			type: 'string',
		}		
	],
  preview: {
    select: {
      title: 'headline',      
      media: 'image',
    },
  },
})

export default work
