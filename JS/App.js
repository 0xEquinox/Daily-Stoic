

document.getElementById("random-button").onclick = newQuote;

let quotes = [];

quotes[0] = "“Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.” ― Markus Zusak";
quotes[1] = "“If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”― Marcus Aurelius";
quotes[2] = "“A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.”― Taleb Nassim Nicholas ";
quotes[3] = "“You should … live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.”― Lucius Annaeus Seneca";
quotes[4] = "“Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it bigger than it is by getting irritated.”― Lucius Annaeus Seneca";
quotes[5] = "“What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.”― Epictetus";
quotes[6] = "“Think of your many years of procrastination; how the gods have repeatedly granted you further periods of grace, of which you have taken no advantage. It is time now to realise the nature of the universe to which you belong, and of that controlling Power whose offspring you are; and to understand that your time has a limit set to it. Use it, then, to advance your enlightenment; or it will be gone, and never in your power again.”― Marcus Aurelius";
quotes[7] = "“It is not the man who has too little that is poor, but the one who hankers after more.”― Lucius Annaeus Seneca";
quotes[8] = "“Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.”― Seneca";
quotes[9] = "“From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.”― Marcus Aurelius";
quotes[10] = "“If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.”― Seneca";
quotes[11] = "“Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.”― Marcus Aurelius";
quotes[12] = "“It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.”― Epictetus";
quotes[13] = "“In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.”― Marcus Aurelius";
quotes[14] = "“Here is your great soul—the man who has given himself over to Fate; on the other hand, that man is a weakling and a degenerate who struggles and maligns the order of the universe and would rather reform the gods than reform himself.”― Seneca";
quotes[15] = "“Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter. For as the material of the carpenter is wood, and that of statuary bronze, so the subject-matter of the art of living is each person's own life.”― Epictetus";
quotes[16] = "“Just keep in mind: the more we value things outside our control, the less control we have”― Epictetus";
quotes[17] = "“I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.” – Cato";
quotes[18] = "“Self-control is strength. Right thought is mastery. Calmness is power.” – James Allen";
quotes[19] = "We should always be asking ourselves: “Is this something that is, or is not, in my control?” — Epictetus";
quotes[20] = "“Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.” – Marcus Aurelius";
quotes[21] = "“We are more often frightened than hurt; and we suffer more in imagination than in reality.” – Seneca";
quotes[22] = "“If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.” — Marcus Aurelius";
quotes[23] = "“We should not, like sheep, follow the herd of creatures in front of us, making our way where others go, not where we ought to go.” — Seneca";
quotes[24] = "“I have to die. If it is now, well then I die now; if later, then now I will take my lunch, since the hour for lunch has arrived – and dying I will tend to later.” —  Epictetus";
quotes[25] = "“It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.” – Marcus Aurelius";
quotes[26] = "“Because a thing seems difficult for you, do not think it impossible for anyone to accomplish.” —  Marcus Aurelius";
quotes[27] = "“You could leave life right now. Let that determine what you do and say and think.” – Marcus Aurelius";
quotes[28] = "“He who fears death will never do anything worth of a man who is alive.” – Seneca";
quotes[29] = "“Life is very short and anxious for those who forget the past, neglect the present, and fear the future.” – Seneca";
quotes[30] = "“What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.” – Viktor Frankl";

function newQuote(){

    card = document.getElementById("card-text");
    card.innerHTML = quotes[Math.floor((Math.random() * quotes.length) + 0)];

}

function genQuote(){

    let d = new Date();
    card = document.getElementById("card-text");

    card.innerHTML = quotes[d.getDate() - 1];

}