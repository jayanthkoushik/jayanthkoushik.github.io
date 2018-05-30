require "jekyll"
require "pandoc-ruby"

class Jekyll::Converters::Markdown::PandocProcessor
    def initialize(config)
        @config = config
    end
    def convert(content)
        @converter = PandocRuby.new(content,
                                    :from => :"markdown-markdown_in_html_blocks")
        @converter.to_html(:katex,
                           :bibliography => Dir.glob("_includes/references/*.bib").join(" --bibliography "),
                           :"default-image-extension" => :"png",
                           :F => :"pandoc-crossref",
                           :filter => :"pandoc-citeproc",
                           :csl => :"_includes/references/style.csl",
                           :M =>    :"linkReferences=true\
                                   -M link-citations=true\
                                   -M figPrefix=Figure\
                                   -M eqnPrefix=Equation\
                                   -M tblPrefix=Table\
                                   -M lstPrefix=List\
                                   -M secPrefix=Section")
    end
end
