// When running the seed file for Heroku; 'heroku run node {folder seed is in}/{seed file name}
const mongoose = require("mongoose");
const teamsModel = require("../models/teams");
const playersModel = require("../models/players");

// This file empties the database and inserts new games and ceremonies.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hallOfGreatsDB",
).asPromise;

// Team Variables
const cardinals = "Arizona Cardinals";
const falcons = "Atlanta Falcons";
const ravens = "Baltimore Ravens";
const bills = "Buffalo Bills";
const panthers = "Carolina Panthers";
const bears = "Chicago Bears";
const bengals = "Cincinnati Bengals";
const browns = "Cleveland Browns";
const cowboys = "Dallas Cowboys";
const broncos = "Denver Broncos";
const lions = "Detroit Lions";
const packers = "Green Bay Packers";
const texans = "Houston Texans";
const colts = "Indianapolis Colts";
const jaguars = "Jacksonville Jaguars";
const chiefs = "Kansas City Chiefs";
const raiders = "Las Vegas Raiders";
const chargers = "Los Angeles Chargers";
const rams = "Los Angeles Rams";
const dolphins = "Miami Dolphins";
const vikings = "Minnesota Vikings";
const patriots = "New England Patriots";
const saints = "New Orleans Saints";
const giants = "New York Giants";
const jets = "New York Jets";
const eagles = "Philadelphia Eagles";
const steelers = "Pittsburgh Steelers";
const fortyNiners = "San Francisco 49ers";
const seahawks = "Seattle Seahawks";
const buccaneers = "Tampa Bay Buccaneers";
const titans = "Tennessee Titans";
const commanders = "Washington Commanders"

const teamSeed = [
  {
    team_name: "Arizona Cardinals",
    history: "To mark the opening of State Farm Stadium in 2006, the Cardinals began a Ring of Honor to showcase all eras of the franchise.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ARI",
    color: "#97233F",
    border_color: "#000000"
  },
  {
    team_name: "Atlanta Falcons",
    history: "While they don't retire jersey numbers, the Atlanta Falcons want to honor their former players by including them in their franchise's Ring of Honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ATL",
    color: "#A71930",
    border_color: "#000000"
  },
  {
    team_name: "Baltimore Ravens",
    history: "Created in 2000, the Baltimore Ravens Ring of Honor is to honor former players and personnel who made outstanding contributions to the Baltimore Ravens and the Baltimore Colts organizations.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BAL",
    color: "#241773",
    border_color: "#000000"
  },
  {
    team_name: "Buffalo Bills",
    history: "The Buffalo Bills Wall of Fame was created in 1980 to honor former players, administrators, and coaches who had a significant role in the franchise. The requirements to get inducted into the Wall of Fame are: the individual must have played with the team for three years and must be retired. The selection committee is comprised of club personnel and media members.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BUF",
    color: "#00338D",
    border_color: "#C60C30"
  },
  {
    team_name: "Carolina Panthers",
    history: "The Hall of Honor was established in 1997 as a still young franchsie. They've inducted six people who define being a Carolina Panther.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CAR",
    color: "#0085CA",
    border_color: "#101820"
  },
  {
    team_name: "Chicago Bears",
    history: "The Chicago Bears currently do not have a Ring of Honor or team Hall of Fame to commemorate players, coaches, or executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CHI",
    color: "#0B162A",
    border_color: "#C83803"
  },
  {
    team_name: "Cincinnati Bengals",
    history: "The Cincinnati Bengals introduced a Ring of Honor for their historical team in April of 2021. They announced two inductees, but will let their fans choose two others between a list of 17 other great players to complete its first Ring of Honor class. The fans chose Ken Anderson and Ken Riley.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CIN",
    color: "#FB4F14",
    border_color: "#000000"
  },
  {
    team_name: "Cleveland Browns",
    history: "Established in 2010, the Cleveland Browns Ring of Honor commemorates the past greats of the Cleveland Browns franchise. The Inaugural class featured the 16 players who were already inducted into the Pro Football Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CLE",
    color: "#311D00",
    border_color: "#FF3C00"
  },
  {
    team_name: "Dallas Cowboys",
    history: "First introduced in Texas Stadium in Irving, Texas, the Cowboys Ring of Honor, in the words of Jerry Jones: 'stands for men who built this franchise and it had it call America's Team.'",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DAL",
    color: "#041E42",
    border_color: "#869397"
  },
  {
    team_name: "Denver Broncos",
    history: "Began in 1984, the Denver Broncos have a Ring of Fame to honor their former players, executives, and coaches who have made a great impact on the team.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DEN",
    color: "#FB4F14",
    border_color: "#002244"
  },
  {

    team_name: "Detroit Lions",
    history: "The Pride of the Lions began in 2009 with an introductory class of 12 players. Only three players in the Pride of the Lions are not in the Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DET",
    color: "#0076B6",
    border_color: "#B0B7BC"
  },
  {
    team_name: "Green Bay Packers",
    history: "For the Lambeau Field Ring of Honor that is dedicated to former Packers greats, the only requirements for to be inducted into it seemingly, is to be a Hall of Famer and contributed to the Packers organization in meaningful ways. The Packers do have a team Hall of Fame that includes over 150 former franchise greats.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/GB",
    color: "#203731",
    border_color: "#FFB612"
  },
  {
    team_name: "Houston Texans",
    history: "As the newest NFL Franchise, the Houston Texans began their Ring of Honor in 2017.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/HOU",
    color: "#03202F",
    border_color: "#A71930"
  },
  {
    team_name: "Indianapolis Colts",
    history: "Established in 1996 and inducted longtime owner, Robert Irsay, as its first inductee before his passing the year following.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/IND",
    color: "#002C5F",
    border_color: "#A2AAAD"

  },
  {
    team_name: "Jacksonville Jaguars",
    history: "Called the Pride of the Jaguars by the fans in 2006, it represents the Ring of Honor for one of the newest franchises in the NFL. It was unveiled in the 2006 NFL season against the New York Jets.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/JAX",
    color: "#006778",
    border_color: "#9F792C"
  },
  {
    team_name: "Kansas City Chiefs",
    history: "A Team Hall of Fame that was established in 1970. Each year except 1983 and 2020, has included one inductee. Requirements for induction are that a player, coach, or contributor must have been with the team for four years and been retired for four years. Three exceptions to that are Mack Lee Hill, Joe Delaney, and Derrick Thomas.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/KC",
    color: "#E31837",
    border_color: "#FFB81C"
  },
  {
    team_name: "Las Vegas Raiders",
    history: "The Las Vegas Raiders currently do not have a Ring of Honor or team Hall of Fame to commemorate their players, coaches, or executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LV",
    color: "#000000",
    border_color: "#A5ACAF"

  },
  {
    team_name: "Los Angeles Chargers",
    history: "Began in 1976, the Chargers Hall of Fame acts as their Ring of Honor. All four inductees in this year were inducted posthumously. In 2012, the team allowed the fans to induct that year's inductee, choosing Punter, Darren Bennett. After moving to Los Angeles in 2017, the Chargers inducted Bobby Beathard to the Team Hall of Fame in 2018.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAC",
    color: "#0080C6",
    border_color: "#FFC20E"
  },
  {
    team_name: "Los Angeles Rams",
    history: "While St. Louis did have a Ring of Fame for football in its city, the Los Angeles Rams do not specifically have a Ring of Honor or Team Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAR",
    color: "#003594",
    border_color: "#FF8200"
  },
  {
    team_name: "Miami Dolphins",
    history: "The Miami Dolphins Honor Roll was created in 1990 with the induction of five people from the franchise's history. The Honor Roll helps demonstrate the great players and adminstrators from the history of the Dolphins who helped make significant contributions to the team.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIA",
    color: "#008E97",
    border_color: "#FC4C02"

  },
  {
    team_name: "Minnesota Vikings",
    history: "Started in 1998, the Minnesota Vikings Ring of Honor was begun with six players, coaches, and executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIN",
    color: "#4F2683",
    border_color: "#FFC62F"
  },
  {
    team_name: "New England Patriots",
    history: "Begun in 1991, the New England Patriots Team Hall of Fame features franchise greats who impacted the franchise greatly. In order to be eligible, players and coaches must be retired for at least four years.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NE",
    color: "#002244",
    border_color: "#B0B7BC"
  },
  {
    team_name: "New Orleans Saints",
    history: "Beginning in 2013, the New Orleans Saints began honoring their history with the creation of the Ring of Honor in Caesars Superdome. They inducted the first three nominees during halftime against the Cowboys in 2013.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NO",
    color: "#101820",
    border_color: "#D3BC8D"
  },
  {
    team_name: "New York Giants",
    history: "The Giants Ring of Honor was unveiled in 2010 during a game against the Chicago Bears. Their inaugural induction class featured 30 players, coaches, and executives who made a great impact on the franchise.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYG",
    color: "#0B2265",
    border_color: "#A71930"
  },
  {
    team_name: "New York Jets",
    history: "The New York Jets Ring of Honor was established in July 2010 to commemorate and honor former players. Players are nominated by an internal committee before being inducted into the Ring of Honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYJ",
    color: "#125740",
    border_color: "#000000"
  },
  {
    team_name: "Philadelphia Eagles",
    history: "Began in 1987 as the Eagles Honor Roll, it serves to honors players, executives, and coaches from the franchise's long history. Their inaugural induction class in 1987 was included with every player who was inducted into the Pro Football Hall of Fame as an Eagle. Players must be retired for three years to be considered to be included in the Eagles Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PHI",
    color: "#004C54",
    border_color: "#A5ACAF"
  },
  {
    team_name: "Pittsburgh Steelers",
    history: "Begun in 2017 with an inaugural inductee class of 27, the Pittsburgh Steelers Hall of Honor commemorates the franchise's history.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PIT",
    color: "#000000",
    border_color: "#FFB612"
  },
  {
    team_name: "San Francisco 49ers",
    history: "Started in 2009, the Edward DeBartolo Sr. 49ers Hall of Fame is the team's official hall of honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SF",
    color: "#AA0000",
    border_color: "#B3995D"
  },
  {
    team_name: "Seattle Seahawks",
    history: "The Seattle Seahawks Ring of Honor was established in 1989 and has inducted 12 people thus far who exemplify being a Seattle Seahawk.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SEA",
    color: "#002244",
    border_color: "#69BE28"
  },
  {
    team_name: "Tampa Bay Buccaneers",
    history: "In November 2009, the team unveiled a Ring of Honor at their current stadium, Raymond James Stadium.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TB",
    color: "#D50A0A",
    border_color: "#34302B"
  },
  {
    team_name: "Tennessee Titans",
    history: "Establishment of the Titans/Oilers Hall of Fame coincides with the 40th anniversary of the franchise by Owner, Bud Adams. It encompasses the history of the Houston Oilers and the Tennessee Titans respectively.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TEN",
    color: "#0C2340",
    border_color: "#4B92DB"
  },
  {
    team_name: "Washington Commanders",
    history: "Beginning with the creation of FedEx Field, the Washington Commanders began having a Ring of Fame for their team history to honor players, executives, and coaches who made a large impact on the team's history.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/WAS",
    color: "#5a1414",
    border_color: "#FFB612"
  }
]

