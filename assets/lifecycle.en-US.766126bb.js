import{d as n,c as a,b as e,o as t}from"./vue.02c93f74.js";const l={class:"markdown-body"},c=e(`<h2>Lifecycle</h2><p><code class="">Quarkc</code> \u5BF9\u5916\u63D0\u4F9B\u4E86\u5982\u4E0B\u51E0\u4E2A\u751F\u547D\u5468\u671F\uFF1A</p><table><thead><tr><th>\u751F\u547D\u5468\u671F\u65B9\u6CD5</th><th>\u8C03\u7528\u65F6\u673A</th></tr></thead><tbody><tr><td><code class="">componentDidMount</code></td><td>Invoked after <code class="">connectedCallback</code> triggered and the component finishes first rendering (mounted, inserted into th e <code class="">dom</code> tree). You can access the <code class="">dom</code> at this time.</td></tr><tr><td><code class="">shouldComponentUpdate</code></td><td>Invoked after <code class="">attributeChangedCallback</code> triggered and before the component rendering. You can decide whether to update the component or not by letting this method return <code class="">true</code> or <code class="">false</code>. <em>\uFF08\u26A0\uFE0F deprecated from v2.0.0 and is not recommended\uFF0Cit will be removed in next major version\uFF09</em></td></tr><tr><td><code class="">componentDidUpdate</code></td><td>Invoked everytime <code class="">attributeChangedCallback</code> was triggered and the component finishes rendering. You can access the <code class="">dom</code> at this time. <em>\uFF08\u26A0\uFE0F from v2.0.0, when <code class="">componentDidMount</code> is also defined, it will not be invoked at mount phase\uFF09</em></td></tr><tr><td><code class="">componentUpdated</code> <em>\uFF08new\u2B50\uFE0F v2.0.0\uFF09</em></td><td>Distinct from <code class="">componentDidUpdate</code>, it will be invoked after all of the component\u2019s props and states\u2019 updates finished. You can access the <code class="">dom</code> at this time.</td></tr><tr><td><code class="">componentWillUnmount</code></td><td>Invoked after <code class="">disconnectedCallback</code> triggered and before the <code class="">dom</code> removed. You can clean up the side effects here.</td></tr></tbody></table><p>Among them, <code class="">connectedCallback</code>\u3001<code class="">attributeChangedCallback</code>\u3001<code class="">disconnectedCallback</code> are all native <code class="">Web Components</code>\u2019s lifecycle method\uFF0Cyou can refer to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks">this article</a> for more details.</p><h3>example</h3><pre><code class="language-tsx">
<span class="hljs-keyword">import</span> { QuarkElement, property, state, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
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
      <span class="hljs-comment">// prevent update</span>
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
  }

  <span class="hljs-function"><span class="hljs-title">componentDidUpdate</span>(<span class="hljs-params">propName, oldValue, newValue</span>)</span> {
    <span class="hljs-comment">// invoked everytime any of the props or states updated</span>
  }

  <span class="hljs-function"><span class="hljs-title">componentUpdated</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// access the updated states or props</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.count)
  }

  <span class="hljs-function"><span class="hljs-title">componentWillUnmount</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// clean the side effects</span>
    <span class="hljs-built_in">clearInterval</span>(<span class="hljs-built_in">this</span>.interval)
  }

  tick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count++
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
     <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}

</code></pre>`,6),o=[c],u={},h="",m=n({__name:"lifecycle.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(t(),a("div",l,o))}});export{m as default,h as excerpt,u as frontmatter};
