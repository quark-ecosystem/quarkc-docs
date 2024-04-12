import{d as a,c as n,b as l,o as t}from"./vue.69b62733.js";const p={class:"markdown-body"},e=l(`<h2>Watchers and Computed</h2><h3>Watchers</h3><p>Watching changes of reactive states or properties by <code class="">@watch</code> directive.</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  count = <span class="hljs-number">0</span>

  handleClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>
  }

  <span class="hljs-comment">// * support immediate option, the watcher callback will be triggered immediately after initialization</span>
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
</code></pre><h3>Computed</h3><p>Create a new property computed from reactive states or properties by <code class="">@computed</code> directive. Different from normal <code class="">getter</code> methods, computed properties will track the changes of its dependencies and updates automatically. As long as its dependecies are not changed, cached value will be used and no computation will be triggered.</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
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
</code></pre>`,7),c=[e],u={},j="",d=a({__name:"watchers_computed.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(t(),n("div",p,c))}});export{d as default,j as excerpt,u as frontmatter};
