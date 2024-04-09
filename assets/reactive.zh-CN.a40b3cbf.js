import{d as a,c as u,b as n,o as l}from"./vue.63351e00.js";const p={class:"markdown-body"},t=n(`<h2>Reactive</h2><p>\u54CD\u5E94\u5F0F\u72B6\u6001\u3002</p><h2>\u5185\u90E8\u72B6\u6001 State</h2><p>\u7EC4\u4EF6\u5185\u90E8 <strong>\u54CD\u5E94\u5F0F\u6570\u636E</strong>\u3002</p><br><p>\u901A\u8FC7 <code class="">@state</code> \u4E3A\u4F60\u7EC4\u4EF6\u7684\u5185\u90E8\u72B6\u6001\u589E\u52A0\u54CD\u5E94\u5F0F\u7279\u6027\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, state} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@state</span>()
  count = <span class="hljs-number">0</span>

  click = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.click}</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u70B9\u51FB\u6309\u94AE\u540E\uFF0C\u7EC4\u4EF6\u5C06\u81EA\u52A8\u66F4\u65B0\u3002</p><h3>\u5185\u90E8\u4E0D\u9700\u8981\u54CD\u5E94\u5F0F\uFF1F</h3><p>\u5F53\u4F60\u4E0D\u9700\u8981\u54CD\u5E94\u5F0F\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes">ES6 \u4E2D\u7684 Class \u7C7B\u7684\u79C1\u6709\u53D8\u91CF</a>\u3002\u793A\u4F8B\uFF1A</p><pre><code class="language-js">@customElement({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  #height = <span class="hljs-number">0</span>
  #width

  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">height, width</span>)</span> {
    <span class="hljs-built_in">this</span>.#height = height
    <span class="hljs-built_in">this</span>.#width = width
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {<span class="hljs-comment">/**/</span>}
}
</code></pre><h2>\u5916\u90E8\u72B6\u6001 Props</h2><p>\u7EC4\u4EF6\u901A\u8FC7\u5C5E\u6027\u4ECE\u5916\u90E8\u4F20\u5165\u7684 <strong>\u54CD\u5E94\u5F0F\u6570\u636E</strong>\u3002</p><br><p>\u901A\u8FC7 <code class="">@property</code> \u88C5\u9970\u5668\u53EF\u4EE5\u4E3A\u4F60\u7684\u7EC4\u4EF6\u5C5E\u6027\u589E\u52A0\u54CD\u5E94\u5F0F\u5C5E\u6027\uFF0C<code class="">@property</code> \u652F\u6301\u901A\u8FC7\u53C2\u6570 <code class="">type</code> \u6765\u6807\u6CE8\u5C5E\u6027\u7C7B\u578B\uFF0C\u901A\u8FC7\u53C2\u6570 <code class="">attribute</code> \u6765\u6807\u8BB0\u5C5E\u6027\u540D</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Number</span>,
    <span class="hljs-attr">attribute</span>: <span class="hljs-string">&#39;count-number&#39;</span>
  })
  countNumber = <span class="hljs-number">0</span>

  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
  })
  disabled = <span class="hljs-literal">false</span>

  <span class="hljs-meta">@property</span>()
  text = <span class="hljs-string">&#39;&#39;</span>

  click = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span>(!disabled) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;count click&#39;</span>)
    }
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.click}</span>&gt;</span>{this.countNumber}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{this.text}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    )
  }
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> <span class="hljs-attr">count-number</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6211\u662F Quark \u8BA1\u7B97\u5668&quot;</span> <span class="hljs-attr">disabled</span>/&gt;</span>
</code></pre><p>\u5F53 <code class="">count-number</code>\u3001<code class="">text</code> \u6216\u8005 <code class="">disabled</code> \u5C5E\u6027\u53D8\u66F4\u540E\uFF0C\u7EC4\u4EF6\u5C06\u81EA\u52A8\u66F4\u65B0\u3002</p><ul><li>\u7531\u4E8E <code class="">HTML</code> \u5143\u7D20\u7684\u5C5E\u6027\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5185\u90E8\u7684\u5C5E\u6027\u9700\u8981\u6B63\u786E\u6807\u8BB0\u7C7B\u578B\uFF0C\u8FD9\u6837 <code class="">Quark</code> \u5E95\u5C42\u4F1A\u5E2E\u52A9\u505A\u7C7B\u578B\u8F6C\u6362\uFF0C\u9ED8\u8BA4 String \u7C7B\u578B</li></ul><p>\u7531\u4E8E <code class="">HTML</code> \u5143\u7D20\u7684\u5C5E\u6027\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\uFF0CQuarkc \u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u6765\u4E66\u5199\u7EC4\u4EF6\u5C5E\u6027</p><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7 attribute \u6765\u6807\u8BB0\u5C5E\u6027\u540D</p><pre><code class="language-tsx">  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">attribute</span>: <span class="hljs-string">&#39;count-number&#39;</span> <span class="hljs-comment">// \u6807\u8BB0\u5C5E\u6027\u540D</span>
  })
  countNumber = <span class="hljs-number">0</span> <span class="hljs-comment">// \u7EC4\u4EF6\u5185\u90E8\u4ECD\u53EF\u4EE5\u91C7\u7528\u9A7C\u5CF0\u547D\u540D</span>

  <span class="hljs-comment">// \u4F7F\u7528\u65F6\u901A\u8FC7 count-number \u4F20\u9012\u5C5E\u6027</span>
  &lt;quark-count count-<span class="hljs-built_in">number</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;
</code></pre><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u91C7\u7528\u5355\u8BCD\u62FC\u63A5\u65B9\u5F0F</p><pre><code class="language-tsx">  <span class="hljs-meta">@property</span>()
  countnumber = <span class="hljs-number">0</span> <span class="hljs-comment">// \u7EC4\u4EF6\u5185\u90E8\u5C5E\u6027\u91C7\u7528\u5355\u8BCD\u62FC\u63A5\uFF0C\u4E0D\u53EF\u4F7F\u7528\u9A7C\u5CF0</span>

  <span class="hljs-comment">// \u4F7F\u7528\u65F6\u901A\u8FC7 countnumber \u4F20\u9012\u5C5E\u6027\uFF0C\u5373\u8DDF\u7EC4\u4EF6\u5185\u90E8\u5C5E\u6027\u53D8\u91CF\u540D\u4FDD\u6301\u4E00\u81F4</span>
  &lt;quark-count countnumber=<span class="hljs-string">&quot;6&quot;</span> /&gt;
</code></pre><h3>\u9AD8\u7EA7\u6280\u5DE7</h3><p>\u9488\u5BF9\u6709\u4E9B\u7EC4\u4EF6\u9700\u8981\u4F20\u9012\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u573A\u666F\uFF0C\u53EF\u91C7\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><p>\u7EC4\u4EF6\u5185\u90E8\u66B4\u9732\u4E00\u4E2A <code class="">setData</code> \u65B9\u6CD5\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({<span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-picker&quot;</span>})
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyPicker</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  data = []

  <span class="hljs-function"><span class="hljs-title">setData</span>(<span class="hljs-params">data</span>)</span> {
    <span class="hljs-built_in">this</span>.data = data
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="hljs-comment">/***/</span>
    )
  }
}
</code></pre><p>\u4F7F\u7528\u65F6\uFF0C\u901A\u8FC7 <code class="">ref</code> \u62FF\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528\u66B4\u9732\u7684 <code class="">setData</code> \u65B9\u6CD5\u5373\u53EF\u5B8C\u6210\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u4F20\u9012\u3002</p><pre><code class="language-tsx"><span class="hljs-comment">// React \u793A\u4F8B\uFF1A</span>
() =&gt; {
  <span class="hljs-keyword">const</span> pickerRef = useRef(<span class="hljs-literal">null</span>)

  useEffect(<span class="hljs-function">() =&gt;</span> {

    pickerRef.current.setData([])

  }, [])

  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">my-picker</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span> /&gt;</span></span>
}
</code></pre><p><a href="https://github.com/hellof2e/quark-design/blob/main/packages/quarkd/src/cascadepicker/index.tsx">\u66F4\u591A\u4F7F\u7528\u6280\u5DE7\u53C2\u8003</a></p>`,31),c=[t],F={},E="",j=a({__name:"reactive.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),u("div",p,c))}});export{j as default,E as excerpt,F as frontmatter};
