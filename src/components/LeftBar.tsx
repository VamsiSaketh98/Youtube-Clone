// let total = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const LeftBar = () => {
    return <div className="bg-gray-950 w-48 hidden md:block">
      <BarWithIcon />
      <BarWithShorts />
      <BarWithIcon />
      <Line />
       You 
      <BarWithIcon />
      <BarWithHistory />
      <BarWithPlaylist />
      <BarWithYourVideos />
      <BarWithWatchLater />
      <BarWithlikes />
      <Line />
        Explore
      <BarWithTrending />
      <BarWithShopping />
      <BarWithMusic />
      <Line />
    </div>
}

export const Line = () => {
    return <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20	">
    <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{width: "100%"}}></div>
  </div>
}

function BarWithIcon() {
    return   <div className="overflow-x-visible">
    <BarElement title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27z"/></svg>
} />
</div>
}
function BarWithShorts() {
    return   <div className="overflow-x-visible">
    <BarElement title={"Shorts"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"/></svg>
} />
</div>
}
function BarWithHistory() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"History"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256.25 16A240 240 0 0 0 88 84.977V16H56v128h128v-32h-77.713A208 208 0 0 1 256.25 48C370.8 48 464 141.2 464 255.75S370.8 463.5 256.25 463.5S48.5 370.3 48.5 255.75h-32a239.75 239.75 0 0 0 409.279 169.529A239.75 239.75 0 0 0 256.25 16"/><path fill="currentColor" d="M240 111.951L239.465 288H368v-32h-96.437L272 112.049z"/></svg>
    } />
</div>
}

function BarWithPlaylist() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Playlist"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h116a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m68 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m143.49-52.55a12 12 0 0 1-14.94 8L212 128.13V192a36 36 0 1 1-24-33.94V112a12 12 0 0 1 15.45-11.49l40 12a12 12 0 0 1 8.04 14.94M188 192a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/></svg>
    } />
</div>
}

function BarWithYourVideos() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Your Videos"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z"/><path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"/></svg>
    } />
</div>
}

function BarWithWatchLater() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Watch Later"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7z"/></svg>
    } />
</div>
}

function BarWithlikes() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Likes"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>
    } />
</div>
}
function BarWithTrending() {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Trending"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.15.555a.389.389 0 0 0-.399 0a.26.26 0 0 0-.06.34c1.227 2.123 1.486 5.016-.19 6.611a5.505 5.505 0 0 1-1.495-1.994a3.88 3.88 0 0 0-1.995 3.49a4.688 4.688 0 0 0 4.987 4.488c3.211 0 4.877-1.994 4.986-4.488C12.114 6.01 9.99 2.33 6.15.555"/></svg>
    } />
</div>
}
function BarWithShopping () {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Shopping"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>
    } />
</div>
}

function BarWithMusic () {
    return   <div className="overflow-x-visible">
 
    <BarElement title={"Music"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.97 21.5a4.03 4.03 0 1 0 0-8.06a4.03 4.03 0 0 0 0 8.06ZM12 17.47V2.5m0 0l6.39 1.82a2.303 2.303 0 0 1 1.67 2.21v.968a2.303 2.303 0 0 1-2.878 2.222L12 8.258"/></svg>
    } />
</div>
}


function BarElement({icon, title}: {icon: any; title: string;}) {
    return <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex w-48 p-2 m-2 cursor-pointer">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {title}
        </div>
    </div>
}