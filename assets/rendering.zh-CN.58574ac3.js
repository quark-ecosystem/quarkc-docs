import{d as a,c as n,b as l,o as p}from"./vue.69b62733.js";const t={class:"markdown-body"},e=l(`<h2>\u6E32\u67D3</h2><p>\u4E3A\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A <code class="">render</code> \u65B9\u6CD5\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

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
</code></pre><p><code class="">Quarkc</code> \u4F7F\u7528 <code class="">tsx/jsx</code> \u6765\u4F5C\u4E3A <code class="">UI</code> \u8868\u8FBE\u5F0F\uFF0C\u56E0\u6B64 <code class="">render</code> \u51FD\u6570\u5185\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55 <code class="">tsx/jsx</code> \u8BED\u6CD5,\u5982\u6761\u4EF6\u6E32\u67D3\u3001\u4E09\u76EE\u8FD0\u7B97\u7B26\u7B49\u3002\u4F60\u53EF\u4EE5\u50CF\u5199 <code class="">React</code> \u7EC4\u4EF6\u4E00\u6837\uFF0C\u5199 <code class="">Quarkc</code> \u7EC4\u4EF6\u3002</p><h3>\u6761\u4EF6\u6E32\u67D3\uFF1A</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyElement</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  isShow = <span class="hljs-literal">false</span> <span class="hljs-comment">// class \u5199\u6CD5\uFF0C\u5185\u90E8\u79C1\u6709\u53D8\u91CF\uFF0C\u4E0D\u5C5E\u4E8E state/property\uFF08\u65E0\u54CD\u5E94\u5F0F\uFF09</span>

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
</code></pre><h3>\u4E09\u76EE\u8FD0\u7B97\u7B26</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyCount</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  count = <span class="hljs-number">0</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count &gt; 0 ? &quot;More&quot; : &quot;Less&quot;}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><h3>\u5217\u8868\u6E32\u67D3</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

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
</code></pre>`,10),c=[e],j={},m="",d=a({__name:"rendering.zh-CN",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(p(),n("div",t,c))}});export{d as default,m as excerpt,j as frontmatter};
