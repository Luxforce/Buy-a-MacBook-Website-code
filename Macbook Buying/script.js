var words = ['You can afford one you finnaly got your money up and not your funny up',
'no of course you cant afford one you poor bi-',
'you Can Afford one Thank god I bet Daddy got you it',
'No you cant afford one dumbass you think you have it like that'
];
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for(var x=0; x<20; x++)
    alert(randomWord(words));