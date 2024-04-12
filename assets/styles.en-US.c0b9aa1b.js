import{d as a,c as n,b as l,o as e}from"./vue.9d8aef45.js";const t={class:"markdown-body"},p=l(`<h2>Styles</h2><h3>Independent CSS File</h3><p><code class="">Quarkc</code> supports using independent <code class="">CSS</code> file to development, you only need to pass the <code class="">CSS</code> file\u2019s content as <code class="">style</code> property\u2019s value to <code class="">@customElement</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;my-element&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyElement</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre><p>index.css\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:host</span> <span class="hljs-selector-class">.quark_count_button</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">cursor</span>: unset;
}

<span class="hljs-selector-pseudo">:host</span>(<span class="hljs-selector-attr">[disabled]</span>) {
  <span class="hljs-attribute">cursor</span>: not-allowed;
  <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.68</span>;
  user-select: none;
}
</code></pre><p>you may need a plugin to import <code class="">css</code> files, such as <a href="https://www.npmjs.com/package/rollup-plugin-import-css">rollup-plugin-import-css</a></p><h3>CSS In JS</h3><p>Write styles directly in the component.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> style = {
      <span class="hljs-attr">width</span>: <span class="hljs-string">&quot;100%&quot;</span>,
      <span class="hljs-attr">marginTop</span>: <span class="hljs-string">&quot;10px&quot;</span>
    }

    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{style}</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    );
  }
}
</code></pre><p>recommend using the independent <code class="">css</code> file to develop.</p><h3>Theme</h3><p>You can use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">custom properties</a> to customize the theme.</p><p>index.css\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:host</span> <span class="hljs-selector-class">.quark_count_button</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--your-primary-color, red);
}

<span class="hljs-selector-pseudo">:host</span>(<span class="hljs-selector-attr">[disabled]</span>) {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--your-disable-color, gray);
}
</code></pre>`,15),c=[p],d={},i="",j=a({__name:"styles.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(e(),n("div",t,c))}});export{j as default,i as excerpt,d as frontmatter};
