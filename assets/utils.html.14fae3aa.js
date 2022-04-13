import{_ as c,r as l,c as p,b as n,a as s,w as t,F as i,e as a,d as e,o as d}from"./app.8fafd536.js";const r={},u=a(`<h1 id="\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177" aria-hidden="true">#</a> \u5DE5\u5177</h1><h2 id="addcomponentconfig" tabindex="-1"><a class="header-anchor" href="#addcomponentconfig" aria-hidden="true">#</a> addComponentConfig</h2><p>\u4E3A\u7236\u7EC4\u4EF6\u4E2D\u7684\u67D0\u4E00\u4E2A\u63D2\u69FD\u6DFB\u52A0\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>parentComponent</code> - <code>IComponentConfig</code></li><li><code>childComponent</code> - <code>IComponentConfig</code></li><li><code>slotName</code> - <code>string</code></li></ul></li></ul><h2 id="createcookeditorstate" tabindex="-1"><a class="header-anchor" href="#createcookeditorstate" aria-hidden="true">#</a> createCookEditorState</h2><p>\u521B\u5EFA\u4E00\u4E2A\u7F16\u8F91\u5668\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u7528\u4E8E<code>&lt;cook-editor&gt;</code>,\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>state</code> - <code>ICookEditorStateOptions | undefined</code><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ICookEditorStateOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    layout<span class="token operator">?</span><span class="token operator">:</span> ISplitLayout<span class="token punctuation">;</span>
    pages<span class="token operator">?</span><span class="token operator">:</span> IPage<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    makerList<span class="token operator">?</span><span class="token operator">:</span> IResourceMaker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>\u5B83\u7684\u9ED8\u8BA4\u503C\u662F\u4E0B\u9762\u8FD9\u4E2A<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
    makerList<span class="token operator">:</span> defaultMakerList<span class="token punctuation">,</span>
    pages<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    layout<span class="token operator">:</span> defaultSplitLayout<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>ICookEditorState</code></li></ul><h2 id="createcookplayerstate" tabindex="-1"><a class="header-anchor" href="#createcookplayerstate" aria-hidden="true">#</a> createCookPlayerState</h2><p>\u521B\u5EFA\u4E00\u4E2A\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u7528\u4E8E<code>&lt;cook-player&gt;</code>,\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>state</code> - <code>ICookPlayerStateOptions</code> \u5176\u4E2D\uFF0C<code>makerList</code>\u7684\u9ED8\u8BA4\u503C\u662F<code>defaultMakerList</code><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ICookPlayerStateOptions</span> <span class="token punctuation">{</span>
    page<span class="token operator">:</span> IPage<span class="token punctuation">,</span>
    makerList<span class="token operator">?</span><span class="token operator">:</span> IResourceMaker<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>ICookPlayerState</code></li></ul><h2 id="defaultmakerlist" tabindex="-1"><a class="header-anchor" href="#defaultmakerlist" aria-hidden="true">#</a> defaultMakerList</h2><p>\u9ED8\u8BA4\u7684\u8D44\u6E90\u5217\u8868</p><ul><li><strong>\u7C7B\u578B</strong> <code>IResourceMaker[]</code><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultMakerList<span class="token operator">:</span> IResourceMaker<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  PageComponentTreeMaker<span class="token punctuation">,</span>
  PageEditorMaker<span class="token punctuation">,</span>
  ComponentEditorMaker<span class="token punctuation">,</span>
  ResourcePanelMaker<span class="token punctuation">,</span>
  RootAppMaker
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h2 id="defaultsplitlayout" tabindex="-1"><a class="header-anchor" href="#defaultsplitlayout" aria-hidden="true">#</a> defaultSplitLayout</h2><p>\u9ED8\u8BA4\u7684\u5E03\u5C40</p><ul><li><strong>\u7C7B\u578B</strong> <code>ISplitLayout</code><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> resourcePanelConfig <span class="token operator">=</span> <span class="token function">makeDefaultPanelConfig</span><span class="token punctuation">(</span>ResourcePanelMaker<span class="token punctuation">)</span>
resourcePanelConfig<span class="token punctuation">.</span>alwaysOpen <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> defaultSplitLayout<span class="token operator">:</span> ISplitLayout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;left&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">makeDefaultPanelConfig</span><span class="token punctuation">(</span>PageComponentTreeMaker<span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;center&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;bottom&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      resourcePanelConfig
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;right&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">makeDefaultPanelConfig</span><span class="token punctuation">(</span>ComponentEditorMaker<span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ul><h2 id="definecomponentmaker" tabindex="-1"><a class="header-anchor" href="#definecomponentmaker" aria-hidden="true">#</a> defineComponentMaker</h2><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6\u8D44\u6E90</p>`,18),k=a(`<li><p><strong>\u53C2\u6570</strong></p><ul><li><code>maker</code> - <code>IComponentMakerOptions</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">IComponentMakerOptions</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>IComponentMaker<span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><code>maker.name</code> - <code>string</code> \u8D44\u6E90\u540D\u79F0\uFF0C\u540C\u4E00\u4E2A\u8D44\u6E90\u5305\u4E0B\u540C\u4E00\u4E2A\u7C7B\u578B\u7684\u8D44\u6E90\uFF0C\u540D\u79F0\u4E4B\u95F4\u4E0D\u80FD\u91CD\u590D</li><li><code>maker.pkg</code> - <code>string</code> \u8D44\u6E90\u5305\u540D\u79F0\uFF0C\u4E0D\u80FD\u91CD\u590D\u3002\u901A\u8FC7<code>pkg</code>,<code>type</code>\u4EE5\u53CA<code>name</code>\u4FDD\u8BC1\u4E00\u4E2A\u8D44\u6E90\u7684\u552F\u4E00\u6027</li><li><code>maker.make</code> - <code>(cookState: ICookState, componentConfig: IComponentConfig) =&gt; Component</code> \u751F\u6210\u51FD\u6570\uFF0C\u5B83\u662F\u5C06\u7EC4\u4EF6\u914D\u7F6E\u8F6C\u6362\u6210\u7EC4\u4EF6\u7684\u6865\u6881\u3002</li><li><code>maker.install</code> - <code>undefined | (cookState: ICookState) =&gt; void</code> \u5B89\u88C5\u51FD\u6570\uFF0C\u8D44\u6E90\u5728\u88AB\u653E\u5165<code>cookState</code>\u7684\u65F6\u5019\u89E6\u53D1\uFF0C\u53EF\u4EE5\u7528\u6765\u521D\u59CB\u5316\u4E00\u4E9B\u9ED8\u8BA4\u64CD\u4F5C</li><li><code>maker.makePropOptions</code> - <code>undefined | (cookState: ICookState, componentConfig: IComponentConfig)</code> \u751F\u6210\u7EC4\u4EF6\u8D44\u6E90\u5C5E\u6027\u914D\u7F6E\u9879</li><li><code>maker.makeEventOptions</code> - <code>undefined | (cookState: ICookState, componentConfig: IComponentConfig)</code> \u751F\u6210\u7EC4\u4EF6\u8D44\u6E90\u63D2\u69FD\u914D\u7F6E\u9879</li><li><code>maker.makeSlotOptions</code> - <code>undefined | (cookState: ICookState, componentConfig: IComponentConfig)</code> \u751F\u6210\u7EC4\u4EF6\u8D44\u6E90\u4E8B\u4EF6\u914D\u7F6E\u9879</li></ul></li><li><p><strong>\u8FD4\u56DE</strong> <code>IComponentMaker</code></p></li>`,2),g=n("p",null,[n("strong",null,"\u7528\u6CD5")],-1),m=e("\u53C2\u7167 "),f=e("\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),h=n("h2",{id:"definelogicmaker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#definelogicmaker","aria-hidden":"true"},"#"),e(" defineLogicMaker")],-1),b=n("p",null,"\u81EA\u5B9A\u4E49\u4E00\u4E2A\u903B\u8F91\u8D44\u6E90",-1),C=a(`<li><p><strong>\u53C2\u6570</strong></p><ul><li><code>maker</code> - <code>ILogicMakerOptions</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ILogicMakerOptions</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>ILogicMaker<span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><code>maker.name</code> - <code>string</code> \u8D44\u6E90\u540D\u79F0\uFF0C\u540C\u4E00\u4E2A\u8D44\u6E90\u5305\u4E0B\u540C\u4E00\u4E2A\u7C7B\u578B\u7684\u8D44\u6E90\uFF0C\u540D\u79F0\u4E4B\u95F4\u4E0D\u80FD\u91CD\u590D</li><li><code>maker.pkg</code> - <code>string</code> \u8D44\u6E90\u5305\u540D\u79F0\uFF0C\u4E0D\u80FD\u91CD\u590D\u3002\u901A\u8FC7<code>pkg</code>,<code>type</code>\u4EE5\u53CA<code>name</code>\u4FDD\u8BC1\u4E00\u4E2A\u8D44\u6E90\u7684\u552F\u4E00\u6027</li><li><code>maker.make</code> - <code>(cookState: ICookState, logicConfig: ILogicConfig) =&gt; Function</code> \u751F\u6210\u51FD\u6570\uFF0C\u5B83\u662F\u5C06\u903B\u8F91\u914D\u7F6E\u8F6C\u6362\u6210<code>Function</code>\u7684\u6865\u6881\u3002</li><li><code>maker.install</code> - <code>undefined | (cookState: ICookState) =&gt; void</code> \u5B89\u88C5\u51FD\u6570\uFF0C\u8D44\u6E90\u5728\u88AB\u653E\u5165<code>cookState</code>\u7684\u65F6\u5019\u89E6\u53D1\uFF0C\u53EF\u4EE5\u7528\u6765\u521D\u59CB\u5316\u4E00\u4E9B\u9ED8\u8BA4\u64CD\u4F5C</li><li><code>maker.makePropOptions</code> - <code>undefined | (cookState: ICookState, logicConfig: T) =&gt; string[]</code> \u751F\u6210\u903B\u8F91\u8D44\u6E90\u5C5E\u6027\u914D\u7F6E\u9879</li></ul></li><li><p><strong>\u8FD4\u56DE</strong> <code>ILogicMaker</code></p></li>`,2),y=n("p",null,[n("strong",null,"\u7528\u6CD5")],-1),I=e("\u53C2\u7167 "),_=e("\u81EA\u5B9A\u4E49\u903B\u8F91"),S=n("h2",{id:"definepanelmaker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#definepanelmaker","aria-hidden":"true"},"#"),e(" definePanelMaker")],-1),v=n("p",null,"\u81EA\u5B9A\u4E49\u4E00\u4E2A\u4EA4\u4E92\u9762\u677F\u8D44\u6E90",-1),P=a(`<li><p><strong>\u53C2\u6570</strong></p><ul><li><code>maker</code> - <code>IPanelMakerOptions</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">IPanelMakerOptions</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>IPanelMaker<span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><code>maker.name</code> - <code>string</code> \u8D44\u6E90\u540D\u79F0\uFF0C\u540C\u4E00\u4E2A\u8D44\u6E90\u5305\u4E0B\u540C\u4E00\u4E2A\u7C7B\u578B\u7684\u8D44\u6E90\uFF0C\u540D\u79F0\u4E4B\u95F4\u4E0D\u80FD\u91CD\u590D</li><li><code>maker.pkg</code> - <code>string</code> \u8D44\u6E90\u5305\u540D\u79F0\uFF0C\u4E0D\u80FD\u91CD\u590D\u3002\u901A\u8FC7<code>pkg</code>,<code>type</code>\u4EE5\u53CA<code>name</code>\u4FDD\u8BC1\u4E00\u4E2A\u8D44\u6E90\u7684\u552F\u4E00\u6027</li><li><code>maker.make</code> - <code>(cookState: ICookState, panelConfig: IPanelConfig) =&gt; Component</code> \u751F\u6210\u51FD\u6570\uFF0C\u5B83\u662F\u5C06\u4EA4\u4E92\u9762\u677F\u914D\u7F6E\u8F6C\u6362\u6210\u9762\u677F\u7684\u6865\u6881\u3002</li><li><code>maker.install</code> - <code>undefined | (cookState: ICookState) =&gt; void</code> \u5B89\u88C5\u51FD\u6570\uFF0C\u8D44\u6E90\u5728\u88AB\u653E\u5165<code>cookState</code>\u7684\u65F6\u5019\u89E6\u53D1\uFF0C\u53EF\u4EE5\u7528\u6765\u521D\u59CB\u5316\u4E00\u4E9B\u9ED8\u8BA4\u64CD\u4F5C</li><li><code>makeTitle</code> - <code>undefined | (cookState: ICookState, panelConfig: IPanelConfig) =&gt; string</code> \u751F\u6210\u4E00\u4E2A\u9762\u677F\u7684\u6807\u9898</li><li><code>maker.onClose</code> - <code>undefined | (cookState: ICookState, panelConfig: IPanelConfig) =&gt; void</code> \u9762\u677F\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</li><li><code>maker.onOpen</code> - <code>undefined | (cookState: ICookState, panelConfig: IPanelConfig) =&gt; void</code> \u9762\u677F\u6253\u5F00\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</li></ul></li><li><p><strong>\u8FD4\u56DE</strong> <code>IPanelMaker</code></p></li>`,2),x=n("p",null,[n("strong",null,"\u7528\u6CD5")],-1),M=e("\u53C2\u7167 "),L=e("\u81EA\u5B9A\u4E49\u4EA4\u4E92\u9762\u677F"),w=a('<h2 id="findcomponentconfig" tabindex="-1"><a class="header-anchor" href="#findcomponentconfig" aria-hidden="true">#</a> findComponentConfig</h2><p>\u67E5\u627E\u4E00\u4E2A\u7EC4\u4EF6\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>parent</code> - <code>IComponentConfig</code></li><li><code>componentUid</code> - <code>string</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>IComponentConfig | undefined</code></li></ul><h2 id="findpanelconfig" tabindex="-1"><a class="header-anchor" href="#findpanelconfig" aria-hidden="true">#</a> findPanelConfig</h2><p>\u4ECE\u5F53\u524D\u7F16\u8F91\u5668\u72B6\u6001\u4E2D\u627E\u5230\u4E00\u4E2A\u9762\u677F\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>cookEditorState</code> - <code>ICookEditorState</code></li><li><code>panelUid</code> - <code>string</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>IPanelConfig | undefined</code></li></ul><h2 id="islogicconfig" tabindex="-1"><a class="header-anchor" href="#islogicconfig" aria-hidden="true">#</a> isLogicConfig</h2><p>\u81EA\u5B9A\u4E49\u7C7B\u578B\u5B88\u536B\uFF0C\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F<code>ILogicConfig</code>\u7C7B\u578B</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>config</code> - <code>any</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>boolean</code></li></ul><h2 id="layoutaddtab" tabindex="-1"><a class="header-anchor" href="#layoutaddtab" aria-hidden="true">#</a> layoutAddTab</h2><p>\u6253\u5F00\u4E00\u4E2A\u9762\u677F\uFF0C\u8BE5\u65B9\u6CD5\u540C\u65F6\u4F1A\u5C1D\u8BD5\u89E6\u53D1\u9762\u677F\u7684<code>onOpen</code>\u56DE\u8C03\u51FD\u6570</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>cookEditorState</code> - <code>ICookEditorState</code></li><li><code>panelConfig</code> - <code>IPanelConfig</code></li><li><code>splitLayoutPaneName</code> - <code>ISplitLayoutPaneName</code></li></ul></li></ul><h2 id="layputremovetab" tabindex="-1"><a class="header-anchor" href="#layputremovetab" aria-hidden="true">#</a> layputRemoveTab</h2><p>\u5173\u95ED\u4E00\u4E2A\u9762\u677F\uFF0C\u8BE5\u65B9\u6CD5\u540C\u65F6\u4F1A\u5C1D\u8BD5\u89E6\u53D1\u9762\u677F\u7684<code>onClose</code>\u56DE\u8C03\u51FD\u6570</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>cookEditorState</code> - <code>ICookEditorState</code></li><li><code>panelConfig</code> - <code>IPanelConfig</code></li></ul></li></ul><h2 id="logicrun" tabindex="-1"><a class="header-anchor" href="#logicrun" aria-hidden="true">#</a> logicRun</h2><p>\u8FD0\u884C\u4E00\u4E2A\u903B\u8F91\u914D\u7F6E\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C</p>',17),O=a(`<li><p><strong>\u53C2\u6570</strong></p><ul><li><code>cookState</code> - <code>ICookState</code></li><li><code>config</code> - <code>ILogicConfig</code></li><li><code>...payload</code> - <code>any[]</code> \u5269\u4F59\u53C2\u6570\uFF0C\u53EF\u4EE5\u4F20\u4EFB\u610F\u6570\u91CF\u7684\u53C2\u6570\uFF0C\u5B83\u4F1A\u539F\u5C01\u4E0D\u52A8\u4F20\u7ED9\u751F\u6210\u7684\u51FD\u6570<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> func <span class="token operator">=</span> maker<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>cookState<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
<span class="token keyword">let</span> returns <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">...</span>payload<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li><li><p><strong>\u8FD4\u56DE</strong> <code>Promise&lt;unknown&gt;</code> \u5728ts\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>logicRun&lt;T&gt;</code>\u6765\u6307\u5B9A\u8FD4\u56DE\u503C\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">logicRun</span><span class="token generic class-name"><span class="token operator">&lt;</span>IResultType<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>cookPlayerState<span class="token punctuation">,</span> logicConfig<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>`,2),E=n("p",null,[n("strong",null,"\u7528\u6CD5")],-1),q=e("\u53C2\u7167 "),R=e("\u81EA\u5B9A\u4E49\u903B\u8F91"),T=a('<h2 id="makedefaultcomponentconfig" tabindex="-1"><a class="header-anchor" href="#makedefaultcomponentconfig" aria-hidden="true">#</a> makeDefaultComponentConfig</h2><p>\u751F\u6210\u4E00\u4E2A\u9ED8\u8BA4\u7684\u7EC4\u4EF6\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>maker</code> - <code>IComponentMaker</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>IComponentConfig</code></li></ul><h2 id="makedefaultlogicconfig" tabindex="-1"><a class="header-anchor" href="#makedefaultlogicconfig" aria-hidden="true">#</a> makeDefaultLogicConfig</h2><p>\u751F\u6210\u4E00\u4E2A\u9ED8\u8BA4\u7684\u903B\u8F91\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>maker</code> - <code>ILogicMaker</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>ILogicConfig</code></li></ul><h2 id="makedefaultpanelconfig" tabindex="-1"><a class="header-anchor" href="#makedefaultpanelconfig" aria-hidden="true">#</a> makeDefaultPanelConfig</h2><p>\u751F\u6210\u4E00\u4E2A\u9ED8\u8BA4\u7684\u9762\u677F\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>maker</code> - <code>IPanelMaker</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>IPanelConfig</code></li></ul><h2 id="parselogicconfig" tabindex="-1"><a class="header-anchor" href="#parselogicconfig" aria-hidden="true">#</a> parseLogicConfig</h2><p>\u4ECE\u4E00\u4E2Ajson\u5B57\u7B26\u4E32\u4E2D\u89E3\u6790\u51FA\u6765\u4E00\u4E2A\u903B\u8F91\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>jsonString</code> - <code>string | undefined</code></li></ul></li><li><strong>\u8FD4\u56DE</strong> <code>ILogicConfig | undefined</code></li></ul><h2 id="removecomponentconfig" tabindex="-1"><a class="header-anchor" href="#removecomponentconfig" aria-hidden="true">#</a> removeComponentConfig</h2><p>\u79FB\u9664\u7236\u7EC4\u4EF6\u4E2D\u7684\u67D0\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u914D\u7F6E</p><ul><li><strong>\u53C2\u6570</strong><ul><li><code>parentComponent</code> - <code>IComponentConfig</code></li><li><code>childComponent</code> - <code>IComponentConfig</code></li><li><code>slotName</code> - <code>string</code></li></ul></li></ul>',15);function N(D,F){const o=l("RouterLink");return d(),p(i,null,[u,n("ul",null,[k,n("li",null,[g,n("p",null,[m,s(o,{to:"/guide/custom-component.html"},{default:t(()=>[f]),_:1})])])]),h,b,n("ul",null,[C,n("li",null,[y,n("p",null,[I,s(o,{to:"/guide/custom-logic.html"},{default:t(()=>[_]),_:1})])])]),S,v,n("ul",null,[P,n("li",null,[x,n("p",null,[M,s(o,{to:"/guide/custom-panel.html"},{default:t(()=>[L]),_:1})])])]),w,n("ul",null,[O,n("li",null,[E,n("p",null,[q,s(o,{to:"/guide/custom-logic.html"},{default:t(()=>[R]),_:1})])])]),T],64)}var j=c(r,[["render",N]]);export{j as default};