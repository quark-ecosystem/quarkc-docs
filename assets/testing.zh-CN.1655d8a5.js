import{d as a,c as n,b as t,o as p}from"./vue.02c93f74.js";const l={class:"markdown-body"},e=t(`<h2>\u6D4B\u8BD5</h2><p>\u5982\u60A8\u9700\u8981\u5BF9\u60A8\u7684\u7EC4\u4EF6\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u63A8\u8350 <a href="https://open-wc.org/docs/testing/testing-package/">@open-wc/testing</a> \u4F5C\u4E3A Web components \u7684\u6D4B\u8BD5\u6846\u67B6\uFF0C<code class="">@open-wc/testing</code>\u662F\u4E00\u4E2A\u4E13\u95E8\u9488\u5BF9 Web components \u7684\u6D4B\u8BD5\u5E93\u3002</p><p>\u4EE5\u4E00\u4E2A button \u7EC4\u4EF6\u4E3A\u4F8B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-button&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkButton</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>()
  <span class="hljs-keyword">type</span> = <span class="hljs-string">&quot;primary&quot;</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-button&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u5176\u5355\u6D4B\u7528\u4F8B\u5982\u4E0B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { expect, fixture } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@open-wc/testing&quot;</span>
<span class="hljs-keyword">import</span> sinon <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;sinon&quot;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;path/your-button-path&quot;</span>

<span class="hljs-keyword">const</span> data = {
  <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>,
}
<span class="hljs-keyword">let</span> el

describe(<span class="hljs-string">&quot;&lt;your-button&gt;&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {

  it(<span class="hljs-string">&quot;type attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;your-button type=<span class="hljs-subst">\${data.<span class="hljs-keyword">type</span>}</span>&gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/your-button&gt;\`</span>
    )

    expect(el.type).to.equal(data.type)

  })

})


</code></pre><p>\u66F4\u591A\u4F7F\u7528\u793A\u4F8B\uFF0C\u53EF\u53C2\u8003<a href="https://open-wc.org/docs/testing/testing-package/">Open Web Components \u5B98\u7F51</a></p>`,7),u=[e],j={},i="",d=a({__name:"testing.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,r)=>(p(),n("div",l,u))}});export{d as default,i as excerpt,j as frontmatter};
