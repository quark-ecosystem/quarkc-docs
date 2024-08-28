import{d as a,c as n,b as l,o as p}from"./vue.724a6942.js";const t={class:"markdown-body"},e=l(`<h2>\u7EC4\u4EF6\u4E4B\u95F4\u590D\u6742\u6570\u636E\u4F20\u9012</h2><p>\u7236\u7EC4\u4EF6\u7684\u6570\u636E</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, state } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkc&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./child.tsx&#39;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&#39;parent-ele&#39;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dad</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  obj = { <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">arr</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>] };

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">child-ele</span> <span class="hljs-attr">obj</span>=<span class="hljs-string">{this.obj}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">child-ele</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }
}
</code></pre><p>\u5B50\u7EC4\u4EF6\u901A\u8FC7 <code class="">internalProp</code> \u63A5\u6536</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, internalProp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;quarkc&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./child.tsx&#39;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&#39;child-ele&#39;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dad</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@internalProp</span>()
  obj;

  handleClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u67E5\u770B\u6253\u5370\u6570\u636E</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;data from parent&#39;</span>, <span class="hljs-built_in">this</span>.obj);
  };

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.handleClick}</span>&gt;</span>Click to get data<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;
  }
}

</code></pre><p>Live Demo\uFF1A<a href="https://stackblitz.com/edit/vite-quarkc-internalprop?file=src%2Findex.tsx,src%2Fchild.tsx">https://stackblitz.com/edit/vite-quarkc-internalprop?file=src%2Findex.tsx,src%2Fchild.tsx</a></p>`,6),c=[e],j={},u="",d=a({__name:"innerprop.zh-CN",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(p(),n("div",t,c))}});export{d as default,u as excerpt,j as frontmatter};
