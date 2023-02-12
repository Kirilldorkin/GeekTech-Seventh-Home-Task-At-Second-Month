class Student {
    constructor(name, surname, admissionYear) {
        this.name = name;
        this.surname = surname;
        this.admissionYear = admissionYear;
    }

    getFullName() {
        console.log(`Name: ${this.name} \nSurname: ${this.surname}`);
    }

    getCourse() {
        console.log(`Admission year: ${2023 - this.admissionYear}`);
    }
}

class Milana extends Student {
    constructor(name, surname, admissionYear) {
        super(name, surname, admissionYear);
    }
}

class Sanjar extends Student {
    constructor(name, surname, admissionYear) {
        super(name, surname, admissionYear);
    }
}

class Abay extends Student {
    constructor(name, surname, admissionYear) {
        super(name, surname, admissionYear);
    }
}

const milana = new Milana("Milana", "Zamorova", 2022);
const sanjar = new Sanjar("Sanjar", "Nurlsn Uluu", 2020);
const abay = new Abay("Abay", "Janibek Uluu", 2021);

milana.getFullName();
sanjar.getFullName();
abay.getFullName();

milana.getCourse();
sanjar.getCourse();
abay.getCourse();