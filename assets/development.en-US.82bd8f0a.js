import{d as a,c as n,b as t,o as e}from"./vue.508256f0.js";const l={class:"markdown-body"},p=t(`<h2>Development</h2><blockquote><p>Recommended use: generating project at <a href="https://github.com/hellof2e/quark-cli">https://github.com/hellof2e/quark-cli</a></p></blockquote><p><code class="">quarkc</code> supports <code class="">TypeScript</code>. A component written in <code class="">quarkc</code> would look like this:</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-text&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Text</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>() <span class="hljs-comment">// Externally passed properties</span>
  text = <span class="hljs-literal">false</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{ this.text }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>External use</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-text</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hello world&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-text</span>&gt;</span>
</code></pre>`,6),c=[p],m={},i="",u=a({__name:"development.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(e(),n("div",l,c))}});export{u as default,i as excerpt,m as frontmatter};