const playerSeed = [
  // Arizona Cardinals
  {
    full_name: "Charles Bidwill",
    player_position: "Owner",
    team_name: team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1933 - 1947",
    year_inducted: 2006
  },
  {
    full_name: "Jimmy Conzelman",
    player_position: "Head Coach",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1940 - 1942, 1946 - 1948",
    year_inducted: 2006
  },
  {
    full_name: "John 'Paddy' Driscoll",
    player_position: "QB & Head Coach",
    team_name: "Arizona Cardinals",
    notes: "Was the Head Coach in 1920 and ended his tenure in 1922, while continuing to be the QB until 1925",
    years_active: "1920 - 1925, 1920 - 1922",
    year_inducted: 2006
  },
  {
    full_name: "Marshall Goldberg",
    player_position: "RB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1939 - 1943, 1946 - 1948",
    year_inducted: 2006
  },
  {
    full_name: "Dick 'Night Train' Lane",
    player_position: player_position: "CB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1954 - 1959",
    year_inducted: 2006
  },
  {
    full_name: "Ollie Matson",
    player_position: "RB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1952, 1954 - 1958",
    year_inducted: 2006
  },
  {
    full_name: "Ernie Nevers",
    player_position: "FB & Head Coach",
    team_name: "Arizona Cardinals",
    notes: "Was the Head Coach of the 1930, 1931, and 1939 seasons",
    years_active: "1929 - 1931, 1930 - 1931, 1939",
    year_inducted: 2006
  },
  {
    full_name: "Charley Trippi",
    player_position: "RB & QB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1947 - 1955",
    year_inducted: 2006
  },
  {
    full_name: "Larry Wilson",
    player_position: "Safety",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1960 - 1972",
    year_inducted: 2006
  },
  {
    full_name: "Dan Dierdorf",
    player_position: "OT",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1971 - 1983",
    year_inducted: 2006
  },
  {
    full_name: "Pat Tillman",
    player_position: "Safety",
    team_name: "Arizona Cardinals",
    notes: "Was Killed in Action while serving in the US Army",
    years_active: years_active: "1998 - 2001",
    year_inducted: 2007
  },
  {
    full_name: "Roger Wehrli",
    player_position: player_position: "CB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1969 - 1982",
    year_inducted: 2008
  },
  {
    full_name: "Aeneas Williams",
    player_position: player_position: "CB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1991 - 2000",
    year_inducted: 2008
  },
  {
    full_name: "Kurt Warner",
    player_position: "QB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "2005 - 2009",
    year_inducted: 2014
  },
  {
    full_name: "Adrian Wilson",
    player_position: "Safety",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "2001 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Roy Green",
    player_position: "WR",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1979 - 1990",
    year_inducted: 2016
  },
  {
    full_name: "Jim Hart",
    player_position: "QB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "1966 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Carson Palmer",
    player_position: "QB",
    team_name: "Arizona Cardinals",
    notes: NULL,
    years_active: "2013 - 2017",
    year_inducted: 2019
  },
  // Atlanta Falcons 
  {
    full_name: "William Andrews",
    player_position: "RB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1979 - 1983, 1986",
    year_inducted: 2004
  },
  {
    full_name: "Steve Bartkowski",
    player_position: "QB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1975 - 1985",
    year_inducted: 2004
  },
  {
    full_name: "Tommy Nobis",
    player_position: "LB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1966 - 1976",
    year_inducted: 2004
  },
  {
    full_name: "Jessie Tuggle",
    player_position: "LB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1987 - 2000",
    year_inducted: 2004
  },
  {
    full_name: "Jeff Van Note",
    player_position: "Center",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1969 - 1986",
    year_inducted: 2006
  },
  {
    full_name: "Claude Humphrey",
    player_position: "DE",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1968 - 1978",
    year_inducted: 2008
  },
  {
    full_name: "Mike Kenn",
    player_position: "OT",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1978 - 1994",
    year_inducted: 2008
  },
  {
    full_name: "Deion Sanders",
    player_position: "CB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1989 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Gerald Riggs",
    player_position: "RB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "1982 - 1988",
    year_inducted: 2013
  },
  {
    full_name: "Warrick Dunn",
    player_position: "RB",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "2002 - 2007",
    year_inducted: 2017
  },
  {
    full_name: "Roddy White",
    player_position: "WR",
    team_name: "Atlanta Falcons",
    notes: NULL,
    years_active: "2005 - 2015",
    year_inducted: 2019
  },
  // Baltimore Ravens
  {
    full_name: "Earnest Byner",
    player_position: "RB & Executive",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1996 - 2003",
    year_inducted: 2001
  },
  {
    full_name: "Johnny Unitas",
    player_position: "QB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1956-1972",
    year_inducted: 2002
  },
  {
    full_name: "Lenny Moore",
    player_position: "RB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1956 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Art Donovan",
    player_position: "DT",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1953 - 1961",
    year_inducted: 2002
  },
  {
    full_name: "Jim Parker",
    player_position: "OL",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1957 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Raymond Berry",
    player_position: "WR",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1955 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Ted Hendricks",
    player_position: "LB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1969 - 1973",
    year_inducted: 2002
  },
  {
    full_name: "John Mackey",
    player_position: "TE",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1963 - 1971",
    year_inducted: 2002
  },
  {
    full_name: "Gino Marchetti",
    player_position: "DE",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1953 - 1966",
    year_inducted: 2002
  },
  {
    full_name: "Art Modell",
    player_position: "Founding Owner",
    team_name: "Baltimore Ravens",
    notes: "Brought Baltimore back to the NFL",
    years_active: "1996 - 2004",
    year_inducted: 2004
  },
  {
    full_name: "Michael McCrary",
    player_position: "DE",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1997 - 2002",
    year_inducted: 2004
  },
  {
    full_name: "Peter Boulware",
    player_position: "LB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1997 - 2005",
    year_inducted: 2006
  },
  {
    full_name: "Jonathan Ogden",
    player_position: "OT",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1996 - 2007",
    year_inducted: 2008
  },
  {
    full_name: "Matt Stover",
    player_position: "Kicker",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Jamal Lewis",
    player_position: "RB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "2000 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Ray Lewis",
    player_position: "LB",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1996 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Todd Heap",
    player_position: "TE",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "2001 - 2010",
    year_inducted: 2014
  },
  {
    full_name: "Ed Reed",
    player_position: "Safety",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "2002 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Brian Billick",
    player_position: "Head Coach",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "1999 - 2007",
    year_inducted: 2019
  },
  {
    full_name: "Haloti Ngata",
    player_position: "DT",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "2006 - 2014",
    year_inducted: 2021
  },
  {
    full_name: "Marshal Yanda",
    player_position: "OG",
    team_name: "Baltimore Ravens",
    notes: NULL,
    years_active: "2007 - 2019",
    year_inducted: 2022
  },
  // Buffalo Bills
  {
    full_name: "OJ Simpson",
    player_position: "RB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1969 - 1977",
    year_inducted: 1980
  },
  {
    full_name: "Jack Kemp",
    player_position: "QB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1969",
    year_inducted: 1984
  },
  {
    full_name: "Pat McGroder",
    player_position: "Contributor & General Manager",
    team_name: "Buffalo Bills",
    notes: "Was instrumental in bringing the Bills to Buffalo during the beginning years of the AFL",
    years_active: "1961 - 1974",
    year_inducted: 1985
  },
  {
    full_name: "Tom Sestak",
    player_position: "DT",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1968",
    year_inducted: 1987
  },
  {
    full_name: "Billy Shaw",
    player_position: "OG",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1961 - 1969",
    year_inducted: 1988
  },
  {
    full_name: "Ralph C. Wilson Jr.",
    player_position: "Founding Owner",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1959 - 2014",
    year_inducted: 1989
  },
  {
    full_name: "The 12th Man",
    player_position: "Fans",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1960 - Present",
    year_inducted: 1992
  },
  {
    full_name: "Elbert Dubenion",
    player_position: "WR",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1960 - 1968",
    year_inducted: 1993
  },
  {
    full_name: "Mike Stratton",
    player_position: "LB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1972",
    year_inducted: 1994
  },
  {
    full_name: "Joe Ferguson",
    player_position: "QB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1973 - 1984",
    year_inducted: 1995
  },
  {
    full_name: "Marv Levy",
    player_position: "Head Coach & General Manager",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1986 - 1997, 2006 - 2007",
    year_inducted: 1996
  },
  {
    full_name: "Joe DeLamielleure",
    player_position: "OG",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1973 - 1979, 1985",
    year_inducted: 1997
  },
  {
    full_name: "Robert James",
    player_position: "CB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1969 - 1974",
    year_inducted: 1998
  },
  {
    full_name: "Edward Abramoski",
    player_position: "Trainer",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1960 - 1996",
    year_inducted: 1999
  },
  {
    full_name: "Bob Kalsu",
    player_position: "OG",
    team_name: "Buffalo Bills",
    notes: "Killed in Action during the Vietnam War in 1970 after he joined the US Army after the 1968 AFL Season",
    years_active: "1968",
    year_inducted: 2000
  },
  {
    full_name: "George Saimes",
    player_position: "Safety",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1963 - 1969",
    year_inducted: 2000
  },
  {
    full_name: "Jim Kelly",
    player_position: "QB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1986 - 1996",
    year_inducted: 2001
  },
  {
    full_name: "Fred Smerlas",
    player_position: "DT",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1979 - 1989",
    year_inducted: 2001
  },
  {
    full_name: "Kent Hull",
    player_position: "Center",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1986 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Darryl Talley",
    player_position: "LB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1983 - 1994",
    year_inducted: 2003
  },
  {
    full_name: "Jim Ritcher",
    player_position: "OG & Center",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1980 - 1993",
    year_inducted: 2004
  },
  {
    full_name: "Thurman Thomas",
    player_position: "RB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1988 - 1999",
    year_inducted: 2005
  },
  {
    full_name: "Andre Reed",
    player_position: "WR",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1985 - 1999",
    year_inducted: 2006
  },
  {
    full_name: "Steve Tasker",
    player_position: "WR & Special Teams",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1986 - 1997",
    year_inducted: 2007
  },
  {
    full_name: "Bruce Smith",
    player_position: "DE",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1985 - 1999",
    year_inducted: 2008
  },
  {
    full_name: "Booker Edgerson",
    player_position: "CB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1969",
    year_inducted: 2010
  },
  {
    full_name: "Phil Hansen",
    player_position: "DE",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1991 - 2001",
    year_inducted: 2011
  },
  {
    full_name: "Bill Polian",
    player_position: "General Manager",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1984 - 1992",
    year_inducted: 2012
  },
  {
    full_name: "Van Miller",
    player_position: "Broadcaster",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1960 - 1971, 1977 - 2003",
    year_inducted: 2014
  },
  {
    full_name: "Lou Saban",
    player_position: "Head Coach",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1965, 1972 - 1976",
    year_inducted: 2015
  },
  {
    full_name: "Cookie Gilchrist",
    player_position: "RB",
    team_name: "Buffalo Bills",
    notes: NULL,
    years_active: "1962 - 1964",
    year_inducted: 2017
  },
  // Carolina Panthers 
  {
    full_name: "Mike McCormack",
    player_position: "President & General Manager",
    team_name: "Carolina Panthers",
    notes: NULL,
    years_active: "1993 - 1997",
    year_inducted: 1997
  },
  {
    full_name: "Sam Mills",
    player_position: "LB & LB Coach",
    team_name: "Carolina Panthers",
    notes: "Passed away in 2005 due to cancer",
    years_active: "1995 - 2004",
    year_inducted: 1998
  },
  {
    full_name: "Steve Smith Sr.",
    player_position: "WR",
    team_name: "Carolina Panthers",
    notes: NULL,
    years_active: "2001 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Jake Delhomme",
    player_position: "QB",
    team_name: "Carolina Panthers",
    notes: NULL,
    years_active: "2003 - 2009",
    year_inducted: 2019
  },
  {
    full_name: "Wesley Walls",
    player_position: "TE",
    team_name: "Carolina Panthers",
    notes: NULL,
    years_active: "1996 - 2002",
    year_inducted: 2019
  },
  {
    full_name: "Jordan Gross",
    player_position: "OT",
    team_name: "Carolina Panthers",
    notes: NULL,
    years_active: "2003 - 2013",
    year_inducted: 2019
  },
  // Cincinatti Bengals
  {
    full_name: "Paul Brown",
    player_position: "Founding Owner, Head Coach, General Manager",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1968 - 1991",
    year_inducted: 2021
  },
  {
    full_name: "Anthony Munoz",
    player_position: "OT",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1980 - 1992",
    year_inducted: 2021
  },
  {
    full_name: "Ken Anderson",
    player_position: "QB",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1971 - 1986",
    year_inducted: 2021
  },
  {
    full_name: "Ken Riley",
    player_position: "CB",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1969 - 1983",
    year_inducted: 2021
  },
  {
    full_name: "Willie Anderson",
    player_position: "OT",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1996 - 2007",
    year_inducted: 2022
  },
  {
    full_name: "Isaac Curtis",
    player_position: "WR",
    team_name: "Cincinnati Bengals",
    notes: NULL,
    years_active: "1973 - 2084",
    year_inducted: 2022
  },
  // Cleveland Browns
  {
    full_name: "Jim Brown",
    player_position: "FB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1957 - 1965",
    year_inducted: 2010
  },
  {
    full_name: "Paul Brown",
    player_position: "Head Coach",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1962",
    year_inducted: 2010
  },
  {
    full_name: "Joe DeLamielleure",
    player_position: "OG",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1980 - 1984",
    year_inducted: 2010
  },
  {
    full_name: "Len Ford",
    player_position: "DE",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1950 - 1957",
    year_inducted: 2010
  },
  {
    full_name: "Frank Gatski",
    player_position: "Center",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1956",
    year_inducted: 2010
  },
  {
    full_name: "Otto Graham",
    player_position: "QB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1955",
    year_inducted: 2010
  },
  {
    full_name: "Lou Groza",
    player_position: "OT & Kicker",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1959, 1961 - 1967",
    year_inducted: 2010
  },
  {
    full_name: "Gene Hickerson",
    player_position: "OG",
    team_name: "Cleveland Browns",
    NULL,
    years_active: "1958 - 1960, 1962 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Leroy Kelly",
    player_position: "RB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1964 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Dante Lavelli",
    player_position: "WR",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1956",
    year_inducted: 2010
  },
  {
    full_name: "Mike McCormack",
    player_position: "OT",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1954 - 1962",
    year_inducted: 2010
  },
  {
    full_name: "Bobby Mitchell",
    player_position: "WR & RB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1958 - 1961",
    year_inducted: 2010
  },
  {
    full_name: "Marion Motely",
    player_position: "FB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Ozzie Newsome",
    player_position: "TE",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1978 - 1990",
    year_inducted: 2010
  },
  {
    full_name: "Paul Warfield",
    player_position: "WR",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1964 - 1969, 1976 - 1977",
    year_inducted: 2010
  },
  {
    full_name: "Bill Willis",
    player_position: "OT & OG",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Joe Thomas",
    player_position: "OT",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "2007 - 2017",
    year_inducted: 2018
  },
  {
    full_name: "Clay Matthews",
    player_position: "LB",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1978 - 1993",
    year_inducted: 2019
  },
  {
    full_name: "Mac Speedie",
    player_position: "WR",
    team_name: "Cleveland Browns",
    notes: NULL,
    years_active: "1946 - 1952",
    year_inducted: 2021
  },
  // Chicago Bears
  {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    player_position: NULL,
    team_name: "Chicago Bears",
    notes: NULL,
    years_active: NULL,
    year_inducted: NULL
  },
  // Dallas Cowboys
  {
    full_name: "Bob Lilly",
    player_position: "DT",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1961 - 1974",
    year_inducted: 1975
  },
  {
    full_name: "Don Meredith",
    player_position: "QB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1960 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Don Perkins",
    player_position: "FB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1961 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Chuck Howley",
    player_position: "LB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1961 - 1973",
    year_inducted: 1977
  },
  {
    full_name: "Mel Renfro",
    player_position: "CB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1964 - 1977",
    year_inducted: 1981
  },
  {
    full_name: "Roger Staubach",
    player_position: "QB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1969 - 1979",
    year_inducted: 1983
  },
  {
    full_name: "Lee Roy Jordan",
    player_position: "Center & LB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1963 - 1976",
    year_inducted: 1989
  },
  {
    full_name: "Tom Landry",
    player_position: "Head Coach",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1960 - 1988",
    year_inducted: 1993
  },
  {
    full_name: "Tony Dorsett",
    player_position: "RB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1977 - 1987",
    year_inducted: 1994
  },
  {
    full_name: "Randy White",
    player_position: "DL & LB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1975 - 1988",
    year_inducted: 1994
  },
  {
    full_name: "Bob Hayes",
    player_position: "WR",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1965 - 1974",
    year_inducted: 2001
  },
  {
    full_name: "Tex Schramm",
    player_position: "General Manager",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1960 - 1989",
    year_inducted: 2003
  },
  {
    full_name: "Cliff Harris",
    player_position: "Safety",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1970 - 1979",
    year_inducted: 2004
  },
  {
    full_name: "Rayfield Wright",
    player_position: "OT",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1967 - 1979",
    year_inducted: 2004
  },
  {
    full_name: "Troy Aikman",
    player_position: "QB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1989 - 2000",
    year_inducted: 2005
  },
  {
    full_name: "Michael Irvin",
    player_position: "WR",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1988 - 1999",
    year_inducted: 2005
  },
  {
    full_name: "Emmitt Smith",
    player_position: "RB",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1990 - 2002",
    year_inducted: 2005
  },
  {
    full_name: "Drew Pearson",
    player_position: "WR",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1973 - 1983",
    year_inducted: 2011
  },
  {
    full_name: "Charles Haley",
    player_position: "DE",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1992 - 1996",
    year_inducted: 2011
  },
  {
    full_name: "Larry Allen",
    player_position: "OG & OT",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1994 - 2005",
    year_inducted: 2011
  },
  {
    full_name: "Darren Woodson",
    player_position: "Safety",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1992 - 2004",
    year_inducted: 2015
  },
  {
    full_name: "Gil Brandt",
    player_position: "VP Player of Personnel",
    team_name: "Dallas Cowboys",
    notes: NULL,
    years_active: "1960 - 1988",
    year_inducted: 2018
  },
  // Denver Broncos
  {
    full_name: "Goose Gonsoulin",
    player_position: "Safety",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 1984
  },
  {
    full_name: "Rich Jackson",
    player_position: "DE",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1967 - 1972",
    year_inducted: 1984
  },
  {
    full_name: "Floyd Little",
    player_position: "RB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1967 - 1975",
    year_inducted: 1984
  },
  {
    full_name: "Lionel Taylor",
    player_position: "WR",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 1984
  },
  {
    full_name: "Gerald Phipps",
    player_position: "Owner",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1961 - 1981",
    year_inducted: 1984
  },
  {
    full_name: "Charley Johnson",
    player_position: "QB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1972 - 1975",
    year_inducted: 1986
  },
  {
    full_name: "Paul Smith",
    player_position: "DE",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1968 - 1978",
    year_inducted: 1986
  },
  {
    full_name: "Frank Tripucka",
    player_position: "QB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1960 - 1963",
    year_inducted: 1986
  },
  {
    full_name: "Billy Thompson",
    player_position: "CB & Safety",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1969 - 1981",
    year_inducted: 1987
  },
  {
    full_name: "Craig Morton",
    player_position: "QB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1977 - 1982",
    year_inducted: 1988
  },
  {
    full_name: "Haven Moses",
    player_position: "WR",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1972 - 1981",
    year_inducted: 1988
  },
  {
    full_name: "Jim Turner",
    player_position: "Kicker",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1971 - 1979",
    year_inducted: 1988
  },
  {
    full_name: "Randy Gradishar",
    player_position: "LB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1974 - 1983",
    year_inducted: 1989
  },
  {
    full_name: "Tom Jackson",
    player_position: "LB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1973 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Louis Wright",
    player_position: "CB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1975 - 1986",
    year_inducted: 1993
  },
  {
    full_name: "John Elway",
    player_position: "QB & General Manager",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1983 - 1998, 2011 - 2020",
    year_inducted: 1999
  },
  {
    full_name: "Karl Mecklenburg",
    player_position: "LB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1983 - 1995",
    year_inducted: 2001
  },
  {
    full_name: "Dennis Smith",
    player_position: "Safety",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1981 - 1994",
    year_inducted: 2001
  },
  {
    full_name: "Gary Zimmerman",
    player_position: "OT",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1993 - 1997",
    year_inducted: 2003
  },
  {
    full_name: "Steve Atwater",
    player_position: "Safety",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1989 - 1998",
    year_inducted: 2005
  },
  {
    full_name: "Terrel Davis",
    player_position: "RB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1995 - 2001",
    year_inducted: 2007
  },
  {
    full_name: "Shannon Sharpe",
    player_position: "TE",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1990 - 1999, 2002 - 2003",
    year_inducted: 2009
  },
  {
    full_name: "Rod Smith",
    player_position: "WR",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1994 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Tom Nalen",
    player_position: "Center",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1994 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Gene Mingo",
    player_position: "RB, Kicker, Return Specialist",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1960 - 1964",
    year_inducted: 2014
  },
  {
    full_name: "Dan Reeves",
    player_position: "Head Coach",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1981 - 1992",
    year_inducted: 2014
  },
  {
    full_name: "Rick Upchurch",
    player_position: "WR & Return Specialist",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1975 - 1983",
    year_inducted: 2014
  },
  {
    full_name: "Pat Bowlen",
    player_position: "Owner",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1984 - 2013",
    year_inducted: 2015
  },
  {
    full_name: "Jason Elam",
    player_position: "Kicker",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1993 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Simon Fletcher",
    player_position: "LB & DE",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1985 - 1995",
    year_inducted: 2016
  },
  {
    full_name: "John Lynch",
    player_position: "Safety",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "2004 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Red Miller",
    player_position: "Head Coach",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "1977 - 1980",
    year_inducted: 2017
  },
  {
    full_name: "Champ Bailey",
    player_position: "CB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "2004 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Peyton Manning",
    player_position: "QB",
    team_name: "Denver Broncos",
    notes: NULL,
    years_active: "2012 - 2015",
    year_inducted: 2021
  },
  // Detroit Lions
  {
    full_name: "Lem Barney",
    player_position: "CB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1967 - 1977",
    year_inducted: 2009
  },
  {
    full_name: "Jack Christiansen",
    player_position: "CB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1951 - 1958",
    year_inducted: 2009
  },
  {
    full_name: "Dutch Clark",
    player_position: "QB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1931 - 1932, 1934 - 1938",
    year_inducted: 2009
  },
  {
    full_name: "Lou Creekmur",
    player_position: "OT & OG",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1950 - 1959",
    year_inducted: 2009
  },
  {
    full_name: "Dick 'Night Train' Lane",
    player_position: "CB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1960 - 1965",
    year_inducted: 2009
  },
  {
    full_name: "Yale Lary",
    player_position: "CB & Punter",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1952 - 1953, 1956 - 1964",
    year_inducted: 2009
  },
  {
    full_name: "Bobby Layne",
    player_position: "QB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1950 - 1958",
    year_inducted: 2009
  },
  {
    full_name: "Barry Sanders",
    player_position: "RB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1989 - 1998",
    year_inducted: 2009
  },
  {
    full_name: "Charlie Sanders",
    player_position: "TE",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1968 - 1977",
    year_inducted: 2009
  },
  {
    full_name: "Joe Schmidt",
    player_position: "LB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1953 - 1965",
    year_inducted: 2009
  },
  {
    full_name: "Doak Walker",
    player_position: "RB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1950 - 1955",
    year_inducted: 2009
  },
  {
    full_name: "Alex Wojciechowicz",
    player_position: "Center & LB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1938 - 1946",
    year_inducted: 2009
  },
  {
    full_name: "Dick LeBeau",
    player_position: "CB",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1959 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Jason Hanson",
    player_position: "Kicker",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1992 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Dick Stanfel",
    player_position: "OG",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1952 - 1955",
    year_inducted: 2016
  },
  {
    full_name: "Roger Brown",
    player_position: "DT",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 2018
  },
  {
    full_name: "Alex Karras",
    player_position: "DT",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1958 - 1962, 1964 - 1970",
    year_inducted: 2018
  },
  {
    full_name: "Herman Moore",
    player_position: "WR",
    team_name: "Detroit Lions",
    notes: NULL,
    years_active: "1991 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Chris Spielman",
    player_position: "LB",
    team_name: "Detroit Lions",
    notes: null,
    years_active: "1988 - 1995",
    year_inducted: 2021
  },
  // Green Bay Packers
  {
    full_name: "Herb Adderley",
    player_position: "CB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1961 - 1969",
    year_inducted: NULL
  },
  {
    full_name: "Leroy Butler",
    player_position: "Safety",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1990 - 2001",
    year_inducted: 2022
  },
  {
    full_name: "Tony Canadeo",
    player_position: "RB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1941 - 1944, 1946 - 1952",
    year_inducted: NULL
  },
  {
    full_name: "Willie Davis",
    player_position: "DE",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1960 - 1969",
    year_inducted: NULL
  },
  {
    full_name: "Brett Favre",
    player_position: "QB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1992 - 2007",
    year_inducted: 2015
  },
  {
    full_name: "Forrest Gregg",
    player_position: "OT",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1956, 1958 - 1970",
    year_inducted: NULL
  },
  {
    full_name: "Arnie Herber",
    player_position: "QB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1930 - 1940",
    year_inducted: NULL
  },
  {
    full_name: "Clarke Hinkle",
    player_position: "FB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1932 - 1941",
    year_inducted: NULL
  },
  {
    full_name: "Paul Hornung",
    player_position: "RB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1956 - 1964, 1966",
    year_inducted: NULL
  },
  {
    full_name: "Cal Hubbard",
    player_position: "OT",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1929 - 1933, 1935",
    year_inducted: NULL
  },
  {
    full_name: "Don Hutson",
    player_position: "TE & DE",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1935 - 1945",
    year_inducted: NULL
  },
  {
    full_name: "Henry Jordan",
    player_position: "DT",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1959 - 1969",
    year_inducted: NULL
  },
  {
    full_name: "Jerry Kramer",
    player_position: "OG",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1958 - 1968",
    year_inducted: NULL
  },
  {
    full_name: "Earl 'Curly' Lambeau",
    player_position: "RB & Head Coach",
    team_name: "Green Bay Packers",
    notes: "Was the Head Coach starting in 1930",
    years_active: "1919 - 1949",
    year_inducted: NULL
  },
  {
    full_name: "James Lofton",
    player_position: "WR",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1978 - 1986",
    year_inducted: NULL
  },
  {
    full_name: "Vince Lombardi",
    player_position: "Head Coach",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1959 - 1967",
    year_inducted: NULL
  },
  {
    full_name: "Johnny 'Blood' McNally",
    player_position: "RB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1929 - 1933, 1935 - 1936",
    year_inducted: NULL
  },
  {
    full_name: "Mike Michalske",
    player_position: "OG",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1929 - 1935, 1937",
    year_inducted: NULL
  },
  {
    full_name: "Ray Nitschke",
    player_position: "LB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1958 - 1972",
    year_inducted: NULL
  },
  {
    full_name: "Jim Ringo",
    player_position: "Center",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1953 - 1963",
    year_inducted: NULL
  },
  {
    full_name: "Dave Robinson",
    player_position: "LB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1963 - 1972",
    year_inducted: NULL
  },
  {
    full_name: "Bart Starr",
    player_position: "QB & Head Coach",
    team_name: "Green Bay Packers",
    notes: "Began his Head Coach tenure in 1975",
    years_active: "1956 - 1971, 1975 - 1983",
    year_inducted: NULL
  },
  {
    full_name: "Jim Taylor",
    player_position: "FB",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1958 - 1966",
    year_inducted: NULL
  },
  {
    full_name: "Reggie White",
    player_position: "DE",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1993 - 1998",
    year_inducted: NULL
  },
  {
    full_name: "Ron Wolf",
    player_position: "General Manager",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1991 - 2001",
    year_inducted: 2006
  },
  {
    full_name: "Willie Wood",
    player_position: "Safety",
    team_name: "Green Bay Packers",
    notes: NULL,
    years_active: "1960 - 1971",
    year_inducted: NULL
  },
  {
    full_name: "Charles Woodson",
    player_position: "CB",
    team_name: "Green Bay Packers",
    notes: null,
    years_active: "2006 - 2012",
    year_inducted: 2021
  }
    // Houston Texans
    {
    full_name: "Andre Johnson",
    player_position: "WR",
    team_name: "Houston Texans",
    notes: NULL,
    years_active: "2003 - 2014",
    year_inducted: 2017
  },
  {
    full_name: "Bob McNair",
    player_position: "Founding Owner",
    team_name: "Houston Texans",
    notes: NULL,
    years_active: "2002 - 2018",
    year_inducted: 2019
  },
  // Indianapolis Colts
  {
    full_name: "Robert Irsay",
    player_position: "Owner",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1972 - 1997",
    year_inducted: 1996
  },
  {
    full_name: "Bill Brooks",
    player_position: "WR",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1986 - 1992",
    year_inducted: 1998
  },
  {
    full_name: "Ted Marchibroda",
    player_position: "Head Coach",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1975 - 1979, 1992 - 1995",
    year_inducted: 2000
  },
  {
    full_name: "Chris Hinton",
    player_position: "OT & OG",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1983 - 1989",
    year_inducted: 2001
  },
  {
    full_name: "Jim Harbaugh",
    player_position: "QB",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1994 - 1997",
    year_inducted: 2005
  },
  {
    full_name: "Tony Dungy",
    player_position: "Head Coach",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "2002 - 2008",
    year_inducted: 2010
  },
  {
    full_name: "Marvin Harrison",
    player_position: "WR",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Edgerrin James",
    player_position: "RB",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1999 - 2005",
    year_inducted: 2012
  },
  {
    full_name: "Eric Dickerson",
    player_position: "RB",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1987 - 1991",
    year_inducted: 2013
  },
  {
    full_name: "Marshall Faulk",
    player_position: "RB",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1994 - 1998",
    year_inducted: 2013
  },
  {
    full_name: "Jeff Saturday",
    player_position: "Center",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1999 - 2011",
    year_inducted: 2015
  },
  {
    full_name: "Bill Polian",
    player_position: "President & General Manager",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1998 - 2011",
    year_inducted: 2017
  },
  {
    full_name: "Peyton Manning",
    player_position: "QB",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "1998 - 2011",
    year_inducted: 2017
  },
  {
    full_name: "Reggie Wayne",
    player_position: "WR",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "2001 - 2014",
    year_inducted: 2018
  },
  {
    full_name: "Dwight Freeney",
    player_position: "DE",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "2002 - 2012",
    year_inducted: 2019
  },
  {
    full_name: "Robert Mathis",
    player_position: "DE",
    team_name: "Indianapolis Colts",
    notes: NULL,
    years_active: "2003 - 2016",
    year_inducted: 2021
  },
  {
    full_name: "Tarik Glenn",
    player_position: "OT",
    team_name: "Indianapolis Colts",
    notes: null,
    years_active: "1997-2006"
      year_inducted: 2022
  }
    // Jacksonville Jaguars
    {
    full_name: "Tony Boselli",
    player_position: "OT",
    team_name: "Jacksonville Jaguars",
    notes: NULL,
    years_active: "1995 - 2001",
    year_inducted: 2006
  },
  {
    full_name: "Wayne and Delores Weaver",
    player_position: "Founding Owners",
    team_name: "Jacksonville Jaguars",
    notes: NULL,
    years_active: "1993 - 2011",
    year_inducted: 2011
  },
  {
    full_name: "Fred Taylor",
    player_position: "RB",
    team_name: "Jacksonville Jaguars",
    notes: NULL,
    years_active: "1998 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "Mark Brunell",
    player_position: "QB",
    team_name: "Jacksonville Jaguars",
    notes: NULL,
    years_active: "1995 - 2003",
    year_inducted: 2013
  },
  {
    full_name: "Jimmy Smith",
    player_position: "WR",
    team_name: "Jacksonville Jaguars",
    notes: NULL,
    years_active: "1995 - 2005",
    year_inducted: 2016
  },
  // Kansas City Chiefs
  {
    full_name: "Lamar Hunt",
    player_position: "Founding Owner",
    team_name: "Kansas City Chiefs",
    notes: "One of the key founders of the AFL.",
    years_active: "1960 - 2006",
    year_inducted: 1970
  },
  {
    full_name: "Mack Lee Hill",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: "Passed away suddenly after a knee surgery after a game against the Buffalo Bills",
    years_active: "1961 - 1974",
    year_inducted: 1971
  },
  {
    full_name: "Jerry Mays",
    player_position: "DT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1961 - 1970",
    year_inducted: 1972
  },
  {
    full_name: "Fred Arbanas",
    player_position: "TE",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1962 - 1970",
    year_inducted: 1973
  },
  {
    full_name: "Johnny Robinson",
    player_position: "Safety",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1960 - 1971",
    year_inducted: 1974
  },
  {
    full_name: "Chris Burford",
    player_position: "WR",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1960 - 1967",
    year_inducted: 1975
  },
  {
    full_name: "E.J. Holub",
    player_position: "Center & LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1961 - 1970",
    year_inducted: 1976
  },
  {
    full_name: "Jim Tyrer",
    player_position: "OT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1961 - 1973",
    year_inducted: 1977
  },
  {
    full_name: "Mike Garrett",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1966 - 1970",
    year_inducted: 1978
  },
  {
    full_name: "Len Dawson",
    player_position: "QB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1975",
    year_inducted: 1979
  },
  {
    full_name: "Bobby Bell",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1974",
    year_inducted: 1980
  },
  {
    full_name: "Buck Buchanan",
    player_position: "DT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1975",
    year_inducted: 1981
  },
  {
    full_name: "Otis Taylor",
    player_position: "WR",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1965 - 1975",
    year_inducted: 1982
  },
  {
    full_name: "Ed Budde",
    player_position: "OG",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1976",
    year_inducted: 1984
  },
  {
    full_name: "Willie Lanier",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1967 - 1977",
    year_inducted: 1985
  },
  {
    full_name: "Emmitt Thomas",
    player_position: "CB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1966 - 1978",
    year_inducted: 1986
  },
  {
    full_name: "Hank Stram",
    player_position: "Head Coach",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1960 - 1974",
    year_inducted: 1987
  },
  {
    full_name: "Jerrel Wilson",
    player_position: "Punter",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1977",
    year_inducted: 1988
  },
  {
    full_name: "Ed Podolak",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1969 - 1977",
    year_inducted: 1989
  },
  {
    full_name: "Jim Lynch",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1967 - 1977",
    year_inducted: 1990
  },
  {
    full_name: "Abner Haynes",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1960 - 1964",
    year_inducted: 1991
  },
  {
    full_name: "Jan Stenerud",
    player_position: "Kicker",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1967 - 1979",
    year_inducted: 1992
  },
  {
    full_name: "Sherrill Headrick",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1960 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Jack Rudnay",
    player_position: "Center",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1969 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Curtis McClinton",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1962 - 1969",
    year_inducted: 1995
  },
  {
    full_name: "Deron Cherry",
    player_position: "Safety",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1981 - 1991",
    year_inducted: 1996
  },
  {
    full_name: "Dave Hill",
    player_position: "OT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1963 - 1974",
    year_inducted: 1997
  },
  {
    full_name: "Art Still",
    player_position: "DE",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1978 - 1987",
    year_inducted: 1998
  },
  {
    full_name: "Lloyd Burruss",
    player_position: "Safety",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1981 - 1991",
    year_inducted: 1999
  },
  {
    full_name: "Christian Okoye",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1987 - 1991",
    year_inducted: 2000
  },
  {
    full_name: "Derrick Thomas",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: "After the 1999 Season, Thomas was in a car accident that left him paralyzed. He passed away a few days after",
    years_active: "1989 - 1999",
    year_inducted: 2001
  },
  {
    full_name: "John Alt",
    player_position: "OT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1984 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Gary Spani",
    player_position: "LB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1978 - 1986",
    year_inducted: 2003
  },
  {
    full_name: "Joe Delaney",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: "Passed away in 1983, after his second year with the Chiefs",
    years_active: "1981 - 1982",
    year_inducted: 2004
  },
  {
    full_name: "Jack Steadman",
    player_position: "President & General Manager",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1988 - 2006",
    year_inducted: 2005
  },
  {
    full_name: "Neil Smith",
    player_position: "DE",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1988 - 1996",
    year_inducted: 2006
  },
  {
    full_name: "Albert Lewis",
    player_position: "CB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1983 - 1993",
    year_inducted: 2007
  },
  {
    full_name: "Curley Culp",
    player_position: "DT",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1968 - 1974",
    year_inducted: 2008
  },
  {
    full_name: "Nick Lowery",
    player_position: "Kicker",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1980 - 1993",
    year_inducted: 2009
  },
  {
    full_name: "Marty Schottenheimer",
    player_position: "Head Coach",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1989 - 1998",
    year_inducted: 2010
  },
  {
    full_name: "Kevin Ross",
    player_position: "CB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1984 - 1993, 1997",
    year_inducted: 2011
  },
  {
    full_name: "Will Shields",
    player_position: "OG",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1993 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Gary Barbaro",
    player_position: "Safety",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1976 - 1982",
    year_inducted: 2013
  },
  {
    full_name: "Priest Holmes",
    player_position: "RB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "2001 - 2007",
    year_inducted: 2014
  },
  {
    full_name: "Gary Green",
    player_position: "CB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1977 - 1983",
    year_inducted: 2015
  },
  {
    full_name: "Tony Richardson",
    player_position: "FB",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1995 - 2005",
    year_inducted: 2016
  },
  {
    full_name: "Carlos Carson",
    player_position: "WR",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1980 - 1989",
    year_inducted: 2017
  },
  {
    full_name: "Tony Gonzalez",
    player_position: "TE",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "1997 - 2008",
    year_inducted: 2018
  },
  {
    full_name: "Brian Waters",
    player_position: "OG",
    team_name: "Kansas City Chiefs",
    notes: NULL,
    years_active: "2000 - 2010",
    year_inducted: 2019
  },
  {
    full_name: "Tim Grunhard",
    player_position: "Center",
    team_name: "Kansas City Chiefs",
    notes: null,
    years_active: "1990-2000",
    year_inducted: 2021
  },
  {
    full_name: "Kimble Anders",
    player_position: "FB",
    team_name: "Kansas City Chiefs",
    notes: null,
    years_active: "1991-2000",
    year_inducted: 2022
  },
  // Las Vegas Raiders
  {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    player_position: NULL,
    team_name: team_name: "Las Vegas Raiders",
    notes: NULL,
    years_active: NULL,
    year_inducted: NULL
  },
  // Los Angeles Chargers
  {
    full_name: "Emil Karas",
    player_position: "LB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 1976
  },
  {
    full_name: "Frank Buncom",
    player_position: "LB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1962 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Bob Laraba",
    player_position: "LB",
    team_name: "Los Angeles Chargers",
    notes: "Died in 1961 after his second season",
    years_active: "1960 - 1961",
    year_inducted: 1976
  },
  {
    full_name: "Jacque MacKinnon",
    player_position: "TE",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1969",
    year_inducted: 1976
  },
  {
    full_name: "Lance Alworth",
    player_position: "WR",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1962 - 1970",
    year_inducted: 1977
  },
  {
    full_name: "Ron Mix",
    player_position: "OT",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1960 - 1969",
    year_inducted: 1978
  },
  {
    full_name: "Paul Lowe",
    player_position: "RB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1960 - 1968",
    year_inducted: 1979
  },
  {
    full_name: "Barron Hilton",
    player_position: "Majority Founding Owner",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 1980
  },
  {
    full_name: "Keith Lincoln",
    player_position: "RB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1968",
    year_inducted: 1980
  },
  {
    full_name: "Ernie Ladd",
    player_position: "DT",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1965",
    year_inducted: 1981
  },
  {
    full_name: "Walt Sweeney",
    player_position: "OG",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1963 - 1973",
    year_inducted: 1981
  },
  {
    full_name: "John Hadl",
    player_position: "QB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1962 - 1972",
    year_inducted: 1983
  },
  {
    full_name: "Chuck Allen",
    player_position: "LB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1969",
    year_inducted: 1984
  },
  {
    full_name: "Gary Giarrison",
    player_position: "WR",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1966 - 1976",
    year_inducted: 1985
  },
  {
    full_name: "Sid Gillman",
    player_position: "Head Coach",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1969, 1971",
    year_inducted: 1985
  },
  {
    full_name: "Earl Faison",
    player_position: "DE",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - 1966",
    year_inducted: 1986
  },
  {
    full_name: "Dan Fouts",
    player_position: "QB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1973 - 1987",
    year_inducted: 1993
  },
  {
    full_name: "Charlie Joiner",
    player_position: "WR",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1976 - 1986",
    year_inducted: 1993
  },
  {
    full_name: "Don Coryell",
    player_position: "Head Coach",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1978 - 1986",
    year_inducted: 1994
  },
  {
    full_name: "Speedy Duncan",
    player_position: "CB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1968 - 1982",
    year_inducted: 1995
  },
  {
    full_name: "Russ Washington",
    player_position: "OT",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1968 - 1982",
    year_inducted: 1995
  },
  {
    full_name: "Kellen Winslow",
    player_position: "TE",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1979 - 1987",
    year_inducted: 1995
  },
  {
    full_name: "George Pernicano",
    player_position: "Minority Owner",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1961 - Present",
    year_inducted: 1996
  },
  {
    full_name: "Rolf Benirschke",
    player_position: "Kicker",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1978 - 1987",
    year_inducted: 1997
  },
  {
    full_name: "Gill Byrd",
    player_position: "CB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1983 - 1992",
    year_inducted: 1998
  },
  {
    full_name: "Gary 'Big Hands' Johnson",
    player_position: "DT",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1975 - 1984",
    year_inducted: 1999
  },
  {
    full_name: "Doug Wilkerson",
    player_position: "OG",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1971 - 1984",
    year_inducted: 2000
  },
  {
    full_name: "Wes Chandler",
    player_position: "WR",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1981 - 1987",
    year_inducted: 2001
  },
  {
    full_name: "Stan Humphries",
    player_position: "QB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1992 - 1997",
    year_inducted: 2002
  },
  {
    full_name: "Bobby Ross",
    player_position: "Head Coach",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1992 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Louie Kelcher",
    player_position: "DT",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1975 - 1983",
    year_inducted: 2003
  },
  {
    full_name: "Don Macek",
    player_position: "Center",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1976 - 1989",
    year_inducted: 2004
  },
  {
    full_name: "Ed White",
    player_position: "OG",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1978 - 1985",
    year_inducted: 2004
  },
  {
    full_name: "Fred Dean",
    player_position: "DE",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1975 - 1981",
    year_inducted: 2008
  },
  {
    full_name: "Junior Seau",
    player_position: "LB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1990 - 2002",
    year_inducted: 2011
  },
  {
    full_name: "Darren Bennett",
    player_position: "Punter",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1995 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "The 1963 AFL Championship Team",
    player_position: NULL,
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1963",
    year_inducted: 2013
  },
  {
    full_name: "Leslie O'Neal",
    player_position: "DE",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1986 - 1995",
    year_inducted: 2014
  },
  {
    full_name: "LaDainian Tomlinson",
    player_position: "RB",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "2001 - 2009",
    year_inducted: 2015
  },
  {
    full_name: "Bobby Beathard",
    player_position: "General Manager",
    team_name: "Los Angeles Chargers",
    notes: NULL,
    years_active: "1990 - 2000",
    year_inducted: 2018
  },
  {
    full_name: "Jamal Williams",
    player_position: "DT",
    team_name: "Los Angeles Chargers",
    notes: null,
    years_active: "1998 - 2009",
    year_inducted: 2022
  }
    // Los Angeles Rams
    {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    player_position: NULL,
    team_name: team_name: "Los Angeles Rams",
    notes: NULL,
    years_active: NULL,
    year_inducted: NULL
  },
  // Miami Dolphins
  {
    full_name: "Joe Robbie",
    player_position: "Founding Owner",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1966 - 1989",
    year_inducted: 1990
  },
  {
    full_name: "Larry Csonka",
    player_position: "FB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1968 - 1974, 1979",
    year_inducted: 1990
  },
  {
    full_name: "Bob Griese",
    player_position: "QB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1967 - 1980",
    year_inducted: 1990
  },
  {
    full_name: "Jim Langer",
    player_position: "Center",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1979",
    year_inducted: 1990
  },
  {
    full_name: "Paul Warfield",
    player_position: "WR",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1974",
    year_inducted: 1990
  },
  {
    full_name: "Nick Buoniconti",
    player_position: "LB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1969 - 1974, 1976",
    year_inducted: 1991
  },
  {
    full_name: "Larry Little",
    player_position: "OG",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1969 - 1980",
    year_inducted: 1993
  },
  {
    full_name: "Dwight Stephenson",
    player_position: "Center",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1980 - 1987",
    year_inducted: 1994
  },
  {
    full_name: "Bob Kuechenberg",
    player_position: "OG",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1984",
    year_inducted: 1995
  },
  {
    full_name: "Don Shula",
    player_position: "Head Coach",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1995",
    year_inducted: 1996
  },
  {
    full_name: "Nat Moore",
    player_position: "WR",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1974 - 1986",
    year_inducted: 1999
  },
  {
    full_name: "Dan Marino",
    player_position: "QB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1983 - 1999",
    year_inducted: 2000
  },
  {
    full_name: "Mark Clayton",
    player_position: "WR",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1983 - 1992",
    year_inducted: 2003
  },
  {
    full_name: "Mark Duper",
    player_position: "WR",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1982 - 1992",
    year_inducted: 2003
  },
  {
    full_name: "Dick Anderson",
    player_position: "Safety",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1968 - 1977",
    year_inducted: 2006
  },
  {
    full_name: "Richmond Webb",
    player_position: "OT",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1990 - 2000",
    year_inducted: 2006
  },
  {
    full_name: "Bob Baumhower",
    player_position: "DT",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1977 - 1986",
    year_inducted: 2008
  },
  {
    full_name: "Doug Betters",
    player_position: "DE",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1978 - 1987",
    year_inducted: 2008
  },
  {
    full_name: "Jake Scott",
    player_position: "Safety",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1975",
    year_inducted: 2010
  },
  {
    full_name: "Bill Stanfill",
    player_position: "DE",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1969 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Jim Mandich",
    player_position: "TE & Radio Broadcaster",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1977, 1992 - 2004, 2010",
    year_inducted: 2011
  },
  {
    full_name: "Jason Taylor",
    player_position: "LB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1997 - 2007, 2009, 2011",
    year_inducted: 2012
  },
  {
    full_name: "Zach Thomas",
    player_position: "LB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1996 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Bill Arnsparger",
    player_position: "Defensive Coordinator",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1970 - 1973, 1976 - 1983",
    year_inducted: 2012
  },
  {
    full_name: "Super Bowl VII & VIII Team, 1972 Perfect Season Team 17-0",
    player_position: NULL,
    team_name: "Miami Dolphins",
    notes: "The 1972 Team was inducted into the Honor Roll in 1992, but was updated in 2012 to include the Super Bowl VIII Team",
    years_active: "1972 - 1973",
    year_inducted: 2012
  },
  {
    full_name: "John Offerdahl",
    player_position: "LB",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1986 - 1993",
    year_inducted: 2013
  },
  {
    full_name: "Manny Fernandez",
    player_position: "DT",
    team_name: "Miami Dolphins",
    notes: NULL,
    years_active: "1968 - 1975",
    year_inducted: 2014
  },
  // Minnnesota Vikings
  {
    full_name: "Fran Tarkenton",
    player_position: "QB",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1961 - 1966, 1972 - 1978",
    year_inducted: 1998
  },
  {
    full_name: "Alan Page",
    player_position: "DT",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1967 - 1978",
    year_inducted: 1998
  },
  {
    full_name: "Jim Finks",
    player_position: "General Manager",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1964 - 1973",
    year_inducted: 1998
  },
  {
    full_name: "Bud Grant",
    player_position: "Head Coach",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1967 - 1983, 1985",
    year_inducted: 1998
  },
  {
    full_name: "Paul Krause",
    player_position: "Safety",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1968 - 1979",
    year_inducted: 1998
  },
  {
    full_name: "Fred Zamberletti",
    player_position: "Medical Advisor",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1961 - 2011",
    year_inducted: 1998
  },
  {
    full_name: "Jim Marshall",
    player_position: "DE",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1961 - 1979",
    year_inducted: 1999
  },
  {
    full_name: "Ron Yary",
    player_position: "OT",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1968 - 1981",
    year_inducted: 2001
  },
  {
    full_name: "Korey Stringer",
    player_position: "OT",
    team_name: "Minnesota Vikings",
    notes: "Died in 2001 due to a heat stroke",
    years_active: "1995 - 2000",
    year_inducted: 2001
  },
  {
    full_name: "Mick Tingelhoff",
    player_position: "Center",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1962 - 1978",
    year_inducted: 2001
  },
  {
    full_name: "Carl Eller",
    player_position: "DE",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1964 - 1978",
    year_inducted: 2002
  },
  {
    full_name: "Cris Carter",
    player_position: "WR",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1990 - 2001",
    year_inducted: 2003
  },
  {
    full_name: "Bill Brown",
    player_position: "RB",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1962 - 1974",
    year_inducted: 2004
  },
  {
    full_name: "Jerry Burns",
    player_position: "Head Coach",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1986 - 1991",
    year_inducted: 2005
  },
  {
    full_name: "Randall McDaniel",
    player_position: "OG",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1988 - 1999",
    year_inducted: 2006
  },
  {
    full_name: "Chuck Foreman",
    player_position: "RB",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1973 - 1979",
    year_inducted: 2007
  },
  {
    full_name: "John Randle",
    player_position: "DT",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1990 - 2000",
    year_inducted: 2008
  },
  {
    full_name: "Scott Studwell",
    player_position: "LB",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1977 - 1990",
    year_inducted: 2009
  },
  {
    full_name: "Chris Doleman",
    player_position: "DE",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1985 - 1993, 1999",
    year_inducted: 2011
  },
  {
    full_name: "Matt Blair",
    player_position: "LB",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1974 - 1985",
    year_inducted: 2012
  },
  {
    full_name: "Joey Browner",
    player_position: "Safety",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1983- 1991",
    year_inducted: 2013
  },
  {
    full_name: "Randy Moss",
    player_position: "WR",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1998 - 2004, 2010",
    year_inducted: 2017
  },
  {
    full_name: "Ahmad Rashad",
    player_position: "WR",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1976 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Dennis Green",
    player_position: "Head Coach",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1992 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Steve Jordan",
    player_position: "TE",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "1982 - 1994",
    year_inducted: 2019
  },
  {
    full_name: "Kevin Williams",
    player_position: "DT",
    team_name: "Minnesota Vikings",
    notes: NULL,
    years_active: "2003 - 2013",
    year_inducted: 2021
  },
  // New England Patriots
  {
    full_name: "John Hannah",
    player_position: "OG",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1973 - 1985",
    year_inducted: 1991
  },
  {
    full_name: "Nick Buoniconti",
    player_position: "LB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1962 - 1968",
    year_inducted: 1992
  },
  {
    full_name: "Gino Cappelletti",
    player_position: "WR & Kicker",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1960 - 1970",
    year_inducted: 1992
  },
  {
    full_name: "Bob Dee",
    player_position: "DL",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1960 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Jim Lee Hunt",
    player_position: "DT",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1960 - 1971",
    year_inducted: 1993
  },
  {
    full_name: "Steve Nelson",
    player_position: "LB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1974 - 1987",
    year_inducted: 1993
  },
  {
    full_name: "Vito 'Babe' Parilli",
    player_position: "QB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1961 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Mike Haynes",
    player_position: "CB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1976 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Steve Grogan",
    player_position: "QB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1975 - 1990",
    year_inducted: 1995
  },
  {
    full_name: "Andre Tippett",
    player_position: "LB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1982 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Bruce Armstrong",
    player_position: "OT",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1987 - 2000",
    year_inducted: 2001
  },
  {
    full_name: "Stanley Morgan",
    player_position: "WR",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1977 - 1989",
    year_inducted: 2007
  },
  {
    full_name: "Ben Coates",
    player_position: "TE",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1991 - 1999",
    year_inducted: 2008
  },
  {
    full_name: "Jim Nance",
    player_position: "FB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1965 - 1971",
    year_inducted: 2009
  },
  {
    full_name: "Billy Sullivan",
    player_position: "Founding Owner",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1960 - 1988",
    year_inducted: 2009
  },
  {
    full_name: "Sam Cunningham",
    player_position: "RB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1973 - 1982",
    year_inducted: 2010
  },
  {
    full_name: "Drew Bledsoe",
    player_position: "QB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1993 - 2001",
    year_inducted: 2011
  },
  {
    full_name: "Jon Morris",
    player_position: "Center",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1964 - 1974",
    year_inducted: 2011
  },
  {
    full_name: "Troy Brown",
    player_position: "WR, CB, Punt Returner",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1993 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Tedy Brushci",
    player_position: "LB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2013
  },
  {
    full_name: "Gil Santos",
    player_position: "Broadcaster",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1972 - 1979, 1991 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Ty Law",
    player_position: "CB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1995 - 2004",
    year_inducted: 2014
  },
  {
    full_name: "Willie McGinest",
    player_position: "DE & LB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1994 - 2005",
    year_inducted: 2015
  },
  {
    full_name: "Houston Antwine",
    player_position: "DL",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1961 - 1971",
    year_inducted: 2015
  },
  {
    full_name: "Kevin Faulk",
    player_position: "RB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1999 - 2011",
    year_inducted: 2016
  },
  {
    full_name: "Raymond Clayborn",
    player_position: "CB",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1977 - 1989",
    year_inducted: 2017
  },
  {
    full_name: "Matt Light",
    player_position: "OT",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "2001 - 2011",
    year_inducted: 2018
  },
  {
    full_name: "Rodney Harrison",
    player_position: "Safety",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "2003 - 2008",
    year_inducted: 2019
  },
  {
    full_name: "Leon Gray",
    player_position: "OT",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "1973 - 1978",
    year_inducted: 2019
  },
  {
    full_name: "Richard Seymour",
    player_position: "DL",
    team_name: "New England Patriots",
    notes: NULL,
    years_active: "2001 - 2008",
    year_inducted: 2020
  },
  {
    full_name: "Tracy Sormanti",
    player_position: "Cheerleading Director",
    team_name: "New England Patriots",
    notes: "Posthumously inducted",
    years_active: "1983 - 2020",
    year_inducted: 2021
  },
  {
    full_name: "Vince Wilfork",
    player_position: "DT",
    team_name: "New England Patriots",
    notes: null,
    years_active: "2004 - 2014",
    year_inducted 2022
    },
  // New Orleans Saints 
  {
    full_name: "Archie Manning",
    player_position: "QB",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "1971 - 1982",
    year_inducted: 2013
  },
  {
    full_name: "Rickey Jackson",
    player_position: "LB",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "1981 - 1993",
    year_inducted: 2013
  },
  {
    full_name: "Willie Roaf",
    player_position: "OT",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "1993 - 2001",
    year_inducted: 2013
  },
  {
    full_name: "Morten Andersen",
    player_position: "Kicker",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "1982 - 1994",
    year_inducted: 2015
  },
  {
    full_name: "Tom Benson",
    player_position: "Owner",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "1985 - 2018",
    year_inducted: 2019
  },
  {
    full_name: "Will Smith",
    player_position: "DE",
    team_name: "New Orleans Saints",
    notes: NULL,
    years_active: "2004 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Sam Mills",
    player_position: "LB",
    team_name: "New Orleans Saints",
    notes: null,
    years_active: "1986 - 1994",
    year_inducted: 2021

  },
  // New York Giants
  {
    full_name: "Jessie Armstead",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1993 - 2001",
    year_inducted: 2010
  },
  {
    full_name: "Tiki Barber",
    player_position: "RB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1997 - 2006",
    year_inducted: 2010
  },
  {
    full_name: "Al Blozis",
    player_position: "OT",
    team_name: "New York Giants",
    notes: "Died in World War II",
    years_active: "1942 - 1944",
    year_inducted: 2010
  },
  {
    full_name: "Rosey Brown",
    player_position: "OT",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1953 - 1965",
    year_inducted: 2010
  },
  {
    full_name: "Harry Carson",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1976 - 1988",
    year_inducted: 2010
  },
  {
    full_name: "Charlie Conerly",
    player_position: "QB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1948 - 1961",
    year_inducted: 2010
  },
  {
    full_name: "Frank Gifford",
    player_position: "RB & WR",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1952 - 1864",
    year_inducted: 2010
  },
  {
    full_name: "Pete Gogolak",
    player_position: "Kicker",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1966 - 1974",
    year_inducted: 2010
  },
  {
    full_name: "Mel Hein",
    player_position: "Center & LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1931 - 1945",
    year_inducted: 2010
  },
  {
    full_name: "Jim Lee Howell",
    player_position: "TE, DE, Head Coach",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1937 - 1942, 1946 - 1947, 1954 - 1960",
    year_inducted: 2010
  },
  {
    full_name: "Sam Huff",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1956 - 1963",
    year_inducted: 2010
  },
  {
    full_name: "Tuffy Leemans",
    player_position: "RB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1936 - 1943",
    year_inducted: 2010
  },
  {
    full_name: "Dick Lynch",
    player_position: "CB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1958 - 1966",
    year_inducted: 2010
  },
  {
    full_name: "Jack Mara",
    player_position: "Owner",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1925 - 1065",
    year_inducted: 2010
  },
  {
    full_name: "Tim Mara",
    player_position: "Founding Owner",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1925 - 1959",
    year_inducted: 2010
  },
  {
    full_name: "Wellington Mara",
    player_position: "Ball Boy, Executive, Owner",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1925 - 2005",
    year_inducted: 2010
  },
  {
    full_name: "George Martin",
    player_position: "DE",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1975 - 1988",
    year_inducted: 2010
  },
  {
    full_name: "Joe Morrison",
    player_position: "WR & RB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1959 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Steve Owen",
    player_position: "OT & Head Coach",
    team_name: "New York Giants",
    notes: "Started to be the Head Coach in the 1930 season",
    years_active: "1926 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Bill Parcells",
    player_position: "LB Coach, Defensive Coordinator, Head Coach",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1979, 1981 - 1990",
    year_inducted: 2010
  },
  {
    full_name: "Andy Robustelli",
    player_position: "DE",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1956 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "Phil Simms",
    player_position: "QB",
    team_name: "New York Giants",
    notes: NULL,
    "1979 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Michael Strahan",
    player_position: "DE",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1993 - 2007",
    year_inducted: 2010
  },
  {
    full_name: "Ken Strong",
    player_position: "RB",
    team_name: "New York Giants",
    notes: null,
    years_active: "1933 - 1935, 1939, 1944 - 1947",
    year_inducted: 2010
  },
  {
    full_name: "Lawrence Taylor",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1981 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Bob Tisch",
    player_position: "Owner",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1991 - 2005",
    year_inducted: 2010
  },
  {
    full_name: "Y.A. Tittle",
    player_position: "QB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1961 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "Amani Tooner",
    player_position: "WR",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2010
  },
  {
    full_name: "Emlen Tunnell",
    player_position: "CB, Scout, Assistant Head Coach",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1948 - 1958, 1963 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "George Young",
    player_position: "Executive",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1979 - 1997",
    year_inducted: 2010
  },
  {
    full_name: "Carl Banks",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1984 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Mark Bavaro",
    player_position: "TE",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1985 - 1990",
    year_inducted: 2011
  },
  {
    full_name: "Dave Jennings",
    player_position: "Punter",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1974 - 1984",
    year_inducted: 2011
  },
  {
    full_name: "Brad Van Pelt",
    player_position: "LB",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1973 - 1983",
    year_inducted: 2011
  },
  {
    full_name: "Alex Webster",
    player_position: "FB & Head Coach",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1955 - 1964, 1969 - 1973",
    year_inducted: 2011
  },
  {
    full_name: "John Johnson",
    player_position: "Athletic Trainer",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1948 - 2008",
    year_inducted: 2015
  },
  {
    full_name: "Jack Lummus",
    player_position: "TE & DE",
    team_name: "New York Giants",
    notes: "Died in the Battle of Iwo Jima during World War II",
    years_active: "1941",
    year_inducted: 2015
  },
  {
    full_name: "Chris Snee",
    player_position: "OG",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "2004 - 2013",
    year_inducted: 2015
  },
  {
    full_name: "Osi Umenyiora",
    player_position: "DE",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "2003 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Ernie Acorsi",
    player_position: "Executive",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1994 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Tom Coughlin",
    player_position: "WR Coach & Head Coach",
    team_name: "New York Giants",
    notes: NULL,
    years_active: "1988 - 1990, 2004 - 2015",
    year_inducted: 2016
  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  // New York Jets
  {
    full_name: "Joe Namath",
    player_position: "QB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1965 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Curtis Martin",
    player_position: "RB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1998 - 2006",
    year_inducted: 2010
  },
  {
    full_name: "Joe Klecko",
    player_position: "DL",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1977 - 1987",
    year_inducted: 2010
  },
  {
    full_name: "Don Maynard",
    player_position: "WR",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1960 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Winston Hill",
    player_position: "OT",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1963 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Weeb Ewbank",
    player_position: "Owner",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1963 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Larry Grantham",
    player_position: "LB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1960 - 1972",
    year_inducted: 2011
  },
  {
    full_name: "Freeman McNeil",
    player_position: "RB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1981 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Gerry Philbin",
    player_position: "DE",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1964 - 1972",
    year_inducted: 2011
  },
  {
    full_name: "Al Toon",
    player_position: "WR",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1985 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Wesley Walker",
    player_position: "WR",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1977 - 1989",
    year_inducted: 2012
  },
  {
    full_name: "Mark Gastineau",
    player_position: "DE",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1979 - 1988",
    year_inducted: 2012
  },
  {
    full_name: "Marty Lyons",
    player_position: "DT",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1979 - 1989",
    year_inducted: 2013
  },
  {
    full_name: "Wayne Chrebet",
    player_position: "WR",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1995 - 2005",
    year_inducted: 2014
  },
  {
    full_name: "Leon Hess",
    player_position: "Owner",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1968 - 1999",
    year_inducted: 2014
  },
  {
    full_name: "Emerson Boozer",
    player_position: "RB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1966 - 1975",
    year_inducted: 2015
  },
  {
    full_name: "Matt Snell",
    player_position: "RB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1964 - 1972",
    year_inducted: 2015
  },
  {
    full_name: "Kevin Mawae",
    player_position: "Center",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "1998 - 2005",
    year_inducted: 2017
  },
  {
    full_name: "Darrelle Revis",
    player_position: "CB",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "2007 - 2012, 2015 - 2016",
    year_inducted: 2022
  },
  {
    full_name: "D'Brickashaw Ferguson",
    player_position: "OT",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "2006 - 2015",
    year_inducted: 2022
  },
  {
    full_name: "Nick Mangold",
    player_position: "Center",
    team_name: "New York Jets",
    notes: NULL,
    years_active: "2006 - 2016",
    year_inducted: 2022
  },
  // Philadelphia Eagles
  {
    full_name: "Chuck Bednarik",
    player_position: "Center & LB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1949 - 1962",
    year_inducted: 1987
  },
  {
    full_name: "Bert Bell",
    player_position: "Founding Owner",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1933 - 1940",
    year_inducted: 1987
  },
  {
    full_name: "Harold Carmichael",
    player_position: "WR",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1971 - 1983",
    year_inducted: 1987
  },
  {
    full_name: "Bill Hewitt",
    player_position: "TE & DE",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1936 - 1939, 1943",
    year_inducted: 1987
  },
  {
    full_name: "Sonny Jurgensen",
    player_position: "QB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1957 - 1963",
    year_inducted: 1987
  },
  {
    full_name: "Ollie Matson",
    player_position: "RB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1964 - 1966",
    year_inducted: 1987
  },
  {
    full_name: "Wilbert Montgomery",
    player_position: "RB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1977 - 1984",
    year_inducted: 1987
  },
  {
    full_name: "Earle 'Greasy' Neale",
    player_position: "Head Coach",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1941 - 1950",
    year_inducted: 1987
  },
  {
    full_name: "Pete Pihos",
    player_position: "TE & DE",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1947 - 1955",
    year_inducted: 1987
  },
  {
    full_name: "Jim Ringo",
    player_position: "Center",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1964 - 1977",
    year_inducted: 1987
  },
  {
    full_name: "Norm Van Brocklin",
    player_position: "QB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1958 - 1960",
    year_inducted: 1987
  },
  {
    full_name: "Steve Van Buren",
    player_position: "RB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1944 - 1951",
    year_inducted: 1987
  },
  {
    full_name: "Alex Wojciechowicz",
    player_position: "C & DT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1946 - 1950",
    year_inducted: 1987
  },
  {
    full_name: "Bill Bergey",
    player_position: "LB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1974 - 1980",
    year_inducted: 1988
  },
  {
    full_name: "Tommy McDonald",
    player_position: "WR",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1957 - 1963",
    year_inducted: 1988
  },
  {
    full_name: "Tom Brookshier",
    player_position: "CB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1953 - 1961",
    year_inducted: 1989
  },
  {
    full_name: "Pete Retzlaff",
    player_position: "TE",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1956 - 1966",
    year_inducted: 1989
  },
  {
    full_name: "Tommy Brown",
    player_position: "RB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1960 - 1967",
    year_inducted: 1990
  },
  {
    full_name: "Jerry Sisemore",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1973 - 1987",
    year_inducted: 1991
  },
  {
    full_name: "Stan Walters",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1975 - 1983",
    year_inducted: 1991
  },
  {
    full_name: "Ron Jaworski",
    player_position: "QB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1977 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Bill Bradley",
    player_position: "Safety & Punter",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1969 - 1976",
    year_inducted: 1993
  },
  {
    full_name: "Dick Vermeil",
    player_position: "Head Coach",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1976 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Jim Gallagher",
    player_position: "Team Executive",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1949 - 1995",
    year_inducted: 1995
  },
  {
    full_name: "Mike Quick",
    player_position: "WR",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1982 - 1990",
    year_inducted: 1995
  },
  {
    full_name: "Jerome Brown",
    player_position: "DT",
    team_name: "Philadelphia Eagles",
    notes: "Died in 1992 before Training Camp",
    years_active: "1987 - 1991",
    year_inducted: 1996
  },
  {
    full_name: "Otho Davis",
    player_position: "Head Trainer",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1973 - 1995",
    year_inducted: 1999
  },
  {
    full_name: "1948 NFL Championship Team",
    player_position: NULL,
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1948",
    year_inducted: 1999
  },
  {
    full_name: "1949 NFL Championship Team",
    player_position: NULL,
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1949",
    year_inducted: 1999
  },
  {
    full_name: "Bob Brown",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1964 - 1968",
    year_inducted: 2004
  },
  {
    full_name: "Reggie White",
    player_position: "DE",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1985 - 1992",
    year_inducted: 2005
  },
  {
    full_name: "Al Wistert",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1943 - 1951",
    year_inducted: 2009
  },
  {
    full_name: "Randall Cunningham",
    player_position: "QB & Punter",
    team_name: "Philadelphia Eagles",
    notes: "Punted 20 times in his career",
    years_active: "1985 - 1995",
    year_inducted: 2009
  },
  {
    full_name: "Eric Allen",
    player_position: "CB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1988 - 1994",
    year_inducted: 2011
  },
  {
    full_name: "Jim Johnson",
    player_position: "Defensive Coordinator",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1999 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Leo Carlin",
    player_position: "Ticket Manager",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1960 - 1982, 1985 - 2015",
    year_inducted: 2012
  },
  {
    full_name: "Brian Dawkins",
    player_position: "Safety",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2012
  },
  {
    full_name: "Troy Vincent",
    player_position: "CB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1996 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "Donovan McNabb",
    player_position: "QB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1999 - 2009",
    year_inducted: 2013
  },
  {
    full_name: "Brian Westbrook",
    player_position: "RB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "2002 - 2009",
    year_inducted: 2015
  },
  {
    full_name: "Maxie Baughan",
    player_position: "LB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1960 - 1965",
    year_inducted: 2015
  },
  {
    full_name: "Jeremiah Trotter",
    player_position: "LB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1998 - 2001, 2004 - 2006",
    year_inducted: 2016
  },
  {
    full_name: "Merrill Reese",
    player_position: "Radio Play by Play",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1977 - Present",
    year_inducted: 2016
  },
  {
    full_name: "David Akers",
    player_position: "Kicker",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1999 - 2010",
    year_inducted: 2017
  },
  {
    full_name: "Seth Joyner",
    player_position: "LB",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1986 - 1993",
    year_inducted: 2018
  },
  {
    full_name: "Clyde Simmons",
    player_position: "DE",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1986 - 1993",
    year_inducted: 2018
  },
  {
    full_name: "Bobby Walston",
    player_position: "WR, TE, Kicker",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1951 - 1962",
    year_inducted: 2019
  },
  {
    full_name: "Tra Thomas",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "1998 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Jon Runyan",
    player_position: "OT",
    team_name: "Philadelphia Eagles",
    notes: NULL,
    years_active: "2000 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Hugh Douglas",
    player_position: "DE",
    team_name: "Philadelphia Eagles",
    notes: null,
    years_active: "1998 - 2002, 2004",
    year_inducted: 2022
  },
  {
    full_name: "Trent Cole ",
    player_position: "DE, LB",
    team_name: "Philadelphia Eagles",
    notes: null,
    years_active: "2005 - 2014",
    year_inducted: 2022
  },
  // Pittsburgh Steelers
  {
    full_name: "Jerome Bettis",
    player_position: "RB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1996 - 2005",
    year_inducted: 2017
  },
  {
    full_name: "Mel Blount",
    player_position: "CB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1970 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Terry Bradshaw",
    player_position: "QB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1970 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Jack Butler",
    player_position: "CB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1951 - 1959",
    year_inducted: 2017
  },
  {
    full_name: "Dermontti Dawson",
    player_position: "Center",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1988 - 2000",
    year_inducted: 2017
  },
  {
    full_name: "Bill Dudley",
    player_position: "RB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1942, 1945 - 1946",
    year_inducted: 2017
  },
  {
    full_name: "Joe Greene",
    player_position: "DT",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1969 - 1981",
    year_inducted: 2017
  },
  {
    full_name: "Kevin Greene",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1993 - 1995",
    year_inducted: 2017
  },
  {
    full_name: "L.C. Greenwood",
    player_position: "DE",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1969 - 1981",
    year_inducted: 2017
  },
  {
    full_name: "Jack Ham",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1971 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Franco Harris",
    player_position: "FB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1972 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Dick Hoak",
    player_position: "RB & RB Coach",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1961 - 1970, 1972 - 2006",
    year_inducted: 2017
  },
  {
    full_name: "John Henry Johnson",
    player_position: "FB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1960 - 1965",
    year_inducted: 2017
  },
  {
    full_name: "Walt Kiesling",
    player_position: "OG & Head Coach",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1937 - 1939, 1939 - 1944, 1954 - 1956",
    year_inducted: 2017
  },
  {
    full_name: "Jack Lambert",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1974 - 1984",
    year_inducted: 2017
  },
  {
    full_name: "Bobby Layne",
    player_position: "QB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1958 - 1962",
    year_inducted: 2017
  },
  {
    full_name: "Johnny 'Blood' McNally",
    player_position: "FB & Head Coach",
    team_name: "Pittsburgh Steelers",
    notes: "Hired to be a Player and the Head Coach in 1937",
    years_active: "1934, 1937 - 1939",
    year_inducted: 2017
  },
  {
    full_name: "Chuck Noll",
    player_position: "Head Coach",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1969 - 1991",
    year_inducted: 2017
  },
  {
    full_name: "Art Rooney Sr.",
    player_position: "Founding Owner, President, Chairman of the Board",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1933 - 1988",
    year_inducted: 2017
  },
  {
    full_name: "Dan Rooney Sr.",
    player_position: "President & Chairman",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1955 - 2017",
    year_inducted: 2017
  },
  {
    full_name: "Andy Russell",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1963, 1966 - 1976",
    year_inducted: 2017
  },
  {
    full_name: "Donnie Shell",
    player_position: "Safety",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1974 - 1987",
    year_inducted: 2017
  },
  {
    full_name: "John Stallworth",
    player_position: "WR",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1974 - 1987",
    year_inducted: 2017
  },
  {
    full_name: "Ernie Stautner",
    player_position: "DT",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1950 - 1963",
    year_inducted: 2017
  },
  {
    full_name: "Lynn Swann",
    player_position: "WR",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1974 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Mike Webster",
    player_position: "Center",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1974 - 1988",
    year_inducted: 2017
  },
  {
    full_name: "Rod Woodson",
    player_position: "CB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1987 - 1996",
    year_inducted: 2017
  },
  {
    full_name: "Rocky Bleier",
    player_position: "RB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1968, 1970 - 1980",
    year_inducted: 2018
  },
  {
    full_name: "Buddy Dial",
    player_position: "WR",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1959 - 1963",
    year_inducted: 2018
  },
  {
    full_name: "Alan Faneca",
    player_position: "OG",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1998 - 2007",
    year_inducted: 2018
  },
  {
    full_name: "Bill Nunn",
    player_position: "Scout, Senior Scout, Assistant Director of Player Personnel",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1968 - 2014",
    year_inducted: 2018
  },
  {
    full_name: "Art Rooney Jr.",
    player_position: "Personnel Director & Vice President",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1965 - 1986, 1987 - Present",
    year_inducted: 2018
  },
  {
    full_name: "Larry Brown",
    player_position: "TE & OT",
    team_name: "Pittsburgh Steelers",
    notes: "Switched to OT in 1977",
    years_active: "1971 - 1984",
    year_inducted: 2019
  },
  {
    full_name: "Bill Cowher",
    player_position: "Head Coach",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1992 - 2006",
    year_inducted: 2019
  },
  {
    full_name: "Elbi Nickel",
    player_position: "TE",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1947 - 1957",
    year_inducted: 2019
  },
  {
    full_name: "Hines Ward",
    player_position: "WR",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1998 - 2011",
    year_inducted: 2019
  },
  {
    full_name: "James Farrior",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "2002 - 2011",
    year_inducted: 2020
  },
  {
    full_name: "Greg Lloyd",
    player_position: "LB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1988 - 1997",
    year_inducted: 2020
  },
  {
    full_name: "Troy Polamalu",
    player_position: "Safety",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "2003 - 2014",
    year_inducted: 2020
  },
  {
    full_name: "Mike Wagner",
    player_position: "Safety",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1971 - 1980",
    year_inducted: 2020
  },
  {
    full_name: "Dwight White",
    player_position: "DE",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1971 - 1980",
    year_inducted: 2020
  },
  {
    full_name: "Tunch Ilkin",
    player_position: "OT",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1980 - 1992",
    year_inducted: 2021
  },
  {
    full_name: "Jon Kolb",
    player_position: "OT",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1969 - 1981",
    year_inducted: 2021
  },
  {
    full_name: "Carnell Lake",
    player_position: "Safety & CB",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1989 - 1998",
    year_inducted: 2021
  },
  {
    full_name: "Louis Lipps",
    player_position: "WR",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1984 - 1991",
    year_inducted: 2021
  },
  {
    full_name: "Myron Cope",
    player_position: "Broadcaster",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1970 - 2004",
    year_inducted: 2022
  },
  {
    full_name: "Sam Davis",
    player_position: "OG",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1967 - 1979",
    year_inducted: 2022
  },
  {
    full_name: "Ray Matthews",
    player_position: "RB, TE",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "1951 - 1959",
    year_inducted: 2022
  },
  {
    full_name: "Heath Miller",
    player_position: "TE",
    team_name: "Pittsburgh Steelers",
    notes: NULL,
    years_active: "2005 - 2015",
    year_inducted: 2022
  },
  // San Francisco 49ers
  {
    full_name: "Steve Young",
    player_position: "QB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1987 - 1999",
    year_inducted: 2009
  },
  {
    full_name: "John Brodie",
    player_position: "QB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1957 - 1973",
    year_inducted: 2009
  },
  {
    full_name: "Y.A. Tittle",
    player_position: "QB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1951 - 1960",
    year_inducted: 2009
  },
  {
    full_name: "Joe Montana",
    player_position: "QB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1979 - 1992",
    year_inducted: 2009
  },
  {
    full_name: "Joe Perry",
    player_position: "RB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1948 - 1960, 1963",
    year_inducted: 2009
  },
  {
    full_name: "John Henry Johnson",
    player_position: "RB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1954 - 1956",
    year_inducted: 2009
  },
  {
    full_name: "Jimmy Johnson",
    player_position: "CB & WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1961 - 1976",
    year_inducted: 2009
  },
  {
    full_name: "Hugh McElhenny",
    player_position: "RB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1952 - 1960",
    year_inducted: 2009
  },
  {
    full_name: "Ronnie Lott",
    player_position: "Safety & CB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1981 - 1990",
    year_inducted: 2009
  },
  {
    full_name: "Dave Wilcox",
    player_position: "LB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1964 - 1974",
    year_inducted: 2009
  },
  {
    full_name: "Charlie Krueger",
    player_position: "DL",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1959 - 1973",
    year_inducted: 2009
  },
  {
    full_name: "Leo Nomellini",
    player_position: "OT & DT",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1950 - 1963",
    year_inducted: 2009
  },
  {
    full_name: "Fred Dean",
    player_position: "DE",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1981 - 1985",
    year_inducted: 2009
  },
  {
    full_name: "Bob St. Clair",
    player_position: "OT",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1953 - 1963",
    year_inducted: 2009
  },
  {
    full_name: "Dwight Clark",
    player_position: "WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1979 - 1987",
    year_inducted: 2009
  },
  {
    full_name: "Edward DeBartolo Jr.",
    player_position: "Owner",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1978 - 2000",
    year_inducted: 2009
  },
  {
    full_name: "Bill Walsh",
    player_position: "Head Coach",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1979 - 1988",
    year_inducted: 2009
  },
  {
    full_name: "Jerry Rice",
    player_position: "WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1985 - 2000",
    year_inducted: 2010
  },
  {
    full_name: "Tony Morabito",
    player_position: "Founding Owner",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1946 - 1957",
    year_inducted: 2010
  },
  {
    full_name: "Vic Morabito",
    player_position: "Owner",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1946 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "R.C. Owens",
    player_position: "WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1957 - 1961",
    year_inducted: 2011
  },
  {
    full_name: "Roger Craig",
    player_position: "RB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1982 - 1990",
    year_inducted: 2011
  },
  {
    full_name: "Gordon Soltau",
    player_position: "WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1949 - 1958",
    year_inducted: 2012
  },
  {
    full_name: "John McVay",
    player_position: "Executive",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1980 - 1995, 1998 - 1999",
    year_inducted: 2013
  },
  {
    full_name: "George Seifert",
    player_position: "DB Coach, Defensive Coordinator, Head Coach",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1980 - 1982, 1983 - 1988, 1989 - 1996",
    year_inducted: 2014
  },
  {
    full_name: "Charles Haley",
    player_position: "DE & LB",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1986 - 1991, 1998 - 1999",
    year_inducted: 2015
  },
  {
    full_name: "Tom Rathman",
    player_position: "FB & RB Coach",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1986 - 1991, 1997 - 2002, 2009 - 2016",
    year_inducted: 2017
  },
  {
    full_name: "Terrell Owens",
    player_position: "WR",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1996 - 2003",
    year_inducted: 2018
  },
  {
    full_name: "Bryant Young",
    player_position: "DT",
    team_name: "San Francisco 49ers",
    notes: NULL,
    years_active: "1994 - 2007",
    year_inducted: 2020
  },
  // Seattle Seahawks
  {
    full_name: "Steve Largent",
    player_position: "WR",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1976 - 1984",
    year_inducted: 1989
  },
  {
    full_name: "Jim Zorn",
    player_position: "QB",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1976 - 1984",
    year_inducted: 1991
  },
  {
    full_name: "Dave Brown",
    player_position: "CB",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1976 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Pete Gross",
    player_position: "Radio Announcer",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1976 - 1992",
    year_inducted: 1992
  },
  {
    full_name: "Curt Warner",
    player_position: "RB",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1983 - 1989",
    year_inducted: 1994
  },
  {
    full_name: "Jacob Green",
    player_position: "DE",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1980 - 1991",
    year_inducted: 1995
  },
  {
    full_name: "Kenny Easley",
    player_position: "Safety",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1981 - 1987",
    year_inducted: 2002
  },
  {
    full_name: "Dave Krieg",
    player_position: "QB",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1980 - 1991",
    year_inducted: 2004
  },
  {
    full_name: "Chuck Knox",
    player_position: "Head Coach",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1983 - 1991",
    year_inducted: 2005
  },
  {
    full_name: "Cortez Kennedy",
    player_position: "DT",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1990 - 2000",
    year_inducted: 2006
  },
  {
    full_name: "Walter Jones",
    player_position: "OT",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1997 - 2009",
    year_inducted: 2014
  },
  {
    full_name: "Paul Allen",
    player_position: "Owner",
    team_name: "Seattle Seahawks",
    notes: NULL,
    years_active: "1996 - 2018",
    year_inducted: 2019
  },
  {
    full_name: "Matt Hasselbeck",
    player_position: "QB",
    team_name: "Seattle Seahawks",
    notes: null,
    years_active: "2001 - 2010",
    year_inducted: 2021
  },
  {
    full_name: "Mike Holmgren",
    player_position: "Head Coach",
    team_name: "Seattle Seahawks",
    notes: null,
    years_active: "1999 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Shaun Alexander",
    player_position: "RB",
    team_name: "Seattle Seahawks",
    notes: null,
    years_active: "2000 - 2007",
    year_inducted: 2022
  },
  // Tampa Bay Buccaneers 
  {
    full_name: "Lee Roy Selmon",
    player_position: "DE",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1976 - 1984",
    year_inducted: 2009
  },
  {
    full_name: "John McKay",
    player_position: "Head Coach",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1976 - 1984",
    year_inducted: 2010
  },
  {
    full_name: "Jimmie Giles",
    player_position: "TE",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1978 - 1986",
    year_inducted: 2011
  },
  {
    full_name: "Paul Gruber",
    player_position: "OT",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1988 - 1999",
    year_inducted: 2012
  },
  {
    full_name: "Warren Sapp",
    player_position: "DT",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1995 - 2003",
    year_inducted: 2013
  },
  {
    full_name: "Derrick Brooks",
    player_position: "LB",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1995 - 2008",
    year_inducted: 2014
  },
  {
    full_name: "Mike Alstott",
    player_position: "FB",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1996 - 2007",
    year_inducted: 2015
  },
  {
    full_name: "Doug Williams",
    player_position: "QB",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1978 - 1982",
    year_inducted: 2015
  },
  {
    full_name: "John Lynch",
    player_position: "Safety",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1993 - 2003",
    year_inducted: 2016
  },
  {
    full_name: "Malcolm Glazer",
    player_position: "Owner",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1995 - 2014",
    year_inducted: 2017
  },
  // {
  //   full_name: "Jon Gruden",
  //   player_position: "Head Coach",
  //   team_name: "Tampa Bay Buccaneers",
  //   notes: "Removed in October of 2021",
  //   years_active: "2002 - 2008",
  //   year_inducted: 2017
  // },
  {
    full_name: "Tony Dungy",
    player_position: "Head Coach",
    team_name: "Tampa Bay Buccaneers",
    notes: null,
    years_active: "1996 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Ronde Barber",
    player_position: "CB",
    team_name: "Tampa Bay Buccaneers",
    notes: null,
    years_active: "1997 - 2012",
    year_inducted: 2019
  },
  {
    full_name: "Monte Kiffin",
    player_position: "Defensive Coordinator",
    team_name: "Tampa Bay Buccaneers",
    notes: NULL,
    years_active: "1996 - 2008",
    year_inducted: 2020
  },
  {
    full_name: "Bruce Arians",
    player_position: "Head Coach" + ", Executive",
    team_name: "Tampa Bay Buccaneers",
    notes: null,
    years_active: "2019 - Present",
    year_inducted: 2022
  },
  // Tennessee Titans
  {
    full_name: "Elvin Bethea",
    player_position: "DE",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1968 - 1983",
    year_inducted: 1999
  },
  {
    full_name: "George Blanda",
    player_position: "QB & Kicker",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1960 - 1966",
    year_inducted: 1999
  },
  {
    full_name: "Earl Campbell",
    player_position: "RB",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1978 - 1984",
    year_inducted: 1999
  },
  {
    full_name: "Mike Holovak",
    player_position: "General Manager",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1989 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Ken Houston",
    player_position: "Safety",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1967 - 1972",
    year_inducted: 1999
  },
  {
    full_name: "Mike Munchak",
    player_position: "OG",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1982 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Jim Norton",
    player_position: "Punter",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1960 - 1968",
    year_inducted: 1999
  },
  {
    full_name: "Bruce Matthews",
    player_position: "OL",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1983 - 2001",
    year_inducted: 2002
  },
  {
    full_name: "Warren Moon",
    player_position: "QB",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1984 - 1993",
    year_inducted: 2007
  },
  {
    full_name: "Bud Adams",
    player_position: "Founding Owner",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1960 - 2013",
    year_inducted: 2008
  },
  {
    full_name: "Eddie George",
    player_position: "RB",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1996 - 2003",
    year_inducted: 2008
  },
  {
    full_name: "Steve McNair",
    player_position: "QB",

    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1995 - 2005",
    year_inducted: 2008
  },
  {
    full_name: "Frank Whycheck",
    player_position: "TE",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1995 - 2003",
    year_inducted: 2008
  },
  {
    full_name: "Robert Brazile",
    player_position: "LB",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1975 - 1984",
    year_inducted: 2018
  },
  {
    full_name: "Bum Phillips",
    player_position: "Defensive Coordinator & Head Coach",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1974 - 1980",
    year_inducted: 2021
  },
  {
    full_name: "Jeff Fisher",
    player_position: "Defensive Coordinator & Head Coach",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1994 - 2010",
    year_inducted: 2021
  },
  {
    full_name: "Floyd Reese",
    player_position: "LB Coach, Assistant General Manager, General Manager",
    team_name: "Tennessee Titans",
    notes: NULL,
    years_active: "1986 - 2006",
    year_inducted: 2021
  },
  // Washington Commanders
  {
    full_name: "George Allen",
    player_position: "Head Coach",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1971 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "Cliff Battles",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1932 - 1937",
    year_inducted: NULL
  },
  {
    full_name: "Sammy Baugh",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1937 - 1952",
    year_inducted: NULL
  },
  {
    full_name: "Bobby Beathard",
    player_position: "General Manager",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1978 - 1988",
    year_inducted: NULL
  },
  {
    full_name: "Jeff Bostic",
    player_position: "Center",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1980 - 1993",
    year_inducted: NULL
  },
  {
    full_name: "Gene Brito",
    player_position: "DE",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1951 - 1953, 1955 - 1958",
    year_inducted: NULL
  },
  {
    full_name: "Larry Brown",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1969 - 1976",
    year_inducted: NULL
  },
  {
    full_name: "Dave Butz",
    player_position: "OT",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1975 - 1988",
    year_inducted: NULL
  },
  {
    full_name: "Gary Clark",
    player_position: "WR",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1985 - 1992",
    year_inducted: NULL
  },
  {
    full_name: "Monte Coleman",
    player_position: "LB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1979 - 1994",
    year_inducted: NULL
  },
  {
    full_name: "Jack Kent Cooke",
    player_position: "Owner",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1961 - 1997",
    year_inducted: NULL
  },
  {
    full_name: "Wayne Curry",
    player_position: "Prince George's County Executive",
    team_name: "Washington Commanders",
    notes: "Was pivotal in helping move Washington to Landover, Maryland",
    years_active: "1994 - 2002",
    year_inducted: NULL
  },
  {
    full_name: "Bill Dudley",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1950 - 1951, 1953",
    year_inducted: NULL
  },
  {
    full_name: "Pat Fischer",
    player_position: "CB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1968 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "London Fletcher",
    player_position: "LB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "2007 - 2013",
    year_inducted: NULL
  },
  {
    full_name: "Joe Gibbs",
    player_position: "Head Coach",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1981 - 1992, 2004 - 2007",
    year_inducted: NULL
  },
  {
    full_name: "Darrell Green",
    player_position: "CB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1983 - 2002",
    year_inducted: NULL
  },
  {
    full_name: "Russ Grimm",
    player_position: "OG",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1981 - 1991",
    year_inducted: NULL
  },
  {
    full_name: "Chris Hanburger",
    player_position: "LB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1965 - 1978",
    year_inducted: NULL
  },
  {
    full_name: "Ken Harvey",
    player_position: "LB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1994 - 1998",
    year_inducted: NULL
  },
  {
    full_name: "Len Hauss",
    player_position: "Center",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1964 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "Phil Hochberg",
    player_position: "PA Announcer",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1963 - 2000",
    year_inducted: NULL
  },
  {
    full_name: "Ken Houston",
    player_position: "Safety",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1973 - 1980",
    year_inducted: NULL
  },
  {
    full_name: "Sam Huff",
    player_position: "LB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1964 - 1967, 1969",
    year_inducted: NULL
  },
  {
    full_name: "Joe Jacoby",
    player_position: "OT & OG",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1981 - 1993",
    year_inducted: NULL
  },
  {
    full_name: "Dick James",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1956 - 1963",
    year_inducted: NULL
  },
  {
    full_name: "Sonny Jurgensen",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1964 - 1974",
    year_inducted: NULL
  },
  {
    full_name: "Charlie Justice",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1950, 1952 - 1954",
    year_inducted: NULL
  },
  {
    full_name: "Billy Kilmer",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1971 - 1978",
    year_inducted: NULL
  },
  {
    full_name: "Eddie LeBaron",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1952 - 1953, 1955 - 1959",
    year_inducted: NULL
  },
  {
    full_name: "Vince Lombardi",
    player_position: "Head Coach",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1969",
    year_inducted: NULL
  },
  {
    full_name: "Dexter Manley",
    player_position: "DE",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1981 - 1989",
    year_inducted: NULL
  },
  {
    full_name: "Charles Mann",
    player_position: "DE",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1983 - 1989",
    year_inducted: NULL
  },
  {
    full_name: "Wayne Millner",
    player_position: "TE & DE",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1936 - 1941, 1945",
    year_inducted: NULL
  },
  {
    full_name: "Bobby Mitchell",
    player_position: "WR",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1962 - 1968",
    year_inducted: NULL
  },
  {
    full_name: "Brian Mitchell",
    player_position: "RB & Return Specialist",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1990 - 1999",
    year_inducted: NULL
  },
  {
    full_name: "Art Monk",
    player_position: "WR",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1980 - 1993",
    year_inducted: NULL
  },
  {
    full_name: "Mark Moseley",
    player_position: "Kicker",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1974 - 1986",
    year_inducted: NULL
  },
  {
    "full_name: Brig Owens",
    player_position: "CB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1966 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "Richie Petitbon",
    player_position: "Safety, DB Coach, Defensive Coordinator, Head Coach",
    team_name: "Washington Commanders",
    notes: "Was the Head Coach for the 1993 season",
    years_active: "1971 - 1972, 1978 - 1993",
    year_inducted: NULL
  },
  {
    full_name: "Vince Promuto",
    player_position: "OG",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1960 - 1970",
    year_inducted: NULL
  },
  {
    full_name: "John Riggins",
    player_position: "RB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1976 - 1979, 1981 - 1985",
    year_inducted: NULL
  },
  {
    full_name: "Mark Rypien",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1986 - 1993",
    year_inducted: NULL
  },
  {
    full_name: "Chris Samuels",
    player_position: "OT",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "2000 - 2009",
    year_inducted: NULL
  },
  {
    full_name: "Jerry Smith",
    player_position: "TE",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1965 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "Charley Taylor",
    player_position: "WR",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1964 - 1977",
    year_inducted: NULL
  },
  {
    full_name: "Sean Taylor",
    player_position: "Safety",
    team_name: "Washington Commanders",
    notes: "Passed away during the 2007 season",
    "2004 - 2007",
    year_inducted: NULL
  },
  {
    full_name: "Joe Theismann",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1974 - 1985",
    year_inducted: NULL
  },
  {
    full_name: "Lamar 'Bubba' Tyler",
    player_position: "Athletic Trainer",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1971 - 2002, 2004 - 2008",
    year_inducted: NULL
  },
  {
    full_name: "Doug Williams",
    player_position: "QB",
    team_name: "Washington Commanders",
    notes: NULL,
    years_active: "1986 - 1989",
    year_inducted: NULL
  };
]

// full_name VARCHAR(100),
// player_position VARCHAR(100) NULL,
// team_name VARCHAR(50),
// notes VARCHAR(255) NULL,
// years_active VARCHAR(50),
// year_inducted YEAR NULL,



teamsModel.Teams.deleteMany({})
  .then(() => teamsModel.Teams.collection.insertMany(teamSeed))
  .then((data) => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

playersModel.Players.deleteMany({})
  .then(() => playersModel.Players.collection.insertMany(playerSeed))
  .then((data) => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
