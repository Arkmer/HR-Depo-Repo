app.controller('reportController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('reportController');
    let self = this;
    $scope.header = 'Report page';
}])