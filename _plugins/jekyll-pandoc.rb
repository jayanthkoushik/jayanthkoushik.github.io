require "jekyll"
require "pandoc-ruby"

class Jekyll::Converters::Markdown::PandocProcessor
    def initialize(config)
        @config = config
    end
    def convert(content)
        @converter = PandocRuby.new(content, :from => :"markdown-markdown_in_html_blocks")
        @converter.to_html(:katex)
    end
end
