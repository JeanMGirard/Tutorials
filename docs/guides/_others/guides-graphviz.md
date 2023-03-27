---
id: guide-graphviz
title: Graphviz
sidebar_label: Graphviz
---

## References
[The DOT Language](http://www.graphviz.org/doc/info/lang.html)
[Node, Edge and Graph Attributes](http://www.graphviz.org/doc/info/attrs.html)
[Node Shapes](http://www.graphviz.org/doc/info/shapes.html)
[Color Names](http://www.graphviz.org/doc/info/colors.html)


### graph
digraph: Graph has a general direction
graph: No direction
[strict] : This forbids the creation of multi-edges



### Defaults
digraph ExampleGraph{
    node [shape="box"];
    Edge [dir=none];
}

### Attributes  
[Docs](http://www.graphviz.org/doc/info/attrs.html)

**shape** : [box]
**dir**: [ ] direction
**label**:
**style**: [filled|bold|dotted]



## Resources
- [preview-dot](- [preview-dot](https://github.com/laingsimon/preview-dot)

## Exemples
----------
A -> {B C}
is equivalent to
A -> B
A -> C
------------
strict graph {
  a -- b
  a -- b
  b -- a [color=blue]
}
------------
### Inter-cluster relations
digraph G {
  compound=true;
  subgraph cluster0 {
    a -> b; a -> c; b -> d; c -> d;
  }
  subgraph cluster1 {
    e -> g; e -> f;
  }
  b -> f [lhead=cluster1];
  d -> e;
  c -> g [ltail=cluster0, lhead=cluster1];
  c -> e [ltail=cluster0];  
  d -> h;
}
