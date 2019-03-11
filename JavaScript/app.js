//Music THERE IS A ISSUE WITH CHROME AUTOPLAYING. UNCAUGHT PROMISE! USER INTERACTION REQUIRED.
// var splashMusic = x =>
// {var sForest = new Audio("Audio/Nature Ambiance-SoundBible.com-1444637890.wav");
// const playPromise = sForest.play();
// if (playPromise !== null){
//     playPromise.catch(() => { sForest.play(); })
//     console.log(x);
// }
// }

var unkMusic = x =>
{var sU = new Audio("../Audio/Strange Noise-SoundBible.com-229408508.wav");
sU.volume = 0.5;
if (typeof sU.loop == 'boolean')
{sU.loop = true;}
else
{sU.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
sU.play();
}

//Gallery
var counter = 0;
var plusDivs = x =>
{
    var arrayImg = ["../Images/MysteryGallery/fairy.png", "../Images/MysteryGallery/horse_riding_a_horse.png", 
    "../Images/MysteryGallery/sack_of_mystery.png", "../Images/MysteryGallery/invisible_man.png", 
    "../Images/MysteryGallery/thighclops.png", "../Images/MysteryGallery/six_pack_a_lope.png"]
    var size = arrayImg.length - 1;
    counter = counter + x;
    while (counter > size) {
        counter=0;
    }
    while (counter < 0) {
        counter = size;
    }
    document.querySelector("#gallery").src = arrayImg[counter];
}

//Messages
var Hey = x => alert("HELLO");
var Haha = x => alert("HAHA, I'LL SAY! ONE TIME I TURNED THIS DIP INTO A SOCK PUPPET");
var Mystery = x => alert("NOT WHAT HE SEEMS");

//Laptop
var magicWord = x =>
{var pass = prompt("PASSWORD:", "Say My Name");
  if (pass == null || pass == "") {
    alert("YOU GET NOTHING!");
  } 
  else if (pass == "bill" || pass == "Bill") {
    alert(".....");
    window.location.assign("Unknown.html");
  }
  else {
    alert("THINK AGAIN PINETREE!");
  }
}

