/*!
 * gulp-build-boilerplate v1.0.0 (https://github.com/ajiho/gulp-build-boilerplate)
 * Copyright 2023-2024 [object Object]
 * license MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
    typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BootstrapAdmin = {}, global.jQuery));
})(this, (function (exports, $) { 'use strict';

    function get(selector) {
      return $(selector).css('color', 'red').get();
    }

    exports.get = get;

}));
//# sourceMappingURL=app.js.map
