'use strict';

/**
 * `landing-page-populate` middleware
 */
// this is a populate query object within a midddle ware i have access to our context we are updating our context query to inject our pre
//  filter populate query object
const populate={
  metadata:{
    populate:{ metaImage:{fields:["name","alternativeText","url"]}}
    },
   blocks:{
   populate:{
     link:{populate:true},
     image:{fields:["name","alternativeText","url"]},
     card:{populate:{image:{fields:["name","alternativeText","url"]}}},
     plan:{populate:["services","link"]},
     form:{populate:["input","button"]}
     }
   },
}; 
// it will inject our query populate to controller and it render the data through api that we need.
// we have to populate our middle ware to the routes that we want to use it
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query={
      populate,
      ...ctx.query, 
    }
    await next();
  };
};
