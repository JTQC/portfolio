import { defineType } from 'sanity'

const about = defineType({
	name: 'about',
	title: 'About',
	type: 'document',	
	fields: [		
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
			validation: Rule => Rule.required(),			
		},		
	],
})

export default about
