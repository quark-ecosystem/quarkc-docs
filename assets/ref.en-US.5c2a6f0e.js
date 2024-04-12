import{d as a,c as n,b as t,o as l}from"./vue.69b62733.js";const p={class:"markdown-body"},e=t(`<h2>Ref</h2><p>Access <code class="">dom</code> instance by <code class="">ref</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property, state, createRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  <span class="hljs-attr">inputRef</span>: <span class="hljs-built_in">any</span> = createRef()

  handleFocus = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// click to focus on input manually</span>
    <span class="hljs-built_in">this</span>.inputRef.current.focus()
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{this.inputRef}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.handleFocus}</span>&gt;</span>manually focus on input<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u{1F389}Congratulations! You have got all the basics of Quark. Let us have a try ~</p><p><a href="#/zh-CN/docs/example">Great Examples</a></p>`,5),c=[e],i={},j="",m=a({__name:"ref.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),n("div",p,c))}});export{m as default,j as excerpt,i as frontmatter};
