import{d as a,c as n,b as l,o as t}from"./vue.01a95355.js";const p={class:"markdown-body"},c=l(`<h2>Slot \u63D2\u69FD</h2><h3>\u9ED8\u8BA4\u63D2\u69FD</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
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
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span>&gt;</span>\u9ED8\u8BA4\u63D2\u69FD<span class="hljs-tag">&lt;/<span class="hljs-name">quark-count</span>&gt;</span>
</code></pre><h3>\u5177\u540D\u63D2\u69FD</h3><p>\u7EC4\u4EF6\u5185\u90E8\u7ED9 <code class="">slot</code> \u6DFB\u52A0 <code class="">name</code>\uFF0C\u5916\u90E8\u4F7F\u7528\u65F6\u6307\u5B9A <code class="">name</code>\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
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
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;abc&quot;</span>&gt;</span>\u6211\u662F\u5177\u540D\u63D2\u69FD<span class="hljs-tag">&lt;/<span class="hljs-name">quark-count</span>&gt;</span>
</code></pre><h3>\u9AD8\u7EA7\u6280\u5DE7</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code class="">onslotchange</code> \u4E8B\u4EF6\u83B7\u53D6\u5230 <code class="">slot</code> \u6302\u8F7D\u5B8C\u6210\u65F6\u673A\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, createRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  slotRef = createRef()

  onSlotChange = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u6B64\u5904\u5DF2\u83B7\u53D6\u5230 slot \u7684 dom \u5B9E\u4F8B\u3002</span>
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
</code></pre><p>\u66F4\u591A <code class="">slot</code> \u63D2\u69FD\u4F7F\u7528\u53EF\u53C2\u8003<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots">Slot</a></p>`,12),e=[c],j={},m="",d=a({__name:"slot.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(u,h)=>(t(),n("div",p,e))}});export{d as default,m as excerpt,j as frontmatter};
