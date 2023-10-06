const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','SelectLanguage.html')));
			this.app.get('/SelectLanguage', (req, res) => res.sendFile(path.join(__dirname,'html','SelectLanguage.html')));
			this.app.get('/SelectLanguage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SelectLanguage.html')));
			this.app.get('/Login', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/Login/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/StartQuestionnaire', (req, res) => res.sendFile(path.join(__dirname,'html','StartQuestionnaire.html')));
			this.app.get('/StartQuestionnaire/:id', (req, res) => res.sendFile(path.join(__dirname,'html','StartQuestionnaire.html')));
			this.app.get('/FirstQuestion', (req, res) => res.sendFile(path.join(__dirname,'html','FirstQuestion.html')));
			this.app.get('/FirstQuestion/:id', (req, res) => res.sendFile(path.join(__dirname,'html','FirstQuestion.html')));
			this.app.get('/SecondQuestion', (req, res) => res.sendFile(path.join(__dirname,'html','SecondQuestion.html')));
			this.app.get('/SecondQuestion/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SecondQuestion.html')));
			this.app.get('/ThirdQuestion', (req, res) => res.sendFile(path.join(__dirname,'html','ThirdQuestion.html')));
			this.app.get('/ThirdQuestion/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ThirdQuestion.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;