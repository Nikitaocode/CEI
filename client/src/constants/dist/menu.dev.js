"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defaultValues = require("./defaultValues");

// import { UserRole } from "../helpers/authHelper"
var data = [{
  id: 'dashboards',
  icon: 'iconsminds-shop-4',
  label: 'menu.dashboards',
  to: "".concat(_defaultValues.adminRoot, "/dashboards"),
  // roles: [UserRole.Admin, UserRole.Editor],
  subs: [{
    icon: 'simple-icon-briefcase',
    label: 'menu.default',
    to: "".concat(_defaultValues.adminRoot, "/dashboards/") // roles: [UserRole.Admin],

  }, {
    icon: 'simple-icon-pie-chart',
    label: 'menu.analytics',
    to: "".concat(_defaultValues.adminRoot, "/dashboards/analytics") // roles: [UserRole.Admin],

  }, {
    icon: 'simple-icon-basket-loaded',
    label: 'menu.ecommerce',
    to: "".concat(_defaultValues.adminRoot, "/dashboards/ecommerce") // roles: [UserRole.Editor],

  }, {
    icon: 'simple-icon-doc',
    label: 'menu.content',
    to: "".concat(_defaultValues.adminRoot, "/dashboards/content") // roles: [UserRole.Editor],

  }]
}, {
  id: 'pages',
  icon: 'iconsminds-digital-drawing',
  label: 'menu.pages',
  to: "".concat(_defaultValues.adminRoot, "/pages"),
  subs: [{
    id: 'pages-authorization',
    label: 'menu.authorization',
    to: '/user',
    subs: [{
      icon: 'simple-icon-user-following',
      label: 'menu.login',
      to: '/user/login',
      newWindow: true
    }, {
      icon: 'simple-icon-user-follow',
      label: 'menu.register',
      to: '/user/register',
      newWindow: true
    }, {
      icon: 'simple-icon-user-following',
      label: 'menu.forgot-password',
      to: '/user/forgot-password',
      newWindow: true
    }, {
      icon: 'simple-icon-user-unfollow',
      label: 'menu.reset-password',
      to: '/user/reset-password',
      newWindow: true
    }]
  }, {
    id: 'pages-product',
    label: 'menu.product',
    to: "".concat(_defaultValues.adminRoot, "/pages/product"),
    subs: [{
      icon: 'simple-icon-credit-card',
      label: 'menu.data-list',
      to: "".concat(_defaultValues.adminRoot, "/pages/product/data-list")
    }, {
      icon: 'simple-icon-list',
      label: 'menu.thumb-list',
      to: "".concat(_defaultValues.adminRoot, "/pages/product/thumb-list")
    }, {
      icon: 'simple-icon-grid',
      label: 'menu.image-list',
      to: "".concat(_defaultValues.adminRoot, "/pages/product/image-list")
    }, {
      icon: 'simple-icon-picture',
      label: 'menu.details',
      to: "".concat(_defaultValues.adminRoot, "/pages/product/details")
    }, {
      icon: 'simple-icon-book-open',
      label: 'menu.details-alt',
      to: "".concat(_defaultValues.adminRoot, "/pages/product/details-alt")
    }]
  }, {
    id: 'pages-profile',
    label: 'menu.profile',
    to: "".concat(_defaultValues.adminRoot, "/pages/profile"),
    subs: [{
      icon: 'simple-icon-share',
      label: 'menu.social',
      to: "".concat(_defaultValues.adminRoot, "/pages/profile/social")
    }, {
      icon: 'simple-icon-link',
      label: 'menu.portfolio',
      to: "".concat(_defaultValues.adminRoot, "/pages/profile/portfolio")
    }]
  }, {
    id: 'pages-blog',
    label: 'menu.blog',
    to: "".concat(_defaultValues.adminRoot, "/pages/blog"),
    subs: [{
      icon: 'simple-icon-share',
      label: 'menu.blog-list',
      to: "".concat(_defaultValues.adminRoot, "/pages/blog/blog-list")
    }, {
      icon: 'simple-icon-link',
      label: 'menu.blog-detail',
      to: "".concat(_defaultValues.adminRoot, "/pages/blog/blog-detail")
    }]
  }, {
    id: 'pages-miscellaneous',
    label: 'menu.miscellaneous',
    to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous"),
    subs: [{
      icon: 'simple-icon-question',
      label: 'menu.faq',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/faq")
    }, {
      icon: 'simple-icon-graduation',
      label: 'menu.knowledge-base',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/knowledge-base")
    }, {
      icon: 'simple-icon-diamond',
      label: 'menu.prices',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/prices")
    }, {
      icon: 'simple-icon-magnifier',
      label: 'menu.search',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/search")
    }, {
      icon: 'simple-icon-envelope-open',
      label: 'menu.mailing',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/mailing")
    }, {
      icon: 'simple-icon-bag',
      label: 'menu.invoice',
      to: "".concat(_defaultValues.adminRoot, "/pages/miscellaneous/invoice")
    }, {
      icon: 'simple-icon-exclamation',
      label: 'menu.error',
      to: '/error',
      newWindow: true
    }]
  }]
}, {
  id: 'applications',
  icon: 'iconsminds-air-balloon-1',
  label: 'menu.applications',
  to: "".concat(_defaultValues.adminRoot, "/applications"),
  subs: [{
    icon: 'simple-icon-check',
    label: 'menu.todo',
    to: "".concat(_defaultValues.adminRoot, "/applications/todo")
  }, {
    icon: 'simple-icon-calculator',
    label: 'menu.survey',
    to: "".concat(_defaultValues.adminRoot, "/applications/survey")
  }, {
    icon: 'simple-icon-bubbles',
    label: 'menu.chat',
    to: "".concat(_defaultValues.adminRoot, "/applications/chat")
  }]
}, {
  id: 'ui',
  icon: 'iconsminds-pantone',
  label: 'menu.ui',
  to: "".concat(_defaultValues.adminRoot, "/ui"),
  subs: [{
    id: 'ui-forms',
    label: 'menu.forms',
    to: "".concat(_defaultValues.adminRoot, "/ui/forms"),
    subs: [{
      icon: 'simple-icon-notebook',
      label: 'menu.layouts',
      to: "".concat(_defaultValues.adminRoot, "/ui/forms/layouts")
    }, {
      icon: 'simple-icon-puzzle',
      label: 'menu.components',
      to: "".concat(_defaultValues.adminRoot, "/ui/forms/components")
    }, {
      icon: 'simple-icon-check',
      label: 'menu.validations',
      to: "".concat(_defaultValues.adminRoot, "/ui/forms/validations")
    }, {
      icon: 'simple-icon-magic-wand',
      label: 'menu.wizard',
      to: "".concat(_defaultValues.adminRoot, "/ui/forms/wizard")
    }]
  }, {
    id: 'ui-components',
    label: 'menu.components',
    to: "".concat(_defaultValues.adminRoot, "/ui/components"),
    subs: [{
      icon: 'simple-icon-bell',
      label: 'menu.alerts',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/alerts")
    }, {
      icon: 'simple-icon-badge',
      label: 'menu.badges',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/badges")
    }, {
      icon: 'simple-icon-control-play',
      label: 'menu.buttons',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/buttons")
    }, {
      icon: 'simple-icon-layers',
      label: 'menu.cards',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/cards")
    }, {
      icon: 'simple-icon-picture',
      label: 'menu.carousel',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/carousel")
    }, {
      icon: 'simple-icon-chart',
      label: 'menu.charts',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/charts")
    }, {
      icon: 'simple-icon-arrow-up',
      label: 'menu.collapse',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/collapse")
    }, {
      icon: 'simple-icon-arrow-down',
      label: 'menu.dropdowns',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/dropdowns")
    }, {
      icon: 'simple-icon-book-open',
      label: 'menu.editors',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/editors")
    }, {
      icon: 'simple-icon-star',
      label: 'menu.icons',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/icons")
    }, {
      icon: 'simple-icon-note',
      label: 'menu.input-groups',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/input-groups")
    }, {
      icon: 'simple-icon-screen-desktop',
      label: 'menu.jumbotron',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/jumbotron")
    }, {
      icon: 'simple-icon-map',
      label: 'menu.maps',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/maps")
    }, {
      icon: 'simple-icon-docs',
      label: 'menu.modal',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/modal")
    }, {
      icon: 'simple-icon-cursor',
      label: 'menu.navigation',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/navigation")
    }, {
      icon: 'simple-icon-pin',
      label: 'menu.popover-tooltip',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/popover-tooltip")
    }, {
      icon: 'simple-icon-shuffle',
      label: 'menu.sortable',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/sortable")
    }, {
      icon: 'simple-icon-grid',
      label: 'menu.tables',
      to: "".concat(_defaultValues.adminRoot, "/ui/components/tables")
    }]
  }]
}, {
  id: 'menu',
  icon: 'iconsminds-three-arrow-fork',
  label: 'menu.menu',
  to: "".concat(_defaultValues.adminRoot, "/menu"),
  subs: [{
    icon: 'simple-icon-logout',
    label: 'menu.types',
    to: "".concat(_defaultValues.adminRoot, "/menu/types")
  }, {
    icon: 'simple-icon-layers',
    label: 'menu.levels',
    to: "".concat(_defaultValues.adminRoot, "/menu/levels"),
    subs: [{
      icon: 'simple-icon-arrow-right',
      label: 'menu.third-level-1',
      to: "".concat(_defaultValues.adminRoot, "/menu/levels/third-level-1")
    }, {
      icon: 'simple-icon-arrow-right',
      label: 'menu.third-level-2',
      to: "".concat(_defaultValues.adminRoot, "/menu/levels/third-level-2")
    }, {
      icon: 'simple-icon-arrow-right',
      label: 'menu.third-level-3',
      to: "".concat(_defaultValues.adminRoot, "/menu/levels/third-level-3")
    }]
  }]
}, {
  id: 'blankpage',
  icon: 'iconsminds-bucket',
  label: 'menu.blank-page',
  to: "".concat(_defaultValues.adminRoot, "/blank-page")
}, {
  id: 'docs',
  icon: 'iconsminds-library',
  label: 'menu.docs',
  to: 'https://gogo-react-docs.coloredstrategies.com/',
  newWindow: true
}];
var _default = data;
exports["default"] = _default;