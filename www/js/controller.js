angular.module('starter.controllers', ['ngResource'])

.constant('SDConfigConstants', {
    'endURL': 'https://dev-sealions.pantheonsite.io/api/',
    'endURL2': 'sealions.customersuccessmarketing.com',
    'endURL3': 'app.sealions.com'
})

.controller('HomeCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $ionicModal, SDConfigConstants) {
        
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        
        // WORKING JSON FEED
        // $http.get($scope.globalPath).then(function(response) {
        //     $scope.global_text = response.data.global_text[0].news_posts;
        //     document.getElementById("globalHeader").outerHTML = $scope.global_text;
        // });
        
        // TEST JSON FEED
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });
        // END TEST JSON FEED

        $ionicModal.fromTemplateUrl('about-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });



        // USED FOR TESTING IN BROWSER
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/"}];
        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
    }
])

.controller('NewsCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {

        $scope.newsPath = SDConfigConstants.endURL + 'sealions-posts';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        
        // WORKING JSON FEED
        // $http.get($scope.newsPath).then(function(response) {
        //     $scope.posts = response.data.posts;
        // });
        // $http.get($scope.globalPath).then(function(response) {
        //     $scope.global_text = response.data.global_text[0].news_posts;
        //     document.getElementById("globalHeader").outerHTML = $scope.global_text;
        // });
        
        // TEST JSON FEED
        $scope.newsPath2 = SDConfigConstants.endURL2 + 'sealions-posts';
        $scope.newsPath3 = SDConfigConstants.endURL3 + 'sealions-posts';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.newsPath).then(function(response) {
            if (response.status === 200) {
                $scope.posts = response.data.posts;
            } else {
                $http.get($scope.newsPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.posts = response.data.posts;
                    } else {
                        $http.get($scope.newsPath3).then(function(response) {
                            $scope.posts = response.data.posts;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });
        // END TEST JSON FEED
        
        $scope.selectPost = function(item) {
            $scope.selectedPost = item;
        };
        
        $ionicModal.fromTemplateUrl('post-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.posts = [
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-005-sealions-win-home-opener.jpg?itok=chKhyVbf","alt":""},"title":"Sealions Win Home Opener","date":"Jun 17, 2017 9:30 pm","body":"June 17, 2017\r\n\r\nSAN DIEGO --- Five San Diego players found the nets against Phoenix Del Sol Saturday night, goalkeeper Kaycee Gunion (CSU-SM) saved a penalty kick, and rookie Monica Dolinsky (Kansas) added two assists to lead the SeaLions to a 5-0 win at home tonight.\r\nThe victory came just a week after the 4-0-0 SeaLions erupted for six unanswered goals against this same Phoenix squad, and keeps San Diego atop the WPSL PacSouth Division.\r\n\r\nGoals by Janelly Farias (UC Irvine), Angelina Hix (MiraCosta), Kiana Palacios (UC Irvine), Taleen Taylor (Boston U), and Rosie Tantillo-Colon (USC), in the 4th, 17th, 48th, 78th, and 81st minutes respectively, run the team's total to 14.\r\n\"Everybody played relaxed and creatively,\" noted SeaLions assistant coach Lu Snyder. \"Our players are in sync and covering and passing well. If that continues, we will go far this season.\"\r\n\r\nThe SeaLions have yielded just one goal this season, a PK against tomorrow's opponent, FC Tucson. The match begins at 2:00 pm at Manchester Stadium on the campus of Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130."},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-004-sealions-rain-goals-in-the-desert.jpg?itok=H6XXv8ct","alt":""},"title":"Sealions rain goals in the desert!","date":"Jun 11, 2017 9:00 pm","body":"By Hector Trujillo\r\nJune 11, 2017\r\n\r\nPhoenix, AZ --- The San Diego SeaLions rained goals upon the Arizona desert this weekend, defeating FC Tucson 2-1 on Friday before drowning Phoenix Del Sol by a 6-0 count. The wins put San Diego (3-0-0) atop the WPSL PacSouth standings with nine points.\r\n\r\nBut not everything was easy as it seemed, as the SeaLions fell behind Tucson (1-2-1) early when a handball in the penalty box led to an eighth-minute penalty score. But the visitors slowly took control of the match and in the 82nd minute, Andrea Duke (NM Highlands) found herself alone on the right side and drilled a bullet past Tucson goalkeeper Lainey Burdett (Arizona) to tie the score. The SeaLions continued to press their attack, and it paid off when Elise Britt (UCLA) took midfielder Angelina Hix (Mira Costa)\u2019s pass and scored to put San Diego ahead in the 89th. The SeaLions\u2019 stout defense, which has posted two shutouts and given up only the PK goal, was more than enough to seal the win.\r\n\r\n\"The wins were a total team effort,\" said SeaLions head coach Jen Lalor. \"We never lost our composure and belief. This team always finds a way to win, it's part of our culture.\"\r\n\r\nSan Diego rolled into Phoenix brimming with confidence, and drew first blood in the 20th minute when midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride) traded passes with forward Soli Gomez (SDSU) before pushing a one-touch volley into the back of the Del Sol net. Monica Dolinsky (Kansas) doubled the SeaLions\u2019 lead in the 29th and they held that lead into halftime.\r\n\r\n\"We exchanged some give-and-go passes, which we\u2019ve worked on in practices,\" said co-captain Tantillo-Colon. \"That enabled us to play our style of game and assert ourselves as a team.\"\r\n\r\nThe second half was all San Diego with goals in the 55th (Hix), 74th (Lili Andino (UC Irvine)), 76th (Kiana Palacios (UC Irvine)), and 79th minutes (Andino). The shutout was the second this season for goalkeeper Kaycee Gunion (CSU San Marcos).\r\n\r\n\"We found the back of the net early but what was encouraging about this win were the improvements we made as the match went on,\" Lalor added. \"Individual players had great performances and the confidence we are playing with right now as a group is fun to watch. Our goal is nothing less than a WPSL Championship.\"\r\n\r\nThe SeaLions will return home to San Diego this weekend when they will host these same Arizona teams: Saturday, June 17th vs. Phoenix (7:30 p.m.), and Sunday, June 18th (2:00 p.m.) against Tucson. First 250 Fans each night will receive a SD SeaLions Scarf!\r\n\r\nThe SeaLions\u2019 home matches are played at Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130. If you can\u2019t attend, follow them live on the ScoreStream App (www.scorestream.com).\r\n\r\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, business & management opportunities. Formed in 1988, it\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL.\r\n\r\n(Photo Courtesy FC Tucson Soccer Club)"},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-003.jpg?itok=FObm-Cqj","alt":""},"title":"San Diego Sealions travel to Arizona to face FC Tucson and Phoenix Del Sol","date":"Jun 9, 2017 2:45 pm","body":"June 9, 2017\r\n\r\nBy Hector Trujillo, Sports Writer\r\nPhoto credit: Aaron Jaffe\r\n\r\nTucson, AZ \u2013 After a gutsy season-opening win in Los Angeles three weeks ago, the San Diego Sealions travel to Arizona this weekend to face interstate rivals FC Tucson and Phoenix Del Sol.\r\n\r\n\"Despite the long break between matches, I don\u2019t think we\u2019re at all rusty, because we know we haven\u2019t reached our potential on the field,\u201d said Sealions defender Caroline Shevlin (St. Mary\u2019s\/Peru U20 WNT) \u201cAnd these desert teams are always tough opponents.\u201d\r\n\r\nFC Tucson (1-1-0) defeated FC Pacific, but lost to Strikers-South Coast, whom San Diego beat 1-0 thanks to a 92nd minute goal by Angelina Hix (Mira Costa). Meanwhile Phoenix Del Sol (0-1-1) drew with Strikers, but lost to Pacific. Thus the Sealions (1-0-0) sit in second place in the WPSL PacSouth Division, one point behind Strikers.\r\n\r\n\"New players have stepped up. Samantha Staab (Clemson) and Monica Dolinsky (Kansas) fit in well to the new system,\" said San Diego Co-Captain Rosie Tantillo-Colon (USC\/FC Gold Pride). \"Monica balances out the middle, both defending and pushing forward, while Sam distributes the ball well out of the back, to start and support our attacks.\"\r\n\r\nFriday's game vs FC Tucson kicks off at 7:30 p.m. at Kino Sports Complex North Stadium, 2817 E. Ajo Way, Tucson. Saturday's match against Phoenix Del Sol also starts at 7:30 p.m., at Reach 11 Sports Complex, 2425 E. Deer Valley Road, Phoenix.\r\n\r\nIf you can\u2019t attend the game, follow it live on the ScoreStream App (www.scorestream.com).\r\n\r\nThe SeaLions open at home (Manchester Stadium at Cathedral HS) on San Diego Soccer Weekend next Saturday, June 17 at 7:30 p.m., and Sunday, June 18, at 2:00 p.m., when they will host these same Arizona teams.\r\n\r\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL."},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-001_0.jpg?itok=3R550Ifz","alt":""},"title":"SeaLions Refuse to Quit, Earn Season-Opening Win!","date":"May 23, 2017 9:00 pm","body":"Huntington Beach, CA \u2013 Angelina Hix found the net just seconds from the final whistle Sunday afternoon, to claim a gutsy and hard-fought 1-0 win for the San Diego SeaLions to open their 2017 WPSL PacSouth season.\r\n\r\nMay 23, 2017\r\n\r\nBy Hector Trujillo, Sports Writer\r\nPhoto credit: Aaron Jaffe\r\n\r\n\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d \r\n\r\nIndeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match.\r\n\r\n\"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\"\r\n\r\nIt was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post.\r\n\r\n\u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d\r\n\r\nDespite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game.\r\n\r\n\"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\"\r\n\r\nThe SeaLions travel to Arizona on June 9-10, 2017 to face Phoenix Del Sol and Tucson FC, before returning to San Diego for San Diego Soccer Weekend on Saturday and Sunday, June 17 at 7:30 p.m., and June 18, at 2:00 p.m., when they will host those same Arizona teams.\r\n\r\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL."},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-002_0.jpg?itok=GzS8NQQ2","alt":""},"title":"SeaLions Hit the Road with High Hopes for 2017!","date":"May 19, 2017 9:00 pm","body":"SAN DIEGO \u2013 The San Diego SeaLions open their 2017 WPSL Season on the road this Sunday, when they travel to Huntington Beach to face PacSouth Division rival Strikers FC \u2013 South Coast. And the SeaLions are hungry.\r\n\r\n\u201cWe\u2019re restless,\u201d says SeaLions head coach Jen Lalor. \u201cWe feel like we could have won the Cheap Panerai Replica WPSL title last year, and we have the chance to prove it this season.\u201d\r\n\r\nThe nucleus of the 2016 SeaLions squad, which won 11 games and lost just one while outscoring opponents 33-7 and yielding a minuscule 10 goals in 13 games, returns this season, led by midfield general Rosie Tantillo-Colon (USC\/FC Gold Pride) (6 assists \/ 3 goals); Defender Leigh Ann Brown (USD\/FC Kansas City); forward Angelina Hix (Mira Costa College) (11 goals); goalkeeper Kaycee Gunion (CSU-San Marcos)(0.77 GAA); the versatile Elise Britt (UCLA) (4 goals); and Mexico Women\u2019s National Team standout Jannelly Farias (UC Irvine).\r\n\r\n\u201cIt was tough, getting so close last year. All of us left the field after that championship game with pits in our stomachs and it\u2019s pushed us to work harder this pre-season,\u201d agreed assistant coach Lu Snyder. \u201cWe try to establish, early on, a mindset in the team to expect to be playing post-season, and their hard work shows they have that determination.\u201d\r\n\r\nAs usual in the PacSouth, no game is easy, and Strikers FC, formerly known as L.A. Salsa, played a difficult pre-season schedule against Xolas of Tijuana, Cal State Dominguez Hills, and Univ. of British Columbia Thunderbirds, in their desire to surpass last season\u2019s 4th place PacSouth finish. They are led by their 2016 top-scorer Natalia Ledezma (UC-Irvine)(6 goals)."}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/"}];
        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].news_posts;
    }
])

