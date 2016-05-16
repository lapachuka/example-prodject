angular.module('templates-main', ['../public/app/layouts/auth/auth.tpl.html', '../public/app/layouts/logined/header/header.html', '../public/app/layouts/logined/menu/menu.directive.html', '../public/app/layouts/logined/page.html', '../public/app/layouts/logined/subMenu/sub-menu.directive.html', '../public/app/modules/chart/line/line-chart.tpl.html', '../public/app/modules/dashboard/dashboard.html', '../public/app/modules/exchange/exchange.tpl.html', '../public/app/modules/forgotPassword/forgot-password.tpl.html', '../public/app/modules/login/login.tpl.html', '../public/app/modules/options/accounts/list.html', '../public/app/modules/options/categories/list.html', '../public/app/modules/plan/plan.html', '../public/app/modules/register/register.tpl.html', '../public/app/modules/transactions/views/add.html', '../public/app/modules/transactions/views/edit.html', '../public/app/modules/transactions/views/list.html', '../public/app/modules/transactions/views/view.html', '../public/assets/bower_components/Chart.js/samples/bar.html', '../public/assets/bower_components/Chart.js/samples/doughnut.html', '../public/assets/bower_components/Chart.js/samples/line-customTooltips.html', '../public/assets/bower_components/Chart.js/samples/line.html', '../public/assets/bower_components/Chart.js/samples/pie-customTooltips.html', '../public/assets/bower_components/Chart.js/samples/pie.html', '../public/assets/bower_components/Chart.js/samples/polar-area.html', '../public/assets/bower_components/Chart.js/samples/radar.html', '../public/assets/bower_components/lodash/perf/index.html', '../public/assets/bower_components/lodash/test/backbone.html', '../public/assets/bower_components/lodash/test/fp.html', '../public/assets/bower_components/lodash/test/index.html', '../public/assets/bower_components/lodash/test/underscore.html', '../public/assets/bower_components/lodash/vendor/firebug-lite/skin/xp/firebug.html']);

angular.module("../public/app/layouts/auth/auth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/layouts/auth/auth.tpl.html",
    "<div class=\"site site_state_auth\">\n" +
    "    <div class=\"site__content\">\n" +
    "        <a class=\"site-logo\" ui-sref=\"login\">\n" +
    "            <span>Budget {{isLoading}}</span>\n" +
    "        </a>\n" +
    "        <ui-view></ui-view>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../public/app/layouts/logined/header/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/layouts/logined/header/header.html",
    "<div class=\"site__header site-header\" ng-controller=\"headerController as headerCtrl\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"site-header-layout\">\n" +
    "        <div class=\"site-header-layout__logo\">\n" +
    "          <a class=\"site-logo\" href=\"/#/\">\n" +
    "            <span>Budget</span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"site-header-layout__fit\"></div>\n" +
    "\n" +
    "        <div class=\"site-header-layout__user\">\n" +
    "            <a class=\"site-header__logout\" href=\"#\" ng-click=\"headerCtrl.logout()\">\n" +
    "              <md-icon class=\"material-icons material-icons_user\">exit_to_app</md-icon>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"site-header-layout__nav-toggle\">\n" +
    "\n" +
    "          <!--desktop fab-->\n" +
    "          <md-fab-speed-dial md-direction=\"left\" class=\"md-scale md-fab-top-right md-fab-top-right-nav\" ng-if=\"!headerCtrl.smallScreen\">\n" +
    "\n" +
    "            <md-fab-trigger>\n" +
    "              <md-button aria-label=\"menu\" class=\"md-raised md-warn md-button_override\">\n" +
    "                <md-tooltip md-direction=\"bottom\" md-visible=\"tooltipVisible\">додати транзакцію</md-tooltip>\n" +
    "                <md-icon aria-label=\"menu\">add</md-icon> Додати\n" +
    "              </md-button>\n" +
    "            </md-fab-trigger>\n" +
    "            <md-fab-actions>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Дохід\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showAddIncomeDialog()\">\n" +
    "                  <md-tooltip md-direction=\"bottom\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Дохід\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Дохід\">playlist_add</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Витрати\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showAddExpenseDialog()\">\n" +
    "                  <md-tooltip md-direction=\"bottom\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Витрати\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Витрати\">remove</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Переказ\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showExchangeDialog()\">\n" +
    "                  <md-tooltip md-direction=\"bottom\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Переказ\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Переказ\">redo</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "            </md-fab-actions>\n" +
    "          </md-fab-speed-dial>\n" +
    "\n" +
    "          <!--mobile fab-->\n" +
    "          <md-fab-speed-dial md-direction=\"up\" class=\"md-scale md-fab-bottom-right md-fab-bottom-right-nav\" ng-if=\"headerCtrl.smallScreen\">\n" +
    "\n" +
    "            <md-fab-trigger>\n" +
    "              <md-button aria-label=\"menu\" class=\"md-fab md-warn\">\n" +
    "                <md-tooltip md-direction=\"left\" md-visible=\"tooltipVisible\">додати транзакцію</md-tooltip>\n" +
    "                <md-icon aria-label=\"menu\">add</md-icon>\n" +
    "              </md-button>\n" +
    "            </md-fab-trigger>\n" +
    "            <md-fab-actions>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Дохід\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showAddIncomeDialog()\">\n" +
    "                  <md-tooltip md-direction=\"left\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Дохід\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Дохід\">playlist_add</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Витрати\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showAddExpenseDialog()\">\n" +
    "                  <md-tooltip md-direction=\"left\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Витрати\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Витрати\">remove</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <md-button aria-label=\"Переказ\" class=\"md-fab md-raised md-mini\"\n" +
    "                           ng-click=\"headerCtrl.showExchangeDialog()\">\n" +
    "                  <md-tooltip md-direction=\"left\"\n" +
    "                              md-autohide=\"false\">\n" +
    "                    Переказ\n" +
    "                  </md-tooltip>\n" +
    "                  <md-icon aria-label=\"Переказ\">redo</md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "            </md-fab-actions>\n" +
    "          </md-fab-speed-dial>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"site-header-layout__nav\">\n" +
    "          <main-menu></main-menu>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>");
}]);

angular.module("../public/app/layouts/logined/menu/menu.directive.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/layouts/logined/menu/menu.directive.html",
    "<nav class=\"site-nav\">\n" +
    "    <a class=\"site-nav__item site-nav__item_state_heading u-hidden-sm-gt\" href=\"\" ng-click=\"menuCtrl.toggleMenu()\">\n" +
    "        <span layout=\"row\" layout-align=\"none center\" ng-repeat=\"item in menuCtrl.menuList\" ng-if=\"menuCtrl.isActive(item.state)\">\n" +
    "            <span flex>{{item.name}}</span>\n" +
    "            <i class=\"material-icons material-icons_more-nav\">expand_more</i>\n" +
    "        </span>\n" +
    "    </a>\n" +
    "    <div class=\"site-nav__list\" ng-class=\"{'u-hidden-xs-lt': !menuCtrl.isOpen}\">\n" +
    "        <a class=\"site-nav__item\"\n" +
    "           ng-class=\"menuCtrl.getClass('{{item.state}}')\"\n" +
    "           ng-href='{{menuCtrl.getRouteSref(item)}}'\n" +
    "           ng-repeat=\"item in menuCtrl.menuList\"\n" +
    "        >{{item.name}}</a>\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("../public/app/layouts/logined/page.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/layouts/logined/page.html",
    "<div class=\"site\">\n" +
    "    <div ng-include=\"'../public/app/layouts/logined/header/header.html'\"></div>\n" +
    "    <div class=\"site__content\">\n" +
    "        <ui-view></ui-view>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../public/app/layouts/logined/subMenu/sub-menu.directive.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/layouts/logined/subMenu/sub-menu.directive.html",
    "<div class=\"site-filterbar\">\n" +
    "    <div class=\"container\">\n" +
    "        <div layout-gt-xs layout-align=\"space-between center\">\n" +
    "            <ul class=\"subnav\">\n" +
    "                <li class=\"subnav__item\" ng-repeat=\"subMenuItem in smCtrl.getSubMenuConfigByType().list\">\n" +
    "                    <a class=\"subnav__link\"\n" +
    "                       ng-href=\"#{{subMenuItem.url}}\"\n" +
    "                       ng-class=\"smCtrl.getClass('{{subMenuItem.url}}')\"\n" +
    "\n" +
    "                            >\n" +
    "                        <span class=\"\">{{subMenuItem.name}}</span>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../public/app/modules/chart/line/line-chart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/chart/line/line-chart.tpl.html",
    "<div layout=\"column\" ng-cloak>\n" +
    "    <md-toolbar class=\"md-info\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <h2 class=\"md-flex\">{{lineCtrl.title}}</h2>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content flex layout-padding layout-align=\"center center\">\n" +
    "        <div layout=\"row\">\n" +
    "            <md-input-container flex=\"50%\">\n" +
    "                <label>Year</label>\n" +
    "                <md-select ng-model=\"lineCtrl.currentYear\" ng-change=\"lineCtrl.getData()\">\n" +
    "                    <md-option ng-repeat=\"year in lineCtrl.years\" value=\"{{year.id}}\">\n" +
    "                        {{year.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-input-container flex=\"50%\">\n" +
    "                <label>Currency</label>\n" +
    "                <md-select ng-model=\"lineCtrl.currentCurrency\" ng-change=\"lineCtrl.getData()\">\n" +
    "                    <md-option ng-repeat=\"currency in lineCtrl.currencyCategory\" value=\"{{currency.id}}\">\n" +
    "                        {{currency.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <canvas class=\"chart chart-line\"\n" +
    "                chart-data=\"lineCtrl.chartData.data\"\n" +
    "                chart-series=\"lineCtrl.chartData.series\"\n" +
    "                chart-labels=\"lineCtrl.chartData.labels\"\n" +
    "                chart-colours=\"lineCtrl.chartData.colours\"\n" +
    "                height=\"80\"></canvas>\n" +
    "    </md-content>\n" +
    "</div>");
}]);

angular.module("../public/app/modules/dashboard/dashboard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/dashboard/dashboard.html",
    "<div class=\"container\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Рахунки:</h2>\n" +
    "\n" +
    "        <div layout=\"row\" layout-wrap>\n" +
    "            <div\n" +
    "                class=\"layout-column flex-xs flex-gt-xs-50\"\n" +
    "                flex-xs\n" +
    "                layout=\"column\"\n" +
    "                ng-repeat=\"account in dashboardCtrl.accounts\">\n" +
    "                <md-card>\n" +
    "                    <md-toolbar>\n" +
    "                        <div class=\"md-toolbar-tools\">\n" +
    "                            <h3 class=\"md-flex\">{{account.name}} : {{account.amount}}  {{account.currency_name}}</h3>\n" +
    "                        </div>\n" +
    "                    </md-toolbar>\n" +
    "                    <md-card ng-repeat=\"sub_account in account.sub_accounts\"\n" +
    "                             class=\"{{dashboardCtrl.currencyColor[sub_account.currency_name]}}\">\n" +
    "                        <md-card-title>\n" +
    "                            <md-card-title-text>\n" +
    "                                    <span\n" +
    "                                        class=\"md-headline\">{{sub_account.amount}} {{sub_account.currency_name}}</span>\n" +
    "                            </md-card-title-text>\n" +
    "                        </md-card-title>\n" +
    "                    </md-card>\n" +
    "                </md-card>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../public/app/modules/exchange/exchange.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/exchange/exchange.tpl.html",
    "<md-dialog ng-cloak>\n" +
    "    <md-toolbar class=\"md-warn\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <h2>{{exCtrl.title}}</h2>\n" +
    "            <span flex></span>\n" +
    "            <md-button class=\"md-icon-button\" ng-click=\"exCtrl.closeWindow()\">\n" +
    "                <md-icon aria-label=\"Close dialog\">close</md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-dialog-content>\n" +
    "        <div class=\"md-dialog-content\">\n" +
    "            <div layout-gt-xs=\"row\">\n" +
    "                <div flex-gt-xs=\"47\">\n" +
    "                    <md-toolbar class=\"md-accent u-margin-b\">\n" +
    "                        <h2 class=\"md-toolbar-tools\">\n" +
    "                            З\n" +
    "                        </h2>\n" +
    "                    </md-toolbar>\n" +
    "                    <md-content>\n" +
    "                        <div layout=\"row\">\n" +
    "                            <md-input-container flex>\n" +
    "\n" +
    "                                <label>Account</label>\n" +
    "                                <md-select ng-model=\"exCtrl.from.account_id\">\n" +
    "                                    <md-option ng-repeat=\"account in exCtrl.accountCategory\" value=\"{{account.id}}\">\n" +
    "                                        {{account.name}} ({{account.currency_name}})\n" +
    "                                    </md-option>\n" +
    "                                </md-select>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                        <div layout=\"row\">\n" +
    "                            <md-input-container flex=\"60\">\n" +
    "                                <label>Price</label>\n" +
    "                                <input ng-model=\"exCtrl.from.amount\" type=\"number\">\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </md-content>\n" +
    "                </div>\n" +
    "                <span flex-gt-xs=\"5\"></span>\n" +
    "                <div flex-gt-xs=\"47\">\n" +
    "                    <md-toolbar class=\"md-info u-margin-b\">\n" +
    "                        <h2 class=\"md-toolbar-tools\">\n" +
    "                            На\n" +
    "                        </h2>\n" +
    "                    </md-toolbar>\n" +
    "                    <md-content>\n" +
    "                        <div layout=\"row\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Account</label>\n" +
    "                                <md-select ng-model=\"exCtrl.to.account_id\">\n" +
    "                                    <md-option ng-repeat=\"account in exCtrl.accountCategory\" value=\"{{account.id}}\">\n" +
    "                                        {{account.name}} ({{account.currency_name}})\n" +
    "                                    </md-option>\n" +
    "                                </md-select>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                        <div layout=\"row\">\n" +
    "                            <md-input-container flex=\"60\">\n" +
    "                                <label>Price</label>\n" +
    "                                <input ng-model=\"exCtrl.to.amount\" type=\"number\">\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </md-content>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-dialog-content>\n" +
    "    <md-dialog-actions layout=\"row\">\n" +
    "        <md-button ng-click=\"exCtrl.closeWindow()\">\n" +
    "            Відмінити\n" +
    "        </md-button>\n" +
    "        <md-button class=\"md-primary md-raised u-margin-r-l\" ng-click=\"exCtrl.change()\">\n" +
    "            Перевести\n" +
    "        </md-button>\n" +
    "    </md-dialog-actions>\n" +
    "\n" +
    "</md-dialog>");
}]);

