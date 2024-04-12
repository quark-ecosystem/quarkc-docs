import{d as a,c as n,b as l,o as t}from"./vue.9d8aef45.js";const p={class:"markdown-body"},e=l(`<h2>Events</h2><h3>Native Events</h3><p>By prefixing the native event name with word <code class="">on</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  onClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;btn clicked&quot;</span>)
  }

  onInput = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;input event&quot;</span>)
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
</code></pre><h3>Custom Events</h3><p>By using instance method <code class="">$emit</code>. The first parameter is name of the event and the second parameter is the data to be passed. The passed data can be accessed via <code class="">event.detail</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  onInput = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u2757 If your custom element will only be used as an internal component in Quarkc,</span>
    <span class="hljs-comment">// you should avoid to use event name like \`custom-event\`</span>
    <span class="hljs-keyword">const</span> data = {}
    <span class="hljs-built_in">this</span>.$emit(<span class="hljs-string">&quot;customEvent&quot;</span>, {
      <span class="hljs-attr">detail</span>: data,
      <span class="hljs-comment">// ...other event properties like \`bubbles\` goes here...</span>
    })
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">onInput</span>=<span class="hljs-string">{this.onInput}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span></span>
    )
  }
}
</code></pre><p>Then bind event listeners on your custom element:</p><h4>Vue</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</code></pre><h4>Quarkc</h4><p>\u2757Unlike Vue, hyphens in custom event names are not supported under the ground (when using <code class="">$emit</code>).</p><p>\u2757Unlike React, custom event names will not be decapitalized.</p><pre><code class="language-tsx"><span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input-parent&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkInputParent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  handler = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(e.detail.value)
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// onCustomEvent \u274C For this use-case, use \`CustomEvent\` as \`$emit\` name</span>
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;quark-input&quot;</span> <span class="hljs-attr">oncustomEvent</span>=<span class="hljs-string">{this.handler}</span> /&gt;</span></span>
    )
  }
}
</code></pre><h4>Pure JS</h4><pre><code class="language-ts"><span class="hljs-keyword">const</span> myInputElement = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;quark-input&quot;</span>)
myInputElement.addEventListener(<span class="hljs-string">&#39;customEvent&#39;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(e.detail.value)
})
</code></pre>`,18),c=[e],i={},j="",m=a({__name:"events.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(t(),n("div",p,c))}});export{m as default,j as excerpt,i as frontmatter};
