angular.module('fourWheels').component('cars', {
    templateUrl: 'app/cars/cars.template.html',
    controller: function(carsSrvc) {
        this.cars = carsSrvc.cars;

        this.buyCar = function(id) {
            carsSrvc.buyCar(id);
            this.cars = carsSrvc.cars;
        }

    },
    controllerAs: 'carsCtrl'
})