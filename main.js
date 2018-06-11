---
---
{%- capture customjs -%}
  {%- include_relative js/custom.js -%}
{%- endcapture -%}
{%- include_relative js/jquery.min.js -%}
{%- include_relative js/bootstrap.min.js -%}
{%- include_relative js/ekko-lightbox.min.js -%}
{%- include_relative js/katex.min.js -%}
{%- include_relative js/auto-render.min.js -%}
{{ customjs | uglify }}
