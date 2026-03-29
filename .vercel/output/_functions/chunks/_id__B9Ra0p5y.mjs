import { c as createComponent, $ as $$Font } from './_astro_assets_D7VNpbRg.mjs';
import { m as maybeRenderHead, r as renderTemplate, b as renderComponent, c as renderSlot } from './entrypoint_D5Rryj5R.mjs';
import { $ as $$Layout, a as $$Navbar, g as getEntry, r as renderEntry } from './Navbar_CKgnTnbA.mjs';

const $$MarkdownHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MarkdownHeader;
  const { title, date, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mt-20 pb-8"> <h1 class="text-3xl font-bold mb-2"> ${title} </h1> <p class="text-base text-slate-400 mb-1">${description}</p> <div class="text-xs bg-gray-200 px-2 py-1 rounded-full w-fit"> ${date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </div> </header>`;
}, "/home/nishant/coding/personal-portfolio/src/components/MarkdownHeader.astro", void 0);

const $$JournalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$JournalLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "data-astro-cid-2d7o3squ": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Font", $$Font, { "cssVariable": "--inter", "data-astro-cid-2d7o3squ": true })} ${renderComponent($$result2, "Font", $$Font, { "cssVariable": "--jetbrains-mono", "data-astro-cid-2d7o3squ": true })} ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-2d7o3squ": true })} ${maybeRenderHead()}<div class="px-4 max-w-screen-sm mx-auto" data-astro-cid-2d7o3squ> ${renderComponent($$result2, "MarkdownHeader", $$MarkdownHeader, { "title": frontmatter.title, "description": frontmatter.description, "date": frontmatter.pubDate, "data-astro-cid-2d7o3squ": true })} <main class="prose prose-p:font-inter" data-astro-cid-2d7o3squ> ${renderSlot($$result2, $$slots["default"])} </main> </div> <div class="pb-12" data-astro-cid-2d7o3squ></div> ` })}`;
}, "/home/nishant/coding/personal-portfolio/src/layouts/JournalLayout.astro", void 0);

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (id === void 0) {
    return Astro2.redirect("/404");
  }
  const article = await getEntry("journal", id);
  if (article === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(article);
  return renderTemplate`${renderComponent($$result, "JournalLayout", $$JournalLayout, { "frontmatter": article.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/nishant/coding/personal-portfolio/src/pages/journal/[id].astro", void 0);

const $$file = "/home/nishant/coding/personal-portfolio/src/pages/journal/[id].astro";
const $$url = "/journal/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
