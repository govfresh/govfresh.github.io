source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
# bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# For GitHub Pages compatibility, use github-pages gem instead of specifying Jekyll version
# gem "jekyll", "~> 4.2.0"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"

# Use GitHub Pages gem to ensure compatibility with GitHub Pages environment
gem "github-pages", group: :jekyll_plugins

# Note: The github-pages gem automatically includes these plugins at specific versions:
# - jekyll-feed
# - jekyll-sitemap  
# - jekyll-seo-tag
# - jekyll-paginate
# - jekyll-redirect-from
# So we don't need to specify them separately when using github-pages gem

# Additional gems that may be needed for Ruby 3.0+
group :jekyll_plugins do
 gem 'logger'
 gem 'csv'
 gem 'ostruct'
 gem 'base64'
 gem 'bigdecimal'
end

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
 gem "tzinfo", "~> 1.2"
 gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]

# HTTP server
gem "webrick"