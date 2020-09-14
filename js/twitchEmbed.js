var embed = new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "monstercat",
    layout: "video",
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["embed.example.com", "othersite.example.com"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
  });