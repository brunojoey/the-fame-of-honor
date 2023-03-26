// When running the seed file for Heroku; 'heroku run node {folder seed is in}/{seed file name}
const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the database and inserts new games and ceremonies.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/",
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

// Position Variables
const quarterBack = "Quarterback";
const runningBack = "Running Back";
const fullBack = "Full Back";
const wideReceiver = "Wide Receiver";
const tightEnd = "Tight End";
const offensiveTackle = "Offensive Tackle";
const guard = "Guard";
const center = "Center";
const defensiveTackle = "Defensive Tackle";
const defensiveEnd = "Defensive End";
const lineBacker = "Linebacker";
const cornerBack = "Cornerback";
const safety = "Safety";
const kicker = "Kicker";
const punter = "Punter";
const executive = "Executive";
const headCoach = "Head Coach";
const offensiveCoordinator = "Offensive Coordinator";
const defensiveCoordinator = "Defensive Coordinator";
const generalManager = "General Manager";
const owner = "Owner";

const teamSeed = [
  {
    team_name: cardinals,
    history: "To mark the opening of State Farm Stadium in 2006, the Cardinals began a Ring of Honor to showcase all eras of the franchise.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ARI",
    color: "#97233F",
    border_color: "#000000"
  },
  {
    team_name: falcons,
    history: "While they don't retire jersey numbers, the Atlanta Falcons want to honor their former players by including them in their franchise's Ring of Honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ATL",
    color: "#A71930",
    border_color: "#000000"
  },
  {
    team_name: ravens,
    history: "Created in 2000, the Baltimore Ravens Ring of Honor is to honor former players and personnel who made outstanding contributions to the Baltimore Ravens and the Baltimore Colts organizations.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BAL",
    color: "#241773",
    border_color: "#000000"
  },
  {
    team_name: bills,
    history: "The Buffalo Bills Wall of Fame was created in 1980 to honor former players, administrators, and coaches who had a significant role in the franchise. The requirements to get inducted into the Wall of Fame are: the individual must have played with the team for three years and must be retired. The selection committee is comprised of club personnel and media members.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BUF",
    color: "#00338D",
    border_color: "#C60C30"
  },
  {
    team_name: panthers,
    history: "The Hall of Honor was established in 1997 as a still young franchsie. They've inducted six people who define being a Carolina Panther.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CAR",
    color: "#0085CA",
    border_color: "#101820"
  },
  {
    team_name: bears,
    history: "The Chicago Bears currently do not have a Ring of Honor or team Hall of Fame to commemorate players, coaches, or executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CHI",
    color: "#0B162A",
    border_color: "#C83803"
  },
  {
    team_name: bengals,
    history: "The Cincinnati Bengals introduced a Ring of Honor for their historical team in April of 2021. They announced two inductees, but will let their fans choose two others between a list of 17 other great players to complete its first Ring of Honor class. The fans chose Ken Anderson and Ken Riley.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CIN",
    color: "#FB4F14",
    border_color: "#000000"
  },
  {
    team_name: browns,
    history: "Established in 2010, the Cleveland Browns Ring of Honor commemorates the past greats of the Cleveland Browns franchise. The Inaugural class featured the 16 players who were already inducted into the Pro Football Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CLE",
    color: "#311D00",
    border_color: "#FF3C00"
  },
  {
    team_name: cowboys,
    history: "First introduced in Texas Stadium in Irving, Texas, the Cowboys Ring of Honor, in the words of Jerry Jones: 'stands for men who built this franchise and it had it call America's Team.'",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DAL",
    color: "#041E42",
    border_color: "#869397"
  },
  {
    team_name: broncos,
    history: "Began in 1984, the Denver Broncos have a Ring of Fame to honor their former players, executives, and coaches who have made a great impact on the team.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DEN",
    color: "#FB4F14",
    border_color: "#002244"
  },
  {

    team_name: lions,
    history: "The Pride of the Lions began in 2009 with an introductory class of 12 players. Only three players in the Pride of the Lions are not in the Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DET",
    color: "#0076B6",
    border_color: "#B0B7BC"
  },
  {
    team_name: packers,
    history: "For the Lambeau Field Ring of Honor that is dedicated to former Packers greats, the only requirements for to be inducted into it seemingly, is to be a Hall of Famer and contributed to the Packers organization in meaningful ways. The Packers do have a team Hall of Fame that includes over 150 former franchise greats.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/GB",
    color: "#203731",
    border_color: "#FFB612"
  },
  {
    team_name: texans,
    history: "As the newest NFL Franchise, the Houston Texans began their Ring of Honor in 2017.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/HOU",
    color: "#03202F",
    border_color: "#A71930"
  },
  {
    team_name: colts,
    history: "Established in 1996 and inducted longtime owner, Robert Irsay, as its first inductee before his passing the year following.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/IND",
    color: "#002C5F",
    border_color: "#A2AAAD"

  },
  {
    team_name: jaguars,
    history: "Called the Pride of the Jaguars by the fans in 2006, it represents the Ring of Honor for one of the newest franchises in the NFL. It was unveiled in the 2006 NFL season against the New York Jets.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/JAX",
    color: "#006778",
    border_color: "#9F792C"
  },
  {
    team_name: chiefs,
    history: "A Team Hall of Fame that was established in 1970. Each year except 1983 and 2020, has included one inductee. Requirements for induction are that a player, coach, or contributor must have been with the team for four years and been retired for four years. Three exceptions to that are Mack Lee Hill, Joe Delaney, and Derrick Thomas.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/KC",
    color: "#E31837",
    border_color: "#FFB81C"
  },
  {
    team_name: raiders,
    history: "The Las Vegas Raiders currently do not have a Ring of Honor or team Hall of Fame to commemorate their players, coaches, or executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LV",
    color: "#000000",
    border_color: "#A5ACAF"

  },
  {
    team_name: chargers,
    history: "Began in 1976, the Chargers Hall of Fame acts as their Ring of Honor. All four inductees in this year were inducted posthumously. In 2012, the team allowed the fans to induct that year's inductee, choosing Punter, Darren Bennett. After moving to Los Angeles in 2017, the Chargers inducted Bobby Beathard to the Team Hall of Fame in 2018.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAC",
    color: "#0080C6",
    border_color: "#FFC20E"
  },
  {
    team_name: rams,
    history: "While St. Louis did have a Ring of Fame for football in its city, the Los Angeles Rams do not specifically have a Ring of Honor or Team Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAR",
    color: "#003594",
    border_color: "#FF8200"
  },
  {
    team_name: dolphins,
    history: "The Miami Dolphins Honor Roll was created in 1990 with the induction of five people from the franchise's history. The Honor Roll helps demonstrate the great players and adminstrators from the history of the Dolphins who helped make significant contributions to the team.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIA",
    color: "#008E97",
    border_color: "#FC4C02"

  },
  {
    team_name: vikings,
    history: "Started in 1998, the Minnesota Vikings Ring of Honor was begun with six players, coaches, and executives.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIN",
    color: "#4F2683",
    border_color: "#FFC62F"
  },
  {
    team_name: patriots,
    history: "Begun in 1991, the New England Patriots Team Hall of Fame features franchise greats who impacted the franchise greatly. In order to be eligible, players and coaches must be retired for at least four years.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NE",
    color: "#002244",
    border_color: "#B0B7BC"
  },
  {
    team_name: saints,
    history: "Beginning in 2013, the New Orleans Saints began honoring their history with the creation of the Ring of Honor in Caesars Superdome. They inducted the first three nominees during halftime against the Cowboys in 2013.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NO",
    color: "#101820",
    border_color: "#D3BC8D"
  },
  {
    team_name: giants,
    history: "The Giants Ring of Honor was unveiled in 2010 during a game against the Chicago Bears. Their inaugural induction class featured 30 players, coaches, and executives who made a great impact on the franchise.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYG",
    color: "#0B2265",
    border_color: "#A71930"
  },
  {
    team_name: jets,
    history: "The New York Jets Ring of Honor was established in July 2010 to commemorate and honor former players. Players are nominated by an internal committee before being inducted into the Ring of Honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYJ",
    color: "#125740",
    border_color: "#000000"
  },
  {
    team_name: eagles,
    history: "Began in 1987 as the Eagles Honor Roll, it serves to honors players, executives, and coaches from the franchise's long history. Their inaugural induction class in 1987 was included with every player who was inducted into the Pro Football Hall of Fame as an Eagle. Players must be retired for three years to be considered to be included in the Eagles Hall of Fame.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PHI",
    color: "#004C54",
    border_color: "#A5ACAF"
  },
  {
    team_name: steelers,
    history: "Begun in 2017 with an inaugural inductee class of 27, the Pittsburgh Steelers Hall of Honor commemorates the franchise's history.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PIT",
    color: "#000000",
    border_color: "#FFB612"
  },
  {
    team_name: fortyNiners,
    history: "Started in 2009, the Edward DeBartolo Sr. 49ers Hall of Fame is the team's official hall of honor.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SF",
    color: "#AA0000",
    border_color: "#B3995D"
  },
  {
    team_name: seahawks,
    history: "The Seattle Seahawks Ring of Honor was established in 1989 and has inducted 12 people thus far who exemplify being a Seattle Seahawk.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SEA",
    color: "#002244",
    border_color: "#69BE28"
  },
  {
    team_name: buccaneers,
    history: "In November 2009, the team unveiled a Ring of Honor at their current stadium, Raymond James Stadium.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TB",
    color: "#D50A0A",
    border_color: "#34302B"
  },
  {
    team_name: titans,
    history: "Establishment of the Titans/Oilers Hall of Fame coincides with the 40th anniversary of the franchise by Owner, Bud Adams. It encompasses the history of the Houston Oilers and the Tennessee Titans respectively.",
    logo: "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TEN",
    color: "#0C2340",
    border_color: "#4B92DB"
  },
  {
    team_name: commanders,
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
    position: owner,
    team_name: cardinals,
    notes: null,
    tenure: "1933 - 1947",
    year_inducted: 2006
  },
  {
    full_name: "Jimmy Conzelman",
    position: headCoach,
    team_name: cardinals,
    notes: null,
    tenure: "1940 - 1942, 1946 - 1948",
    year_inducted: 2006
  },
  {
    full_name: "John 'Paddy' Driscoll",
    position: quarterBack + ", " + headCoach,
    team_name: cardinals,
    notes: "Was the Head Coach in 1920 and ended his tenure in 1922, while continuing to be the QB until 1925",
    tenure: "1920 - 1925, 1920 - 1922",
    year_inducted: 2006
  },
  {
    full_name: "Marshall Goldberg",
    position: runningBack,
    team_name: cardinals,
    notes: null,
    tenure: "1939 - 1943, 1946 - 1948",
    year_inducted: 2006
  },
  {
    full_name: "Dick 'Night Train' Lane",
    position: cornerBack,
    team_name: cardinals,
    notes: null,
    tenure: "1954 - 1959",
    year_inducted: 2006
  },
  {
    full_name: "Ollie Matson",
    position: runningBack,
    team_name: cardinals,
    notes: null,
    tenure: "1952, 1954 - 1958",
    year_inducted: 2006
  },
  {
    full_name: "Ernie Nevers",
    position: fullBack + ", " + headCoach,
    team_name: cardinals,
    notes: "Was the Head Coach of the 1930, 1931, and 1939 seasons",
    tenure: "1929 - 1931, 1930 - 1931, 1939",
    year_inducted: 2006
  },
  {
    full_name: "Charley Trippi",
    position: runningBack + ", " + quarterBack,
    team_name: cardinals,
    notes: null,
    tenure: "1947 - 1955",
    year_inducted: 2006
  },
  {
    full_name: "Larry Wilson",
    position: safety,
    team_name: cardinals,
    notes: null,
    tenure: "1960 - 1972",
    year_inducted: 2006
  },
  {
    full_name: "Dan Dierdorf",
    position: offensiveTackle,
    team_name: cardinals,
    notes: null,
    tenure: "1971 - 1983",
    year_inducted: 2006
  },
  {
    full_name: "Pat Tillman",
    position: safety,
    team_name: cardinals,
    notes: "Was Killed in Action while serving in the US Army in 2004",
    tenure: "1998 - 2001",
    year_inducted: 2007
  },
  {
    full_name: "Roger Wehrli",
    position: cornerBack,
    team_name: cardinals,
    notes: null,
    tenure: "1969 - 1982",
    year_inducted: 2008
  },
  {
    full_name: "Aeneas Williams",
    position: cornerBack,
    team_name: cardinals,
    notes: null,
    tenure: "1991 - 2000",
    year_inducted: 2008
  },
  {
    full_name: "Kurt Warner",
    position: quarterBack,
    team_name: cardinals,
    notes: null,
    tenure: "2005 - 2009",
    year_inducted: 2014
  },
  {
    full_name: "Adrian Wilson",
    position: safety,
    team_name: cardinals,
    notes: null,
    tenure: "2001 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Roy Green",
    position: wideReceiver,
    team_name: cardinals,
    notes: null,
    tenure: "1979 - 1990",
    year_inducted: 2016
  },
  {
    full_name: "Jim Hart",
    position: quarterBack,
    team_name: cardinals,
    notes: null,
    tenure: "1966 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Carson Palmer",
    position: quarterBack,
    team_name: cardinals,
    notes: null,
    tenure: "2013 - 2017",
    year_inducted: 2019
  },
  // Atlanta Falcons 
  {
    full_name: "William Andrews",
    position: runningBack,
    team_name: falcons,
    notes: null,
    tenure: "1979 - 1983, 1986",
    year_inducted: 2004
  },
  {
    full_name: "Steve Bartkowski",
    position: quarterBack,
    team_name: falcons,
    notes: null,
    tenure: "1975 - 1985",
    year_inducted: 2004
  },
  {
    full_name: "Tommy Nobis",
    position: lineBacker,
    team_name: falcons,
    notes: null,
    tenure: "1966 - 1976",
    year_inducted: 2004
  },
  {
    full_name: "Jessie Tuggle",
    position: lineBacker,
    team_name: falcons,
    notes: null,
    tenure: "1987 - 2000",
    year_inducted: 2004
  },
  {
    full_name: "Jeff Van Note",
    position: center,
    team_name: falcons,
    notes: null,
    tenure: "1969 - 1986",
    year_inducted: 2006
  },
  {
    full_name: "Claude Humphrey",
    position: defensiveEnd,
    team_name: falcons,
    notes: null,
    tenure: "1968 - 1978",
    year_inducted: 2008
  },
  {
    full_name: "Mike Kenn",
    position: offensiveTackle,
    team_name: falcons,
    notes: null,
    tenure: "1978 - 1994",
    year_inducted: 2008
  },
  {
    full_name: "Deion Sanders",
    position: cornerBack,
    team_name: falcons,
    notes: null,
    tenure: "1989 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Gerald Riggs",
    position: runningBack,
    team_name: falcons,
    notes: null,
    tenure: "1982 - 1988",
    year_inducted: 2013
  },
  {
    full_name: "Warrick Dunn",
    position: runningBack,
    team_name: falcons,
    notes: null,
    tenure: "2002 - 2007",
    year_inducted: 2017
  },
  {
    full_name: "Roddy White",
    position: wideReceiver,
    team_name: falcons,
    notes: null,
    tenure: "2005 - 2015",
    year_inducted: 2019
  },
  // Baltimore Ravens
  {
    full_name: "Earnest Byner",
    position: runningBack + ", " + executive,
    team_name: ravens,
    notes: null,
    tenure: "1996 - 2003",
    year_inducted: 2001
  },
  {
    full_name: "Johnny Unitas",
    position: quarterBack,
    team_name: ravens,
    notes: null,
    tenure: "1956-1972",
    year_inducted: 2002
  },
  {
    full_name: "Lenny Moore",
    position: runningBack,
    team_name: ravens,
    notes: null,
    tenure: "1956 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Art Donovan",
    position: defensiveTackle,
    team_name: ravens,
    notes: null,
    tenure: "1953 - 1961",
    year_inducted: 2002
  },
  {
    full_name: "Jim Parker",
    position: "Offensive Line",
    team_name: ravens,
    notes: null,
    tenure: "1957 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Raymond Berry",
    position: wideReceiver,
    team_name: ravens,
    notes: null,
    tenure: "1955 - 1967",
    year_inducted: 2002
  },
  {
    full_name: "Ted Hendricks",
    position: lineBacker,
    team_name: ravens,
    notes: null,
    tenure: "1969 - 1973",
    year_inducted: 2002
  },
  {
    full_name: "John Mackey",
    position: tightEnd,
    team_name: ravens,
    notes: null,
    tenure: "1963 - 1971",
    year_inducted: 2002
  },
  {
    full_name: "Gino Marchetti",
    position: defensiveEnd,
    team_name: ravens,
    notes: null,
    tenure: "1953 - 1966",
    year_inducted: 2002
  },
  {
    full_name: "Art Modell",
    position: "Founding Owner",
    team_name: ravens,
    notes: "Brought Baltimore back to the NFL",
    tenure: "1996 - 2004",
    year_inducted: 2004
  },
  {
    full_name: "Michael McCrary",
    position: defensiveEnd,
    team_name: ravens,
    notes: null,
    tenure: "1997 - 2002",
    year_inducted: 2004
  },
  {
    full_name: "Peter Boulware",
    position: lineBacker,
    team_name: ravens,
    notes: null,
    tenure: "1997 - 2005",
    year_inducted: 2006
  },
  {
    full_name: "Jonathan Ogden",
    position: offensiveTackle,
    team_name: ravens,
    notes: null,
    tenure: "1996 - 2007",
    year_inducted: 2008
  },
  {
    full_name: "Matt Stover",
    position: kicker,
    team_name: ravens,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Jamal Lewis",
    position: runningBack,
    team_name: ravens,
    notes: null,
    tenure: "2000 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Ray Lewis",
    position: lineBacker,
    team_name: ravens,
    notes: null,
    tenure: "1996 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Todd Heap",
    position: tightEnd,
    team_name: ravens,
    notes: null,
    tenure: "2001 - 2010",
    year_inducted: 2014
  },
  {
    full_name: "Ed Reed",
    position: safety,
    team_name: ravens,
    notes: null,
    tenure: "2002 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Brian Billick",
    position: headCoach,
    team_name: ravens,
    notes: null,
    tenure: "1999 - 2007",
    year_inducted: 2019
  },
  {
    full_name: "Haloti Ngata",
    position: defensiveTackle,
    team_name: ravens,
    notes: null,
    tenure: "2006 - 2014",
    year_inducted: 2021
  },
  {
    full_name: "Marshal Yanda",
    position: guard,
    team_name: ravens,
    notes: null,
    tenure: "2007 - 2019",
    year_inducted: 2022
  },
  // Buffalo Bills
  {
    full_name: "OJ Simpson",
    position: runningBack,
    team_name: bills,
    notes: null,
    tenure: "1969 - 1977",
    year_inducted: 1980
  },
  {
    full_name: "Jack Kemp",
    position: quarterBack,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1969",
    year_inducted: 1984
  },
  {
    full_name: "Pat McGroder",
    position: "Contributor" + ", " + generalManager,
    team_name: bills,
    notes: "Was instrumental in bringing the Bills to Buffalo during the beginning years of the AFL",
    tenure: "1961 - 1974",
    year_inducted: 1985
  },
  {
    full_name: "Tom Sestak",
    position: defensiveTackle,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1968",
    year_inducted: 1987
  },
  {
    full_name: "Billy Shaw",
    position: guard,
    team_name: bills,
    notes: null,
    tenure: "1961 - 1969",
    year_inducted: 1988
  },
  {
    full_name: "Ralph C. Wilson Jr.",
    position: "Founding Owner",
    team_name: bills,
    notes: null,
    tenure: "1959 - 2014",
    year_inducted: 1989
  },
  {
    full_name: "The 12th Man",
    position: "Fans",
    team_name: bills,
    notes: null,
    tenure: "1960 - Present",
    year_inducted: 1992
  },
  {
    full_name: "Elbert Dubenion",
    position: wideReceiver,
    team_name: bills,
    notes: null,
    tenure: "1960 - 1968",
    year_inducted: 1993
  },
  {
    full_name: "Mike Stratton",
    position: lineBacker,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1972",
    year_inducted: 1994
  },
  {
    full_name: "Joe Ferguson",
    position: quarterBack,
    team_name: bills,
    notes: null,
    tenure: "1973 - 1984",
    year_inducted: 1995
  },
  {
    full_name: "Marv Levy",
    position: headCoach + ", " + generalManager,
    team_name: bills,
    notes: null,
    tenure: "1986 - 1997, 2006 - 2007",
    year_inducted: 1996
  },
  {
    full_name: "Joe DeLamielleure",
    position: guard,
    team_name: bills,
    notes: null,
    tenure: "1973 - 1979, 1985",
    year_inducted: 1997
  },
  {
    full_name: "Robert James",
    position: cornerBack,
    team_name: bills,
    notes: null,
    tenure: "1969 - 1974",
    year_inducted: 1998
  },
  {
    full_name: "Edward Abramoski",
    position: "Trainer",
    team_name: bills,
    notes: null,
    tenure: "1960 - 1996",
    year_inducted: 1999
  },
  {
    full_name: "Bob Kalsu",
    position: guard,
    team_name: bills,
    notes: "Killed in Action during the Vietnam War in 1970 after he joined the US Army after the 1968 AFL Season",
    tenure: "1968",
    year_inducted: 2000
  },
  {
    full_name: "George Saimes",
    position: safety,
    team_name: bills,
    notes: null,
    tenure: "1963 - 1969",
    year_inducted: 2000
  },
  {
    full_name: "Jim Kelly",
    position: quarterBack,
    team_name: bills,
    notes: null,
    tenure: "1986 - 1996",
    year_inducted: 2001
  },
  {
    full_name: "Fred Smerlas",
    position: defensiveTackle,
    team_name: bills,
    notes: null,
    tenure: "1979 - 1989",
    year_inducted: 2001
  },
  {
    full_name: "Kent Hull",
    position: center,
    team_name: bills,
    notes: null,
    tenure: "1986 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Darryl Talley",
    position: lineBacker,
    team_name: bills,
    notes: null,
    tenure: "1983 - 1994",
    year_inducted: 2003
  },
  {
    full_name: "Jim Ritcher",
    position: guard + ", " + center,
    team_name: bills,
    notes: null,
    tenure: "1980 - 1993",
    year_inducted: 2004
  },
  {
    full_name: "Thurman Thomas",
    position: runningBack,
    team_name: bills,
    notes: null,
    tenure: "1988 - 1999",
    year_inducted: 2005
  },
  {
    full_name: "Andre Reed",
    position: wideReceiver,
    team_name: bills,
    notes: null,
    tenure: "1985 - 1999",
    year_inducted: 2006
  },
  {
    full_name: "Steve Tasker",
    position: wideReceiver + ", " + "Special Teamer",
    team_name: bills,
    notes: null,
    tenure: "1986 - 1997",
    year_inducted: 2007
  },
  {
    full_name: "Bruce Smith",
    position: defensiveEnd,
    team_name: bills,
    notes: null,
    tenure: "1985 - 1999",
    year_inducted: 2008
  },
  {
    full_name: "Booker Edgerson",
    position: cornerBack,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1969",
    year_inducted: 2010
  },
  {
    full_name: "Phil Hansen",
    position: defensiveEnd,
    team_name: bills,
    notes: null,
    tenure: "1991 - 2001",
    year_inducted: 2011
  },
  {
    full_name: "Bill Polian",
    position: generalManager,
    team_name: bills,
    notes: null,
    tenure: "1984 - 1992",
    year_inducted: 2012
  },
  {
    full_name: "Van Miller",
    position: "Broadcaster",
    team_name: bills,
    notes: null,
    tenure: "1960 - 1971, 1977 - 2003",
    year_inducted: 2014
  },
  {
    full_name: "Lou Saban",
    position: headCoach,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1965, 1972 - 1976",
    year_inducted: 2015
  },
  {
    full_name: "Cookie Gilchrist",
    position: runningBack,
    team_name: bills,
    notes: null,
    tenure: "1962 - 1964",
    year_inducted: 2017
  },
  // Carolina Panthers 
  {
    full_name: "Mike McCormack",
    position: "President" + ", " + generalManager,
    team_name: panthers,
    notes: null,
    tenure: "1993 - 1997",
    year_inducted: 1997
  },
  {
    full_name: "Sam Mills",
    position: lineBacker + ", " + lineBacker + " Coach",
    team_name: panthers,
    notes: "Passed away in 2005 due to cancer",
    tenure: "1995 - 2004",
    year_inducted: 1998
  },
  {
    full_name: "Steve Smith Sr.",
    position: wideReceiver,
    team_name: panthers,
    notes: null,
    tenure: "2001 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Jake Delhomme",
    position: quarterBack,
    team_name: panthers,
    notes: null,
    tenure: "2003 - 2009",
    year_inducted: 2019
  },
  {
    full_name: "Wesley Walls",
    position: tightEnd,
    team_name: panthers,
    notes: null,
    tenure: "1996 - 2002",
    year_inducted: 2019
  },
  {
    full_name: "Jordan Gross",
    position: offensiveTackle,
    team_name: panthers,
    notes: null,
    tenure: "2003 - 2013",
    year_inducted: 2019
  },
  // Cincinatti Bengals
  {
    full_name: "Paul Brown",
    position: "Founding Owner" + ", " + headCoach + ", " + generalManager,
    team_name: bengals,
    notes: null,
    tenure: "1968 - 1991",
    year_inducted: 2021
  },
  {
    full_name: "Anthony Munoz",
    position: offensiveTackle,
    team_name: bengals,
    notes: null,
    tenure: "1980 - 1992",
    year_inducted: 2021
  },
  {
    full_name: "Ken Anderson",
    position: quarterBack,
    team_name: bengals,
    notes: null,
    tenure: "1971 - 1986",
    year_inducted: 2021
  },
  {
    full_name: "Ken Riley",
    position: cornerBack,
    team_name: bengals,
    notes: null,
    tenure: "1969 - 1983",
    year_inducted: 2021
  },
  {
    full_name: "Willie Anderson",
    position: offensiveTackle,
    team_name: bengals,
    notes: null,
    tenure: "1996 - 2007",
    year_inducted: 2022
  },
  {
    full_name: "Isaac Curtis",
    position: wideReceiver,
    team_name: bengals,
    notes: null,
    tenure: "1973 - 2084",
    year_inducted: 2022
  },
  // Cleveland Browns
  {
    full_name: "Jim Brown",
    position: fullBack,
    team_name: browns,
    notes: null,
    tenure: "1957 - 1965",
    year_inducted: 2010
  },
  {
    full_name: "Paul Brown",
    position: headCoach,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1962",
    year_inducted: 2010
  },
  {
    full_name: "Joe DeLamielleure",
    position: guard,
    team_name: browns,
    notes: null,
    tenure: "1980 - 1984",
    year_inducted: 2010
  },
  {
    full_name: "Len Ford",
    position: defensiveEnd,
    team_name: browns,
    notes: null,
    tenure: "1950 - 1957",
    year_inducted: 2010
  },
  {
    full_name: "Frank Gatski",
    position: center,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1956",
    year_inducted: 2010
  },
  {
    full_name: "Otto Graham",
    position: quarterBack,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1955",
    year_inducted: 2010
  },
  {
    full_name: "Lou Groza",
    position: offensiveTackle + ", " + kicker,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1959, 1961 - 1967",
    year_inducted: 2010
  },
  {
    full_name: "Gene Hickerson",
    position: guard,
    team_name: browns,
    notes: null,
    tenure: "1958 - 1960, 1962 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Leroy Kelly",
    position: runningBack,
    team_name: browns,
    notes: null,
    tenure: "1964 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Dante Lavelli",
    position: wideReceiver,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1956",
    year_inducted: 2010
  },
  {
    full_name: "Mike McCormack",
    position: offensiveTackle,
    team_name: browns,
    notes: null,
    tenure: "1954 - 1962",
    year_inducted: 2010
  },
  {
    full_name: "Bobby Mitchell",
    position: wideReceiver + ", " + runningBack,
    team_name: browns,
    notes: null,
    tenure: "1958 - 1961",
    year_inducted: 2010
  },
  {
    full_name: "Marion Motely",
    position: fullBack,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Ozzie Newsome",
    position: tightEnd,
    team_name: browns,
    notes: null,
    tenure: "1978 - 1990",
    year_inducted: 2010
  },
  {
    full_name: "Paul Warfield",
    position: wideReceiver,
    team_name: browns,
    notes: null,
    tenure: "1964 - 1969, 1976 - 1977",
    year_inducted: 2010
  },
  {
    full_name: "Bill Willis",
    position: offensiveTackle + ", " + guard,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Joe Thomas",
    position: offensiveTackle,
    team_name: browns,
    notes: null,
    tenure: "2007 - 2017",
    year_inducted: 2018
  },
  {
    full_name: "Clay Matthews",
    position: lineBacker,
    team_name: browns,
    notes: null,
    tenure: "1978 - 1993",
    year_inducted: 2019
  },
  {
    full_name: "Mac Speedie",
    position: wideReceiver,
    team_name: browns,
    notes: null,
    tenure: "1946 - 1952",
    year_inducted: 2021
  },
  // Chicago Bears
  {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    position: null,
    team_name: bears,
    notes: null,
    tenure: null,
    year_inducted: null
  },
  // Dallas Cowboys
  {
    full_name: "Bob Lilly",
    position: defensiveTackle,
    team_name: cowboys,
    notes: null,
    tenure: "1961 - 1974",
    year_inducted: 1975
  },
  {
    full_name: "Don Meredith",
    position: quarterBack,
    team_name: cowboys,
    notes: null,
    tenure: "1960 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Don Perkins",
    position: fullBack,
    team_name: cowboys,
    notes: null,
    tenure: "1961 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Chuck Howley",
    position: lineBacker,
    team_name: cowboys,
    notes: null,
    tenure: "1961 - 1973",
    year_inducted: 1977
  },
  {
    full_name: "Mel Renfro",
    position: cornerBack,
    team_name: cowboys,
    notes: null,
    tenure: "1964 - 1977",
    year_inducted: 1981
  },
  {
    full_name: "Roger Staubach",
    position: quarterBack,
    team_name: cowboys,
    notes: null,
    tenure: "1969 - 1979",
    year_inducted: 1983
  },
  {
    full_name: "Lee Roy Jordan",
    position: center + ", " + lineBacker,
    team_name: cowboys,
    notes: null,
    tenure: "1963 - 1976",
    year_inducted: 1989
  },
  {
    full_name: "Tom Landry",
    position: headCoach,
    team_name: cowboys,
    notes: null,
    tenure: "1960 - 1988",
    year_inducted: 1993
  },
  {
    full_name: "Tony Dorsett",
    position: runningBack,
    team_name: cowboys,
    notes: null,
    tenure: "1977 - 1987",
    year_inducted: 1994
  },
  {
    full_name: "Randy White",
    position: "Defensive Line, " + lineBacker,
    team_name: cowboys,
    notes: null,
    tenure: "1975 - 1988",
    year_inducted: 1994
  },
  {
    full_name: "Bob Hayes",
    position: wideReceiver,
    team_name: cowboys,
    notes: null,
    tenure: "1965 - 1974",
    year_inducted: 2001
  },
  {
    full_name: "Tex Schramm",
    position: generalManager,
    team_name: cowboys,
    notes: null,
    tenure: "1960 - 1989",
    year_inducted: 2003
  },
  {
    full_name: "Cliff Harris",
    position: safety,
    team_name: cowboys,
    notes: null,
    tenure: "1970 - 1979",
    year_inducted: 2004
  },
  {
    full_name: "Rayfield Wright",
    position: offensiveTackle,
    team_name: cowboys,
    notes: null,
    tenure: "1967 - 1979",
    year_inducted: 2004
  },
  {
    full_name: "Troy Aikman",
    position: quarterBack,
    team_name: cowboys,
    notes: null,
    tenure: "1989 - 2000",
    year_inducted: 2005
  },
  {
    full_name: "Michael Irvin",
    position: wideReceiver,
    team_name: cowboys,
    notes: null,
    tenure: "1988 - 1999",
    year_inducted: 2005
  },
  {
    full_name: "Emmitt Smith",
    position: runningBack,
    team_name: cowboys,
    notes: null,
    tenure: "1990 - 2002",
    year_inducted: 2005
  },
  {
    full_name: "Drew Pearson",
    position: wideReceiver,
    team_name: cowboys,
    notes: null,
    tenure: "1973 - 1983",
    year_inducted: 2011
  },
  {
    full_name: "Charles Haley",
    position: defensiveEnd,
    team_name: cowboys,
    notes: null,
    tenure: "1992 - 1996",
    year_inducted: 2011
  },
  {
    full_name: "Larry Allen",
    position: guard + ", " + offensiveTackle,
    team_name: cowboys,
    notes: null,
    tenure: "1994 - 2005",
    year_inducted: 2011
  },
  {
    full_name: "Darren Woodson",
    position: safety,
    team_name: cowboys,
    notes: null,
    tenure: "1992 - 2004",
    year_inducted: 2015
  },
  {
    full_name: "Gil Brandt",
    position: "VP Player of Personnel",
    team_name: cowboys,
    notes: null,
    tenure: "1960 - 1988",
    year_inducted: 2018
  },
  // Denver Broncos
  {
    full_name: "Goose Gonsoulin",
    position: safety,
    team_name: broncos,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 1984
  },
  {
    full_name: "Rich Jackson",
    position: defensiveEnd,
    team_name: broncos,
    notes: null,
    tenure: "1967 - 1972",
    year_inducted: 1984
  },
  {
    full_name: "Floyd Little",
    position: runningBack,
    team_name: broncos,
    notes: null,
    tenure: "1967 - 1975",
    year_inducted: 1984
  },
  {
    full_name: "Lionel Taylor",
    position: wideReceiver,
    team_name: broncos,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 1984
  },
  {
    full_name: "Gerald Phipps",
    position: owner,
    team_name: broncos,
    notes: null,
    tenure: "1961 - 1981",
    year_inducted: 1984
  },
  {
    full_name: "Charley Johnson",
    position: quarterBack,
    team_name: broncos,
    notes: null,
    tenure: "1972 - 1975",
    year_inducted: 1986
  },
  {
    full_name: "Paul Smith",
    position: defensiveEnd,
    team_name: broncos,
    notes: null,
    tenure: "1968 - 1978",
    year_inducted: 1986
  },
  {
    full_name: "Frank Tripucka",
    position: quarterBack,
    team_name: broncos,
    notes: null,
    tenure: "1960 - 1963",
    year_inducted: 1986
  },
  {
    full_name: "Billy Thompson",
    position: cornerBack + ", " + safety,
    team_name: broncos,
    notes: null,
    tenure: "1969 - 1981",
    year_inducted: 1987
  },
  {
    full_name: "Craig Morton",
    position: quarterBack,
    team_name: broncos,
    notes: null,
    tenure: "1977 - 1982",
    year_inducted: 1988
  },
  {
    full_name: "Haven Moses",
    position: wideReceiver,
    team_name: broncos,
    notes: null,
    tenure: "1972 - 1981",
    year_inducted: 1988
  },
  {
    full_name: "Jim Turner",
    position: kicker,
    team_name: broncos,
    notes: null,
    tenure: "1971 - 1979",
    year_inducted: 1988
  },
  {
    full_name: "Randy Gradishar",
    position: lineBacker,
    team_name: broncos,
    notes: null,
    tenure: "1974 - 1983",
    year_inducted: 1989
  },
  {
    full_name: "Tom Jackson",
    position: lineBacker,
    team_name: broncos,
    notes: null,
    tenure: "1973 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Louis Wright",
    position: cornerBack,
    team_name: broncos,
    notes: null,
    tenure: "1975 - 1986",
    year_inducted: 1993
  },
  {
    full_name: "John Elway",
    position: quarterBack + ", " + generalManager,
    team_name: broncos,
    notes: null,
    tenure: "1983 - 1998, 2011 - 2020",
    year_inducted: 1999
  },
  {
    full_name: "Karl Mecklenburg",
    position: lineBacker,
    team_name: broncos,
    notes: null,
    tenure: "1983 - 1995",
    year_inducted: 2001
  },
  {
    full_name: "Dennis Smith",
    position: safety,
    team_name: broncos,
    notes: null,
    tenure: "1981 - 1994",
    year_inducted: 2001
  },
  {
    full_name: "Gary Zimmerman",
    position: offensiveTackle,
    team_name: broncos,
    notes: null,
    tenure: "1993 - 1997",
    year_inducted: 2003
  },
  {
    full_name: "Steve Atwater",
    position: safety,
    team_name: broncos,
    notes: null,
    tenure: "1989 - 1998",
    year_inducted: 2005
  },
  {
    full_name: "Terrel Davis",
    position: runningBack,
    team_name: broncos,
    notes: null,
    tenure: "1995 - 2001",
    year_inducted: 2007
  },
  {
    full_name: "Shannon Sharpe",
    position: tightEnd,
    team_name: broncos,
    notes: null,
    tenure: "1990 - 1999, 2002 - 2003",
    year_inducted: 2009
  },
  {
    full_name: "Rod Smith",
    position: wideReceiver,
    team_name: broncos,
    notes: null,
    tenure: "1994 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Tom Nalen",
    position: center,
    team_name: broncos,
    notes: null,
    tenure: "1994 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Gene Mingo",
    position: runningBack + ", " + kicker + ", Return Specialist",
    team_name: broncos,
    notes: null,
    tenure: "1960 - 1964",
    year_inducted: 2014
  },
  {
    full_name: "Dan Reeves",
    position: headCoach,
    team_name: broncos,
    notes: null,
    tenure: "1981 - 1992",
    year_inducted: 2014
  },
  {
    full_name: "Rick Upchurch",
    position: wideReceiver + ", Return Specialist",
    team_name: broncos,
    notes: null,
    tenure: "1975 - 1983",
    year_inducted: 2014
  },
  {
    full_name: "Pat Bowlen",
    position: owner,
    team_name: broncos,
    notes: null,
    tenure: "1984 - 2013",
    year_inducted: 2015
  },
  {
    full_name: "Jason Elam",
    position: kicker,
    team_name: broncos,
    notes: null,
    tenure: "1993 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Simon Fletcher",
    position: lineBacker + ", " + defensiveEnd,
    team_name: broncos,
    notes: null,
    tenure: "1985 - 1995",
    year_inducted: 2016
  },
  {
    full_name: "John Lynch",
    position: safety,
    team_name: broncos,
    notes: null,
    tenure: "2004 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Red Miller",
    position: headCoach,
    team_name: broncos,
    notes: null,
    tenure: "1977 - 1980",
    year_inducted: 2017
  },
  {
    full_name: "Champ Bailey",
    position: cornerBack,
    team_name: broncos,
    notes: null,
    tenure: "2004 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Peyton Manning",
    position: quarterBack,
    team_name: broncos,
    notes: null,
    tenure: "2012 - 2015",
    year_inducted: 2021
  },
  // Detroit Lions
  {
    full_name: "Lem Barney",
    position: cornerBack,
    team_name: lions,
    notes: null,
    tenure: "1967 - 1977",
    year_inducted: 2009
  },
  {
    full_name: "Jack Christiansen",
    position: cornerBack,
    team_name: lions,
    notes: null,
    tenure: "1951 - 1958",
    year_inducted: 2009
  },
  {
    full_name: "Dutch Clark",
    position: quarterBack,
    team_name: lions,
    notes: null,
    tenure: "1931 - 1932, 1934 - 1938",
    year_inducted: 2009
  },
  {
    full_name: "Lou Creekmur",
    position: offensiveTackle + ", " + guard,
    team_name: lions,
    notes: null,
    tenure: "1950 - 1959",
    year_inducted: 2009
  },
  {
    full_name: "Dick 'Night Train' Lane",
    position: cornerBack,
    team_name: lions,
    notes: null,
    tenure: "1960 - 1965",
    year_inducted: 2009
  },
  {
    full_name: "Yale Lary",
    position: cornerBack + ", " + punter,
    team_name: lions,
    notes: null,
    tenure: "1952 - 1953, 1956 - 1964",
    year_inducted: 2009
  },
  {
    full_name: "Bobby Layne",
    position: quarterBack,
    team_name: lions,
    notes: null,
    tenure: "1950 - 1958",
    year_inducted: 2009
  },
  {
    full_name: "Barry Sanders",
    position: runningBack,
    team_name: lions,
    notes: null,
    tenure: "1989 - 1998",
    year_inducted: 2009
  },
  {
    full_name: "Charlie Sanders",
    position: tightEnd,
    team_name: lions,
    notes: null,
    tenure: "1968 - 1977",
    year_inducted: 2009
  },
  {
    full_name: "Joe Schmidt",
    position: lineBacker,
    team_name: lions,
    notes: null,
    tenure: "1953 - 1965",
    year_inducted: 2009
  },
  {
    full_name: "Doak Walker",
    position: runningBack,
    team_name: lions,
    notes: null,
    tenure: "1950 - 1955",
    year_inducted: 2009
  },
  {
    full_name: "Alex Wojciechowicz",
    position: center + ", " + lineBacker,
    team_name: lions,
    notes: null,
    tenure: "1938 - 1946",
    year_inducted: 2009
  },
  {
    full_name: "Dick LeBeau",
    position: cornerBack,
    team_name: lions,
    notes: null,
    tenure: "1959 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Jason Hanson",
    position: kicker,
    team_name: lions,
    notes: null,
    tenure: "1992 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Dick Stanfel",
    position: guard,
    team_name: lions,
    notes: null,
    tenure: "1952 - 1955",
    year_inducted: 2016
  },
  {
    full_name: "Roger Brown",
    position: defensiveTackle,
    team_name: lions,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 2018
  },
  {
    full_name: "Alex Karras",
    position: defensiveTackle,
    team_name: lions,
    notes: null,
    tenure: "1958 - 1962, 1964 - 1970",
    year_inducted: 2018
  },
  {
    full_name: "Herman Moore",
    position: wideReceiver,
    team_name: lions,
    notes: null,
    tenure: "1991 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Chris Spielman",
    position: lineBacker,
    team_name: lions,
    notes: null,
    tenure: "1988 - 1995",
    year_inducted: 2021
  },
  // Green Bay Packers
  {
    full_name: "Herb Adderley",
    position: cornerBack,
    team_name: packers,
    notes: null,
    tenure: "1961 - 1969",
    year_inducted: null
  },
  {
    full_name: "Leroy Butler",
    position: safety,
    team_name: packers,
    notes: null,
    tenure: "1990 - 2001",
    year_inducted: 2022
  },
  {
    full_name: "Tony Canadeo",
    position: runningBack,
    team_name: packers,
    notes: null,
    tenure: "1941 - 1944, 1946 - 1952",
    year_inducted: null
  },
  {
    full_name: "Willie Davis",
    position: defensiveEnd,
    team_name: packers,
    notes: null,
    tenure: "1960 - 1969",
    year_inducted: null
  },
  {
    full_name: "Brett Favre",
    position: quarterBack,
    team_name: packers,
    notes: null,
    tenure: "1992 - 2007",
    year_inducted: 2015
  },
  {
    full_name: "Forrest Gregg",
    position: offensiveTackle,
    team_name: packers,
    notes: null,
    tenure: "1956, 1958 - 1970",
    year_inducted: null
  },
  {
    full_name: "Arnie Herber",
    position: quarterBack,
    team_name: packers,
    notes: null,
    tenure: "1930 - 1940",
    year_inducted: null
  },
  {
    full_name: "Clarke Hinkle",
    position: fullBack,
    team_name: packers,
    notes: null,
    tenure: "1932 - 1941",
    year_inducted: null
  },
  {
    full_name: "Paul Hornung",
    position: runningBack,
    team_name: packers,
    notes: null,
    tenure: "1956 - 1964, 1966",
    year_inducted: null
  },
  {
    full_name: "Cal Hubbard",
    position: offensiveTackle,
    team_name: packers,
    notes: null,
    tenure: "1929 - 1933, 1935",
    year_inducted: null
  },
  {
    full_name: "Don Hutson",
    position: tightEnd + ", " + defensiveEnd,
    team_name: packers,
    notes: null,
    tenure: "1935 - 1945",
    year_inducted: null
  },
  {
    full_name: "Henry Jordan",
    position: defensiveTackle,
    team_name: packers,
    notes: null,
    tenure: "1959 - 1969",
    year_inducted: null
  },
  {
    full_name: "Jerry Kramer",
    position: guard,
    team_name: packers,
    notes: null,
    tenure: "1958 - 1968",
    year_inducted: null
  },
  {
    full_name: "Earl 'Curly' Lambeau",
    position: runningBack + ", " + headCoach,
    team_name: packers,
    notes: "Was the Head Coach starting in 1930",
    tenure: "1919 - 1949",
    year_inducted: null
  },
  {
    full_name: "James Lofton",
    position: wideReceiver,
    team_name: packers,
    notes: null,
    tenure: "1978 - 1986",
    year_inducted: null
  },
  {
    full_name: "Vince Lombardi",
    position: headCoach,
    team_name: packers,
    notes: null,
    tenure: "1959 - 1967",
    year_inducted: null
  },
  {
    full_name: "Johnny 'Blood' McNally",
    position: runningBack,
    team_name: packers,
    notes: null,
    tenure: "1929 - 1933, 1935 - 1936",
    year_inducted: null
  },
  {
    full_name: "Mike Michalske",
    position: guard,
    team_name: packers,
    notes: null,
    tenure: "1929 - 1935, 1937",
    year_inducted: null
  },
  {
    full_name: "Ray Nitschke",
    position: lineBacker,
    team_name: packers,
    notes: null,
    tenure: "1958 - 1972",
    year_inducted: null
  },
  {
    full_name: "Jim Ringo",
    position: center,
    team_name: packers,
    notes: null,
    tenure: "1953 - 1963",
    year_inducted: null
  },
  {
    full_name: "Dave Robinson",
    position: lineBacker,
    team_name: packers,
    notes: null,
    tenure: "1963 - 1972",
    year_inducted: null
  },
  {
    full_name: "Bart Starr",
    position: quarterBack + ", " + headCoach,
    team_name: packers,
    notes: "Began his Head Coach tenure in 1975",
    tenure: "1956 - 1971, 1975 - 1983",
    year_inducted: null
  },
  {
    full_name: "Jim Taylor",
    position: fullBack,
    team_name: packers,
    notes: null,
    tenure: "1958 - 1966",
    year_inducted: null
  },
  {
    full_name: "Reggie White",
    position: defensiveEnd,
    team_name: packers,
    notes: null,
    tenure: "1993 - 1998",
    year_inducted: null
  },
  {
    full_name: "Ron Wolf",
    position: generalManager,
    team_name: packers,
    notes: null,
    tenure: "1991 - 2001",
    year_inducted: 2006
  },
  {
    full_name: "Willie Wood",
    position: safety,
    team_name: packers,
    notes: null,
    tenure: "1960 - 1971",
    year_inducted: null
  },
  {
    full_name: "Charles Woodson",
    position: cornerBack,
    team_name: packers,
    notes: null,
    tenure: "2006 - 2012",
    year_inducted: 2021
  },
  // Houston Texans
  {
    full_name: "Andre Johnson",
    position: wideReceiver,
    team_name: texans,
    notes: null,
    tenure: "2003 - 2014",
    year_inducted: 2017
  },
  {
    full_name: "Bob McNair",
    position: "Founding Owner",
    team_name: texans,
    notes: null,
    tenure: "2002 - 2018",
    year_inducted: 2019
  },
  // Indianapolis Colts
  {
    full_name: "Robert Irsay",
    position: owner,
    team_name: colts,
    notes: null,
    tenure: "1972 - 1997",
    year_inducted: 1996
  },
  {
    full_name: "Bill Brooks",
    position: wideReceiver,
    team_name: colts,
    notes: null,
    tenure: "1986 - 1992",
    year_inducted: 1998
  },
  {
    full_name: "Ted Marchibroda",
    position: headCoach,
    team_name: colts,
    notes: null,
    tenure: "1975 - 1979, 1992 - 1995",
    year_inducted: 2000
  },
  {
    full_name: "Chris Hinton",
    position: offensiveTackle + ", " + guard,
    team_name: colts,
    notes: null,
    tenure: "1983 - 1989",
    year_inducted: 2001
  },
  {
    full_name: "Jim Harbaugh",
    position: quarterBack,
    team_name: colts,
    notes: null,
    tenure: "1994 - 1997",
    year_inducted: 2005
  },
  {
    full_name: "Tony Dungy",
    position: headCoach,
    team_name: colts,
    notes: null,
    tenure: "2002 - 2008",
    year_inducted: 2010
  },
  {
    full_name: "Marvin Harrison",
    position: wideReceiver,
    team_name: colts,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Edgerrin James",
    position: runningBack,
    team_name: colts,
    notes: null,
    tenure: "1999 - 2005",
    year_inducted: 2012
  },
  {
    full_name: "Eric Dickerson",
    position: runningBack,
    team_name: colts,
    notes: null,
    tenure: "1987 - 1991",
    year_inducted: 2013
  },
  {
    full_name: "Marshall Faulk",
    position: runningBack,
    team_name: colts,
    notes: null,
    tenure: "1994 - 1998",
    year_inducted: 2013
  },
  {
    full_name: "Jeff Saturday",
    position: center,
    team_name: colts,
    notes: null,
    tenure: "1999 - 2011",
    year_inducted: 2015
  },
  {
    full_name: "Bill Polian",
    position: "President" + ", " + generalManager,
    team_name: colts,
    notes: null,
    tenure: "1998 - 2011",
    year_inducted: 2017
  },
  {
    full_name: "Peyton Manning",
    position: quarterBack,
    team_name: colts,
    notes: null,
    tenure: "1998 - 2011",
    year_inducted: 2017
  },
  {
    full_name: "Reggie Wayne",
    position: wideReceiver,
    team_name: colts,
    notes: null,
    tenure: "2001 - 2014",
    year_inducted: 2018
  },
  {
    full_name: "Dwight Freeney",
    position: defensiveEnd,
    team_name: colts,
    notes: null,
    tenure: "2002 - 2012",
    year_inducted: 2019
  },
  {
    full_name: "Robert Mathis",
    position: defensiveEnd,
    team_name: colts,
    notes: null,
    tenure: "2003 - 2016",
    year_inducted: 2021
  },
  {
    full_name: "Tarik Glenn",
    position: offensiveTackle,
    team_name: colts,
    notes: null,
    tenure: "1997-2006",
    year_inducted: 2022
  },
  // Jacksonville Jaguars
  {
    full_name: "Tony Boselli",
    position: offensiveTackle,
    team_name: jaguars,
    notes: null,
    tenure: "1995 - 2001",
    year_inducted: 2006
  },
  {
    full_name: "Wayne and Delores Weaver",
    position: "Founding Owners",
    team_name: jaguars,
    notes: null,
    tenure: "1993 - 2011",
    year_inducted: 2011
  },
  {
    full_name: "Fred Taylor",
    position: runningBack,
    team_name: jaguars,
    notes: null,
    tenure: "1998 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "Mark Brunell",
    position: quarterBack,
    team_name: jaguars,
    notes: null,
    tenure: "1995 - 2003",
    year_inducted: 2013
  },
  {
    full_name: "Jimmy Smith",
    position: wideReceiver,
    team_name: jaguars,
    notes: null,
    tenure: "1995 - 2005",
    year_inducted: 2016
  },
  // Kansas City Chiefs
  {
    full_name: "Lamar Hunt",
    position: "Founding Owner",
    team_name: chiefs,
    notes: "One of the key founders of the AFL.",
    tenure: "1960 - 2006",
    year_inducted: 1970
  },
  {
    full_name: "Mack Lee Hill",
    position: runningBack,
    team_name: chiefs,
    notes: "Passed away suddenly after a knee surgery after a game against the Buffalo Bills",
    tenure: "1961 - 1974",
    year_inducted: 1971
  },
  {
    full_name: "Jerry Mays",
    position: defensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1961 - 1970",
    year_inducted: 1972
  },
  {
    full_name: "Fred Arbanas",
    position: tightEnd,
    team_name: chiefs,
    notes: null,
    tenure: "1962 - 1970",
    year_inducted: 1973
  },
  {
    full_name: "Johnny Robinson",
    position: safety,
    team_name: chiefs,
    notes: null,
    tenure: "1960 - 1971",
    year_inducted: 1974
  },
  {
    full_name: "Chris Burford",
    position: wideReceiver,
    team_name: chiefs,
    notes: null,
    tenure: "1960 - 1967",
    year_inducted: 1975
  },
  {
    full_name: "E.J. Holub",
    position: center + ", " + lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1961 - 1970",
    year_inducted: 1976
  },
  {
    full_name: "Jim Tyrer",
    position: offensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1961 - 1973",
    year_inducted: 1977
  },
  {
    full_name: "Mike Garrett",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "1966 - 1970",
    year_inducted: 1978
  },
  {
    full_name: "Len Dawson",
    position: quarterBack,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1975",
    year_inducted: 1979
  },
  {
    full_name: "Bobby Bell",
    position: lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1974",
    year_inducted: 1980
  },
  {
    full_name: "Buck Buchanan",
    position: defensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1975",
    year_inducted: 1981
  },
  {
    full_name: "Otis Taylor",
    position: wideReceiver,
    team_name: chiefs,
    notes: null,
    tenure: "1965 - 1975",
    year_inducted: 1982
  },
  {
    full_name: "Ed Budde",
    position: guard,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1976",
    year_inducted: 1984
  },
  {
    full_name: "Willie Lanier",
    position: lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1967 - 1977",
    year_inducted: 1985
  },
  {
    full_name: "Emmitt Thomas",
    position: cornerBack,
    team_name: chiefs,
    notes: null,
    tenure: "1966 - 1978",
    year_inducted: 1986
  },
  {
    full_name: "Hank Stram",
    position: headCoach,
    team_name: chiefs,
    notes: null,
    tenure: "1960 - 1974",
    year_inducted: 1987
  },
  {
    full_name: "Jerrel Wilson",
    position: punter,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1977",
    year_inducted: 1988
  },
  {
    full_name: "Ed Podolak",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "1969 - 1977",
    year_inducted: 1989
  },
  {
    full_name: "Jim Lynch",
    position: lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1967 - 1977",
    year_inducted: 1990
  },
  {
    full_name: "Abner Haynes",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "1960 - 1964",
    year_inducted: 1991
  },
  {
    full_name: "Jan Stenerud",
    position: kicker,
    team_name: chiefs,
    notes: null,
    tenure: "1967 - 1979",
    year_inducted: 1992
  },
  {
    full_name: "Sherrill Headrick",
    position: lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1960 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Jack Rudnay",
    position: center,
    team_name: chiefs,
    notes: null,
    tenure: "1969 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Curtis McClinton",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "1962 - 1969",
    year_inducted: 1995
  },
  {
    full_name: "Deron Cherry",
    position: safety,
    team_name: chiefs,
    notes: null,
    tenure: "1981 - 1991",
    year_inducted: 1996
  },
  {
    full_name: "Dave Hill",
    position: offensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1963 - 1974",
    year_inducted: 1997
  },
  {
    full_name: "Art Still",
    position: defensiveEnd,
    team_name: chiefs,
    notes: null,
    tenure: "1978 - 1987",
    year_inducted: 1998
  },
  {
    full_name: "Lloyd Burruss",
    position: safety,
    team_name: chiefs,
    notes: null,
    tenure: "1981 - 1991",
    year_inducted: 1999
  },
  {
    full_name: "Christian Okoye",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "1987 - 1991",
    year_inducted: 2000
  },
  {
    full_name: "Derrick Thomas",
    position: lineBacker,
    team_name: chiefs,
    notes: "After the 1999 Season, Thomas was in a car accident that left him paralyzed. He passed away a few days after",
    tenure: "1989 - 1999",
    year_inducted: 2001
  },
  {
    full_name: "John Alt",
    position: offensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1984 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Gary Spani",
    position: lineBacker,
    team_name: chiefs,
    notes: null,
    tenure: "1978 - 1986",
    year_inducted: 2003
  },
  {
    full_name: "Joe Delaney",
    position: runningBack,
    team_name: chiefs,
    notes: "Passed away in 1983, after his second year with the Chiefs",
    tenure: "1981 - 1982",
    year_inducted: 2004
  },
  {
    full_name: "Jack Steadman",
    position: "President" + ", " + generalManager,
    team_name: chiefs,
    notes: null,
    tenure: "1988 - 2006",
    year_inducted: 2005
  },
  {
    full_name: "Neil Smith",
    position: defensiveEnd,
    team_name: chiefs,
    notes: null,
    tenure: "1988 - 1996",
    year_inducted: 2006
  },
  {
    full_name: "Albert Lewis",
    position: cornerBack,
    team_name: chiefs,
    notes: null,
    tenure: "1983 - 1993",
    year_inducted: 2007
  },
  {
    full_name: "Curley Culp",
    position: defensiveTackle,
    team_name: chiefs,
    notes: null,
    tenure: "1968 - 1974",
    year_inducted: 2008
  },
  {
    full_name: "Nick Lowery",
    position: kicker,
    team_name: chiefs,
    notes: null,
    tenure: "1980 - 1993",
    year_inducted: 2009
  },
  {
    full_name: "Marty Schottenheimer",
    position: headCoach,
    team_name: chiefs,
    notes: null,
    tenure: "1989 - 1998",
    year_inducted: 2010
  },
  {
    full_name: "Kevin Ross",
    position: cornerBack,
    team_name: chiefs,
    notes: null,
    tenure: "1984 - 1993, 1997",
    year_inducted: 2011
  },
  {
    full_name: "Will Shields",
    position: guard,
    team_name: chiefs,
    notes: null,
    tenure: "1993 - 2006",
    year_inducted: 2012
  },
  {
    full_name: "Gary Barbaro",
    position: safety,
    team_name: chiefs,
    notes: null,
    tenure: "1976 - 1982",
    year_inducted: 2013
  },
  {
    full_name: "Priest Holmes",
    position: runningBack,
    team_name: chiefs,
    notes: null,
    tenure: "2001 - 2007",
    year_inducted: 2014
  },
  {
    full_name: "Gary Green",
    position: cornerBack,
    team_name: chiefs,
    notes: null,
    tenure: "1977 - 1983",
    year_inducted: 2015
  },
  {
    full_name: "Tony Richardson",
    position: fullBack,
    team_name: chiefs,
    notes: null,
    tenure: "1995 - 2005",
    year_inducted: 2016
  },
  {
    full_name: "Carlos Carson",
    position: wideReceiver,
    team_name: chiefs,
    notes: null,
    tenure: "1980 - 1989",
    year_inducted: 2017
  },
  {
    full_name: "Tony Gonzalez",
    position: tightEnd,
    team_name: chiefs,
    notes: null,
    tenure: "1997 - 2008",
    year_inducted: 2018
  },
  {
    full_name: "Brian Waters",
    position: guard,
    team_name: chiefs,
    notes: null,
    tenure: "2000 - 2010",
    year_inducted: 2019
  },
  {
    full_name: "Tim Grunhard",
    position: center,
    team_name: chiefs,
    notes: null,
    tenure: "1990-2000",
    year_inducted: 2021
  },
  {
    full_name: "Kimble Anders",
    position: fullBack,
    team_name: chiefs,
    notes: null,
    tenure: "1991-2000",
    year_inducted: 2022
  },
  // Las Vegas Raiders
  {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    position: null,
    team_name: raiders,
    notes: null,
    tenure: null,
    year_inducted: null
  },
  // Los Angeles Chargers
  {
    full_name: "Emil Karas",
    position: lineBacker,
    team_name: chargers,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 1976
  },
  {
    full_name: "Frank Buncom",
    position: lineBacker,
    team_name: chargers,
    notes: null,
    tenure: "1962 - 1968",
    year_inducted: 1976
  },
  {
    full_name: "Bob Laraba",
    position: lineBacker,
    team_name: chargers,
    notes: "Passed away in 1961 after his second season",
    tenure: "1960 - 1961",
    year_inducted: 1976
  },
  {
    full_name: "Jacque MacKinnon",
    position: tightEnd,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1969",
    year_inducted: 1976
  },
  {
    full_name: "Lance Alworth",
    position: wideReceiver,
    team_name: chargers,
    notes: null,
    tenure: "1962 - 1970",
    year_inducted: 1977
  },
  {
    full_name: "Ron Mix",
    position: offensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1960 - 1969",
    year_inducted: 1978
  },
  {
    full_name: "Paul Lowe",
    position: runningBack,
    team_name: chargers,
    notes: null,
    tenure: "1960 - 1968",
    year_inducted: 1979
  },
  {
    full_name: "Barron Hilton",
    position: "Majority Founding Owner",
    team_name: chargers,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 1980
  },
  {
    full_name: "Keith Lincoln",
    position: runningBack,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1968",
    year_inducted: 1980
  },
  {
    full_name: "Ernie Ladd",
    position: defensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1965",
    year_inducted: 1981
  },
  {
    full_name: "Walt Sweeney",
    position: guard,
    team_name: chargers,
    notes: null,
    tenure: "1963 - 1973",
    year_inducted: 1981
  },
  {
    full_name: "John Hadl",
    position: quarterBack,
    team_name: chargers,
    notes: null,
    tenure: "1962 - 1972",
    year_inducted: 1983
  },
  {
    full_name: "Chuck Allen",
    position: lineBacker,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1969",
    year_inducted: 1984
  },
  {
    full_name: "Gary Giarrison",
    position: wideReceiver,
    team_name: chargers,
    notes: null,
    tenure: "1966 - 1976",
    year_inducted: 1985
  },
  {
    full_name: "Sid Gillman",
    position: headCoach,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1969, 1971",
    year_inducted: 1985
  },
  {
    full_name: "Earl Faison",
    position: defensiveEnd,
    team_name: chargers,
    notes: null,
    tenure: "1961 - 1966",
    year_inducted: 1986
  },
  {
    full_name: "Dan Fouts",
    position: quarterBack,
    team_name: chargers,
    notes: null,
    tenure: "1973 - 1987",
    year_inducted: 1993
  },
  {
    full_name: "Charlie Joiner",
    position: wideReceiver,
    team_name: chargers,
    notes: null,
    tenure: "1976 - 1986",
    year_inducted: 1993
  },
  {
    full_name: "Don Coryell",
    position: headCoach,
    team_name: chargers,
    notes: null,
    tenure: "1978 - 1986",
    year_inducted: 1994
  },
  {
    full_name: "Speedy Duncan",
    position: cornerBack,
    team_name: chargers,
    notes: null,
    tenure: "1968 - 1982",
    year_inducted: 1995
  },
  {
    full_name: "Russ Washington",
    position: offensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1968 - 1982",
    year_inducted: 1995
  },
  {
    full_name: "Kellen Winslow",
    position: tightEnd,
    team_name: chargers,
    notes: null,
    tenure: "1979 - 1987",
    year_inducted: 1995
  },
  {
    full_name: "George Pernicano",
    position: "Minority Owner",
    team_name: chargers,
    notes: null,
    tenure: "1961 - Present",
    year_inducted: 1996
  },
  {
    full_name: "Rolf Benirschke",
    position: kicker,
    team_name: chargers,
    notes: null,
    tenure: "1978 - 1987",
    year_inducted: 1997
  },
  {
    full_name: "Gill Byrd",
    position: cornerBack,
    team_name: chargers,
    notes: null,
    tenure: "1983 - 1992",
    year_inducted: 1998
  },
  {
    full_name: "Gary 'Big Hands' Johnson",
    position: defensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1975 - 1984",
    year_inducted: 1999
  },
  {
    full_name: "Doug Wilkerson",
    position: guard,
    team_name: chargers,
    notes: null,
    tenure: "1971 - 1984",
    year_inducted: 2000
  },
  {
    full_name: "Wes Chandler",
    position: wideReceiver,
    team_name: chargers,
    notes: null,
    tenure: "1981 - 1987",
    year_inducted: 2001
  },
  {
    full_name: "Stan Humphries",
    position: quarterBack,
    team_name: chargers,
    notes: null,
    tenure: "1992 - 1997",
    year_inducted: 2002
  },
  {
    full_name: "Bobby Ross",
    position: headCoach,
    team_name: chargers,
    notes: null,
    tenure: "1992 - 1996",
    year_inducted: 2002
  },
  {
    full_name: "Louie Kelcher",
    position: defensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1975 - 1983",
    year_inducted: 2003
  },
  {
    full_name: "Don Macek",
    position: center,
    team_name: chargers,
    notes: null,
    tenure: "1976 - 1989",
    year_inducted: 2004
  },
  {
    full_name: "Ed White",
    position: guard,
    team_name: chargers,
    notes: null,
    tenure: "1978 - 1985",
    year_inducted: 2004
  },
  {
    full_name: "Fred Dean",
    position: defensiveEnd,
    team_name: chargers,
    notes: null,
    tenure: "1975 - 1981",
    year_inducted: 2008
  },
  {
    full_name: "Junior Seau",
    position: lineBacker,
    team_name: chargers,
    notes: null,
    tenure: "1990 - 2002",
    year_inducted: 2011
  },
  {
    full_name: "Darren Bennett",
    position: punter,
    team_name: chargers,
    notes: null,
    tenure: "1995 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "The 1963 AFL Championship Team",
    position: null,
    team_name: chargers,
    notes: null,
    tenure: "1963",
    year_inducted: 2013
  },
  {
    full_name: "Leslie O'Neal",
    position: defensiveEnd,
    team_name: chargers,
    notes: null,
    tenure: "1986 - 1995",
    year_inducted: 2014
  },
  {
    full_name: "LaDainian Tomlinson",
    position: runningBack,
    team_name: chargers,
    notes: null,
    tenure: "2001 - 2009",
    year_inducted: 2015
  },
  {
    full_name: "Bobby Beathard",
    position: generalManager,
    team_name: chargers,
    notes: null,
    tenure: "1990 - 2000",
    year_inducted: 2018
  },
  {
    full_name: "Jamal Williams",
    position: defensiveTackle,
    team_name: chargers,
    notes: null,
    tenure: "1998 - 2009",
    year_inducted: 2022
  },
  // Los Angeles Rams
  {
    full_name: "No Team Ring of Honor or Team Hall of Fame",
    position: null,
    team_name: rams,
    notes: null,
    tenure: null,
    year_inducted: null
  },
  // Miami Dolphins
  {
    full_name: "Joe Robbie",
    position: "Founding Owner",
    team_name: dolphins,
    notes: null,
    tenure: "1966 - 1989",
    year_inducted: 1990
  },
  {
    full_name: "Larry Csonka",
    position: fullBack,
    team_name: dolphins,
    notes: null,
    tenure: "1968 - 1974, 1979",
    year_inducted: 1990
  },
  {
    full_name: "Bob Griese",
    position: quarterBack,
    team_name: dolphins,
    notes: null,
    tenure: "1967 - 1980",
    year_inducted: 1990
  },
  {
    full_name: "Jim Langer",
    position: center,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1979",
    year_inducted: 1990
  },
  {
    full_name: "Paul Warfield",
    position: wideReceiver,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1974",
    year_inducted: 1990
  },
  {
    full_name: "Nick Buoniconti",
    position: lineBacker,
    team_name: dolphins,
    notes: null,
    tenure: "1969 - 1974, 1976",
    year_inducted: 1991
  },
  {
    full_name: "Larry Little",
    position: guard,
    team_name: dolphins,
    notes: null,
    tenure: "1969 - 1980",
    year_inducted: 1993
  },
  {
    full_name: "Dwight Stephenson",
    position: center,
    team_name: dolphins,
    notes: null,
    tenure: "1980 - 1987",
    year_inducted: 1994
  },
  {
    full_name: "Bob Kuechenberg",
    position: guard,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1984",
    year_inducted: 1995
  },
  {
    full_name: "Don Shula",
    position: headCoach,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1995",
    year_inducted: 1996
  },
  {
    full_name: "Nat Moore",
    position: wideReceiver,
    team_name: dolphins,
    notes: null,
    tenure: "1974 - 1986",
    year_inducted: 1999
  },
  {
    full_name: "Dan Marino",
    position: quarterBack,
    team_name: dolphins,
    notes: null,
    tenure: "1983 - 1999",
    year_inducted: 2000
  },
  {
    full_name: "Mark Clayton",
    position: wideReceiver,
    team_name: dolphins,
    notes: null,
    tenure: "1983 - 1992",
    year_inducted: 2003
  },
  {
    full_name: "Mark Duper",
    position: wideReceiver,
    team_name: dolphins,
    notes: null,
    tenure: "1982 - 1992",
    year_inducted: 2003
  },
  {
    full_name: "Dick Anderson",
    position: safety,
    team_name: dolphins,
    notes: null,
    tenure: "1968 - 1977",
    year_inducted: 2006
  },
  {
    full_name: "Richmond Webb",
    position: offensiveTackle,
    team_name: dolphins,
    notes: null,
    tenure: "1990 - 2000",
    year_inducted: 2006
  },
  {
    full_name: "Bob Baumhower",
    position: defensiveTackle,
    team_name: dolphins,
    notes: null,
    tenure: "1977 - 1986",
    year_inducted: 2008
  },
  {
    full_name: "Doug Betters",
    position: defensiveEnd,
    team_name: dolphins,
    notes: null,
    tenure: "1978 - 1987",
    year_inducted: 2008
  },
  {
    full_name: "Jake Scott",
    position: safety,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1975",
    year_inducted: 2010
  },
  {
    full_name: "Bill Stanfill",
    position: defensiveEnd,
    team_name: dolphins,
    notes: null,
    tenure: "1969 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Jim Mandich",
    position: tightEnd + ", Radio Broadcaster",
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1977, 1992 - 2004, 2010",
    year_inducted: 2011
  },
  {
    full_name: "Jason Taylor",
    position: lineBacker,
    team_name: dolphins,
    notes: null,
    tenure: "1997 - 2007, 2009, 2011",
    year_inducted: 2012
  },
  {
    full_name: "Zach Thomas",
    position: lineBacker,
    team_name: dolphins,
    notes: null,
    tenure: "1996 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Bill Arnsparger",
    position: defensiveCoordinator,
    team_name: dolphins,
    notes: null,
    tenure: "1970 - 1973, 1976 - 1983",
    year_inducted: 2012
  },
  {
    full_name: "Super Bowl VII & VIII Team, 1972 Perfect Season Team 17-0",
    position: null,
    team_name: dolphins,
    notes: "The 1972 Team was inducted into the Honor Roll in 1992, but was updated in 2012 to include the Super Bowl VIII Team",
    tenure: "1972 - 1973",
    year_inducted: 2012
  },
  {
    full_name: "John Offerdahl",
    position: lineBacker,
    team_name: dolphins,
    notes: null,
    tenure: "1986 - 1993",
    year_inducted: 2013
  },
  {
    full_name: "Manny Fernandez",
    position: defensiveTackle,
    team_name: dolphins,
    notes: null,
    tenure: "1968 - 1975",
    year_inducted: 2014
  },
  // Minnnesota Vikings
  {
    full_name: "Fran Tarkenton",
    position: quarterBack,
    team_name: vikings,
    notes: null,
    tenure: "1961 - 1966, 1972 - 1978",
    year_inducted: 1998
  },
  {
    full_name: "Alan Page",
    position: defensiveTackle,
    team_name: vikings,
    notes: null,
    tenure: "1967 - 1978",
    year_inducted: 1998
  },
  {
    full_name: "Jim Finks",
    position: generalManager,
    team_name: vikings,
    notes: null,
    tenure: "1964 - 1973",
    year_inducted: 1998
  },
  {
    full_name: "Bud Grant",
    position: headCoach,
    team_name: vikings,
    notes: null,
    tenure: "1967 - 1983, 1985",
    year_inducted: 1998
  },
  {
    full_name: "Paul Krause",
    position: safety,
    team_name: vikings,
    notes: null,
    tenure: "1968 - 1979",
    year_inducted: 1998
  },
  {
    full_name: "Fred Zamberletti",
    position: "Medical Advisor",
    team_name: vikings,
    notes: null,
    tenure: "1961 - 2011",
    year_inducted: 1998
  },
  {
    full_name: "Jim Marshall",
    position: defensiveEnd,
    team_name: vikings,
    notes: null,
    tenure: "1961 - 1979",
    year_inducted: 1999
  },
  {
    full_name: "Ron Yary",
    position: offensiveTackle,
    team_name: vikings,
    notes: null,
    tenure: "1968 - 1981",
    year_inducted: 2001
  },
  {
    full_name: "Korey Stringer",
    position: offensiveTackle,
    team_name: vikings,
    notes: "Passed away in 2001 due to a heat stroke",
    tenure: "1995 - 2000",
    year_inducted: 2001
  },
  {
    full_name: "Mick Tingelhoff",
    position: center,
    team_name: vikings,
    notes: null,
    tenure: "1962 - 1978",
    year_inducted: 2001
  },
  {
    full_name: "Carl Eller",
    position: defensiveEnd,
    team_name: vikings,
    notes: null,
    tenure: "1964 - 1978",
    year_inducted: 2002
  },
  {
    full_name: "Cris Carter",
    position: wideReceiver,
    team_name: vikings,
    notes: null,
    tenure: "1990 - 2001",
    year_inducted: 2003
  },
  {
    full_name: "Bill Brown",
    position: runningBack,
    team_name: vikings,
    notes: null,
    tenure: "1962 - 1974",
    year_inducted: 2004
  },
  {
    full_name: "Jerry Burns",
    position: headCoach,
    team_name: vikings,
    notes: null,
    tenure: "1986 - 1991",
    year_inducted: 2005
  },
  {
    full_name: "Randall McDaniel",
    position: guard,
    team_name: vikings,
    notes: null,
    tenure: "1988 - 1999",
    year_inducted: 2006
  },
  {
    full_name: "Chuck Foreman",
    position: runningBack,
    team_name: vikings,
    notes: null,
    tenure: "1973 - 1979",
    year_inducted: 2007
  },
  {
    full_name: "John Randle",
    position: defensiveTackle,
    team_name: vikings,
    notes: null,
    tenure: "1990 - 2000",
    year_inducted: 2008
  },
  {
    full_name: "Scott Studwell",
    position: lineBacker,
    team_name: vikings,
    notes: null,
    tenure: "1977 - 1990",
    year_inducted: 2009
  },
  {
    full_name: "Chris Doleman",
    position: defensiveEnd,
    team_name: vikings,
    notes: null,
    tenure: "1985 - 1993, 1999",
    year_inducted: 2011
  },
  {
    full_name: "Matt Blair",
    position: lineBacker,
    team_name: vikings,
    notes: null,
    tenure: "1974 - 1985",
    year_inducted: 2012
  },
  {
    full_name: "Joey Browner",
    position: safety,
    team_name: vikings,
    notes: null,
    tenure: "1983- 1991",
    year_inducted: 2013
  },
  {
    full_name: "Randy Moss",
    position: wideReceiver,
    team_name: vikings,
    notes: null,
    tenure: "1998 - 2004, 2010",
    year_inducted: 2017
  },
  {
    full_name: "Ahmad Rashad",
    position: wideReceiver,
    team_name: vikings,
    notes: null,
    tenure: "1976 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Dennis Green",
    position: headCoach,
    team_name: vikings,
    notes: null,
    tenure: "1992 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Steve Jordan",
    position: tightEnd,
    team_name: vikings,
    notes: null,
    tenure: "1982 - 1994",
    year_inducted: 2019
  },
  {
    full_name: "Kevin Williams",
    position: defensiveTackle,
    team_name: vikings,
    notes: null,
    tenure: "2003 - 2013",
    year_inducted: 2021
  },
  // New England Patriots
  {
    full_name: "John Hannah",
    position: guard,
    team_name: patriots,
    notes: null,
    tenure: "1973 - 1985",
    year_inducted: 1991
  },
  {
    full_name: "Nick Buoniconti",
    position: lineBacker,
    team_name: patriots,
    notes: null,
    tenure: "1962 - 1968",
    year_inducted: 1992
  },
  {
    full_name: "Gino Cappelletti",
    position: wideReceiver + ", " + kicker,
    team_name: patriots,
    notes: null,
    tenure: "1960 - 1970",
    year_inducted: 1992
  },
  {
    full_name: "Bob Dee",
    position: "Defensive Line",
    team_name: patriots,
    notes: null,
    tenure: "1960 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Jim Lee Hunt",
    position: defensiveTackle,
    team_name: patriots,
    notes: null,
    tenure: "1960 - 1971",
    year_inducted: 1993
  },
  {
    full_name: "Steve Nelson",
    position: lineBacker,
    team_name: patriots,
    notes: null,
    tenure: "1974 - 1987",
    year_inducted: 1993
  },
  {
    full_name: "Vito 'Babe' Parilli",
    position: quarterBack,
    team_name: patriots,
    notes: null,
    tenure: "1961 - 1967",
    year_inducted: 1993
  },
  {
    full_name: "Mike Haynes",
    position: cornerBack,
    team_name: patriots,
    notes: null,
    tenure: "1976 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Steve Grogan",
    position: quarterBack,
    team_name: patriots,
    notes: null,
    tenure: "1975 - 1990",
    year_inducted: 1995
  },
  {
    full_name: "Andre Tippett",
    position: lineBacker,
    team_name: patriots,
    notes: null,
    tenure: "1982 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Bruce Armstrong",
    position: offensiveTackle,
    team_name: patriots,
    notes: null,
    tenure: "1987 - 2000",
    year_inducted: 2001
  },
  {
    full_name: "Stanley Morgan",
    position: wideReceiver,
    team_name: patriots,
    notes: null,
    tenure: "1977 - 1989",
    year_inducted: 2007
  },
  {
    full_name: "Ben Coates",
    position: tightEnd,
    team_name: patriots,
    notes: null,
    tenure: "1991 - 1999",
    year_inducted: 2008
  },
  {
    full_name: "Jim Nance",
    position: fullBack,
    team_name: patriots,
    notes: null,
    tenure: "1965 - 1971",
    year_inducted: 2009
  },
  {
    full_name: "Billy Sullivan",
    position: "Founding Owner",
    team_name: patriots,
    notes: null,
    tenure: "1960 - 1988",
    year_inducted: 2009
  },
  {
    full_name: "Sam Cunningham",
    position: runningBack,
    team_name: patriots,
    notes: null,
    tenure: "1973 - 1982",
    year_inducted: 2010
  },
  {
    full_name: "Drew Bledsoe",
    position: quarterBack,
    team_name: patriots,
    notes: null,
    tenure: "1993 - 2001",
    year_inducted: 2011
  },
  {
    full_name: "Jon Morris",
    position: center,
    team_name: patriots,
    notes: null,
    tenure: "1964 - 1974",
    year_inducted: 2011
  },
  {
    full_name: "Troy Brown",
    position: wideReceiver + ", " + cornerBack + ", Punt Returner",
    team_name: patriots,
    notes: null,
    tenure: "1993 - 2007",
    year_inducted: 2012
  },
  {
    full_name: "Tedy Brushci",
    position: lineBacker,
    team_name: patriots,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2013
  },
  {
    full_name: "Gil Santos",
    position: "Broadcaster",
    team_name: patriots,
    notes: null,
    tenure: "1972 - 1979, 1991 - 2012",
    year_inducted: 2013
  },
  {
    full_name: "Ty Law",
    position: cornerBack,
    team_name: patriots,
    notes: null,
    tenure: "1995 - 2004",
    year_inducted: 2014
  },
  {
    full_name: "Willie McGinest",
    position: defensiveEnd + ", " + lineBacker,
    team_name: patriots,
    notes: null,
    tenure: "1994 - 2005",
    year_inducted: 2015
  },
  {
    full_name: "Houston Antwine",
    position: "Defensive Line",
    team_name: patriots,
    notes: null,
    tenure: "1961 - 1971",
    year_inducted: 2015
  },
  {
    full_name: "Kevin Faulk",
    position: runningBack,
    team_name: patriots,
    notes: null,
    tenure: "1999 - 2011",
    year_inducted: 2016
  },
  {
    full_name: "Raymond Clayborn",
    position: cornerBack,
    team_name: patriots,
    notes: null,
    tenure: "1977 - 1989",
    year_inducted: 2017
  },
  {
    full_name: "Matt Light",
    position: offensiveTackle,
    team_name: patriots,
    notes: null,
    tenure: "2001 - 2011",
    year_inducted: 2018
  },
  {
    full_name: "Rodney Harrison",
    position: safety,
    team_name: patriots,
    notes: null,
    tenure: "2003 - 2008",
    year_inducted: 2019
  },
  {
    full_name: "Leon Gray",
    position: offensiveTackle,
    team_name: patriots,
    notes: null,
    tenure: "1973 - 1978",
    year_inducted: 2019
  },
  {
    full_name: "Richard Seymour",
    position: "Defensive Line",
    team_name: patriots,
    notes: null,
    tenure: "2001 - 2008",
    year_inducted: 2020
  },
  {
    full_name: "Tracy Sormanti",
    position: "Cheerleading Director",
    team_name: patriots,
    notes: "Posthumously inducted",
    tenure: "1983 - 2020",
    year_inducted: 2021
  },
  {
    full_name: "Vince Wilfork",
    position: defensiveTackle,
    team_name: patriots,
    notes: null,
    tenure: "2004 - 2014",
    year_inducted: 2022
  },
  // New Orleans Saints 
  {
    full_name: "Archie Manning",
    position: quarterBack,
    team_name: saints,
    notes: null,
    tenure: "1971 - 1982",
    year_inducted: 2013
  },
  {
    full_name: "Rickey Jackson",
    position: lineBacker,
    team_name: saints,
    notes: null,
    tenure: "1981 - 1993",
    year_inducted: 2013
  },
  {
    full_name: "Willie Roaf",
    position: offensiveTackle,
    team_name: saints,
    notes: null,
    tenure: "1993 - 2001",
    year_inducted: 2013
  },
  {
    full_name: "Morten Andersen",
    position: kicker,
    team_name: saints,
    notes: null,
    tenure: "1982 - 1994",
    year_inducted: 2015
  },
  {
    full_name: "Tom Benson",
    position: owner,
    team_name: saints,
    notes: null,
    tenure: "1985 - 2018",
    year_inducted: 2019
  },
  {
    full_name: "Will Smith",
    position: defensiveEnd,
    team_name: saints,
    notes: null,
    tenure: "2004 - 2013",
    year_inducted: 2019
  },
  {
    full_name: "Sam Mills",
    position: lineBacker,
    team_name: saints,
    notes: null,
    tenure: "1986 - 1994",
    year_inducted: 2021

  },
  // New York Giants
  {
    full_name: "Jessie Armstead",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1993 - 2001",
    year_inducted: 2010
  },
  {
    full_name: "Tiki Barber",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1997 - 2006",
    year_inducted: 2010
  },
  {
    full_name: "Al Blozis",
    position: offensiveTackle,
    team_name: giants,
    notes: "Passed away in World War II",
    tenure: "1942 - 1944",
    year_inducted: 2010
  },
  {
    full_name: "Rosey Brown",
    position: offensiveTackle,
    team_name: giants,
    notes: null,
    tenure: "1953 - 1965",
    year_inducted: 2010
  },
  {
    full_name: "Harry Carson",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1976 - 1988",
    year_inducted: 2010
  },
  {
    full_name: "Charlie Conerly",
    position: quarterBack,
    team_name: giants,
    notes: null,
    tenure: "1948 - 1961",
    year_inducted: 2010
  },
  {
    full_name: "Frank Gifford",
    position: runningBack + ", " + wideReceiver,
    team_name: giants,
    notes: null,
    tenure: "1952 - 1864",
    year_inducted: 2010
  },
  {
    full_name: "Pete Gogolak",
    position: kicker,
    team_name: giants,
    notes: null,
    tenure: "1966 - 1974",
    year_inducted: 2010
  },
  {
    full_name: "Mel Hein",
    position: center + ", " + lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1931 - 1945",
    year_inducted: 2010
  },
  {
    full_name: "Jim Lee Howell",
    position: tightEnd + ", " + defensiveEnd + ", " + headCoach,
    team_name: giants,
    notes: null,
    tenure: "1937 - 1942, 1946 - 1947, 1954 - 1960",
    year_inducted: 2010
  },
  {
    full_name: "Sam Huff",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1956 - 1963",
    year_inducted: 2010
  },
  {
    full_name: "Tuffy Leemans",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1936 - 1943",
    year_inducted: 2010
  },
  {
    full_name: "Dick Lynch",
    position: cornerBack,
    team_name: giants,
    notes: null,
    tenure: "1958 - 1966",
    year_inducted: 2010
  },
  {
    full_name: "Jack Mara",
    position: owner,
    team_name: giants,
    notes: null,
    tenure: "1925 - 1065",
    year_inducted: 2010
  },
  {
    full_name: "Tim Mara",
    position: "Founding Owner",
    team_name: giants,
    notes: null,
    tenure: "1925 - 1959",
    year_inducted: 2010
  },
  {
    full_name: "Wellington Mara",
    position: "Ball Boy" + ", " + executive + ", " + owner,
    team_name: giants,
    notes: null,
    tenure: "1925 - 2005",
    year_inducted: 2010
  },
  {
    full_name: "George Martin",
    position: defensiveEnd,
    team_name: giants,
    notes: null,
    tenure: "1975 - 1988",
    year_inducted: 2010
  },
  {
    full_name: "Joe Morrison",
    position: wideReceiver + ", " + runningBack,
    team_name: giants,
    notes: null,
    tenure: "1959 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Steve Owen",
    position: offensiveTackle + ", " + headCoach,
    team_name: giants,
    notes: "Started to be the Head Coach in the 1930 season",
    tenure: "1926 - 1953",
    year_inducted: 2010
  },
  {
    full_name: "Bill Parcells",
    position: lineBacker + " Coach, " + defensiveCoordinator + ", " + headCoach,
    team_name: giants,
    notes: null,
    tenure: "1979, 1981 - 1990",
    year_inducted: 2010
  },
  {
    full_name: "Andy Robustelli",
    position: defensiveEnd,
    team_name: giants,
    notes: null,
    tenure: "1956 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "Phil Simms",
    position: quarterBack,
    team_name: giants,
    notes: null,
    tenure: "1979 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Michael Strahan",
    position: defensiveEnd,
    team_name: giants,
    notes: null,
    tenure: "1993 - 2007",
    year_inducted: 2010
  },
  {
    full_name: "Ken Strong",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1933 - 1935, 1939, 1944 - 1947",
    year_inducted: 2010
  },
  {
    full_name: "Lawrence Taylor",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1981 - 1993",
    year_inducted: 2010
  },
  {
    full_name: "Bob Tisch",
    position: owner,
    team_name: giants,
    notes: null,
    tenure: "1991 - 2005",
    year_inducted: 2010
  },
  {
    full_name: "Y.A. Tittle",
    position: quarterBack,
    team_name: giants,
    notes: null,
    tenure: "1961 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "Amani Tooner",
    position: wideReceiver,
    team_name: giants,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2010
  },
  {
    full_name: "Emlen Tunnell",
    position: cornerBack + ", Scout, Assistant " + headCoach,
    team_name: giants,
    notes: null,
    tenure: "1948 - 1958, 1963 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "George Young",
    position: executive,
    team_name: giants,
    notes: null,
    tenure: "1979 - 1997",
    year_inducted: 2010
  },
  {
    full_name: "Carl Banks",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1984 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Mark Bavaro",
    position: tightEnd,
    team_name: giants,
    notes: null,
    tenure: "1985 - 1990",
    year_inducted: 2011
  },
  {
    full_name: "Dave Jennings",
    position: punter,
    team_name: giants,
    notes: null,
    tenure: "1974 - 1984",
    year_inducted: 2011
  },
  {
    full_name: "Brad Van Pelt",
    position: lineBacker,
    team_name: giants,
    notes: null,
    tenure: "1973 - 1983",
    year_inducted: 2011
  },
  {
    full_name: "Alex Webster",
    position: fullBack + ", " + headCoach,
    team_name: giants,
    notes: null,
    tenure: "1955 - 1964, 1969 - 1973",
    year_inducted: 2011
  },
  {
    full_name: "John Johnson",
    position: "Athletic Trainer",
    team_name: giants,
    notes: null,
    tenure: "1948 - 2008",
    year_inducted: 2015
  },
  {
    full_name: "Jack Lummus",
    position: tightEnd + ", " + defensiveEnd,
    team_name: giants,
    notes: "Passed away in the Battle of Iwo Jima during World War II",
    tenure: "1941",
    year_inducted: 2015
  },
  {
    full_name: "Chris Snee",
    position: guard,
    team_name: giants,
    notes: null,
    tenure: "2004 - 2013",
    year_inducted: 2015
  },
  {
    full_name: "Osi Umenyiora",
    position: defensiveEnd,
    team_name: giants,
    notes: null,
    tenure: "2003 - 2012",
    year_inducted: 2015
  },
  {
    full_name: "Ernie Acorsi",
    position: executive,
    team_name: giants,
    notes: null,
    tenure: "1994 - 2007",
    year_inducted: 2016
  },
  {
    full_name: "Tom Coughlin",
    position: wideReceiver + "Coach, " + headCoach,
    team_name: giants,
    notes: null,
    tenure: "1988 - 1990, 2004 - 2015",
    year_inducted: 2016
  },
  {
    full_name: "Eli Manning",
    position: quarterBack,
    team_name: giants,
    notes: null,
    tenure: "2004 - 2019",
    year_inducted: 2021
  },
  {
    full_name: "Ottis 'OJ' Anderson",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1986 - 1992",
    year_inducted: 2022
  },
  {
    full_name: "Ronnie Barnes",
    position: "Athletic Trainer",
    team_name: giants,
    notes: null,
    tenure: "1976 - Present",
    year_inducted: 2022
  },
  {
    full_name: "Rodney Hampton",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1990 - 1997",
    year_inducted: 2022
  },
  {
    full_name: "Leonard Marshall",
    position: defensiveEnd,
    team_name: giants,
    notes: null,
    tenure: "1982 - 1992",
    year_inducted: 2022
  },
  {
    full_name: "Joe Morris",
    position: runningBack,
    team_name: giants,
    notes: null,
    tenure: "1982 - 1988",
    year_inducted: 2022
  },
  {
    full_name: "Jimmy Patton",
    position: safety,
    team_name: giants,
    notes: null,
    tenure: "1955 - 1966",
    year_inducted: 2022
  },
  {
    full_name: "Kyle Rote",
    position: runningBack + ", " + wideReceiver,
    team_name: giants,
    notes: null,
    tenure: "1951 - 1961",
    year_inducted: 2022
  },
  // New York Jets
  {
    full_name: "Joe Namath",
    position: quarterBack,
    team_name: jets,
    notes: null,
    tenure: "1965 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Curtis Martin",
    position: runningBack,
    team_name: jets,
    notes: null,
    tenure: "1998 - 2006",
    year_inducted: 2010
  },
  {
    full_name: "Joe Klecko",
    position: "Defensive Line",
    team_name: jets,
    notes: null,
    tenure: "1977 - 1987",
    year_inducted: 2010
  },
  {
    full_name: "Don Maynard",
    position: wideReceiver,
    team_name: jets,
    notes: null,
    tenure: "1960 - 1972",
    year_inducted: 2010
  },
  {
    full_name: "Winston Hill",
    position: offensiveTackle,
    team_name: jets,
    notes: null,
    tenure: "1963 - 1976",
    year_inducted: 2010
  },
  {
    full_name: "Weeb Ewbank",
    position: owner,
    team_name: jets,
    notes: null,
    tenure: "1963 - 1973",
    year_inducted: 2010
  },
  {
    full_name: "Larry Grantham",
    position: lineBacker,
    team_name: jets,
    notes: null,
    tenure: "1960 - 1972",
    year_inducted: 2011
  },
  {
    full_name: "Freeman McNeil",
    position: runningBack,
    team_name: jets,
    notes: null,
    tenure: "1981 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Gerry Philbin",
    position: defensiveEnd,
    team_name: jets,
    notes: null,
    tenure: "1964 - 1972",
    year_inducted: 2011
  },
  {
    full_name: "Al Toon",
    position: wideReceiver,
    team_name: jets,
    notes: null,
    tenure: "1985 - 1992",
    year_inducted: 2011
  },
  {
    full_name: "Wesley Walker",
    position: wideReceiver,
    team_name: jets,
    notes: null,
    tenure: "1977 - 1989",
    year_inducted: 2012
  },
  {
    full_name: "Mark Gastineau",
    position: defensiveEnd,
    team_name: jets,
    notes: null,
    tenure: "1979 - 1988",
    year_inducted: 2012
  },
  {
    full_name: "Marty Lyons",
    position: defensiveTackle,
    team_name: jets,
    notes: null,
    tenure: "1979 - 1989",
    year_inducted: 2013
  },
  {
    full_name: "Wayne Chrebet",
    position: wideReceiver,
    team_name: jets,
    notes: null,
    tenure: "1995 - 2005",
    year_inducted: 2014
  },
  {
    full_name: "Leon Hess",
    position: owner,
    team_name: jets,
    notes: null,
    tenure: "1968 - 1999",
    year_inducted: 2014
  },
  {
    full_name: "Emerson Boozer",
    position: runningBack,
    team_name: jets,
    notes: null,
    tenure: "1966 - 1975",
    year_inducted: 2015
  },
  {
    full_name: "Matt Snell",
    position: runningBack,
    team_name: jets,
    notes: null,
    tenure: "1964 - 1972",
    year_inducted: 2015
  },
  {
    full_name: "Kevin Mawae",
    position: center,
    team_name: jets,
    notes: null,
    tenure: "1998 - 2005",
    year_inducted: 2017
  },
  {
    full_name: "Darrelle Revis",
    position: cornerBack,
    team_name: jets,
    notes: null,
    tenure: "2007 - 2012, 2015 - 2016",
    year_inducted: 2022
  },
  {
    full_name: "D'Brickashaw Ferguson",
    position: offensiveTackle,
    team_name: jets,
    notes: null,
    tenure: "2006 - 2015",
    year_inducted: 2022
  },
  {
    full_name: "Nick Mangold",
    position: center,
    team_name: jets,
    notes: null,
    tenure: "2006 - 2016",
    year_inducted: 2022
  },
  // Philadelphia Eagles
  {
    full_name: "Chuck Bednarik",
    position: center + ", " + lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "1949 - 1962",
    year_inducted: 1987
  },
  {
    full_name: "Bert Bell",
    position: "Founding Owner",
    team_name: eagles,
    notes: null,
    tenure: "1933 - 1940",
    year_inducted: 1987
  },
  {
    full_name: "Harold Carmichael",
    position: wideReceiver,
    team_name: eagles,
    notes: null,
    tenure: "1971 - 1983",
    year_inducted: 1987
  },
  {
    full_name: "Bill Hewitt",
    position: tightEnd + ", " + defensiveEnd,
    team_name: eagles,
    notes: null,
    tenure: "1936 - 1939, 1943",
    year_inducted: 1987
  },
  {
    full_name: "Sonny Jurgensen",
    position: quarterBack,
    team_name: eagles,
    notes: null,
    tenure: "1957 - 1963",
    year_inducted: 1987
  },
  {
    full_name: "Ollie Matson",
    position: runningBack,
    team_name: eagles,
    notes: null,
    tenure: "1964 - 1966",
    year_inducted: 1987
  },
  {
    full_name: "Wilbert Montgomery",
    position: runningBack,
    team_name: eagles,
    notes: null,
    tenure: "1977 - 1984",
    year_inducted: 1987
  },
  {
    full_name: "Earle 'Greasy' Neale",
    position: headCoach,
    team_name: eagles,
    notes: null,
    tenure: "1941 - 1950",
    year_inducted: 1987
  },
  {
    full_name: "Pete Pihos",
    position: tightEnd + ", " + defensiveEnd,
    team_name: eagles,
    notes: null,
    tenure: "1947 - 1955",
    year_inducted: 1987
  },
  {
    full_name: "Jim Ringo",
    position: center,
    team_name: eagles,
    notes: null,
    tenure: "1964 - 1977",
    year_inducted: 1987
  },
  {
    full_name: "Norm Van Brocklin",
    position: quarterBack,
    team_name: eagles,
    notes: null,
    tenure: "1958 - 1960",
    year_inducted: 1987
  },
  {
    full_name: "Steve Van Buren",
    position: runningBack,
    team_name: eagles,
    notes: null,
    tenure: "1944 - 1951",
    year_inducted: 1987
  },
  {
    full_name: "Alex Wojciechowicz",
    position: center + ", " + defensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1946 - 1950",
    year_inducted: 1987
  },
  {
    full_name: "Bill Bergey",
    position: lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "1974 - 1980",
    year_inducted: 1988
  },
  {
    full_name: "Tommy McDonald",
    position: wideReceiver,
    team_name: eagles,
    notes: null,
    tenure: "1957 - 1963",
    year_inducted: 1988
  },
  {
    full_name: "Tom Brookshier",
    position: cornerBack,
    team_name: eagles,
    notes: null,
    tenure: "1953 - 1961",
    year_inducted: 1989
  },
  {
    full_name: "Pete Retzlaff",
    position: tightEnd,
    team_name: eagles,
    notes: null,
    tenure: "1956 - 1966",
    year_inducted: 1989
  },
  {
    full_name: "Tommy Brown",
    position: runningBack,
    team_name: eagles,
    notes: null,
    tenure: "1960 - 1967",
    year_inducted: 1990
  },
  {
    full_name: "Jerry Sisemore",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1973 - 1987",
    year_inducted: 1991
  },
  {
    full_name: "Stan Walters",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1975 - 1983",
    year_inducted: 1991
  },
  {
    full_name: "Ron Jaworski",
    position: quarterBack,
    team_name: eagles,
    notes: null,
    tenure: "1977 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Bill Bradley",
    position: safety + ", " + punter,
    team_name: eagles,
    notes: null,
    tenure: "1969 - 1976",
    year_inducted: 1993
  },
  {
    full_name: "Dick Vermeil",
    position: headCoach,
    team_name: eagles,
    notes: null,
    tenure: "1976 - 1982",
    year_inducted: 1994
  },
  {
    full_name: "Jim Gallagher",
    position: executive,
    team_name: eagles,
    notes: null,
    tenure: "1949 - 1995",
    year_inducted: 1995
  },
  {
    full_name: "Mike Quick",
    position: wideReceiver,
    team_name: eagles,
    notes: null,
    tenure: "1982 - 1990",
    year_inducted: 1995
  },
  {
    full_name: "Jerome Brown",
    position: defensiveTackle,
    team_name: eagles,
    notes: "Passed away in 1992 before Training Camp",
    tenure: "1987 - 1991",
    year_inducted: 1996
  },
  {
    full_name: "Otho Davis",
    position: "Head Trainer",
    team_name: eagles,
    notes: null,
    tenure: "1973 - 1995",
    year_inducted: 1999
  },
  {
    full_name: "1948 NFL Championship Team",
    position: null,
    team_name: eagles,
    notes: null,
    tenure: "1948",
    year_inducted: 1999
  },
  {
    full_name: "1949 NFL Championship Team",
    position: null,
    team_name: eagles,
    notes: null,
    tenure: "1949",
    year_inducted: 1999
  },
  {
    full_name: "Bob Brown",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1964 - 1968",
    year_inducted: 2004
  },
  {
    full_name: "Reggie White",
    position: defensiveEnd,
    team_name: eagles,
    notes: null,
    tenure: "1985 - 1992",
    year_inducted: 2005
  },
  {
    full_name: "Al Wistert",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1943 - 1951",
    year_inducted: 2009
  },
  {
    full_name: "Randall Cunningham",
    position: quarterBack + ", " + punter,
    team_name: eagles,
    notes: "Punted 20 times in his career",
    tenure: "1985 - 1995",
    year_inducted: 2009
  },
  {
    full_name: "Eric Allen",
    position: cornerBack,
    team_name: eagles,
    notes: null,
    tenure: "1988 - 1994",
    year_inducted: 2011
  },
  {
    full_name: "Jim Johnson",
    position: defensiveCoordinator,
    team_name: eagles,
    notes: null,
    tenure: "1999 - 2008",
    year_inducted: 2011
  },
  {
    full_name: "Leo Carlin",
    position: "Ticket Manager",
    team_name: eagles,
    notes: null,
    tenure: "1960 - 1982, 1985 - 2015",
    year_inducted: 2012
  },
  {
    full_name: "Brian Dawkins",
    position: safety,
    team_name: eagles,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2012
  },
  {
    full_name: "Troy Vincent",
    position: cornerBack,
    team_name: eagles,
    notes: null,
    tenure: "1996 - 2003",
    year_inducted: 2012
  },
  {
    full_name: "Donovan McNabb",
    position: quarterBack,
    team_name: eagles,
    notes: null,
    tenure: "1999 - 2009",
    year_inducted: 2013
  },
  {
    full_name: "Brian Westbrook",
    position: runningBack,
    team_name: eagles,
    notes: null,
    tenure: "2002 - 2009",
    year_inducted: 2015
  },
  {
    full_name: "Maxie Baughan",
    position: lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "1960 - 1965",
    year_inducted: 2015
  },
  {
    full_name: "Jeremiah Trotter",
    position: lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "1998 - 2001, 2004 - 2006",
    year_inducted: 2016
  },
  {
    full_name: "Merrill Reese",
    position: "Radio Play by Play",
    team_name: eagles,
    notes: null,
    tenure: "1977 - Present",
    year_inducted: 2016
  },
  {
    full_name: "David Akers",
    position: kicker,
    team_name: eagles,
    notes: null,
    tenure: "1999 - 2010",
    year_inducted: 2017
  },
  {
    full_name: "Seth Joyner",
    position: lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "1986 - 1993",
    year_inducted: 2018
  },
  {
    full_name: "Clyde Simmons",
    position: defensiveEnd,
    team_name: eagles,
    notes: null,
    tenure: "1986 - 1993",
    year_inducted: 2018
  },
  {
    full_name: "Bobby Walston",
    position: wideReceiver + ", " + tightEnd + ", " + kicker,
    team_name: eagles,
    notes: null,
    tenure: "1951 - 1962",
    year_inducted: 2019
  },
  {
    full_name: "Tra Thomas",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "1998 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Jon Runyan",
    position: offensiveTackle,
    team_name: eagles,
    notes: null,
    tenure: "2000 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Hugh Douglas",
    position: defensiveEnd,
    team_name: eagles,
    notes: null,
    tenure: "1998 - 2002, 2004",
    year_inducted: 2022
  },
  {
    full_name: "Trent Cole ",
    position: defensiveEnd + ", " + lineBacker,
    team_name: eagles,
    notes: null,
    tenure: "2005 - 2014",
    year_inducted: 2022
  },
  // Pittsburgh Steelers
  {
    full_name: "Jerome Bettis",
    position: runningBack,
    team_name: steelers,
    notes: null,
    tenure: "1996 - 2005",
    year_inducted: 2017
  },
  {
    full_name: "Mel Blount",
    position: cornerBack,
    team_name: steelers,
    notes: null,
    tenure: "1970 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Terry Bradshaw",
    position: quarterBack,
    team_name: steelers,
    notes: null,
    tenure: "1970 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Jack Butler",
    position: cornerBack,
    team_name: steelers,
    notes: null,
    tenure: "1951 - 1959",
    year_inducted: 2017
  },
  {
    full_name: "Dermontti Dawson",
    position: center,
    team_name: steelers,
    notes: null,
    tenure: "1988 - 2000",
    year_inducted: 2017
  },
  {
    full_name: "Bill Dudley",
    position: runningBack,
    team_name: steelers,
    notes: null,
    tenure: "1942, 1945 - 1946",
    year_inducted: 2017
  },
  {
    full_name: "Joe Greene",
    position: defensiveTackle,
    team_name: steelers,
    notes: null,
    tenure: "1969 - 1981",
    year_inducted: 2017
  },
  {
    full_name: "Kevin Greene",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "1993 - 1995",
    year_inducted: 2017
  },
  {
    full_name: "L.C. Greenwood",
    position: defensiveEnd,
    team_name: steelers,
    notes: null,
    tenure: "1969 - 1981",
    year_inducted: 2017
  },
  {
    full_name: "Jack Ham",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "1971 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Franco Harris",
    position: fullBack,
    team_name: steelers,
    notes: null,
    tenure: "1972 - 1983",
    year_inducted: 2017
  },
  {
    full_name: "Dick Hoak",
    position: runningBack + ", " + runningBack + " Coach",
    team_name: steelers,
    notes: null,
    tenure: "1961 - 1970, 1972 - 2006",
    year_inducted: 2017
  },
  {
    full_name: "John Henry Johnson",
    position: fullBack,
    team_name: steelers,
    notes: null,
    tenure: "1960 - 1965",
    year_inducted: 2017
  },
  {
    full_name: "Walt Kiesling",
    position: guard + ", " + headCoach,
    team_name: steelers,
    notes: null,
    tenure: "1937 - 1939, 1939 - 1944, 1954 - 1956",
    year_inducted: 2017
  },
  {
    full_name: "Jack Lambert",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "1974 - 1984",
    year_inducted: 2017
  },
  {
    full_name: "Bobby Layne",
    position: quarterBack,
    team_name: steelers,
    notes: null,
    tenure: "1958 - 1962",
    year_inducted: 2017
  },
  {
    full_name: "Johnny 'Blood' McNally",
    position: fullBack + ", " + headCoach,
    team_name: steelers,
    notes: "Hired to be a Player and the Head Coach in 1937",
    tenure: "1934, 1937 - 1939",
    year_inducted: 2017
  },
  {
    full_name: "Chuck Noll",
    position: headCoach,
    team_name: steelers,
    notes: null,
    tenure: "1969 - 1991",
    year_inducted: 2017
  },
  {
    full_name: "Art Rooney Sr.",
    position: "Founding Owner, President, Chairman of the Board",
    team_name: steelers,
    notes: null,
    tenure: "1933 - 1988",
    year_inducted: 2017
  },
  {
    full_name: "Dan Rooney Sr.",
    position: "President & Chairman",
    team_name: steelers,
    notes: null,
    tenure: "1955 - 2017",
    year_inducted: 2017
  },
  {
    full_name: "Andy Russell",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "1963, 1966 - 1976",
    year_inducted: 2017
  },
  {
    full_name: "Donnie Shell",
    position: safety,
    team_name: steelers,
    notes: null,
    tenure: "1974 - 1987",
    year_inducted: 2017
  },
  {
    full_name: "John Stallworth",
    position: wideReceiver,
    team_name: steelers,
    notes: null,
    tenure: "1974 - 1987",
    year_inducted: 2017
  },
  {
    full_name: "Ernie Stautner",
    position: defensiveTackle,
    team_name: steelers,
    notes: null,
    tenure: "1950 - 1963",
    year_inducted: 2017
  },
  {
    full_name: "Lynn Swann",
    position: wideReceiver,
    team_name: steelers,
    notes: null,
    tenure: "1974 - 1982",
    year_inducted: 2017
  },
  {
    full_name: "Mike Webster",
    position: center,
    team_name: steelers,
    notes: null,
    tenure: "1974 - 1988",
    year_inducted: 2017
  },
  {
    full_name: "Rod Woodson",
    position: cornerBack,
    team_name: steelers,
    notes: null,
    tenure: "1987 - 1996",
    year_inducted: 2017
  },
  {
    full_name: "Rocky Bleier",
    position: runningBack,
    team_name: steelers,
    notes: null,
    tenure: "1968, 1970 - 1980",
    year_inducted: 2018
  },
  {
    full_name: "Buddy Dial",
    position: wideReceiver,
    team_name: steelers,
    notes: null,
    tenure: "1959 - 1963",
    year_inducted: 2018
  },
  {
    full_name: "Alan Faneca",
    position: guard,
    team_name: steelers,
    notes: null,
    tenure: "1998 - 2007",
    year_inducted: 2018
  },
  {
    full_name: "Bill Nunn",
    position: "Scout, Senior Scout, Assistant Director of Player Personnel",
    team_name: steelers,
    notes: null,
    tenure: "1968 - 2014",
    year_inducted: 2018
  },
  {
    full_name: "Art Rooney Jr.",
    position: "Personnel Director & Vice President",
    team_name: steelers,
    notes: null,
    tenure: "1965 - 1986, 1987 - Present",
    year_inducted: 2018
  },
  {
    full_name: "Larry Brown",
    position: tightEnd + ", " + offensiveTackle,
    team_name: steelers,
    notes: "Switched to OT in 1977",
    tenure: "1971 - 1984",
    year_inducted: 2019
  },
  {
    full_name: "Bill Cowher",
    position: headCoach,
    team_name: steelers,
    notes: null,
    tenure: "1992 - 2006",
    year_inducted: 2019
  },
  {
    full_name: "Elbi Nickel",
    position: tightEnd,
    team_name: steelers,
    notes: null,
    tenure: "1947 - 1957",
    year_inducted: 2019
  },
  {
    full_name: "Hines Ward",
    position: wideReceiver,
    team_name: steelers,
    notes: null,
    tenure: "1998 - 2011",
    year_inducted: 2019
  },
  {
    full_name: "James Farrior",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "2002 - 2011",
    year_inducted: 2020
  },
  {
    full_name: "Greg Lloyd",
    position: lineBacker,
    team_name: steelers,
    notes: null,
    tenure: "1988 - 1997",
    year_inducted: 2020
  },
  {
    full_name: "Troy Polamalu",
    position: safety,
    team_name: steelers,
    notes: null,
    tenure: "2003 - 2014",
    year_inducted: 2020
  },
  {
    full_name: "Mike Wagner",
    position: safety,
    team_name: steelers,
    notes: null,
    tenure: "1971 - 1980",
    year_inducted: 2020
  },
  {
    full_name: "Dwight White",
    position: defensiveEnd,
    team_name: steelers,
    notes: null,
    tenure: "1971 - 1980",
    year_inducted: 2020
  },
  {
    full_name: "Tunch Ilkin",
    position: offensiveTackle,
    team_name: steelers,
    notes: null,
    tenure: "1980 - 1992",
    year_inducted: 2021
  },
  {
    full_name: "Jon Kolb",
    position: offensiveTackle,
    team_name: steelers,
    notes: null,
    tenure: "1969 - 1981",
    year_inducted: 2021
  },
  {
    full_name: "Carnell Lake",
    position: safety + ", " + cornerBack,
    team_name: steelers,
    notes: null,
    tenure: "1989 - 1998",
    year_inducted: 2021
  },
  {
    full_name: "Louis Lipps",
    position: wideReceiver,
    team_name: steelers,
    notes: null,
    tenure: "1984 - 1991",
    year_inducted: 2021
  },
  {
    full_name: "Myron Cope",
    position: "Broadcaster",
    team_name: steelers,
    notes: null,
    tenure: "1970 - 2004",
    year_inducted: 2022
  },
  {
    full_name: "Sam Davis",
    position: guard,
    team_name: steelers,
    notes: null,
    tenure: "1967 - 1979",
    year_inducted: 2022
  },
  {
    full_name: "Ray Matthews",
    position: runningBack + ", " + tightEnd,
    team_name: steelers,
    notes: null,
    tenure: "1951 - 1959",
    year_inducted: 2022
  },
  {
    full_name: "Heath Miller",
    position: tightEnd,
    team_name: steelers,
    notes: null,
    tenure: "2005 - 2015",
    year_inducted: 2022
  },
  // San Francisco 49ers
  {
    full_name: "Steve Young",
    position: quarterBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1987 - 1999",
    year_inducted: 2009
  },
  {
    full_name: "John Brodie",
    position: quarterBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1957 - 1973",
    year_inducted: 2009
  },
  {
    full_name: "Y.A. Tittle",
    position: quarterBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1951 - 1960",
    year_inducted: 2009
  },
  {
    full_name: "Joe Montana",
    position: quarterBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1979 - 1992",
    year_inducted: 2009
  },
  {
    full_name: "Joe Perry",
    position: runningBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1948 - 1960, 1963",
    year_inducted: 2009
  },
  {
    full_name: "John Henry Johnson",
    position: runningBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1954 - 1956",
    year_inducted: 2009
  },
  {
    full_name: "Jimmy Johnson",
    position: cornerBack + ", " + wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1961 - 1976",
    year_inducted: 2009
  },
  {
    full_name: "Hugh McElhenny",
    position: runningBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1952 - 1960",
    year_inducted: 2009
  },
  {
    full_name: "Ronnie Lott",
    position: safety + ", " + cornerBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1981 - 1990",
    year_inducted: 2009
  },
  {
    full_name: "Dave Wilcox",
    position: lineBacker,
    team_name: fortyNiners,
    notes: null,
    tenure: "1964 - 1974",
    year_inducted: 2009
  },
  {
    full_name: "Charlie Krueger",
    position: "Defensive Line",
    team_name: fortyNiners,
    notes: null,
    tenure: "1959 - 1973",
    year_inducted: 2009
  },
  {
    full_name: "Leo Nomellini",
    position: offensiveTackle + ", " + defensiveTackle,
    team_name: fortyNiners,
    notes: null,
    tenure: "1950 - 1963",
    year_inducted: 2009
  },
  {
    full_name: "Fred Dean",
    position: defensiveEnd,
    team_name: fortyNiners,
    notes: null,
    tenure: "1981 - 1985",
    year_inducted: 2009
  },
  {
    full_name: "Bob St. Clair",
    position: offensiveTackle,
    team_name: fortyNiners,
    notes: null,
    tenure: "1953 - 1963",
    year_inducted: 2009
  },
  {
    full_name: "Dwight Clark",
    position: wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1979 - 1987",
    year_inducted: 2009
  },
  {
    full_name: "Edward DeBartolo Jr.",
    position: owner,
    team_name: fortyNiners,
    notes: null,
    tenure: "1978 - 2000",
    year_inducted: 2009
  },
  {
    full_name: "Bill Walsh",
    position: headCoach,
    team_name: fortyNiners,
    notes: null,
    tenure: "1979 - 1988",
    year_inducted: 2009
  },
  {
    full_name: "Jerry Rice",
    position: wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1985 - 2000",
    year_inducted: 2010
  },
  {
    full_name: "Tony Morabito",
    position: "Founding Owner",
    team_name: fortyNiners,
    notes: null,
    tenure: "1946 - 1957",
    year_inducted: 2010
  },
  {
    full_name: "Vic Morabito",
    position: owner,
    team_name: fortyNiners,
    notes: null,
    tenure: "1946 - 1964",
    year_inducted: 2010
  },
  {
    full_name: "R.C. Owens",
    position: wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1957 - 1961",
    year_inducted: 2011
  },
  {
    full_name: "Roger Craig",
    position: runningBack,
    team_name: fortyNiners,
    notes: null,
    tenure: "1982 - 1990",
    year_inducted: 2011
  },
  {
    full_name: "Gordon Soltau",
    position: wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1949 - 1958",
    year_inducted: 2012
  },
  {
    full_name: "John McVay",
    position: executive,
    team_name: fortyNiners,
    notes: null,
    tenure: "1980 - 1995, 1998 - 1999",
    year_inducted: 2013
  },
  {
    full_name: "George Seifert",
    position: "Defensive Back Coach, " + defensiveCoordinator + ", " + headCoach,
    team_name: fortyNiners,
    notes: null,
    tenure: "1980 - 1982, 1983 - 1988, 1989 - 1996",
    year_inducted: 2014
  },
  {
    full_name: "Charles Haley",
    position: defensiveEnd + ", " + lineBacker,
    team_name: fortyNiners,
    notes: null,
    tenure: "1986 - 1991, 1998 - 1999",
    year_inducted: 2015
  },
  {
    full_name: "Tom Rathman",
    position: fullBack + ", " + runningBack + " Coach",
    team_name: fortyNiners,
    notes: null,
    tenure: "1986 - 1991, 1997 - 2002, 2009 - 2016",
    year_inducted: 2017
  },
  {
    full_name: "Terrell Owens",
    position: wideReceiver,
    team_name: fortyNiners,
    notes: null,
    tenure: "1996 - 2003",
    year_inducted: 2018
  },
  {
    full_name: "Bryant Young",
    position: defensiveTackle,
    team_name: fortyNiners,
    notes: null,
    tenure: "1994 - 2007",
    year_inducted: 2020
  },
  // Seattle Seahawks
  {
    full_name: "Steve Largent",
    position: wideReceiver,
    team_name: seahawks,
    notes: null,
    tenure: "1976 - 1984",
    year_inducted: 1989
  },
  {
    full_name: "Jim Zorn",
    position: quarterBack,
    team_name: seahawks,
    notes: null,
    tenure: "1976 - 1984",
    year_inducted: 1991
  },
  {
    full_name: "Dave Brown",
    position: cornerBack,
    team_name: seahawks,
    notes: null,
    tenure: "1976 - 1986",
    year_inducted: 1992
  },
  {
    full_name: "Pete Gross",
    position: "Radio Announcer",
    team_name: seahawks,
    notes: null,
    tenure: "1976 - 1992",
    year_inducted: 1992
  },
  {
    full_name: "Curt Warner",
    position: runningBack,
    team_name: seahawks,
    notes: null,
    tenure: "1983 - 1989",
    year_inducted: 1994
  },
  {
    full_name: "Jacob Green",
    position: defensiveEnd,
    team_name: seahawks,
    notes: null,
    tenure: "1980 - 1991",
    year_inducted: 1995
  },
  {
    full_name: "Kenny Easley",
    position: safety,
    team_name: seahawks,
    notes: null,
    tenure: "1981 - 1987",
    year_inducted: 2002
  },
  {
    full_name: "Dave Krieg",
    position: quarterBack,
    team_name: seahawks,
    notes: null,
    tenure: "1980 - 1991",
    year_inducted: 2004
  },
  {
    full_name: "Chuck Knox",
    position: headCoach,
    team_name: seahawks,
    notes: null,
    tenure: "1983 - 1991",
    year_inducted: 2005
  },
  {
    full_name: "Cortez Kennedy",
    position: defensiveTackle,
    team_name: seahawks,
    notes: null,
    tenure: "1990 - 2000",
    year_inducted: 2006
  },
  {
    full_name: "Walter Jones",
    position: offensiveTackle,
    team_name: seahawks,
    notes: null,
    tenure: "1997 - 2009",
    year_inducted: 2014
  },
  {
    full_name: "Paul Allen",
    position: owner,
    team_name: seahawks,
    notes: null,
    tenure: "1996 - 2018",
    year_inducted: 2019
  },
  {
    full_name: "Matt Hasselbeck",
    position: quarterBack,
    team_name: seahawks,
    notes: null,
    tenure: "2001 - 2010",
    year_inducted: 2021
  },
  {
    full_name: "Mike Holmgren",
    position: headCoach,
    team_name: seahawks,
    notes: null,
    tenure: "1999 - 2008",
    year_inducted: 2021
  },
  {
    full_name: "Shaun Alexander",
    position: runningBack,
    team_name: seahawks,
    notes: null,
    tenure: "2000 - 2007",
    year_inducted: 2022
  },
  // Tampa Bay Buccaneers 
  {
    full_name: "Lee Roy Selmon",
    position: defensiveEnd,
    team_name: buccaneers,
    notes: null,
    tenure: "1976 - 1984",
    year_inducted: 2009
  },
  {
    full_name: "John McKay",
    position: headCoach,
    team_name: buccaneers,
    notes: null,
    tenure: "1976 - 1984",
    year_inducted: 2010
  },
  {
    full_name: "Jimmie Giles",
    position: tightEnd,
    team_name: buccaneers,
    notes: null,
    tenure: "1978 - 1986",
    year_inducted: 2011
  },
  {
    full_name: "Paul Gruber",
    position: offensiveTackle,
    team_name: buccaneers,
    notes: null,
    tenure: "1988 - 1999",
    year_inducted: 2012
  },
  {
    full_name: "Warren Sapp",
    position: defensiveTackle,
    team_name: buccaneers,
    notes: null,
    tenure: "1995 - 2003",
    year_inducted: 2013
  },
  {
    full_name: "Derrick Brooks",
    position: lineBacker,
    team_name: buccaneers,
    notes: null,
    tenure: "1995 - 2008",
    year_inducted: 2014
  },
  {
    full_name: "Mike Alstott",
    position: fullBack,
    team_name: buccaneers,
    notes: null,
    tenure: "1996 - 2007",
    year_inducted: 2015
  },
  {
    full_name: "Doug Williams",
    position: quarterBack,
    team_name: buccaneers,
    notes: null,
    tenure: "1978 - 1982",
    year_inducted: 2015
  },
  {
    full_name: "John Lynch",
    position: safety,
    team_name: buccaneers,
    notes: null,
    tenure: "1993 - 2003",
    year_inducted: 2016
  },
  {
    full_name: "Malcolm Glazer",
    position: owner,
    team_name: buccaneers,
    notes: null,
    tenure: "1995 - 2014",
    year_inducted: 2017
  },
  // {
  //   full_name: "Jon Gruden",
  //   position: headCoach,
  //   team_name: buccaneers,
  //   notes: "Removed in October of 2021",
  //   tenure: "2002 - 2008",
  //   year_inducted: 2017
  // },
  {
    full_name: "Tony Dungy",
    position: headCoach,
    team_name: buccaneers,
    notes: null,
    tenure: "1996 - 2001",
    year_inducted: 2018
  },
  {
    full_name: "Ronde Barber",
    position: cornerBack,
    team_name: buccaneers,
    notes: null,
    tenure: "1997 - 2012",
    year_inducted: 2019
  },
  {
    full_name: "Monte Kiffin",
    position: defensiveCoordinator,
    team_name: buccaneers,
    notes: null,
    tenure: "1996 - 2008",
    year_inducted: 2020
  },
  {
    full_name: "Bruce Arians",
    position: headCoach + ", " + executive,
    team_name: buccaneers,
    notes: null,
    tenure: "2019 - Present",
    year_inducted: 2022
  },
  // Tennessee Titans
  {
    full_name: "Elvin Bethea",
    position: defensiveEnd,
    team_name: titans,
    notes: null,
    tenure: "1968 - 1983",
    year_inducted: 1999
  },
  {
    full_name: "George Blanda",
    position: quarterBack + ", " + kicker,
    team_name: titans,
    notes: null,
    tenure: "1960 - 1966",
    year_inducted: 1999
  },
  {
    full_name: "Earl Campbell",
    position: runningBack,
    team_name: titans,
    notes: null,
    tenure: "1978 - 1984",
    year_inducted: 1999
  },
  {
    full_name: "Mike Holovak",
    position: generalManager,
    team_name: titans,
    notes: null,
    tenure: "1989 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Ken Houston",
    position: safety,
    team_name: titans,
    notes: null,
    tenure: "1967 - 1972",
    year_inducted: 1999
  },
  {
    full_name: "Mike Munchak",
    position: guard,
    team_name: titans,
    notes: null,
    tenure: "1982 - 1993",
    year_inducted: 1999
  },
  {
    full_name: "Jim Norton",
    "position": punter,
    team_name: titans,
    notes: null,
    tenure: "1960 - 1968",
    year_inducted: 1999
  },
  {
    full_name: "Bruce Matthews",
    position: "Offensive Line",
    // team_name: titans,
    notes: null,
    tenure: "1983 - 2001",
    year_inducted: 2002
  },
  {
    full_name: "Warren Moon",
    position: quarterBack,
    team_name: titans,
    notes: null,
    tenure: "1984 - 1993",
    year_inducted: 2007
  },
  {
    full_name: "Bud Adams",
    position: "Founding Owner",
    team_name: titans,
    notes: null,
    tenure: "1960 - 2013",
    year_inducted: 2008
  },
  {
    full_name: "Eddie George",
    position: runningBack,
    team_name: titans,
    notes: null,
    tenure: "1996 - 2003",
    year_inducted: 2008
  },
  {
    full_name: "Steve McNair",
    position: quarterBack,

    team_name: titans,
    notes: null,
    tenure: "1995 - 2005",
    year_inducted: 2008
  },
  {
    full_name: "Frank Whycheck",
    position: tightEnd,
    team_name: titans,
    notes: null,
    tenure: "1995 - 2003",
    year_inducted: 2008
  },
  {
    full_name: "Robert Brazile",
    position: lineBacker,
    team_name: titans,
    notes: null,
    tenure: "1975 - 1984",
    year_inducted: 2018
  },
  {
    full_name: "Bum Phillips",
    position: defensiveCoordinator + ", " + headCoach,
    team_name: titans,
    notes: null,
    tenure: "1974 - 1980",
    year_inducted: 2021
  },
  {
    full_name: "Jeff Fisher",
    position: defensiveCoordinator + ", " + headCoach,
    team_name: titans,
    notes: null,
    tenure: "1994 - 2010",
    year_inducted: 2021
  },
  {
    full_name: "Floyd Reese",
    position: lineBacker + " Coach, Assistant " + generalManager + ", " + generalManager,
    team_name: titans,
    notes: null,
    tenure: "1986 - 2006",
    year_inducted: 2021
  },
  // Washington Commanders
  {
    full_name: "George Allen",
    position: headCoach,
    team_name: commanders,
    notes: null,
    tenure: "1971 - 1977",
    year_inducted: null
  },
  {
    full_name: "Cliff Battles",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1932 - 1937",
    year_inducted: null
  },
  {
    full_name: "Sammy Baugh",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1937 - 1952",
    year_inducted: null
  },
  {
    full_name: "Bobby Beathard",
    position: generalManager,
    team_name: commanders,
    notes: null,
    tenure: "1978 - 1988",
    year_inducted: null
  },
  {
    full_name: "Jeff Bostic",
    position: center,
    team_name: commanders,
    notes: null,
    tenure: "1980 - 1993",
    year_inducted: null
  },
  {
    full_name: "Gene Brito",
    position: defensiveEnd,
    team_name: commanders,
    notes: null,
    tenure: "1951 - 1953, 1955 - 1958",
    year_inducted: null
  },
  {
    full_name: "Larry Brown",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1969 - 1976",
    year_inducted: null
  },
  {
    full_name: "Dave Butz",
    position: offensiveTackle,
    team_name: commanders,
    notes: null,
    tenure: "1975 - 1988",
    year_inducted: null
  },
  {
    full_name: "Gary Clark",
    position: wideReceiver,
    team_name: commanders,
    notes: null,
    tenure: "1985 - 1992",
    year_inducted: null
  },
  {
    full_name: "Monte Coleman",
    position: lineBacker,
    team_name: commanders,
    notes: null,
    tenure: "1979 - 1994",
    year_inducted: null
  },
  {
    full_name: "Jack Kent Cooke",
    position: owner,
    team_name: commanders,
    notes: null,
    tenure: "1961 - 1997",
    year_inducted: null
  },
  {
    full_name: "Wayne Curry",
    position: "Prince George's County Executive",
    team_name: commanders,
    notes: "Was pivotal in helping move Washington to Landover, Maryland",
    tenure: "1994 - 2002",
    year_inducted: null
  },
  {
    full_name: "Bill Dudley",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1950 - 1951, 1953",
    year_inducted: null
  },
  {
    full_name: "Pat Fischer",
    position: cornerBack,
    team_name: commanders,
    notes: null,
    tenure: "1968 - 1977",
    year_inducted: null
  },
  {
    full_name: "London Fletcher",
    position: lineBacker,
    team_name: commanders,
    notes: null,
    tenure: "2007 - 2013",
    year_inducted: null
  },
  {
    full_name: "Joe Gibbs",
    position: headCoach,
    team_name: commanders,
    notes: null,
    tenure: "1981 - 1992, 2004 - 2007",
    year_inducted: null
  },
  {
    full_name: "Darrell Green",
    position: cornerBack,
    team_name: commanders,
    notes: null,
    tenure: "1983 - 2002",
    year_inducted: null
  },
  {
    full_name: "Russ Grimm",
    position: guard,
    team_name: commanders,
    notes: null,
    tenure: "1981 - 1991",
    year_inducted: null
  },
  {
    full_name: "Chris Hanburger",
    position: lineBacker,
    team_name: commanders,
    notes: null,
    tenure: "1965 - 1978",
    year_inducted: null
  },
  {
    full_name: "Ken Harvey",
    position: lineBacker,
    team_name: commanders,
    notes: null,
    tenure: "1994 - 1998",
    year_inducted: null
  },
  {
    full_name: "Len Hauss",
    position: center,
    team_name: commanders,
    notes: null,
    tenure: "1964 - 1977",
    year_inducted: null
  },
  {
    full_name: "Phil Hochberg",
    position: "PA Announcer",
    team_name: commanders,
    notes: null,
    tenure: "1963 - 2000",
    year_inducted: null
  },
  {
    full_name: "Ken Houston",
    position: safety,
    team_name: commanders,
    notes: null,
    tenure: "1973 - 1980",
    year_inducted: null
  },
  {
    full_name: "Sam Huff",
    position: lineBacker,
    team_name: commanders,
    notes: null,
    tenure: "1964 - 1967, 1969",
    year_inducted: null
  },
  {
    full_name: "Joe Jacoby",
    position: offensiveTackle + ", " + guard,
    team_name: commanders,
    notes: null,
    tenure: "1981 - 1993",
    year_inducted: null
  },
  {
    full_name: "Dick James",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1956 - 1963",
    year_inducted: null
  },
  {
    full_name: "Sonny Jurgensen",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1964 - 1974",
    year_inducted: null
  },
  {
    full_name: "Charlie Justice",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1950, 1952 - 1954",
    year_inducted: null
  },
  {
    full_name: "Billy Kilmer",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1971 - 1978",
    year_inducted: null
  },
  {
    full_name: "Eddie LeBaron",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1952 - 1953, 1955 - 1959",
    year_inducted: null
  },
  {
    full_name: "Vince Lombardi",
    position: headCoach,
    team_name: commanders,
    notes: null,
    tenure: "1969",
    year_inducted: null
  },
  {
    full_name: "Dexter Manley",
    position: defensiveEnd,
    team_name: commanders,
    notes: null,
    tenure: "1981 - 1989",
    year_inducted: null
  },
  {
    full_name: "Charles Mann",
    position: defensiveEnd,
    team_name: commanders,
    notes: null,
    tenure: "1983 - 1989",
    year_inducted: null
  },
  {
    full_name: "Wayne Millner",
    position: tightEnd + ", " + defensiveEnd,
    team_name: commanders,
    notes: null,
    tenure: "1936 - 1941, 1945",
    year_inducted: null
  },
  {
    full_name: "Bobby Mitchell",
    position: wideReceiver,
    team_name: commanders,
    notes: null,
    tenure: "1962 - 1968",
    year_inducted: null
  },
  {
    full_name: "Brian Mitchell",
    position: runningBack + ", " + "Return Specialist",
    team_name: commanders,
    notes: null,
    tenure: "1990 - 1999",
    year_inducted: null
  },
  {
    full_name: "Art Monk",
    position: wideReceiver,
    team_name: commanders,
    notes: null,
    tenure: "1980 - 1993",
    year_inducted: null
  },
  {
    full_name: "Mark Moseley",
    position: kicker,
    team_name: commanders,
    notes: null,
    tenure: "1974 - 1986",
    year_inducted: null
  },
  {
    full_name: "Brig Owens",
    position: cornerBack,
    team_name: commanders,
    notes: null,
    tenure: "1966 - 1977",
    year_inducted: null
  },
  {
    full_name: "Richie Petitbon",
    position: safety + ", Defensive Back Coach, " + defensiveCoordinator + ", " + headCoach,
    team_name: commanders,
    notes: "Was the Head Coach for the 1993 season",
    tenure: "1971 - 1972, 1978 - 1993",
    year_inducted: null
  },
  {
    full_name: "Vince Promuto",
    position: guard,
    team_name: commanders,
    notes: null,
    tenure: "1960 - 1970",
    year_inducted: null
  },
  {
    full_name: "John Riggins",
    position: runningBack,
    team_name: commanders,
    notes: null,
    tenure: "1976 - 1979, 1981 - 1985",
    year_inducted: null
  },
  {
    full_name: "Mark Rypien",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1986 - 1993",
    year_inducted: null
  },
  {
    full_name: "Chris Samuels",
    position: offensiveTackle,
    team_name: commanders,
    notes: null,
    tenure: "2000 - 2009",
    year_inducted: null
  },
  {
    full_name: "Jerry Smith",
    position: tightEnd,
    team_name: commanders,
    notes: null,
    tenure: "1965 - 1977",
    year_inducted: null
  },
  {
    full_name: "Charley Taylor",
    position: wideReceiver,
    team_name: commanders,
    notes: null,
    tenure: "1964 - 1977",
    year_inducted: null
  },
  {
    full_name: "Sean Taylor",
    position: safety,
    team_name: commanders,
    notes: "Passed away during the 2007 season",
    tenure: "2004 - 2007",
    year_inducted: null
  },
  {
    full_name: "Joe Theismann",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1974 - 1985",
    year_inducted: null
  },
  {
    full_name: "Lamar 'Bubba' Tyler",
    position: "Athletic Trainer",
    team_name: commanders,
    notes: null,
    tenure: "1971 - 2002, 2004 - 2008",
    year_inducted: null
  },
  {
    full_name: "Doug Williams",
    position: quarterBack,
    team_name: commanders,
    notes: null,
    tenure: "1986 - 1989",
    year_inducted: null
  }
]

db.teams.deleteMany({})
  .then(() => db.teams.collection.insertMany(teamSeed))
  .then((data) => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.players.deleteMany({})
  .then(() => db.players.collection.insertMany(playerSeed))
  .then((data) => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
