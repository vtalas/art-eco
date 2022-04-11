import App from './App.svelte';
import * as utils from './utils.js';

/**
 * https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components
 */

//TODO v.talas
/*
  Space filling curves
  https://en.wikipedia.org/wiki/Hilbert_curve

    neighbor finding using space filling algoriths https://arxiv.org/pdf/1710.06384.pdf

- index view => gallery view

 */

import { galleryColumns } from '../data/galleries.mjs';

(async function() {

    const lang = 'cs'
    const i18n = await utils.json(`/json/${lang}.json`);

    new App({
        target: document.body,
        intro: true,
        props: {
            i18n,
            defaultTitle: 'Mezi stavařinou a uměním.',
            galleryColumns,
            selectedGallery: ''
        }
    });

})()

