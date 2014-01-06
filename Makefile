
TESTS = $(wildcard test/*.js)

install: package.json
	@npm install --production

dev: package.json
	@npm install

test: node_modules $(TESTS)

$(TESTS):
	node $@

node_modules:
	@npm install

clean:
	rm -rf node_modules

.PHONY: clean test $(TESTS)
