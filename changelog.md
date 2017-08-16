# Changelog
All notable changes to this project will be documented in this file.

## [Early builds]

## [0.4] - 2017-08-14
### Added
- Two image files to use as a background image @ /css/images/*
- Additional font @ /css/fonts/* 
- robots.txt file

### Changed
- Major overhaul of the general style and layout
- Multiple updates to the CSS file


## [0.3.1] - 2017-07-30
### Added 
- Sitemap @ /sitemap.xml

### Changed 
- Multiple changes to optimise the execution times for both index.js and result.js scripts
- Multiple changes to the result.html page to improve the layout
- Structural changes to the JSON files


## [0.3] - 2017-07-24
### Added 
- About page @ /about.html

### Changed
- Links to the results page from index page are generated from JSON files now
- Result page now uses variables from querystring to load the appropriate files

### Removed 
- ism_list.html and pic_list .html files are no longer in use

### Fixed 
- Bug with the search bar that would freeze the field sometimes
- Bug with the modules select field that would load the search bar before the module is selected 


## [0.2] - 2017-07-10
### Added
- JSON files for topics @ /lists/ism_list.json & /lists/pic_list.json
- Result page @ result.html
- JS script for the result page @ /scripts/results_.js
- HTML files to load the links to results page @ /lists/ism_list.html & /lists/pic_list.html

### Changed
- Result page now processes the information from a .json file
- Result page now loads the appropriate PDF on a specified page
- Result page now creates DIVs to hold PDFs dynamically depending on a number of PDFs to show
- Index now has a single link to a result page from 'Extreme programming' topic (testing)

### Fixed
- Bug that disallowed clearing the DIV when the module was changed
- Bug that created duplicates of topics as the last element


## [0.1] - 2017-07-02
### Added
- Home page @ /index.html
- JS script for the home page @ /scripts/index.js