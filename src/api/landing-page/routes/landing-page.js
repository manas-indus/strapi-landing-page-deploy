'use strict';

/**
 * landing-page router
 */
// we have to make our routes aware of the middle ware that we want to use so that we dont  have to
//  paste big line of api url to fetch our data.
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::landing-page.landing-page',{
    config:{
        find:{
            middlewares:['api::landing-page.landing-page-populate']
        },
        findOne:{
            middlewares:['api::landing-page.landing-page-populate']
        }
    },
});
