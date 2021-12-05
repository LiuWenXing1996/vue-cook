# 组件渲染机制

Vue中有一个内置组件`<component>`，我们使用它就可以达到动态渲染组件的目的。假设已经有了这样一个组件，它可以接收一个名为`msg`的属性，一个名为`btnCilck`的事件，一个名为`btnText`的插槽

@[code vue](../.vuepress/components/demos/Foo.vue)

正常的使用方式如下

@[code vue](../.vuepress/components/demos/UseFoo.vue)

效果如下

<DemosUseFoo />

使用`<component>`来选渲染它

@[code vue](../.vuepress/components/demos/UseComponentRenderFoo.vue)

效果如下

<DemosUseComponentRenderFoo />

虽然上述效果和正常使用组件得效果一致了，但是这样还不行，因为上述方式在传入属性、事件以及插槽的时候，直接指定了属性名称、事件名称和插槽名称。我们需要找到一个可以动态绑定这些名称的方式，恰巧的是，Vue天然支持了这种方式，我们改造一下之前代码，如下

@[code vue](../.vuepress/components/demos/UseComponentRenderFooWithDynamicName.vue)

效果如下

<DemosUseComponentRenderFooWithDynamicName />

现在我们已经可以动态绑定组件的属性、事件以及插槽了，这时候我们可以很容易的写出一个`ComponentRender`,如下

@[code vue](../.vuepress/components/demos/ComponentRender.vue)

用它渲染一个使用`Foo`的示例

@[code vue](../.vuepress/components/demos/UseComponentRenderRenderFoo.vue)

效果如下

<DemosUseComponentRenderRenderFoo />

此时还有一个问题，就是在绑定对应插槽的时候，传入的子组件怎么动态渲染的问题。这就需要`ComponentRender`可以递归的渲染自己，我们再次修改下代码

@[code vue](../.vuepress/components/demos/ComponentRendeWithRecursion.vue)

用它渲染一个使用`Foo`的示例

@[code vue](../.vuepress/components/demos/UseComponentRenderRenderFooWithRecursion.vue)

效果如下

<DemosUseComponentRenderRenderFooWithRecursion />

组件的渲染机制就是这样，后面再通过一定的方式将`IRenderConfig`拆分为`IComponentMaker`和`IComponentConfig`，将无法转成字符串的部分放入`IComponentMaker`,如`component`这样类型的字段，将其他可以持久化存储的字段放入`IComponentConfig`,如`props`等。这样，就可以通过动态的配置，然后动态的渲染组件了。