transhist-build: 
	docker build -t transhist .

transhist-up:
	docker run -p 3000:3000 --link mongodb:mongodb --name transhist -td transhist

transhist-shell:
	docker exec -it transhist bash

transhist-logs:
	docker logs -f transhist

transhist-down:
	docker stop transhist
	docker rm transhist

mongo-up:
	docker run --name mongodb -p 27017:27017 -v $(CURR_PATH)/data/db/:/data/db -d mongo
