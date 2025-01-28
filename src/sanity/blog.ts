

import {defineField, defineType} from "sanity";

export default defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description'
        }),
        defineField({
            name:'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source: 'heading',
                maxLength: 100
            }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: 
                {
                    hotspot: true,
                }
            
        }),
        defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Travel", value: "travel" },
          { title: "Culture", value: "culture" },
          { title: "Food", value: "food" },
          { title: "Nature", value: "nature" },
        ],
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      title: "Author",
    }),
    defineField({
      name: "publishedDate",
      type: "datetime",
      title: "Published Date",
    }),
    
    ]
 
})

