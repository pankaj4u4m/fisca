/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, $ as $$Base, m as markdownify, l as languages } from './_astro_content_DXTAWoIx.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("about", lang);
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> <h1 class="mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/About.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const prerender = true;
async function getStaticPaths() {
  return Object.entries(languages).map((l) => ({
    params: { lang: l[0] }
  }));
}
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseAbout", $$About$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/about.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

export { $$About as default, $$file as file, getStaticPaths, prerender, $$url as url };
