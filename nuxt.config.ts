import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        script: [
            {
                src: '~/assets/js/jquery.min.js'
            },
            {
                src: '~/assets/js/functions.js'
            },
            {
                src: '~/assets/libraries/lib.js'
            },
            {
                src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDW40y4kdsjsz714OVTvrw7woVCpD8EbLE'
            }
        ],
    },
    css: ['~/assets/css/navigation-menu.css', '~/assets/css/shortcode.css', '~/assets/css/style.css']
})
