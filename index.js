class Telephone {
  constructor() {
    this.phoneBook = new Set();
    this.observers = [];
  }

  AddPhoneNumber(phoneNumber) {
    this.phoneBook.add(phoneNumber);
  }

  DialPhoneNumber(phoneNumber) {
    this.notifyObservers(phoneNumber);
  }

  RemovePhoneNumber(phoneNumber) {
    if (this.phoneBook.has(phoneNumber)) {
      this.phoneBook.delete(phoneNumber);
      console.log("Number deleted successfully.");
    } else {
      console.log("This number does not exist.");
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
    console.log("Observer added successfully.");
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log("Observer removed successfully.");
    } else {
      console.log("Observer not found.");
    }
  }

  notifyObservers(data) {
    for (let observer of this.observers) {
      observer.update(data);
    }
  }
}

class PhoneNumberObserver {
  constructor() {}

  update(phoneNumber) {
    console.log(`Phone Number Added: ${phoneNumber}`);
  }
}

class DialingObserver {
  constructor() {}

  update(phoneNumber) {
    console.log(`Now Dialing ${phoneNumber}`);
  }
}

const telephone = new Telephone();
const observer1 = new PhoneNumberObserver();
const observer2 = new DialingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);
telephone.AddPhoneNumber("2347023232");
telephone.DialPhoneNumber("2347023232");
telephone.RemovePhoneNumber("2347023232");
telephone.removeObserver(observer1);
