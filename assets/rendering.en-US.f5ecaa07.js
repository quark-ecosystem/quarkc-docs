import{d as a,c as n,b as l,o as p}from"./vue.01a95355.js";const t={class:"markdown-body"},e=l(`<h2>Rendering</h2><p>Add a <code class="">render</code> method to your custom element.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./my-header.js&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./my-body.js&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./my-footer.js&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Welcome to Quarkc\uFF01<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">my-header</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-header</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">my-body</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-body</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">my-footer</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-footer</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    )
  }
}
</code></pre><p><code class="">Quarkc</code> uses <code class="">tsx/jsx</code> as <code class="">UI</code> expressions, so the <code class="">render</code> function can contain any <code class="">tsx/jsx</code> syntax, such as conditional rendering, ternary operators, etc. You can write <code class="">Quarkc</code> components just like <code class="">React</code> components.</p><h3>Conditional Rendering</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyElement</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  isShow = <span class="hljs-literal">false</span> <span class="hljs-comment">// class syntax, internal private variable, not part of state/property (no reactivity)</span>

  renderNode = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span>(isShow) {
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Render it<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    }

    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        { this.renderNode() }
      <span class="hljs-tag">&lt;/&gt;</span></span>
    )
  }
}
</code></pre><h3>Ternary Operator</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyCount</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  count = <span class="hljs-number">0</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count &gt; 0 ? &quot;More&quot; : &quot;Less&quot;}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><h3>List Rendering</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyCount</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  list = [{<span class="hljs-attr">key</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">key</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>},{<span class="hljs-attr">key</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>}]

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        {
          this.list.map((item) =&gt; {
            return <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.key}</span>&gt;</span>{item.value}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          })
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre>`,10),c=[e],m={},d="",u=a({__name:"rendering.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(p(),n("div",t,c))}});export{u as default,d as excerpt,m as frontmatter};
