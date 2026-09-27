/* The Treasure of Three Lakes Ranch: one list of slides, read by the slideshow (index.html)
   and by Lon's live page (lon.html), so the two always match. */

/* The live channel the slideshow announces its slide on (ntfy.sh, free, no account). */
const LIVE_TOPIC = 'three-lakes-ranch-lc7q2vx9';

/* The book link for the last slide. Paste it between the quotes; a QR code appears with it. */
const BOOK = '';

const S = [
{ t:'cover', cue:'Title' },

{ t:'story', img:'i57', h:'Lon Child', body:['Brandt’s son, and a treasure hunter like his father before him.','He lived at Three Lakes and kept it up for years.'] },

{ t:'story', img:'levi-portrait', h:'Levi Judson Harris', body:['Filmmaker, novelist, experiencer.','Working in AI and with egregores, building the grail of the next age.','Chasing the Three Lakes story since 2015.'] },

{ t:'story', img:'i56', h:'The first call', body:['Lon picked up and said, “Uh huh.” That Saturday we were on his couch, and Mel made popcorn.'] },

{ t:'section', grp:'Brandt’s Stories', img:'i19', h:'Brandt’s Stories', sub:'Brandt believed Montezuma’s gold lay in a tunnel beneath Three Lakes. This is how he went after it.' },

{ t:'story', img:'i20', h:'The treasure bug', body:['It started with a tape. A friend gave Brandt a recording of Kanab’s treasure legend, and he was hooked.'] },

{ t:'story', img:'i13', h:'The bottomless lake', body:['The legend pointed him to a lake that Kanab’s old-timers swore had no bottom. Brandt’s rope hit bottom at 35 feet, the exact depth a magazine said the Aztecs used to hide gold.'] },

{ t:'story', img:'i25', h:'The lost propeller', body:['So his lawyer, Tony Thurber, dove in. He came up with the boat propeller Brandt had lost, and news of a carving on the cliff underwater.'] },

{ t:'story', img:'tunnel-map', h:'The tunnel', body:['Below the carving, a tunnel ran into the cliff. Inside it was so dark the divers couldn’t see a landing light held at arm’s length.'] },

{ t:'story', img:'i47', h:'The Three Lakes Monster', body:['To clear the water, Brandt dumped in algicide. When the city caught him, he came back at ten at night and kicked the bags off the cliff, and a lake full of skinny-dippers ran for their cars.'] },

{ t:'story', img:'i49', h:'The fifty-fifty deal', body:['Then came the professionals. By June 1990 they were so sure of the gold that they signed a fifty-fifty deal with Brandt. “Today is the day!” they said, and swam into the tunnel.'] },

{ t:'video', yt:'vMEPPwPTPgw', start:2374, end:2588, len:'3:34', cue:'Clip: the divers (3:34)' },

{ t:'story', img:'i34b', h:'The Childs buy Three Lakes', body:['The divers quit, and the state wouldn’t let him drain the lake. So in September 1990 Brandt and Venice bought it, planning to blast their own tunnel in from the cliff.'] },

{ t:'story', img:'snail', h:'The golden snail', body:['Before the first blast, the government found an endangered snail in his pond, valued at $50,000 a snail. Brandt sued the United States Government and fought for four years.'] },

{ t:'story', img:'i55', h:'The ducks and geese', body:['In the middle of that fight, someone left twelve pet ducks and geese on the lake, and ducks eat snails. When officials came to shoot them, Brandt called the newspaper.'] },

{ t:'story', img:'i22', h:'The Dynamite Period', body:['Then came the dynamite. For two months Brandt and his son Robert blasted the cliff, and the rock soaked it up like rubber. Their biggest blast, 45 sticks, nearly ran the county recorder off the highway.'] },

{ t:'story', img:'i37b', h:'Timber Wolf', body:['The rock wouldn’t give, so Brandt went back to divers. Timber Wolf’s camera worked everywhere but near the tunnel, and his friend said a room under the cliff held a hundred dead: Aztec warriors, Brandt believed, left to guard the gold.'] },

{ t:'section', grp:'Lon’s Stories', h:'Lon’s Stories', sub:'Lon joined the hunt with his bulldozer. Here is what he saw.' },

{ t:'story', img:'i1', h:'The man on the knoll', body:['A technician scanning for metal saw a man in full Indian dress, holding a spear, on the knoll. Then he was gone. Over the cavern, the needle jumped to 100.'] },

{ t:'story', img:'i2', h:'The well driller', body:['A well driller broke into the main cavern 80 feet down and pulled up gold nuggets on his bit. That night he died of a heart attack. Three weeks later, so did his wife.'] },

{ t:'story', img:'tooth', h:'The hardest rock', body:['Dad offered Lon ten acres to bring his D8 CAT down and dig. The sandstone was so hard it wore out a $150 penetrating tooth every three days.'] },

{ t:'story', img:'d8', h:'Sand in December', body:['One Monday the D8’s engine died. The mechanic found sand all through it, while snow covered the ground.'] },

{ t:'story', img:'i50', h:'Wilf Blum', body:['A professional treasure diver named Wilf Blum dove the pond in December. That night the bedroom filled with propane, and Mel woke Lon just in time.'] },

{ t:'story', img:'i26', h:'The vomiting man', body:['A radar technician dragging his unit over the cavern collapsed, vomiting. His heart stopped, he fell into a coma, and the doctors never found a cause.'] },

{ t:'story', img:'i48', h:'Lightning', body:['A businessman’s drill bit jammed thirty feet down. That night, lightning killed a draft horse, blew out a water pipe, and buried the hole in sand.'] },

{ t:'story', img:'i37a', h:'The Rangertell', body:['Steve Schaffer’s friend stood over the cavern with a handheld detector and read gold, silver, diamonds, rubies and emeralds. A few weeks later he died in a motorcycle accident.'] },

{ t:'story', img:'i38', big:900, h:'Older than Montezuma', body:['Lon believes the treasure is far older than the Aztecs, and may hold records worth more than any gold.'] },

{ t:'video', grp:'Refuge and Resort', yt:'vMEPPwPTPgw', start:2832, end:2860, len:'0:28', cue:'Clip: Brandt in his own voice (0:28)' },

{ t:'statement', img:'i45', h:'“A place of refuge and resort.”', cue:'A place of refuge and resort', sub:'What Brandt wanted Three Lakes to be for his family.' },

{ t:'story', img:'i42', h:'Refuge', q:true,
  body:['“I purchased 550 acres with plenty of water here in southern Utah. I consider it a place of refuge, but I really am enjoying it in the meantime.”',
        'Pasture, horses, cows, chickens and a year of stored grain, for 47 children and grandchildren “and many more to come.”'],
  src2:'Brandt Child, letter to his family, July 26, 1992' },

{ t:'gallery', h:'Resort', sub:'A dock on the lake, and MOCTEZUMA: a roadside attraction to the legend, built with Lon.', imgs:['i34a','i35','i51','i54'] },

{ t:'gallery', h:'Treasure hunters', sub:'Brandt Child, and Lon Child. Like his father before him.', imgs:['i19','i58'] },

{ t:'plan', img:'i13', h:'Our plan to get Three Lakes back', sub:'Lon’s adventure ranch resort. We’re looking for investors and partners.',
  list:['Zip-lines and a ropes course','A via ferrata climbing route','Ice climbing on the winter ice walls','Disc golf','A lodge and cabins','Montezuma treasure tours'] },

{ t:'story', img:'cover-front', h:'The second book', body:['Everyone who buys this book goes on the list to hear first about the second.','It covers the last ten years, with much more historical research and stories from others who knew Brandt and Lon.'] },

{ t:'end', cue:'Questions' },
];

const cueTitle = s => s.cue || s.h || '';
