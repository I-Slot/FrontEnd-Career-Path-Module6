const studentDetails = {
  firstName: "janaka",
  lastName: "siriwardena",
  age: 28,
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  discordUsername: "JS1",
};

function student(data) {
//   this.firstName = data.firstName;
//   this.lastName = data.lastName;
//   this.age = data.age;
//   this.country = data.country;
//   this.email = data.email;
//   this.discordUsername = data.discordUsername;
    Object.assign(this, data)
  this.summarizeStudent = function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
        and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`);
  };
}


const studentDet = new student(studentDetails)

studentDet.summarizeStudent();

// const studentDetailCopy = {}.

// Object.assign(studentDetailCopy, studentDetails)

// console.log(studentDetailCopy);


const sandraKayeProfileData = {
  name: "Sandra Kaye",
  portfolio: "www.sandrasportfolio.com",
  currentJob: "Google",
  currentSalary: "400k",
};

/*
Challenge
1. Use Object.assign to cut 4 lines of code from the constructor function.
*/

function DevProfile(data) {
//   this.name = data.name;
//   this.portfolio = data.portfolio;
//   this.currentJob = data.currentJob;
//   this.currentSalary = data.currentSalary;
    
    Object.assign(this,data)
  this.summariseDev = function () {
    console.log(
      `${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`
    );
  };
}

const sandraKaye = new DevProfile(sandraKayeProfileData);
sandraKaye.summariseDev()