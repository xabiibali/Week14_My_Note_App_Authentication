# WEEK 14: My Note App - Authentication and Private Routes

This Project allows you to practice the concepts and techniques learned last Sunday and apply them in a concrete project. This assignment explored React authentication and private routes. In your Project for this assignment, you will demonstrate proficiency by creating a Single Page Application that performs CRUD (Create, Read, Update, Delete) operations on a remote server.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this assignment.**

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of Repo (Not Gabi's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `npm install` at the root to retrieve all the dependencies.
- [ ] **RUN** `npm run dev` at the root of your project.

Follow these steps for completing your project:

## Minimum Viable Product

Modify this application to use the endpoint provided below.

- [ ] Create new slices for `Auth` and `User`
- [ ] Store user `token` in cookies using `js-cookie` package.
- [ ] Create new files for `Register`, `Login` and `Profile`
- [ ] Make sure to create navigation for `Home`, `Register`, `Login` and `Profile`
- [ ] Create `PrivateRoute` component that checks if user is logged in or not. Wrap `PrivateRoute` on top of routes such as `Profile`.
- [ ] Make sure to not allow user to edit or delete a note they didn't create.

## Server Instructions

Overview

In this assignment, you won't be using local server, you will be the using this endpoint: 

``<https://notes-60by.onrender.com>``

Here are all the endpoints you need to complete this project:

### Endpoints

### Get all Notes

- A **GET** request to the `/notes` endpoint will return an array of objects or an empty array. You won't need a `token` to get the data from this endpoint.


### Add Note - `TOKEN IN THE HEADER REQUIRED`

- A **POST** request to the `/create_note` endpoint expects to recieve an object as follows:

```javascript
{
    title: 'Clean the house',
    content: "Buy cleaning products to clean"
  }
```

### Edit Note - `TOKEN IN THE HEADER REQUIRED`

- A **PUT** request to the `/update_note/:id` endpoint expects to recieve an object as follows:

```javascript
{
    title: 'Clean the house',
    content: "Buy cleaning products to clean"
}
```

### Delete Note - `TOKEN IN THE HEADER REQUIRED`

- A **DELETE** request to the `/delete_note/:id` endpoint with the `id` of the note you want to delete

| ---------------------------------------------------- |

## Authentication

### Register

- A **POST** request to the `/register` endpoint expects to recieve an object as follows:

```javascript
{
    "name": "Mohamed Ali"
    "email": "email@address.com",
    "password": "password"
}
```

### Login

- A **POST** request to the `login` endpoint expects to recieve an object as follows:

```javascript
{
    "email": "email",
    "password": "password",
}
```

### GET USER INFO  - `TOKEN IN THE HEADER REQUIRED`

- A **GET** request to the `/user` endpoint for get information for current user.

## STRETCH PROBLEMS

- [ ] Display current user's notes in their profile
- [ ] **ADVANCED** Modify server code and add roles such as "admin" to display all users in one page.
