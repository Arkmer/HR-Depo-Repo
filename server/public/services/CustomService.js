app.service('CustomService', function(){
    console.log('CustomService');
    let self = this;

    self.employeeArray = {list: []};

    self.getEmployees = function () {
        $http({
            method:'GET',
            url:'/hr'
        }).then(function (response) {
            console.log(response.data);
            self.employeeArray.list = response.data;
        }).catch(function (error) {
            console.log('error on get: ', error);
        })
    }

})