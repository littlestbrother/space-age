export class Person{
    constructor(birthMonth,birthDay,birthYear){
        this.birthMonth = birthMonth;
        this.birthDay= birthDay;
        this.birthYear = birthYear;
    } 
    today(){
        let today = new Date();
        this.nowMonth = today.getMonth();
        this.nowDay = today.getDate();
        this.nowYear = today.getFullYear();
    }
}