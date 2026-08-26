var facts = [
    'I have arachnophobia, I\'m also deathly afraid of bugs as a whole and my family has never taken it seriously',
    'I\'m  a "neutral good" "virgo" INTP-T" "5w4" "yang fire" "rat". I don\'t actually take any of these that serious though',
    'My favorite food is sushi',
    'My favorite drink is bubble tea',
    'My favorite colors are red, yellow and purple',
    'I\'m the youngest of three (somewhat four) siblings. I have two sisters and a half-brother',
    'I have a very complicated relationship with religion (especially Christianity, I <3 religious trauma), but consider myself an atheistic satanist. I don\'t worship the literal deity of Satan but he\'s more so a symbol of my beliefs and values.',
    'My first ever game console was a Playstation 3 and LittleBigPlanet was my favorite game growing up',
    'I used to aspire being a writer but my passion for writing was ruined by a Splatoon roleplay discord server',
    'I was pulled out of public highschool in the 9th grade because my mom felt she was entitled to knowing I\'m transgender long before I was ready to come out on my own',
    'I\'ve been a terminally online discord user since I was 8 because my cousin wanted me to download it so I could talk to him while we played minecraft and other games',
    'I used to think I had delusional attachments to fictional characters but turns out I was simply just an extremely source attached fictive. and a system in general',
    'I have three dogs and a cat. Their names respectively are Ava (a shih tzu), Tiger (a dachshund), Charlie (a labrador retriever), and Fifa (a calico cat). I used to have a black cat named Luna but my mom gave her away to an animal shelter',
    'My gay awakening as a child was Coco Bandicoot from the Crash Bandicoot franchise',
    'As a kid I used to make multiple YouTube and DeviantArt accounts to pretend that I had a big friend group online',
    'I wrote fanfic once upon a time and the only one I was ever at least semi-proud of was a Peridot (Steven Universe) x Reader oneshot',
    'The game that I\'ve put the most hours into (as far as I\'m aware) was Animal Crossing: New Horizons. Yes it was during the 2020 pandemic',
    'I swallowed a marble as a kid',
    'My all-time favorite song is (I\'ll get back to ya\'ll on this one later)',
    'My all-time favorite game is ULTRAKILL',
    'My all-time favorite shows are Dungeon Meshi and Inanimate Insanity',
    'The most engaged I\'ve ever been in therapy was when I was making my therapist watch Inanimate Insanity with me (she liked it)',
    'I have anger issues but I try my best to manage them as well as I can',
    'I went to an outpatient mental health facility for about a month in 2024 before my mom took me out because they were sketchy as fuck',
    'I\'m a multishipper but my biggest comfort ships are Farcille (Falin Touden x Marcille Donato), Lightbrush (Lightbulb x Paintbrush) and MikuTeto (Hatsune Miku x Kasane Teto)',
    'My favorite fruits are strawberries and mangoes',
    'I was indirectly cancelled on Twitter once because of my incredibly shitty ex being cancelled',
    'I officially joined the OSC in early 2025 after I binged Inanimate Insanity but I did watch a few object shows beforehand, namely hfjONE, Animatic Battle and Love of the S*n. I watched Battle For Dream Island at 4 years old but it never genuinely sparked any interest from me until way later on ',
    'I\'ve never been able to speak a lick of spanish despite being Hispanic since my parents never bothered teaching me as a kid, although I plan on learning on my own at some point)',
    'I met my girlfriend on a voice call in the official Inanimate Insanity discord server where I excitedly DMed her because she had a Kasane Teto profile picture',
    'Basically all my names come from fictional characters that I\'m sourced from. Gabriel was taken from Gabriel Ultrakill, Painty was taken from Paintbrush from Inanimate Insanity, and Teddie was derived from Kasane Ted (the genderbent version of Kasane Teto)',
    'I just recently started trying to learn how to animate and I wish to pursue a career in animation sometime in the future',
    'My name Gabriel is pronounced gay-bree-uhl, NOT gab-ree-elle',
    'The furthest I\'ve traveled outside of my home state (New Jersey) was to visit one of my grandmas in Texas as a kid when she used to live there.',
  
 ]
    
function newFact () {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}