function MainCtrl($scope)
{
	$scope.products = [
		{name:"water", price:20, count:1,
		 picture:"water-bottle.jpg"},
		{name:"sandwich", price:30, count:1,
		  picture:"sandwich.jpg"
		},
		{name:"burger", price:40, count:1,
		 picture:"burger.gif"
		},
		{name:"Snack", price:50, count:1,
		  picture:"snacks.gif"
		},
		{name:"French Fries", price:50, count:1,
		  picture:"mcdonalds-ff.jpg"
		}

	]

	$scope.plusOne = function(item)
	{
		item.count = item.count + 1;
		$scope.updatePrice();
	}

	$scope.minusOne = function(item)
	{
		item.count = item.count - 1;
		$scope.updatePrice();
	}

	$scope.updatePrice = function()
	{
		$scope.sum = 0;
		for(var i=0; i < $scope.products.length; i++)
		{
			$scope.sum += $scope.products[i].price * $scope.products[i].count
		}
	}

	$scope.updatePrice();
	//tinyurl.com/tsrdoc
}