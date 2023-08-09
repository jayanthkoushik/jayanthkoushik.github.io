---
title: Jayanth Koushik
permalink: index
extcss:
- local.scss
description: Personal website of Jayanth Koushik.
nomath: true
notoc: true
---

<a
title="Email" class="icon-link" href="mailto:mail@jkoushik.me"><svg>
    <!-- mail icon -->
    <path stroke="none" d="M0 0h24v24H0z"/>
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <polyline points="3 7 12 13 21 7"/>
</svg><span class="noshow">Email</span></a><a
title="GitHub" class="icon-link" href="https://www.github.com/jayanthkoushik"><svg>
    <!-- github icon -->
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"/>
</svg><span class="noshow">GitHub</span></a><a
title="Google Scholar" class="icon-link" href="https://scholar.google.com/citations?user=XTqgW-EAAAAJ"><svg>
    <!-- google icon -->
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M17.788 5.108A9 9 0 1021 12h-8"/>
</svg><span class="noshow">Google Scholar</span></a><a
title="Twitter" class="icon-link" href="https://twitter.com/jayanth_koushik"><svg>
    <!-- twitter icon -->
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"/>
</svg><span class="noshow">Twitter</span></a>

I am a PhD student at Carnegie Mellon University studying computer vision. I am advised by
[Mike Tarr](https://www.cmu.edu/dietrich/psychology/people/core-training-faculty/tarr-michael.html)
and [Aarti Singh](https://www.cs.cmu.edu/~aarti/).

# Projects {-}

<ul>
{% for project in site.data.projects %}
<li>
  {{ project.title }}
  {%- for linkh in project.links -%}
    {% for link in linkh %} [<a href="{{ link[1] }}">{{ link[0] | replace: " ", "&nbsp;" }}</a>]{% endfor %}
  {%- endfor -%}
</li>
{% endfor %}
</ul>

# Presentations {-}

{% include work_list.html list=site.data.presentations %}

# Publications and Preprints {-}

{% include work_list.html list=site.data.pubs %}

<p class="small"><sup class="sup-left">&ast;</sup>Equal contribution.</p>
