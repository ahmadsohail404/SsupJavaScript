class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = []    // using # makes it private
  getInfo() {
    return { name: this.name, email: this.email }
  }
  enrollCourse(name) {          // setter
    this.#courseList.push(name)
  }
  getCourseList() {             // getter
    return this.#courseList
  }
  static login() {      // no one can access this now, not even extended classes
    return "You are logged in"
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email)
  }
  getAdminInfo() {
    return "I am sub-admin"
  }
  login() {   // overriding
    return "login for admin"
  }
}

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());

const rock = new User("rock, rock@rock.com")
// console.log(rock.getInfo);
rock.enrollCourse("ReactJS")
// console.log(rock.getCourseList());
// console.log(rock.courseList);   // it'll be undefined because of private variable.

module.exports = User;