angular.module('fourWheels').component('footer', {
    templateUrl: 'app/footer/footer.template.html',
    controller: function() {
        this.name = '',
        this.email = '',
        this.contacted = false

        this.contact = function() {
            this.name = '',
            this.email = '',
            this.contacted = true
        };
    },
    controllerAs: 'footerCtrl'
});