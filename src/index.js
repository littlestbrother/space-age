import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './logic.js'
import farewell from './front.js'

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let age = $('input#age').val();
        let gender = $("input[name=gender]:checked").val();
        let helmet = $('input#helmet').prop('checked');
        let newPerson = new Person(age, gender, helmet);
        newPerson.getLifeExp();
        newPerson.calc();
        $('p#result').text(farewell(newPerson));
    });
});