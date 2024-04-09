import{d as a,c as n,b as u,o as l}from"./vue.274a502d.js";const t={class:"markdown-body"},c=u(`<h2>Lifecycle</h2><p><code class="">Quarkc</code> \u5BF9\u5916\u63D0\u4F9B\u4E86\u5982\u4E0B\u51E0\u4E2A\u751F\u547D\u5468\u671F\uFF1A</p><table><thead><tr><th>\u751F\u547D\u5468\u671F\u65B9\u6CD5</th><th>\u8C03\u7528\u65F6\u673A</th></tr></thead><tbody><tr><td><code class="">componentDidMount</code></td><td><code class="">connectedCallback</code> \u89E6\u53D1\u65F6\u6267\u884C\uFF0C\u6B64\u65F6\u7EC4\u4EF6 <code class="">dom</code> \u5DF2\u6E32\u67D3\u5B8C\u6BD5</td></tr><tr><td><code class="">shouldComponentUpdate</code></td><td><code class="">attributeChangedCallback</code> \u89E6\u53D1\u65F6\u6267\u884C\uFF0C\u7528\u4E8E\u63A7\u5236\u5F53\u524D\u5C5E\u6027\u53D8\u5316\u662F\u5426\u5BFC\u81F4\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3</td></tr><tr><td><code class="">componentDidUpdate</code></td><td><code class="">attributeChangedCallback</code> \u89E6\u53D1, <code class="">render</code> \u6267\u884C\u540E\u89E6\u53D1\uFF0C\u6B64\u65F6\u53EF\u62FF\u5230\u66F4\u65B0\u540E\u7684 <code class="">dom</code> \u505A\u76F8\u5173\u64CD\u4F5C</td></tr><tr><td><code class="">componentWillUnmount</code></td><td><code class="">disconnectedCallback</code> \u89E6\u53D1\u65F6\u3001<code class="">dom</code> \u79FB\u9664\u524D\u6267\u884C,\u6B64\u65F6\u53EF\u505A\u526F\u4F5C\u7528\u79FB\u9664\u76F8\u5173\u64CD\u4F5C</td></tr></tbody></table><p>\u5176\u4E2D <code class="">connectedCallback</code>\u3001<code class="">attributeChangedCallback</code>\u3001<code class="">disconnectedCallback</code> \u5747\u4E3A <code class="">Web Components</code> \u7EC4\u4EF6\u539F\u751F\u751F\u547D\u5468\u671F\uFF0C\u53EF<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks">\u53C2\u8003</a></p><p>\u4E3E\u4E2A\u4F8B\u5B50:</p><pre><code class="language-tsx">
<span class="hljs-keyword">import</span> { QuarkElement,
  property,
  state
  customElement
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>

<span class="hljs-meta">@customElement</span>({
  <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>,
  style,
})
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkCount</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  count = <span class="hljs-number">0</span>

  <span class="hljs-function"><span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">this</span>.tick(), <span class="hljs-number">1000</span>)
  }

  <span class="hljs-function"><span class="hljs-title">shouldComponentUpdate</span>(<span class="hljs-params">propName, oldValue, newValue</span>)</span> {
    <span class="hljs-keyword">if</span> (propName === <span class="hljs-string">&quot;xxx&quot;</span>) {
      <span class="hljs-comment">// \u963B\u6B62\u66F4\u65B0</span>
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
  }

  <span class="hljs-function"><span class="hljs-title">componentDidUpdate</span>(<span class="hljs-params">propName, oldValue, newValue</span>)</span> {
    <span class="hljs-comment">// \u5DF2\u66F4\u65B0</span>
  }

  <span class="hljs-function"><span class="hljs-title">componentWillUnmount</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// \u6E05\u9664\u526F\u4F5C\u7528</span>
    <span class="hljs-built_in">clearInterval</span>(<span class="hljs-built_in">this</span>.interval)
  }

  <span class="hljs-comment">// \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5EFA\u8BAE\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
  tick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count++
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
     <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}

</code></pre>`,6),e=[c],h={},i="",F=a({__name:"lifecycle.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),n("div",t,e))}});export{F as default,i as excerpt,h as frontmatter};
