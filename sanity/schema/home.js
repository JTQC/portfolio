import { defineType } from 'sanity'

const home = defineType({
	name: 'home',
	title: 'Home Page',
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
	],
})

export default home
