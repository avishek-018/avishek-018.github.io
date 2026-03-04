require 'yaml'

@config  = YAML.load_file '_config.yml'
@baseurl = ENV['BASEURL'] || @config.dig('baseurl')

task :test do
  require 'html-proofer'
  Rake::Task["reset"].invoke
  sh "jekyll build -b '#{@baseurl}' -d '_site#{@baseurl}'"
  opts = {
    check_external_hash: false,
    allow_hash_href: false,
    check_html: false,
    disable_external: false,
    empty_alt_ignore: true,
    assume_extension: true,
    only_4xx: true
  }
  HTMLProofer.check_directory('./_site', opts).run
end

task :reset do
  sh "rm -rf _site .jekyll*"
end

task :build do
  sh "jekyll build -b '#{@baseurl}'"
end
