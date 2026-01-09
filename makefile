# Variables
PACKAGE_NAME = poly-ui


clean:
	@echo -e "\n${GREEN}--------------------------------------------"
	@echo -e "Removing old package file and uninstalling poly-ui ..."
	@echo -e "--------------------------------------------${NC}\n"
	rm -f $(PACKAGE_NAME)*.tgz
	npm uninstall $(PACKAGE_NAME)

dev:
	@echo -e "\n${GREEN}--------------------------------------------"
	@echo -e "Running dev server ..."
	@echo -e "--------------------------------------------${NC}\n"
	npm run dev


install:
	@echo -e "\n${GREEN}--------------------------------------------"
	@echo -e "Installing package ..."
	@echo -e "--------------------------------------------${NC}\n"
	npm install $(PACKAGE_NAME)*.tgz
