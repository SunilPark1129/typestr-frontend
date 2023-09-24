# Typestr
![Typestr](https://github.com/SunilPark1129/typestr-frontend/assets/106734133/2da19310-712e-4b32-90b2-a469b4a05b6d)

Go to website - [Link](https://sp-typestr.netlify.app)<br>
Go to backend - [Link](https://github.com/SunilPark1129/typestr-backend)

## Project Description

- A game website that requires users to type the alphabet quickly without typos.
- Since applied a free serverless in this project, it may takes about 1 to 3 minutes to wake up the server.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Current Status|<img src="https://github.com/SunilPark1129/typestr-frontend/assets/106734133/1c4c84b2-3155-44a2-adab-f52b9bab0d86" width="300"><br><br>This provides the current server status. If the server is not active, information regarding the records cannot be retrieved. Since I'm using the free tier on render.com, it takes some time to wake up the server. This situation occurs when the website is not used for 15 minutes, causing the server to go to sleep. Once it wakes up, it can be used continuously.|
|Game Start|<img src="https://user-images.githubusercontent.com/106734133/210241834-9f9151e5-cf51-4244-a16c-9601c3e41ea9.jpg" height="300"><br><br>When the user starts the game, all state is initialized and ready to be recorded. When the game starts, the background color changes as a notification that it has started. And I added some other animations at the same time as the background changes.|
|Game Over|<img src="https://user-images.githubusercontent.com/106734133/210241903-81d2dbb4-7d67-4859-b0c3-63c37b1a51f5.jpg"><br><br>If the user inputs incorrectly, the color changes to warn them of their mistake. The game is set to automatically stop when you receive 3 warnings.|
|Recording Animation|<img src="https://user-images.githubusercontent.com/106734133/210241851-5c441aa9-1977-4bbe-acc7-8cef486c816e.jpg"><br><br>As the game progresses, each time the user enters a letter, an animation displays the number of their records.|
|Leaderboard|<img src="https://github.com/SunilPark1129/typestr-frontend/assets/106734133/720bf2e3-0aa4-45b9-b41e-c9002da194e8" height="300"><br><br>If you press the Ranking List button, you can see the leaderboard where users have left their records before. Displays information by requesting data from a database.|
|Detail|<img src="https://github.com/SunilPark1129/typestr-frontend/assets/106734133/621e01a0-bef1-4e65-9312-38237cf7e0fc" height="300"><br><br>You can see detailed information by clicking the Details button. As the game progresses, all records are recorded in units of time with setInterval().|
|Rules|<img src="https://user-images.githubusercontent.com/106734133/210241801-d604a7d0-89f3-4b77-8905-3beb7826f805.jpg" height="300"><br><br>You can check simple rules about this game.|
|POST|<img src="https://user-images.githubusercontent.com/106734133/210241919-33777976-5eaa-47e2-b7f3-b8be070a26f6.jpg" height="300"><br><br>Ask for the user's name to send records to the database. If the user's record is faster than the 10th place record, the record is successful, and if it is slow, it is automatically deleted from the record.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)


## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/typestr-frontend.git
```
2. Install all dependencies
```
npm install
```
> Dependencies I have installed :<br>axios<br> react-router-dom<br> styled components<br> font awesome<br> 

3. run the website
```
npm start
```

## Project Status
Completed
