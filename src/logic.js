export class Person {
    constructor(age, gender, helmet) {
        this.age = age;
        this.gender = gender;
        this.helmet = helmet;
    }

    getLifeExp() {
        let lifeExp = null;
        let yearCap = null;

        //determine if user has a helmet
        if (this.helmet == false) {
            lifeExp = 0;
        } else {
            //check to see if player is a male or female
            switch (this.gender) {
                case 'male':
                    yearCap = 76;
                    break;

                case 'female':
                    yearCap = 81;
                    break;

                default:
                    alert('sorry, something went wrong... maybe try again.')
                    location.reload();
                    break;
            }
            lifeExp = (yearCap - this.age);
        }
        this.lifeExp = lifeExp;
    }
}