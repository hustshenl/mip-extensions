/**
 * @file 36漫画广告轮播组件
 *
 * @author shen@shenl.com
 * @version 1.0.0
 * @copyright 2018 shenl.com, Inc. All Rights Reserved
 */

define(function (require) {
    var customElement = require('customElement').create();
    var $ = require('zepto');

    function render() {
        var element = this.element;
        var node = document.createElement('script');
        node.type = 'text/javascript';
        node.src = 'https://www.36mh.com/bd/a-36mh.js';
        node.async = 'async';
        $(element).append(node);
    }
    customElement.prototype.build = render;
    return customElement;
});
