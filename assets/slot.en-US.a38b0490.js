import{d as a,c as n,b as l,o as t}from"./vue.69b62733.js";const p={class:"markdown-body"},e=l(`<h2>Slot</h2><h3>Default Slot</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span>&gt;</span>default slot<span class="hljs-tag">&lt;/<span class="hljs-name">quark-count</span>&gt;</span>
</code></pre><h3>Named Slot</h3><p>Add <code class="">name</code> property to <code class="">slot</code> element in the component, and specify which slot to use by <code class="">slot</code> property.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;abc&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;abc&quot;</span>&gt;</span>my named slot<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-count</span>&gt;</span>
</code></pre><h3>Advanced Usage</h3><p>You can access the slot dom instance by <code class="">ref</code> and <code class="">onslotchange</code> event.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, createRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  slotRef = createRef()

  onSlotChange = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// got slot dom instance.</span>
    <span class="hljs-keyword">const</span> { current } = <span class="hljs-built_in">this</span>.slotRef
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;abc&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{this.slotRef}</span> <span class="hljs-attr">onslotchange</span>=<span class="hljs-string">{this.onSlotChange}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><p>For more exmaples of <code class="">slot</code> you can refer to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots">this article</a>.</p>`,12),c=[e],m={},u="",d=a({__name:"slot.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(t(),n("div",p,c))}});export{d as default,u as excerpt,m as frontmatter};
