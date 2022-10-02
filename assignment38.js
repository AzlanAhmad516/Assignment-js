var album = make_Album("Talha Anjum","Gumaan");
console.log(album);
var album2 = make_Album("Talha Yunus","Afsanay");
console.log(album2);
var album3 = make_Album("Atif Aslam","kahani",10);
console.log(album3);

function make_Album(artistname, albumtitle, NoOFTracks = 0){
    let o = {
        "artist" : artistname,
        "title" : albumtitle
    };
    if(NoOFTracks){
        o["tracks"] = NoOFTracks;
    }
    return o;
}