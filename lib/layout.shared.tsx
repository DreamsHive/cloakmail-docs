import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <Image
            src="https://cloakmail.dev/cloakmail-logo.webp"
            alt="CloakMail"
            width={32}
            height={32}
            className="h-8 w-auto"
            unoptimized
          />
          <span className="font-heading font-bold text-xl tracking-tight">
            CloakMail
          </span>
        </span>
      ),
      url: "/",
    },
    githubUrl: "https://github.com/DreamsHive/cloakmail",
    links: [
      {
        text: "Documentation",
        url: "/",
        active: "nested-url",
      },
      {
        text: "API",
        url: "/api-reference",
      },
    ],
  };
}
