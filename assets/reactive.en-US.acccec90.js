import{d as a,c as n,b as t,o as e}from"./vue.a41a18a8.js";const l={class:"markdown-body"},p=t(`<h2>Reactive</h2><p>Reactive state.</p><h3>Internal State</h3><p><strong>Reactive data</strong> within the component.</p><p>Use the <code class="">@state</code> decorator to add reactivity to your component\u2019s internal state.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, state} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

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
</code></pre><p>After clicking the button, the component will automatically update.</p><h3>No need for internal reactivity?</h3><p>When you don\u2019t need reactive variables, you can also use <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes">private variables in ES6 Class</a>. Example:</p><pre><code class="language-js">@customElement({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  #height = <span class="hljs-number">0</span>
  #width

  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">height, width</span>)</span> {
    <span class="hljs-built_in">this</span>.#height = height
    <span class="hljs-built_in">this</span>.#width = width
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {<span class="hljs-comment">/**/</span>}
}
</code></pre><h3>External State (Props)</h3><p><strong>Reactive data</strong> passed into the component through attributes.</p><p>Use the <code class="">@property</code> decorator to add reactive properties to your component. The <code class="">@property</code> decorator supports the <code class="">type</code> parameter to annotate property types and the <code class="">attribute</code> parameter to mark attribute names.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

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
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> <span class="hljs-attr">count-number</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;I&#39;m a Quark calculator&quot;</span> <span class="hljs-attr">disabled</span>/&gt;</span>
</code></pre><p>When the <code class="">count-number</code>, <code class="">text</code>, or <code class="">disabled</code> attributes change, the component will automatically update.</p><ul><li>Since HTML element attributes can only be strings, the component\u2019s internal properties need to be correctly marked with types, so Quark will help with type conversion. The default type is String.</li></ul><p>Since HTML element attributes are case-insensitive, Quarkc supports two ways to write component attributes:</p><ol><li>Use the <code class="">attribute</code> parameter to mark attribute names:</li></ol><pre><code class="language-tsx">  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">attribute</span>: <span class="hljs-string">&#39;count-number&#39;</span> <span class="hljs-comment">// Mark attribute name</span>
  })
  countNumber = <span class="hljs-number">0</span> <span class="hljs-comment">// The component&#39;s internal property can still use camelCase</span>

  <span class="hljs-comment">// Use count-number to pass the attribute when using the component</span>
  &lt;quark-count count-<span class="hljs-built_in">number</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;
</code></pre><ol start="2"><li>Use word concatenation:</li></ol><pre><code class="language-tsx">  <span class="hljs-meta">@property</span>()
  countnumber = <span class="hljs-number">0</span> <span class="hljs-comment">// The component&#39;s internal property uses word concatenation, not camelCase</span>

  <span class="hljs-comment">// Use countnumber to pass the attribute when using the component, keeping the attribute name consistent with the internal property variable name</span>
  &lt;quark-count countnumber=<span class="hljs-string">&quot;6&quot;</span> /&gt;
</code></pre><h3>Advanced Techniques</h3><p>For scenarios where some components need to pass complex data types, you can use the following method:</p><p>Expose a <code class="">setData</code> method within the component.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

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
</code></pre><p>When using the component, get the component instance through <code class="">ref</code>, and then call the exposed <code class="">setData</code> method to complete the complex data type transfer.</p><pre><code class="language-tsx"><span class="hljs-comment">// React example:</span>
() =&gt; {
  <span class="hljs-keyword">const</span> pickerRef = useRef(<span class="hljs-literal">null</span>)

  useEffect(<span class="hljs-function">() =&gt;</span> {

    pickerRef.current.setData([])

  }, [])

  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">my-picker</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span> /&gt;</span></span>
}
</code></pre><p><a href="https://github.com/hellof2e/quark-design/blob/main/packages/quarkd/src/cascadepicker/index.tsx">For more usage techniques, refer to this example</a></p>`,29),c=[p],u={},m="",j=a({__name:"reactive.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(e(),n("div",l,c))}});export{j as default,m as excerpt,u as frontmatter};
