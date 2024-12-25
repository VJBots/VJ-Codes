const halflink = window.location.href;
const Link = halflink.replace("/s/", "/dl/");

function vlc_player() {
    const openLink = encodeURIComponent(Link); // Encode the link
    const openVlc = vlc://${openLink};
    window.location.href = openVlc;
}
     
function mx_player() {
    const openLink = encodeURIComponent(Link); // Encode the link
    const openMx = intent:${openLink}#Intent;package=com.mxtech.videoplayer.ad;end;
    window.location.href = openMx;
}
        
function playit_player() {
    const openLink = encodeURIComponent(Link); // Encode the link
    const openPlayit = playit://playerv2/video?url=${openLink};
    window.location.href = openPlayit;
 }
    
function s_player() {
    const openLink = Link;
    const openSplayer = intent:${openLink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end;
    window.location.href = openSplayer;
}
     
function km_player() {
    const openLink = Link;
    const openKmplayer = intent:${openLink}#Intent;package=com.kmplayer;end;
    window.location.href = openKmplayer;
}
        
function hd_player() {
    const openLink = Link;
    const openHDplayer = intent:${openLink}#Intent;package=uplayer.video.player;end;
    window.location.href = openHDplayer;
}
     
function lazyDownload() {
    const openLink = Link;
    window.location.href = openLink;
}
