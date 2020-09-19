# Week 6 practice assessment

## What are we building?

We are building a webapp where people can have their own homepage and post stories. It is called `Cool story bro`. It has multiple pages

- Signup & Login pages
- A page with a list of homepages of different users
- A detail page for a homepage where you can view a users' stories
- A page where you can view your own homepage
- A form where you can edit your homepage
- A form where you can post a story

## Wireframe

<img src="https://github.com/StephBerg86/cool-story-bro-FE/blob/master/src/Images/Screenshot%202020-09-19%20at%2018.42.17%20(2).png" width=500 />
<img src="https://github.com/StephBerg86/cool-story-bro-FE/blob/master/src/Images/Screenshot%202020-09-19%20at%2018.42.27%20(2).png" width=500 />
<img src="https://github.com/StephBerg86/cool-story-bro-FE/blob/master/src/Images/Screenshot%202020-09-19%20at%2018.42.34%20(2).png" width=500 />
<img src="https://github.com/StephBerg86/cool-story-bro-FE/blob/master/src/Images/Screenshot%202020-09-19%20at%2018.42.41%20(2).png" width=500 />
<img src="https://github.com/StephBerg86/cool-story-bro-FE/blob/master/src/Images/Screenshot%202020-09-19%20at%2018.42.53%20(2).png" width=500 />

## Features

### 1. As a user I want to view a list of homepages belonging to other users

- The default page you see when you go to `/` should be a list of homepages
- Each homepage is displayed in the colors their users have customized
- There is a button linking to the details of that homepage                                      

### 2. As a user interested in people's lives, I want to read people's stories, so I can be informed

- When we click on the `Visit page` button of a homepage we see the details of a homepage
- On this detail page we can see the stories belonging to that homepage

### 3. As a logged in user I want to be able to view my page

- When you are logged in, there should be a link in the navbar to `My page`
- When you click that link you see the page belonging in to your user and its stories
- Ideally, we add the user's homepage to the information being fetched when we login
- That means modifying the `/me` and `/login` endpoints to also send your homepage in the response
- Alternatively fetch the data from the endpoint set up for feature #2 (detail page)

### 4. As a user signing up I want a homepage to be created for me

- When you sign up for a new account, a homepage should be created for you.
- The homepage is set up with some default values:
  - title: `${user.name}'s homepage`
  - description: null
  - backgroundColor: #ffffff (white)
  - color: #000000 (black)
- You'll have to modify the existing `/signup` endpoint to make this happen

### 5. As a logged in user I want to be able to post stories on homepage, so I can share my adventures with the world

- You should be able to post a story on your homepage
- In the `My page` section there should be a button to `Post a cool story bro`
- When you click this button a form appears so you can post a story
- You should only be able to do this when you are logged in

### 6. As a logged in user I want to be able to edit my homepage, so I can express myself

- Your homepage has a title, description backgroundColor and color. You should be able to change those
- In the `My page` section there should be a button to `Edit my page`
- When you click this button a form appears so you can edit your page
- You should only be able to do this if you're logged in
