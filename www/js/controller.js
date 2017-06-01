angular.module('starter.controllers', ['ngResource'])

.controller('HomeCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http',
    function($scope, $state, $ionicHistory, $window, $http) {
        
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-global-text').then(function(response) {
            $scope.globalText = response.data.posts;
        });
        
        $scope.globalText = [
            {
                "home":"Welcome to the Sealions app!",
                "game_schedule":"Check out the game schedule below.",
                "roster":"Check out the roster below.",
                "news_posts":"Check out the latest Sealions news below.",
                "sponsors":"Check out our sponsors below."
            }
        ];
        
    }
])

.controller('NewsCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicSlideBoxDelegate',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicSlideBoxDelegate) {
        
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-posts').then(function(response) {
            $scope.posts = response.data.posts;
        });
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-global-text').then(function(response) {
            $scope.globalText = response.data.posts;
        });
        
        $scope.posts =[
            {
                "hero_image":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-news-post-001_0.jpg?itok=3dWGHoKj",
                    "alt":""
                },
                "title":"SeaLions Refuse to Quit, Earn Season-Opening Win!",
                "date":"05\/23\/2017 - 21:00",
                "body":"Huntington Beach, CA \u2013 Angelina Hix found the net just seconds from the final whistle Sunday afternoon, to claim a gutsy and hard-fought 1-0 win for the San Diego SeaLions to open their 2017 WPSL PacSouth season.\r\n\r\nMay 23, 2017\r\n\r\nBY HECTOR TRUJILLO, SPORTS WRITER\r\nPhoto credit: Aaron Jaffe\r\n\r\n\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d \r\n\r\nIndeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match.\r\n\r\n\"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\"\r\n\r\nIt was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post.\r\n\r\n\u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d\r\n\r\nDespite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game.\r\n\r\n\"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\"\r\n\r\nThe SeaLions travel to Arizona on June 9-10, 2017 to face Phoenix Del Sol and Tucson FC, before returning to San Diego for San Diego Soccer Weekend on Saturday and Sunday, June 17 at 7:30 p.m., and June 18, at 2:00 p.m., when they will host those same Arizona teams.\r\n\r\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL."
            },{
                "hero_image":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-news-post-002_0.jpg?itok=iy5mX3cO",
                    "alt":""
                },
                "title":"SeaLions Refuse to Quit, Earn Season-Opening Win!",
                "date":"05\/19\/2017 - 21:00",
                "body":"Huntington Beach, CA \u2013 Angelina Hix found the net just seconds from the final whistle Sunday afternoon, to claim a gutsy and hard-fought 1-0 win for the San Diego SeaLions to open their 2017 WPSL PacSouth season.\r\n\r\nMay 23, 2017\r\n\r\nBY HECTOR TRUJILLO, SPORTS WRITER\r\nPhoto credit: Aaron Jaffe\r\n\r\n\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d \r\n\r\nIndeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match.\r\n\r\n\"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\"\r\n\r\nIt was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post.\r\n\r\n\u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d\r\n\r\nDespite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game.\r\n\r\n\"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\"\r\n\r\nThe SeaLions travel to Arizona on June 9-10, 2017 to face Phoenix Del Sol and Tucson FC, before returning to San Diego for San Diego Soccer Weekend on Saturday and Sunday, June 17 at 7:30 p.m., and June 18, at 2:00 p.m., when they will host those same Arizona teams.\r\n\r\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL."
            }
        ];
        
        $scope.globalText = [
            {
                "home":"Welcome to the Sealions app!",
                "game_schedule":"Check out the game schedule below.",
                "roster":"Check out the roster below.",
                "news_posts":"Check out the latest Sealions news below.",
                "sponsors":"Check out our sponsors below."
            }
        ];

    }
])

