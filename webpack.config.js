const path = require('path');

module.exports = {
  entry: {
	'SelectLanguage' : './javascript/SelectLanguage.js',
	'Login' : './javascript/Login.js',
	'StartQuestionnaire' : './javascript/StartQuestionnaire.js',
	'FirstQuestion' : './javascript/FirstQuestion.js',
	'SecondQuestion' : './javascript/SecondQuestion.js',
	'ThirdQuestion' : './javascript/ThirdQuestion.js',
	'Profile' : './javascript/Profile.js',
	'Content' : './javascript/Content.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};