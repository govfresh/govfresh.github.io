source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

# Ruby 3.0+ removed these from the default stdlib; required by Jekyll and its dependencies
gem 'logger'
gem 'csv'
gem 'ostruct'
gem 'base64'
gem 'bigdecimal'

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