
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://pro.ant.design" target="blank"><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="220" alt="Antd Logo" /></a>

</p>

<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>


### 📚 Description

This boilerplate is made to quickly prototype frontend + backend applications. It comes with authentication, logging, security, and database features out of the box.

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
