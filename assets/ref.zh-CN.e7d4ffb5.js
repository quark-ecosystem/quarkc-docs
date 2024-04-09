import{d as a,c as n,b as t,o as l}from"./vue.274a502d.js";const p={class:"markdown-body"},e=t(`<h2>Ref</h2><p>\u901A\u8FC7 <code class="">ref</code> \u83B7\u53D6 <code class="">dom</code> \u8282\u70B9\u5B9E\u4F8B\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property, state, createRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  <span class="hljs-attr">inputRef</span>: <span class="hljs-built_in">any</span> = createRef()

  handleFocus = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.inputRef.current.focus() <span class="hljs-comment">// \u70B9\u51FB\u624B\u52A8\u805A\u7126 input \u6846</span>
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{this.inputRef}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.handleFocus}</span>&gt;</span>\u81EA\u5DF1\u8F93\u5165\u6846\u805A\u7126<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u597D\u4E86\uFF0C\u81F3\u6B64\u60A8\u5DF2\u7ECF\u5B66\u5B8C\u4E86\u6709\u5173\u4E8E Quarkc \u7684\u76F8\u5173\u7528\u6CD5\u3002\u8D76\u7D27\u53BB\u8BD5\u4E00\u8BD5\u5427\uFF5E</p><p><a href="#/zh-CN/docs/example">\u4F18\u79C0\u6848\u4F8B\u53C2\u8003</a></p>`,5),u=[e],j={},i="",m=a({__name:"ref.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(l(),n("div",p,u))}});export{m as default,i as excerpt,j as frontmatter};