.controller('ScheduleCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants', '$cordovaCalendar',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants, $cordovaCalendar) {
        
        $scope.gamesPath = SDConfigConstants.endURL + 'sealions-games';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        
        // WORKING JSON FEED
        // $http.get($scope.gamesPath).then(function(response) {
        //     $scope.games = response.data.games;
        // });
        // $http.get($scope.globalPath).then(function(response) {
        //     $scope.global_text = response.data.global_text[0].game_schedule;
        //     document.getElementById("globalHeader").outerHTML = $scope.global_text;
        // });
        
        // TEST JSON FEED
        $scope.gamesPath2 = SDConfigConstants.endURL2 + 'sealions-games';
        $scope.gamesPath3 = SDConfigConstants.endURL3 + 'sealions-games';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.gamesPath).then(function(response) {
            if (response.status === 200) {
                $scope.games = response.data.games;
            } else {
                $http.get($scope.gamesPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.games = response.data.games;
                    } else {
                        $http.get($scope.gamesPath3).then(function(response) {
                            $scope.games = response.data.games;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });
        // END TEST JSON FEED
        
        $scope.selectGame = function(item) {
            $scope.selectedGame = item;
        };
        
        $ionicModal.fromTemplateUrl('game-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        
        
        $scope.addEvent = function(event) {
            // window.confirm("The Add Event button has been clicked");
            
            // $scope.startDate = new Date(2017, 5, 23, 14, 0, 0, 0);
            // $scope.endDate = new Date(2017, 5, 23, 16, 0, 0, 0);
            
            

            
            $scope.title = "SeaLions " + event.home_or_away + " vs. " + event.opponent;
            $scope.location = event.location;
            $scope.startDate = new Date(event.date);
            $scope.endDate = new Date(event.date);
            $scope.endDate.setDate($scope.endDate.getDate() + 1);
            
            
            

            
            $cordovaCalendar.createEvent({
                title: $scope.title,
                location: $scope.location,
                startDate: $scope.startDate,
                endDate: $scope.endDate
            }).then(function (result) {
                window.confirm("Create Event: SUCCESS");
                window.confirm($scope.startDate); 
                window.confirm($scope.endDate); 
            }, function (err) {
                window.confirm('Create Event: ERROR, ' + err);
            }); 

        };
            

        
        
        
        
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.games = [
            {"opponent":"Strikers FC South Coast","date":"May 21, 2017","time":"4:00 pm","home_or_away":"Away","location":"Ocean View High - 7071 Gothard St, Huntington Beach","win_or_loss":"Win","sealions_score":"1","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-fc-coast.jpg?itok=DW4cE6GX","alt":""},"game_summary":"\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d \r\n\r\nIndeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match.\r\n\r\n\"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\"\r\n\r\nIt was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post.\r\n\r\n\u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d\r\n\r\nDespite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game.\r\n\r\n\"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\""},
            {"opponent":"FC Tuscon Women","date":"Jun 9, 2017","time":"7:30 pm","home_or_away":"Away","location":"Kino North Stadium, 3600 S Country Club Rd, Tucson, AZ 85713","win_or_loss":"Win","sealions_score":"2","opponents_score":"1","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-tuscon-women.jpg?itok=Ax66qFw1","alt":""},"game_summary":""},
            {"opponent":"Strikers Phoenix Del Sol","date":"Jun 10, 2017","time":"7:30 pm","home_or_away":"Away","location":"Reach 11 #1, 2425 E Deer Valley Dr, Phoenix, AZ 85050","win_or_loss":"Win","sealions_score":"6","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-phoenix-del-sol.jpg?itok=5YSno47u","alt":""},"game_summary":""},
            {"opponent":"Strikers Phoenix Del Sol","date":"Jun 17, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"Win","sealions_score":"5","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-phoenix-del-sol.jpg?itok=5YSno47u","alt":""},"game_summary":""},
            {"opponent":"FC Tuscon Women","date":"Jun 18, 2017","time":"2:00 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"Win","sealions_score":"3","opponents_score":"1","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-tuscon-women.jpg?itok=Ax66qFw1","alt":""},"game_summary":""},
            {"opponent":"Strikers FC South Coast","date":"Jun 24, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-fc-coast.jpg?itok=DW4cE6GX","alt":""},"game_summary":""},
            {"opponent":"FC Pacific","date":"Jun 25, 2017","time":"7:30 pm","home_or_away":"TBA","location":"TBA","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-pacific.jpg?itok=8waC7NIj","alt":""},"game_summary":""},
            {"opponent":"LA Galaxy San Diego","date":"Jul 1, 2017","time":"6:00 pm","home_or_away":"Away","location":"Army & Navy Academy, 2605 Carlsbad Blvd, Carlsbad, CA 92008","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--la-galaxy-san-diego.jpg?itok=9jdnLtoC","alt":""},"game_summary":""},
            {"opponent":"FC Pacific","date":"Jul 2, 2017","time":"2:00 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-pacific.jpg?itok=8waC7NIj","alt":""},"game_summary":""},
            {"opponent":"LA Galaxy San Diego","date":"Jul 8, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--la-galaxy-san-diego.jpg?itok=9jdnLtoC","alt":""},"game_summary":""}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/"}];
        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].game_schedule;
    }
])

