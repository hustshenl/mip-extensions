# mip-shenl-ad 广告

`<mip-shenl-ad>` 用于在 MIP 页中引入广告脚本，投放广告。 

标题|内容
----|----
类型|通用
支持布局|responsive, fixed-height, fill, container, nodisplay, fixed, flex-item
所需脚本|https://c.mipcdn.com/static/v1/mip-ad/mip-shenl-ad.js

## 广告设置

`<mip-shenl-ad>` 可以通过data-src参数设置广告JS地址，引入该广告。

网页内联横幅广告请设置ID，便于插入广告

## 示例

### 基本使用

```html
<mip-shenl-ad data-src="https://www.omanhua8.com/mip-xxf1/dibu-hf.js" id="bottom-fixed"></mip-shenl-ad>
```
