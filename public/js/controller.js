function AppCtrl($scope, $http, $location) {
    
    // Contrôle //
    console.log("Controller AppCtrl connected to the view");
};

function AcceuilCtrl($scope, $http, $location) {
    
    // Contrôle //
    console.log("Controller AcceuilCtrl connected to the view");
};

function BarCtrl($scope, $http, $location) {
    
    // Contrôle //
    console.log("Controller BarCtrl connected to the view");
     
    // Récupération de la database des commandes //
    $http.get('/orderlist').success(function(response) { 
        // Contrôle //
        console.log("Controller BarCtrl received the order database from the server");
        // Envoi //
        $scope.orderlist = response;
    
    });
};

function ClientCtrl($scope, $http) {
    
    // Contrôle //
    console.log("Controller ClientCtrl connected to the view");
    
    // Récupération de la database des commandes //
    $http.get('/orderlist').success(function(response) {
        // Contrôle //
        console.log("Controller ClientCtrl received the order database from the server");
        // Envoi //
        $scope.orderlist = response;
    });
    
    // Récupération de la database des boissons //
    $http.get('/drinklist').success(function(response) {
        // Contrôle //
        console.log("Controller ClientCtrl received the drink database from the server");
        // Envoi //
        $scope.drinklist = response;
    });
    
    // Envoi de la commande à la database orderlist du bar //
    $scope.addOrder = function(id) {
        // Envoi de l'id //
        $http.post('/orderlist',id)
        // Contrôle //
        .success(function(response) {
            console.log("Envoi de la commande corresponsant à l'id " + id);
        });
    };
};