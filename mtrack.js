var M = module.exports = {}
var total = 0

var eat = {
    'breakfast':55,
    'lunch':95,
    'dinner':80
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
		
		
		 total = eat[eat_select] + play[play_select] + traffic[traffic_select];
		 return total;

}







