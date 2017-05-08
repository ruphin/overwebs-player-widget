dev:
	docker run -it --rm -v $$PWD:/app -p 5000:5000 ruphin/webdev gulp serve
.PHONY: dev

shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell

build:
	docker run -it --rm -v $$PWD:/app ruphin/webdev yarn run build
.PHONY: shell
