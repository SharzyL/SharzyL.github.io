all: source site

source:
	git add .
	git commit -m '$(msg)'
	git push

site:
	jekyll build
	cd _site && git add .
	cd _site &&	git commit -m '$(msg)'
	cd _site && git push

.PHONY: source site all