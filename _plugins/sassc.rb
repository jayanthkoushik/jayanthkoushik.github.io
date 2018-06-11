require "sass"

module Jekyll
  module SassC
    def sassc(input)
      engine = Sass::Engine.new(input, :syntax => :scss, :style => :compressed)
      engine.render
    end
  end
end

Liquid::Template.register_filter(Jekyll::SassC)
