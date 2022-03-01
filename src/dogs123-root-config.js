import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@dogs123/dogs-buy-tools",
  app: () => System.import("@dogs123/dogs-buy-tools"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@dogs123/dogs-image",
  app: () => System.import("@dogs123/dogs-image"),
  activeWhen: ["/"]
});

registerApplication({
  name: "dogs-header",
  app: () => System.import("dogs-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "dogs-footer",
  app: () => System.import("dogs-footer"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
