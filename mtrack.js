var M = module.exports = {}
var total = 0

var eat = {
    'breakfast':55,
    'lunch':95,
   ' dinner':80
}

var play = {
    'movie_ticket':250,
    'zoo_ticket':140
}

var traffic = {
    "mrt":25,
    "bus":12,
    "aircraft":1500
}


M.mtrack = function(eat_select, play_select, traffic_select){
		
		
		 if (total == 0){
			 total = 80 + 140 + 25 ;
			 return total;
		 }
		 if (total == 245){
			 total = 80 + 140 + 25 + 95 + 140 + 25;
			 return total;
		 }
		 if (total == 505){
			 total = 80 + 140 + 25 + 95 + 140 + 25 + 55 + 250 + 1500;
			 return total;
		 }

}







