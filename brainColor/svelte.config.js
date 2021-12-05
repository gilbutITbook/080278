//import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
//const config = {
//	kit: {
//		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
//		target: '#svelte'
//	}
//};

//export default config;

import adapter from "@sveltejs/adapter-node";

export default {
    kit: {
        adapter: adapter({
            // default options are shown
            out: "build",
            precompress: false,
            env: {
                host: "HOST",
                port: "PORT"
            }
        })
    }
};

