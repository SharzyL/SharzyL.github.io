# Change Log

All notable changes of source code of this site will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.0]

### Added
- Dark mode support

### Optimized
- Table coloring


## [1.0.3]

### Optimized

- Spacing from content to header in index.html

## [1.0.2] - 2020.5.22

### Removed

- Floating navigation bar
- Responsive navigation bar

### Fixed

- Misplaced “show all articles” button. 
- Misplaced footer code in article.html

### Optimized

- Article header style
- table style
- Image sizing
- Code fence spacing
- **Semantic color using** (prepare for dark mode)

### Added

- Better table-of-contents jumping
- Code line number

## [1.0.1] - 2020.5.22

### Added

- Introduce roboto font for better English display. 
- Introduce Cascadia font and OneDark highlighting theme for code. 
- Use bold font for article title. 
- Add shadow for images and code fences. 

### Changed

- Use dark-background card and line numbers for code fences. 
- Blue navigation bar. 
- Include gitalk in a card. 

### TODO

- Optimize the style of `.article-date` and `.article-tags
- Material table
- DARKMODE

## [1.0] - 2020.5.21

In this version, I introduce a brand new Material Design-based design for my blog. 

### Changed

- Change the primary design paradigm from flat design to material design. Use shadowed card and gray background for content stratification and horizontal line for content partition. 
- Use  `position: sticky`  for sidebar positioning instead of manipulating it manually by JavaScript. 
- Return to pure blue background for header, instead of `linear-gradient` background. 
- Design the article as a card and protrude it into the header. In this way we can set any picture for header background without worrying about color mixing. 
- Rearrange layout hierarchy to make it less intricate. 
- Tinker the style of `gitalk` to make it look cleaner. 
- Adjust text in `404.html` .
- Fine-tune the font-size of html titles and navigation bar. 
- Change the Horizontal positioning and sizing rule for sidebar. 
- Change the color of sticky navigation bar from semi-transparent to pure white. 

### Removed

- Subtitle of the homepage. 



