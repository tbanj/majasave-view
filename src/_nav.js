import { removeToken } from "./services/authservice.js";

function checkLogout() {
  removeToken();
  window.location = "/";
}

export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      name: "Quick Save",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: "My Interests",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      title: true,
      name: "Components",
      url: "/dashboard",
      wrapper: {
        element: "",
        attributes: {}
      }
    },

    {
      name: "Transactions",
      url: "/icon",
      icon: "icon-star",
      children: [
        {
          name: "View Transactions",
          url: "/dashboard",
          icon: "icon-star",
        },
      ]
    },

    {
      name: "Withdraw",
      url: "/withdraw",
      icon: "icon-speedometer",
    },
    {
      name: "Majasave Blog",
      url: "/majasave-blog",
      icon: "icon-speedometer",
    },
    {
      name: "My Save Points",
      url: "/dashboard",
      icon: "icon-speedometer",
      attributes: { disabled: true, },
    },
    {
      name: "Widgets",
      url: "/dashboard",
      icon: "icon-calculator",
    },

    {
      name: "Logout",
      url: "/",
      icon: "icon-calculator",
      attributes: { onClick: checkLogout },
    },


  ]
};


