/**
 * @file 自定义广告组件
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
        var src = element.getAttribute('data-src');
        var node = document.createElement('script');
        node.type = 'text/javascript';
        node.src = src;
        node.async = 'async';
        $(element).append(node);
    }

    customElement.prototype.build = render;

    return customElement;
});
