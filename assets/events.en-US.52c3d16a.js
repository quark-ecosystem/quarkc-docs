import{d as n,c as a,b as u,o as t}from"./vue.ecdbeed1.js";const l={class:"markdown-body"},p=u(`<h2>Events</h2><h3>\u539F\u751F\u4E8B\u4EF6</h3><p>\u901A\u8FC7 <code class="">onXXX</code> \u7684\u65B9\u5F0F\u76D1\u542C\u539F\u751F\u4E8B\u4EF6\u3002</p><pre><code class="language-jsx">import { QuarkElement, customElement } from &quot;quarkc&quot;

@customElement({ tag: &quot;quark-input&quot;, style })
class Input extends QuarkElement {

  onClick = () =&gt; {
    console.log(&quot;\u6309\u94AE\u88AB\u70B9\u51FB\u201C)
  }

  onInput = () =&gt; {
    console.log(&quot;input \u4E8B\u4EF6\u201C)
  }

  render() {
    return (
      &lt;div&gt;
        &lt;button onClick={this.onClick}&gt;Click&lt;/button&gt;
        &lt;input onInput={this.onInput}&gt;&lt;/input&gt;
      &lt;/div&gt;
    )
  }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u901A\u8FC7 <code class="">$emit</code> \u53D1\u9001\u4E8B\u4EF6\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-input&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  onInput = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.$emit(<span class="hljs-string">&quot;input&quot;</span>, {
      <span class="hljs-attr">detail</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;xxx&#39;</span>,
      },
    })
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">onInput</span>=<span class="hljs-string">{this.onInput}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u7136\u540E\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u4E0A\u7ED1\u5B9A\u4E8B\u4EF6\uFF1A</p><pre><code class="language-tsx"><span class="hljs-comment">/**Vue\u4E2D*/</span>
&lt;quark-input <span class="hljs-meta">@input</span>=<span class="hljs-string">&quot;this.onInput&quot;</span> id=<span class="hljs-string">&quot;quark-input&quot;</span>/&gt;
</code></pre><p>\u6216\u8005</p><pre><code class="language-tsx"><span class="hljs-comment">/**\u5176\u5B83\u4EFB\u4F55\u6846\u67B6\u6216\u8005\u65E0\u6846\u67B6\u4E2D*/</span>
<span class="hljs-keyword">const</span> myInputElement = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;quark-input&quot;</span>)
myInputElement.addEventListener(<span class="hljs-string">&#39;input&#39;</span>, <span class="hljs-function">(<span class="hljs-params">evt</span>) =&gt;</span> {})
</code></pre><p>\u901A\u8FC7 <code class="">this.$emit</code> \u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C<code class="">emit</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u4E8B\u4EF6\u540D\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4F20\u9012\u7684\u53C2\u6570\u3002\u53EF\u901A\u8FC7 <code class="">evt.detail</code> \u83B7\u53D6\u5230\u4F20\u9012\u7684\u6570\u636E\u3002</p>`,12),e=[p],h={},E="",d=n({__name:"events.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(t(),a("div",l,e))}});export{d as default,E as excerpt,h as frontmatter};
