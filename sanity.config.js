import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from '/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  basePath: "/studio",
  projectId: 'kkcsuiiu',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
