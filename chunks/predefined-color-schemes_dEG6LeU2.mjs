import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_wYgVWBG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’ve crafted some predefined color schemes for this AstroPaper blog theme. You can replace these color schemes with the original ones.</p>\n<p>If you don’t know how you can configure color schemes, check <a href=\"https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/\">this blog post</a>.</p>\n<h2 id=\"table-of-contents\">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href=\"#light-color-schemes\">Light color schemes</a>\n<ul>\n<li><a href=\"#lobster\">Lobster</a></li>\n<li><a href=\"#leaf-blue\">Leaf Blue</a></li>\n<li><a href=\"#pinky-light\">Pinky light</a></li>\n</ul>\n</li>\n<li><a href=\"#dark-color-schemes\">Dark color schemes</a>\n<ul>\n<li><a href=\"#astropaper-1-original-dark-theme\">AstroPaper 1 original Dark Theme</a></li>\n<li><a href=\"#deep-oyster\">Deep Oyster</a></li>\n<li><a href=\"#pikky-dark\">Pikky dark</a></li>\n<li><a href=\"#astro-dark-high-contrast\">Astro dark (High Contrast)</a></li>\n<li><a href=\"#astro-dark-new-default-dark-theme-in-astropaper-2\">Astro dark (New default dark theme in AstroPaper 2)</a></li>\n<li><a href=\"#astro-deep-purple-new-dark-theme-in-astropaper-3\">Astro Deep Purple (New dark theme in AstroPaper 3)</a></li>\n<li><a href=\"#astropaper-v4-special-new-dark-theme-in-astropaper-4\">AstroPaper v4 Special (New dark theme in AstroPaper 4)</a></li>\n</ul>\n</li>\n</ul>\n<p></p></details><p></p>\n<h2 id=\"light-color-schemes\">Light color schemes</h2>\n<p>Light color scheme has to be defined using the css selector <code>:root</code> and <code>html[data-theme=\"light\"]</code>.</p>\n<h3 id=\"lobster\">Lobster</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/192282447-1d222faf-a3ce-44a9-9cfe-ac873155e5a9.png\" alt=\"lobster-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#56B6C2\">:root</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"light\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">246</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">238</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">225</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">1</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">44</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">86</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">225</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">74</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">57</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">217</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">209</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">195</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">239</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">216</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">176</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">220</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">152</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">145</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"leaf-blue\">Leaf Blue</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/192318782-e80e3c39-54b5-423e-8f4b-9ae60402fc8d.png\" alt=\"leaf-blue-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#56B6C2\">:root</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"light\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">242</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">245</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">236</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">53</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">53</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">56</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">17</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">88</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">209</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">206</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">213</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">180</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">187</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">199</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">137</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">124</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">173</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"pinky-light\">Pinky light</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/192286510-892d0042-2d6d-471e-bb72-954221ae2d17.png\" alt=\"pinky-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#56B6C2\">:root</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"light\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">250</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">252</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">252</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">34</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">46</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">54</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">211</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">0</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">106</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">234</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">206</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">219</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">241</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">186</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">212</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">227</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">169</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">198</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h2 id=\"dark-color-schemes\">Dark color schemes</h2>\n<p>Dark color scheme has to be defined as <code>html[data-theme=\"dark\"]</code>.</p>\n<h3 id=\"astropaper-1-original-dark-theme\">AstroPaper 1 original Dark Theme</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/215769153-13b0ad8d-5ba2-44b1-af06-e5ae61293f62.png\" alt=\"AstroPaper 1 default dark theme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">47</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">55</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">65</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">26</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">217</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">217</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">75</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">90</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">89</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">107</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">129</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">59</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">70</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">85</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"deep-oyster\">Deep Oyster</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/192314524-45ec5904-3d8f-450a-9edf-1e32c5e11d6c.png\" alt=\"deep-oyster-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">33</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">35</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">61</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">244</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">247</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">245</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">82</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">86</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">57</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">60</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">102</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">74</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">78</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">134</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">177</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">47</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">50</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"pikky-dark\">Pikky dark</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/192307050-fbd55326-911c-4001-87c6-a8ad9378ac2e.png\" alt=\"pinky-dark-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">53</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">54</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">64</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">233</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">237</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">241</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">120</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">200</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">75</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">76</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">89</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">113</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">85</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">102</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">134</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">67</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">107</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"astro-dark-high-contrast\">Astro dark (High Contrast)</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/215680520-59427bb0-f4cb-48c0-bccc-f182a428d72d.svg\" alt=\"astro-dark-color-scheme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">16</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">23</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">42</span><span style=\"color:#ABB2BF\">; </span><span style=\"color:#7F848E;font-style:italic\">/* higher contrast bgColor */</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">33</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">39</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">55</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">234</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">237</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">243</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">107</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">1</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">27</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">39</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">70</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">138</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">51</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">2</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">171</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">75</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">8</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"astro-dark-new-default-dark-theme-in-astropaper-2\">Astro dark (New default dark theme in AstroPaper 2)</h3>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/215772856-d5b7ae35-ddaa-4ed6-b0bf-3fa5dbcf834c.png\" alt=\"new dark color scheme - low contrast\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">33</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">39</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">55</span><span style=\"color:#ABB2BF\">; </span><span style=\"color:#7F848E;font-style:italic\">/* lower contrast bgColor */</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">234</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">237</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">243</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">107</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">1</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">52</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">96</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">138</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">51</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">2</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">171</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">75</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">8</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"astro-deep-purple-new-dark-theme-in-astropaper-3\">Astro Deep Purple (New dark theme in AstroPaper 3)</h3>\n<p><img src=\"https://github.com/satnaing/astro-paper/assets/53733092/c8b5d7e1-a3bc-4852-a5ad-4abf7b3cec79\" alt=\"AstroPaper v3 new theme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">33</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">39</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">55</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">234</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">237</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">243</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">235</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">211</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">52</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">96</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">125</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">79</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">124</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">100</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">36</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">81</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<h3 id=\"astropaper-v4-special-new-dark-theme-in-astropaper-4\">AstroPaper v4 Special (New dark theme in AstroPaper 4)</h3>\n<p><img src=\"https://github.com/satnaing/astro-paper/assets/53733092/66eb74dc-7a0e-4f2e-982d-25f5c443b25a\" alt=\"AstroPaper v4 new theme\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E06C75\">html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">0</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">1</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">35</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">97</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">123</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">255</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">234</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">237</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">243</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">33</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">34</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">83</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">12</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">14</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">79</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">48</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">138</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>";

				const frontmatter = {"author":"Sat Naing","pubDatetime":"2022-09-26T12:13:24.000Z","modDatetime":"2024-01-04T09:09:06.000Z","title":"Predefined color schemes","slug":"predefined-color-schemes","featured":false,"draft":false,"tags":["color-schemes"],"description":"Some of the well-crafted, predefined color schemes for AstroPaper blog theme."};
				const file = "/Users/dshar168/Projects/pf/pf/src/content/blog/predefined-color-schemes.md";
				const url = undefined;
				function rawContent() {
					return "\nI've crafted some predefined color schemes for this AstroPaper blog theme. You can replace these color schemes with the original ones.\n\nIf you don't know how you can configure color schemes, check [this blog post](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/).\n\n## Table of contents\n\n## Light color schemes\n\nLight color scheme has to be defined using the css selector `:root` and `html[data-theme=\"light\"]`.\n\n### Lobster\n\n![lobster-color-scheme](https://user-images.githubusercontent.com/53733092/192282447-1d222faf-a3ce-44a9-9cfe-ac873155e5a9.png)\n\n```css\n:root,\nhtml[data-theme=\"light\"] {\n  --color-fill: 246, 238, 225;\n  --color-text-base: 1, 44, 86;\n  --color-accent: 225, 74, 57;\n  --color-card: 217, 209, 195;\n  --color-card-muted: 239, 216, 176;\n  --color-border: 220, 152, 145;\n}\n```\n\n### Leaf Blue\n\n![leaf-blue-color-scheme](https://user-images.githubusercontent.com/53733092/192318782-e80e3c39-54b5-423e-8f4b-9ae60402fc8d.png)\n\n```css\n:root,\nhtml[data-theme=\"light\"] {\n  --color-fill: 242, 245, 236;\n  --color-text-base: 53, 53, 56;\n  --color-accent: 17, 88, 209;\n  --color-card: 206, 213, 180;\n  --color-card-muted: 187, 199, 137;\n  --color-border: 124, 173, 255;\n}\n```\n\n### Pinky light\n\n![pinky-color-scheme](https://user-images.githubusercontent.com/53733092/192286510-892d0042-2d6d-471e-bb72-954221ae2d17.png)\n\n```css\n:root,\nhtml[data-theme=\"light\"] {\n  --color-fill: 250, 252, 252;\n  --color-text-base: 34, 46, 54;\n  --color-accent: 211, 0, 106;\n  --color-card: 234, 206, 219;\n  --color-card-muted: 241, 186, 212;\n  --color-border: 227, 169, 198;\n}\n```\n\n## Dark color schemes\n\nDark color scheme has to be defined as `html[data-theme=\"dark\"]`.\n\n### AstroPaper 1 original Dark Theme\n\n![AstroPaper 1 default dark theme](https://user-images.githubusercontent.com/53733092/215769153-13b0ad8d-5ba2-44b1-af06-e5ae61293f62.png)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 47, 55, 65;\n  --color-text-base: 230, 230, 230;\n  --color-accent: 26, 217, 217;\n  --color-card: 63, 75, 90;\n  --color-card-muted: 89, 107, 129;\n  --color-border: 59, 70, 85;\n}\n```\n\n### Deep Oyster\n\n![deep-oyster-color-scheme](https://user-images.githubusercontent.com/53733092/192314524-45ec5904-3d8f-450a-9edf-1e32c5e11d6c.png)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 33, 35, 61;\n  --color-text-base: 244, 247, 245;\n  --color-accent: 255, 82, 86;\n  --color-card: 57, 60, 102;\n  --color-card-muted: 74, 78, 134;\n  --color-border: 177, 47, 50;\n}\n```\n\n### Pikky dark\n\n![pinky-dark-color-scheme](https://user-images.githubusercontent.com/53733092/192307050-fbd55326-911c-4001-87c6-a8ad9378ac2e.png)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 53, 54, 64;\n  --color-text-base: 233, 237, 241;\n  --color-accent: 255, 120, 200;\n  --color-card: 75, 76, 89;\n  --color-card-muted: 113, 85, 102;\n  --color-border: 134, 67, 107;\n}\n```\n\n### Astro dark (High Contrast)\n\n![astro-dark-color-scheme](https://user-images.githubusercontent.com/53733092/215680520-59427bb0-f4cb-48c0-bccc-f182a428d72d.svg)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 16, 23, 42; /* higher contrast bgColor */\n  --color-fill: 33, 39, 55;\n  --color-text-base: 234, 237, 243;\n  --color-accent: 255, 107, 1;\n  --color-card: 27, 39, 70;\n  --color-card-muted: 138, 51, 2;\n  --color-border: 171, 75, 8;\n}\n```\n\n### Astro dark (New default dark theme in AstroPaper 2)\n\n![new dark color scheme - low contrast](https://user-images.githubusercontent.com/53733092/215772856-d5b7ae35-ddaa-4ed6-b0bf-3fa5dbcf834c.png)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 33, 39, 55; /* lower contrast bgColor */\n  --color-text-base: 234, 237, 243;\n  --color-accent: 255, 107, 1;\n  --color-card: 52, 63, 96;\n  --color-card-muted: 138, 51, 2;\n  --color-border: 171, 75, 8;\n}\n```\n\n### Astro Deep Purple (New dark theme in AstroPaper 3)\n\n![AstroPaper v3 new theme](https://github.com/satnaing/astro-paper/assets/53733092/c8b5d7e1-a3bc-4852-a5ad-4abf7b3cec79)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 33, 39, 55;\n  --color-text-base: 234, 237, 243;\n  --color-accent: 235, 63, 211;\n  --color-card: 52, 63, 96;\n  --color-card-muted: 125, 79, 124;\n  --color-border: 100, 36, 81;\n}\n```\n\n### AstroPaper v4 Special (New dark theme in AstroPaper 4)\n\n![AstroPaper v4 new theme](https://github.com/satnaing/astro-paper/assets/53733092/66eb74dc-7a0e-4f2e-982d-25f5c443b25a)\n\n```css\nhtml[data-theme=\"dark\"] {\n  --color-fill: 0, 1, 35;\n  --color-accent: 97, 123, 255;\n  --color-text-base: 234, 237, 243;\n  --color-card: 33, 34, 83;\n  --color-card-muted: 12, 14, 79;\n  --color-border: 48, 63, 138;\n}\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"table-of-contents","text":"Table of contents"},{"depth":2,"slug":"light-color-schemes","text":"Light color schemes"},{"depth":3,"slug":"lobster","text":"Lobster"},{"depth":3,"slug":"leaf-blue","text":"Leaf Blue"},{"depth":3,"slug":"pinky-light","text":"Pinky light"},{"depth":2,"slug":"dark-color-schemes","text":"Dark color schemes"},{"depth":3,"slug":"astropaper-1-original-dark-theme","text":"AstroPaper 1 original Dark Theme"},{"depth":3,"slug":"deep-oyster","text":"Deep Oyster"},{"depth":3,"slug":"pikky-dark","text":"Pikky dark"},{"depth":3,"slug":"astro-dark-high-contrast","text":"Astro dark (High Contrast)"},{"depth":3,"slug":"astro-dark-new-default-dark-theme-in-astropaper-2","text":"Astro dark (New default dark theme in AstroPaper 2)"},{"depth":3,"slug":"astro-deep-purple-new-dark-theme-in-astropaper-3","text":"Astro Deep Purple (New dark theme in AstroPaper 3)"},{"depth":3,"slug":"astropaper-v4-special-new-dark-theme-in-astropaper-4","text":"AstroPaper v4 Special (New dark theme in AstroPaper 4)"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
