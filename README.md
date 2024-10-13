## Про проєкт / About
QD (Quick Direction) - це веб-додаток, розроблений для полегшення взаємодії між студентами та дирекцією університету. Мета проекту - упорядкування роботи з заявами та довідками, які надсилаються студенти до дирекції університету.

QD (Quick Direction) - is a web application designed to facilitate interaction between students and university management. The project aims to streamline work with applications and certificates sent by students to the university management.

## Для розробника / For developer
### Необхідні інструменти / Pre requirements
- NodeJS
- Docker

### Як запустити проект / How to run project

```shell
docker compose up -d
```

```shell
npm install
```

```shell
npx prisma migrate dev
```

```shell
npm run dev
```

### Тестові користувачі / Test users
| Імʼя / Login | Пароль / Password | Опис / Description                                         |
|--------------|-------------------|------------------------------------------------------------|
| student      | student           | Тільки подає заявки. / Only create requests.               |
| teacher      | teacher           | Опрацьовує призначені заявки. / Process assigned requests. |
| admin        | admin             | Опрацьовує всі заявки. / Process all requests.             |
