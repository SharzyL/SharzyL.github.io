all: source site

source:
	git add .
	git commit -m '$(msg)'
	git push

site:
	jekyll build
	cd _site
	pwd
	git add .
	git commit -m '$(msg)'
	git push

.PHONY: source site all