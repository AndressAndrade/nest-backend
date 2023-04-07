raise/db:
	docker-compose up db -d

destroy/all:
	docker-compose down

deploy:
	npm run dev