.controller('TeamCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {
        
        $scope.rosterPath = SDConfigConstants.endURL + 'sealions-roster';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        
        // WORKING JSON FEED
        // $http.get($scope.rosterPath).then(function(response) {
        //     $scope.roster = response.data.players;
        // });
        // $http.get($scope.globalPath).then(function(response) {
        //     $scope.global_text = response.data.global_text[0].roster;
        //     document.getElementById("globalHeader").outerHTML = $scope.global_text;
        // });
        
        // TEST JSON FEED
        $scope.rosterPath2 = SDConfigConstants.endURL2 + 'sealions-roster';
        $scope.rosterPath3 = SDConfigConstants.endURL3 + 'sealions-roster';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';
        
        $http.get($scope.rosterPath).then(function(response) {
            if (response.status === 200) {
                $scope.roster = response.data.players;
            } else {
                $http.get($scope.rosterPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.roster = response.data.players;
                    } else {
                        $http.get($scope.rosterPath3).then(function(response) {
                            $scope.roster = response.data.players;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });
        // END TEST JSON FEED
        
        $scope.selectPlayer = function(item) {
            $scope.selectedPlayer = item;
        };
        
        $ionicModal.fromTemplateUrl('player-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.roster = [
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--grace-shevlin-03.jpg?itok=9BnE8J73","alt":""},"first":"Grace","last":"Shevlin","jersey_number":"3","position":"Defender","bio":"The Good Twin","college":"San Diego State University","hometown":"San Diego, CA","years_with_sealions":"5"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--caroline-shevlin-04.jpg?itok=7FRCHuWL","alt":""},"first":"Caroline","last":"Simunich","jersey_number":"4","position":"Defender","bio":"Caroline started playing with the SeaLions in 2015, joining her (11 minute younger) twin sister, Grace Shevlin, who has been with the team for 5 seasons, one of which she won a national championship. Prior to joining the SeaLions, she played collegiately at SMC (her first 2 years at LBSU) and internationally on the Peruvian National Team (full and u-20). On the SealLions she plays center back but can play a range of other positions. Off the field, Caroline is a Barcelona fan and has a strong, but friendly, rivalry with her husband, Sergio, who is Madrile\u00f1o.","college":"St. Mary's College of California","hometown":"San Diego, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--cassie-callahan-05.jpg?itok=LsKblbSZ","alt":""},"first":"Cassie","last":"Callahan","jersey_number":"5","position":"Midfielder","bio":"Played for the San Diego Surf for 11 years, aiding in two national championships.\r\n\r\nA 2011 graduate of Coronado High School ... Honored as both the CIF San Diego Section and Western League Player of the Year as a senior in 2011, as well as All-Academic Team Captain ... Led the Islanders to three Western League crowns and CIF titles in 2008 (IV), 2010 (III) and 2011 (IV) ... CIFSDS Division III finalist in 2009 ... CIFSDS and CIFSDS Division III Player of the Year in 2010 ... Two-time All-CIF First Team ... Also lettered in track and field.\r\n\r\nCounts playing in the 2012 NCAA semifinals and final in Georgia, and winning nationals with the Surf as a high school senior, among her most memorable moments in soccer ... Main hobby is surfing ... Roots for San Diego teams ... Favorite athlete is FC Barcelona and Argentina star Lionel Messi ... Voted Best Dancer by her high school's senior class.","college":"UCSD","hometown":"Coronado, CA","years_with_sealions":"6"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/Palacios.JPG?itok=-9nSincL","alt":""},"first":"Kiana","last":"Palacios","jersey_number":"6","position":"Midfield","bio":"","college":"UC Irvine","hometown":"Lake Forest, CA","years_with_sealions":"1"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--leigh-ann-brown-07.jpg?itok=udT0dsRv","alt":""},"first":"Leigh Ann","last":"Brown","jersey_number":"7","position":"Defender - Midfielder","bio":"Born and raised in San Diego. Played at Univ of San Diego from 2004-2007 and was just recently inducted into the Hall of Fame in 2016.  Played professionally, domestic and internationally, from 2009-2015. Won back to back national championships with FC Kansas City in 2014 & 2015. Earned 2 caps with the USWNT in 2013 and 2014. Returned home and am now coaching at USD and San Diego Soccer Club. Married with one fur baby. Elie is my best friend.\r\n","college":"University of San Diego","hometown":"San Diego, CA","years_with_sealions":"2"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/lili.jpg?itok=W7qPjY6a","alt":""},"first":"Lili","last":"Andino","jersey_number":"8","position":"Midfield","bio":"","college":"UC Irvine","hometown":"San Diego, CA","years_with_sealions":"2"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--soli-gomez-09.jpeg?itok=c8sbGbOe","alt":""},"first":"Soli","last":"Gomez","jersey_number":"9","position":"Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--janelly-farias-10.jpg?itok=BLYxy13w","alt":""},"first":"Janelly","last":"Farias","jersey_number":"10","position":"Midfielder","bio":"Current player on a Mexico Women's National Soccer team. ","college":"UC Irvine","hometown":"Santa Ana, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--angelina-hix-12.jpg?itok=JZV2lukz","alt":""},"first":"Angelina","last":"Hix","jersey_number":"12","position":"Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--samantha-staab-13.jpg?itok=xJ-5Z0Cd","alt":""},"first":"Samantha","last":"Staab","jersey_number":"13","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--karina-cisneros-14.jpg?itok=e3d3o1Qh","alt":""},"first":"Karina","last":"Cisneros","jersey_number":"14","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--elissa-magracia-16.jpg?itok=0JMD-hm6","alt":""},"first":"Elissa","last":"Magracia","jersey_number":"16","position":"Midfielder","bio":"Going to start from the beginning...I was born and raised in beautiful, sunny San Diego. Over the course of my club experience, I played 9 years with San Diego Surf. Since I couldn\u2019t leave the great weather, I decided to play college soccer at the University of San Diego from 2008-2011. Even though I \u201cgraduated,\u201d shortly after that, I had the opportunity to coach at my alma mater (USD) for four seasons. Although I have recently decided to pursue a new career, soccer will always be a part of my life. Life outside the field consists of traveling, hanging out with my best friend\u2014'SUP LEIGH ANN BROWN, and watching all kinds of movies. Interesting facts: love country music. Owning a pig is on my bucket list. Nickname is \u201cPuppy.\" So one last thing\u2026 [take the first letter of every sentence and see what it says]! ","college":"University of San Diego","hometown":"Chula Vista, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--monica-dolinsky-17.jpg?itok=2cWd9s2H","alt":""},"first":"Monica","last":"Dolinsky","jersey_number":"17","position":"Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--rosie-tantillo-colon-19.jpg?itok=bXd_uRrJ","alt":""},"first":"Rosie","last":"Tantillo-Col\u00f3n","jersey_number":"19","position":"Midfielder","bio":"As a four-year starting midfielder for the Women of Troy, Rosie was the Pac-10 Freshman of the Year and went on to earn All-Pac-10 First Team honors the next three seasons. In the USC history books, she ranks second all-time in game-winning goals (12), third in assists (25) and shots (224), and fourth in goals (25) and points (75).\r\n\r\nAfter college she played for the Pali Blue in 2008 who were the W-League Champions. In 2009 played for the Buffalo Flash, and in 2010 played with the FC Gold Pride in the WPS, where they won the 2010 WPS Championship.\r\n\r\nAfter 2010 the league folded and Rosie moved back to San Diego to pursue a career. Currently, she is a captain for the San Diego Sea Lions where she has played for 5 years. Rosie is going on her 4th year coaching at NADO Select and is currently an Office Manager for Jorgensen Law since. ","college":"USC","hometown":"San Diego, CA","years_with_sealions":"6"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--andrea-duke-20.jpg?itok=Q9Djz1YA","alt":""},"first":"Andrea","last":"Duke","jersey_number":"20","position":"Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--elise-britt-21.jpg?itok=inAK0VzX","alt":""},"first":"Elise","last":"Britt","jersey_number":"21","position":"Defender - Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--victoria-gersh-22.jpg?itok=6xKSYcVE","alt":""},"first":"Vistoria","last":"Gersh","jersey_number":"22","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--taleen-taylor-23.jpg?itok=M2ta3aSu","alt":""},"first":"Taleen","last":"Taylor","jersey_number":"23","position":"Midfielder","bio":"My mom is my role model. My hubby is my best friend. I love plant-based, raw foods. I hold the bench press record at BU among the collegiate athletes. I speak fluent Armenia. I love to braid hair. I love people. I aspire to be a bright light in this dark world. \r\n\r\nSoccer has always been a gift in my life. The blessings that have come from playing competitively at a very young age have shaped my character today. I played for Arsenal FC in my club years and then competed at the Division 1 level at Boston University. While in Boston, I've played for two different WPSL teams for 7+ years - Boston Aztecs (MA) and New England Mutiny (CT). This will be my 4th season as a San Diego Sealion. #arfarfarf","college":"Boston University","hometown":"Riverside, CA","years_with_sealions":"4"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--abigail-callahan-24.jpg?itok=Q_fJ7px1","alt":""},"first":"Abigail","last":"Callahan","jersey_number":"24","position":"Defender - Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--jayden-montejano-06.jpg?itok=0F0xMO1d","alt":""},"first":"Jayden","last":"Montejano","jersey_number":"26","position":"Defender - Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--kaycee-gunion-30.jpg?itok=dQA-oPZX","alt":""},"first":"Kaycee","last":"Gunion","jersey_number":"30","position":"Goalkeeper","bio":"Kaycee has been playing soccer since she was 5. She started playing AYSO and eventually moved to club soccer where she spent most of her soccer career at Crusaders Soccer Club and then her last year of club at West Coast Football Club. This is also where she began playing goalkeeper at the U10 age, the position she would fall in love with. Eventually, Kaycee went to college at California State University at San Marcos where she was the starting goalkeeper. At the end of her Freshman year Kaycee broke her thumb and was in recovery, by her Sophmore year she had fully recovered and in search of more soccer during her off season. This is when she discovered the San Diego Sea Lions and she has been here ever since. Kaycee during her time with the Sea Lions has graduated from CSUSM, went to grad school at SDSU and graduated with a doctorate in physical therapy, and is now a full time Physical Therapist, not to mention was a part of the 2013 Championship Team. Kaycee has made a lot of milestone in her life since joining the Sea Lions and is looking to make even more with us to come both on and off the field! ","college":"Cal State San Marcos","hometown":"Santee, CA","years_with_sealions":"8"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--jen-lalor-00.jpg?itok=csVz8NWU","alt":""},"first":"Jen","last":"Lalor","jersey_number":"1001","position":"Coach","bio":"Jen Lalor, former known as Lalor-Nielsen, is passionate about soccer. In a country where soccer is rapidly becoming more popular, Jen Lalor is a pioneer in the landscape of this sport.  Born in Chula Vista and a home grown product of San Diego, Lalor is a former professional soccer player who played for the U.S. National Women\u2019s Team and was nominated for the National Soccer Hall of Fame in 2012. Lalor played at the Women\u2019s World Cup in Sweden and as a college student at Santa Clara University. More modest than most, Lalor is a star who wants to give back and a powerhouse coach on and off the field.","college":"Santa Clara University","hometown":"Chula Vista, CA","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--lu-snyder-00.jpg?itok=UuM6mtze","alt":""},"first":"Lu","last":"Snyder","jersey_number":"1002","position":"Assistant Coach","bio":"Lorena \"Lu\" Snyder played at San Diego State from 1990-93, has played goal for the San Diego SeaLions of the semipro Women's Premier Soccer League, and is currently the Sealions president and assistant coach She recruits players, organizes games and practices, reserves fields, updates the team's Web site, plus all sorts of administrative duties no one ever hears about.","college":"San Diego State University","hometown":"Carmichael, CA","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--sammie-mascot.png?itok=xuF5U7OR","alt":""},"first":"Sammie","last":"The Sealion","jersey_number":"1003","position":"Mascot","bio":"I was born near the Children's Pool in La Jolla and I grew up right here in San Diego. Currently I live near Torrey Pines State Beach. I love this spot since I'm swimming distance from the team's home, Cathedral High School. Being so close gives me more time to do what I do best - root for the greatest team of all time: the SeaLions!","college":"College of Life","hometown":"San Diego, CA","years_with_sealions":"13"}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/"}];
        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].roster;
    }
])

