# NestJS + UMI project template

This boilerplate is made to quickly prototype frontend + backend applications.
Main techonologies:
 * [NestJS](https://nestjs.com/)
 * [TypeORM](https://typeorm.io)
 * [Ant Design Pro](http://pro.ant.design)
 * [UMI.js](https://umijs.org)

---

### 🛠️ Prerequisites


- Please make sure to have an accessible SQL database instance (Postgresql recommended)
- Yarn

---

### 🚀 Deployment

- Download dependencies for both projects running `yarn`
- Backend:
   - Create local .env file using the `yarn workspace backend create:env` command and replace the existing DB_ configurations of the generated `.env` file 
   - Run the backend in development mode by using `yarn workspace backend start:dev`
   - Browse swagger api docs at http://localhost:3000/api
- Frontend:
  - Run the frontend in development mode by using `yarn workspace frontend start:dev`
  - Login at http://localhost:8000
  
#### Deploying with Docker 🐳

- Execute the following command in-app directory:

```bash
$ docker-compose up -d
```


### ✅ Testing
