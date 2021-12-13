(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[1],{224:function(e,t,i){"use strict";e.exports=function(e,t){var i="calc(100% + 1px)";return e?{height:t?i:"auto",width:t?"auto":i,position:"absolute",margin:"auto",minHeight:"100%",minWidth:"100%",left:"-100%",right:"-100%",top:"-100%",bottom:"-100%"}:{width:t?i:"auto",height:t?"100%":i}}},249:function(e,t,i){"use strict";i.r(t);var o=i(2),s=i(0),a=i.n(s),r=i(13),p=i(7),n=i(17),d=i(21),l=i(61),y=i(224),c=i.n(y),h=function(e){function t(t){var i=e.call(this,t)||this;return i.pause=i.pause.bind(i),i.play=i.play.bind(i),i.playVideoIfNeeded=i.playVideoIfNeeded.bind(i),i.state={playedOnce:!1,loadVideo:t.loadVideo||t.playing,playing:!1,reactPlayerLoaded:!1,vimeoPlayerLoaded:!1,hlsPlayerLoaded:!1},i}return Object(o.c)(t,e),t.prototype.componentDidMount=function(){this.dynamiclyImportVideoPlayers()},t.prototype.dynamiclyImportVideoPlayers=function(){var e=this;r.a&&r.a.ReactPlayer||i.e(5).then(i.t.bind(null,225,7)).then((function(t){r.a.ReactPlayer=t.default,e.setState({reactPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.a&&r.a.Vimeo||!this.props.videoUrl||!this.props.videoUrl.includes("vimeo.com")||i.e(6).then(i.bind(null,244)).then((function(t){r.a.Vimeo={Player:t.default},e.setState({vimeoPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.a&&r.a.Hls||!this.isHLSVideo()||i.e(7).then(i.t.bind(null,247,7)).then((function(t){r.a.Hls=t.default,e.setState({hlsPlayerLoaded:!0}),e.playVideoIfNeeded()}))},t.prototype.isHLSVideo=function(){return this.props.videoUrl&&(this.props.videoUrl.includes("/hls")||this.props.videoUrl.includes(".m3u8"))},t.prototype.shouldUseHlsPlayer=function(){return this.isHLSVideo()&&!p.a.isiOS()},t.prototype.shouldForceVideoForHLS=function(){return this.isHLSVideo()&&p.a.isiOS()},t.prototype.UNSAFE_componentWillReceiveProps=function(e){(e.playing||e.firstUserInteractionExecuted)&&this.setState({loadVideo:!0}),this.playVideoIfNeeded(e)},t.prototype.componentDidUpdate=function(e){e.currentIdx!==this.props.currentIdx&&this.fixIFrameTabIndexIfNeeded(),"image"===e.type&&"video"===this.props.type&&this.dynamiclyImportVideoPlayers(),this.playVideoIfNeeded()},t.prototype.play=function(){this.props.playVideo(this.props.idx)},t.prototype.pause=function(){this.props.pauseVideo()},t.prototype.playVideoIfNeeded=function(e){void 0===e&&(e=this.props);try{e.playingVideoIdx!==this.props.idx||this.isPlaying||(this.videoElement=this.videoElement||r.a.document.querySelector("#video-"+this.props.id+" video"),this.videoElement&&(this.isPlaying=!0,this.videoElement.play(),p.a.isVerbose()&&console.log("[VIDEO] Playing video #"+this.props.idx,this.videoElement)))}catch(t){console.error("[VIDEO] Could not play video #"+this.props.idx,this.videoElement,t)}},t.prototype.createPlayerElement=function(){var e=this;if(!r.a||!r.a.ReactPlayer||!this.state.loadVideo&&!this.props.playing)return null;var t=r.a.ReactPlayer,i=this.props.style.ratio>=this.props.cubeRatio,s=this.props.styleParams.cubeImages&&"fill"===this.props.styleParams.cubeType,p=this.props.videoUrl?this.props.videoUrl:this.props.createUrl(n.a.urlSizes.RESIZED,n.a.urlTypes.VIDEO),d={controlsList:"nodownload",disablepictureinpicture:"true",muted:!this.props.styleParams.videoSound,preload:"metadata",style:c()(s,i),type:"video/mp4"};return Object(l.c)(this.props.styleParams)&&(d.poster=this.props.createUrl(n.a.urlSizes.SCALED,n.a.urlTypes.HIGH_RES)),a.a.createElement(t,{className:"gallery-item-visible video gallery-item",id:"video-"+this.props.id,width:"100%",height:"100%",url:p,alt:this.props.alt?this.props.alt:"untitled video",loop:!!this.props.styleParams.videoLoop,ref:function(t){return e.video=t},volume:this.props.styleParams.videoSound?.8:0,playing:this.props.playing,onEnded:function(){e.setState({playing:!1}),e.props.actions.eventsListener(n.a.events.VIDEO_ENDED,e.props)},onPause:function(){e.setState({playing:!1})},onError:function(t){e.props.actions.eventsListener(n.a.events.VIDEO_ERROR,Object(o.a)(Object(o.a)({},e.props),{videoError:t}))},playbackRate:Number(this.props.styleParams.videoSpeed)||1,onStart:function(){e.state.playedOnce||e.setState({playedOnce:!0})},onPlay:function(){e.props.actions.eventsListener(n.a.events.VIDEO_PLAYED,e.props),e.setState({playing:!0})},onReady:function(){e.playVideoIfNeeded(),e.fixIFrameTabIndexIfNeeded(),e.props.actions.setItemLoaded(),e.setState({ready:!0})},controls:this.props.styleParams.showVideoControls,config:{file:{attributes:d,forceHLS:this.shouldUseHlsPlayer(),forceVideo:this.shouldForceVideoForHLS()}},key:"video-"+this.props.id})},t.prototype.fixIFrameTabIndexIfNeeded=function(){if(this.props.isExternalVideo){var e=r.a.document&&r.a.document.getElementById("video-"+this.props.id),t=e&&e.getElementsByTagName("iframe"),i=t&&t[0];i&&(this.props.currentIdx===this.props.idx?i.setAttribute("tabIndex","0"):i.setAttribute("tabIndex","-1"))}},t.prototype.getVideoContainerStyles=function(){var e=Object(o.a)({},this.props.imageDimensions);return p.a.deviceHasMemoryIssues()||this.state.ready||!Object(l.c)(this.props.styleParams)?e.backgroundColor="black":e.backgroundImage="url("+this.props.createUrl(n.a.urlSizes.RESIZED,n.a.urlTypes.HIGH_RES)+")",e},t.prototype.render=function(){var e=this.props,t=e.videoPlaceholder,i=e.hover,o="gallery-item-content gallery-item-visible gallery-item-preloaded gallery-item-video gallery-item video-item"+(p.a.isiPhone()?" ios":"");this.state.playing&&(o+=" playing"),this.state.playedOnce&&this.state.ready&&(o+=" playedOnce");var s=a.a.createElement("div",{className:o,"data-hook":"video_container-video-player-element",key:"video_container-"+this.props.id,style:this.getVideoContainerStyles()},this.createPlayerElement(),this.props.videoPlayButton);return a.a.createElement("div",{key:"video-and-hover-container"+this.props.idx},s,Object(l.c)(this.props.styleParams)&&t,i)},t}(d.a);t.default=h}}]);
//# sourceMappingURL=proGallery_videoItem.de12355a.chunk.js.map