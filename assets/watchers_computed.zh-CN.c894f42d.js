import{d as a,c as n,b as l,o as u}from"./vue.69b62733.js";const t={class:"markdown-body"},p=l(`<h2>\u76D1\u89C6\u5668\u548C\u8BA1\u7B97\u5C5E\u6027</h2><h3>\u76D1\u89C6\u5668</h3><p>\u901A\u8FC7 <code class="">@watch</code> \u76D1\u89C6\u54CD\u5E94\u5F0F\u72B6\u6001\u6216\u5C5E\u6027\u7684\u503C\u7684\u53D8\u5316\u3002</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  count = <span class="hljs-number">0</span>

  handleClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>
  }

  <span class="hljs-comment">// * \u652F\u6301\u6307\u5B9Aimmediate\u9009\u9879\uFF0C\u76D1\u89C6\u5668\u56DE\u8C03\u4F1A\u5728\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u89E6\u53D1</span>
  <span class="hljs-meta">@watch</span>(<span class="hljs-string">&quot;count&quot;</span>, { <span class="hljs-attr">immediate</span>: <span class="hljs-literal">false</span> })
  <span class="hljs-function"><span class="hljs-title">countLogger</span>(<span class="hljs-params">val, oldVal</span>)</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`count from <span class="hljs-subst">\${oldVal}</span> to <span class="hljs-subst">\${val}</span>\`</span>);
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.handleClick}</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><h3>\u8BA1\u7B97\u5C5E\u6027</h3><p>\u901A\u8FC7 <code class="">@computed</code> \u6765\u521B\u5EFA\u7531\u54CD\u5E94\u5F0F\u72B6\u6001\u6216\u5C5E\u6027\u8BA1\u7B97\u51FA\u6765\u7684\u65B0\u5C5E\u6027\u3002\u533A\u522B\u4E8E\u666E\u901A<code class="">getter</code>\u65B9\u6CD5\uFF0C\u8BA1\u7B97\u5C5E\u6027\u4F1A\u81EA\u52A8\u8FFD\u8E2A\u4F9D\u8D56\u9879\u7684\u53D8\u5316\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u3002\u53EA\u8981\u4F9D\u8D56\u9879\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u5176\u7F13\u5B58\u503C\u4F1A\u88AB\u4F7F\u7528\u4E14\u4E0D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  count = <span class="hljs-number">0</span>

  <span class="hljs-meta">@computed</span>()
  <span class="hljs-keyword">get</span> <span class="hljs-title">doubleCount</span>() {
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.count * <span class="hljs-number">2</span>;
  }

  handleClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>
  }

  <span class="hljs-meta">@watch</span>(<span class="hljs-string">&quot;doubleCount&quot;</span>, { <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span> })
  <span class="hljs-function"><span class="hljs-title">doubleCountLogger</span>(<span class="hljs-params">val, oldVal</span>)</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`doubleCount from <span class="hljs-subst">\${oldVal}</span> to <span class="hljs-subst">\${val}</span>\`</span>);
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.handleClick}</span>&gt;</span>{doubleCount}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre>`,7),c=[p],r={},i="",d=a({__name:"watchers_computed.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(u(),n("div",t,c))}});export{d as default,i as excerpt,r as frontmatter};
