![Movie-Search](https://i.ibb.co/gm41XHR/Screen-Shot-2021-12-26-at-10-52-29-PM.png)

# ☄️ 3Pointshot ☄️

## By. Yousof Wakili

## [**Live**](https://threepointshot.vercel.app/) **|** [**Say Hi to me on LinkedIn!**](https://www.linkedin.com/in/youseffect/) **|** [**Portfolio**](https://youseffect.com/)

## Description🗒

#### 2021-2022 NBA season is absolutely crazy to watch! Keep track of your favorite NBA players stats.

---

## Purpose of building this project 🤔

Many NBA fans are constantly searching for their favorite player stats but have to dig into the weeds or interact with clunky interfaces. 3pointshot uses the balldontlie API to query and reflect data that any user inputs for that players stats. React hooks are used to handle and pass state down from the user, through the api fetch request, and finally rendering the data on the viewstats component.

```
// PlayerPage.js

  const [playerData, setPlayerData] = useState([])
  <!--  api request -->
  useEffect(() => {
    const getResults = async () => {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        .then((res) => {
          if (res.data.data[0] === undefined) {
            alert('Player does not exist')
            history('/search')
          } else if (res.data.data.length > 1) {
            alert('Enter a more specific name')
            history('/search')
          } else {
            setPlayerData(res.data.data)
          }
        })
        .catch((e) => console.log('Error: ', e))
    }
    getResults()
  }, [])
```

3pointshot utilizes the Balldontlie API (https://www.balldontlie.io/#introduction) to display content about each player you search through. Error handling/rejection of each promise are handled through chaining .then and .catch and passing in the error if any errors occur with the API call and Axios library for API calling.

Tailwindcss is the primary CSS library to help create a responsive design among all different devices and React Framer Motion to handle transitions and animations.

3pointshot is deployed through Vercel.

## Technologies 📟

- HTML5
- CSS3
- JavaScript
- React.js (Create-react-app)
- Axios library for API fetch requests and promise handling
- Tailwindcss to help create the UI and a responsive design
- Framer Motion to handle animations and transitions

  ![Technologies](https://i.ibb.co/YRGFsFp/Screen-Shot-2021-12-26-at-11-25-08-PM.png)

## Getting started

#### `npm install - installing dependencies`

#### `npm run start or yarn start`

## Screenshot

![screenshot](https://i.ibb.co/qCjgQTJ/Screen-Shot-2021-12-26-at-10-52-59-PM.png)
