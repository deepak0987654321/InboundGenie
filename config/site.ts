import React from "react"

import MyIcon from "../components/ui/icon"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Inbound genie",
  description: "",
  mainNav: [
    {
      title: "Home",
      href: "/home",
      icon: React.createElement(MyIcon, {
        localPath: "../../../home.svg",
        alt: "Home icon",
      }),
    },

    {
      title: "Leads",
      href: "/leads",
      icon: React.createElement(MyIcon, {
        localPath: "../../../leads.svg",
        alt: "leads icon",
      }),
    },
    {
      title: "Tips& FAQs",
      href: "/tips-faq",
      icon: React.createElement(MyIcon, {
        localPath: "../../../tips.svg",
        alt: "tips icon",
      }),
    },
    {
      // Horizontal line (hr)
      isDivider: true,
    },
    {
      title: "Add project",
      href: "/add-project",
      icon: React.createElement(MyIcon, {
        localPath: "../../../add.svg",
        alt: "add icon",
      }),
    },
    {
      title: "Edit project",
      href: "/edit-project",
      icon: React.createElement(MyIcon, {
        localPath: "../../../edit.svg",
        alt: "edit icon",
      }),
    },
    {
      // Horizontal line (hr)
      isDivider: true,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: React.createElement(MyIcon, {
        localPath: "../../../profile.svg",
        alt: "profile icon",
      }),
    },
    {
      title: "Support via email",
      href: "/support",
      icon: React.createElement(MyIcon, {
        localPath: "../../../email.svg",
        alt: "email icon",
      }),
    },
  ],

  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn/ui",
  //   docs: "https://ui.shadcn.com",
  // },
}
