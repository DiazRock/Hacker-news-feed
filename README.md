# Hacker News Feed (Backend and frontend)

This a personalized Hacker News Feed. It uses nestjs framework in the backend and reactjs in the frontend. 

## A brief explanation

The backend takes the info from this url http://hn.algolia.com/api/v1/search_by_date?query=nodejs every hour, using `@nestjs/schedule`, and stores the feed in a mongodb database. The server side defines an API REST using nestjs features, and this API is used by the frontend to show the posts feed.If you run the app for the first time and you want to asure that info was taken from the hacker news site, you can go to the [source](./backend-service/src/blog/blog.service.ts), and write `* * * * *` in the `cron` decorator.

In the fronted, react styled componet is used (CSS in javascript), to style the page, and react hooks and React.context to manage the reactivity and the state. You can delete a post if you click in the trash icon on the right side. Even if the hacker news url gives it as a part of the feed, it will not be loaded in the page. But if you open a new session, or you delete the storage of your current browser, you will see it.


## How to run the full app

On a Linux machine, with ubuntu 18.04, with docker version 20.10.2, docker-compose version 3 installed, run `sudo docker-compose up --build` after cloning the repo.


## The tests of the backend

There are a few test that you can run. When the nestjs container is live and running, execute `sudo docker-compose exec nestjs sh`. This will run a new container with a console for interaction. Then, do `yarn test`.

And that's all.

Technology is our kingdom ;)
