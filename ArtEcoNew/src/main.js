import App from './App.svelte';

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

import { galleries } from '../data/galleries.mjs';

new App({
    target: document.body,
    intro: true,
    props: {
        defaultTitle: 'Mezi stavarinou a umenim',
        galleries,
        selectedGallery: ''
    }
});
