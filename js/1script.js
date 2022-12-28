const userBirthdayYear = +prompt('Enter the year you were born : ')
const userCity = prompt('Enter your city (first letter must be capital): ')
const userFavSport = prompt('Enter your favourite sport (first letter must be capital): ')

const ageResult = userBirthdayYear 
    ? 2022 - userBirthdayYear 
    : 'Im sorry you are hiding your age!Hope you will tell us later!';

const cities= {
    'kiev' : 'Great!You are in the capital of Ukraine!Glory to Ukraine!' ,
    'london' : 'Great!You are in the capital of the Great Britain!' ,
    'washington' : 'Great!You are in the capital of USA!' ,
}

const cityResult = userCity 
    ? cities[userCity.toLowerCase()]
        ? cities[userCity.toLowerCase()]
        : `Great!You are in the ${userCity}!`
    : 'Im sorry, you are hiding your city!Hope you will tell us later!'


const sports = {
    'soccer' : 'Damn!Are you going to be like Messi?',
    'boxing' : 'Damn!Are you going to be like Lomachenko?',
    'basketball' : 'Damn!Are you going to be new Jordan?',
}

const sportResult = userFavSport
    ? sports[userFavSport.toLowerCase()]
        ? sports[userFavSport.toLowerCase()]
        : `Damn!It's nice sport, wish you good luck in ${userFavSport}!`
    : 'Im sorry you are hiding your favourite sport!Hope you will tell us later!'



alert(`You are ${ageResult}'s old!\n${cityResult}\n${sportResult}`)
