var money = 0;
var energy = 1;
var maxEnergy = 1;
var fun = 0;
var friends = 0;
var days = 0;
var gun = false;
var shopRobbed = false;
/* the following var are to produce
different text outcomes for each function
im sure there is an easier way to do this but 
im a noob soooo */
var pc = 1;  //petty crime!
var ar = 1; //armed robbery!
var nc = 1; //no crime (too tired)
var db = 1; //drink bar
var ndb = 1; //no drink bar
var wt = 1; //work tavern!
var nwt = 1; //no work tavern (too tired)!
var sh = 1; //sleep hammock!
var drg = 1; // drink radGOB

document.getElementById("money").innerHTML = money;
document.getElementById("energy").innerHTML = energy;
function work() {
    if(energy >= 1) {
        money ++;
        energy --;
        document.getElementById("money").innerHTML = money;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        switch(wt){
            case 1:
                document.getElementById("wurds").innerHTML = "you work a shift at the tavern, many goblins were well.. total goblins but you made a coin";
                wt = 2;
                break;
            case 2:
                document.getElementById("wurds").innerHTML = "You regret not doing something with your life.. but hey you made some money...";
                wt = 3;
                break;
            case 3:
                document.getElementById("wurds").innerHTML = "With each customer you serve youre hate for goblimanity grows..";
                wt = 1;
                break;
        }
    }

    else if(energy <= 0.9){
        document.getElementById("money").innerHTML = money;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        switch(nwt){
            case 1:
                document.getElementById("wurds").innerHTML = "youre too tired to deal with that shit right now..";
                nwt = 2;
                break;
            case 2:
                document.getElementById("wurds").innerHTML = "if you dont sleep first youre gonna stab a customer";
                nwt = 3;
                break;
            case 3:
                document.getElementById("wurds").innerHTML = "youre boss took one look at you and said to come back when you look like a goblin not a zombie";
                nwt = 1;
                break;
                        }
    }

}
function drink(){
    if(money >= 1){
        money --;
        fun ++;
        document.getElementById("wurds").innerHTML = "you had a fun night at the bar";
        document.getElementById("money").innerHTML = money;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
    }
    else{
        document.getElementById("wurds").innerHTML = "you are broke!! make some money first ";
    }
}
function crime(){
    if(energy >= .5 && gun == true){
        money = money + 1;
        energy = energy - .5;
        document.getElementById("money").innerHTML = money;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        switch(ar){
            case 1:
                document.getElementById("wurds").innerHTML = "Woot robbing with a gun is way more Fun!!";
                ar = 2;
                break;
            case 2:
                document.getElementById("wurds").innerHTML = "you maced a goblin and then while he was crying put your gun to the back of his head.  he gave you his only 2 coins";
                money ++;
                ar = 1;
                break;
        }
    }
    else if(energy >= .5){
        money = money + .5;
        energy = energy - .5;
        document.getElementById("money").innerHTML = money;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        switch(pc){
            case 1:
                document.getElementById("wurds").innerHTML = "you were a bad hog!";
                pc = 2;
                break;
            case 2:
                document.getElementById("wurds").innerHTML = "you pickpocketed some drunk goblins";
                pc = 3
                break;
            case 3:
                document.getElementById("Wurds").innerHTML = "you snatched a tiny booze bottle from the store and sold it to a minor";
                pc = 1;
                break;
        }
        
    }
    else{
        document.getElementById("wurds").innerHTML = "youre too tired to do a crime rn";
    }
}
function befriend(){
    if(energy >= 1){
        energy=energy - 1;
        friends ++;
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        document.getElementById("wurds").innerHTML = "You befriended a local goblin!";
    }
    else{
        document.getElementById("wurds").innerHTML = "you can barely keep your eyes open.. no one wants to befriend ur sleep-deprived-ass rn";
    }
}
function sleep(){
    energy = maxEnergy;
    days ++;
    document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
    switch(sh){
        case 1:
            document.getElementById("words").innerHTML = "you had heard sleeping in a hammock was better,  well it wasn't for you";
            sh ++;
            break;
        case 2:
            document.getElementById("words").innerHTML = "You're pretty sure you fell out of the hammock like 4 times last night";
            sh ++;
            break;
        case 3:
            document.getElementById("words").innerHTML = "you should really buy a bed...";
            sh --;
            sh --;
            break;
        
    }
    
}
function walk(){
    if(energy <= .9){
        document.getElementById("words").innerHTML = "too tired to walk about.";
    }
    else if(friends <= 4  && money >= 2 && energy >= 1){
        energy --;
        money = Math.ceil(money / 2);
        document.getElementById("words").innerHTML = "being that no one knows you here some goblins decided to rob you.. make more friends!!";
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
    }
    else if(friends <= 4 && money <= 1.9 && energy >= 1){
        energy --;
        document.getElementById("words").innerHTML = "some goblins showed up and were gonna rob you but since your broke they didnt bother.. you should probs make some friends so someone has your back";
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
    }
    else{
        energy = energy - 1;
        maxEnergy = maxEnergy + 0.1;
        document.getElementById("words").innerHTML = "you went for a walk and jogged a bit along the way.  WOOT SOMEWHAT EXERCISE YAY!!";
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
    }

}
function stats(){
    document.getElementById("words").innerHTML = "friends: "+friends+", days in goblintown: "+days;
}
function buyGun(){
    if(gun == true){
        document.getElementById("sWords").innerHTML = "you already have a gun silly ghost terry, im not giving you two";
    }
    else if(money >= 15){
        money = money - 15;
        gun = true;
        document.getElementById("money").innerHTML = money;
        document.getElementById("sWords").innerHTML = "congrats on buyin ur gobkiller-2.0, please dont be too terible of a hog with that!";
    }
    else{
        document.getElementById("sWords").innerHTML = "you cant afford a gun ya silly dead friend of mine... i could get in trouble for sellin this to a ghost ya know so get more coins!!";
    }
}
function drinkRadGob(){
    if(money >= 2){
        energy = energy + 1;
        money = money - 2;
        document.getElementById("money").innerHTML = money; 
        document.getElementById("energy").innerHTML = Math.round(energy * 10) / 10;
        switch(drg){
            case 1:
                document.getElementById("sWords").innerHTML = "RadGob'll make ya crawl.. eventually!";
                drg = 2;
                break;
            case 2:
                document.getElementById("sWords").innerHTML = "this stuff is real bad for ya you know..";
                drg = 1;
                break;
        }
    }
    else{
        document.getElementById("sWords").innerHTML = "dont got enough coins to ride the radGob!";
    }
}
function robShop(){
    if(shopRobbed == true){
        document.getElementById("sWords").innerHTML = "NOT AGAIN GHOST TERRY *pulls out gobkiller 3.0* buy something or get out friendo!";
    }
    else if(gun == true){
        money = money + 5;
        shopRobbed = true;
        document.getElementById("money").innerHTML = money;
        document.getElementById("sWords").innerHTML = "terry you wild ghost hog u!! lol alrigh i probs owe you more than this for that last uh.. favor you did for me..";
    }
    else{
        document.getElementById("sWords").innerHTML = "How do ya plan on doing that?? with some weak ass ghost punches?  lol ghost terry youre wild, missed u.";
    }
}