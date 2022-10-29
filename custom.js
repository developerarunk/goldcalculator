var app = angular.module("goldCalculator", []); 
app.controller("myGold", function($scope) {
    let gold_price_24=51935;
    $scope.karat_value="91.67";
    $scope.gold_price = Math.ceil((gold_price_24*91.67)/100);
    $scope.total_units = 10;
    $scope.gold_quantity = 1.74;
    $scope.total_gold_price = 0;
    $scope.making_charge_percentage = 15;
    $scope.making_charge_amount = 0;
    $scope.other_amount = 0;
    $scope.net_total = 0;
    $scope.gst_percentage = 3;
    $scope.gst_amount = 0;
    $scope.total_amount = 0;
    $scope.karats = {
        "24K Gold" : "100",
        "22K Gold" : "91.67",
        "18K Gold" : "75",
        "14 Gold" : "58.3",
    }

    $scope.karatChange = function () {
        return $scope.gold_price=Math.ceil((gold_price_24*$scope.karat_value)/100);
    }
    $scope.totalGoldPrice = function () {
        return $scope.total_gold_price=Math.ceil(($scope.gold_price/ $scope.total_units)* $scope.gold_quantity);
    }
    $scope.makingChargeAmount = function () {
        return $scope.making_charge_amount=Math.ceil(($scope.total_gold_price* $scope.making_charge_percentage)/100);
    }
    $scope.netTotal = function () {
        return $scope.net_total=Math.ceil($scope.total_gold_price+$scope.making_charge_amount+$scope.other_amount);
    }
    $scope.gstAmount = function () {
        return $scope.gst_amount=Math.ceil(($scope.net_total*$scope.gst_percentage)/100);
    }
    $scope.totalAmount = function () {
        return $scope.total_amount=Math.ceil($scope.net_total+$scope.gst_amount);
    }
});
app.filter('round', function() {
    return function(input) {
        return Math.round(input);
    };
});
app.filter('ceil', function() {
    return function(input) {
        return Math.ceil(input);
    };
});
