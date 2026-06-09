let tracks = JSON.parse(localStorage.getItem('mysound_tracks') || '[]');
let currentIdx = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let volume = 0.8;
let selectedEmoji = '🎵';

const audio = document.getElementById('audioEl');
audio.volume = volume;

if (tracks.length === 0) {
    tracks = [
        { id: 1, title: 'Me Enxergou na Minha Tormenta', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/lindo-momento.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 2, title: 'Fhop Music - Único', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/fhop-unico.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 3, title: 'Quebra o Silêncio', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/quebra-o-silencio.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 4, title: 'Quem é Esse', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/quem-e-esse.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 5, title: 'Até Que o Senhor Venha', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/ate-que-o-senhor-venha.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 6, title: 'O Lamento de Israel', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/o-lamento-de-israel.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 7, title: 'Colossenses e Suas Linhas de Amor', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/colossenses.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 8, title: 'Tu És + Águas Purificadoras', artist: 'Paulo Vitor', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/tu-es.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 9, title: 'Solo Um Novo Dia', artist: 'Ageu Garrida', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/um-novo-dia.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 10, title: 'Como Flecha - Guitar Cover', artist: 'Ageu Garrida', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/como-flecha.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 11, title: 'Solo Há Poder', artist: 'Ageu Garrida', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/ha-poder.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 12, title: 'Guitar Cam Um Novo Dia', artist: 'Ageu Garrida', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/novo-dia.mp3', liked: false, playlist: 'Guitar Covers' },
        { id: 13, title: 'Lindo Momento', artist: 'Rony Hanoff', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/lindo-momento-rony.mp4', liked: false, playlist: 'Guitar Covers' },
        { id: 14, title: 'Você Tem Valor', artist: 'Rony Hanoff', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/voce-tem-valor.mp4', liked: false, playlist: 'Guitar Covers' },
        { id: 15, title: 'Aonde Está Deus', artist: 'Rony Hanoff', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/aonde-esta-Deus.mp4', liked: false, playlist: 'Guitar Covers' },
        { id: 16, title: 'Deus de Promessas', artist: 'Rony Hanoff', genre: 'Gospel', year: '2026', emoji: '🎸', url: './music/Deus-de-promessas.mp4', liked: false, playlist: 'Guitar Covers' },
        { id: 17, title: 'All of Me', artist: 'Jhon Legend', genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/all-of-me.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 18, title: "If l Ain't Got You", artist: 'Alicia Keys', genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/alicia-keys.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 19, title: "Thank God | Found You - Make It Last Remix", artist: 'Mariah Carey, Joe, Nas', genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/thank-god.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 20, title: "Emotion", artist: "Destiny's Child", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/emotion.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 21, title: "Like I'm Gonna Lose You (Lyrics) ft. John Legend", artist: "Meghan Trainor", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/meghan-trainor.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 22, title: "With You", artist: "Chris Brown", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/with-you.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 23, title: "Body Party", artist: "Ciara", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/body-party.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 24, title: "Let Me Love You", artist: "Mario", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/let-me-love-you.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 25, title: "My Boo", artist: "Usher ft. Alicia Keys", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/my-boo.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 26, title: "I Wanna Know", artist: "Joe", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/i-wanna-know.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 27, title: "Everything To Me", artist: "Monica", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/everything-to-me.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 28, title: "Differences", artist: "Ginuwine", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/differences.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 29, title: "So Easy (To Fall In Love)", artist: "Olivia Dean", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/olivia-dean.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 30, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/bruno-mars.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 31, title: "Yellow", artist: "Coldplay", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/yellow.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 32, title: "Iris", artist: "Goo Goo Dolls", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/iris.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 33, title: "Risk It All", artist: "Bruno Mars", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/risk-it-all.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 34, title: "BIRDS OF A FEATHER", artist: "Billie Eilish", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/billie-eilish.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 35, title: "Always Remember Us This Way", artist: "Lady Gaga", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/lady-gaga.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 36, title: "Beautiful Things", artist: "Benson Boone", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/beautiful-things.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 37, title: "Sailor Song", artist: "Gigi Perez", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/sailor-song.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 38, title: "Rihanna", artist: "Love On The Brain", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/love-on-the-brain.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 39, title: "LANDOKMAI, will hyde", artist: "Backflips.", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/backflips.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 40, title: "Remind Me", artist: "Faust", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/remind-me.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 41, title: "Snooze", artist: "SZA", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/snooze.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 42, title: "Here With Me", artist: "d4vd", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/here-with-me.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 43, title: "My Love Mine All Mine", artist: "Mitski", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/mitski.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 44, title: "The Scientist", artist: "Coldplay", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/the-scientist.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 45, title: "Cliché", artist: "Nicole Issa", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/cliche.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 46, title: "Say You Won't Let Go", artist: "James Arthur", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/james-arthur.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 47, title: "Señorita", artist: "Shawn Mendes, Camila Cabello", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/senorita.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 48, title: "Big Girls Don't Cry", artist: "Fergie", genre: 'Internacional', year: '2026', emoji: '❤️', url: './music/fergie.mp3', liked: false, playlist: 'Valentines Day - R&B Love' },
        { id: 49, title: "Going Under", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/going-under.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 50, title: "Bring Me To My Life", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/bring-me-to-my-life.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 51, title: "Everybody's Fool", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/everybodys-fool.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 52, title: "My Immortal", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/my-immortal.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 53, title: "Haunted", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/haunted.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 54, title: "Tourniquet", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/tourniquet.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 55, title: "Imaginary", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/imaginary.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 56, title: "Taking Over Me", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/taking-over-me.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 57, title: "Hello", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/hello.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 58, title: "My Last Breath", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/my-last-breath.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 59, title: "Whisper", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/whisper.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 60, title: "My Immortal - Band Version", artist: "Evanescence", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/my-immortal-band.mp3', liked: false, playlist: 'Evanescence - Fallen' },
        { id: 61, title: "My Sacrifice", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/my-sacrifice.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 62, title: "Higher", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/higher.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 63, title: "One Last Breath", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/one-last-breath.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 64, title: "My Own Prison", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/my-own-prison.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 65, title: "With Arms Wide Open", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/with-arms.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 66, title: "Inside Us All", artist: "Creed", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/inside-us-all.mp3', liked: false, playlist: 'Creed - As Melhores' },
        { id: 67, title: "Alive", artist: "Pearl Jam", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/alive.mp3', liked: false, playlist: 'Pearl Jam - As Melhores' },
        { id: 68, title: "Black", artist: "Pearl Jam", genre: 'Rock', year: '2026', emoji: '🤘', url: './music/black.mp3', liked: false, playlist: 'Pearl Jam - As Melhores' },
        { id: 69, title: "Anderson Freire - Medley", artist: "Anderson Freire", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/anderson-medley.mp3', liked: false, playlist: 'Louvores' },
        { id: 70, title: "Eu Vou Orar - (Ao Vivo)", artist: "Nair Nani", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/eu-vou-orar.mp3', liked: false, playlist: 'Louvores' },
        { id: 71, title: "Atos 2 + Ele é Exaltado - (Ao Vivo)", artist: "Gabriel Guedes", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/atos-2-ele-exaltado.mp3', liked: false, playlist: 'Louvores' },
        { id: 72, title: "Yahweh", artist: "One Service", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/yahweh.mp3', liked: false, playlist: 'Louvores' },
        { id: 73, title: "João 20 + Pra Sempre + Porque Ele Vive", artist: "Ezequiel Oliveira", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/joao-20.mp3', liked: false, playlist: 'Louvores' },
        { id: 74, title: "Graça", artist: "Israel Salazar", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/graca.mp3', liked: false, playlist: 'Louvores' },
        { id: 75, title: "A Vitória da Cruz", artist: "Israel Salazar", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/a-vitoria-da-cruz.mp3', liked: false, playlist: 'Louvores' },
        { id: 76, title: "Clamo Jesus", artist: "Paulo Cesar Baruk, Marsena Oficial", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/clamo-Jesus.mp3', liked: false, playlist: 'Louvores' },
        { id: 77, title: "Há Poder", artist: "Fhop Music", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/ha-poder-musica.mp3', liked: false, playlist: 'Louvores' },
        { id: 78, title: "IMPERFEITO", artist: "Coral Canto Jovem e Rayssa Andreoli", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/imperfeito.mp3', liked: false, playlist: 'Louvores' },
        { id: 79, title: "Digno do Louvor (Worthy Of It All) (Digno de Tudo)", artist: "RESGATE MUSIC", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/digno-do-louvor.mp3', liked: false, playlist: 'Louvores' },
        { id: 80, title: "Na unção de Deus", artist: " Attos2 Worship [COVER] Elaine de Jesus", genre: 'Gospel', year: '2026', emoji: '🙏', url: './music/na-uncao-de-Deus.mp3', liked: false, playlist: 'Louvores' },

    ];
    saveTracks();
}

function saveTracks() {
    localStorage.setItem('mysound_tracks', JSON.stringify(tracks));
}

function render(list) {
    const tl = document.getElementById('trackList');
    const sp = document.getElementById('sidebarPlaylist');
    const countEl = document.getElementById('trackCount');
    const visEl = document.getElementById('visibleCount');

    countEl.textContent = `${tracks.length} faixa${tracks.length !== 1 ? 's' : ''} na sua biblioteca`;
    visEl.textContent = list.length !== tracks.length ? `${list.length} resultados` : '';

    tl.innerHTML = list.map((t) => `
    <div class="track-item ${currentIdx !== -1 && tracks[currentIdx]?.id === t.id ? 'active' : ''}" onclick="playTrack(${tracks.indexOf(t)})">
      <div class="track-num">
        ${currentIdx !== -1 && tracks[currentIdx]?.id === t.id
            ? `<div class="eq ${isPlaying ? '' : 'paused'}"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`
            : tracks.indexOf(t) + 1}
      </div>
      <div class="track-cover">${t.emoji}</div>
      <div class="track-meta">
        <div class="track-name">${t.title}</div>
        <div class="track-artist-name">${t.artist}</div>
      </div>
      <div class="track-duration">${t.duration || '—'}</div>
      <button class="track-like ${t.liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike(${tracks.indexOf(t)})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="${t.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
  `).join('');

    sp.innerHTML = tracks.map((t, i) => `
    <div class="sidebar-track ${currentIdx === i ? 'active' : ''}" onclick="playTrack(${i})">
      <div class="sidebar-track-num">${currentIdx === i ? '▶' : i + 1}</div>
      <div class="sidebar-thumb">${t.emoji}</div>
      <div class="sidebar-track-info">
        <div class="sidebar-track-title">${t.title}</div>
        <div class="sidebar-track-artist">${t.artist}</div>
      </div>
    </div>
  `).join('');
}

function filterTracks() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const filtered = q ? tracks.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        (t.genre || '').toLowerCase().includes(q)
    ) : tracks;
    render(filtered);
}

function playTrack(idx) {
    if (idx < 0 || idx >= tracks.length) return;
    currentIdx = idx;
    const t = tracks[idx];

    document.getElementById('heroCover').textContent = t.emoji;
    document.getElementById('heroTitle').textContent = t.title;
    document.getElementById('heroArtist').textContent = t.artist;
    document.getElementById('heroGenre').textContent = t.genre || '—';
    document.getElementById('heroYear').textContent = t.year || '—';

    document.getElementById('playerThumb').textContent = t.emoji;
    document.getElementById('playerName').textContent = t.title;
    document.getElementById('playerArtist').textContent = t.artist;
    updateHeartBtn();

    if (t.url) {
        audio.src = t.url;
        audio.play().then(() => { isPlaying = true; updatePlayBtn(); }).catch(() => { simulatePlay(); });
    } else {
        simulatePlay();
    }
    render(tracks);
}

function simulatePlay() {
    isPlaying = true;
    updatePlayBtn();
    document.getElementById('totalTime').textContent = '3:30';
    clearInterval(window._simTimer);
    let sec = 0;
    const total = 210;
    window._simTimer = setInterval(() => {
        if (!isPlaying) return;
        sec++;
        if (sec >= total) { sec = 0; nextTrack(); return; }
        document.getElementById('currentTime').textContent = fmt(sec);
        document.getElementById('progressFill').style.width = (sec / total * 100) + '%';
    }, 1000);
}

function togglePlay() {
    if (currentIdx === -1) { if (tracks.length) playTrack(0); return; }
    if (audio.src && audio.src !== window.location.href) {
        isPlaying ? audio.pause() : audio.play();
        isPlaying = !isPlaying;
    } else {
        isPlaying = !isPlaying;
    }
    updatePlayBtn();
    render(tracks);
}

function updatePlayBtn() {
    const icon = document.getElementById('playIcon');
    if (isPlaying) {
        icon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    } else {
        icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }
    document.getElementById('eqBars').classList.toggle('paused', !isPlaying);
}

function nextTrack() {
    if (!tracks.length) return;
    let next;
    if (isShuffle) {
        next = Math.floor(Math.random() * tracks.length);
    } else {
        next = (currentIdx + 1) % tracks.length;
    }
    playTrack(next);
}

function prevTrack() {
    if (!tracks.length) return;
    const prev = (currentIdx - 1 + tracks.length) % tracks.length;
    playTrack(prev);
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    document.getElementById('shuffleBtn').classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    audio.loop = isRepeat;
    document.getElementById('repeatBtn').classList.toggle('active', isRepeat);
}

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('currentTime').textContent = fmt(audio.currentTime);
    document.getElementById('totalTime').textContent = fmt(audio.duration);
});

audio.addEventListener('ended', () => {
    if (!isRepeat) nextTrack();
});

audio.addEventListener('play', () => { isPlaying = true; updatePlayBtn(); render(tracks); });
audio.addEventListener('pause', () => { isPlaying = false; updatePlayBtn(); render(tracks); });

// ── Barra de progresso: suporte a mouse E toque ──
function getProgressPct(bar, clientX) {
    const rect = bar.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
}

function applySeek(pct) {
    if (audio.duration) {
        audio.currentTime = pct * audio.duration;
    } else {
        const total = 210;
        const sec = Math.floor(pct * total);
        document.getElementById('currentTime').textContent = fmt(sec);
        document.getElementById('progressFill').style.width = (pct * 100) + '%';
    }
}

const progressBar = document.getElementById('progressBar');

// Mouse
progressBar.addEventListener('click', (e) => {
    applySeek(getProgressPct(progressBar, e.clientX));
});

let isSeeking = false;
progressBar.addEventListener('touchstart', (e) => {
    isSeeking = true;
    e.preventDefault();
    applySeek(getProgressPct(progressBar, e.touches[0].clientX));
}, { passive: false });

progressBar.addEventListener('touchmove', (e) => {
    if (!isSeeking) return;
    e.preventDefault();
    applySeek(getProgressPct(progressBar, e.touches[0].clientX));
}, { passive: false });

progressBar.addEventListener('touchend', () => { isSeeking = false; });

function setVolume(e) {
    const bar = document.getElementById('volSlider');
    volume = Math.max(0, Math.min(1, e.offsetX / bar.offsetWidth));
    audio.volume = volume;
    document.getElementById('volFill').style.width = (volume * 100) + '%';
    isMuted = volume === 0;
    updateVolIcon();
}

function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    updateVolIcon();
}

function updateVolIcon() {
    const icon = document.getElementById('volIcon');
    if (isMuted || volume === 0) {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>`;
    } else {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
    }
}

function toggleLike(idx) {
    tracks[idx].liked = !tracks[idx].liked;
    saveTracks();
    updateHeartBtn();
    filterTracks();
}

function toggleLikeCurrent() {
    if (currentIdx === -1) return;
    toggleLike(currentIdx);
}

function updateHeartBtn() {
    const btn = document.getElementById('playerHeart');
    const t = tracks[currentIdx];
    if (!t) return;
    btn.classList.toggle('liked', t.liked);
    btn.querySelector('svg').setAttribute('fill', t.liked ? 'currentColor' : 'none');
}

function openModal() {
    document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}
function closeModalOutside(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function selectEmoji(el, emoji) {
    document.querySelectorAll('.emoji-opt').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    selectedEmoji = emoji;
}

function addTrack() {
    const title = document.getElementById('inputTitle').value.trim();
    const artist = document.getElementById('inputArtist').value.trim();
    if (!title) { document.getElementById('inputTitle').focus(); return; }
    const t = {
        id: Date.now(),
        title,
        artist: artist || 'Desconhecido',
        genre: document.getElementById('inputGenre').value.trim(),
        year: document.getElementById('inputYear').value.trim(),
        url: document.getElementById('inputUrl').value.trim(),
        emoji: selectedEmoji,
        liked: false
    };
    tracks.push(t);
    saveTracks();
    closeModal();
    ['inputTitle', 'inputArtist', 'inputGenre', 'inputYear', 'inputUrl'].forEach(id => document.getElementById(id).value = '');
    render(tracks);
}

function setNav(el) {
    document.querySelectorAll('.nav-item').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
}

function fmt(s) {
    const sec = Math.floor(s);
    return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw.js')
            .then((reg) => console.log('[SW] Registrado:', reg.scope))
            .catch((err) => console.warn('[SW] Falhou:', err));
    });
}

function renderPlaylists() {

    const names = [...new Set(tracks.filter(t => t.playlist).map(t => t.playlist))];
    if (!names.length) return;

    let container = document.getElementById('playlistSection');
    if (!container) {
        container = document.createElement('div');
        container.id = 'playlistSection';
        document.querySelector('.section-header').insertAdjacentElement('beforebegin', container);
    }

    container.innerHTML = `
        <div class="section-header" style="margin-bottom:16px;">
            <div class="section-title">Playlists</div>
        </div>
        ${names.map(name => {
        const songs = tracks.filter(t => t.playlist === name);
        return `
            <div class="playlist-box" id="box-${name.replace(/\s/g, '-')}" onclick="togglePlaylist(this)">
                <div class="playlist-box-header">
                    <div class="playlist-box-info">
                        <span class="playlist-box-emoji">🎵</span>
                        <div>
                            <div class="playlist-box-name">${name}</div>
                            <div class="playlist-box-count">${songs.length} músicas</div>
                        </div>
                    </div>
                    <span class="playlist-chevron">▾</span>
                </div>
                <div class="playlist-tracks" style="display:none;">
                    ${songs.map((t) => `
                    <div class="track-item ${currentIdx !== -1 && tracks[currentIdx]?.id === t.id ? 'active' : ''}"
                         onclick="event.stopPropagation(); playTrack(${tracks.indexOf(t)})">
                        <div class="track-num">${tracks.indexOf(t) + 1}</div>
                        <div class="track-cover">${t.emoji}</div>
                        <div class="track-meta">
                            <div class="track-name">${t.title}</div>
                            <div class="track-artist-name">${t.artist}</div>
                        </div>
                        <div class="track-duration">${t.duration || '—'}</div>
                        <button class="track-like ${t.liked ? 'liked' : ''}"
                            onclick="event.stopPropagation(); toggleLike(${tracks.indexOf(t)})">
                            <svg width="14" height="14" viewBox="0 0 24 24"
                                fill="${t.liked ? 'currentColor' : 'none'}"
                                stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </button>
                    </div>`).join('')}
                </div>
            </div>`;
    }).join('')}
    `;
}

function togglePlaylist(box) {
    const tracks_div = box.querySelector('.playlist-tracks');
    const chevron = box.querySelector('.playlist-chevron');
    const open = tracks_div.style.display === 'block';
    tracks_div.style.display = open ? 'none' : 'block';
    chevron.style.transform = open ? '' : 'rotate(180deg)';
}

const playlistStyle = document.createElement('style');
playlistStyle.textContent = `
.playlist-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.2s;
}
.playlist-box:hover { border-color: rgba(232,255,71,0.3); }
.playlist-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
}
.playlist-box-info { display: flex; align-items: center; gap: 14px; }
.playlist-box-emoji {
    width: 48px; height: 48px; border-radius: 10px;
    background: #1e1e2a; display: flex; align-items: center;
    justify-content: center; font-size: 1.5rem;
}
.playlist-box-name { font-size: 0.95rem; font-weight: 500; }
.playlist-box-count { font-size: 0.75rem; color: var(--muted); margin-top: 2px; }
.playlist-chevron {
    color: var(--muted); font-size: 1.1rem;
    transition: transform 0.25s;
}
.playlist-tracks { padding: 0 8px 8px; }
`;
document.head.appendChild(playlistStyle);

render(tracks);
renderPlaylists();