angular.module("../public/app/modules/forgotPassword/forgot-password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/forgotPassword/forgot-password.tpl.html",
    "<div class=\"auth-block\">\n" +
    "    <h3>Forgot your password?</h3>\n" +
    "    <form ng-submit=\"forgotCtrl.sendPassword()\" name=\"forgotPasswordForm\" method=\"post\" novalidate layout=\"column\">\n" +
    "        <md-input-container class=\"md-block\" flex=\"100\">\n" +
    "            <label>Email address</label>\n" +
    "            <input name=\"emailInput\" type=\"email\" ng-model=\"forgotCtrl.formData.email\" required>\n" +
    "\n" +
    "            <div ng-messages=\"forgotPasswordForm.emailInput.$error\" role=\"alert\">\n" +
    "                <div ng-message=\"required\">This is required</div>\n" +
    "                <div ng-message=\"email\">Email is wrong</div>\n" +
    "            </div>\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <md-button class=\"md-raised md-primary md-button_override\" ng-disabled=\"forgotPasswordForm.$invalid\"\n" +
    "                   aria-label=\"Send\" type=\"submit\">Send\n" +
    "        </md-button>\n" +
    "\n" +
    "        <p class=\"u-text-center u-margin-b-n\">\n" +
    "            <a ui-sref=\"login\">\n" +
    "                <small>Повернутись на логін сторінку</small>\n" +
    "            </a>\n" +
    "        </p>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/modules/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/login/login.tpl.html",
    "<div class=\"auth-block\">\n" +
    "    <form name=\"loginForm\" novalidate layout=\"column\" ng-submit=\"loginCtrl.signIn()\">\n" +
    "        <md-input-container class=\"md-block\" flex=\"100\">\n" +
    "            <label>Email</label>\n" +
    "            <input type=\"email\" ng-model=\"loginCtrl.user.email\" required name=\"loginEmail\">\n" +
    "            <div ng-messages=\"loginForm.loginEmail.$error\" role=\"alert\">\n" +
    "                <div ng-message=\"required\">This is required</div>\n" +
    "                <div ng-message=\"email\">Email is wrong</div>\n" +
    "            </div>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container flex=\"100\" class=\"u-margin-t-n\">\n" +
    "            <label>Password</label>\n" +
    "            <input type=\"password\" ng-model=\"loginCtrl.user.password\" required name=\"loginPassword\" ng-minlength=\"3\">\n" +
    "            <div ng-messages=\"loginForm.loginPassword.$error\" role=\"alert\">\n" +
    "                <div ng-message=\"required\">This is required</div>\n" +
    "                <div ng-message=\"minlength\">Password should have 3 symbols at least</div>\n" +
    "            </div>\n" +
    "        </md-input-container>\n" +
    "        <md-button ng-disabled=\"loginForm.$invalid\" class=\"md-raised md-warn md-button_override\" type=\"submit\">Log in\n" +
    "        </md-button>\n" +
    "        <md-button class=\"md-raised md-primary md-button_override\" href=\"/user/auth/facebook\">Facebook</md-button>\n" +
    "        <p class=\"u-text-center u-margin-b-n\">\n" +
    "            <a ui-sref=\"forgot\">\n" +
    "                <small>Forgot password?</small>\n" +
    "            </a>\n" +
    "        </p>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<p>\n" +
    "    Don't have an account?\n" +
    "    <a ui-sref=\"register\">Реєстрація</a>\n" +
    "</p>\n" +
    "");
}]);

angular.module("../public/app/modules/options/accounts/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/options/accounts/list.html",
    "<sub-menu type=\"options\"></sub-menu>\n" +
    "<div class=\"container\">\n" +
    "    <form class=\"account-form account-form_in_container\" novalidate name=\"account\">\n" +
    "        <div class=\"account-form__input\">\n" +
    "            <md-input-container class=\"md-block u-margin-b-n\">\n" +
    "                <label>Назва рахунку</label>\n" +
    "                <input type=\"text\" ng-model=\"aCtrl.account.name\" required>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <div class=\"account-form__select\">\n" +
    "            <md-input-container>\n" +
    "                <label>Валюта</label>\n" +
    "                <md-select ng-model=\"aCtrl.account.currency_id\">\n" +
    "                    <md-option ng-repeat=\"currency in aCtrl.currencyList\" value=\"{{currency.id}}\" track by $index\">\n" +
    "                        {{currency.name}} ({{currency.country}})\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <div class=\"account-form__actions\">\n" +
    "            <md-button class=\"md-raised md-primary md-button_override\" ng-click=\"aCtrl.create()\"\n" +
    "                       ng-disabled=\"!aCtrl.isValid()\" ng-if=\"!aCtrl.editMode\">Додати\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-accent md-button_override \" ng-click=\"aCtrl.update()\"\n" +
    "                       ng-disabled=\"!aCtrl.account.name\" ng-if=\"aCtrl.editMode\" ng-disabled=\"!aCtrl.account.name\">\n" +
    "                Зберегти\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-warn md-button_override\" ng-if=\"aCtrl.editMode\"\n" +
    "                       ng-click=\"aCtrl.cancelEditMode()\">Відмінити\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <md-list ng-if=\"aCtrl.accounts.length\">\n" +
    "        <md-list-item ng-repeat=\"account in aCtrl.accounts track by $index\" class=\"md-list-item_account_list\">\n" +
    "            {{account.name}} - {{account.currency_name}}\n" +
    "            <div class=\"md-secondary\">\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"aCtrl.remove($index)\">\n" +
    "                    <md-icon class=\"material-icons\" aria-label=\"Delete\">&#xE92B;</md-icon>\n" +
    "                </md-button>\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"aCtrl.enableEditMode($index)\">\n" +
    "                    <md-icon class=\"material-icons\" aria-label=\"Edit\">&#xE3C9;</md-icon>\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "\n" +
    "            <md-divider ng-if=\"!$last\"></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/modules/options/categories/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/options/categories/list.html",
    "<sub-menu type=\"options\"></sub-menu>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <form class=\"account-form account-form_in_container\" novalidate name=\"category\">\n" +
    "        <div class=\"account-form__input\">\n" +
    "            <md-input-container class=\"md-block u-margin-b-n\">\n" +
    "                <label>Категорія</label>\n" +
    "                <input type=\"text\" ng-model=\"categoryCtrl.category.name\" required>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <div class=\"account-form__select\">\n" +
    "            <md-input-container>\n" +
    "                <label>Головна категорія</label>\n" +
    "                <md-select ng-model=\"categoryCtrl.category.parent_id\">\n" +
    "                    <md-option value=\"\">-</md-option>\n" +
    "                    <md-option ng-repeat=\"category in categoryCtrl.categories\" value=\"{{category.id}}\">\n" +
    "                        {{category.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <div class=\"account-form__actions\">\n" +
    "            <md-button class=\"md-raised md-primary md-button_override\" ng-click=\"categoryCtrl.create()\"\n" +
    "                       ng-disabled=\"!categoryCtrl.category.name\" ng-if=\"!categoryCtrl.editMode\">Додати\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-accent md-button_override \" ng-click=\"categoryCtrl.update()\"\n" +
    "                       ng-disabled=\"!categoryCtrl.category.name\" ng-if=\"categoryCtrl.editMode\" ng-disabled=\"!categoryCtrl.category.name\">\n" +
    "                Зберегти\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-warn md-button_override\" ng-if=\"categoryCtrl.editMode\"\n" +
    "                       ng-click=\"categoryCtrl.cancelEditMode()\">Відмінити\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <ul class=\"list\" ng-if=\"categoryCtrl.categories && categoryCtrl.categories.length > 0\">\n" +
    "        <li class=\"list__item\"  ng-repeat=\"category in categoryCtrl.categories track by $index\">\n" +
    "            <div class=\"list-item\">\n" +
    "                <span class=\"list-item__body\">{{category.name}}</span>\n" +
    "                    <span>\n" +
    "                        <md-button class=\"md-icon-button\" ng-click=\"categoryCtrl.showConfirmDeleteWindow($index)\">\n" +
    "                            <md-icon class=\"material-icons\"  aria-label=\"Delete\">&#xE92B;</md-icon>\n" +
    "                        </md-button>\n" +
    "                        <md-button class=\"md-icon-button\" ng-click=\"categoryCtrl.enableEditMode($index)\">\n" +
    "                            <md-icon class=\"material-icons\" aria-label=\"Edit\">&#xE3C9;</md-icon>\n" +
    "                        </md-button>\n" +
    "                    </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <ul class=\"list list_nested\" ng-if=\"category.sub_categories\">\n" +
    "                <li class=\"list__item\" ng-repeat=\"subCat in category.sub_categories track by subCat.id\">\n" +
    "                    <div class=\"list-item\">\n" +
    "                        <span class=\"list-item__body\">{{subCat.name}}</span>\n" +
    "                            <span>\n" +
    "                                <md-button class=\"md-icon-button\" ng-click=\"categoryCtrl.showConfirmDeleteWindow($parent.$index, $index)\">\n" +
    "                                    <md-icon class=\"material-icons\"  aria-label=\"Delete\">&#xE92B;</md-icon>\n" +
    "                                </md-button>\n" +
    "                                <md-button class=\"md-icon-button\" ng-click=\"categoryCtrl.enableEditMode($parent.$index, $index)\">\n" +
    "                                    <md-icon class=\"material-icons\" aria-label=\"Edit\">&#xE3C9;</md-icon>\n" +
    "                                </md-button>\n" +
    "                            </span>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div ng-if=\"!categoryCtrl.categories || categoryCtrl.categories.length === 0\">\n" +
    "        Не створено жодної категорії для прибутків\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/modules/plan/plan.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/plan/plan.html",
    "<sub-menu type=\"plan\"></sub-menu>\n" +
    "<div class=\"container plan-page\">\n" +
    "\n" +
    "    <div class=\"content\">\n" +
    "        <div layout=\"row\">\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Валюта</label>\n" +
    "                <md-select ng-model=\"pCtrl.currentCurrency\" ng-change=\"pCtrl.switchPlanCurrency()\">\n" +
    "                    <md-option ng-repeat=\"currency in pCtrl.currencyList\" value=\"{{currency.id}}\" track by $index\n" +
    "                    \">\n" +
    "                    {{currency.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Year</label>\n" +
    "                <md-select ng-model=\"pCtrl.filterDate.year\" ng-change=\"pCtrl.getList()\">\n" +
    "                    <md-option ng-repeat=\"year in pCtrl.years\" value=\"{{year.id}}\">\n" +
    "                        {{year.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Month</label>\n" +
    "                <md-select ng-model=\"pCtrl.filterDate.month\" ng-change=\"pCtrl.getList()\">\n" +
    "                    <md-option ng-repeat=\"month in pCtrl.months\" value=\"{{month.id}}\">\n" +
    "                        {{month.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "\n" +
    "        <form name=\"plan\" novalidate>\n" +
    "            <table class=\"responsive-table\">\n" +
    "                <thead>\n" +
    "                <th>Категорія</th>\n" +
    "                <th>План</th>\n" +
    "                <th>Дійсно</th>\n" +
    "                <th>Різниця</th>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"item in pCtrl.planList track by $index\">\n" +
    "                    <ng-form name=\"planCategory\">\n" +
    "                        <td>{{item.name}}</td>\n" +
    "                        <td ng-if=\"!pCtrl.isEditMode\">{{item.amount}}</td>\n" +
    "                        <td ng-if=\"pCtrl.isEditMode\"><input type=\"number\" ng-model=\"item.editAmount\"></td>\n" +
    "                        <td>{{item.real_amount || 0}}</td>\n" +
    "                        <td>{{item.real}}</td>\n" +
    "                    </ng-form>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"account-form__actions\" ng-if=\"pCtrl.planList.length\">\n" +
    "        <md-button\n" +
    "                class=\"md-raised md-primary md-button_override\"\n" +
    "                ng-show=\"!pCtrl.isEditMode\"\n" +
    "                ng-click=\"pCtrl.enableEditMode()\"\n" +
    "                >\n" +
    "            Редагувати\n" +
    "        </md-button>\n" +
    "        <md-button\n" +
    "                class=\"md-raised md-primary md-button_override\"\n" +
    "                ng-show=\"pCtrl.isEditMode\"\n" +
    "                ng-click=\"pCtrl.update()\"\n" +
    "                >\n" +
    "            Зберегти\n" +
    "        </md-button>\n" +
    "        <md-button\n" +
    "                class=\"md-raised md-warn md-button_override\"\n" +
    "                ng-show=\"pCtrl.isEditMode\"\n" +
    "                ng-click=\"pCtrl.disableEditMode()\"\n" +
    "                >\n" +
    "            Відмінна\n" +
    "        </md-button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!pCtrl.planList.length\">\n" +
    "        Добавте будь ласка категорії\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../public/app/modules/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/register/register.tpl.html",
    "<div class=\"auth-block\">\n" +
    "    <form method=\"post\" ng-submit=\"regCtrl.signUp()\" novalidate layout=\"column\" name=\"registerForm\">\n" +
    "        <md-input-container class=\"md-block u-margin-b-n\" flex=\"100\">\n" +
    "            <label>Email</label>\n" +
    "            <input type=\"email\" ng-model=\"regCtrl.user.email\" required>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container class=\"md-block u-margin-b-n\" flex=\"100\">\n" +
    "            <label>Password</label>\n" +
    "            <input type=\"password\" ng-model=\"regCtrl.user.password\" required>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container class=\"md-block\" flex=\"100\">\n" +
    "            <label>Repeat password</label>\n" +
    "            <input type=\"password\" ng-model=\"regCtrl.user.rePassword\" required>\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <md-button class=\"md-raised md-primary md-button_override\" ng-disabled=\"registerForm.$invalid\" type=\"submit\">\n" +
    "            Зареєструватись\n" +
    "        </md-button>\n" +
    "    </form>\n" +
    "    <p class=\"u-text-center u-margin-b-n\">\n" +
    "        <a ui-sref=\"login\">\n" +
    "            <small>Повернутись на логін сторінку</small>\n" +
    "        </a>\n" +
    "    </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/modules/transactions/views/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/transactions/views/add.html",
    "<md-dialog aria-label=\"Add transaction\" ng-cloak>\n" +
    "    <form name=\"myForm\">\n" +
    "    <md-toolbar  ng-class=\"{'md-accent': addTCtrl.type == 'transaction', 'md-warn': addTCtrl.type == 'expenses', 'md-info': addTCtrl.type == 'general'}\" class=\"md-accent\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <h2>{{addTCtrl.title}}</h2>\n" +
    "            <span flex></span>\n" +
    "            <md-button class=\"md-icon-button\" ng-click=\"cancel()\">\n" +
    "                <md-icon aria-label=\"Close dialog\">close</md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-dialog-content>\n" +
    "        <div class=\"md-dialog-content\">\n" +
    "            <p class=\"error\" ng-if=\"!addTCtrl.isValid()\">* Будь ласка додайте спочатку всі потірбні категорії</p>\n" +
    "            <div layout-gt-xs=\"row\" layout-xs=\"column\" class=\"md-inline-form\">\n" +
    "                <md-input-container flex-gt-xs=\"40\">\n" +
    "                    <label>Категорія</label>\n" +
    "                    <md-select ng-model=\"addTCtrl.transaction.category_id\">\n" +
    "                        <md-option ng-repeat=\"category in addTCtrl.categories\" ng-class='{\"is-child\":category.child}' value=\"{{category.id}}\">\n" +
    "                            {{category.name}}\n" +
    "                        </md-option>\n" +
    "                    </md-select>\n" +
    "\n" +
    "                </md-input-container>\n" +
    "                <md-datepicker ng-model=\"addTCtrl.transaction.date\"></md-datepicker>\n" +
    "            </div>\n" +
    "            <div layout-gt-xs=\"row\" layout-xs=\"column\">\n" +
    "                <md-input-container flex-gt-xs=\"100\">\n" +
    "                    <label>Сума</label>\n" +
    "                    <input ng-model=\"addTCtrl.transaction.amount\" type=\"number\">\n" +
    "                </md-input-container>\n" +
    "            </div>\n" +
    "            <div layout=\"row\">\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Опис</label>\n" +
    "                    <input ng-model=\"addTCtrl.transaction.description\" type=\"text\">\n" +
    "                </md-input-container>\n" +
    "            </div>\n" +
    "            <div layout=\"row\">\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Рахунок</label>\n" +
    "                    <md-select ng-model=\"addTCtrl.transaction.account_id\">\n" +
    "                        <md-option ng-repeat=\"account in addTCtrl.accountCategory\" value=\"{{account.id}}\">\n" +
    "                            {{account.name}} - {{account.currency_name}}\n" +
    "                        </md-option>\n" +
    "                    </md-select>\n" +
    "                </md-input-container>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-dialog-content>\n" +
    "    <md-dialog-actions layout=\"row\">\n" +
    "        <md-button ng-click=\"cancel()\">\n" +
    "            Відмінити\n" +
    "        </md-button>\n" +
    "        <md-button class=\"md-primary md-raised u-margin-r-l\" layout-align=\"center end\" ng-click=\"ok()\" ng-if=\"addTCtrl.isValid()\">\n" +
    "            Додати\n" +
    "        </md-button>\n" +
    "    </md-dialog-actions>\n" +
    "    </form>\n" +
    "</md-dialog>");
}]);

