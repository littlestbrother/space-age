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

    calc(){
        this.mercuryAge = Math.round((this.age * 0.24)*100)/100;
        this.mercuryExp = Math.round((this.lifeExp * 0.24)*100)/100;
        this.venusAge = Math.round((this.age * 0.62)*100)/100;
        this.venusExp = Math.round((this.lifeExp * 0.62)*100)/100;
        this.marsAge = Math.round((this.age * 1.88)*100)/100;
        this.marsExp = Math.round((this.lifeExp * 1.88)*100)/100;
        this.jupiterAge = Math.round((this.age * 11.86)*100)/100;
        this.jupiterExp = Math.round((this.lifeExp * 11.86)*100)/100;
    }
}