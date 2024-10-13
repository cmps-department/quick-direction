The English version is below.

## Про проєкт
QD (Quick Direction) - це веб-додаток, розроблений для полегшення взаємодії між студентами та дирекцією університету. Мета проекту - упорядкування роботи з заявами та довідками, які надсилаються студенти до дирекції університету.

## Дизайн
[Проєкт у Figma](https://www.figma.com/design/GVFqq1vjDA0qj4dRtYq5oP/Project-2.0?node-id=0-1&node-type=canvas&t=nDKOquQxvM4OoXwz-0)

## Для розробника
### Необхідні інструменти
- NodeJS
- Docker

### Як запустити проект

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

### Тестові користувачі
| Імʼя     | Пароль  | Опис                          |
|----------|---------|-------------------------------|
| student  | student | Тільки подає заявки.          |
| teacher  | teacher | Опрацьовує призначені заявки. |
| admin    | admin   | Опрацьовує всі заявки.        |

## Розробники проєкту
#### Дизайнери
- [Литвинчук Данило (ІКМ-220в)](https://www.instagram.com/dalitvi.studio?igsh=MzRlODBiNWFlZA==)
- [Богданова Софія (ІКМ-220г)](https://www.linkedin.com/in/sofiia-bohdanova/)
#### Розробникик програмного забезпечення
- [Чаплін Артем (ІКМ-220а)](https://github.com/ArCheeq)
- [Лазарєва Яна (ІКМ-220в)](https://github.com/YanochkaLz)
- [Кільміченко Антон (ІКМ-220а)](https://github.com/BroodCaster)
#### Ментори
- [Мєтєльов Володимир. Доцент кафедри Комп’ютерного Моделювання Процесів та Систем, НТУ "ХПІ"](https://web.kpi.kharkov.ua/cmps/uk/myetyelov-volodimir-oleksandrovich/)
- [Бородін Марія. Аспірант кафедри Комп’ютерного Моделювання Процесів та Систем, НТУ "ХПІ"](https://web.kpi.kharkov.ua/cmps/uk/pro-kafedru/vikladatskij-sklad/borodin-mariya-anatoliyivna/)


## About
QD (Quick Direction) - is a web application designed to facilitate interaction between students and university management. The project aims to streamline work with applications and certificates sent by students to the university management.

##  Design
[Figma project](https://www.figma.com/design/GVFqq1vjDA0qj4dRtYq5oP/Project-2.0?node-id=0-1&node-type=canvas&t=nDKOquQxvM4OoXwz-0)

## For developer
### Pre-requirements
- NodeJS
- Docker

### How to run project

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

### Test users
| Login    | Password  | Description                |
|----------|-----------|----------------------------|
| student  | student   | Only create requests.      |
| teacher  | teacher   | Process assigned requests. |
| admin    | admin     | Process all requests.      |

## Project developers
#### Designers
- [Danylo Lytvynchuk](https://www.instagram.com/dalitvi.studio?igsh=MzRlODBiNWFlZA==)
- [Sofiia Bohdanova](https://www.linkedin.com/in/sofiia-bohdanova/)
#### Software Developers
- [Artem Chaplin](https://github.com/ArCheeq)
- [Yana Lazarieva](https://github.com/YanochkaLz)
- [Kilmichenko Anton](https://github.com/BroodCaster)
#### Mentors
- [Volodymyr Mietielov. Associate professor of the Department of Computer Modeling of Processes and Systems, NTU "KhPI"](https://web.kpi.kharkov.ua/cmps/en/magistral-staff/mietielov-volodymyr/)
- [Mariia Borodin. Ph.D. student at the Department of Computer Modeling of Processes and Systems, NTU "KhPI"](https://web.kpi.kharkov.ua/cmps/en/magistral-staff/borodin-mariia/)

