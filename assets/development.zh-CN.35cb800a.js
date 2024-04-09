import{d as a,c as n,b as t,o as l}from"./vue.a41a18a8.js";const e={class:"markdown-body"},p=t(`<h2>Development</h2><blockquote><p>\u63A8\u8350\u4F7F\u7528\uFF1A<a href="https://github.com/hellof2e/quark-cli">https://github.com/hellof2e/quark-cli</a> \u751F\u6210\u9879\u76EE</p></blockquote><p><code class="">quarkc</code> \u652F\u6301 <code class="">TypeScript</code>\uFF0C\u7528 <code class="">quarkc</code> \u7F16\u5199\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4EE3\u7801\u7ED3\u6784\u5927\u6982\u5982\u4E0B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-text&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Text</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>() <span class="hljs-comment">// \u5916\u90E8\u4F20\u5165\u5C5E\u6027</span>
  text = <span class="hljs-literal">false</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{ this.text }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u5916\u90E8\u4F7F\u7528</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-text</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hello world&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-text</span>&gt;</span>
</code></pre>`,6),c=[p],d={},m="",j=a({__name:"development.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(u,r)=>(l(),n("div",e,c))}});export{j as default,m as excerpt,d as frontmatter};
