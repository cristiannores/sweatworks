# sweatworks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0 AND serverless
 

## Local Test

`cd front` & `npm i` and run `ng serve` for development environment. You can also use `ng serve --prod` for production environment.
 Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Build Services

`cd services/authors` & `npm i`

`cd services/publications` & `npm i`

`cd ../`  in services folder then 

Install dependencies `sudo npm install -g serverless`

Setting the credentials `serverless config credentials --provider aws --key AKIAQ6QN6IJZ3THWWOKU --secret rLX/U2WX4eiY1k8yYoOfPD6ycSydb3u2T0aQlGPO` , this credentials are available only for a week create your own if you need another 

Run `serverless deploy --stage dev` to build the project in development mode. Change stage flag to 'environment' for another   `--stage production`  

If you use another credentials please se endpoints on the deploy output and put in the src/environment.ts or environment.prod.ts change the baseUrl to testing with front 

```bash
endpoints:
  POST - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/authors
  GET - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/authors
  GET - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/authors/{id}
  PUT - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/authors/{id}
  DELETE - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/authors/{id}
  POST - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications
  GET - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications
  GET - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications/{id}
  PUT - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications/{id}
  DELETE - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications/{id}
  POST - https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev/publications/find-by-author
```

Like this 

src/environment/environment.ts

```js
export const environment = {
  production: false,
  baseUrl : 'https://5g0eedx8ti.execute-api.us-east-1.amazonaws.com/dev',
  authorService: '/authors',
  publicationService: '/publications',
};
```

## Further help

To get more help on the execution please send an email to cristian.nores@gmail.com
