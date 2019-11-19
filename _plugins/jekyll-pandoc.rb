require "jekyll"
require "pandoc-ruby"

class Jekyll::Converters::Markdown::PandocProcessor
    def initialize(config)
        @config = config
    end
    def convert(content)
        acropat = /\\acrodef\{(.*?)\}\{(.*?)\}/
        acros = content.scan(acropat)
        acros.each do |acro|
            pat = /\\acp?\{(#{acro[0]})\}/
            content = content.sub(pat){|r| "#{acro[1]}" + (r[3] == "p" ? "s" : "") + " (<span class='abbr'>#{r[$1]}" + (r[3] == "p" ? "s" : "") + "</span>)"}
            pat = /\\acs?p?\{(#{acro[0]})\}/
            content = content.gsub(pat){|r| "<abbr title='#{acro[1]}'>#{r[$1]}" + (r[3] == "p" || r[4] == "p" ? "s" : "") + "</abbr>"}
        end

        @converter = PandocRuby.new(content, :from => :"markdown-markdown_in_html_blocks")
        @converter.to_html(:katex)
    end
end
