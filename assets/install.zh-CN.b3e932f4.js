import{d as a,c as n,b as t,o as l}from"./vue.ecdbeed1.js";const p={class:"markdown-body"},u=t(`<h2>\u5B89\u88C5</h2><pre><code class="language-js">npm create quarkc@latest
<span class="hljs-comment">// \u9009\u62E9 component</span>
</code></pre><h2>\u542F\u52A8\u9879\u76EE</h2><pre><code class="">npm install
npm run dev
</code></pre><h3>\u5FEB\u901F\u5F00\u59CB</h3><h4>\u521B\u5EFA\u7EC4\u4EF6\uFF08\u5143\u7D20\uFF09</h4><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, property, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Number</span>
  })
  <span class="hljs-attr">count</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>

  add = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.add}</span>&gt;</span>count is: { this.count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><h4>\u6784\u5EFA</h4><pre><code class="language-js">npm run build
</code></pre><p>\u751F\u6210\u7684\u6253\u5305\u4EA7\u7269\u5728 lib/ \u6587\u4EF6\u5939\u4E0B:</p><pre><code class="language-tree">.
\u251C\u2500\u2500 types
|     \u2514\u2500\u2500 install.d.ts
\u251C\u2500\u2500 index.js
\u2514\u2500\u2500 index.umd.js
</code></pre><h4>\u4F7F\u7528</h4><p>\u4EA7\u7269\u53EF\u4EE5\u76F4\u63A5\u88AB\u4EFB\u4F55\u524D\u7AEF\u9879\u76EE\u4F7F\u7528</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;path/lib/your-component&quot;</span>
</code></pre><p>\u6216\u53D1\u5E03\u5230 npm\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;your-component&quot;</span>
</code></pre><p>\u6216\u4F7F\u7528 CDN\uFF1A</p><pre><code class="language-js">&lt;script src=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/quarkc@latest&quot;</span>&gt;&lt;/script&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/your-published-component@latest&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><p>\u5F00\u59CB\u4F7F\u7528\uFF1A</p><pre><code class="language-html">  <span class="hljs-comment">&lt;!-- \u65E0\u6846\u67B6 --&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">my-element</span> <span class="hljs-attr">count</span>=<span class="hljs-string">&quot;count&quot;</span> /&gt;</span>

  <span class="hljs-comment">&lt;!-- vue --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">my-element</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;count&quot;</span> /&gt;</span>

  <span class="hljs-comment">&lt;!-- react --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">my-element</span> <span class="hljs-attr">count</span>=<span class="hljs-string">{count}</span> /&gt;</span>

  <span class="hljs-comment">&lt;!-- svelte --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">my-element</span> {<span class="hljs-attr">count</span>} /&gt;</span>

  <span class="hljs-comment">&lt;!-- angular --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">my-element</span> [<span class="hljs-attr">count</span>]=<span class="hljs-string">&quot;count&quot;</span> /&gt;</span>
</code></pre><p>\u606D\u559C\uFF0C\u4F60\u5DF2\u7ECF\u5165\u95E8\u4E86\uFF01</p>`,21),e=[u],j={},m="",g=a({__name:"install.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(l(),n("div",p,e))}});export{g as default,m as excerpt,j as frontmatter};