angular.module("../public/app/modules/transactions/views/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/transactions/views/edit.html",
    "<md-dialog aria-label=\"Add transaction\" ng-cloak>\n" +
    "    <form name=\"myForm\">\n" +
    "        <md-toolbar  ng-class=\"{'md-accent': editTCtrl.type == 'transaction', 'md-warn': editTCtrl.type == 'expenses', 'md-info': editTCtrl.type == 'general'}\" class=\"md-accent\">\n" +
    "            <div class=\"md-toolbar-tools\">\n" +
    "                <h2>{{editTCtrl.title}}</h2>\n" +
    "                <span flex></span>\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"editTCtrl.cancel()\">\n" +
    "                    <md-icon aria-label=\"Close dialog\">close</md-icon>\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-dialog-content>\n" +
    "            <div class=\"md-dialog-content\">\n" +
    "                <p class=\"error\" ng-if=\"!editTCtrl.isValid()\">* Будь ласка додайте спочатку всі потірбні категорії</p>\n" +
    "                <div layout-gt-xs=\"row\" layout-xs=\"column\" class=\"md-inline-form\">\n" +
    "                    <md-input-container flex-gt-xs=\"40\">\n" +
    "                        <label>Категорія</label>\n" +
    "                        <md-select ng-model=\"editTCtrl.transaction.category_id\">\n" +
    "                            <md-option ng-repeat=\"category in editTCtrl.categories\" ng-class='{\"is-child\":category.child}' value=\"{{category.id}}\">\n" +
    "                                {{category.name}}\n" +
    "                            </md-option>\n" +
    "                        </md-select>\n" +
    "\n" +
    "                    </md-input-container>\n" +
    "                    <md-datepicker ng-model=\"editTCtrl.transaction.date\"></md-datepicker>\n" +
    "                </div>\n" +
    "                <div layout-gt-xs=\"row\" layout-xs=\"column\">\n" +
    "                    <md-input-container flex-gt-xs=\"100\">\n" +
    "                        <label>Сума</label>\n" +
    "                        <input ng-model=\"editTCtrl.transaction.amount\" type=\"number\">\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\">\n" +
    "                    <md-input-container flex=\"100\">\n" +
    "                        <label>Опис</label>\n" +
    "                        <input ng-model=\"editTCtrl.transaction.description\" type=\"text\">\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\">\n" +
    "                    <md-input-container flex=\"100\">\n" +
    "                        <label>Рахунок</label>\n" +
    "                        <md-select ng-model=\"editTCtrl.transaction.account_id\">\n" +
    "                            <md-option ng-repeat=\"account in editTCtrl.accountCategory\" value=\"{{account.id}}\">\n" +
    "                                {{account.name}} - {{account.currency_name}}\n" +
    "                            </md-option>\n" +
    "                        </md-select>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-dialog-content>\n" +
    "        <md-dialog-actions layout=\"row\">\n" +
    "            <md-button style=\"margin-right: 20px;\" ng-click=\"editTCtrl.cancel()\">\n" +
    "                Відмінити\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-primary\" layout-align=\"center end\" ng-click=\"editTCtrl.ok()\">\n" +
    "                Зберегти\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-primary\" layout-align=\"center end\" ng-click=\"editTCtrl.showDeleteWindow()\">\n" +
    "                Видалити\n" +
    "            </md-button>\n" +
    "        </md-dialog-actions>\n" +
    "    </form>\n" +
    "</md-dialog>\n" +
    "\n" +
    "");
}]);

