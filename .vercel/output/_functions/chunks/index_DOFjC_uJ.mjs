import { c as createComponent, $ as $$Font } from './_astro_assets_ygs5j6hy.mjs';
import { m as maybeRenderHead, r as renderTemplate, f as addAttribute, b as renderComponent } from './entrypoint_CZyKt9aM.mjs';
import { g as getEntry, $ as $$Layout, a as $$Navbar, b as renderScript } from './Navbar_DRYxtM_w.mjs';
import { a as actions } from './server_DASCuxah.mjs';

const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative border bg-white border-gray-200 rounded-md p-4 transition-[translate] hover:-translate-y-0.5"> <h3>Project Card</h3> <p>Project short description</p> </div>`;
}, "/home/nishant/coding/personal-portfolio/src/components/ProjectCard.astro", void 0);

const $$JournalItemHome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$JournalItemHome;
  const { title, id, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> <a${addAttribute(`/journal/${id}`, "href")}> <h2 class="text-lg font-semibold tracking-tight underline"> ${title} </h2> </a> <p class="max-w-[80ch] line-clamp-2 mt-1 font-inter"> ${content} </p> </div>`;
}, "/home/nishant/coding/personal-portfolio/src/components/JournalItemHome.astro", void 0);

const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, note } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mt-20 pb-8"> <h1 class="text-3xl font-bold mb-2">${title}</h1> <p class="text-base text-slate-400">${note}</p> </header>`;
}, "/home/nishant/coding/personal-portfolio/src/components/PageHeader.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const result = Astro2.getActionResult(actions.sendEmail);
  const testJournal = await getEntry("journal", "test");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nishant Bhagat" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Font", $$Font, { "cssVariable": "--roboto", "preload": true })} ${renderComponent($$result2, "Font", $$Font, { "cssVariable": "--noto-serif" })} ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="px-4 max-w-screen-sm mx-auto"> <section id="hero" class="flex flex-col pb-20"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Nishant Bhagat", "note": "Love to do backend stuff." })} <div class="flex items-center gap-4"> <a href="https://x.com/nishantat17" target="_blank" class="relative hover:-translate-y-0.5 transition-[translate]"> <i${addAttribute(["hgi-stroke hgi-new-twitter", ["text-2xl"]], "class:list")}></i> </a> <a href="https://github.com/nishantat17" target="_blank" class="relative hover:-translate-y-0.5 transition-[translate]"> <i${addAttribute(["hgi-stroke hgi-github", ["text-2xl"]], "class:list")}></i> </a> <a href="https://linkedin.com/in/nishantat17" target="_blank" class="relative hover:-translate-y-0.5 transition-[translate]"> <i${addAttribute(["hgi-stroke hgi-linkedin-01", ["text-2xl"]], "class:list")}></i> </a> </div> <p class="mt-4 text-base font-noto-serif p-4 rounded-md bg-white inset-shadow-sm">
Hey everyone! I am a <em>Backend Developer</em> who builds with <b><a href="https://cloord.com" target="_blank">Cloord</a></b> but <span class="bg-lime-200">open to hire</span>. I work with
        JavaScript technologies like TypeScript, Express, React, etc. and
        integrate them with PostgreSQL to deploy on AWS. If that's not enough I
        have little experience with Mobile Dev using Expo. That's all nerdy
        things; Somehow on the interesting side I'd like to play Ping Pong and
        Biking.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Projects</h2> <div class="grid grid-cols-2 gap-4"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, {})} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, {})} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, {})} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, {})} </div> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Journal</h2> <div> ${renderComponent($$result2, "JournalItemHome", $$JournalItemHome, { "title": testJournal?.data.title, "id": testJournal?.id, "content": testJournal?.body })} </div> </section> <section class="mb-12" id="contact"> <h2 class="text-2xl font-semibold mb-4">Send Message</h2> <div> <form id="contact-form" class="flex flex-col gap-4" method="post" enctype="application/x-www-form-urlencoded"> <label id="name" class="text-base flex flex-col gap-2">
Name
<input type="text" name="name" id="name" class="border outline-none p-2 w-full sm:w-[400px] bg-white"> </label> <label id="email" class="text-base flex flex-col gap-2">
Email
<input type="email" name="email" id="email" class="border outline-none p-2 w-full sm:w-[400px] bg-white"> </label> <label id="phone_number" class="text-base flex flex-col gap-2">
Phone Number
<input type="text" name="phoneNumber" id="phone_number" class="border outline-none p-2 w-full sm:w-[400px] bg-white"> </label> <label for="message" class="text-base flex flex-col gap-2">
Message
<textarea name="message" id="message" rows="4" class="border outline-none p-2 w-full sm:w-[400px] bg-white"></textarea> </label> ${result?.error && renderTemplate`<p>Failed to send message. Try again!</p>`} <button type="submit" class="p-2 text-medium bg-black w-full sm:w-[400px] text-white font-medium">Submit</button> </form> </div> <div class="flex items-center gap-2 mt-8"> <a href="https://x.com/nishantat17" target="_blank"> X </a> <a href="https://github.com/nishantat17" target="_blank"> Github </a> <a href="https://linkedin.com/in/nishantat17" target="_blank">
LinkedIn
</a> <span> or Send Message.</span> </div> </section> <footer class="pb-12"></footer> </main> ${renderScript($$result2, "/home/nishant/coding/personal-portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/nishant/coding/personal-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/nishant/coding/personal-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
