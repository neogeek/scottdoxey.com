build:
	./bin/build.sh

copy:
	./bin/copy.sh

serve:
	python3 -m http.server -b 127.0.0.1 8080 --directory build

.PHONY: build
