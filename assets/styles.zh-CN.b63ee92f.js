import{d as a,c as n,b as l,o as t}from"./vue.274a502d.js";const p={class:"markdown-body"},e=l(`<h2>Styles</h2><h3>\u72EC\u7ACB css \u6587\u4EF6\u65B9\u5F0F</h3><p><code class="">Quarkc</code> \u652F\u6301\u72EC\u7ACB <code class="">css</code> \u6587\u4EF6\u7684\u65B9\u5F0F\u5F00\u53D1\u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u5728 <code class="">@customElement</code> \u4F20\u5165 <code class="">style</code> \u5373\u53EF\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyElement</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre><p>index.css\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:host</span> <span class="hljs-selector-class">.quark_count_button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">cursor</span>: unset;
}

<span class="hljs-selector-pseudo">:host</span>(<span class="hljs-selector-attr">[disabled]</span>) {
  <span class="hljs-attribute">cursor</span>: not-allowed;
  <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.68</span>;
  user-select: none;
}
</code></pre><p>\u4F60\u53EF\u80FD\u9700\u8981\u76F8\u5173\u5BFC\u5165 <code class="">css</code> \u6587\u4EF6\u7684\u63D2\u4EF6\uFF0C\u6BD4\u5982 <code class="">rollup</code> \u7684 <a href="https://www.npmjs.com/package/rollup-plugin-import-css">rollup-plugin-import-css</a></p><h3>CSS In JS</h3><p>\u76F4\u63A5\u5728\u7EC4\u4EF6\u5185\u90E8\u4E66\u5199\u6837\u5F0F\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> style = {
      <span class="hljs-attr">width</span>: <span class="hljs-string">&quot;100%&quot;</span>,
      <span class="hljs-attr">marginTop</span>: <span class="hljs-string">&quot;10px&quot;</span>
    }

    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{style}</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    );
  }
}
</code></pre><p>\u63A8\u8350\u4F7F\u7528\u72EC\u7ACB <code class="">css</code> \u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u5F00\u53D1\u3002</p><h3>\u4E3B\u9898</h3><p>\u53EF\u4EE5\u4F7F\u7528 <code class="">css</code> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">\u81EA\u5B9A\u4E49\u5C5E\u6027</a>\u7684\u65B9\u5F0F\u6765\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><p>index.css\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:host</span> <span class="hljs-selector-class">.quark_count_button</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--your-primary-color, red);
}

<span class="hljs-selector-pseudo">:host</span>(<span class="hljs-selector-attr">[disabled]</span>) {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--your-disable-color, gray);
}
</code></pre>`,15),c=[e],d={},j="",i=a({__name:"styles.zh-CN",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(t(),n("div",p,c))}});export{i as default,j as excerpt,d as frontmatter};
