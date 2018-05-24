---
layout: default
title: Jayanth Koushik
---

<p>
  {% include icon_link.html href="mailto:jnkoushik@gmail.com"
     icon="envelope" itype="fa" %}
  {% include icon_link.html href="https://www.github.com/jayanthkoushik"
     icon="github" itype="fa" %}
  {% include icon_link.html
     href="https://scholar.google.com/citations?user=XTqgW-EAAAAJ"
     icon="google-scholar-square" itype="ai" %}
  {% include icon_link.html href="https://twitter.com/jayanth_koushik"
     icon="twitter" itype="fa" %}
  <br style="display: block; content: ''; margin-top: .6em">
</p>

I am a PhD student at Carnegie Mellon University studying computational
neuroscience and machine learning. I am advised by
[Mike Tarr](http://tarrlabwiki.cnbc.cmu.edu/index.php/Tarr) and
[Aarti Singh](https://www.cs.cmu.edu/~aarti/). I am interested in developing
machine learning algorithms, and using them to design neuroscience experiments.
My current research is on real-time optimization in EEG.

# Publications and Preprints
{% include pub_list.html list=site.data.publications %}

# Projects
{% include detail_list.html list=site.data.projects %}

# Miscellaneous
{% include detail_list.html list=site.data.miscs %}
