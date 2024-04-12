import{d as a,c as n,b as l,o as u}from"./vue.02c93f74.js";const p={class:"markdown-body"},t=l(`<h2>\u4E8B\u4EF6\u5904\u7406</h2><h3>\u539F\u751F\u4E8B\u4EF6</h3><p>\u901A\u8FC7\u5728\u539F\u751F\u4E8B\u4EF6\u540D\u524D\u6DFB\u52A0 <code class="">on</code> \u524D\u7F00\u6765\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  onClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u6309\u94AE\u88AB\u70B9\u51FB&quot;</span>)
  }

  onInput = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;input\u4E8B\u4EF6&quot;</span>)
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.onClick}</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">onInput</span>=<span class="hljs-string">{this.onInput}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u901A\u8FC7\u4F7F\u7528\u5B9E\u4F8B\u65B9\u6CD5 <code class="">$emit</code>\u6765\u53D1\u9001\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E8B\u4EF6\u7684\u540D\u79F0\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4F20\u9012\u7684\u6570\u636E\u3002\u4F20\u9012\u7684\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 <code class="">event.detail</code> \u83B7\u53D6\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  onInput = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u2757 \u5982\u679C\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u53EA\u4F1A\u4F5C\u4E3A Quarkc \u5185\u90E8\u7EC4\u4EF6\u4F7F\u7528\uFF0C</span>
    <span class="hljs-comment">// \u4F60\u5E94\u8BE5\u907F\u514D\u4F7F\u7528\u8BF8\u5982 \`custom-event\` \u7684\u4E8B\u4EF6\u540D\u79F0</span>
    <span class="hljs-keyword">const</span> data = {}
    <span class="hljs-built_in">this</span>.$emit(<span class="hljs-string">&quot;customEvent&quot;</span>, {
      <span class="hljs-attr">detail</span>: data,
      <span class="hljs-comment">// ...\u5176\u4ED6\u4E8B\u4EF6\u5C5E\u6027\uFF0C\u4F8B\u5982 \`bubbles\` \u7B49\u7B49...</span>
    })
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">onInput</span>=<span class="hljs-string">{this.onInput}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u7136\u540E\u5728\u81EA\u5B9A\u4E49\u5143\u7D20\u4E0A\u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF1A</p><h4>Vue</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-input</span> @<span class="hljs-attr">custom-event</span>=<span class="hljs-string">&quot;handler&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;quark-input&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">handler</span>(<span class="hljs-params">e</span>)</span> {
        <span class="hljs-built_in">console</span>.log(e.detail.value);
      },
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h4>React</h4><pre><code class="language-tsx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> handler = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(e.detail.value);
  };
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-input</span> <span class="hljs-attr">onCustomEvent</span>=<span class="hljs-string">{handler}</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;quark-input&quot;</span> /&gt;</span></span>;
}
</code></pre><h4>Quarkc</h4><p>\u2757\u4E0D\u540C\u4E8EVue\uFF0C\u5728\u5E95\u5C42\uFF08\u4F7F\u7528<code class="">$emit</code>\u65F6\uFF09\u4E0D\u652F\u6301\u5E26\u6709\u8FDE\u5B57\u7B26\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u3002</p><p>\u2757\u4E0E\u539F\u751F\u4E8B\u4EF6\u4E0D\u540C\uFF0C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u4E0D\u4F1A\u88AB\u9996\u5B57\u6BCD\u5C0F\u5199\u5316\u5904\u7406\u3002</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input-parent&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkInputParent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  handler = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(e.detail.value)
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// onCustomEvent \u274C \u8FD9\u79CD\u60C5\u51B5\u9700\u8981\u5C06\`CustomEvent\`\u4F5C\u4E3A$emit\u7684\u4E8B\u4EF6\u540D</span>
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;quark-input&quot;</span> <span class="hljs-attr">oncustomEvent</span>=<span class="hljs-string">{this.handler}</span> /&gt;</span></span>
    )
  }
}
</code></pre><h4>Pure JS</h4><pre><code class="language-ts"><span class="hljs-keyword">const</span> myInputElement = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;quark-input&quot;</span>)
myInputElement.addEventListener(<span class="hljs-string">&#39;customEvent&#39;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(e.detail.value)
})
</code></pre>`,18),c=[t],j={},i="",E=a({__name:"events.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(u(),n("div",p,c))}});export{E as default,i as excerpt,j as frontmatter};