.controller('ScheduleCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource',
    function($scope, $state, $ionicHistory, $window, $http, $resource) {
        
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-games').then(function(response) {
            $scope.games = response.data.games;
        });
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-global-text').then(function(response) {
            $scope.globalText = response.data.posts;
        });
        
        $scope.games = [
            {
                "opponent":"Strikers FC South Coast",
                "date":"05\/21\/2017 - 16:00",
                "home_or_away":"Away",
                "location":"Ocean View High - 7071 Gothard St, Huntington Beach",
                "win_or_loss":"Win",
                "sealions_score":"1",
                "opponents_score":"0"
            },{
                "opponent":"FC Tucson Women",
                "date":"06\/09\/2017 - 19:30",
                "home_or_away":"Away",
                "location":"Kino North Stadium, 3600 S Country Club Rd, Tucson, AZ 85713",
                "win_or_loss":"",
                "sealions_score":"",
                "opponents_score":""
            },{
                "opponent":"Phoenix Del Sol",
                "date":"06\/10\/2017 - 19:30",
                "home_or_away":"Home",
                "location":"Reach 11 #1, 2425 E Deer Valley Dr, Phoenix, AZ 85050",
                "win_or_loss":"",
                "sealions_score":"",
                "opponents_score":""
            }
        ];
        
        for (var i=0; i < $scope.games.length; i++) {
            $scope.newDate = $scope.games[i].date.split(" - ");
            $scope.games[i].date = new Date($scope.newDate[0]);
            $scope.games[i].time = $scope.newDate[1];
        }

        $scope.globalText = [
            {
                "home":"Welcome to the Sealions app!",
                "game_schedule":"Check out the game schedule below.",
                "roster":"Check out the roster below.",
                "news_posts":"Check out the latest Sealions news below.",
                "sponsors":"Check out our sponsors below."
            }
        ];
        
    }
])

.controller('TeamCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource',
    function($scope, $state, $ionicHistory, $window, $http, $resource) {

        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-roster').then(function(response) {
            $scope.roster = response.data.players;
        });
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-global-text').then(function(response) {
            $scope.globalText = response.data.posts;
        });
        
        $scope.roster = [
            {
                "headshot":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-headshot--grace-shevlin-03.jpg?itok=gsjSjL3w",
                    "alt":""
                },
                "first":"Grace",
                "last":"Shevlin",
                "jersey_number":"3",
                "position":"Defender"
            },{
                "headshot":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-headshot--caroline-shevlin-04.jpg?itok=z0puILLC",
                    "alt":""
                },
                "first":"Caroline",
                "last":"Shevlin",
                "jersey_number":"4",
                "position":"Defender"
            },{
                "headshot":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-headshot--nikki-petracca-05.jpg?itok=-FYRQehJ",
                    "alt":""
                },
                "first":"Nikki",
                "last":"Petracca",
                "jersey_number":"5",
                "position":"Forward"
            }
        ];

        $scope.globalText = [
            {
                "home":"Welcome to the Sealions app!",
                "game_schedule":"Check out the game schedule below.",
                "roster":"Check out the roster below.",
                "news_posts":"Check out the latest Sealions news below.",
                "sponsors":"Check out our sponsors below."
            }
        ];

    }
])

.controller('SponsorCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource',
    function($scope, $state, $ionicHistory, $window, $http, $resource) {

        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-sponsors').then(function(response) {
            $scope.sponsors = response.data.sponsors;
        });
        $http.get('https://dev-sealions.pantheonsite.io/api/sealions-global-text').then(function(response) {
            $scope.globalText = response.data.posts;
        });

        $scope.sponsors = [
            {
                "title":"Ben & Jerrys",
                "logo":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/thumbnail\/public\/sealions-sponsor-logo--ben-and-jerrys.jpg?itok=hE0wyrNy",
                    "alt":""
                },
                "qr_code":{
                    "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/qr_code\/public\/sealions-sponsor-qr-code--ben-and-jerrys.png?itok=rSxrz99q",
                    "alt":""
                },
                "website":"http:\/\/www.benjerry.com\/",
                "body":"From a renovated gas station in Burlington, Vermont, to far-off places with names we sometimes mispronounce, the journey that began in 1978 with 2 guys and the ice cream business they built is as legendary as the ice cream is euphoric."
            }
        ];
        
        $scope.globalText = [
            {
                "home":"Welcome to the Sealions app!",
                "game_schedule":"Check out the game schedule below.",
                "roster":"Check out the roster below.",
                "news_posts":"Check out the latest Sealions news below.",
                "sponsors":"Check out our sponsors below."
            }
        ];

    }
])

;