.controller('SponsorCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {

        $scope.sponsorsPath = SDConfigConstants.endURL + 'sealions-sponsors';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';

        // WORKING JSON FEED
        // $http.get($scope.sponsorsPath).then(function(response) {
        //     $scope.sponsors = response.data.sponsors;
        // });
        // $http.get($scope.globalPath).then(function(response) {
        //     $scope.global_text = response.data.global_text[0].sponsors;
        //     document.getElementById("globalHeader").outerHTML = $scope.global_text;

        // });
        
        // TEST JSON FEED
        $scope.sponsorsPath2 = SDConfigConstants.endURL2 + 'sealions-sponsors';
        $scope.sponsorsPath3 = SDConfigConstants.endURL3 + 'sealions-sponsors';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';
        
        $http.get($scope.sponsorsPath).then(function(response) {
            if (response.status === 200) {
                $scope.sponsors = response.data.sponsors;
            } else {
                $http.get($scope.sponsorsPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.sponsors = response.data.sponsors;
                    } else {
                        $http.get($scope.sponsorsPath3).then(function(response) {
                            $scope.sponsors = response.data.sponsors;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });
        // END TEST JSON FEED

        $scope.selectSponsor = function(item) {
            $scope.selectedSponsor = item;
        };
        
        $ionicModal.fromTemplateUrl('sponsor-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.sponsors = [
            {"title":"Bahn Thai","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/bahnthai_on.png?itok=w8LsuvYx","alt":""},"qr_code":"","website":"http:\/\/bahnthai.net\/","body":"Family owned & operated\r\nrestaurant serving freshly\r\ncooked, flavorful, authentic Thai\r\ndishes"},
            {"title":"Ben & Jerrys","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--ben-and-jerrys.jpg?itok=jfxZhi7W","alt":""},"qr_code":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/qr_code\/public\/sealions-sponsor-qr-code--ben-and-jerrys.png?itok=rSxrz99q","alt":""},"website":"http:\/\/www.benjerry.com\/","body":"From a renovated gas station in Burlington, Vermont, to far-off places with names we sometimes mispronounce, the journey that began in 1978 with 2 guys and the ice cream business they built is as legendary as the ice cream is euphoric."}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/"}];
        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].sponsors;
    }
])

;