angular.module("../public/app/modules/transactions/views/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/transactions/views/list.html",
    "<sub-menu type=\"transactions\"></sub-menu>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"content\">\n" +
    "        <div layout=\"row\">\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Filter</label>\n" +
    "                <input ng-model=\"tCtrl.searchName\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Year</label>\n" +
    "                <md-select ng-model=\"tCtrl.filterDate.year\" ng-change=\"tCtrl.getList()\">\n" +
    "                    <md-option ng-repeat=\"year in tCtrl.years\"  value=\"{{year.id}}\">\n" +
    "                        {{year.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-input-container flex=\"40\">\n" +
    "                <label>Month</label>\n" +
    "                <md-select ng-model=\"tCtrl.filterDate.month\"  ng-change=\"tCtrl.getList()\">\n" +
    "                    <md-option ng-repeat=\"month in tCtrl.months\" value=\"{{month.id}}\">\n" +
    "                        {{month.name}}\n" +
    "                    </md-option>\n" +
    "                </md-select>\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"(itemDate, values) in tCtrl.list| filterBy: ['category_name', 'account_name', 'description']: tCtrl.searchName| limitTo: tCtrl.limitTo| groupBy: 'date'\"\n" +
    "             class=\"transaction-group\">\n" +
    "            <div class=\"transaction-header\">\n" +
    "                {{itemDate | date : 'longDate'}}\n" +
    "            </div>\n" +
    "            <div class=\"transaction\"  ng-repeat=\"item in values\"  ng-dblclick=\"tCtrl.showEditWindow(item)\">\n" +
    "                <span class=\"transaction__val\"\n" +
    "                      ng-class=\"{\n" +
    "                            'u-text-info' : item.type == 'income',\n" +
    "                            'u-text-warning' : item.type == 'expenses'\n" +
    "                        }\">\n" +
    "                    <span ng-if=\"item.type == 'income'\"> + </span>\n" +
    "                    <span ng-if=\"item.type == 'expenses'\"> - </span>\n" +
    "                    {{item.amount}} {{item.currency_name}}\n" +
    "                </span>\n" +
    "                <span class=\"transaction__category\">{{item.category_name}}</span>\n" +
    "                <span class=\"transaction__desc\">{{item.description}}</span>\n" +
    "                <span\n" +
    "                        class=\"transaction__account \"\n" +
    "                        ng-class=\"{\n" +
    "                            'transaction__account_type_income' : item.type == 'income',\n" +
    "                            'transaction__account_type_expense' : item.type == 'expenses'\n" +
    "                        }\">{{item.account_name}}</span>\n" +
    "                <md-button class=\"md-icon-button btn-mobile-tran-edit\" ng-click=\"tCtrl.showEditWindow(item)\" hide-gt-sm>\n" +
    "                    <md-icon class=\"material-icons\" aria-label=\"Edit\">&#xE3C9;</md-icon>\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"u-margin-v u-text-center\">\n" +
    "            <md-button ng-click=\"tCtrl.showMore()\" ng-if=\"tCtrl.limitTo < tCtrl.list.length\">\n" +
    "                Show more\n" +
    "                <md-icon>keyboard_arrow_down</md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../public/app/modules/transactions/views/view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/transactions/views/view.html",
    "<md-dialog aria-label=\"Add transaction\" ng-cloak>\n" +
    "    <form name=\"myForm\">\n" +
    "        <md-toolbar  ng-class=\"{'md-accent': viewTCtrl.type == 'transaction', 'md-warn': viewTCtrl.type == 'expenses', 'md-info': viewTCtrl.type == 'general'}\" class=\"md-accent\">\n" +
    "            <div class=\"md-toolbar-tools\">\n" +
    "                <h2>{{viewTCtrl.title}}</h2>\n" +
    "                <span flex></span>\n" +
    "                <md-button class=\"md-icon-button\" ng-click=\"viewTCtrl.cancel()\">\n" +
    "                    <md-icon aria-label=\"Close dialog\">close</md-icon>\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-dialog-content>\n" +
    "            <div class=\"md-dialog-content\">\n" +
    "                <div layout-gt-xs=\"row\" layout-xs=\"column\" class=\"md-inline-form\">\n" +
    "                    <md-input-container flex-gt-xs=\"40\">\n" +
    "                        <md-input-contaner>\n" +
    "                            Обмін\n" +
    "                        </md-input-contaner>\n" +
    "\n" +
    "                    </md-input-container>\n" +
    "                    <md-datepicker ng-model=\"viewTCtrl.transaction.date\" disabled></md-datepicker>\n" +
    "                </div>\n" +
    "                <div layout-gt-xs=\"row\" layout-xs=\"column\">\n" +
    "                    <md-input-container flex-gt-xs=\"100\">\n" +
    "                        <label>Сума</label>\n" +
    "                        <input ng-model=\"viewTCtrl.transaction.amount\" disabled type=\"number\">\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\">\n" +
    "                    <md-input-container flex=\"100\">\n" +
    "                        <label>Опис</label>\n" +
    "                        <input ng-model=\"viewTCtrl.transaction.description\" disabled type=\"text\">\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\">\n" +
    "                    <md-input-container flex=\"100\">\n" +
    "                        <label>Рахунок</label>\n" +
    "                        <md-select ng-model=\"viewTCtrl.transaction.account_id\">\n" +
    "                            <md-option ng-repeat=\"account in viewTCtrl.accountCategory\" disabled value=\"{{account.id}}\">\n" +
    "                                {{account.name}} - {{account.currency_name}}\n" +
    "                            </md-option>\n" +
    "                        </md-select>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-dialog-content>\n" +
    "        <md-dialog-actions layout=\"row\">\n" +
    "            <md-button style=\"margin-right: 20px;\" ng-click=\"viewTCtrl.cancel()\">\n" +
    "                Відмінити\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-primary\" layout-align=\"center end\" ng-click=\"viewTCtrl.showDeleteWindow()\">\n" +
    "                Видалити\n" +
    "            </md-button>\n" +
    "        </md-dialog-actions>\n" +
    "    </form>\n" +
    "</md-dialog>\n" +
    "\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/bar.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Bar Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div style=\"width: 50%\">\n" +
    "			<canvas id=\"canvas\" height=\"450\" width=\"600\"></canvas>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};\n" +
    "\n" +
    "	var barChartData = {\n" +
    "		labels : [\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\"],\n" +
    "		datasets : [\n" +
    "			{\n" +
    "				fillColor : \"rgba(220,220,220,0.5)\",\n" +
    "				strokeColor : \"rgba(220,220,220,0.8)\",\n" +
    "				highlightFill: \"rgba(220,220,220,0.75)\",\n" +
    "				highlightStroke: \"rgba(220,220,220,1)\",\n" +
    "				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]\n" +
    "			},\n" +
    "			{\n" +
    "				fillColor : \"rgba(151,187,205,0.5)\",\n" +
    "				strokeColor : \"rgba(151,187,205,0.8)\",\n" +
    "				highlightFill : \"rgba(151,187,205,0.75)\",\n" +
    "				highlightStroke : \"rgba(151,187,205,1)\",\n" +
    "				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]\n" +
    "			}\n" +
    "		]\n" +
    "\n" +
    "	}\n" +
    "	window.onload = function(){\n" +
    "		var ctx = document.getElementById(\"canvas\").getContext(\"2d\");\n" +
    "		window.myBar = new Chart(ctx).Bar(barChartData, {\n" +
    "			responsive : true\n" +
    "		});\n" +
    "	}\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/doughnut.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/doughnut.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Doughnut Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "		<style>\n" +
    "			body{\n" +
    "				padding: 0;\n" +
    "				margin: 0;\n" +
    "			}\n" +
    "			#canvas-holder{\n" +
    "				width:30%;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"canvas-holder\">\n" +
    "			<canvas id=\"chart-area\" width=\"500\" height=\"500\"/>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "\n" +
    "		var doughnutData = [\n" +
    "				{\n" +
    "					value: 300,\n" +
    "					color:\"#F7464A\",\n" +
    "					highlight: \"#FF5A5E\",\n" +
    "					label: \"Red\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 50,\n" +
    "					color: \"#46BFBD\",\n" +
    "					highlight: \"#5AD3D1\",\n" +
    "					label: \"Green\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 100,\n" +
    "					color: \"#FDB45C\",\n" +
    "					highlight: \"#FFC870\",\n" +
    "					label: \"Yellow\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 40,\n" +
    "					color: \"#949FB1\",\n" +
    "					highlight: \"#A8B3C5\",\n" +
    "					label: \"Grey\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 120,\n" +
    "					color: \"#4D5360\",\n" +
    "					highlight: \"#616774\",\n" +
    "					label: \"Dark Grey\"\n" +
    "				}\n" +
    "\n" +
    "			];\n" +
    "\n" +
    "			window.onload = function(){\n" +
    "				var ctx = document.getElementById(\"chart-area\").getContext(\"2d\");\n" +
    "				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});\n" +
    "			};\n" +
    "\n" +
    "\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/line-customTooltips.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/line-customTooltips.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "\n" +
    "<head>\n" +
    "    <title>Line Chart with Custom Tooltips</title>\n" +
    "    <script src=\"../Chart.js\"></script>\n" +
    "    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>\n" +
    "\n" +
    "    <style>\n" +
    "    #canvas-holder1 {\n" +
    "        width: 300px;\n" +
    "        margin: 20px auto;\n" +
    "    }\n" +
    "    #canvas-holder2 {\n" +
    "        width: 50%;\n" +
    "        margin: 20px 25%;\n" +
    "    }\n" +
    "    #chartjs-tooltip {\n" +
    "        opacity: 1;\n" +
    "        position: absolute;\n" +
    "        background: rgba(0, 0, 0, .7);\n" +
    "        color: white;\n" +
    "        padding: 3px;\n" +
    "        border-radius: 3px;\n" +
    "        -webkit-transition: all .1s ease;\n" +
    "        transition: all .1s ease;\n" +
    "        pointer-events: none;\n" +
    "        -webkit-transform: translate(-50%, 0);\n" +
    "        transform: translate(-50%, 0);\n" +
    "    }\n" +
    "   	.chartjs-tooltip-key{\n" +
    "   		display:inline-block;\n" +
    "   		width:10px;\n" +
    "   		height:10px;\n" +
    "   	}\n" +
    "    </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "    <div id=\"canvas-holder1\">\n" +
    "        <canvas id=\"chart1\" width=\"300\" height=\"30\" />\n" +
    "    </div>\n" +
    "    <div id=\"canvas-holder2\">\n" +
    "        <canvas id=\"chart2\" width=\"450\" height=\"600\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"chartjs-tooltip\"></div>\n" +
    "\n" +
    "\n" +
    "    <script>\n" +
    "\n" +
    "    Chart.defaults.global.pointHitDetectionRadius = 1;\n" +
    "    Chart.defaults.global.customTooltips = function(tooltip) {\n" +
    "\n" +
    "        var tooltipEl = $('#chartjs-tooltip');\n" +
    "\n" +
    "        if (!tooltip) {\n" +
    "            tooltipEl.css({\n" +
    "                opacity: 0\n" +
    "            });\n" +
    "            return;\n" +
    "        }\n" +
    "\n" +
    "        tooltipEl.removeClass('above below');\n" +
    "        tooltipEl.addClass(tooltip.yAlign);\n" +
    "\n" +
    "        var innerHtml = '';\n" +
    "        for (var i = tooltip.labels.length - 1; i >= 0; i--) {\n" +
    "        	innerHtml += [\n" +
    "        		'<div class=\"chartjs-tooltip-section\">',\n" +
    "        		'	<span class=\"chartjs-tooltip-key\" style=\"background-color:' + tooltip.legendColors[i].fill + '\"></span>',\n" +
    "        		'	<span class=\"chartjs-tooltip-value\">' + tooltip.labels[i] + '</span>',\n" +
    "        		'</div>'\n" +
    "        	].join('');\n" +
    "        }\n" +
    "        tooltipEl.html(innerHtml);\n" +
    "\n" +
    "        tooltipEl.css({\n" +
    "            opacity: 1,\n" +
    "            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',\n" +
    "            top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',\n" +
    "            fontFamily: tooltip.fontFamily,\n" +
    "            fontSize: tooltip.fontSize,\n" +
    "            fontStyle: tooltip.fontStyle,\n" +
    "        });\n" +
    "    };\n" +
    "    var randomScalingFactor = function() {\n" +
    "        return Math.round(Math.random() * 100);\n" +
    "    };\n" +
    "    var lineChartData = {\n" +
    "        labels: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"],\n" +
    "        datasets: [{\n" +
    "            label: \"My First dataset\",\n" +
    "            fillColor: \"rgba(220,220,220,0.2)\",\n" +
    "            strokeColor: \"rgba(220,220,220,1)\",\n" +
    "            pointColor: \"rgba(220,220,220,1)\",\n" +
    "            pointStrokeColor: \"#fff\",\n" +
    "            pointHighlightFill: \"#fff\",\n" +
    "            pointHighlightStroke: \"rgba(220,220,220,1)\",\n" +
    "            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]\n" +
    "        }, {\n" +
    "            label: \"My Second dataset\",\n" +
    "            fillColor: \"rgba(151,187,205,0.2)\",\n" +
    "            strokeColor: \"rgba(151,187,205,1)\",\n" +
    "            pointColor: \"rgba(151,187,205,1)\",\n" +
    "            pointStrokeColor: \"#fff\",\n" +
    "            pointHighlightFill: \"#fff\",\n" +
    "            pointHighlightStroke: \"rgba(151,187,205,1)\",\n" +
    "            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]\n" +
    "        }]\n" +
    "    };\n" +
    "\n" +
    "    window.onload = function() {\n" +
    "        var ctx1 = document.getElementById(\"chart1\").getContext(\"2d\");\n" +
    "        window.myLine = new Chart(ctx1).Line(lineChartData, {\n" +
    "        	showScale: false,\n" +
    "        	pointDot : true,\n" +
    "            responsive: true\n" +
    "        });\n" +
    "\n" +
    "        var ctx2 = document.getElementById(\"chart2\").getContext(\"2d\");\n" +
    "        window.myLine = new Chart(ctx2).Line(lineChartData, {\n" +
    "            responsive: true\n" +
    "        });\n" +
    "    };\n" +
    "    </script>\n" +
    "</body>\n" +
    "\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/line.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/line.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Line Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div style=\"width:30%\">\n" +
    "			<div>\n" +
    "				<canvas id=\"canvas\" height=\"450\" width=\"600\"></canvas>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};\n" +
    "		var lineChartData = {\n" +
    "			labels : [\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\"],\n" +
    "			datasets : [\n" +
    "				{\n" +
    "					label: \"My First dataset\",\n" +
    "					fillColor : \"rgba(220,220,220,0.2)\",\n" +
    "					strokeColor : \"rgba(220,220,220,1)\",\n" +
    "					pointColor : \"rgba(220,220,220,1)\",\n" +
    "					pointStrokeColor : \"#fff\",\n" +
    "					pointHighlightFill : \"#fff\",\n" +
    "					pointHighlightStroke : \"rgba(220,220,220,1)\",\n" +
    "					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]\n" +
    "				},\n" +
    "				{\n" +
    "					label: \"My Second dataset\",\n" +
    "					fillColor : \"rgba(151,187,205,0.2)\",\n" +
    "					strokeColor : \"rgba(151,187,205,1)\",\n" +
    "					pointColor : \"rgba(151,187,205,1)\",\n" +
    "					pointStrokeColor : \"#fff\",\n" +
    "					pointHighlightFill : \"#fff\",\n" +
    "					pointHighlightStroke : \"rgba(151,187,205,1)\",\n" +
    "					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]\n" +
    "				}\n" +
    "			]\n" +
    "\n" +
    "		}\n" +
    "\n" +
    "	window.onload = function(){\n" +
    "		var ctx = document.getElementById(\"canvas\").getContext(\"2d\");\n" +
    "		window.myLine = new Chart(ctx).Line(lineChartData, {\n" +
    "			responsive: true\n" +
    "		});\n" +
    "	}\n" +
    "\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/pie-customTooltips.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/pie-customTooltips.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "\n" +
    "<head>\n" +
    "    <title>Pie Chart with Custom Tooltips</title>\n" +
    "    <script src=\"../Chart.js\"></script>\n" +
    "    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>\n" +
    "\n" +
    "    <style>\n" +
    "    #canvas-holder {\n" +
    "        width: 100%;\n" +
    "        margin-top: 50px;\n" +
    "        text-align: center;\n" +
    "    }\n" +
    "    #chartjs-tooltip {\n" +
    "        opacity: 1;\n" +
    "        position: absolute;\n" +
    "        background: rgba(0, 0, 0, .7);\n" +
    "        color: white;\n" +
    "        padding: 3px;\n" +
    "        border-radius: 3px;\n" +
    "        -webkit-transition: all .1s ease;\n" +
    "        transition: all .1s ease;\n" +
    "        pointer-events: none;\n" +
    "        -webkit-transform: translate(-50%, 0);\n" +
    "        transform: translate(-50%, 0);\n" +
    "    }\n" +
    "    #chartjs-tooltip.below {\n" +
    "        -webkit-transform: translate(-50%, 0);\n" +
    "        transform: translate(-50%, 0);\n" +
    "    }\n" +
    "    #chartjs-tooltip.below:before {\n" +
    "        border: solid;\n" +
    "        border-color: #111 transparent;\n" +
    "        border-color: rgba(0, 0, 0, .8) transparent;\n" +
    "        border-width: 0 8px 8px 8px;\n" +
    "        bottom: 1em;\n" +
    "        content: \"\";\n" +
    "        display: block;\n" +
    "        left: 50%;\n" +
    "        position: absolute;\n" +
    "        z-index: 99;\n" +
    "        -webkit-transform: translate(-50%, -100%);\n" +
    "        transform: translate(-50%, -100%);\n" +
    "    }\n" +
    "    #chartjs-tooltip.above {\n" +
    "        -webkit-transform: translate(-50%, -100%);\n" +
    "        transform: translate(-50%, -100%);\n" +
    "    }\n" +
    "    #chartjs-tooltip.above:before {\n" +
    "        border: solid;\n" +
    "        border-color: #111 transparent;\n" +
    "        border-color: rgba(0, 0, 0, .8) transparent;\n" +
    "        border-width: 8px 8px 0 8px;\n" +
    "        bottom: 1em;\n" +
    "        content: \"\";\n" +
    "        display: block;\n" +
    "        left: 50%;\n" +
    "        top: 100%;\n" +
    "        position: absolute;\n" +
    "        z-index: 99;\n" +
    "        -webkit-transform: translate(-50%, 0);\n" +
    "        transform: translate(-50%, 0);\n" +
    "    }\n" +
    "    </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "    <div id=\"canvas-holder\">\n" +
    "        <canvas id=\"chart-area1\" width=\"50\" height=\"50\" />\n" +
    "    </div>\n" +
    "    <div id=\"canvas-holder\">\n" +
    "        <canvas id=\"chart-area2\" width=\"300\" height=\"300\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"chartjs-tooltip\"></div>\n" +
    "\n" +
    "\n" +
    "    <script>\n" +
    "    Chart.defaults.global.customTooltips = function(tooltip) {\n" +
    "\n" +
    "    	// Tooltip Element\n" +
    "        var tooltipEl = $('#chartjs-tooltip');\n" +
    "\n" +
    "        // Hide if no tooltip\n" +
    "        if (!tooltip) {\n" +
    "            tooltipEl.css({\n" +
    "                opacity: 0\n" +
    "            });\n" +
    "            return;\n" +
    "        }\n" +
    "\n" +
    "        // Set caret Position\n" +
    "        tooltipEl.removeClass('above below');\n" +
    "        tooltipEl.addClass(tooltip.yAlign);\n" +
    "\n" +
    "        // Set Text\n" +
    "        tooltipEl.html(tooltip.text);\n" +
    "\n" +
    "        // Find Y Location on page\n" +
    "        var top;\n" +
    "        if (tooltip.yAlign == 'above') {\n" +
    "            top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;\n" +
    "        } else {\n" +
    "            top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;\n" +
    "        }\n" +
    "\n" +
    "        // Display, position, and set styles for font\n" +
    "        tooltipEl.css({\n" +
    "            opacity: 1,\n" +
    "            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',\n" +
    "            top: tooltip.chart.canvas.offsetTop + top + 'px',\n" +
    "            fontFamily: tooltip.fontFamily,\n" +
    "            fontSize: tooltip.fontSize,\n" +
    "            fontStyle: tooltip.fontStyle,\n" +
    "        });\n" +
    "    };\n" +
    "\n" +
    "    var pieData = [{\n" +
    "        value: 300,\n" +
    "        color: \"#F7464A\",\n" +
    "        highlight: \"#FF5A5E\",\n" +
    "        label: \"Red\"\n" +
    "    }, {\n" +
    "        value: 50,\n" +
    "        color: \"#46BFBD\",\n" +
    "        highlight: \"#5AD3D1\",\n" +
    "        label: \"Green\"\n" +
    "    }, {\n" +
    "        value: 100,\n" +
    "        color: \"#FDB45C\",\n" +
    "        highlight: \"#FFC870\",\n" +
    "        label: \"Yellow\"\n" +
    "    }, {\n" +
    "        value: 40,\n" +
    "        color: \"#949FB1\",\n" +
    "        highlight: \"#A8B3C5\",\n" +
    "        label: \"Grey\"\n" +
    "    }, {\n" +
    "        value: 120,\n" +
    "        color: \"#4D5360\",\n" +
    "        highlight: \"#616774\",\n" +
    "        label: \"Dark Grey\"\n" +
    "    }];\n" +
    "\n" +
    "    window.onload = function() {\n" +
    "        var ctx1 = document.getElementById(\"chart-area1\").getContext(\"2d\");\n" +
    "        window.myPie = new Chart(ctx1).Pie(pieData);\n" +
    "\n" +
    "        var ctx2 = document.getElementById(\"chart-area2\").getContext(\"2d\");\n" +
    "        window.myPie = new Chart(ctx2).Pie(pieData);\n" +
    "    };\n" +
    "    </script>\n" +
    "</body>\n" +
    "\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/pie.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/pie.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Pie Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"canvas-holder\">\n" +
    "			<canvas id=\"chart-area\" width=\"300\" height=\"300\"/>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "\n" +
    "		var pieData = [\n" +
    "				{\n" +
    "					value: 300,\n" +
    "					color:\"#F7464A\",\n" +
    "					highlight: \"#FF5A5E\",\n" +
    "					label: \"Red\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 50,\n" +
    "					color: \"#46BFBD\",\n" +
    "					highlight: \"#5AD3D1\",\n" +
    "					label: \"Green\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 100,\n" +
    "					color: \"#FDB45C\",\n" +
    "					highlight: \"#FFC870\",\n" +
    "					label: \"Yellow\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 40,\n" +
    "					color: \"#949FB1\",\n" +
    "					highlight: \"#A8B3C5\",\n" +
    "					label: \"Grey\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 120,\n" +
    "					color: \"#4D5360\",\n" +
    "					highlight: \"#616774\",\n" +
    "					label: \"Dark Grey\"\n" +
    "				}\n" +
    "\n" +
    "			];\n" +
    "\n" +
    "			window.onload = function(){\n" +
    "				var ctx = document.getElementById(\"chart-area\").getContext(\"2d\");\n" +
    "				window.myPie = new Chart(ctx).Pie(pieData);\n" +
    "			};\n" +
    "\n" +
    "\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/polar-area.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/polar-area.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Polar Area Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"canvas-holder\" style=\"width:30%\">\n" +
    "			<canvas id=\"chart-area\" width=\"300\" height=\"300\"/>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "\n" +
    "		var polarData = [\n" +
    "				{\n" +
    "					value: 300,\n" +
    "					color:\"#F7464A\",\n" +
    "					highlight: \"#FF5A5E\",\n" +
    "					label: \"Red\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 50,\n" +
    "					color: \"#46BFBD\",\n" +
    "					highlight: \"#5AD3D1\",\n" +
    "					label: \"Green\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 100,\n" +
    "					color: \"#FDB45C\",\n" +
    "					highlight: \"#FFC870\",\n" +
    "					label: \"Yellow\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 40,\n" +
    "					color: \"#949FB1\",\n" +
    "					highlight: \"#A8B3C5\",\n" +
    "					label: \"Grey\"\n" +
    "				},\n" +
    "				{\n" +
    "					value: 120,\n" +
    "					color: \"#4D5360\",\n" +
    "					highlight: \"#616774\",\n" +
    "					label: \"Dark Grey\"\n" +
    "				}\n" +
    "\n" +
    "			];\n" +
    "\n" +
    "			window.onload = function(){\n" +
    "				var ctx = document.getElementById(\"chart-area\").getContext(\"2d\");\n" +
    "				window.myPolarArea = new Chart(ctx).PolarArea(polarData, {\n" +
    "					responsive:true\n" +
    "				});\n" +
    "			};\n" +
    "\n" +
    "\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/Chart.js/samples/radar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/Chart.js/samples/radar.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Radar Chart</title>\n" +
    "		<script src=\"../Chart.js\"></script>\n" +
    "		<meta name = \"viewport\" content = \"initial-scale = 1, user-scalable = no\">\n" +
    "		<style>\n" +
    "			canvas{\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div style=\"width:30%\">\n" +
    "			<canvas id=\"canvas\" height=\"450\" width=\"450\"></canvas>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	<script>\n" +
    "	var radarChartData = {\n" +
    "		labels: [\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"],\n" +
    "		datasets: [\n" +
    "			{\n" +
    "				label: \"My First dataset\",\n" +
    "				fillColor: \"rgba(220,220,220,0.2)\",\n" +
    "				strokeColor: \"rgba(220,220,220,1)\",\n" +
    "				pointColor: \"rgba(220,220,220,1)\",\n" +
    "				pointStrokeColor: \"#fff\",\n" +
    "				pointHighlightFill: \"#fff\",\n" +
    "				pointHighlightStroke: \"rgba(220,220,220,1)\",\n" +
    "				data: [65,59,90,81,56,55,40]\n" +
    "			},\n" +
    "			{\n" +
    "				label: \"My Second dataset\",\n" +
    "				fillColor: \"rgba(151,187,205,0.2)\",\n" +
    "				strokeColor: \"rgba(151,187,205,1)\",\n" +
    "				pointColor: \"rgba(151,187,205,1)\",\n" +
    "				pointStrokeColor: \"#fff\",\n" +
    "				pointHighlightFill: \"#fff\",\n" +
    "				pointHighlightStroke: \"rgba(151,187,205,1)\",\n" +
    "				data: [28,48,40,19,96,27,100]\n" +
    "			}\n" +
    "		]\n" +
    "	};\n" +
    "\n" +
    "	window.onload = function(){\n" +
    "		window.myRadar = new Chart(document.getElementById(\"canvas\").getContext(\"2d\")).Radar(radarChartData, {\n" +
    "			responsive: true\n" +
    "		});\n" +
    "	}\n" +
    "\n" +
    "	</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/perf/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/perf/index.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>lodash Performance Suite</title>\n" +
    "    <style>\n" +
    "      html, body {\n" +
    "        margin: 0;\n" +
    "        padding: 0;\n" +
    "        height: 100%;\n" +
    "      }\n" +
    "      #FirebugUI {\n" +
    "        top: 2em;\n" +
    "      }\n" +
    "      #perf-toolbar {\n" +
    "        background-color: #EEE;\n" +
    "        color: #5E740B;\n" +
    "        font-family: \"Helvetica Neue Light\", \"HelveticaNeue-Light\", \"Helvetica Neue\", Calibri, Helvetica, Arial, sans-serif;\n" +
    "        font-size: small;\n" +
    "        padding: 0.5em 0 0.5em 2em;\n" +
    "        overflow: hidden;\n" +
    "      }\n" +
    "    </style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div id=\"perf-toolbar\"></div>\n" +
    "    <script src=\"../lodash.js\"></script>\n" +
    "    <script src=\"../node_modules/platform/platform.js\"></script>\n" +
    "    <script src=\"../node_modules/benchmark/benchmark.js\"></script>\n" +
    "    <script src=\"../vendor/firebug-lite/src/firebug-lite-debug.js\"></script>\n" +
    "    <script src=\"./asset/perf-ui.js\"></script>\n" +
    "    <script>\n" +
    "      document.write('<script src=\"' + ui.buildPath + '\"><\\/script>');\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      var lodash = _.noConflict();\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      document.write('<script src=\"' + ui.otherPath + '\"><\\/script>');\n" +
    "    </script>\n" +
    "    <script src=\"perf.js\"></script>\n" +
    "    <script>\n" +
    "      (function() {\n" +
    "        var measured,\n" +
    "            perfNow,\n" +
    "            begin = new Date;\n" +
    "\n" +
    "        function init() {\n" +
    "          var fbUI = document.getElementById('FirebugUI'),\n" +
    "              fbDoc = fbUI && (fbDoc = fbUI.contentWindow || fbUI.contentDocument).document || fbDoc,\n" +
    "              fbCommandLine = fbDoc && fbDoc.getElementById('fbCommandLine');\n" +
    "\n" +
    "          if (!fbCommandLine) {\n" +
    "            return setTimeout(init, 15);\n" +
    "          }\n" +
    "          fbUI.style.height = (\n" +
    "            Math.max(document.documentElement.clientHeight, document.body.clientHeight) -\n" +
    "            document.getElementById('perf-toolbar').clientHeight\n" +
    "          ) + 'px';\n" +
    "\n" +
    "          fbDoc.body.style.height = fbDoc.documentElement.style.height = '100%';\n" +
    "          setTimeout(run, 15);\n" +
    "        }\n" +
    "\n" +
    "        window.onload = init;\n" +
    "      }());\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/test/backbone.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/test/backbone.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Backbone Test Suite</title>\n" +
    "    <link rel=\"stylesheet\" href=\"../node_modules/qunitjs/qunit/qunit.css\">\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>\n" +
    "      // Avoid reporting tests to Sauce Labs when script errors occur.\n" +
    "      if (location.port == '9001') {\n" +
    "        window.onerror = function(message) {\n" +
    "          if (window.QUnit) {\n" +
    "            QUnit.config.done.length = 0;\n" +
    "          }\n" +
    "          global_test_results = { 'message': message };\n" +
    "        };\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script src=\"../node_modules/qunitjs/qunit/qunit.js\"></script>\n" +
    "    <script src=\"../node_modules/qunit-extras/qunit-extras.js\"></script>\n" +
    "    <script src=\"../vendor/json-js/json2.js\"></script>\n" +
    "    <script src=\"../node_modules/platform/platform.js\"></script>\n" +
    "    <script src=\"./asset/test-ui.js\"></script>\n" +
    "    <script src=\"../lodash.js\"></script>\n" +
    "    <script>\n" +
    "      QUnit.config.asyncRetries = 10;\n" +
    "      QUnit.config.hidepassed = true;\n" +
    "\n" +
    "      var mixinPrereqs = (function() {\n" +
    "        var aliasToReal = {\n" +
    "          'indexBy': 'keyBy',\n" +
    "          'invoke': 'invokeMap'\n" +
    "        };\n" +
    "\n" +
    "        var keyMap = {\n" +
    "          'rest': 'tail'\n" +
    "        };\n" +
    "\n" +
    "        var lodash = _.noConflict();\n" +
    "\n" +
    "        return function(_) {\n" +
    "          lodash.defaultsDeep(_, { 'templateSettings': lodash.templateSettings });\n" +
    "          lodash.mixin(_, lodash.pick(lodash, lodash.difference([\n" +
    "            'countBy',\n" +
    "            'debounce',\n" +
    "            'difference',\n" +
    "            'find',\n" +
    "            'findIndex',\n" +
    "            'findLastIndex',\n" +
    "            'groupBy',\n" +
    "            'includes',\n" +
    "            'invert',\n" +
    "            'invokeMap',\n" +
    "            'keyBy',\n" +
    "            'omit',\n" +
    "            'partition',\n" +
    "            'reduceRight',\n" +
    "            'reject',\n" +
    "            'sample',\n" +
    "            'without'\n" +
    "          ], lodash.functions(_))));\n" +
    "\n" +
    "          lodash.forOwn(keyMap, function(realName, otherName) {\n" +
    "            _[otherName] = lodash[realName];\n" +
    "            _.prototype[otherName] = lodash.prototype[realName];\n" +
    "          });\n" +
    "\n" +
    "          lodash.forOwn(aliasToReal, function(realName, alias) {\n" +
    "            _[alias] = _[realName];\n" +
    "            _.prototype[alias] = _.prototype[realName];\n" +
    "          });\n" +
    "        };\n" +
    "      }());\n" +
    "\n" +
    "      // Load prerequisite scripts.\n" +
    "      document.write(ui.urlParams.loader == 'none'\n" +
    "        ? '<script src=\"' + ui.buildPath + '\"><\\/script>'\n" +
    "        : '<script data-dojo-config=\"async:1\" src=\"' + ui.loaderPath + '\"><\\/script>'\n" +
    "      );\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      if (ui.urlParams.loader == 'none') {\n" +
    "        mixinPrereqs(_);\n" +
    "        document.write([\n" +
    "          '<script src=\"../node_modules/jquery/dist/jquery.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/backbone.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/setup/dom-setup.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/setup/environment.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/noconflict.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/events.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/model.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/collection.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/router.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/view.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/backbone/test/sync.js\"><\\/script>'\n" +
    "        ].join('\\n'));\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      (function() {\n" +
    "        if (window.curl) {\n" +
    "          curl.config({ 'apiName': 'require' });\n" +
    "        }\n" +
    "        if (!window.require) {\n" +
    "          return;\n" +
    "        }\n" +
    "        var reBasename = /[\\w.-]+$/,\n" +
    "            basePath = ('//' + location.host + location.pathname.replace(reBasename, '')).replace(/\\btest\\/$/, ''),\n" +
    "            modulePath = ui.buildPath.replace(/\\.js$/, ''),\n" +
    "            locationPath = modulePath.replace(reBasename, '').replace(/^\\/|\\/$/g, ''),\n" +
    "            moduleMain = modulePath.match(reBasename)[0],\n" +
    "            uid = +new Date;\n" +
    "\n" +
    "        function getConfig() {\n" +
    "          var result = {\n" +
    "            'baseUrl': './',\n" +
    "            'urlArgs': 't=' + uid++,\n" +
    "            'waitSeconds': 0,\n" +
    "            'paths': {\n" +
    "              'backbone': '../vendor/backbone/backbone',\n" +
    "              'jquery': '../node_modules/jquery/dist/jquery'\n" +
    "            },\n" +
    "            'packages': [{\n" +
    "              'name': 'test',\n" +
    "              'location': '../vendor/backbone/test',\n" +
    "              'config': {\n" +
    "                // Work around no global being exported.\n" +
    "                'exports': 'QUnit',\n" +
    "                'loader': 'curl/loader/legacy'\n" +
    "              }\n" +
    "            }]\n" +
    "          };\n" +
    "\n" +
    "          if (ui.isModularize) {\n" +
    "            result.packages.push({\n" +
    "              'name': 'underscore',\n" +
    "              'location': locationPath,\n" +
    "              'main': moduleMain\n" +
    "            });\n" +
    "          } else {\n" +
    "            result.paths.underscore = modulePath;\n" +
    "          }\n" +
    "          return result;\n" +
    "        }\n" +
    "\n" +
    "        QUnit.config.autostart = false;\n" +
    "\n" +
    "        require(getConfig(), ['underscore'], function(lodash) {\n" +
    "          mixinPrereqs(lodash);\n" +
    "          require(getConfig(), ['backbone'], function() {\n" +
    "            require(getConfig(), [\n" +
    "              'test/setup/dom-setup',\n" +
    "              'test/setup/environment',\n" +
    "              'test/noconflict',\n" +
    "              'test/events',\n" +
    "              'test/model',\n" +
    "              'test/collection',\n" +
    "              'test/router',\n" +
    "              'test/view',\n" +
    "              'test/sync'\n" +
    "            ], function() {\n" +
    "              QUnit.start();\n" +
    "            });\n" +
    "          });\n" +
    "        });\n" +
    "      }());\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/test/fp.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/test/fp.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>lodash-fp Test Suite</title>\n" +
    "    <link rel=\"stylesheet\" href=\"../node_modules/qunitjs/qunit/qunit.css\">\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>\n" +
    "      // Avoid reporting tests to Sauce Labs when script errors occur.\n" +
    "      if (location.port == '9001') {\n" +
    "        window.onerror = function(message) {\n" +
    "          if (window.QUnit) {\n" +
    "            QUnit.config.done.length = 0;\n" +
    "          }\n" +
    "          global_test_results = { 'message': message };\n" +
    "        };\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script src=\"../lodash.js\"></script>\n" +
    "    <script src=\"../dist/lodash.fp.js\"></script>\n" +
    "    <script src=\"../dist/mapping.fp.js\"></script>\n" +
    "    <script src=\"../node_modules/qunitjs/qunit/qunit.js\"></script>\n" +
    "    <script src=\"../node_modules/qunit-extras/qunit-extras.js\"></script>\n" +
    "    <script src=\"../node_modules/platform/platform.js\"></script>\n" +
    "    <script src=\"./test-fp.js\"></script>\n" +
    "    <div id=\"qunit\"></div>\n" +
    "    <script>\n" +
    "      // Set a more readable browser name.\n" +
    "      window.onload = function() {\n" +
    "        var timeoutId = setInterval(function() {\n" +
    "          var ua = document.getElementById('qunit-userAgent');\n" +
    "          if (ua) {\n" +
    "            ua.innerHTML = platform;\n" +
    "            clearInterval(timeoutId);\n" +
    "          }\n" +
    "        }, 16);\n" +
    "      };\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/test/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/test/index.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>lodash Test Suite</title>\n" +
    "    <link rel=\"stylesheet\" href=\"../node_modules/qunitjs/qunit/qunit.css\">\n" +
    "    <style>\n" +
    "      #exports, #module {\n" +
    "        display: none;\n" +
    "      }\n" +
    "    </style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>\n" +
    "      // Avoid reporting tests to Sauce Labs when script errors occur.\n" +
    "      if (location.port == '9001') {\n" +
    "        window.onerror = function(message) {\n" +
    "          if (window.QUnit) {\n" +
    "            QUnit.config.done.length = 0;\n" +
    "          }\n" +
    "          global_test_results = { 'message': message };\n" +
    "        };\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script src=\"../node_modules/lodash/lodash.js\"></script>\n" +
    "    <script>var lodashStable = _.noConflict();</script>\n" +
    "    <script src=\"../node_modules/qunitjs/qunit/qunit.js\"></script>\n" +
    "    <script src=\"../node_modules/qunit-extras/qunit-extras.js\"></script>\n" +
    "    <script src=\"../node_modules/platform/platform.js\"></script>\n" +
    "    <script src=\"./asset/test-ui.js\"></script>\n" +
    "    <div id=\"qunit\"></div>\n" +
    "    <div id=\"exports\"></div>\n" +
    "    <div id=\"module\"></div>\n" +
    "    <script>\n" +
    "      function setProperty(object, key, value) {\n" +
    "        try {\n" +
    "          Object.defineProperty(object, key, {\n" +
    "            'configurable': true,\n" +
    "            'enumerable': false,\n" +
    "            'writable': true,\n" +
    "            'value': value\n" +
    "          });\n" +
    "        } catch (e) {\n" +
    "          object[key] = value;\n" +
    "        }\n" +
    "        return object;\n" +
    "      }\n" +
    "\n" +
    "      function addBizarroMethods() {\n" +
    "        var funcProto = Function.prototype,\n" +
    "            objectProto = Object.prototype;\n" +
    "\n" +
    "        var hasOwnProperty = objectProto.hasOwnProperty,\n" +
    "            fnToString = funcProto.toString,\n" +
    "            nativeString = fnToString.call(objectProto.toString),\n" +
    "            noop = function() {},\n" +
    "            propertyIsEnumerable = objectProto.propertyIsEnumerable,\n" +
    "            reToString = /toString/g;\n" +
    "\n" +
    "        function constant(value) {\n" +
    "          return function() {\n" +
    "            return value;\n" +
    "          };\n" +
    "        }\n" +
    "\n" +
    "        function createToString(funcName) {\n" +
    "          return constant(nativeString.replace(reToString, funcName));\n" +
    "        }\n" +
    "\n" +
    "        // Allow bypassing native checks.\n" +
    "        setProperty(funcProto, 'toString', (function() {\n" +
    "          function wrapper() {\n" +
    "            setProperty(funcProto, 'toString', fnToString);\n" +
    "            var result = hasOwnProperty.call(this, 'toString') ? this.toString() : fnToString.call(this);\n" +
    "            setProperty(funcProto, 'toString', wrapper);\n" +
    "            return result;\n" +
    "          }\n" +
    "          return wrapper;\n" +
    "        }()));\n" +
    "\n" +
    "        // Add prototype extensions.\n" +
    "        funcProto._method = noop;\n" +
    "\n" +
    "        // Set bad shims.\n" +
    "        setProperty(Object, '_create', Object.create);\n" +
    "        setProperty(Object, 'create', (function() {\n" +
    "          function object() {}\n" +
    "          return function(prototype) {\n" +
    "            if (prototype === Object(prototype)) {\n" +
    "              object.prototype = prototype;\n" +
    "              var result = new object;\n" +
    "              object.prototype = undefined;\n" +
    "            }\n" +
    "            return result || {};\n" +
    "          };\n" +
    "        }()));\n" +
    "\n" +
    "        setProperty(Object, '_getOwnPropertySymbols', Object.getOwnPropertySymbols);\n" +
    "        setProperty(Object, 'getOwnPropertySymbols', undefined);\n" +
    "\n" +
    "        setProperty(objectProto, '_propertyIsEnumerable', propertyIsEnumerable);\n" +
    "        setProperty(objectProto, 'propertyIsEnumerable', function(key) {\n" +
    "          return !(key == 'valueOf' && this && this.valueOf === 1) && _propertyIsEnumerable.call(this, key);\n" +
    "        });\n" +
    "\n" +
    "        setProperty(window, '_Map', window.Map);\n" +
    "        if (_Map) {\n" +
    "          setProperty(window, 'Map', (function(Map) {\n" +
    "            var count = 0;\n" +
    "            return function() {\n" +
    "              if (count++) {\n" +
    "                return new Map;\n" +
    "              }\n" +
    "              var result = {};\n" +
    "              setProperty(window, 'Map', Map);\n" +
    "              return result;\n" +
    "            };\n" +
    "          }(_Map)));\n" +
    "\n" +
    "          setProperty(Map, 'toString', createToString('Map'));\n" +
    "        }\n" +
    "        setProperty(window, '_Set', window.Set);\n" +
    "        setProperty(window, 'Set', noop);\n" +
    "\n" +
    "        setProperty(window, '_Symbol', window.Symbol);\n" +
    "        setProperty(window, 'Symbol', undefined);\n" +
    "\n" +
    "        setProperty(window, '_WeakMap', window.WeakMap);\n" +
    "        setProperty(window, 'WeakMap', noop);\n" +
    "\n" +
    "        // Fake `WinRTError`.\n" +
    "        setProperty(window, 'WinRTError', Error);\n" +
    "\n" +
    "        // Fake free variable `global`.\n" +
    "        setProperty(window, 'exports', window);\n" +
    "        setProperty(window, 'global', window);\n" +
    "        setProperty(window, 'module', {});\n" +
    "      }\n" +
    "\n" +
    "      function removeBizarroMethods() {\n" +
    "        var funcProto = Function.prototype,\n" +
    "            objectProto = Object.prototype;\n" +
    "\n" +
    "        setProperty(objectProto, 'propertyIsEnumerable', objectProto._propertyIsEnumerable);\n" +
    "\n" +
    "        if (Object._create) {\n" +
    "          Object.create = Object._create;\n" +
    "        } else {\n" +
    "          delete Object.create;\n" +
    "        }\n" +
    "        if (Object._getOwnPropertySymbols) {\n" +
    "          Object.getOwnPropertySymbols = Object._getOwnPropertySymbols;\n" +
    "        } else {\n" +
    "          delete Object.getOwnPropertySymbols;\n" +
    "        }\n" +
    "        if (_Map) {\n" +
    "          Map = _Map;\n" +
    "        } else {\n" +
    "          setProperty(window, 'Map', undefined);\n" +
    "        }\n" +
    "        if (_Set) {\n" +
    "          Set = _Set;\n" +
    "        } else {\n" +
    "          setProperty(window, 'Set', undefined);\n" +
    "        }\n" +
    "        if (_Symbol) {\n" +
    "          Symbol = _Symbol;\n" +
    "        }\n" +
    "        if (_WeakMap) {\n" +
    "          WeakMap = _WeakMap;\n" +
    "        } else {\n" +
    "          setProperty(window, 'WeakMap', undefined);\n" +
    "        }\n" +
    "        setProperty(window, '_Map', undefined);\n" +
    "        setProperty(window, '_Set', undefined);\n" +
    "        setProperty(window, '_Symbol', undefined);\n" +
    "        setProperty(window, '_WeakMap', undefined);\n" +
    "\n" +
    "        setProperty(window, 'WinRTError', undefined);\n" +
    "\n" +
    "        setProperty(window, 'exports', document.getElementById('exports'));\n" +
    "        setProperty(window, 'global', undefined);\n" +
    "        setProperty(window, 'module', document.getElementById('module'));\n" +
    "\n" +
    "        delete funcProto._method;\n" +
    "        delete Object._create;\n" +
    "        delete Object._getOwnPropertySymbols;\n" +
    "        delete objectProto._propertyIsEnumerable;\n" +
    "      }\n" +
    "\n" +
    "      // Load lodash to expose it to the bad extensions/shims.\n" +
    "      if (!ui.isModularize) {\n" +
    "        addBizarroMethods();\n" +
    "        document.write('<script src=\"' + ui.buildPath + '\"><\\/script>');\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      // Store lodash to test for bad extensions/shims.\n" +
    "      if (!ui.isModularize) {\n" +
    "        var lodashBizarro = window._;\n" +
    "        window._ = undefined;\n" +
    "        removeBizarroMethods();\n" +
    "      }\n" +
    "      // Load test scripts.\n" +
    "      document.write((ui.isForeign || ui.urlParams.loader == 'none')\n" +
    "        ? '<script src=\"' + ui.buildPath + '\"><\\/script><script src=\"test.js\"><\\/script>'\n" +
    "        : '<script data-dojo-config=\"async:1\" src=\"' + ui.loaderPath + '\"><\\/script>'\n" +
    "      );\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      var lodashModule,\n" +
    "          shimmedModule,\n" +
    "          underscoreModule;\n" +
    "\n" +
    "      (function() {\n" +
    "        if (window.curl) {\n" +
    "          curl.config({ 'apiName': 'require' });\n" +
    "        }\n" +
    "        if (ui.isForeign || !window.require) {\n" +
    "          return;\n" +
    "        }\n" +
    "        var reBasename = /[\\w.-]+$/,\n" +
    "            basePath = ('//' + location.host + location.pathname.replace(reBasename, '')).replace(/\\btest\\/$/, ''),\n" +
    "            modulePath = ui.buildPath.replace(/\\.js$/, ''),\n" +
    "            moduleMain = modulePath.match(reBasename)[0],\n" +
    "            locationPath = modulePath.replace(reBasename, '').replace(/^\\/|\\/$/g, ''),\n" +
    "            shimmedLocationPath = './abc/../' + locationPath,\n" +
    "            underscoreLocationPath = './xyz/../' + locationPath,\n" +
    "            uid = +new Date;\n" +
    "\n" +
    "        function getConfig() {\n" +
    "          var result = {\n" +
    "            'baseUrl': './',\n" +
    "            'urlArgs': 't=' + uid++,\n" +
    "            'waitSeconds': 0,\n" +
    "            'paths': {},\n" +
    "            'packages': [{\n" +
    "              'name': 'test',\n" +
    "              'location': basePath + 'test',\n" +
    "              'main': 'test',\n" +
    "              'config': {\n" +
    "                // Work around no global being exported.\n" +
    "                'exports': 'QUnit',\n" +
    "                'loader': 'curl/loader/legacy'\n" +
    "              }\n" +
    "            }],\n" +
    "            'shim': {\n" +
    "              'shimmed': {\n" +
    "                'exports': '_'\n" +
    "              }\n" +
    "            }\n" +
    "          };\n" +
    "\n" +
    "          if (ui.isModularize) {\n" +
    "            result.packages.push({\n" +
    "              'name': 'lodash',\n" +
    "              'location': locationPath,\n" +
    "              'main': moduleMain\n" +
    "            }, {\n" +
    "              'name': 'shimmed',\n" +
    "              'location': shimmedLocationPath,\n" +
    "              'main': moduleMain\n" +
    "            }, {\n" +
    "              'name': 'underscore',\n" +
    "              'location': underscoreLocationPath,\n" +
    "              'main': moduleMain\n" +
    "            });\n" +
    "          } else {\n" +
    "            result.paths.lodash = modulePath;\n" +
    "            result.paths.shimmed = shimmedLocationPath + '/' + moduleMain;\n" +
    "            result.paths.underscore = underscoreLocationPath + '/' + moduleMain;\n" +
    "          }\n" +
    "          return result;\n" +
    "        }\n" +
    "\n" +
    "        function loadTests() {\n" +
    "          require(getConfig(), ['test'], function() {\n" +
    "            QUnit.start();\n" +
    "          });\n" +
    "        }\n" +
    "\n" +
    "        function loadModulesAndTests() {\n" +
    "          require(getConfig(), ['lodash', 'shimmed', 'underscore'], function(lodash, shimmed, underscore) {\n" +
    "            lodashModule = lodash;\n" +
    "            lodashModule.moduleName = 'lodash';\n" +
    "\n" +
    "            if (shimmed) {\n" +
    "              shimmedModule = shimmed.result(shimmed, 'noConflict') || shimmed;\n" +
    "              shimmedModule.moduleName = 'shimmed';\n" +
    "            }\n" +
    "            if (underscore) {\n" +
    "              underscoreModule = underscore.result(underscore, 'noConflict') || underscore;\n" +
    "              underscoreModule.moduleName = 'underscore';\n" +
    "            }\n" +
    "            window._ = lodash;\n" +
    "\n" +
    "            if (ui.isModularize) {\n" +
    "              require(getConfig(), [\n" +
    "                'lodash/_baseEach',\n" +
    "                'lodash/_isIndex',\n" +
    "                'lodash/_isIterateeCall'\n" +
    "              ], function(baseEach, isIndex, isIterateeCall) {\n" +
    "                lodash._baseEach = baseEach;\n" +
    "                lodash._isIndex = isIndex;\n" +
    "                lodash._isIterateeCall = isIterateeCall;\n" +
    "                loadTests();\n" +
    "              });\n" +
    "            } else {\n" +
    "              loadTests();\n" +
    "            }\n" +
    "          });\n" +
    "        }\n" +
    "\n" +
    "        QUnit.config.autostart = false;\n" +
    "\n" +
    "        if (window.requirejs) {\n" +
    "          addBizarroMethods();\n" +
    "          require(getConfig(), ['lodash'], function(lodash) {\n" +
    "            lodashBizarro = lodash.result(lodash, 'noConflict') || lodash;\n" +
    "            delete requirejs.s.contexts._;\n" +
    "\n" +
    "            removeBizarroMethods();\n" +
    "            loadModulesAndTests();\n" +
    "          });\n" +
    "        } else {\n" +
    "          loadModulesAndTests();\n" +
    "        }\n" +
    "      }());\n" +
    "\n" +
    "      // Set a more readable browser name.\n" +
    "      window.onload = function() {\n" +
    "        var timeoutId = setInterval(function() {\n" +
    "          var ua = document.getElementById('qunit-userAgent');\n" +
    "          if (ua) {\n" +
    "            ua.innerHTML = platform;\n" +
    "            clearInterval(timeoutId);\n" +
    "          }\n" +
    "        }, 16);\n" +
    "      };\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/test/underscore.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/test/underscore.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Underscore Test Suite</title>\n" +
    "    <link rel=\"stylesheet\" href=\"../node_modules/qunitjs/qunit/qunit.css\">\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div id=\"qunit\"></div>\n" +
    "    <script>\n" +
    "      // Avoid reporting tests to Sauce Labs when script errors occur.\n" +
    "      if (location.port == '9001') {\n" +
    "        window.onerror = function(message) {\n" +
    "          if (window.QUnit) {\n" +
    "            QUnit.config.done.length = 0;\n" +
    "          }\n" +
    "          global_test_results = { 'message': message };\n" +
    "        };\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script src=\"../node_modules/qunitjs/qunit/qunit.js\"></script>\n" +
    "    <script src=\"../node_modules/qunit-extras/qunit-extras.js\"></script>\n" +
    "    <script src=\"../node_modules/jquery/dist/jquery.js\"></script>\n" +
    "    <script src=\"../node_modules/platform/platform.js\"></script>\n" +
    "    <script src=\"./asset/test-ui.js\"></script>\n" +
    "    <script src=\"../lodash.js\"></script>\n" +
    "    <script>\n" +
    "      QUnit.config.asyncRetries = 10;\n" +
    "      QUnit.config.hidepassed = true;\n" +
    "      QUnit.config.excused = {\n" +
    "        'Arrays': {\n" +
    "          'difference': [\n" +
    "            'can perform an OO-style difference'\n" +
    "          ],\n" +
    "          'drop': [\n" +
    "            'is an alias for rest'\n" +
    "          ],\n" +
    "          'first': [\n" +
    "            'returns an empty array when n <= 0 (0 case)',\n" +
    "            'returns an empty array when n <= 0 (negative case)',\n" +
    "            'can fetch the first n elements',\n" +
    "            'returns the whole array if n > length'\n" +
    "          ],\n" +
    "          'findIndex': [\n" +
    "            'called with context'\n" +
    "          ],\n" +
    "          'findLastIndex': [\n" +
    "            'called with context'\n" +
    "          ],\n" +
    "          'flatten': [\n" +
    "            'supports empty arrays',\n" +
    "            'can flatten nested arrays',\n" +
    "            'works on an arguments object',\n" +
    "            'can handle very deep arrays'\n" +
    "          ],\n" +
    "          'head': [\n" +
    "            'is an alias for first'\n" +
    "          ],\n" +
    "          'indexOf': [\n" +
    "            \"sorted indexOf doesn't uses binary search\",\n" +
    "            '0'\n" +
    "          ],\n" +
    "          'initial': [\n" +
    "            'returns all but the last n elements',\n" +
    "            'returns an empty array when n > length',\n" +
    "            'works on an arguments object'\n" +
    "          ],\n" +
    "          'intersection': [\n" +
    "            'can perform an OO-style intersection'\n" +
    "          ],\n" +
    "          'last': [\n" +
    "            'returns an empty array when n <= 0 (0 case)',\n" +
    "            'returns an empty array when n <= 0 (negative case)',\n" +
    "            'can fetch the last n elements',\n" +
    "            'returns the whole array if n > length'\n" +
    "          ],\n" +
    "          'lastIndexOf': [\n" +
    "            'should treat falsey `fromIndex` values, except `0` and `NaN`, as `array.length`',\n" +
    "            'should treat non-number `fromIndex` values as `array.length`',\n" +
    "            '[0,-1,-1]'\n" +
    "          ],\n" +
    "          'object': [\n" +
    "            'an array of pairs zipped together into an object',\n" +
    "            'an object converted to pairs and back to an object'\n" +
    "          ],\n" +
    "          'range': [\n" +
    "            'range with two arguments a &amp; b, b&lt;a generates an empty array'\n" +
    "          ],\n" +
    "          'rest': [\n" +
    "            'returns the whole array when index is 0',\n" +
    "            'returns elements starting at the given index',\n" +
    "            'works on an arguments object'\n" +
    "          ],\n" +
    "          'sortedIndex': [\n" +
    "            '2',\n" +
    "            '3'\n" +
    "          ],\n" +
    "          'tail': [\n" +
    "            'is an alias for rest'\n" +
    "          ],\n" +
    "          'take': [\n" +
    "            'is an alias for first'\n" +
    "          ],\n" +
    "          'uniq': [\n" +
    "            'uses the result of `iterator` for uniqueness comparisons (unsorted case)',\n" +
    "            '`sorted` argument defaults to false when omitted',\n" +
    "            'when `iterator` is a string, uses that key for comparisons (unsorted case)',\n" +
    "            'uses the result of `iterator` for uniqueness comparisons (sorted case)',\n" +
    "            'when `iterator` is a string, uses that key for comparisons (sorted case)',\n" +
    "            'can use falsey pluck like iterator'\n" +
    "          ],\n" +
    "          'union': [\n" +
    "            'can perform an OO-style union'\n" +
    "          ]\n" +
    "        },\n" +
    "        'Chaining': {\n" +
    "          'pop': true,\n" +
    "          'shift': true,\n" +
    "          'splice': true,\n" +
    "          'reverse/concat/unshift/pop/map': [\n" +
    "            'can chain together array functions.'\n" +
    "          ]\n" +
    "        },\n" +
    "        'Collections': {\n" +
    "          'lookupIterator with contexts': true,\n" +
    "          'Iterating objects with sketchy length properties': true,\n" +
    "          'Resistant to collection length and properties changing while iterating': true,\n" +
    "          'countBy': [\n" +
    "            'true'\n" +
    "          ],\n" +
    "          'each': [\n" +
    "            'context object property accessed'\n" +
    "          ],\n" +
    "          'every': [\n" +
    "            'Can be called with object',\n" +
    "            'Died on test #15',\n" +
    "            'context works'\n" +
    "          ],\n" +
    "          'filter': [\n" +
    "            'given context',\n" +
    "            '[{\"a\":1,\"b\":2},{\"a\":1,\"b\":3},{\"a\":1,\"b\":4}]',\n" +
    "            '[{\"a\":1,\"b\":2},{\"a\":2,\"b\":2}]',\n" +
    "            'Empty object accepts all items',\n" +
    "            'OO-filter'\n" +
    "          ],\n" +
    "          'find': [\n" +
    "            '{\"a\":1,\"b\":4}',\n" +
    "            'undefined when not found',\n" +
    "            'undefined when searching empty list',\n" +
    "            'works on objects',\n" +
    "            'undefined',\n" +
    "            'called with context'\n" +
    "          ],\n" +
    "          'findWhere': [\n" +
    "            'checks properties given function'\n" +
    "          ],\n" +
    "          'groupBy': [\n" +
    "            'true'\n" +
    "          ],\n" +
    "          'includes': [\n" +
    "            \"doesn't delegate to binary search\"\n" +
    "          ],\n" +
    "          'invoke': [\n" +
    "            'handles null & undefined'\n" +
    "          ],\n" +
    "          'map': [\n" +
    "            'tripled numbers with context',\n" +
    "            'OO-style doubled numbers'\n" +
    "          ],\n" +
    "          'max': [\n" +
    "            'can handle null/undefined',\n" +
    "            'can perform a computation-based max',\n" +
    "            'Maximum value of an empty object',\n" +
    "            'Maximum value of an empty array',\n" +
    "            'Maximum value of a non-numeric collection',\n" +
    "            'Finds correct max in array starting with num and containing a NaN',\n" +
    "            'Finds correct max in array starting with NaN',\n" +
    "            'Respects iterator return value of -Infinity',\n" +
    "            'String keys use property iterator',\n" +
    "            'Iterator context',\n" +
    "            'Lookup falsy iterator'\n" +
    "          ],\n" +
    "          'min': [\n" +
    "            'can handle null/undefined',\n" +
    "            'can perform a computation-based min',\n" +
    "            'Minimum value of an empty object',\n" +
    "            'Minimum value of an empty array',\n" +
    "            'Minimum value of a non-numeric collection',\n" +
    "            'Finds correct min in array starting with NaN',\n" +
    "            'Respects iterator return value of Infinity',\n" +
    "            'String keys use property iterator',\n" +
    "            'Iterator context',\n" +
    "            'Lookup falsy iterator'\n" +
    "          ],\n" +
    "          'partition': [\n" +
    "            'can reference the array index',\n" +
    "            'Died on test #8',\n" +
    "            'partition takes a context argument',\n" +
    "            'function(a){[code]}'\n" +
    "          ],\n" +
    "          'pluck': [\n" +
    "            '[1]'\n" +
    "          ],\n" +
    "          'reduce': [\n" +
    "            'can reduce with a context object'\n" +
    "          ],\n" +
    "          'reject': [\n" +
    "            'Returns empty list given empty array'\n" +
    "          ],\n" +
    "          'sample': [\n" +
    "            'behaves correctly on negative n',\n" +
    "            'Died on test #3'\n" +
    "          ],\n" +
    "          'some': [\n" +
    "            'Can be called with object',\n" +
    "            'Died on test #17',\n" +
    "            'context works'\n" +
    "          ],\n" +
    "          'where': [\n" +
    "            'checks properties given function'\n" +
    "          ],\n" +
    "          'Can use various collection methods on NodeLists': [\n" +
    "            '<span id=\"id2\"></span>',\n" +
    "            '<span id=\"id1\"></span>'\n" +
    "          ]\n" +
    "        },\n" +
    "        'Functions': {\n" +
    "          'debounce asap': true,\n" +
    "          'debounce asap cancel': true,\n" +
    "          'debounce after system time is set backwards': true,\n" +
    "          'debounce asap recursively': true,\n" +
    "          'throttle repeatedly with results': true,\n" +
    "          'more throttle does not trigger leading call when leading is set to false': true,\n" +
    "          'throttle does not trigger trailing call when trailing is set to false': true,\n" +
    "          'before': [\n" +
    "            'stores a memo to the last value',\n" +
    "            'provides context'\n" +
    "          ],\n" +
    "          'bind': [\n" +
    "            'Died on test #2'\n" +
    "          ],\n" +
    "          'bindAll': [\n" +
    "            'throws an error for bindAll with no functions named'\n" +
    "          ],\n" +
    "          'memoize': [\n" +
    "            '{\"bar\":\"BAR\",\"foo\":\"FOO\"}',\n" +
    "            'Died on test #8'\n" +
    "          ],\n" +
    "          'partial':[\n" +
    "            'can partially apply with placeholders',\n" +
    "            'accepts more arguments than the number of placeholders',\n" +
    "            'accepts fewer arguments than the number of placeholders',\n" +
    "            'unfilled placeholders are undefined',\n" +
    "            'keeps prototype',\n" +
    "            'allows the placeholder to be swapped out'\n" +
    "          ]\n" +
    "        },\n" +
    "        'Objects': {\n" +
    "          '#1929 Typed Array constructors are functions': true,\n" +
    "          'allKeys': [\n" +
    "            'is not fooled by sparse arrays; see issue #95',\n" +
    "            'is not fooled by sparse arrays with additional properties',\n" +
    "            '[]'\n" +
    "          ],\n" +
    "          'defaults': [\n" +
    "            'defaults skips nulls',\n" +
    "            'defaults skips undefined'\n" +
    "          ],\n" +
    "          'extend': [\n" +
    "            'extending null results in null',\n" +
    "            'extending undefined results in undefined'\n" +
    "          ],\n" +
    "          'extendOwn': [\n" +
    "            'extending non-objects results in returning the non-object value',\n" +
    "            'extending undefined results in undefined'\n" +
    "          ],\n" +
    "          'functions': [\n" +
    "            'also looks up functions on the prototype'\n" +
    "          ],\n" +
    "          'isEqual': [\n" +
    "            '`0` is not equal to `-0`',\n" +
    "            'Commutative equality is implemented for `0` and `-0`',\n" +
    "            '`new Number(0)` and `-0` are not equal',\n" +
    "            'Commutative equality is implemented for `new Number(0)` and `-0`',\n" +
    "            'false'\n" +
    "          ],\n" +
    "          'isFinite': [\n" +
    "            'Numeric strings are numbers',\n" +
    "            'Number instances can be finite'\n" +
    "          ],\n" +
    "          'isMatch': [\n" +
    "            'doesnt falsey match constructor on undefined/null'\n" +
    "          ],\n" +
    "          'findKey': [\n" +
    "            'called with context'\n" +
    "          ],\n" +
    "          'keys': [\n" +
    "            'is not fooled by sparse arrays; see issue #95',\n" +
    "            '[]'\n" +
    "          ],\n" +
    "          'mapObject': [\n" +
    "            'keep context',\n" +
    "            'called with context',\n" +
    "            'mapValue identity'\n" +
    "          ],\n" +
    "          'matcher': [\n" +
    "            'null matches null',\n" +
    "            'treats primitives as empty'\n" +
    "          ],\n" +
    "          'omit': [\n" +
    "            'can accept a predicate',\n" +
    "            'function is given context'\n" +
    "          ],\n" +
    "          'pick': [\n" +
    "            'can accept a predicate and context',\n" +
    "            'function is given context'\n" +
    "          ]\n" +
    "        },\n" +
    "        'Utility': {\n" +
    "          'noConflict (node vm)': true,\n" +
    "          'now': [\n" +
    "            'Produces the correct time in milliseconds'\n" +
    "          ],\n" +
    "          'times': [\n" +
    "            'works as a wrapper'\n" +
    "          ]\n" +
    "        }\n" +
    "      };\n" +
    "\n" +
    "      var mixinPrereqs = (function() {\n" +
    "        var aliasToReal = {\n" +
    "          'all': 'every',\n" +
    "          'allKeys': 'keysIn',\n" +
    "          'any': 'some',\n" +
    "          'collect': 'map',\n" +
    "          'compose': 'flowRight',\n" +
    "          'contains': 'includes',\n" +
    "          'detect': 'find',\n" +
    "          'extendOwn': 'assign',\n" +
    "          'findWhere': 'find',\n" +
    "          'foldl': 'reduce',\n" +
    "          'foldr': 'reduceRight',\n" +
    "          'include': 'includes',\n" +
    "          'indexBy': 'keyBy',\n" +
    "          'inject': 'reduce',\n" +
    "          'invoke': 'invokeMap',\n" +
    "          'mapObject': 'mapValues',\n" +
    "          'matcher': 'matches',\n" +
    "          'methods': 'functions',\n" +
    "          'object': 'zipObject',\n" +
    "          'pairs': 'toPairs',\n" +
    "          'pluck': 'map',\n" +
    "          'restParam': 'restArgs',\n" +
    "          'select': 'filter',\n" +
    "          'unique': 'uniq',\n" +
    "          'where': 'filter'\n" +
    "        };\n" +
    "\n" +
    "        var keyMap = {\n" +
    "          'rest': 'tail',\n" +
    "          'restArgs': 'rest'\n" +
    "        };\n" +
    "\n" +
    "        var lodash = _.noConflict();\n" +
    "\n" +
    "        return function(_) {\n" +
    "          lodash.defaultsDeep(_, { 'templateSettings': lodash.templateSettings });\n" +
    "          lodash.mixin(_, lodash.pick(lodash, lodash.difference(lodash.functions(lodash), lodash.functions(_))));\n" +
    "\n" +
    "          lodash.forOwn(keyMap, function(realName, otherName) {\n" +
    "            _[otherName] = lodash[realName];\n" +
    "            _.prototype[otherName] = lodash.prototype[realName];\n" +
    "          });\n" +
    "\n" +
    "          lodash.forOwn(aliasToReal, function(realName, alias) {\n" +
    "            _[alias] = _[realName];\n" +
    "            _.prototype[alias] = _.prototype[realName];\n" +
    "          });\n" +
    "        };\n" +
    "      }());\n" +
    "\n" +
    "      // Only excuse in Sauce Labs.\n" +
    "      if (!ui.isSauceLabs) {\n" +
    "        delete QUnit.config.excused.Functions['throttle repeatedly with results'];\n" +
    "        delete QUnit.config.excused.Functions['more throttle does not trigger leading call when leading is set to false'];\n" +
    "        delete QUnit.config.excused.Functions['throttle does not trigger trailing call when trailing is set to false'];\n" +
    "        delete QUnit.config.excused.Utility.now;\n" +
    "      }\n" +
    "      // Load prerequisite scripts.\n" +
    "      document.write(ui.urlParams.loader == 'none'\n" +
    "        ? '<script src=\"' + ui.buildPath + '\"><\\/script>'\n" +
    "        : '<script data-dojo-config=\"async:1\" src=\"' + ui.loaderPath + '\"><\\/script>'\n" +
    "      );\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      if (ui.urlParams.loader == 'none') {\n" +
    "        mixinPrereqs(_);\n" +
    "        document.write([\n" +
    "          '<script src=\"../vendor/underscore/test/collections.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/arrays.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/functions.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/objects.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/cross-document.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/utility.js\"><\\/script>',\n" +
    "          '<script src=\"../vendor/underscore/test/chaining.js\"><\\/script>'\n" +
    "        ].join('\\n'));\n" +
    "      }\n" +
    "    </script>\n" +
    "    <script>\n" +
    "      (function() {\n" +
    "        if (window.curl) {\n" +
    "          curl.config({ 'apiName': 'require' });\n" +
    "        }\n" +
    "        if (!window.require) {\n" +
    "          return;\n" +
    "        }\n" +
    "        // Wrap to work around tests assuming Node `require` use.\n" +
    "        require = (function(func) {\n" +
    "          return function() {\n" +
    "            return arguments[0] === '..' ? window._ : func.apply(null, arguments);\n" +
    "          };\n" +
    "        }(require));\n" +
    "\n" +
    "        var reBasename = /[\\w.-]+$/,\n" +
    "            basePath = ('//' + location.host + location.pathname.replace(reBasename, '')).replace(/\\btest\\/$/, ''),\n" +
    "            modulePath = ui.buildPath.replace(/\\.js$/, ''),\n" +
    "            locationPath = modulePath.replace(reBasename, '').replace(/^\\/|\\/$/g, ''),\n" +
    "            moduleId = /\\bunderscore\\b/i.test(ui.buildPath) ? 'underscore' : 'lodash',\n" +
    "            moduleMain = modulePath.match(reBasename)[0],\n" +
    "            uid = +new Date;\n" +
    "\n" +
    "        function getConfig() {\n" +
    "          var result = {\n" +
    "            'baseUrl': './',\n" +
    "            'urlArgs': 't=' + uid++,\n" +
    "            'waitSeconds': 0,\n" +
    "            'paths': {},\n" +
    "            'packages': [{\n" +
    "              'name': 'test',\n" +
    "              'location': '../vendor/underscore/test',\n" +
    "              'config': {\n" +
    "                // Work around no global being exported.\n" +
    "                'exports': 'QUnit',\n" +
    "                'loader': 'curl/loader/legacy'\n" +
    "              }\n" +
    "            }]\n" +
    "          };\n" +
    "\n" +
    "          if (ui.isModularize) {\n" +
    "            result.packages.push({\n" +
    "              'name': moduleId,\n" +
    "              'location': locationPath,\n" +
    "              'main': moduleMain\n" +
    "            });\n" +
    "          } else {\n" +
    "            result.paths[moduleId] = modulePath;\n" +
    "          }\n" +
    "          return result;\n" +
    "        }\n" +
    "\n" +
    "        QUnit.config.autostart = false;\n" +
    "\n" +
    "        require(getConfig(), [moduleId], function(lodash) {\n" +
    "          mixinPrereqs(lodash);\n" +
    "          require(getConfig(), [\n" +
    "            'test/collections',\n" +
    "            'test/arrays',\n" +
    "            'test/functions',\n" +
    "            'test/objects',\n" +
    "            'test/cross-document',\n" +
    "            'test/utility',\n" +
    "            'test/chaining'\n" +
    "          ], function() {\n" +
    "            QUnit.start();\n" +
    "          });\n" +
    "        });\n" +
    "      }());\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../public/assets/bower_components/lodash/vendor/firebug-lite/skin/xp/firebug.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/assets/bower_components/lodash/vendor/firebug-lite/skin/xp/firebug.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/DTD/strict.dtd\">\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "<title>Firebug Lite</title>\n" +
    "<!-- An empty script to avoid FOUC when loading the stylesheet -->\n" +
    "<script type=\"text/javascript\"></script>\n" +
    "<style type=\"text/css\" media=\"screen\">@import \"firebug.css\";</style>\n" +
    "<style>html,body{margin:0;padding:0;overflow:hidden;}</style>\n" +
    "</head>\n" +
    "<body class=\"fbBody\">\n" +
    "<table id=\"fbChrome\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <!-- Interface - Top Area -->\n" +
    "      <td id=\"fbTop\" colspan=\"2\">\n" +
    "      \n" +
    "        <!-- \n" +
    "        <div>\n" +
    "          --><!-- <span id=\"fbToolbarErrors\" class=\"fbErrors\">2 errors</span> --><!-- \n" +
    "          <input type=\"text\" id=\"fbToolbarSearch\" />\n" +
    "        </div>\n" +
    "        -->\n" +
    "              \n" +
    "        <!-- Window Buttons -->\n" +
    "        <div id=\"fbWindowButtons\">\n" +
    "          <a id=\"fbWindow_btDeactivate\" class=\"fbSmallButton fbHover\" title=\"Deactivate Firebug for this web page\">&nbsp;</a>\n" +
    "          <a id=\"fbWindow_btDetach\" class=\"fbSmallButton fbHover\" title=\"Open Firebug in popup window\">&nbsp;</a>\n" +
    "          <a id=\"fbWindow_btClose\" class=\"fbSmallButton fbHover\" title=\"Minimize Firebug\">&nbsp;</a>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- Toolbar buttons and Status Bar -->\n" +
    "        <div id=\"fbToolbar\">\n" +
    "          <div id=\"fbToolbarContent\">\n" +
    "        \n" +
    "          <!-- Firebug Button -->\n" +
    "          <span id=\"fbToolbarIcon\">\n" +
    "            <a id=\"fbFirebugButton\" class=\"fbIconButton\" class=\"fbHover\" target=\"_blank\">&nbsp;</a>\n" +
    "          </span>\n" +
    "          \n" +
    "          <!-- \n" +
    "          <span id=\"fbLeftToolbarErrors\" class=\"fbErrors\">2 errors</span>\n" +
    "           -->\n" +
    "           \n" +
    "          <!-- Toolbar Buttons -->\n" +
    "          <span id=\"fbToolbarButtons\">\n" +
    "            <!-- Fixed Toolbar Buttons -->\n" +
    "            <span id=\"fbFixedButtons\">\n" +
    "                <a id=\"fbChrome_btInspect\" class=\"fbButton fbHover\" title=\"Click an element in the page to inspect\">Inspect</a>\n" +
    "            </span>\n" +
    "            \n" +
    "            <!-- Console Panel Toolbar Buttons -->\n" +
    "            <span id=\"fbConsoleButtons\" class=\"fbToolbarButtons\">\n" +
    "              <a id=\"fbConsole_btClear\" class=\"fbButton fbHover\" title=\"Clear the console\">Clear</a>\n" +
    "            </span>\n" +
    "            \n" +
    "            <!-- HTML Panel Toolbar Buttons -->\n" +
    "            <!-- \n" +
    "            <span id=\"fbHTMLButtons\" class=\"fbToolbarButtons\">\n" +
    "              <a id=\"fbHTML_btEdit\" class=\"fbHover\" title=\"Edit this HTML\">Edit</a>\n" +
    "            </span>\n" +
    "             -->\n" +
    "          </span>\n" +
    "          \n" +
    "          <!-- Status Bar -->\n" +
    "          <span id=\"fbStatusBarBox\">\n" +
    "            <span class=\"fbToolbarSeparator\"></span>\n" +
    "            <!-- HTML Panel Status Bar -->\n" +
    "            <!-- \n" +
    "            <span id=\"fbHTMLStatusBar\" class=\"fbStatusBar fbToolbarButtons\">\n" +
    "            </span>\n" +
    "             -->\n" +
    "          </span>\n" +
    "          \n" +
    "          </div>\n" +
    "          \n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- PanelBars -->\n" +
    "        <div id=\"fbPanelBarBox\">\n" +
    "        \n" +
    "          <!-- Main PanelBar -->\n" +
    "          <div id=\"fbPanelBar1\" class=\"fbPanelBar\">\n" +
    "            <a id=\"fbConsoleTab\" class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">Console</span>\n" +
    "                <span class=\"fbTabMenuTarget\"></span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "            </a>\n" +
    "            <a id=\"fbHTMLTab\" class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">HTML</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">CSS</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">Script</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">DOM</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- Side PanelBars -->\n" +
    "          <div id=\"fbPanelBar2Box\" class=\"hide\">\n" +
    "            <div id=\"fbPanelBar2\" class=\"fbPanelBar\">\n" +
    "            <!-- \n" +
    "              <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">Style</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "              </a>\n" +
    "              <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">Layout</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "              </a>\n" +
    "              <a class=\"fbTab fbHover\">\n" +
    "                <span class=\"fbTabL\"></span>\n" +
    "                <span class=\"fbTabText\">DOM</span>\n" +
    "                <span class=\"fbTabR\"></span>\n" +
    "              </a>\n" +
    "           -->\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          \n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- Horizontal Splitter -->\n" +
    "        <div id=\"fbHSplitter\">&nbsp;</div>\n" +
    "        \n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    \n" +
    "    <!-- Interface - Main Area -->\n" +
    "    <tr id=\"fbContent\">\n" +
    "    \n" +
    "      <!-- Panels  -->\n" +
    "      <td id=\"fbPanelBox1\">\n" +
    "        <div id=\"fbPanel1\" class=\"fbFitHeight\">\n" +
    "          <div id=\"fbConsole\" class=\"fbPanel\"></div>\n" +
    "          <div id=\"fbHTML\" class=\"fbPanel\"></div>\n" +
    "        </div>\n" +
    "      </td>\n" +
    "      \n" +
    "      <!-- Side Panel Box -->\n" +
    "      <td id=\"fbPanelBox2\" class=\"hide\">\n" +
    "      \n" +
    "        <!-- VerticalSplitter -->\n" +
    "        <div id=\"fbVSplitter\" class=\"fbVSplitter\">&nbsp;</div>\n" +
    "        \n" +
    "        <!-- Side Panels -->\n" +
    "        <div id=\"fbPanel2\" class=\"fbFitHeight\">\n" +
    "        \n" +
    "          <!-- HTML Side Panels -->\n" +
    "          <div id=\"fbHTML_Style\" class=\"fbPanel\"></div>\n" +
    "          <div id=\"fbHTML_Layout\" class=\"fbPanel\"></div>\n" +
    "          <div id=\"fbHTML_DOM\" class=\"fbPanel\"></div>\n" +
    "          \n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- Large Command Line -->\n" +
    "        <textarea id=\"fbLargeCommandLine\" class=\"fbFitHeight\"></textarea>\n" +
    "        \n" +
    "        <!-- Large Command Line Buttons -->\n" +
    "        <div id=\"fbLargeCommandButtons\">\n" +
    "            <a id=\"fbCommand_btRun\" class=\"fbButton fbHover\">Run</a>\n" +
    "            <a id=\"fbCommand_btClear\" class=\"fbButton fbHover\">Clear</a>\n" +
    "            \n" +
    "            <a id=\"fbSmallCommandLineIcon\" class=\"fbSmallButton fbHover\"></a>\n" +
    "        </div>\n" +
    "        \n" +
    "      </td>\n" +
    "      \n" +
    "    </tr>\n" +
    "    \n" +
    "    <!-- Interface - Bottom Area -->\n" +
    "    <tr id=\"fbBottom\" class=\"hide\">\n" +
    "    \n" +
    "      <!-- Command Line -->\n" +
    "      <td id=\"fbCommand\" colspan=\"2\">\n" +
    "        <div id=\"fbCommandBox\">\n" +
    "          <div id=\"fbCommandIcon\">&gt;&gt;&gt;</div>\n" +
    "          <input id=\"fbCommandLine\" name=\"fbCommandLine\" type=\"text\" />\n" +
    "          <a id=\"fbLargeCommandLineIcon\" class=\"fbSmallButton fbHover\"></a>\n" +
    "        </div>\n" +
    "      </td>\n" +
    "      \n" +
    "    </tr>\n" +
    "    \n" +
    "  </tbody>\n" +
    "</table> \n" +
    "<span id=\"fbMiniChrome\">\n" +
    "  <span id=\"fbMiniContent\">\n" +
    "    <span id=\"fbMiniIcon\" title=\"Open Firebug Lite\"></span>\n" +
    "    <span id=\"fbMiniErrors\" class=\"fbErrors\"><!-- 2 errors --></span>\n" +
    "  </span>\n" +
    "</span>\n" +
    "<!-- \n" +
    "<div id=\"fbErrorPopup\">\n" +
    "  <div id=\"fbErrorPopupContent\">\n" +
    "    <div id=\"fbErrorIndicator\" class=\"fbErrors\">2 errors</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    " -->\n" +
    "</body>\n" +
    "</html>");
}]);
