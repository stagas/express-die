
install: package.json
	@npm install --production

dev: package.json
	@npm install

test:
	@npm test

clean:
	rm -rf node_modules

.PHONY: clean test
