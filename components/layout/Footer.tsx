import { AppLogo } from "../icon/AppLogo";
import { Github } from "../icon/Github";
import { Twitter } from "../icon/Twitter";

const nav = [
  {
    title: "Company",
    list: [
      {
        title: "Sent Messaging API",
        href: "/",
      },
      {
        title: "Contact Us",
        href: "/",
      },
      {
        title: "Careers",
        href: "/",
      },
      {
        title: "Sign Up",
        href: "/",
      },
    ],
  },
  {
    title: "Tools",
    list: [
      {
        title: "Free phone lookup tool",
        href: "/",
      },
      {
        title: "Phone validator API",
        href: "/",
      },
      {
        title: "SMS Message Templates",
        href: "/",
      },
    ],
  },
  {
    title: "Developers",
    list: [
      {
        title: "API Reference",
        href: "/",
      },
      {
        title: "Resources",
        href: "/",
      },
      {
        title: "OpenAPI",
        href: "/",
      },
      {
        title: "Status",
        href: "/",
      },
    ],
  },
  {
    title: "Legal",
    list: [
      {
        title: "Terms of Service",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/",
      },
      {
        title: "Supplemental Terms",
        href: "/",
      },
      {
        title: "Commercial MSA",
        href: "/",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl xl:pb-2 mt-40">
      <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
        <div className="mb-12 flex-col flex gap-4">
          <div className="flex items-center gap-2">
            <AppLogo className="w-8 h-8" />
            <p className="text-xl font-medium">Sent.dm</p>
          </div>
          <p className="max-w-xs">Unified API for Business Messaging</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-4">
          {nav.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium uppercase">{item.title}</h3>
              <ul className="mt-2 space-y-2">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>
                    <a
                      href={listItem.href}
                      className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
                    >
                      {listItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
        <div className="flex flex-row gap-5">
          <a href=""className="text-zinc-500 hover:text-zinc-600 fill-zinc-500 hover:fill-zinc-600">
            <Github/>
          </a>
          <a href=""className="text-zinc-500 hover:text-zinc-600 fill-zinc-500 hover:fill-zinc-600">
            <Twitter/>
          </a>
        </div>
        <p className="text-sm sm:text-center text-zinc-400">© 2025 Sent.dm. All rights reserved.</p>
      </div>
    </div>
  );
};
